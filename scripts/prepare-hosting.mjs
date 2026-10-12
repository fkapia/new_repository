import { cp, mkdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

const projectRoot = process.cwd()
const standaloneRoot = join(projectRoot, '.next', 'standalone')
const staticSource = join(projectRoot, '.next', 'static')
const staticDestination = join(standaloneRoot, '.next', 'static')
const publicSource = join(projectRoot, 'public')
const publicDestination = join(standaloneRoot, 'public')

for (const requiredPath of [join(standaloneRoot, 'server.js'), staticSource]) {
  try {
    await stat(requiredPath)
  } catch {
    throw new Error(`Missing build output: ${requiredPath}. Run this script after next build.`)
  }
}

await mkdir(staticDestination, { recursive: true })
await cp(staticSource, staticDestination, { recursive: true, force: true })

try {
  await stat(publicSource)
  await cp(publicSource, publicDestination, { recursive: true, force: true })
} catch (error) {
  if (error?.code !== 'ENOENT') throw error
}

console.log(`Hosting.com package ready: ${standaloneRoot}`)
