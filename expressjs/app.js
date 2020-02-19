const express = require("express");
const app = express();

const PORT = 3000;


app.listen(PORT, () => {
    console.log("Server is running on PORT: ", PORT);
});

app.get("/", (req, res) => {
    res.send("<h1>Hello Express</h1>");
});

app.get("/api", (req, res) => {
    res.json({
        username: "pthoa",
        fullname: "Hoa Mai"
    })
});

app.get("/user/:id", (req, res) => {
    res.send(`<h1>User: ${req.params.id}</h1>`);
    console.log(req.params);
});
