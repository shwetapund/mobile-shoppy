import { Schema, model } from "mongoose";

const mobileSchema = new Schema({
    //price, name, type, processor, memory, OS, image
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    processor:{
        type:String,
        required:true
    },
    memory:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    OS:{
        type:String,
        required:true
    },
    description:{
        type:String
    }
},
{
    timestamps:true
}
)

const Mobile = model('Mobile',mobileSchema);

export default Mobile