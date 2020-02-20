const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use("/", (req, res, next) => {
    console.log("Request: ", req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    res.render("index");
});

// querystring get method
app.get("/user/:id", (req, res) => {
    //req.query.qstr
    res.render("user", {ID: req.params.id, queryString: req.query.qstr});
});
// post parameters
app.post("/login", urlencodedParser, (req, res) => {
   console.log("username: ", req.body.username);
   console.log("password: ", req.body.password);
   res.send("Welcome " + req.body.username);
});
// post json
app.post("/loginjson", jsonParser, (req, res) => {
    console.log("username: ", req.body.username);
    console.log("password: ", req.body.password);
    res.send("OK");

});
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});