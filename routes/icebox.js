const { Router } = require('express');

const { get_icebox, new_meal, delete_meal, edit_meal } = require('../controllers/iceboxController');
const { authVerification } = require('../middleware/authMiddleware')

const router = Router();

router.get('/icebox', authVerification, get_icebox);

router.post('/new', authVerification, new_meal);

router.put('/edit/:id', edit_meal);

router.delete('/delete/:id', delete_meal);

module.exports = router;
