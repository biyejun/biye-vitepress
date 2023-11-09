import { promises as fs } from 'fs';
import { builtinModules, createRequire } from 'module';

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
  ...builtinModules.flatMap((m) =>
    m.includes('punycode') ? [] : [m, `node:${m}`]
  )
]

console.log(external, 'external~~~');

