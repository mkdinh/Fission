// IMPORT DEPENDENCIES
// ---------------------------------------------------
const router = require('express').Router();
const projectController = require('../../controllers/projectsController.js');

// API ROUTES
// ---------------------------------------------------
router.route('/user/:id')
    .get(projectController.findAll)
    .post(projectController.create)

router.route('/:id')
    .get(projectController.findOne)
    .put(projectController.updateOne)
    .delete(projectController.deleteOne)

router.route('/save/:id')
    .put(projectController.SaveOne)

router.route('/compile/:id')
    .get(projectController.compileSample)
    .put(projectController.compile)

// EXPORT ROUTES
// ---------------------------------------------------
module.exports = router;