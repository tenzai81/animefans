const express = require('express');
const app = express();
const models = require("./models")

app.set("view engine", "pug");
app.use(express.static("public"));
app.get("/", (req, res)=>{
    res.render("index")
})
app.get("/animelists", async (req,res) =>{
    let data = {};
    data.animelists = await models.animelist.findAll();
    res.render("animelists", data);
})
app.get("/animelists/:id", async (req, res) =>{
    let data = {};
    data.animelist = await models.animelist.findOne({
        where: {id: req.params.id }
    });
    res.render("animelist", data);
})


app.listen(3000)