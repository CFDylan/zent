(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[8878],{88878:(n,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var t=a(73450),s=a(27378),o=a(57318),r=a(24246);function p(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function c(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){(0,t.Z)(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n){return(0,r.jsx)(n.tag,c(c({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function i(n){return(0,r.jsx)(l,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function u(n){return(0,r.jsx)(l,{tag:"style",html:n.style})}function d(n,e){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(e+=n.offsetTop),d(n.parentNode,e);return e}class h extends s.Component{componentDidMount(){var n=location.hash;if(n){var e=document.querySelector('a[href="'.concat(n,'"]'));e&&(0,o.l)(document.documentElement,0,d(e,-9))}}render(){return s.createElement("div",{className:"zandoc-react-container"},s.createElement(u,{style:""}),s.createElement(i,{html:'<h2 class="anchor-heading"><a href="#babel-plugin-zent">¶</a><a href="javascript:void(0)" id="babel-plugin-zent" class="anchor-point"></a>babel-plugin-zent</h2>\n<p>这个插件通过自动化代码和样式的引入来帮助减小打包体积。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-xu-zhi">¶</a><a href="javascript:void(0)" id="shi-yong-xu-zhi" class="anchor-point"></a>使用须知</h3>\n<p>这个插件需要配合 Zent >= 7.0.0 使用。</p>\n<h3 class="anchor-heading"><a href="#te-xing">¶</a><a href="javascript:void(0)" id="te-xing" class="anchor-point"></a>特性</h3>\n<ul>\n<li>减小打包体积</li>\n<li>JavaScript 代码按需引入</li>\n<li>样式按需引入</li>\n</ul>\n<h3 class="anchor-heading"><a href="#shi-yong">¶</a><a href="javascript:void(0)" id="shi-yong" class="anchor-point"></a>使用</h3>\n<p><code>yarn add babel-plugin-zent -D</code></p>\n<p>配置示例:</p>\n<pre><code class="language-js"><span class="token comment">// In your .babelrc</span>\n<span class="token punctuation">{</span>\n  <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"zent"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p>在 JavaScript 代码中通过 <code>import { Button, Dialog } from \'zent\'</code> 这种方式去引入 Zent 组件，插件会自动引入用到的组件代码。</p>\n<h3 class="anchor-heading"><a href="#pei-zhi">¶</a><a href="javascript:void(0)" id="pei-zhi" class="anchor-point"></a>配置</h3>\n<ul>\n<li><code>libraryName</code>: 需要处理的模块名</li>\n<li><code>noModuleRewrite</code>: 关闭 JavaScript 模块重写，一般配合打包工具的 tree-shaking 使用。</li>\n<li><code>automaticStyleImport</code>: 设置为 <code>true</code> 启用样式自动引入。</li>\n<li><code>useRawStyle</code>: 配合 <code>automaticStyleImport</code> 使用, 设置为 <code>true</code> 自动引入样式源文件(sass). <strong>需要 Zent >= 7.0.0</strong></li>\n</ul>\n<pre><code class="language-js"><span class="token comment">// 默认值</span>\n<span class="token punctuation">{</span>\n  <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">\'zent\'</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">noModuleRewrite</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">automaticStyleImport</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">useRawStyle</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span></code></pre>'}))}}}}]);