const express = require('express');
const router = express.Router();
const csv_parse = require('../controllers/upload_file');
const home_controller = require('../controllers/home');
const path = require('path');
const uploadCsv = require('../controllers/upload_file');

router.get("/", home_controller.home);
router.post("/csv-parse", uploadCsv.saveFile, home_controller.csvParse);
router.post('/search', home_controller.search);
module.exports = router;

