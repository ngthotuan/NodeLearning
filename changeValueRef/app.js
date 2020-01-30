// changeByValue
function changeByValue(value){
    value = 10;
}

const a = 2; // var, let -> ok
changeByValue(a);
console.log(a);


//changeByRef
function changeByRef(obj){
    obj.prop1 = function() {
    },
    obj.value = 3;
}

let c = {}; // var, let ok
changeByRef(c);
console.log(c);