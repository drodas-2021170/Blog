import {Schema, model} from 'mongoose'

const commentSchema = Schema(
    {
        author:{
            type: String,
            maxLenght:[30, 'Cant be overcome 25 characters'],
            required:[true,'Author is requiered']
        },
        content:{
            type: String,
            maxLenght:[200, 'Cant be overcome 100 characters'],
            required:[true,'Content is requiered']
        },
        publication:{
            type: Schema.Types.ObjectId,
            ref:'Publication',
        },
        creationDate:{
            type: Date,
            default: Date.now
        }
    }
)

export default model('Comment', commentSchema)