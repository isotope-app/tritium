import { program } from 'commander';
import Client from './client/index.js';
import Server from './server/index.js';

program.option('--client').option('--server');

program.parse();

const options = program.opts();

if (options.client) {
  Client.run();
} else if (options.server) {
  Server.run();
}
