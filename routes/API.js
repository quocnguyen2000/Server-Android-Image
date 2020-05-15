//import modules
const express = require('express');
const router = express.Router();

//import controllers
const API = require('../controllers/API');

//getAll
router.get('/api/mobile', API.getAll);
//get 1 sp
router.get('/api/mobile/:id', API.getMobile);

//edit
router.put('/api/mobile/edit/:id', API.editMobile);

//delete
router.delete('/api/mobile/delete/:id', API.deleteMobile);

module.exports = router;
