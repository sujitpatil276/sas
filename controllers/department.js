const Department = require("../models/department");

exports.createDepartment = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(403).send({
                success: false,
                message: "Department name is required",
            });
        }

        const department = await Department.create({ name });

        return res.status(200).json({
            success: true,
            department,
            message: "Year created successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Department cannot be created. Please try again.",
        });
    }
};