(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[646],{60646:(n,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var s=a(73450),e=a(27378),o=a(57318),c=a(40937),p=a(24246);function d(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,s)}return a}function l(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,s.Z)(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}var r=function(){return(0,p.jsx)(c.V.TextBlock,{rows:8})},i=function(){return(0,p.jsx)(c.V.TextBlock,{rows:5,dashed:!1})},u=function(){return(0,p.jsx)(c.V.RichTextBlock,{rows:4})},h=function(){return(0,p.jsx)(c.V.RichTextBlock,{rows:7,shape:"rect",size:160,dashed:!1})},m=function(){return(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,p.jsx)(c.V.Circle,{diameter:160}),(0,p.jsx)(c.V.TextBlock,{rows:6,style:{margin:"0 10px"}}),(0,p.jsx)(c.V.Rectangle,{width:160,height:160})]})};function k(n){return(0,p.jsx)(n.tag,l(l({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function g(n){return(0,p.jsx)(k,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function y(n){return(0,p.jsx)(k,{tag:"style",html:n.style})}function f(n,t){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(t+=n.offsetTop),f(n.parentNode,t);return t}class b extends e.Component{constructor(...n){super(...n),(0,s.Z)(this,"state",{showCode:!1}),(0,s.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,t=this.props,a=t.title,s=t.src,e=t.children;return(0,p.jsxs)("div",{className:"zandoc-react-demo",children:[(0,p.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,p.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,p.jsx)("div",{className:"zandoc-react-demo__title",children:(0,p.jsx)("p",{children:a||""})}),(0,p.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,p.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,p.jsx)(k,{tag:"code",html:s,attributes:{className:"language-jsx"}})})]})}}class v extends e.Component{componentDidMount(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&(0,o.l)(document.documentElement,0,f(t,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(y,{style:""}),e.createElement(g,{html:'<h2 class="anchor-heading"><a href="#placeholder">¶</a><a href="javascript:void(0)" id="placeholder" class="anchor-point"></a>Placeholder</h2>\n<p>Placeholder is used as loading state in sections.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>You can use this component to reduce users\' anxiety when the part of page is loading.</li>\n<li>Includes building block components and some presets.</li>\n<li>Build your own placeholder using the building block components when presets does not meet your requirements.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),e.createElement(b,{title:"Text blocks",id:"Demotext",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.TextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(r)),e.createElement(b,{title:"Solid line text rows",id:"Demotextnodashed",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.TextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">dashed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(i)),e.createElement(b,{title:"Richtext blocks",id:"Demorichtext",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.RichTextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(u)),e.createElement(b,{title:"Richtext blocks(Rectangle)",id:"Demorichtextrect",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.RichTextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">}</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token attr-name">dashed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(h)),e.createElement(b,{title:"Custom placeholder",id:"Democustom",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token operator">:</span> <span class="token string">\'flex\'</span><span class="token punctuation">,</span> alignItems<span class="token operator">:</span> <span class="token string">\'center\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.Circle</span></span> <span class="token attr-name">diameter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.TextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">\'0 10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.Rectangle</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(m)),e.createElement(g,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>Presets：<code>TextBlock</code>, <code>RichTextBlock</code>。</p>\n<p>Components: <code>TextRow</code>, <code>TextRowDashed</code>, <code>Circle</code> and <code>Rectangle</code>. Use these components to build your own placeholder.</p>\n<h3 class="anchor-heading"><a href="#textblock">¶</a><a href="javascript:void(0)" id="textblock" class="anchor-point"></a>TextBlock</h3>\n<p>Text block, lines can be dashed.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>rows</td>\n<td>Text rows</td>\n<td><code>number</code></td>\n<td>Yes</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>widths</td>\n<td>Tow width pool, each number is a percentage</td>\n<td><code>number[]</code></td>\n<td>No</td>\n<td>Omitted</td>\n<td></td>\n</tr>\n<tr>\n<td>dashed</td>\n<td>Dashed</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>dashSegments</td>\n<td>Dashed line segments, each segment can be a percent or fixed width</td>\n<td><code>(number | string)[][]</code></td>\n<td>No</td>\n<td>Omitted</td>\n<td></td>\n</tr>\n<tr>\n<td>lineSpacing</td>\n<td>Line spacing on top</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>No</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#richtextblock">¶</a><a href="javascript:void(0)" id="richtextblock" class="anchor-point"></a>RichTextBlock</h3>\n<p>Supports all props in <code>TextBlock</code>, with the following extra props.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>shape</td>\n<td>Shape name, circle or rectangle</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'circle\'</code></td>\n<td><code>\'rect\'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Shape size</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#textrow">¶</a><a href="javascript:void(0)" id="textrow" class="anchor-point"></a>TextRow</h3>\n<p>Solid text row.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>lineSpacing</td>\n<td>Line spacing on top</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>No</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#textrowdashed">¶</a><a href="javascript:void(0)" id="textrowdashed" class="anchor-point"></a>TextRowDashed</h3>\n<p>Dashed text row.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>segments</td>\n<td>Line segments, each segment can be a percent or fixed width</td>\n<td><code>(number | string)[]</code></td>\n<td>No</td>\n<td>Random</td>\n<td></td>\n</tr>\n<tr>\n<td>lineSpacing</td>\n<td>Line spacing on top</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>No</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#circle">¶</a><a href="javascript:void(0)" id="circle" class="anchor-point"></a>Circle</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>diameter</td>\n<td>Circle diameter</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#rectangle">¶</a><a href="javascript:void(0)" id="rectangle" class="anchor-point"></a>Rectangle</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>width</td>\n<td>Rectangle width</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>height</td>\n<td>Rectangle height</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}},40937:(n,t,a)=>{"use strict";a.d(t,{V:()=>g,Z:()=>y});var s=a(59312),e=a(24246),o=a(27378),c=a(60042),p=a.n(c),d=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.lineSpacing,o=n.animate,c=n.style,d={marginTop:a},l=p()("zent-placeholder-text-row","zent-placeholder-shape",{"zent-placeholder-shape--animate":o},t);return(0,e.jsx)("div",{className:l,style:(0,s.pi)((0,s.pi)({},d),c),"data-zv":"10.0.0"},void 0)},t.defaultProps={lineSpacing:"0.7em",animate:!0},t}(o.PureComponent),l=[[61.8,38],[30,25,44],[20,75],[33,16,20,27],[12,32,53],[45,12,42],[20,10,47,18],[14,47,37]],r=function(n){function t(t){var a,s=n.call(this,t)||this;return s.state={segments:(a=l,a[Math.floor(Math.random()*a.length)])},s}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.lineSpacing,o=n.animate,c=n.segments,d=n.style,l={marginTop:a},r=p()("zent-placeholder-text-row-dashed",t),i=p()("zent-placeholder-shape",{"zent-placeholder-shape--animate":o}),u=Array.isArray(c)?c:this.state.segments;return(0,e.jsx)("div",(0,s.pi)({className:r,style:(0,s.pi)((0,s.pi)({},l),d),"data-zv":"10.0.0"},{children:u.map((function(n,t){return(0,e.jsx)("div",(0,s.pi)({className:"zent-placeholder-text-row-dashed-segment",style:{width:n+"%",paddingLeft:0===t?0:"0.3em"},"data-zv":"10.0.0"},{children:(0,e.jsx)("div",{className:i,"data-zv":"10.0.0"},void 0)}),t)}))}),void 0)},t.defaultProps={lineSpacing:"0.7em",animate:!0},t}(o.PureComponent),i=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.style,s=n.animate,o=p()("zent-placeholder-shape",{"zent-placeholder-shape--animate":s},t);return(0,e.jsx)("div",{className:o,style:a,"data-zv":"10.0.0"},void 0)},t.defaultProps={style:{},animate:!0},t}(o.PureComponent),u=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.diameter,o=n.style,c=(0,s._T)(n,["className","diameter","style"]),d=p()("zent-placeholder-circle",t),l=(0,s.pi)({height:a,minWidth:a},o);return(0,e.jsx)(i,(0,s.pi)({className:d,style:l},c),void 0)},t.defaultProps={style:{},animate:!0,diameter:80},t}(o.PureComponent),h=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.width,o=n.height,c=n.style,d=(0,s._T)(n,["className","width","height","style"]),l=p()("zent-placeholder-rectangle",t),r=(0,s.pi)({minWidth:a,height:o},c);return(0,e.jsx)(i,(0,s.pi)({className:l,style:r},d),void 0)},t.defaultProps={style:{},animate:!0,width:80,height:80},t}(o.PureComponent),m=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.getRowStyle=function(n){var a=t.props.widths;return{width:a[n%a.length]+"%"}},t.getRows=function(){for(var n=t.props,a=n.rows,o=n.lineSpacing,c=n.animate,p=n.dashed,l=n.dashSegments,i=[],u=0;u<a;u++){var h=p?r:d,m={style:t.getRowStyle(u),lineSpacing:u?o:0,animate:c};p&&(m.segments=l[u%l.length]),i.push((0,e.jsx)(h,(0,s.pi)({},m),u))}return i},t}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.style,a=n.className,o=p()("zent-placeholder-text-block",a);return(0,e.jsx)("div",(0,s.pi)({className:o,style:(0,s.pi)((0,s.pi)({},t),{width:"100%"}),"data-zv":"10.0.0"},{children:this.getRows()}),void 0)},t.defaultProps={widths:[97,99,94,92,96,95,98,60],dashSegments:l,animate:!0,dashed:!0,lineSpacing:"0.7em"},t}(o.PureComponent),k=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,s.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.style,o=n.rows,c=n.shape,d=n.size,l=n.animate,r=n.dashed,i=n.widths,k=n.dashSegments,g=n.lineSpacing,y=p()("zent-placeholder-richtext-block",t),f={marginRight:10};return(0,e.jsxs)("div",(0,s.pi)({className:y,style:(0,s.pi)((0,s.pi)({},a),{display:"flex"}),"data-zv":"10.0.0"},{children:["circle"===c?(0,e.jsx)(u,{style:f,diameter:d,animate:l},void 0):(0,e.jsx)(h,{style:f,width:d,height:d,animate:l},void 0),(0,e.jsx)(m,{rows:o,animate:l,dashed:r,widths:i,dashSegments:k,lineSpacing:g},void 0)]}),void 0)},t.defaultProps={style:{},className:"",shape:"circle",animate:!0,dashed:!0,size:80},t}(o.PureComponent),g={TextRow:d,TextRowDashed:r,Circle:u,Rectangle:h,TextBlock:m,RichTextBlock:k},y=g}}]);