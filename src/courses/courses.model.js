import { Schema, model } from "mongoose";

const courseSchema = Schema(
    {
        name:{
            type: String,
            maxLenght:[25, 'Cant be overcome 25 characters'],
            required:[true,'Name is requiered']
        },
        description:{
            type: String,
            maxLenght:[100, 'Cant be overcome 100 characters'],
            required:[true,'Description is requiered']
        }
    }
)

export default model('Courses', courseSchema)