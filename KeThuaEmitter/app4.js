const EventEmitter = require("events");

class Dialog extends EventEmitter {
    constructor() {
        super();
        this.message = "Hello";
    }

    sayHello(data){
        console.log(`${this.message}: ${data}`);
        this.emit("hello", data);
    }

}

const dialog = new Dialog();
dialog.on("hello", function (data) {
    console.log("Co 1 loi chao moi!");
    console.log("Data: ", data)
});

dialog.sayHello("Hoa Mai");