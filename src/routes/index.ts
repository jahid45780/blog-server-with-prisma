import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { postRoutes } from "../modules/post/post.route";

 export const router = Router()

 const  moduleRouter = [
    {
        path:'/user',
        route:userRoutes,

    },
    {
        path:'/post',
        route:postRoutes
    }
 ]

 moduleRouter.forEach((route)=>{
     router.use(route.path, route.route )
 })

