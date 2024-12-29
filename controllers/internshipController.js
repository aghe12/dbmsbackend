const Internship = require('../models/internshipModel');

exports.createInternship = (req, res) => {
  const newInternship = req.body;

  Internship.create(newInternship, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ message: 'Internship created successfully', id: result.insertId });
  });
};

exports.getAllInternships = (req, res) => {
  Internship.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(200).json(results);
  });
};
