var Emitter = require("./emitter");

var emitter = new Emitter();

emitter.on("bad", function(){
    console.log("Một môn nào đó bị điểm kém !!");
});

emitter.on("bad", function(){
    console.log("Đã có điểm kém, cần phát thông báo tới phụ huynh!");
});

// có 1 bảng điểm
var scores = [10, 4];

for(var s of scores){
    if(s < 5){
        console.log("Điểm thấp quá", s);
        emitter.emit("bad");
    }
    // insert db.
}