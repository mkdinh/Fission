// IMPORT DEPENDENCIES
// ---------------------------------------------------
const router = require("express").Router();
const userRoutes = require("./user.js");
const componentRoutes = require("./component.js");
const projectRoutes = require("./project.js");

// USER ROUTES
// ---------------------------------------------------
router.use('/user', userRoutes);
router.use('/component',componentRoutes);
router.use('/project', projectRoutes);

module.exports = router;
