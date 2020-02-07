var english = require('./english');
var vietnamese = require('./vietnamese');

var greet = function(){
    english();
    vietnamese();
}

module.exports = {
    english: english,
    vietnamese: vietnamese
}