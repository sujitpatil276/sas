const mongoose = require("mongoose")

const marklistSchema = new mongoose.Schema(
    {
        batch: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "batch",
        },
        assignment: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "assignment",
        },
        marks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "mark",
            }
        ],
    },
    { timestamps: true }
)

module.exports = mongoose.model("marklist", marklistSchema)