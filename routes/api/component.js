// IMPORT DEPENDENCIES
// ---------------------------------------------------
const router = require('express').Router();
const compController = require('../../controllers/componentsController.js');

// API ROUTES
// ---------------------------------------------------
router.route('/')
    .get(compController.findAll)
    .post(compController.create);

router.route('/:id')
    .get(compController.findOne)
    .put(compController.update)
    .delete(compController.delete);

// EXPORT ROUTES
// ---------------------------------------------------
module.exports = router;