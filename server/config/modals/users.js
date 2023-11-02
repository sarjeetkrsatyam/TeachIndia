import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be at least 8 characters long"],
        select: false,
    },
    avtar: {
        public_id: String,
        url: String,
    },
    createdAt: {
        type: Date.now,
    },
    tasks: [
        {
            title: "String",
            description: "String",
            completed: Boolean,
            createdAt: Date,
        }
    ],
    otp: Number,
    otp_expiry: Date,
});

export const User = mongoose.model("User", userSchema)