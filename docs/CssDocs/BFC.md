# BFC的作用
## 描述
 简单来说，BFC是一个隔离的容器，容器内的元素不会影响外面元素。
## BFC的布局规制
  - 内部盒子会在垂直方向一个一个排放
  - 相邻盒子的margin会发生重叠，（可以将盒子放在不同的BFC中才解决重叠问题）
  - 计算BFC高度时，float元素也会被计算在内
  - float元素不会重叠
## 如何触发
  - float元素:（除了none值）
  - 定位元素: position(absolute、fixed)
  - display: (inline-block,table-cells,flex)
  - overflow: (除了visible以外的值)