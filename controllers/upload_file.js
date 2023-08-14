const CSV_parser = require("csv-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");


//save file in local disk
function Multer() {
  let uplaodPath = path.join(__dirname, "..", "/uploads/data.csv");
  if (fs.existsSync(uplaodPath)) {
    fs.unlinkSync(uplaodPath);
  }

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, ".." + "/uploads/"));
    },
    filename: function (req, file, cb) {
      cb(null, "data.csv");
    },
  });

  return multer({ storage: storage }).single("csv");
}
module.exports.saveFile = Multer();
