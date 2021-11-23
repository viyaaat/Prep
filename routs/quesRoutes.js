const express = require('express');
const quesController = require('../controllers/quesController');
const router = new express.Router();


router.get('/', quesController.ques_index);
router.get('/topic', quesController.ques_topic);
router.get('/my/:id', quesController.ques_my);
router.delete('/:id', quesController.ques_delete);
router.post('/', quesController.ques_create_post);
router.get('/create', quesController.ques_create_get);
router.get('/:id', quesController.ques_details);


module.exports = router;