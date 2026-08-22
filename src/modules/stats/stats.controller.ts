import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";


const getBlogStats = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{



})

export const statsController = {
    getBlogStats
}