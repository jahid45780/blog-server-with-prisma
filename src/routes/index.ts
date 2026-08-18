import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";

 export const router = Router()

 const  moduleRouter = [
    {
        path:'/user',
        route:userRoutes,

    }
 ]

 moduleRouter.forEach((route)=>{
     router.use(route.path, route.route )
 })

