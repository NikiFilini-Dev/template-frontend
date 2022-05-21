import reactRefresh from '@vitejs/plugin-react-refresh'
import * as dotenv from 'dotenv'
import { defineConfig } from 'vite'
import ViteFonts from 'vite-plugin-fonts'
import PkgConfig from 'vite-plugin-package-config'
import sassDts from 'vite-plugin-sass-dts'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

import reactCssModule from './vite-tools/react-css-modules'

const generateScopedName = '[path]___[name]__[local]'

dotenv.config()

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  },
  clearScreen: false,
  plugins: [
    sassDts(),
    PkgConfig(),
    tsconfigPaths(),
    reactRefresh(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        typescript: false,
        icon: '1em',
        replaceAttrValues: { '#323232': 'currentColor' },
      },
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Montserrat',
            styles: 'ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900',
          },
        ],
      },
    }),
    reactCssModule({
      generateScopedName,
      excludeFiles: [/main\.tsx/],
      filetypes: {
        '.css': {
          syntax: 'postcss',
        },
      },
    }),
  ],
  css: {
    modules: {
      generateScopedName,
      localsConvention: 'camelCase',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          const startsWith = (name) => {
            const dirname = __dirname.replace(/\\/g, '/')
            id = id.replace(dirname + '/node_modules/', '')
            return id.startsWith(name)
          }

          if (startsWith('react')) return 'react'
          if (startsWith('lodash')) return 'lodash'
          if (startsWith('faker')) return 'faker'
          if (startsWith('mobx')) return 'mobx'
        },
      },
    },
  },
})
