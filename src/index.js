// import mongoose from "mongoose";
// import { Db_Name } from "./constants";
// import express from 'express'
import dotenv from 'dotenv'
import DBConnect from "./db/db.js";

dotenv.config({path: './env'})

DBConnect()



//  const app = express()


// immediatly invoked function

// database se jb bhi bt kero try catch lagna hi lagana hai
// // express mai kae listners hote hai like on()

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${Db_Name}`)
//         app.on("error", (error)=>{
//             console.log("error database connection is failed", error);
//         })
     
//         app.listen(process.env.PORT, ()=>{
//           console.log(`your app is listening on ${process.env.PORT}`);
                     
//         })

//     } catch (error) {
//       console.log("Error: ", error);
//        throw error  
//     }
// })()