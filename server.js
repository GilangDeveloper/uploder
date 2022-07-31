__path = process.cwd()
const express = require('express')
const http = require('http')
const app = express()
const server = http.Server(app)
const multer = require('multer')
const path = require('path')
const { send } = require('process')
const randomstring = require("randomstring");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, randomstring.generate(10) + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

link_server = "http://uploader-gilang.herokuapp.com/"

app.use('/', express.static(__path + '/views'))
app.use('/file', express.static(__path + '/uploads'))
const y="on"
app.post('/', upload.single('upload'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file.mimetype)
    if (req.file.mimetype === "image/png") {
        res.send(`<link rel="stylesheet" href="/bootstrap.css">
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="wd-25 mt-5 mx-auto">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <input type="text" class="form-control" value="${link_server}/file/${req.file.filename}" readonly></input>
            <a href="/file/${req.file.filename}" class="btn btn-primary mt-2">Views</a>
        </div>
</div>
    </div>
    </div>`)
    }if (req.file.mimetype === "audio/mpeg") {
        res.send(`<link rel="stylesheet" href="/bootstrap.css">
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="wd-25 mt-5 mx-auto">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <input type="text" class="form-control" value="${link_server}/file/${req.file.filename}" readonly></input>
            <a href="/file/${req.file.filename}" class="btn btn-primary mt-2">Views</a>
        </div>
</div>
    </div>
    </div>`)
    } if (req.file.mimetype === "video/mp4") {
        res.send(`<link rel="stylesheet" href="/bootstrap.css">
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="wd-25 mt-5 mx-auto">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <input type="text" class="form-control" value="${link_server}/file/${req.file.filename}" readonly></input>
            <a href="/file/${req.file.filename}" class="btn btn-primary mt-2">Views</a>
        </div>
</div>
    </div>
    </div>`)
    }if (req.file.mimetype === "image/gif") {
        res.send(`<link rel="stylesheet" href="/bootstrap.css">
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="wd-25 mt-5 mx-auto">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <input type="text" class="form-control" value="${link_server}/file/${req.file.filename}" readonly></input>
            <a href="/file/${req.file.filename}" class="btn btn-primary mt-2">Views</a>
        </div>
</div>
    </div>
    </div>`)
    }else {
        res.sendFile(__path + '/views/nots.html')
    } 
})

server.listen(8080, function () {
    console.log("running")
})
