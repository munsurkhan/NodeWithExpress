let express = require('express');

app = express();

app.get("/",function (req,res) {
    res.send("Hello Express JS");
})

//simple response
app.post("/one",function (req,res) {
    res.send("Hello Express JS with About");
})

//status Code response
app.post("/two",function (req,res) {
    res.status(201).end();
})

//status Code response
app.get("/three",function (req,res) {

    let myJsonArry = [
        {
            name:"Munsur",
            city:"Dhaka",
            Age:"20"
        },
        {
            name:"Rasel",
            city:"Dhaka",
            Age:"20"
        },
        {
            name:"Ramjan",
            city:"Dhaka",
            Age:"20"
        }
    ]

    res.json(myJsonArry)
})


app.listen(8000,function () {
    console.log("Server Run Success");
})