import { WebSocket, ClientOptions, Data } from 'ws';

export default {
  run() {
    const client = new WebSocket('ws://localhost:3000');
    client.on('open', () => {
      client.send('Hello World!');
    });
    client.on('message', (message: Data) => {
      console.log(`Received message => ${message}`);
    });
  },
};
