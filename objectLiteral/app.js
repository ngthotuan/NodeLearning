var person = {
    firstName: "Tuan",
    lastName: "Nguyen Tho",
    sayHello: function(){
        console.log("Hello "+ this.firstName + " " + this.lastName);
    }
}

person.sayHello();

console.log(person["firstName"]);