const Division = require("../models/division");
const Department = require("../models/department");

exports.createDivision = async (req, res) => {
    try {
        const { name, departmentId } = req.body;

        if (!name || !departmentId) {
            return res.status(403).send({
                success: false,
                message: "Missing required properties",
            });
        }

        const division = await Division.create({ name });

        const updatedDepartment = await Department.findByIdAndUpdate(
            departmentId,
            {
                $push: {
                    divisions: division._id,
                },
            },
            { new: true }
        )
            .populate({
                path: "divisions",
                populate: {
                    path: "batches",
                    populate: {
                        path: "students",
                    },
                },
            })
            .exec()

        res.status(200).json({
            success: true,
            message: "Division created successfully",
            updatedDepartment,
        })
    } catch (error) {
        // Handle errors
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }

};