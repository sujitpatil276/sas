// Importing required modules
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/user");
// Configuring dotenv to load environment variables from .env file
dotenv.config();

// This function is used as middleware to authenticate user requests
exports.auth = async (req, res, next) => {
    try {
        // Extracting JWT from request cookies, body or header
        const token =
            req.cookies.token ||
            req.body.token ||
            req.header("Authorization").replace("Bearer ", "");

        // If JWT is missing, return 401 Unauthorized response
        if (!token) {
            return res.status(401).json({ success: false, message: `Token Missing` });
        }


        try {
            // Verifying the JWT using the secret key stored in environment variables
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            // Storing the decoded JWT payload in the request object for further use
            req.user = decode;
        } catch (error) {
            // If JWT verification fails, return 401 Unauthorized response
            return res
                .status(401)
                .json({ success: false, message: "token is invalid" });
        }

        // If JWT is valid, move on to the next middleware or request handler
        next();
    } catch (error) {
        // If there is an error during the authentication process, return 401 Unauthorized response
        return res.status(401).json({
            success: false,
            message: `Something Went Wrong While Validating the Token`,
        });
    }
};

exports.isAdmin = async (req, res, next) => {
    try {
        const userDetails = await User.findOne({ email: req.user.email });

        if (userDetails.department !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a Protected Route for IT faculties.",
            });
        }
        next();
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: `User department Can't be Verified` });
    }
};

exports.isFromIT = async (req, res, next) => {
    try {
        const userDetails = await User.findOne({ email: req.user.email });

        if (userDetails.department !== "IT") {
            return res.status(401).json({
                success: false,
                message: "This is a Protected Route for IT faculties.",
            });
        }
        next();
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: `User department Can't be Verified` });
    }
};

exports.isFromCE = async (req, res, next) => {
    try {
        const userDetails = await User.findOne({ email: req.user.email });

        if (userDetails.department !== "CE") {
            return res.status(401).json({
                success: false,
                message: "This is a Protected Route for CE faculties.",
            });
        }
        next();
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: `User department Can't be Verified` });
    }
};

exports.isFromEnTC = async (req, res, next) => {
    try {
        const userDetails = await User.findOne({ email: req.user.email });

        if (userDetails.department !== "E&TC") {
            return res.status(401).json({
                success: false,
                message: "This is a Protected Route for E&TC faculties.",
            });
        }
        next();
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: `User department Can't be Verified` });
    }
};

