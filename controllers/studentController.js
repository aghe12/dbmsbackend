const Student = require('../models/studentModel');

exports.createStudent = (req, res) => {
  const newStudent = req.body;
  
  Student.create(newStudent, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    
    res.status(201).json({ message: 'Student created successfully', id: result.insertId });
  });
};

exports.getAllStudents = (req, res) => {
  Student.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    
    res.status(200).json(results);
  });
};

// Add more functions for update and delete...
