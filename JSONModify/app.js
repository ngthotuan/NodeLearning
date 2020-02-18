const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const obj = {
        firstName: "Hoa",
        lastName: "Mai"
    };
    res.end(JSON.stringify(obj));
}).listen(3000, "localhost");