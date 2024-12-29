const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');

router.post('/', interviewController.createInterview);
router.get('/', interviewController.getAllInterviews);

module.exports = router;
