const express = require("express");
const ejs = require("ejs");

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use("/", (req, res, next) => {
    console.log("Request: ", req.method, req.url);
    next();
});

app.get("/", (req, res) => {
   res.render("index");
});
app.get("/user/:id", (req, res) => {
   res.render("user", {ID: req.params.id});
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});