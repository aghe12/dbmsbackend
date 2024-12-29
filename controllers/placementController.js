const Placement = require('../models/placementModel');

exports.createPlacement = (req, res) => {
  const newPlacement = req.body;

  Placement.create(newPlacement, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ message: 'Placement created successfully', id: result.insertId });
  });
};

exports.getAllPlacements = (req, res) => {
  Placement.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(200).json(results);
  });
};
