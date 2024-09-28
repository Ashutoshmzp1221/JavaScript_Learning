const fs = require('fs');
const transformStream = require('stream');
let filestream = fs.createReadStream(__dirname + "/input.txt");
let outputStream = process.stdout;

// readstream.pipe(writestream)

filestream.pipe(outputStream);