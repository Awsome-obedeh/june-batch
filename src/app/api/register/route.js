// import { NextResponse } from "next/server"

import userModel from "@/app/models/user"
import connect from "@/utils/connect"
import { NextResponse } from "next/server"



export const GET =async()=>{
    return new NextResponse(JSON.stringify({msg:"This is my first response i am giving"}),{status:200})
}

export const  POST=async (req)=>{
    // destructure incoming data
    const {email,password,name,phone}=await req.json()
    if(!email){
    return new NextResponse(JSON.stringify({msg:"please provide email"}), {status:400})

    }

    // call databse connection
    
    await connect()
    // store user data in database
    const user= new userModel({name:name, email:email, password:password, phone})
    await user.save()
    if(user){

        return new NextResponse(JSON.stringify({msg:"user regisetered"}), {status:200})
    }
}