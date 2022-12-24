interface ServerOptions {
  port: number;
}

class Server {
  port: number;

  constructor(opts: ServerOptions) {
    this.port = opts.port;
  }
}

export default Server;
