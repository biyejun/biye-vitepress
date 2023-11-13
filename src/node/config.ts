import { normalizePath, createLogger } from 'vite';
import path from 'path';

// TODO: 解析config
export async function resolveConfig(root: string = process.cwd()) {
  const srcDir = normalizePath(path.resolve(root, '.'));

  const config = {
    root,
    srcDir,
  };

  console.log(config, 'config');

  return config;
}
