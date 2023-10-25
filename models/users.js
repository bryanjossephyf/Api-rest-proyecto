import {Schema, model} from "mongoose";
import bcryptjs from "bcryptjs"
//estructura de base de datos
const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true
    }
})

//hash password

userSchema.pre("save", async function(next){
    const user = this

    if(!user.isModified("password")) return next()

    try {
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(user.password, salt)
    } catch (error) {
        console.log(error)
    }
})

export const User = model("user", userSchema);