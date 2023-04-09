import mongoose, { Schema, model, connect } from 'mongoose';

const userSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    img: {type: String, required: false},
    age: {type: String, required: true},
    phone: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false},
    likedMovies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
}, {timestamps: true});

export interface IUser extends mongoose.Document{
    id: string,
    username: string,
    email: string,
    password: string,
    img?: string,
    age: string,
    phone: string,
    isAdmin: boolean,
    likedMovies: any
    _doc?: any
}

export default mongoose.model('User', userSchema);


