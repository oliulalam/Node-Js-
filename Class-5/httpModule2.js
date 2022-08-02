const http = require('http');

const server = http.createServer((req, res) => {
    
  if (req.url == '/'){
    res.write('ami chalu achi vai');
    res.end();
  }

  else if (req.url == '/about'){
        res.write('this is about page');
        res.end();
  }

  else{
    res.write('page not found');
    res.end();
  }

});

server.listen(3000);

console.log('Run This port 3000');