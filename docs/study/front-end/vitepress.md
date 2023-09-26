# vitepress 使用

官方文档：https://vitepress.dev/

#### 其他教程：
vitepress从0到1 :https://blog.csdn.net/weixin_44803753/article/details/130903396



## 快速搭建

首先创建并进入一个新目录：
```bash
mkdir vitepress-demo
cd vitepress-demo
```
::: details 如果没有安装过pnpm，可以全局安装下
```
sudo npm install -g pnpm
```
:::

#### 安装 vitepress
```bash
npm add -D vitepress
```
::: details package.json 添加下面代码
```js
"type": "module",  // [!code  ++]
"pnpm": {
    "peerDependencyRules": {  // [!code  focus]
        "ignoreMissing": [
        "@algolia/client-search",
        "search-insights"
        ]
    }
}
```
:::


```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```