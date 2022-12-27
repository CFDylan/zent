(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[5892],{5892:(n,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var s=a(73450),e=a(27378),o=a(57318),c=a(40937),p=a(24246);function d(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,s)}return a}function l(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,s.Z)(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}var r=function(){return(0,p.jsx)(c.V.TextBlock,{rows:8})},i=function(){return(0,p.jsx)(c.V.TextBlock,{rows:5,dashed:!1})},u=function(){return(0,p.jsx)(c.V.RichTextBlock,{rows:4})},h=function(){return(0,p.jsx)(c.V.RichTextBlock,{rows:7,shape:"rect",size:160,dashed:!1})},k=function(){return(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,p.jsx)(c.V.Circle,{diameter:160}),(0,p.jsx)(c.V.TextBlock,{rows:6,style:{margin:"0 10px"}}),(0,p.jsx)(c.V.Rectangle,{width:160,height:160})]})};function m(n){return(0,p.jsx)(n.tag,l(l({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function g(n){return(0,p.jsx)(m,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function y(n){return(0,p.jsx)(m,{tag:"style",html:n.style})}function f(n,t){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(t+=n.offsetTop),f(n.parentNode,t);return t}class b extends e.Component{constructor(...n){super(...n),(0,s.Z)(this,"state",{showCode:!1}),(0,s.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,t=this.props,a=t.title,s=t.src,e=t.children;return(0,p.jsxs)("div",{className:"zandoc-react-demo",children:[(0,p.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,p.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,p.jsx)("div",{className:"zandoc-react-demo__title",children:(0,p.jsx)("p",{children:a||""})}),(0,p.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,p.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,p.jsx)(m,{tag:"code",html:s,attributes:{className:"language-jsx"}})})]})}}class v extends e.Component{componentDidMount(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&(0,o.l)(document.documentElement,0,f(t,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(y,{style:""}),e.createElement(g,{html:'<h2 class="anchor-heading"><a href="#placeholder-zhan-wei-kuai">¶</a><a href="javascript:void(0)" id="placeholder-zhan-wei-kuai" class="anchor-point"></a>Placeholder 占位块</h2>\n<p>占位块，用于区块等待状态时的占位展示。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>当区块处于渲染中或者加载异步数据时，可以使用此组件减少用户等待时的焦虑感。</li>\n<li>提供了可以组合的基础组件，以及常用预设组合。</li>\n<li>预设组合不满足需求时可以使用提供的基础组件自定义。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),e.createElement(b,{title:"文本块",id:"Demotext",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.TextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(r)),e.createElement(b,{title:"实线文本块",id:"Demotextnodashed",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.TextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">dashed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(i)),e.createElement(b,{title:"富文本块",id:"Demorichtext",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.RichTextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(u)),e.createElement(b,{title:"富文本块(矩形)",id:"Demorichtextrect",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.RichTextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">}</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token attr-name">dashed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(h)),e.createElement(b,{title:"自定义占位块",id:"Democustom",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">\'flex\'</span><span class="token punctuation">,</span> <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">\'center\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.Circle</span></span> <span class="token attr-name">diameter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.TextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">\'0 10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.Rectangle</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(k)),e.createElement(g,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>预设组合组件包括：<code>TextBlock</code> 文本块，以及 <code>RichTextBlock</code> 富文本块。</p>\n<p>基础组件包括：<code>TextRow</code>, <code>TextRowDashed</code>, <code>Circle</code> 以及 <code>Rectangle</code>，当预设组合组件不满足需求时可以使用这些基础组件自定义新的占位块。</p>\n<h3 class="anchor-heading"><a href="#textblock">¶</a><a href="javascript:void(0)" id="textblock" class="anchor-point"></a>TextBlock</h3>\n<p>文本块，可以控制行内是否分段。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>rows</td>\n<td>文本块行数</td>\n<td><code>number</code></td>\n<td>是</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>widths</td>\n<td>文本块宽度池，文本行宽度是从这个数组里循环取的。每个宽度都是百分比</td>\n<td><code>number[]</code></td>\n<td>否</td>\n<td>略</td>\n<td></td>\n</tr>\n<tr>\n<td>dashed</td>\n<td>文本行是否分段</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>dashSegments</td>\n<td>文本行分段配置池，每段都是百分比或者固定宽度</td>\n<td><code>(number | string)[][]</code></td>\n<td>否</td>\n<td>略</td>\n<td></td>\n</tr>\n<tr>\n<td>lineSpacing</td>\n<td>顶部间距</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>否</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>额外样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#richtextblock">¶</a><a href="javascript:void(0)" id="richtextblock" class="anchor-point"></a>RichTextBlock</h3>\n<p>支持所有 <code>TextBlock</code> 的参数，以及如下额外参数。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>shape</td>\n<td>图形形状，支持圆形和正方形</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'circle\'</code></td>\n<td><code>\'rect\'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>图形大小</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>否</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#textrow">¶</a><a href="javascript:void(0)" id="textrow" class="anchor-point"></a>TextRow</h3>\n<p>文本行，整行显示，无分段。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>lineSpacing</td>\n<td>顶部间距</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>否</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>额外样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#textrowdashed">¶</a><a href="javascript:void(0)" id="textrowdashed" class="anchor-point"></a>TextRowDashed</h3>\n<p>分段文本行。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>segments</td>\n<td>分段配置</td>\n<td><code>(number | string)[]</code></td>\n<td>否</td>\n<td>随机生成</td>\n<td></td>\n</tr>\n<tr>\n<td>lineSpacing</td>\n<td>顶部间距</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>否</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>额外样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#circle">¶</a><a href="javascript:void(0)" id="circle" class="anchor-point"></a>Circle</h3>\n<p>圆形，可以指定半径。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>diameter</td>\n<td>圆直径</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>否</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>额外样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#rectangle">¶</a><a href="javascript:void(0)" id="rectangle" class="anchor-point"></a>Rectangle</h3>\n<p>矩形，可以指定长宽。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>width</td>\n<td>宽度</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>否</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>height</td>\n<td>高度</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>否</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>额外样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>是否开启动画</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}},40937:(n,t,a)=>{"use strict";a.d(t,{V:()=>g,Z:()=>y});var s=a(59312),e=a(24246),o=a(27378),c=a(60042),p=a.n(c),d=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.lineSpacing,o=n.animate,c=n.style,d={marginTop:a},l=p()("zent-placeholder-text-row","zent-placeholder-shape",{"zent-placeholder-shape--animate":o},t);return(0,e.jsx)("div",{className:l,style:(0,s.pi)((0,s.pi)({},d),c),"data-zv":"10.0.6"},void 0)},t.defaultProps={lineSpacing:"0.7em",animate:!0},t}(o.PureComponent),l=[[61.8,38],[30,25,44],[20,75],[33,16,20,27],[12,32,53],[45,12,42],[20,10,47,18],[14,47,37]],r=function(n){function t(t){var a,s=n.call(this,t)||this;return s.state={segments:(a=l,a[Math.floor(Math.random()*a.length)])},s}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.lineSpacing,o=n.animate,c=n.segments,d=n.style,l={marginTop:a},r=p()("zent-placeholder-text-row-dashed",t),i=p()("zent-placeholder-shape",{"zent-placeholder-shape--animate":o}),u=Array.isArray(c)?c:this.state.segments;return(0,e.jsx)("div",(0,s.pi)({className:r,style:(0,s.pi)((0,s.pi)({},l),d),"data-zv":"10.0.6"},{children:u.map((function(n,t){return(0,e.jsx)("div",(0,s.pi)({className:"zent-placeholder-text-row-dashed-segment",style:{width:n+"%",paddingLeft:0===t?0:"0.3em"},"data-zv":"10.0.6"},{children:(0,e.jsx)("div",{className:i,"data-zv":"10.0.6"},void 0)}),t)}))}),void 0)},t.defaultProps={lineSpacing:"0.7em",animate:!0},t}(o.PureComponent),i=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.style,s=n.animate,o=p()("zent-placeholder-shape",{"zent-placeholder-shape--animate":s},t);return(0,e.jsx)("div",{className:o,style:a,"data-zv":"10.0.6"},void 0)},t.defaultProps={style:{},animate:!0},t}(o.PureComponent),u=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.diameter,o=n.style,c=(0,s._T)(n,["className","diameter","style"]),d=p()("zent-placeholder-circle",t),l=(0,s.pi)({height:a,minWidth:a},o);return(0,e.jsx)(i,(0,s.pi)({className:d,style:l},c),void 0)},t.defaultProps={style:{},animate:!0,diameter:80},t}(o.PureComponent),h=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.width,o=n.height,c=n.style,d=(0,s._T)(n,["className","width","height","style"]),l=p()("zent-placeholder-rectangle",t),r=(0,s.pi)({minWidth:a,height:o},c);return(0,e.jsx)(i,(0,s.pi)({className:l,style:r},d),void 0)},t.defaultProps={style:{},animate:!0,width:80,height:80},t}(o.PureComponent),k=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.getRowStyle=function(n){var a=t.props.widths;return{width:a[n%a.length]+"%"}},t.getRows=function(){for(var n=t.props,a=n.rows,o=n.lineSpacing,c=n.animate,p=n.dashed,l=n.dashSegments,i=[],u=0;u<a;u++){var h=p?r:d,k={style:t.getRowStyle(u),lineSpacing:u?o:0,animate:c};p&&(k.segments=l[u%l.length]),i.push((0,e.jsx)(h,(0,s.pi)({},k),u))}return i},t}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.style,a=n.className,o=p()("zent-placeholder-text-block",a);return(0,e.jsx)("div",(0,s.pi)({className:o,style:(0,s.pi)((0,s.pi)({},t),{width:"100%"}),"data-zv":"10.0.6"},{children:this.getRows()}),void 0)},t.defaultProps={widths:[97,99,94,92,96,95,98,60],dashSegments:l,animate:!0,dashed:!0,lineSpacing:"0.7em"},t}(o.PureComponent),m=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.style,o=n.rows,c=n.shape,d=n.size,l=n.animate,r=n.dashed,i=n.widths,m=n.dashSegments,g=n.lineSpacing,y=p()("zent-placeholder-richtext-block",t),f={marginRight:10};return(0,e.jsxs)("div",(0,s.pi)({className:y,style:(0,s.pi)((0,s.pi)({},a),{display:"flex"}),"data-zv":"10.0.6"},{children:["circle"===c?(0,e.jsx)(u,{style:f,diameter:d,animate:l},void 0):(0,e.jsx)(h,{style:f,width:d,height:d,animate:l},void 0),(0,e.jsx)(k,{rows:o,animate:l,dashed:r,widths:i,dashSegments:m,lineSpacing:g},void 0)]}),void 0)},t.defaultProps={style:{},className:"",shape:"circle",animate:!0,dashed:!0,size:80},t}(o.PureComponent),g={TextRow:d,TextRowDashed:r,Circle:u,Rectangle:h,TextBlock:k,RichTextBlock:m},y=g}}]);