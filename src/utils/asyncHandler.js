//by using promises
const asynHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}








//using try catch wrap async  await

// const asynHandler=(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code||500).json({
//             success:true,
//             message:error.message
//         })
//     }
// }


