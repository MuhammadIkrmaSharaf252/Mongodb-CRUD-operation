const Student = require("../models/Student");

// Create a new student
const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a student
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(student);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a student
const deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createStudent, getStudents, updateStudent, deleteStudent };
