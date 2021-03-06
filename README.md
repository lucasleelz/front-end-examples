# front-end-examples
front-end

## 制作favicon.icn

## 关系选择器
子选择器 vs 后代选择器

子选择器 `>` 只作用于其第一代元素 直接子元素，比如子子元素无效。
body > span

后代选择器作用于N代元素。
body span

兄弟选择器 `~`

相邻兄弟选择器 `+`

## 布局方向
行内布局，水平布局
```css
display: inline-block;
```
块布局，垂直布局
```css
display: block;
```

## flex
分别对应flex-grow、flex-shrink、flex-basis。
```css
flex: 0 1 auto;
// 相当于
flex-grow: 0 // 是否拉伸
flex-shrink: 1 // 是否压缩
flex-basis auto // 长度。

flex: 0 1 auto; // 相当于无须进行拉伸，如果可能压缩，自动计算大小。
flex: auto === flex: 1 1 auto
flex: none === flex: 0 0 auto
```


## ATOM 快捷键
代码格式化（使用Atom beautify）。
```
control+option+b
```
切换左侧菜单。
```
command + \
```

新建文件或者文件夹
```
control + 单击 某个文件夹
两个手指同时点击 某个文件夹
```
切管git管理。
```
control + shift + 9  
```

## git的使用

重写刚刚的提交使用amend，也就是说改变最近的一次提交
```
git commit --amend
```
