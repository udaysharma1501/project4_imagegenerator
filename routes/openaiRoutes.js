const express = require("express");
const router = express.Router();

const { generateImage } = require("../controllers/openaiController");

// this will hit - /openai/generateimage
router.post("/generateimage", generateImage);

module.exports = router;
