import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import image from 'rollup-plugin-img'
import pkg from './package.json'

// Externaliza toda dependencia (e seus subpaths, ex.: @mui/material/Button) para
// nao empacotar node_modules dentro da lib — o consumidor faz o dedup.
const externalDeps = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})]
const external = id => externalDeps.some(dep => id === dep || id.startsWith(`${dep}/`))

// postcss: extract:false mantem o CSS inline/injetado dentro de cada modulo. Se
// fosse extraido para um arquivo unico, o tree-shaking do build ESM quebraria.
const postcssPlugin = () => postcss({ plugins: [], extract: false })

// Plugins isolados por config (typescript2 mantem cache proprio; instancias
// separadas + cacheRoot distinto evitam conflito ao rodar os dois builds).
// cacheRoot fica em node_modules/.cache (padrao do plugin, ja ignorado) para
// nao poluir a raiz do repo.
const plugins = ({ declaration, cacheRoot }) => [
  typescript({
    include: ['**/*.ts', '**/*.tsx'],
    exclude: ['**/*.d.ts', '**/*.stories.tsx', '**/*.stories.ts'],
    check: false,
    cacheRoot,
    tsconfigOverride: { compilerOptions: { declaration, declarationMap: declaration } }
  }),
  postcssPlugin(),
  image({ limit: 1000000 })
]

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  // ESM tree-shakeable: preserveModules emite um arquivo por modulo-fonte (espelha
  // a arvore), permitindo ao webpack do consumidor incluir SO o que e usado.
  {
    input: './index.tsx',
    output: {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: '.'
    },
    external,
    plugins: plugins({ declaration: false, cacheRoot: 'node_modules/.cache/rts2-esm' })
  },
  // CJS (compat): mantem o bundle unico apontado por `main` para os demais
  // consumidores. Aqui tambem geramos os .d.ts (uma unica vez) em dist/.
  {
    input: './index.tsx',
    output: {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    },
    external,
    plugins: plugins({ declaration: true, cacheRoot: 'node_modules/.cache/rts2-cjs' })
  }
]
