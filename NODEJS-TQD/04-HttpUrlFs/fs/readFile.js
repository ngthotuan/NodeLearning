const fs = require('fs')


fs.readFile('cmnd.jpeg', 'base64', (err, data) => {
    if(err) throw err

    console.log(data)
})