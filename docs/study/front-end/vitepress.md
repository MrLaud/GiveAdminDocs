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
package.json 添加下面代码

```js{5-13}
{
    "devDependencies": {
        "vitepress": "^1.0.0-rc.20"
    },
    "type": "module",
    "pnpm": {
        "peerDependencyRules": {
        "ignoreMissing": [
            "@algolia/client-search",
            "search-insights"
        ]
        }
    }
}
```
#### 初始化
```bash
pnpm dlx vitepress init
```
你会遇到几个简单的问题:
```bash
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  GiveAdmin
│
◇  Site description:
│  GiveAdmin Docs
│
◇  Theme:
│  Default Theme + Customization
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run pnpm run docs:dev and start writing.
```