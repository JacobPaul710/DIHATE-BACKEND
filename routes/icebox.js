const { Router } = require('express');

const { get_icebox } = require('../controllers/iceboxController');
const { authVerification } = require('../middleware/authMiddleware')

const router = Router();

router.get('/icebox', authVerification, get_icebox);

// router.get('/:id', getMeal);

// router.post('/', newMeal);

// router.get('/:id/edit', );

// router.post('/:id', deleteMeal);

module.exports = router;
