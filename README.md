# Reactの導入手順

React ver 15.6.1  

## 公式

https://facebook.github.io/react/  

## Reactのインストール

```sh
npm init
npm install --save react react-dom
```

## BABEL

```sh
npm install --save-dev babel-cli babel-preset-react
echo '{ "presets": ["react"] }' > .babelrc
echo '<h1>Hello, world!</h1>' > index.js
```
