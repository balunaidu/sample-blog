const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const uploader = multer({ dest: 'uploads/images' })


router.route('/')
    .get((req, res) => {
        res.sendFile(path.resolve('www/admin/edit/edit.html'));
    })
    .post(uploader.single('uv-file'), (req, res) => {

        if (req.body['keep-original-file-name']) {
            let oldPath = path.resolve(req.file.path);
            let newPath = path.resolve(req.file.destination, req.file.originalname);
            fs.rename(oldPath, newPath, err => {
                err ? console.log(err) : res.send(err);
            })
        } 
    });

module.exports = router;
