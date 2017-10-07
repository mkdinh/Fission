// IMPORT DEPENDENCIES
// ---------------------------------------------------
const router = require("express").Router();
const usersController = require("../../controllers/usersController.js");

// API ROUTES
// ---------------------------------------------------
// Matches with "/api/user"
router.route('/signUp')
    .post(usersController.signUp);

router.route('/signIn')
    .post(usersController.signIn);

router.route('/:id')
    .put(usersController.update);

// EXPORT ROUTES
// ---------------------------------------------------
module.exports = router;
