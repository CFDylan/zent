(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{665:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return f}));var t=s(19),p=s.n(t),e=s(0),c=s(1),o=s.n(c),l=s(46);function u(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function r(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){p()(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var i=function(){return Object(e.jsxs)("div",{children:[Object(e.jsx)(l.yb,{value:2,placeholder:"please enter number"}),Object(e.jsx)(l.yb,{value:2,placeholder:"please enter number",addonBefore:"$"}),Object(e.jsx)(l.yb,{value:2,showStepper:!0,placeholder:"please enter number"}),Object(e.jsx)(l.yb,{value:2,showCounter:!0,placeholder:"please enter number"}),Object(e.jsx)(l.yb,{value:2,showCounter:!0,placeholder:"please enter number"})]})},k=function(){return Object(e.jsxs)("div",{children:[Object(e.jsx)(l.yb,{value:2,decimal:2,placeholder:"please enter number"}),Object(e.jsx)(l.yb,{value:2,showStepper:!0,decimal:2,step:1,placeholder:"please enter number"}),Object(e.jsx)(l.yb,{value:2,showCounter:!0,decimal:2,placeholder:"please enter number"})]})},d=function(){return Object(e.jsxs)("div",{children:[Object(e.jsx)(l.yb,{value:3,min:-2,max:6,decimal:2,placeholder:"please enter number"}),Object(e.jsx)(l.yb,{value:3,showStepper:!0,min:2,max:6,decimal:2,placeholder:"please enter number"}),Object(e.jsx)(l.yb,{value:3,showCounter:!0,min:2,max:6,decimal:2,placeholder:"please enter number"})]})},m=function(){return Object(e.jsxs)("div",{children:[Object(e.jsx)(l.yb,{value:3,disabled:!0}),Object(e.jsx)(l.yb,{value:3,disabled:!0,showStepper:!0}),Object(e.jsx)(l.yb,{value:3,disabled:!0,showCounter:!0})]})},g=function(){class n extends o.a.Component{constructor(...n){super(...n),p()(this,"state",{value:""}),p()(this,"onChange",n=>{console.log("onChange"),this.setState({value:n})}),p()(this,"setToThree",()=>{this.forceUpdate()}),p()(this,"onPressEnter",()=>{console.log("pressed enter")})}render(){return Object(e.jsxs)("div",{children:[Object(e.jsx)(l.yb,{showStepper:!0,onChange:this.onChange,onPressEnter:this.onPressEnter}),Object(e.jsx)(l.k,{onClick:this.setToThree,children:"Set value to 3"})]})}}return Object(e.jsx)(n,{})},b=function(){return Object(e.jsxs)("div",{children:[Object(e.jsx)(l.yb,{value:3,min:-2,max:6,integer:!0,placeholder:"please enter integer"}),Object(e.jsx)(l.yb,{value:Number.MAX_SAFE_INTEGER,showStepper:!0,integer:!0,placeholder:"please enter integer"}),Object(e.jsx)(l.yb,{value:3,integer:!0,showCounter:!0,min:2,max:6,placeholder:"please enter integer"})]})};function h(n){return Object(e.jsx)(n.tag,r(r({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function v(n){return Object(e.jsx)(h,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return Object(e.jsx)(h,{tag:"style",html:n.style})}class y extends c.Component{constructor(...n){super(...n),p()(this,"state",{showCode:!1}),p()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return Object(e.jsxs)("div",{className:"zandoc-react-demo",children:[Object(e.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),Object(e.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(e.jsx)("div",{className:"zandoc-react-demo__title",children:Object(e.jsx)("p",{children:s||""})}),Object(e.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&Object(e.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(e.jsx)(h,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class f extends c.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(l.rc)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return o.a.createElement("div",{className:"zandoc-react-container",key:null},o.a.createElement(j,{style:".zent-number-input {\n  width: 200px;\n  margin-bottom: 20px;\n}"}),o.a.createElement(v,{html:'<h2 class="anchor-heading"><a href="#numberinput">¶</a><a href="javascript:void(0)" id="numberinput" class="anchor-point"></a>NumberInput</h2>\n<p>A input widget for entering number through mouse or keyboard.\nDefault value type is string. Under integer mode, value type is number, with default max value <code>Number.MAX_SAFE_INTEGER</code> and default min value <code>Number.MIN_SAFE_INTEGER</code>.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>When you enter number, using numberInput is more convenient</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),o.a.createElement(y,{title:"Basic usage",id:"Demo1",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token attr-name">addonBefore</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showCounter</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">showCounter</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},o.a.createElement(i)),o.a.createElement(y,{title:"Specify the decimal point precision",id:"Demo2",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showCounter</span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},o.a.createElement(k)),o.a.createElement(y,{title:"Enter number in a range",id:"Demo3",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showCounter</span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">decimal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter number<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},o.a.createElement(d)),o.a.createElement(y,{title:"Disable status",id:"Demo4",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">showStepper</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">showCounter</span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},o.a.createElement(m)),o.a.createElement(y,{title:"Event handler",id:"Demo5",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">EventTest</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token operator">:</span> <span class="token string">\'\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'onChange\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">setToThree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// this.setState({ value: 3 });</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onPressEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'pressed enter\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span><span class="token maybe-class-name">NumberInput</span>\n          showStepper\n          <span class="token comment">// value={this.state.value}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onChange</span><span class="token punctuation">}</span>\n          onPressEnter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onPressEnter</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">setToThree</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token known-class-name class-name">Set</span> value to <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EventTest</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},o.a.createElement(g)),o.a.createElement(y,{title:"Integer Mode",id:"Demo6",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter integer<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token known-class-name class-name">Number</span><span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">showStepper</span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter integer<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">integer</span>\n      <span class="token attr-name">showCounter</span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>please enter integer<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},o.a.createElement(b)),o.a.createElement(v,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>Input value</td>\n<td>integer === true ? number: string</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>Change event</td>\n<td>func(value: typeof value)</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>showStepper</td>\n<td>Show stepper</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>showCounter</td>\n<td>Show counter</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>decimal</td>\n<td>Decimal</td>\n<td>number</td>\n<td><code>0</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>step</td>\n<td>Step used in stepper</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>min</td>\n<td>Minimum value in the range</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>max</td>\n<td>Maximum value in the range</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>Placeholder text</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Disable input</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>className</td>\n<td>Extra class name</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>width</td>\n<td>Input width</td>\n<td>string or number</td>\n<td></td>\n<td></td>\n<td>No</td>\n</tr>\n<tr>\n<td>integer</td>\n<td>Integer mode</td>\n<td>bool</td>\n<td>false</td>\n<td></td>\n<td>No</td>\n</tr>\n</tbody>\n</table>'}))}}}}]);