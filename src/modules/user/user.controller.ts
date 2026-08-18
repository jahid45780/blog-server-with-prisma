
import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import { sentResponse } from "../../utils/sentResponse";

 const createUser = async(req:Request, res:Response, next:NextFunction)=>{
    
     const result = await userService.createUser(req.body)

      sentResponse(res, {
        success: true,
        statusCode:200,
        message: "user create  Successfully",
        data: result
    })

 }

 export const userController = {
     createUser
 }