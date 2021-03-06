import { model,Document, Model, Schema } from "mongoose";

export enum Type{
    Happy="Happy",
    Sad="Sad",
    Exciting="Exciting",
    Scary="Scary"
}

export interface IDream extends Document {
    title:string;
    description:string;
    date:Date;
    type:Type;
}
const DreamSchema: Schema = new Schema({
    title : { type:String, required:true, lowercase:true},
    description : { type:String, required:true},
    date : { type:Date, required:true},
    type : { type:String, enum:Type, required:true }
})

export const Dream = model<IDream>('Dream',DreamSchema);