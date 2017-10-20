// IMPORT DEPENDENCIES
// ---------------------------------------------------
const router = require("express").Router();
const usersController = require("../../controllers/usersController.js");

// API ROUTES
// ---------------------------------------------------
// Matches with "/api/user"

router.route('/')
    .post(usersController.create);

router.route("/:id")
    .get(usersController.login)


// EXPORT ROUTES
// ---------------------------------------------------
module.exports = router;
