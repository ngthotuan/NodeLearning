var person = {
    firstName: "",
    lastName: "",
    setFullName: function(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    },
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

var hoa = Object.create(person);
hoa.setFullName("Hoa","Phan Thi");

var yen = Object.create(person);
yen.setFullName("Yen", "Hoang");

console.log(hoa.getFullName());
console.log(yen.getFullName());