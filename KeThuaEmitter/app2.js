const eventEmitter = require("events");
const util = require("util");

function Dialog(){
    this.message = "Xin Chào";
}

util.inherits(Dialog, eventEmitter);

Dialog.prototype.sayHello = function (data) {
    console.log(this.message, data);
    this.emit("hello", data); // đấy data cho hàm lắng nghe
}
const dialog = new Dialog();

dialog.on("hello", function (data) { //nhận data
    console.log("Có một lời chào mới!", data);
});
dialog.sayHello("Hoa Mai");
