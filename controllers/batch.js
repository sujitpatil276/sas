const Batch = require("../models/batch");
const Division = require("../models/division")

exports.createBatch = async (req, res) => {
    try {
        const { name, divisionId } = req.body;

        if (!name || !divisionId) {
            return res.status(403).send({
                success: false,
                message: "Missing required properties",
            });
        }

        const batch = Batch.create({ name });

        const updatedDivision = await Division.findByIdAndUpdate(
            divisionId,
            {
                $push: {
                    batches: batch._id,
                },
            },
            { new: true }
        )
            .populate({
                path: "batches",
                populate: {
                    path: "students",
                },
            })
            .exec()


        res.status(200).json({
            success: true,
            message: "Batch created successfully",
            updatedDivision,
        })
    }
    catch (error) {
        // Handle errors
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }
};