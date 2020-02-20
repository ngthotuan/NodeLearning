const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = 3000;


app.listen(PORT, () => {
    console.log("Server is running on PORT: ", PORT);
});

app.get("/", (req, res) => {
    res.send("<h1>Hello Express</h1>");
    const connection = mysql.createConnection({
        host: "103.130.216.99",
        user: "nttuanco_admin",
        password: "nttuan123@",
        database: "nttuanco_User"
    });
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });

    connection.query("select * from User", (err, rows) => {
        if(err){
            throw  err;
        }
        console.log(rows);
    });
    connection.end();
});
