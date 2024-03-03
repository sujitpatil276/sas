const mongoose = require("mongoose")

const assignmentSchema = new mongoose.Schema(
    {
        number: {
            type: Number,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "subject",
        },

    },
    { timestamps: true }
)

module.exports = mongoose.model("assignment", assignmentSchema)