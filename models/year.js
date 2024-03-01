const mongoose = require("mongoose")

const yearSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("year", yearSchema)