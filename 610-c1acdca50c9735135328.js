(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[610],{40610:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>C});var t=s(73450),e=s(27378),p=s(57318),o=s(87230),c=s(39215),l=s(80964),u=s(24246);function r(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){(0,t.Z)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var k=function(){class n extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{value:2}),(0,t.Z)(this,"onChange",(n=>{this.setState({value:n})}))}render(){return(0,u.jsx)(o.j,{value:this.state.value,onChange:this.onChange})}}return(0,u.jsx)(n,{})},d=function(){class n extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{value:2.5}),(0,t.Z)(this,"onChange",(n=>{this.setState({value:n})}))}render(){return(0,u.jsx)(o.j,{allowHalf:!0,value:this.state.value,onChange:this.onChange})}}return(0,u.jsx)(n,{})},m=function(){class n extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{value:2.5}),(0,t.Z)(this,"onChange",(n=>{this.setState({value:n})}))}render(){return(0,u.jsx)(o.j,{disabled:!0,allowHalf:!0,value:this.state.value,onChange:this.onChange})}}return(0,u.jsx)(n,{})},h=function(){class n extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{value:2.5}),(0,t.Z)(this,"onChange",(n=>{this.setState({value:n})}))}render(){return(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(o.j,{character:(0,u.jsx)(c.J,{type:"youzan"}),allowHalf:!0,value:this.state.value,onChange:this.onChange})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.j,{character:"赞",allowHalf:!0,value:this.state.value,onChange:this.onChange})})]})}}return(0,u.jsx)(n,{})},g=function(){class n extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{value:"3.7"}),(0,t.Z)(this,"onNumberChange",(n=>{this.setState({value:n})}))}render(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(l.Y,{className:"zent-doc-rate-readonly-number",value:this.state.value,onChange:this.onNumberChange,max:5,min:0,decimal:1,showCounter:!0}),(0,u.jsx)(o.j,{value:+this.state.value,readOnly:!0})]})}}return(0,u.jsx)(n,{})};function v(n){return(0,u.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function y(n){return(0,u.jsx)(v,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function f(n){return(0,u.jsx)(v,{tag:"style",html:n.style})}function w(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),w(n.parentNode,a);return a}class b extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return(0,u.jsxs)("div",{className:"zandoc-react-demo",children:[(0,u.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,u.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,u.jsx)("div",{className:"zandoc-react-demo__title",children:(0,u.jsx)("p",{children:s||""})}),(0,u.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,u.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,u.jsx)(v,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class C extends e.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&(0,p.l)(document.documentElement,0,w(a,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(f,{style:".zent-doc-rate-readonly-number {\n\t\twidth: 120px;\n\t\tmargin-bottom: 8px;\n\t}\n\t\t.zent-doc-rate-readonly-number .zent-input {\n\t\t\tmin-width: 62px;\n\t\t}"}),e.createElement(y,{html:'<h2 class="anchor-heading"><a href="#rate">¶</a><a href="javascript:void(0)" id="rate" class="anchor-point"></a>Rate</h2>\n<p>Rate component.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),e.createElement(b,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Rate</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Rate</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onChange</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(k)),e.createElement(b,{title:"allow half",id:"Demoallowhalf",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Rate</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2.5</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Rate</span></span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onChange</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(d)),e.createElement(b,{title:"disabled",id:"Demodisabled",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Rate</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2.5</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Rate</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onChange</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(m)),e.createElement(b,{title:"custom character",id:"Democharacter",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Rate</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2.5</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Rate</span></span> <span class="token attr-name">character</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>youzan<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onChange</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Rate</span></span> <span class="token attr-name">character</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>赞<span class="token punctuation">"</span></span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onChange</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(h)),e.createElement(b,{title:"read only (no-interaction)",id:"Demoreadonly",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Rate</span><span class="token punctuation">,</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">\'3.7\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onNumberChange</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-doc-rate-readonly-number<span class="token punctuation">"</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onNumberChange</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5.0</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">showCounter</span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Rate</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">}</span></span> <span class="token attr-name">readOnly</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(g)),e.createElement(y,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onChange</td>\n<td>allback when select value</td>\n<td><code>Function(value: number)</code></td>\n<td>Yes</td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>current value</td>\n<td><code>number</code></td>\n<td>No</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>allowClear</td>\n<td>whether to allow clear when click again</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>allowHalf</td>\n<td>whether to allow semi selection</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>character</td>\n<td>custom character of rate</td>\n<td><code>ReactNode</code></td>\n<td>No</td>\n<td><code>&#x3C;Icon type="star" /></code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom class name of rate</td>\n<td><code>string</code></td>\n<td>No</td>\n<td>-</td>\n<td></td>\n</tr>\n<tr>\n<td>count</td>\n<td>star count</td>\n<td><code>number</code></td>\n<td>No</td>\n<td>5</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>disable the interaction</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>readOnly</td>\n<td>read only, unlike \n<code>disabled</code>\n, the cursor will be \'auto\' and the value can be accurate to 0.1.</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>custom style object of rate</td>\n<td><code>object</code></td>\n<td>No</td>\n<td>-</td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}},87230:(n,a,s)=>{"use strict";s.d(a,{j:()=>k});var t=s(59312),e=s(24246),p=s(27378),o=s(60042),c=s.n(o),l=function(n){var a=n.className;return(0,e.jsx)("svg",(0,t.pi)({className:a,width:"1em",height:"1em",viewBox:"0 0 12 12",version:"1.1","data-zv":"10.0.6"},{children:(0,e.jsx)("path",{fill:"currentColor",d:"M5.99995351,10.2785052 L3.0526252,11.9161235 C2.73134341,12.0946367 2.3262008,11.9788615 2.14771388,11.6575325 C2.07507647,11.5267638 2.048604,11.3753341 2.07256714,11.227673 L2.644706,7.70214784 L0.18800271,5.17127401 C-0.0680077998,4.90753426 -0.0617734594,4.4861629 0.201927499,4.23011474 C0.30111659,4.13380419 0.42783327,4.07077947 0.564476058,4.04979499 L3.92629651,3.5335141 L5.39699811,0.384084246 C5.55252473,0.0510321934 5.9485563,-0.0928620579 6.28155937,0.0626874406 C6.42306565,0.128786625 6.53681945,0.242557148 6.60290891,0.384084246 L8.07361051,3.5335141 L11.435431,4.04979499 C11.7987051,4.10558366 12.047978,4.44534453 11.9921975,4.80867212 C11.9712161,4.94533501 11.9082007,5.07207032 11.8119043,5.17127401 L9.35520102,7.70214784 L9.92733988,11.227673 C9.98622287,11.5905106 9.73986227,11.9323896 9.37707808,11.9912813 C9.22943868,12.015248 9.07803132,11.9887716 8.94728182,11.9161235 L5.99995351,10.2785052 Z","data-zv":"10.0.6"},void 0)}),void 0)},u=function(n){function a(){var a=null!==n&&n.apply(this,arguments)||this;return a.elRef=(0,p.createRef)(),a.onHover=function(n){var s=a.props;(0,s.onHover)(n,s.index)},a.onClick=function(n){var s=a.props;(0,s.onClick)(n,s.index)},a.getFloatValue=function(){return 100*a.props.value%100+"%"},a}return(0,t.ZT)(a,n),a.prototype.getClassName=function(){var n=this.props,a=n.index,s=n.value,t=n.allowHalf,e=n.readOnly,p=a+1,o=p<=s,l=p>Math.ceil(s),u=t&&s+.5===p,r=e&&p>s&&p===Math.ceil(s);return c()("zent-rate-star",{"zent-rate-star-full":o,"zent-rate-star-zero":l,"zent-rate-star-half":u,"zent-rate-star-part":r})},a.prototype.render=function(){var n=this.onHover,a=this.onClick,s=this.props,p=s.disabled,o=s.character,c=s.readOnly,l=p||c;return(0,e.jsxs)("li",(0,t.pi)({ref:this.elRef,className:this.getClassName(),onClick:l?void 0:a,onMouseMove:l?void 0:n,"data-zv":"10.0.6"},{children:[(0,e.jsx)("div",(0,t.pi)({className:"zent-rate-star-first",style:c?{width:this.getFloatValue()}:void 0,"data-zv":"10.0.6"},{children:o}),void 0),(0,e.jsx)("div",(0,t.pi)({className:"zent-rate-star-second","data-zv":"10.0.6"},{children:o}),void 0)]}),void 0)},a}(p.Component),r=s(1348);function i(n){for(var a=[],s=0;s<n;s+=1)a.push((0,p.createRef)());return a}var k=function(n){function a(a){var s=n.call(this,a)||this;return s.onHover=function(n,a){var t=s.getStarValue(a,n.pageX);t!==s.state.cleanedValue&&s.setState({hoverValue:t,cleanedValue:null})},s.onMouseLeave=function(){s.setState({hoverValue:null,cleanedValue:null})},s.onClick=function(n,a){var t=s.props.onChange,e=s.getStarValue(a,n.pageX),p=!1;s.props.allowClear&&(p=e===s.props.value),s.onMouseLeave(),t&&t(p?0:e),s.setState({cleanedValue:p?e:null})},s.state={cleanedValue:null,hoverValue:null,starRefs:i(a.count)},s}return(0,t.ZT)(a,n),a.prototype.getStarDOM=function(n){var a=this.state.starRefs[n];if(!a)throw new Error("Missing Star Ref, this looks like a bug of zent, please file an issue");var s=a.current;if(!s)throw new Error("Missing Star instance, this looks like a bug of zent, please file an issue");var t=s.elRef.current;if(!t)throw new Error("Missing Star element, this looks like a bug of zent, please file an issue");return t},a.prototype.getStarValue=function(n,a){var s=n+1;if(this.props.allowHalf){var t=this.getStarDOM(n);a-t.getBoundingClientRect().left<t.clientWidth/2&&(s-=.5)}return s},a.getDerivedStateFromProps=function(n,a){var s=n.count;return s!==a.starRefs.length?{starRefs:i(s)}:null},a.prototype.render=function(){for(var n=this.props,a=n.count,s=n.allowHalf,p=n.style,o=n.disabled,l=void 0===o?this.context.value:o,r=n.className,i=n.character,k=n.value,d=n.readOnly,m=this.state,h=m.hoverValue,g=m.starRefs,v=[],y=0;y<a;y++)v.push((0,e.jsx)(u,{ref:g[y],index:y,disabled:l,allowHalf:s,value:null!==h?h:k,onClick:this.onClick,onHover:this.onHover,character:i,readOnly:d},y));return(0,e.jsx)("ul",(0,t.pi)({className:c()("zent-rate",{"zent-rate-disabled":l,"zent-rate-readonly":d},r),style:p,onMouseLeave:l||d?void 0:this.onMouseLeave,"data-zv":"10.0.6"},{children:v}),void 0)},a.defaultProps={value:0,count:5,allowHalf:!1,allowClear:!0,character:(0,e.jsx)(l,{className:"zent-rate-star-icon"},void 0),readOnly:!1},a.contextType=r.d,a}(p.Component)}}]);