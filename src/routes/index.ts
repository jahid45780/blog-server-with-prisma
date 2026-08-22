import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { postRoutes } from "../modules/post/post.route";
import { authRoutes } from "../modules/auth/auth.route";
import { statsRoutes } from "../modules/stats/stats.route";

 export const router = Router()

 const  moduleRouter = [
    {
        path:'/user',
        route:userRoutes,

    },
    {
        path:'/post',
        route:postRoutes
    },
    {
        path:'/auth',
        route:authRoutes
    },
      {
        path:'/stats',
        route:statsRoutes
    }
 ]

 moduleRouter.forEach((route)=>{
     router.use(route.path, route.route )
 })

