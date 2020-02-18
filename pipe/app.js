const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    res.writeHead(200,{'Content-type': 'text/html'});
    // const html = fs.readFileSync(__dirname + "/index.html", "utf8");
    // res.end(html);
    fs.createReadStream(__dirname + "/index.html").pipe(res);
}).listen(3000, "127.0.0.1");