import { program } from 'commander';
import Client from './client/index.js';
import Server from './server/index.js';

program.option('--client').option('--server');

program.parse();

const options = program.opts();

if (options.client) {
  const client = new Client();
} else if (options.server) {
  const server = new Server({ port: 3000 });
}
