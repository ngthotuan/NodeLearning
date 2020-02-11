const util = require("util")


function Person(){
    this.firstName = "Hoa";
    this.lastName = "Mai";
}

Person.prototype.sayHello = function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}

function Student() {
    //Person.call(this);
    Person.apply(this);
    this.id = "1";
}

util.inherits(Student, Person); //=> phải sử dụng call, apply , nếu ko sẽ thành undefined

const sv = new Student();
sv.sayHello();
