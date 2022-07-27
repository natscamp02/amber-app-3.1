const express = require("express");
const morgan = require("morgan");

const studentsRouter = require("./routes/studentsRouter");

const app = express();

// Custom middleware
app.use((req, res, next) => {
    switch (req.method) {
        case "DELETE":
            console.log(
                `\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[31m${req.method}\x1b[0m - ${req.path}`
            );
            break;
        case "PUT":
            console.log(
                `\x1b[44m\x1b[4m[ANGULAR-APP3.1]\x1b[0m - \x1b[32m${req.method}\x1b[0m - ${req.path}`
            );
            break;
        case "PATCH":
            console.log(
                `\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[34m${req.method}\x1b[0m - ${req.path}`
            );
            break;
        case "POST":
            console.log(
                `\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[33m${req.method}\x1b[0m - ${req.path}`
            );
            break;
        case "GET":
            console.log(
                `\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[35m${req.method}\x1b[0m - ${req.path}`
            );
            break;
        default:
            console.log(
                `\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[35m${req.method}\x1b[0m - ${req.path}`
            );
    }
    next();
});

// Body parsing
app.use(express.json());

// Logging requests
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// Routes
app.use("/api/v1/students", studentsRouter);

module.exports = app;
