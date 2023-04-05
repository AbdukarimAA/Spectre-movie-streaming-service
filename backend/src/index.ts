import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from "path";
import {fileURLToPath} from "url";
import cookieParser from 'cookie-parser';
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import movieRoute from "./routes/movie.route.js";
import movieReviewRoute from "./routes/movieReview.route.js";
import actorRoute from "./routes/actor.route.js";
import actorReviewRoute from "./routes/actorReview.route.js";

const app = express();

const __filename: string = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: __dirname+'/.env' });
mongoose.set('strictQuery', true);

function handleError(e: any) {
    console.log(`${e} didn't connect`)
}

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO as string);
        console.log("connected to mongoDB")
    } catch (error) {
        handleError(error);
    }
};
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/movie', movieRoute);
app.use('/api/movieReview', movieReviewRoute);
app.use('/api/actor', actorRoute);
app.use('/api/actorReview', actorReviewRoute);

app.listen(process.env.PORT, () => {
    connect();
    console.log('server is running')
})