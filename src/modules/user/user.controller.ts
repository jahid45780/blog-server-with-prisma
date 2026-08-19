
import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import { sentResponse } from "../../utils/sentResponse";
import { catchAsync } from "../../utils/catchAsync";

 const createUser = catchAsync(async(req:Request, res:Response, next:NextFunction) =>{
    
     const result = await userService.createUser(req.body)

      sentResponse(res, {
        success: true,
        statusCode:200,
        message: "user create  Successfully",
        data: result
    })

 })

     const getAllUser= catchAsync(async(req:Request, res:Response, next:NextFunction)=>{
      
            const user  = await userService.getAllUser()
           

          sentResponse(res,{
                     success:true,
                     statusCode:200,
                    message:"successfully get user",
                    data:user
          })
    })

       const getUserbyId = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{
      
            const user  = await userService.getUserbyId(Number(req.params.id))
           

          sentResponse(res,{
                     success:true,
                     statusCode:200,
                    message:"successfully get userID",
                    data:user
          })
    })



         const updateUser = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{

            const id  = Number(req.params.id)
           const user  = await userService.updateUser(id, req.body) 
           

          sentResponse(res,{
                     success:true,
                     statusCode:200,
                    message:"successfully updated user ",
                    data:user
          })
    })


     
         const deleteUser = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{

            const id  = Number(req.params.id)
           const user  = await userService.deleteUser(id) 
           

          sentResponse(res,{
                     success:true,
                     statusCode:200,
                    message:"successfully delete user ",
                    data:user
          })
    })

 

 export const userController = {
     createUser,
     getAllUser,
     getUserbyId,
     updateUser,
     deleteUser
 }