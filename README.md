# Reactの導入手順

React ver 15.6.1  

## 公式

https://facebook.github.io/react/  

## Reactのインストール

```sh
$ npm init
$ npm install --save react react-dom
```

## BABEL

```sh
$ npm install --save-dev babel-cli babel-preset-react babel-preset-es2015
```

.babelrcを作成する。  

## Browserify

```sh
$ npm install --save-dev browserify babelify
$ ./node_modules/.bin/browserify -t babelify index.js -o compiled_index.js
```
