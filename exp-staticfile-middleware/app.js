const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")

const PORT = 3000;

//middleware -> static file
app.use(express.static("public"));
//app.use('/public', express.static('public'));

// custom middleware
app.use("/", (req, res, next) => {
   console.log("Link: ", req.url);
   req.requestTime = new Date();
   next();
});

// ex middleware cookie-parser
app.use(cookieParser());

//routing
app.get("/", (req, res) => {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies);

    res.send(`<link href='/style.css' rel="stylesheet" type='text/css'>
                <h1>Hello Express</h1>
                <p>Request time: ${req.requestTime}</p>`)
});
app.get("/api", (req, res) => {
    res.json({
        username: "pthoa",
        fullname: "Hoa Mai"
    })
});

app.get("/user/:id", (req, res) => {
    res.cookie("userid", req.params.id);
    res.send(`<h1>User: ${req.params.id}</h1>`);
});

app.listen(PORT, () => {
   console.log(`Server is running on PORT ${PORT}`);
});

