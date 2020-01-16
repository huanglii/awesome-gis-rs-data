const {
  override,
  fixBabelImports,
  useBabelRc,
  addPostcssPlugins,
  addLessLoader,
  addWebpackAlias,
  useEslintRc
} = require('customize-cra')

const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

process.env.GENERATE_SOURCEMAP = 'false'

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  useBabelRc(),
  addPostcssPlugins([require('autoprefixer')]),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#3eaf7c',
      '@app-max-width': '1400px'
    }
  }),
  addWebpackAlias({
    '@': resolve('src')
  }),
  useEslintRc('.eslintrc')
)
