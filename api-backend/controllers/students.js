const Student = require("../models/Student");

exports.checkStudentId = (req, res, next, val) => {
    if (+val < 0)
        return res.status(400).json({ status: "error", message: "Invalid ID" });

    next();
};

exports.checkStudentData = (req, res, next) => {
    if (!req.body.name || !req.body.email)
        return res
            .status(400)
            .json({ status: "error", message: "Invalid data" });

    next();
};

exports.getAllStudents = async (req, res) => {
    const students = await Student.find();

    res.status(200).json({
        status: "success",
        results: students.length,
        data: { students },
    });
};

exports.getStudentByID = async (req, res) => {
    const student = await Student.findById(req.params.id);

    if (!student) {
        res.status(404).json({
            status: "fail",
            message: "Student not found",
        });
    } else {
        res.status(200).json({
            status: "success",
            data: { student },
        });
    }
};

exports.createStudent = async (req, res) => {
    const newStudent = await Student.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            student: newStudent,
        },
    });
};

exports.updateStudent = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            student: "[The Updated Student Here]",
        },
    });
};

exports.deleteStudent = async (req, res) => {
    //Can also be 204 if you are not returning anything in the response
    res.status(204).json({
        status: "success",
        data: {
            student: null,
        },
    });
};
