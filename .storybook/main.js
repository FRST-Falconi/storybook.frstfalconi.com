module.exports = {
  typescript: {
    extends: '../tsconfig.app.json',
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      }
    }
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-react-i18next'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  }
}
