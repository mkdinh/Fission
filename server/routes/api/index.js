const router = require("express").Router();
const userRoutes = require("./user.js");

// USER ROUTES
// ---------------------------------------------------
router.use("/user", userRoutes);

module.exports = router;
