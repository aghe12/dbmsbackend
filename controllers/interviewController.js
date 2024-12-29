const Interview = require('../models/interviewModel');

exports.createInterview = (req, res) => {
  const newInterview = req.body;

  Interview.create(newInterview, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ message: 'Interview created successfully', id: result.insertId });
  });
};

exports.getAllInterviews = (req, res) => {
  Interview.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(200).json(results);
  });
};
