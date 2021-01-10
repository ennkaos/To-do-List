const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date=require(__dirname+"/date.js");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
const items = [];
const workItems=[];
app.get("/", function (req, res) {
    let day=date.getDate();
    res.render("list", {
        listTitle: day,
        newlistitems: items
    });
});
app.post("/", function (req, res) {
    let item = req.body.newitem
    
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
    
    
});
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newlistitems: workItems});
});

app.listen(process.env.PORT||3000, function () {
    console.log("Server started on port 3000");
})