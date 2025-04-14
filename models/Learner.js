import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            validate: validator.isEmail,
            unique: true,
        },
        phone: {
            type: Number,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            select: false,
        },
        address: {
            type: String,
        },
        state: {
            type: String,
        },
        city: {
            type: String,
        },
        pin: {
            type: Number,
        },
        type: {
            type: String,
        },
        status: {
            type: Boolean,
        },
        profileImage: {
            type: String,
        },
        cart: {
            type: String,
        },
        deleted: {
            type: Boolean,
        },
        // resetPasswordToken: 
    }
)

schema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
})

schema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// schema.methods.getResetToken = async function (params) {
//  const resetToken = crypto.randomBytes(20).toString("hex");

//  this.reser
    
// }

export const Learner = mongoose.model("Learner", schema);