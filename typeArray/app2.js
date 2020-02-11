const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);

view[0] = 10;
view[1] = 14;
// view[2] = 12;

console.log(view);
console.log(buffer);