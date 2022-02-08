<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
  Chromatic's Design Systems for Developers template
</h1>

# IMPORTANT

- A pasta ./dist está comitada porque é a biblioteca de componentes (gerada por `npm run build`), idealmente nós fariamos um CI/CD e publicariamos essa pasta junto com o package.json via NPM ou similar
- Para usar os componentes em outros projetos: `npm i --save git+git@github.com:FRST-Falconi/storybook.frstfalconi.com.git#master` (pode pedir para autorizar)

## How to run

```
npm install
npm run sb
```

## How gen new version (./dist)

```
npm install
npm run build
```

## Learning Storybook

1. Read our introductory tutorial over at [Storybook tutorials](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
3. See our official documentation at [Storybook](https://storybook.js.org/).
