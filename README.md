# eslint-config-daniel

张明明个人项目 eslint 统一配置

## 使用

### 标准规则

基本安装

```shell
npm install eslint babel-eslint eslint-config-daniel eslint-plugin-html --save-dev
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    root: true,
    extends: [
        'eslint-config-daniel'
    ]
};
```

### Vue

Vue 项目安装

```shell
npm install eslint-plugin-vue --save-dev // 额外安装
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    root: true,
    extends: [
        // 修改成如下使用
        'eslint-config-daniel/vue'
    ]
};
```

### React

React 项目安装

```shell
npm install eslint-plugin-react --save-dev // 额外安装
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    root: true,
    extends: [
        // 修改成如下使用
        'eslint-config-daniel/react'
    ]
};
```
### 代码组成

代码的组织形式

```shell
// index.js
一些常见的 JS 和 HTML 文件的基础 eslint 配置。
```

```shell
// react.js
主要是关于 React 的配置，里面 plugin 引入了 eslint-plugin-react 插件，并使用 extends: ['./index.js'], 合并外层的文件。使用的时候只需要配置本地 .eslintrc 文件的 extends 为 'eslint-config-daniel/react'，并且下载相应的插件。
```

```shell
// vue.js
主要是关于 Vue 的配置，里面 plugin 引入了 eslint-plugin-vue 插件，并使用 extends: ['./index.js'], 合并外层的文件。使用的时候只需要配置本地 .eslintrc 文件的 extends 为 'eslint-config-daniel/vue'，并且下载相应的插件。
```