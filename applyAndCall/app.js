const obj = {
    name: "Hoa Mai",
    sayHello: function (param1, param2) {
        console.log(`Hello ${this.name}`);
        console.log("Params: ",param1,param2);
    }
}

obj.sayHello("Xin chào", "2016");
// call và apply để thay đổi ngữ cảnh bên trong của obj chỉ khác nhau cách truyển tham số vào...
obj.sayHello.call({name: "Yến Phượng"},"Xin chào", "2016");
obj.sayHello.apply({name: "Yến Phượng"},["Xin chào", "2016"]);
