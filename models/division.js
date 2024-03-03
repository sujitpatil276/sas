const mongoose = require("mongoose")

const divisionSchema = new mongoose.Schema(
    {
        name: {
            type: Number,
            required: true,
            trim: true,
        },
        batches: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "batch",
            },
        ],
    },
    { timestamps: true }
)

module.exports = mongoose.model("division", divisionSchema)