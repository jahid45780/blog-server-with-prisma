import prisma from "../../config/db"

const getBlogStats =  async()=>{
    return await prisma.$transaction( async (tx)=>{
         const aggregates = await tx.post.aggregate({
               _count:true,
               _sum:{views:true},
               _max:{views:true},
               _min:{views:true},
               _avg:{views:true}
         })

         const featureCount = await tx.post.count({
             where:{
                IsFeatured:true
             }
         })

         const topFeature = await tx.post.findFirst({
             where:{
                IsFeatured:true,
             },
             orderBy:{views:"desc"}
         })


         return{
            stats:{
                totalPost: aggregates._count ?? 0,
                totalView: aggregates._sum.views ?? 0,
                avgView: aggregates._avg.views ?? 0,
                maxView: aggregates._max.views ?? 0,
                minView: aggregates._min.views ?? 0
            },
            feature:{
                count:featureCount,
                topCount:topFeature
            }
         }
    })
}

export const statsService = {
     getBlogStats
}