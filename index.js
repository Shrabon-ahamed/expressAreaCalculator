const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:false}))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/circle_area", (req, res)=>{
    res.sendFile(path.join(__dirname, "circle_area.html"))
})

app.get("/rec_area", (req, res)=>{
    res.sendFile(path.join(__dirname, "rec_area.html"))
})

app.get("/triangle_area", (req, res)=>{
    res.sendFile(path.join(__dirname, "triangle.html"))
})

app.post("/circle_area", (req, res)=>{
    const radius = parseInt(req.body.value);
    const result = Math.PI * radius * radius;
    res.send(`<h1>This is result of Circle Area</h1> The area of this circle is: ${result}`)
    console.log(result)
})

app.post("/rec_area", (req, res)=>{
    const height = parseInt(req.body.height);
    const width = parseInt(req.body.width);
    const result = height * width;
    res.send(`<h1>This is result of Rectangle Area</h1> The area of this Rectangle is: ${result}`)
    console.log(result)
})

app.post("/triangle_area", (req, res)=>{
    const height = parseInt(req.body.height);
    const base = parseInt(req.body.base);
    const result = 0.5 * height * base;
    res.send(`<h1>This is result of Triangle Area</h1> The area of this Triangle is: ${result}`)
    console.log(result)
})

app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`)
})