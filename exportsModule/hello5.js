var message = "Hello Nodejs 5";

function sayHello(){
    console.log(message);
}

module.exports = {
    sayHello: sayHello
}