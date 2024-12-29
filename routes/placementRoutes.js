const express = require('express');
const router = express.Router();
const placementController = require('../controllers/placementController');

router.post('/', placementController.createPlacement);
router.get('/', placementController.getAllPlacements);

module.exports = router;
