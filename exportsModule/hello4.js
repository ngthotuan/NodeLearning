function Person(){
    this.message = "Hello Nodejs 4";
    this.sayHello = function(){
        console.log(this.message);
    }
}
module.exports = Person;