import mongoose from "mongoose"

const connect =async ()=>{
    try{

        // error handling
        const con= await mongoose.connect(process.env.MONGODB_URL)
        if(con){
            console.log("DB conncted")
        }
        
        return con
    }
    catch(err){
        console.error("DB not conncted ", err)
    }
}
export default connect