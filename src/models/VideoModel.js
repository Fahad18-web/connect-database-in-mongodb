import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new mongoose.Schema(
    {
       videoUrl:{
          type: String, //cloudenary url
          required: true
       },

       thumbnailUrl:{
         type: String, //cloudenary url
         required: true
       },

       title:{
        type: String,
        required: true
      },

      description:{
        type: String,
        required: true
      },
      
      duration:{
        type: Number, // cloudenary url
        required: true
      },
     
      views:{
        type: Number,
        default: 0
      },

      isPublished: {
        type: Boolean,
        default: trusted,
      },

      owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },




    },{timestamps:true})
   
    // the code wriiten blew ye code aggrigation method ko use kerne ke liya banta hai hm aggrigation plugins apni bna sakte hai

    videoSchema.plugin(mongooseAggregatePaginate)
   export  const  Videos = mongoose.model("Videos", videoSchema)