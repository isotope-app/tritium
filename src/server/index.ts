import { WebSocketServer, ServerOptions, Data } from 'ws';

export default {
  run() {
    const server = new WebSocketServer({ port: 3000 });
    server.on('connection', (ws) => {
      ws.on('message', (message: Data) => {
        console.log(`Received message => ${message}`);
      });
      ws.send('Hello World!');
    });
  },
};
