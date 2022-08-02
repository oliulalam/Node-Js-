const http = require('http');

//create a server
const server = http.createServer();

//given server port
server.listen(3000);

console.log('listening on port 3000')