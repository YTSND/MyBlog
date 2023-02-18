<template><div><h1 id="bfc的作用" tabindex="-1"><a class="header-anchor" href="#bfc的作用" aria-hidden="true">#</a> BFC的作用</h1>
<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2>
<p>简单来说，BFC是一个隔离的容器，容器内的元素不会影响外面元素。</p>
<h2 id="bfc的布局规制" tabindex="-1"><a class="header-anchor" href="#bfc的布局规制" aria-hidden="true">#</a> BFC的布局规制</h2>
<ul>
<li>内部盒子会在垂直方向一个一个排放</li>
<li>相邻盒子的margin会发生重叠，（可以将盒子放在不同的BFC中才解决重叠问题）</li>
<li>计算BFC高度时，float元素也会被计算在内</li>
<li>float元素不会重叠</li>
</ul>
<h2 id="如何触发" tabindex="-1"><a class="header-anchor" href="#如何触发" aria-hidden="true">#</a> 如何触发</h2>
<ul>
<li>float元素:（除了none值）</li>
<li>定位元素: position(absolute、fixed)</li>
<li>display: (inline-block,table-cells,flex)</li>
<li>overflow: (除了visible以外的值)</li>
</ul>
</div></template>


