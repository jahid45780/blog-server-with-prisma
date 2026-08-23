import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { statsService } from "./stats.service";
import { sentResponse } from "../../utils/sentResponse";


const getBlogStats = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{

   const result = await statsService.getBlogStats()

          sentResponse(res,{
                            success:true,
                            statusCode:200,
                           message:"successfully get stats post view",
                           data:result
                 })

})

export const statsController = {
    getBlogStats
}