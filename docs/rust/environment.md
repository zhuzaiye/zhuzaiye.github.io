---
title: 环境搭建
permalink: /docs/rust/environment
tags: 
key: docs-rust-environment
---

![rust.svg](/docs/rust/images/rust.svg.png "Image@128x128"){:width="128px" height="128px"}

## Rust Feature

1. 更加安全、不易崩溃
2. 不需要垃圾回收机制，不会为了内存安全而引入性能负担
3. 拥有一系列相互协作的特性，编程更加容易、便于维护与调试

## 搭建

从[此处下载](https://www.rust-lang.org/tools/install)

1. Linux 环境

  ```bash
  # 下载安装rust
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  # 查看$HOME/.cargo/bin是否在~/.bash_profile
  # 如果每日有, 将rust的工具路径加入PATH
  export PATH="$HOME/.cargo/bin:$PATH"
  source ~/.bash_profile
  # 查看PATH是否已加入成功
  rustc --version

  # 更新rust
  rustup uodate

  # 卸载rust
  rustc self uninstall
  ```

2. windowa 环境
 
   **atttion**: rust依赖C语言，windows需要具备c的编译环境

  ```bash
  # 下载rustup-init.exe安装程序
  # 运行rustup-init.exe安装包
  # 如果你已经安装 MSVC （推荐），那么安装过程会非常的简单，输入 1 并回车，直接进入第二步。
  # 如果你安装的是 MinGW，那么你需要输入 2 （自定义安装), default host triple 的 "msvc" 改为 "gnu" 再输入安装程序
  # next...
  ```

## cargo

`cargo`是rust提供的**构建工具**和**包管理工具**

  | command       | description                   |
  | :------------ | :---------------------------- |
  | cargo new     | 建项目 (可执行二进制程序和库) |
  | cargo build   | 编译                          |
  | cargo check   | 不编译的检查错误              |
  | cargo run     | 运行项目                      |
  | cargo test    | 测试项目                      |
  | cargo doc     | 构建文档                      |
  | cargo publish | 将构建库发布crates.io         |
  | cargo clean   | 移除项目中target文件夹        |
  | cargo update  | 更新项目所有依赖库            |

  ```bash
  # 创建二进制程序
  cargo new project_name
  # 创建ku
  cargonew project_name --lib
  ```
  