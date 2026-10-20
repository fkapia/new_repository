import { cp, mkdir, readdir, stat } from 'node:fs/promises'
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

const nextEnvVirtualStore = join(projectRoot, 'node_modules', '.pnpm')
const nextEnvPackage = (await readdir(nextEnvVirtualStore)).find((entry) =>
  entry.startsWith('@next+env@'),
)

if (!nextEnvPackage) {
  throw new Error('Unable to locate @next/env in the pnpm virtual store.')
}

const nextEnvSource = join(nextEnvVirtualStore, nextEnvPackage, 'node_modules', '@next', 'env')
const nextEnvDestination = join(standaloneRoot, 'node_modules', '@next', 'env')
await mkdir(join(standaloneRoot, 'node_modules', '@next'), { recursive: true })
await cp(nextEnvSource, nextEnvDestination, {
  recursive: true,
  force: true,
  dereference: true,
})

try {
  await stat(publicSource)
  await cp(publicSource, publicDestination, { recursive: true, force: true })
} catch (error) {
  if (error?.code !== 'ENOENT') throw error
}

console.log(`Hosting.com package ready: ${standaloneRoot}`)
