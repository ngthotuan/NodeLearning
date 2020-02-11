const buffer = Buffer.from("Xin chào", "utf8"); // mặc định là utf8 rồi

console.log(buffer);
console.log(buffer.toString()); // mac dinh la utf-8
console.log(buffer.toString("hex"));
console.log(buffer.toJSON());
console.log(buffer[2]);

buffer.write("Hoa");
console.log(buffer.toString());
