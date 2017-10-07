// IMPORT DEPENDENCIES
// ---------------------------------------------------
const router = require('express').Router();
const projectController = require('../../controllers/projectsController.js');

// API ROUTES
// ---------------------------------------------------
router.route('/')
    .get(projectController.findAll)
    .post(projectController.create)

router.route('/:id')
    .get(projectController.findOne)
    .put(projectController.update)
    .delete(projectController.delete)

router.route('/compile/')
    .get(projectController.compile)

// EXPORT ROUTES
// ---------------------------------------------------
module.exports = router;