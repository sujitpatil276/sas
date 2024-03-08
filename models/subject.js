const mongoose = require("mongoose")

const subjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        year: {
            type: String,
            required: true,
            trim: true,
        },
        branch: {
            type: String,
            required: true,
            trim: true,
        },
        sem: {
            type: Number,
            required: true,
            trim: true,
        },
        assignments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "assignment",
            }
        ]
    },
    { timestamps: true }
)

module.exports = mongoose.model("subject", subjectSchema)