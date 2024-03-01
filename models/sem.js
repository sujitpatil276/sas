const mongoose = require("mongoose")

const semSchema = new mongoose.Schema(
    {
        name: {
            type: Number,
            required: true,
            trim: true,
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("sem", semSchema)