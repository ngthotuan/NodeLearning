class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        if(this.lastName === undefined)
            console.log("Hello", this.firstName);
        else
            console.log("Hello",this.firstName,this.lastName);
    }
}

const hoa = new Person("Hoa");
const mai = new Person("Mai", "Phuong");

hoa.sayHello();
mai.sayHello();