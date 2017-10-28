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
    .put(compController.updateOne)
    .delete(compController.deleteOne);

router.route("/group/all")
    .get(compController.findGroups)

router.route("/group/:id")
    .get(compController.findCustoms)

// EXPORT ROUTES
// ---------------------------------------------------
module.exports = router;