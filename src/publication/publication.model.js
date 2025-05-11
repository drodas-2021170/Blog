import {model, Schema} from 'mongoose'

const publicationSchema = Schema(
    {
        title:{
            type: String,
            maxLenght:[25, 'Cant be overcome 25 characters'],
            required:[true,'Title is requiered']
        },
        description:{
            type: String,
            maxLenght:[200, 'Cant be overcome 100 characters'],
            required:[true,'Description is requiered']
        },
        proyect:{
            type: String,
            required:[true,'Proyect is requiered']
        },
        course:{
            type: Schema.Types.ObjectId,
            ref:'Courses',
            required:[true,'Course is requiered']
        },
        creationDate:{
            type: Date,
            required:[true,'Creation date is requiered'],
        }
    }
)

export default model('Publication', publicationSchema)