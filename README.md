# zhi

🛍️ A siyuan-note theme with plugin and blog bundled

[中文版](README_zh_CN.md)

[![dev checks](https://img.shields.io/github/checks-status/terwer/zhi/dev?label=build)](https://github.com/terwer/zhi/tree/dev)
![version](https://img.shields.io/github/release/terwer/zhi.svg?style=flat-square)
![license](https://img.shields.io/badge/license-GPL-blue.svg?style=popout-square)

[![](https://img.shields.io/badge/build-assets-green)](https://github.com/terwer/zhi)
[![](https://img.shields.io/badge/theme-source-red)](https://github.com/terwer/zhi/tree/dev/packages/zhi-mini)
[![](https://img.shields.io/badge/dynamic-blog-blue)](https://github.com/terwer/zhi/tree/dev/packages/zhi-blog)
[![](https://img.shields.io/badge/static-blog-purple)](https://github.com/terwer/zhi/tree/dev/packages/zhi-blog-astro)

> ⚠️ Special Reminder 1: 1.0.0 is an early version that is available for testing purposes only and its functionality is
> not yet comprehensive. Please feel free to raise issues to provide valuable feedback. For the features of this
> version,
> please refer to [Core Features](#Core Features).

> ⚠️ Special Reminder 2: The plugin system defaults to `Safe Mode` , You need to click the settings menu in the upper
> right corner to turn off Safe Mode before you can enable the
> plugin system.

> ⚠️ Special Reminder 3: All plugins except for the theme core plugin are
> disabled by default, so you need to manually enable the corresponding plugins in the plugin list to use them.

## Quick start

You can download the `zhi` theme directly in the Market of siyuan-note, and then select the `zhi` theme
in `Settings` - `Appearance` - `Theme` to change the appearance of the notebook.

Note: `zhi` theme only supports siyuan-note `2.7.6+`, or you must upgrade siyuan-note first.

## Design Philosophy

- The theme core should be kept lightweight and compact as much as possible.
- Plugins should be used as much as possible to implement functions.
- Plugin functions should be single-purpose to avoid brainless accumulation of functions.
- Components should be kept as reusable as possible.

## Core Features

The theme is inspired by `Zhihu` but not limited to its style. The appearance optimization includes but is not limited
to:

- Font style beautification, using `Open Sans` for English and `LXGW WenKai` for Chinese
- Background color optimization, overall layout and spacing optimization
- Code block beautification, similar to the Mac window style
- It natively supports the plugin system and comes with many built-in plugins. The plugin system is supported by
  community developers.
  - SourceNote publishing tool plugin
  - Document image background automatic transparency plugin
  - Blog plugin
- It can handle both the theme and the preview. Installing the zhi theme is equivalent to installing an additional
  plugin system and an online blog.
  - Blog homepage: http://127.0.0.1:6806/appearance/themes/zhi/blog/
  - Widget version of the blog management and publishing
    homepage: http://127.0.0.1:6806/widgets/sy-post-publisher/blog/?from=siyuanNewWin

> Note: 🌹 The plugin system is provided by enthusiastic community developers. Please understand the relevant mechanisms in
> detail before using.

## Version Planning

- 1.1.x
  - [ ] Blog permission control

## Project Structure

```
├── blog - root directory of the blog
├── theme - root directory of the theme
├── plugins - root directory of the plugins
├── scripts - root directory of the scripts
├── docs - help documentation
├── temp - temporary compression packages for the blog and theme plugins
├── .github - Github-Actions-CI continuous integration and release-please automatic release
├── theme.json - theme description file
├── theme.js - theme js entry
├── theme.css - theme css entry
├── README.md - project notes
```

> Special Note:
> 
> - The theme will be automatically detected and extracted to the corresponding directory based on the version number.
> - After releasing a new version, the previous version will be deleted.


## Technical Roadmap

[tech](tech.md)

## Acknowledgments

Thanks to [zuoez02](https://github.com/zuoez02/siyuan-plugin-system) for providing the plugin system.
