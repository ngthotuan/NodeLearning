/**
 * Created by trungquandev.com's author on 17/08/2019.
 * server.js
 */
const express = require("express");
const app = express();
const webRoutes = require("./routers/web");

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}));

// SD middleware web router
app.use('/', webRoutes)

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
let port = 3000;
app.listen(port, () => {
  console.log(`Hello trungquandev.com, I'm running at localhost:${port}/`);
});