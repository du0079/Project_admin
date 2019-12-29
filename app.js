var bodyparser =require("body-parser"),
    express    = require("express"),
    expressSanitizer=require("express-sanitizer"),
    methodOverride  = require("method-override"),
    mongoose   = require("mongoose"),
    app= express();


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("views"));

// Route
app.get("/",function(req,res){
      res.render("index");
});






app.listen(3000,function(){
 console.log("Tested OK");
});