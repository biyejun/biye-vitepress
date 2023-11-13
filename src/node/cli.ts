import minimist from 'minimist';
import c from 'picocolors';
import { createLogger } from 'vite';
import { version } from '../../package.json';
import { createServer } from '.';

const argv: any = minimist(process.argv.slice(2));

console.log(process.argv, 'process.argv');
console.log(argv, 'argv');

const logVersion = (logger = createLogger()) => {
  logger.info(`\n  ${c.green(`${c.bold('vitepress')} v${version}`)}\n`, {
    clear: !logger.hasWarned,
  });
};

const command = argv._[0];
const root = argv._[command ? 1 : 0];

if (root) {
  argv.root = root;
}

if (!command || command === 'dev') {
  const createDevServer = async () => {
    const server = await createServer(root);
    await server.listen();
    logVersion(server.config.logger)
    server.printUrls()
  };
  createDevServer();
}
