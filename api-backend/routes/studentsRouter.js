const express = require("express");
const {
    getAllStudents,
    createStudent,
    getStudentByID,
    updateStudent,
    deleteStudent,
    checkStudentId,
    checkStudentData,
} = require("../controllers/students");

const router = express.Router();

// router.param("id", checkStudentId);

router.route("/").get(getAllStudents).post(checkStudentData, createStudent);
router
    .route("/:id")
    .get(getStudentByID)
    .put(updateStudent)
    .delete(deleteStudent);

module.exports = router;
