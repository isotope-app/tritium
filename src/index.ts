import { WebSocketServer } from 'ws';

import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const port = args.port || process.env.PORT || 8080;

const wss = new WebSocketServer({ port });
wss.on('connection', (conn) => {
  conn.send(`Tritium v${process.env.npm_package_version}`);

  conn.on('message', (message) => {
    console.log(`Received message => ${message}`);
  });
});

wss.on('listening', () => {
  console.log(`Tritium is listening on port ${port}`);
});
