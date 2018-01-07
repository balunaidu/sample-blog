const path = require('path');
const singleFileUpload = require('./routes/single');

module.exports = app => {
    app.get('/', (req, res) => res.sendFile(path.resolve('www/index.html')));
    app.use('/upload', singleFileUpload);
};