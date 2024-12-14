const express = require("express");
const { createStudent, getStudents, updateStudent, deleteStudent } = require("../controllers/studentController");

const router = express.Router();

router.post("/", createStudent); // Create
router.get("/", getStudents);    // Read
router.put("/:id", updateStudent); // Update
router.delete("/:id", deleteStudent); // Delete

module.exports = router;
