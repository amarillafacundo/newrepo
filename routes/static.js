const express = require("express");
const router = express.Router();
const path = require("path");

// Serve all static files from /public
router.use(express.static(path.join(__dirname, "..", "public")));

router.get("/error", (req, res, next) => {
  next({
    status: 500,
    message: "Intentional error triggered from footer"
  })
})


module.exports = router;




