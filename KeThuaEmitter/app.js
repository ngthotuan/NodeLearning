const eventEmitter = require("events");
const util = require("util");

function Dialog(){
    this.message = "Xin Chào";
}

util.inherits(Dialog, eventEmitter);

Dialog.prototype.sayHello = function (data) {
    console.log(this.message, data);
    this.emit("hello");
}
const dialog = new Dialog();

dialog.on("hello", function () {
    console.log("Có một lời chào mới!");
});
dialog.sayHello("Hoa Mai");
