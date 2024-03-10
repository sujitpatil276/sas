const express = require("express");
const app = express();

const userRoutes = require("./routes/User");

const database = require("./config/database");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
dotenv.config();


const port = process.env.PORT || 4000;


database.connect();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", userRoutes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is Up and Running....",
    })
});


app.listen(port, () => {
    console.log(`App is Running on Port ${port}`);
})

