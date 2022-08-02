const fs = require('fs');

// fs.writeFileSync('myfile.txt', 'hello programmers');

// fs.appendFileSync('myfile.txt', 'hello programmers');

// const data = fs.readFileSync('myfile.txt');

const data = fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString()); 
});

console.log('Hello'); 