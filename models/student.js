const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true,
        },
        lastname: {
            type: String,
            required: true,
            trim: true,
        },
        rollNo: {
            type: Number,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("student", studentSchema)