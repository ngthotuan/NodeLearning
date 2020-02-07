function Person(){
    this.message = "Hello Nodejs 3";
    this.sayHello = function(){
        console.log(this.message);
    }
}
module.exports = new Person();