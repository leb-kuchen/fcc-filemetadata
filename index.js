var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config()
const multer = require("multer")
const upload = multer({dest: "uploads"})
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  let {originalname: name, mimetype: type, size} = req.file
  res.json({name, type, size})
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
