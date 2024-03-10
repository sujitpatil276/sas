const mongoose = require("mongoose")

const departmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            enum: ["IT", "CE", "E&TC", "Admin"],
            required: true,
        },
        divisions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "division",
            },
        ],
    },
    { timestamps: true }
)

module.exports = mongoose.model("department", departmentSchema)