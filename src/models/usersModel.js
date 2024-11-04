import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const userSchema = new mongoose.Schema(
    {
     username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
     },
     emai:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index: true
     },
     fullname:{
        type: String,
        required: true,
        lowercase: true,
        trim:true,
        index:true
        // unique: true
     },
     avatar:{
        type: String,   //cloudnary url just like aws third party 
        required: true,
     },
     coverimage:{
        type: String,
        required: true,
     },
     password:{
        type: String,
        required: [true, 'password is required'],
        lowercase: true,
        unique: true,
        trim: true
     },
     refreshToken:{
        type: String
     },

     watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Videos'
        }
     ]


    },{timestamps: true})

//  pre hook use hta hai data save kerte waqt 'save' refer to save button

// password encrypt logic starts from here
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next()

    this.password = bcrypt.hash(this.password, 10)   
})

// ye check kre ga ke password correct hai ya nahi 
userSchema.methods.isPasswordCorrect = async function (password) {
    return await  bcrypt.compare(password, this.password)
}


//  ye dono hi jwt tokens hai bs use case mai farq hai

// function isi liya bnaya hai take (this) instance use ker sake aur user schema mai jwt inject kya hai aur payload likh rahe hai wesy to ye already database mongodb mai store hta hai but phr bhi likh rahe hai
userSchema.methods.generateAccessToken = function(){
 return  jwt.sign(  // ye method apke jwt token ko return kerta hai jab bhi wo generate hota hai
      {
         _id: this._id,
         email: this.emai,
         username: this.username,
         fullname:this.fullname
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
   )
}

userSchema.methods.generateRefreshToken = function(){
   return  jwt.sign(  // ye method km information leta hai kyun ke apka data refesh hota hai 
      {
         _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
   )
}


export const User = mongoose.model('User', userSchema)

