var greetings = require('./greetings.json'); 
// file json phải có đuôi mở rộng, nếu không mặc định nodejs hiểu là file .js

var sayHello = function(){
    console.log(greetings.en);
}

module.exports = sayHello;