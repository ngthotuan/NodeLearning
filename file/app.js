const fs = require("fs");

// đọc file đồng bộ -> đọc file nhỏ, file cầu hình
const content = fs.readFileSync(__dirname + "/readme.txt", "utf8");
console.log(content);

// đọc file đồng bộ
fs.readFile(__dirname + "/readme.txt","utf8", (err, data) =>{
   if(err) throw err;
   else console.log(data);
});