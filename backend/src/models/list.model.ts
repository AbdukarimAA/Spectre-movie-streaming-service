import mongoose, {Schema, model, connect, Types} from 'mongoose';

const listSchema = new Schema<IList>({
    title: {type: String, required: true, unique: true},
    type: {type: String},
    genre: {type: String},
    content: [String],
}, {timestamps: true});

export interface IList extends mongoose.Document{
    id: string,
    title: string,
    type: string,
    genre: string,
    content?: Types.Array<string>,
    _doc?: any
}

export default mongoose.model('List', listSchema);


