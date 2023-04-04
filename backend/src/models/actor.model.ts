import mongoose, {Schema, model, connect, Types} from 'mongoose';

const actorSchema = new Schema<IActor>({
    nameRus: {type: String, required: true},
    nameEng: {type: String, required: true},
    totalMovies: {type: Number, required: true},
    img: {type: String, required: true},
    shortBio: {type: String, required: true},
    bio: {type: String, required: true},
    fullBio: {type: String, required: true},
    reviews: [String],
    movies: [String],
}, {timestamps: true});

export interface IActor extends mongoose.Document{
    id: string,
    nameRus: string,
    nameEng: string,
    totalMovies: number,
    img: string,
    shortBio: string,
    bio: string,
    fullBio: string,
    reviews?: Types.Array<string>,
    movies?: Types.Array<string>,
    _doc?: any
}

export default mongoose.model('Actor', actorSchema);


