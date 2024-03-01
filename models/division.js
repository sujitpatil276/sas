const mongoose = require("mongoose")

const divisionSchema = new mongoose.Schema(
    {
        name: {
            type: Number,
            required: true,
            trim: true,
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("division", divisionSchema)