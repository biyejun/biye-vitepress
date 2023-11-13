import { createServer as createViteServer, type ServerOptions } from 'vite';
import { resolveConfig } from './config';

export async function createServer(root: string = process.cwd()) {
  const config = await resolveConfig(root);

  return createViteServer({
    root: config.srcDir,
    server: {
      port: 5174
    }
  });
}
