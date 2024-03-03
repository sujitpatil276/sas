const mongoose = require("mongoose")

const batchSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "student",
            }
        ]
    },
    { timestamps: true }
)

module.exports = mongoose.model("batch", batchSchema)