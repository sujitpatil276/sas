const Year = require("../models/year");

exports.createYear = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(403).send({
                success: false,
                message: "Year name is required",
            });
        }

        const year = await Year.create({ name });

        return res.status(200).json({
            success: true,
            year,
            message: "Year created successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Year cannot be created. Please try again.",
        });
    }

};