const mongoose = require("mongoose")

const markSchema = new mongoose.Schema(
    {
        performanceDate: {
            type: Date,
            required: true,
            trim: true,
        },
        submissionDate: {
            type: Date,
            required: true,
            trim: true,
        },
        rpp: {
            type: Number,
            required: true,
            trim: true,
        },
        spo: {
            type: Number,
            required: true,
            trim: true,
        },
        totalMarks: {
            type: Number,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("mark", markSchema)