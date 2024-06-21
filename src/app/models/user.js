import mongoose from "mongoose"

// a schema is a set of guideline that regulates the l=kind of data that 
// should be allowed in our Database
const  userSchema=new mongoose.Schema({
    name:{
        type:String,
        required :true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})
// create a user model, but before creating
// chehck if the model already exists , if it does not, modela nea new collection(table)
const userModel= mongoose.models.user || mongoose.model("user",userSchema)
export default userModel