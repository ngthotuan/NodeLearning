const firstFunc = function () {
    console.log("First Function");
}

const secondFunc = function () {
    setTimeout(firstFunc, 5000);
    console.log("Second Function");
}

secondFunc();