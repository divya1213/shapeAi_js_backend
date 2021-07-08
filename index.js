const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.unescape(bodyParser.urlencoded({extented: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  console.log(red.body.n1);
  res.send("This is a successful post");
});


app.listen(port);
