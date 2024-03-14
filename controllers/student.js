const Student = require("../models/student");
const Batch = require("../models/batch");

exports.createStudent = async (req, res) => {
    try {
        const { firstname, lastname, department, division, batch, rollNo, batchId } = req.body;

        if (!firstname || !lastname || !department || !division || !batch || !rollNo || !batchId) {
            return res.status(403).send({
                success: false,
                message: "Missing required properties",
            });
        }

        const student = Student.create({ firstname, lastname, department, division, batch, rollNo });

        const updatedBatch = Batch.findByIdAndUpdate(
            batchId,
            {
                $push: {
                    students: student._id,
                },
            },
            { new: true }
        )
            .populate({
                path: "students",
            })
            .exec();

        res.status(200).json({
            success: true,
            message: "Student enrolled successfully",
            updatedBatch,
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Student cannot be enrolled. Please try again.",
            error: error.message,
        });
    }
}