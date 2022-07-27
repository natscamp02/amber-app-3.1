const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json({
            status: 'success',
            results: students.length,
            data: { students },
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,
            error: error,
        });
    }
};

exports.getStudentByID = async (req, res) => {
    try {
        // const student = await Student.findById(req.params.id);
        const student = await Student.findOne({ _id: req.params.id });

        if (!student) throw new Error(`Student not found`);

        res.status(200).json({
            status: 'success',
            data: { student },
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,
            error: error,
        });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                student: newStudent,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,
            error: error,
        });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const updated = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                student: updated,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,
            error: error,
        });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);

        //Can also be 204 if you are not returning anything in the response
        res.status(204).json({
            status: 'success',
            data: { student: null },
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,
            error: error,
        });
    }
};
