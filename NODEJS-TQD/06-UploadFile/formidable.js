// upload file use formidable - http-fs-url
// https://www.npmjs.com/package/formidable
const http = require('http')
const fs = require('fs')
const url = require('url')

const formidable = require('formidable')


const hostname = 'localhost'
const port = 8887
const uploadPath = 'uploads/'

const server = http.createServer((req, res) => {
    const urlRequest = url.parse(req.url, true)
    const pathRequest = urlRequest.pathname
    if(pathRequest === '/'){
        res.write('<h1>Welcome to my website click <a href="/uploads">here</a> to upload file</h1>')
        res.end()
    }
    else if(pathRequest === '/uploads'){
        if(req.method.toUpperCase() === 'POST'){
            //upload file
            const form = new formidable.IncomingForm()
            
            //set upload dir ( temp )
            form.uploadDir = uploadPath

            //parse du lieu
            form.parse(req, (err, fields, files) => {
                if(err) throw err
                const tempPath = files.file.path
                const newPath = form.uploadDir + files.file.name

                console.log(fields)
                console.log(files)
                fs.rename(tempPath, newPath, err => {
                    if(err) {
                        res.writeHead(302, {'Location': '/uploads'});
                        res.end();
                    }
                    else {
                        res.write('<h1>Upload file successfully! Click <a href = "/uploads"> here</a> to upload other file</h1>')
                        res.end()
                    }
                })
                
            })
        }
        else{
            const viewFile = './views/upload.html'
            fs.readFile(viewFile, (err, data) => {
                if(err){
                    console.error(err)
                    res.write('<h1> Server read views file error. See log to more detail!</h1>')
                    res.end()
                }
                
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data);
        
                res.end();
            })
        }
    } else{
        res.writeHead(404)
        res.write('<h1>404 Not Found !!!</h1>')
        res.end()
    }
})


server.listen(port, hostname, () => {
    console.log(`Server is running on ${hostname}:${port}`)
})
