import express, {Request, Response, NextFunction} from "express";
import User, {IUser} from "../models/user.model.js";
import {createError} from "../utils/handleError.js";
import bcrypt from "bcrypt";
// import {sendEmail} from "../middleware/mailConfig.js";
import nodemailer from "nodemailer";

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    if(req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 8);
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});

        res.status(200).send(updatedUser);
    } catch (error: any) {
        next(error);
    }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query.new;
    // if(req.isAdmin) {
        try {
            const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
            res.status(200).send(users);
        } catch (error: any) {
            next(error);
        }
    // } else {
    //     return next(createError(403, 'You are not allowed to see all users'));
    // }
}

export const getStats = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const today = new Date();
        const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const lastYear = today.setFullYear(today.setFullYear(0) - 1);

        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);

        res.status(200).send(data);
    } catch (error: any) {
        next(error);
    }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id);
        // const userExists = await User.findOne({_id: req.params.id});
        const {password, ...info} = user!._doc
        res.status(200).send(info);
    } catch (error: any) {
        next(error);
    }
};

export const addLikedUserMovies = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id);

        if(user?.likedMovies.includes(req.body.movieId)) return next(createError(403, 'Movie is already Liked'));
        if(!user) return next(createError(404, 'User not found'));

        user!.likedMovies.push(req.body.movieId);
        await user.save();

        res.status(200).send(user.likedMovies);
    } catch (error: any) {
        next(error);
    }
};

export const deleteLikedUserMovies = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id); //test

        if(!user) return next(createError(404, 'User not found'));

        user!.likedMovies = [];
        await user.save();

        res.status(200).send('All saved Movies deleted');
    } catch (error: any) {
        next(error);
    }
}

export const deleteOneLikedUserMovies = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id);

        if(!user) return next(createError(404, 'User not found'));

        for (let i = 0, len = user!.likedMovies.length; i < len; i++) {
            if (user!.likedMovies[i]._id.toString() === req.params.movieId) {
                user!.likedMovies.splice(i, 1);
                break;
            }
        }

        await User.findByIdAndUpdate(req.params.id);
        await user.save();
        res.status(200).send('Saved Movie has been deleted');
    } catch (error: any) {
        next(error);
    }
}

export const getLikedUserMovies = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id).populate('likedMovies');
        if(!user) return next(createError(404, 'User not found'));

        res.status(200).send(user!.likedMovies);
    } catch (error: any) {
        next(error);
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id);

        if(req.isAdmin) {
            return next(createError(403, 'Admins cannot delete own accounts'));
        }

        if(req.userId !== user!._id.toString()) {
            return next(createError(403, "You can delete your account only"));
        }
        await User.findByIdAndDelete(req.params.id);

        res.status(200).send('User deleted successfully');
    } catch (error: any) {
        next(error);
    }
}

export const saveWatchTime = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id);
        const { movieId, timeStopped } = req.body;

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const watchlistItem: any = user!.watchList.find((item: any) => item!.movieId.toString() === movieId);
        console.log(watchlistItem)

        if (watchlistItem) {
            watchlistItem!.timeStopped = timeStopped;
        } else {
            user!.watchList.push({ movieId, timeStopped });
        }

        await User.findByIdAndUpdate(req.params.id);
        await user!.save();

        res.status(200).json({ message: 'Watchlist item saved successfully' });

    } catch (error: any) {
        next(error);
    }
}

export const startMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id);
        const { movieId } = req.body;

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const watchlistItem: any = user!.watchList.find((item: any) => item!.movieId.toString() === movieId);

        watchlistItem ? watchlistItem!.timeStopped = 0 : user!.watchList.push({ movieId, timeStopped: 0 })

        await user!.save();

        return res.status(200).json({ message: 'Movie started from the beginning' });

    } catch (error: any) {
        next(error);
    }
}

export const resumeMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: IUser | null = await User.findById(req.params.id);
        const { movieId, timeStopped } = req.body;

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const watchlistItem: any = user!.watchList.find((item: any) => item!.movieId.toString() === movieId);

        const movieIndex = user!.watchList.findIndex((movie: any) => {
            return movie!.movieId.toString() === movieId!.toString();
        });

        if (movieIndex === -1) {
            return res.status(404).json({ message: 'Movie not found in unfinished movies' });
        }

        user!.watchList[movieIndex].timeStopped = watchlistItem.timeStopped;

        await user!.save();

        return res.status(200).json({ message: 'Movie resumed from paused time: ', watchlistItem});

    } catch (error: any) {
        next(error);
    }
}

export const sendMailFeedBack = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, subject, message } = req.body;
        const mailConfig = {
            host: 'smtp.gmail.com',
            port: 465,
            service: "gmail",
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
            from: email,
            to: process.env.EMAIL
        }

        const transporter = nodemailer.createTransport(mailConfig);

        console.log(email)
        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: `Message sent by ${email}, ${subject}`,
            text: message,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: 'Something went wrong' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: 'Email sent' });
            }
        });

        // return res.status(200).send('Email sent successfully');
    } catch (error: any) {
        next(error);
    }
}