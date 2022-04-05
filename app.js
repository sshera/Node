/* const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj); */

/* const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`); */

// const fs = require('fs');
/* const files = fs.readdirSync('./');
console.log(files); */

/* fs.readdir('./', function(err, files) {
    if (err) console.log('error', err);
    else console.log('result', files);
}); */

const EventEmitter = require('events');
// const emitter = new EventEmitter();

/* emitter.on('logging', () => {
    console.log('message');
});

emitter.emit('logging'); */

const Logger = require('./logger');
const logger = new Logger();
// console.log(logger);

// Register a listener - must be done before event is raised
logger.on('messageLogged', (arg) => {
    console.log('listener called', arg);
});

logger.log('message');

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

/* server.on('connection', (socket) => {
    console.log('new connection...')
}); */

server.listen(3000);
console.log('listening on port 3000...');

/* function sayHello(name) {
    console.log('Hello ' + name);
} */

//sayHello('Mosh');
// console.log(window);

// globally available:
// setTimeout()
// console.log()
// clearTimeout()
// setInterval()
// clearInterval()

// var message = 'hello';
// console.log(global.message);

// console.log(module);