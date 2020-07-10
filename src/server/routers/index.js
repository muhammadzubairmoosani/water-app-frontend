const express = require("express");
const router = express.Router();

router.use("/", require("./contactUsRoutes"));
router.use("/", require("./auth/buyer/index"));

module.exports = router;
