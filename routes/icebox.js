const { Router } = require('express');

const { get_icebox, new_meal } = require('../controllers/iceboxController');
const { authVerification } = require('../middleware/authMiddleware')

const router = Router();

router.get('/icebox', authVerification, get_icebox);

router.post('/new', authVerification, new_meal);

// router.get('/:id/edit', );

// router.post('/:id', deleteMeal);

module.exports = router;
