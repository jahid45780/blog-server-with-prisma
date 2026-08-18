import prisma from "../../config/db"



 const createUser = async(payload:any)=>{
    
    const result = await prisma.user.create({
        data:payload
    })

    return result

 }

 export const userService = {
     createUser
 }