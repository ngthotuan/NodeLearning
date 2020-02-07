var hello1 = require('./hello1');

hello1();

var hello2 = require('./hello2').sayHello;
hello2();

var hello3 = require('./hello3');
hello3.sayHello();
hello3.message = "Changed messgage nodejs 3!!!";

var hello32 = require('./hello3');
hello32.sayHello(); //=> nodejs tự tìm lại module đã require trc đó => hello32 là hello3

var Hello4 = require('./hello4');
var hello4 = new Hello4();
hello4.sayHello();
hello4.message = "changed messgage nodejs 3!!!";


var hello5 = require('./hello5');
hello5.sayHello();