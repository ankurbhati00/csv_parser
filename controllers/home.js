const fs = require("fs");
const path = require("path");
const CSV_parser = require("csv-parser");
let results = [];


//parse data from csv to json
module.exports.csvParse = async (req, res) => {
  results = [];
  fs.createReadStream(path.join(__dirname, ".." + "/uploads/data.csv"))
    .pipe(CSV_parser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      // console.log(results);
    });
  return res.redirect("/");
};


// render homepage with results
module.exports.home = (req, res) => {
  return res.render("home", {
    data: results,
  });
};

//search data in results 
module.exports.search = (req, res) =>{
  
  function search(obj) {
    for (let i in obj) {
      if (obj[i].toLowerCase().includes(req.body.search.toLowerCase())) {
        return true;
      }
    }
    return false;

}

  const data = results.filter(search);
  

  return res.render('home',{
    data:data
  });
}
