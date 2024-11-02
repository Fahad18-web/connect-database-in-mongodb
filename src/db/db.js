import mongoose from "mongoose";

import { Db_Name } from "../constants.js";

const DBConnect = async () => {
     try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${Db_Name}`)
        console.log(`oh great Mogodb connected !!` );
        
     } catch (error) {
        console.log(error);
        process.exit(1)
     }
}

export default DBConnect