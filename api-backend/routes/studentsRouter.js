const express = require('express');
const {
    getAllStudents,
    createStudent,
    getStudentByID,
    updateStudent,
    deleteStudent,
} = require('../controllers/students');

const router = express.Router();

router.route('/').get(getAllStudents).post(createStudent);
router
    .route('/:id')
    .get(getStudentByID)
    .patch(updateStudent)
    .delete(deleteStudent);

module.exports = router;
