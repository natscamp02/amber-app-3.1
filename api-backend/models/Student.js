const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "You must specify an name for student"],
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Email is required"],
        },
        cohort: {
            type: String,
            default: "2",
        },
        phoneNumber: String,
        grade: {
            type: Number,
            default: 0,
        },
        registrationFee: {
            type: Number,
            default: 3000,
        },
    },
    { collection: "students" }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
