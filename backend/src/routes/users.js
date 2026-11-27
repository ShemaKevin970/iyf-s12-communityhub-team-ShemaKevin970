
const express = require('express');
const users = require('../controllers/usersController');

const router = express.Router();

router.get('/', users.getAllUsers);
router.get('/:id', users.getUserById);
router.post('/', users.createUser);

module.exports = router;
