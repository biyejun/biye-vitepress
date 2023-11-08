import { copy } from 'fs-extra'
import fg from 'fast-glob'

fg.sync('src/shared/**/*.js').forEach(async (file) => {
  await Promise.all([
    copy(file, file.replace(/^src\/shared\//, 'src/node/')),
    copy(file, file.replace(/^src\/shared\//, 'src/client/'))
  ])
})