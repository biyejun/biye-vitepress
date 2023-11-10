import { promises as fs } from 'fs';
import { builtinModules, createRequire } from 'module';

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const DEV = !!process.env.DEV
const PROD = !DEV

console.log(DEV, 'DEV');
console.log(PROD, 'PROD');
console.log(process.argv, 'process.argv');


const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
  ...builtinModules.flatMap((m) =>
    m.includes('punycode') ? [] : [m, `node:${m}`]
  )
]
