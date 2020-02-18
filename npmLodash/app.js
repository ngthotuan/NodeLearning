const _ = require("lodash");

//array
const arr = [1,2];
const other = _.concat(arr, 1, 3, [3], [[4,1]]);
console.log(other);

//collection
const users = [
    {user: "Hoa", age: 30, active: true},
    {user: "Mai", age: 34, active: false},
    {user: "Phượng", age: 50, active: true}
];

const othUser = _.find(users, (user) => { return user.age < 40;});
console.log(othUser);