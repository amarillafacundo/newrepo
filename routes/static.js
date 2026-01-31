const express = require("express");
const router = express.Router();
const path = require("path");

// Serve all static files from /public
router.use(express.static(path.join(__dirname, "..", "public")));

router.get("/error", async (req, res, next) => {
  next(new Error("Intentional server error"))
})


module.exports = router;




