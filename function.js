function sayHello(){
    console.log("Hello Nodejs!");
}

sayHello();

// first-class function 
function logSaying(fn){
    fn();
}
logSaying(sayHello);

// function expression
var sayGoodbye = function(){
    console.log("Goodbye !");
}
sayGoodbye();

logSaying(function(){
    console.log("Hello Nodejs. This is expression!");
});