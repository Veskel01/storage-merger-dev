// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http');

const devServer = http.createServer();
const PORT = 1337;
const PID = process.pid;
devServer.on('connection', () => console.log(`[${PID}] new connection to dev server`));
devServer.on('listening', () => console.log(`[${PID}] Dev server started on port: ${PORT}`));
devServer.on('close', () => console.log(`[${PID}] Closing and removing docker containers`));
devServer.on('error', (err) => console.log(`[${PID}] Error occured, reason: ${err}`));
devServer.listen(PORT, '127.0.0.1');
