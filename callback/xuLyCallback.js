function readDatabase(callback) {
    //read done
    //gia su doc dc tu csdl bien user
    const user = {
        username: "pthoa",
        fullname: "Hoa Mai"
    };

    callback(user);
}

// yeu cau truy van du lieu
readDatabase(function (data) {
    console.log("Read done callback");
    console.log("Data: ", data);
});

// o mot noi khac

readDatabase(function (data) {
    console.log("Read done callback 2");
    console.log("Username: ", data.username);
});