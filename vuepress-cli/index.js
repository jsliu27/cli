#!/usr/bin/env node
// 引入shelljs全局模式
require('shelljs/global');
// 使用命令行参数解析包插件
var argv = require('yargs')
  .option('f', {
    alias : 'name',
    demand: true,
    default: 'tom',
    describe: 'your name',
    type: 'string'
  })
  .usage('Usage: hello [options]')
  .example('hello -n tom', 'say hello to Tom')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2015')
  .argv;

// 创建目录结构
// .
// ├── docs
// │   ├── .vuepress (可选的)
// │   │   ├── components (可选的)
// │   │   ├── theme (可选的)
// │   │   │   └── Layout.vue
// │   │   ├── public (可选的)
// │   │   ├── styles (可选的)
// │   │   │   ├── index.styl
// │   │   │   └── palette.styl
// │   │   ├── templates (可选的, 谨慎配置)
// │   │   │   ├── dev.html
// │   │   │   └── ssr.html
// │   │   ├── config.js (可选的)
// │   │   └── enhanceApp.js (可选的)
// │   │
// │   ├── README.md
// │   ├── guide
// │   │   └── README.md
// │   └── config.md
// │
// └── package.json
// 获取文件名
const rootName = process.argv[3];
// 创建文件夹 -p 确保目录存在不存在就创建一个
mkdir('-p', rootName);
cd(rootName);
// npm 初始化
exec("npm init -y");
// 创建README.md文件
touch('README.md')
touch('config.md')
mkdir('-p', 'guide')
cd('guide')
touch('README.md')
cd('..')
mkdir('-p', '.vuepress')
cd('.vuepress')
touch('config.js')
touch('enhanceApp.js')
mkdir('components')
mkdir('theme')
cd('theme')
touch('Layout.vue')
cd('..')
mkdir('public')
mkdir('styles')
cd('styles')
touch('index.styl')
touch('palette.styl')
