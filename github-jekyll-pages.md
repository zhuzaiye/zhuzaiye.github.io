# github-jekyll-pages

## jekyll

`jekyll` 是一款简单的博客系统，也可以说是一个静态网站生成器。
她有一个模版目录，存放整个静态网站的模版文件，可以通过Liquid处理模版文件，把使用标记语言Textile或Markdown编写的内容文件，按照模版格式，转换成最终的静态网站页面。

## directory

```text
_posts: 博客内容
_pages: 其他需要生成的网页，如About页
_layouts: 网页排版模板
_includes: 被模板包含的HTML片段，可在_config.yml中修改位置
assets: 辅助资源 css布局 js脚本 图片等
_data: 动态数据
_sites: 最终生成的静态网页
_config.yml: 网站的一些配置信息
index.html: 网站的入口
```

## 归档 Archive

```

```

## 问题

- 首次`jekyll serve` 出现 `jekyll-paginate` **load error**
   
```sh
# 在Gemfile中添加
group :jekyll_plugins do
      gem 'jekyll-paginate'
end
```

## 技术栈

### Liquid

Liquid 代码分为对象(object)、标记(tags)和过滤器(filter)