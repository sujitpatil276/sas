const mongoose = require("mongoose")

const subjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        year: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "year",
        },
        branch: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "department",
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