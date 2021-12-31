---
# 主题列表：Vite、React、TS、随机点餐
# 贡献主题：https://github.com/xitu/juejin-markdown-themes
theme: juejin
highlight:
---

** 闲来无事，做一个随机点餐系统玩玩，拯救点外卖的选择困难症。既然是玩，就熟悉一下其他东西。所以决定用Vite、React、TS来开发这个小系统。 **

## 一、创建项目

这里参考了大佬的文章[https://juejin.cn/post/6938671679153373214](https://juejin.cn/post/6938671679153373214)。

直接使用官方提供的模板一键生成：
```
# npm 6.x
npm init @vitejs/app vite-react-app --template react-ts

# npm 7+, 需要额外的双横线：
npm init @vitejs/app vite-react-app -- --template react-ts
```

创建完成之后，按照步骤安装依赖，执行npm run dev，即可在浏览器中打开。

这里有一个小坑：执行npm run dev之后在浏览器中只能用127.0.0.1:3000（默认3000端口）访问，无法用localhost:3000访问，查看了本地hosts文件，然后也查看了防火墙，最后发现是vite.config.js中没有加IP配置，然后添加```host: '0.0.0.0'```就可以用localhost访问了（原因还是没太搞懂）

