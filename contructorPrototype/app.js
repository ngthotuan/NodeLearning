function Person(name, password){
    this.name = name;
    this.password = password;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.getPassWord = function(){
    return this.password;
}

Person.prototype.getLevel = function(){
    return this.level;
}

Person.prototype.level = "admin";

function User(name){
    this.name = name;
}

//User ke thua Person
User.prototype = new Person();

const person = new Person("Teo", "123456");
const user = new User("Ti", "12345");

console.log(person.getName());
console.log(person.level);
console.log(person.getPassWord());
console.log(user.getName());
console.log(user.level);
console.log(user.getPassWord());


//Mo rong doi tuong san co
Date.prototype.vnFormat = function(){
    const yyyy = this.getFullYear();
    const mm = this.getMonth() + 1;
    const dd = this.getDate();

    return dd + "/" + mm + "/" + yyyy;
}

const now = new Date();
const lunear = new Date(2020,0,1);
console.log(now.vnFormat());
console.log(lunear.vnFormat());

