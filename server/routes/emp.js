const express = require('express');
const router = express.Router();
const empController = require('../controllers/empController');

// Routes
router.get('/', empController.view);
router.post('/', empController.find);
router.get('/addemp', empController.form);
router.post('/addemp', empController.create);
router.get('/editemp/:id', empController.edit);
router.post('/editemp/:id', empController.update);
router.get('/viewemp/:id', empController.viewall);
router.get('/:id',empController.delete);
  
module.exports = router;