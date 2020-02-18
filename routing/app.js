const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if(req.url === "/" || req.url === "/index.html"){
        fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
    }
    else if(req.url === "/api"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const obj = {
            firstName: "Hoa",
            lastName: "Mai"
        };
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404);
        res.end("Not Found");
    }

}).listen(3000, "127.0.0.1", () => {
    console.log("Server is running at ","http://127.0.0.1:3000");

});
