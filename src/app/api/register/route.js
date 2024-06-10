import { NextResponse } from "next/server"

export const POST=async(req)=>{
    // destructure incoming data
    const {email,password}=await req.json()
    console.log(email,password)
    // sending back a repsonse
    return new NextResponse(JSON.stringify({msg:`user email ${email} and password ${password}  }`}, {status:200}))
}