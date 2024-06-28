import userModel from "@/app/models/user"
import connect from "@/utils/connect"
import { NextResponse } from "next/server"

export const POST=async(req)=>{
    // take incoming values
    const {email,password}=await req.json()
    console.log(email)

    try {
        // call database connection
        await connect()

        const user=await userModel.findOne({email:email})
        // chehck if user email exists in database first
        if(!user){
        return new NextResponse(JSON.stringify({msg:"invlaid credentials 1"}), {status:401})

        }
        console.log("this is the user password" , user.password)

        // check if user password matches the one stored in the database
        if(password != user.password){
        return new NextResponse(JSON.stringify({msg:"invlaid credentials 2"}), {status:401})

        }
        return new NextResponse(JSON.stringify({msg:"user loggedin successfully"}), {status:200})

       

        
    } 
    catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({error:"Server is down"}), {status:500})
        
    }
}