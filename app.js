var express = require("express");
var app = express();
var port = 8000;
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//bai1: 


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/trangchu.html"))
})


app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/login.html"))
})



app.get("/dowload", function (req, res) {
    res.download("./public/dog.jpg")
})




app.listen(port, function () {
    console.log("dang ket noi tai cong " + port);
})

