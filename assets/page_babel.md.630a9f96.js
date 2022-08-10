import{_ as s,c as n,o as a,a as p}from"./app.e32804fc.js";const A=JSON.parse('{"title":"\u517C\u5BB9\u6027\u5904\u7406\u65B9\u6848","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\u548C\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\u7684\u517C\u5BB9\u5904\u7406","slug":"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\u548C\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\u7684\u517C\u5BB9\u5904\u7406"},{"level":2,"title":"transpileDependencies","slug":"transpiledependencies"},{"level":2,"title":"vConsole.js\u7684\u517C\u5BB9\u5904\u7406","slug":"vconsole-js\u7684\u517C\u5BB9\u5904\u7406"}],"relativePath":"page/babel.md","lastUpdated":1660059886000}'),l={name:"page/babel.md"},e=p(`<h1 id="\u517C\u5BB9\u6027\u5904\u7406\u65B9\u6848" tabindex="-1">\u517C\u5BB9\u6027\u5904\u7406\u65B9\u6848 <a class="header-anchor" href="#\u517C\u5BB9\u6027\u5904\u7406\u65B9\u6848" aria-hidden="true">#</a></h1><h2 id="\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\u548C\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\u7684\u517C\u5BB9\u5904\u7406" tabindex="-1">\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\u548C\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\u7684\u517C\u5BB9\u5904\u7406 <a class="header-anchor" href="#\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\u548C\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\u7684\u517C\u5BB9\u5904\u7406" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5224\u65AD\u5D4C\u5957\u5BF9\u8C61\u5C5E\u6027\u662F\u5426\u5B58\u5728\u65F6\uFF0C\u5E38\u5E38\u4F1A\u7528\u5230\u94FE\u5F0F\u64CD\u4F5C\u7B26 <strong>?.</strong> \uFF0C\u662F\u4E00\u4E2A\u975E\u5E38\u597D\u7528\u7684\u8BED\u6CD5\u7CD6</p><p>\u9AD8\u7248\u672Capi,\u9700\u8981\u52A0babel\u63D2\u4EF6\uFF0C\u8F6C\u5316\u6210es5</p><p>\u6211\u4EEC\u5BF9babel.config.js \u8FDB\u884C\u4E86\u5355\u72EC\u914D\u7F6E</p><p>\u540C\u7406\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\u4E5F\u662F\u5982\u6B64</p><p>\u6CE8\u91CA\u91CC\u5DF2\u7ECF\u5F88\u6E05\u6670\u4E86</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">presets</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vue/cli-plugin-babel/preset</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// \u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\u53F7 \uFF1F\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@babel/plugin-proposal-nullish-coalescing-operator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u53EF\u9009\u94FE \uFF1F.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@babel/plugin-proposal-optional-chaining</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//vant \u6309\u9700\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">import</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">libraryName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vant</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">libraryDirectory</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">es</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vant</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="transpiledependencies" tabindex="-1">transpileDependencies <a class="header-anchor" href="#transpiledependencies" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B babel-loader \u4F1A\u5FFD\u7565\u6240\u6709 node_modules \u4E2D\u7684\u6587\u4EF6\u3002\u4F60\u53EF\u4EE5\u542F\u7528\u672C\u9009\u9879\uFF0C\u4EE5\u907F\u514D\u6784\u5EFA\u540E\u7684\u4EE3\u7801\u4E2D\u51FA\u73B0\u672A\u8F6C\u8BD1\u7684\u7B2C\u4E09\u65B9\u4F9D\u8D56\u3002</p><p>\u4E0D\u8FC7\uFF0C\u5BF9\u6240\u6709\u7684\u4F9D\u8D56\u90FD\u8FDB\u884C\u8F6C\u8BD1\u53EF\u80FD\u4F1A\u964D\u4F4E\u6784\u5EFA\u901F\u5EA6\u3002\u5982\u679C\u5BF9\u6784\u5EFA\u6027\u80FD\u6709\u6240\u987E\u8651\uFF0C\u4F60\u53EF\u4EE5\u53EA\u8F6C\u8BD1\u90E8\u5206\u7279\u5B9A\u7684\u4F9D\u8D56\uFF1A\u7ED9\u672C\u9009\u9879\u4F20\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5217\u51FA\u9700\u8981\u8F6C\u8BD1\u7684\u7B2C\u4E09\u65B9\u5305\u5305\u540D\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u5373\u53EF\u3002</p><p><strong>\u4E0A\u9762\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5F71\u54CD\u9879\u76EE\u6784\u5EFA\u901F\u5EA6\u548C\u90E8\u7F72\u5305\u5927\u5C0F\uFF0C\u4E0D\u80FD\u628Amodule\u4E2D\u6240\u6709\u5305\u90FD\u653E\u8FDB\u53BB</strong></p><p>\u660E\u786E\u54EA\u4E2A\u5305\u6709\u8F6C\u4E49\u95EE\u9898\uFF0C\u53EF\u4EE5\u7528\u8FD9\u79CD\u65B9\u5F0Fbabel \u91CD\u65B0\u7F16\u8BD1</p><p>\u76EE\u524D\u5DF2\u77E5\u9700\u8981\u8FD9\u6837\u7684\u505A\u7684\u5E93\uFF0C\u6709\u4E00\u4E2A\u52A0\u89E3\u5BC6\u5E93<em><strong>CryptoJS</strong></em> <em><strong>\u5F53\u524D\u9879\u76EE\u5E76\u6CA1\u6709\u4F7F\u7528</strong></em></p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">transpileDependencies</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">crypto-js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="vconsole-js\u7684\u517C\u5BB9\u5904\u7406" tabindex="-1">vConsole.js\u7684\u517C\u5BB9\u5904\u7406 <a class="header-anchor" href="#vconsole-js\u7684\u517C\u5BB9\u5904\u7406" aria-hidden="true">#</a></h2><p>vConsole\u662F\u4E00\u4E2A\u8F7B\u91CF\u3001\u53EF\u62D3\u5C55\u3001\u9488\u5BF9\u624B\u673A\u7F51\u9875\u7684\u524D\u7AEF\u5F00\u53D1\u8005\u8C03\u8BD5\u9762\u677F\u3002</p><p><a href="https://github.com/Tencent/vConsole" target="_blank" rel="noopener noreferrer">vConsole</a></p><p>\u5F53\u6211\u4EEC\u76F4\u63A5inpmort \u5F15\u5165\u65F6\uFF0C\u5728\u4F4E\u7248\u672C\u624B\u673A\u4E0A\uFF0C\u5728\u5B89\u53535.0\u624B\u673A\u4E0A\u76F4\u63A5\u767D\u5C4F\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5E93\u4F7F\u7528\u4E86\u4E00\u4E9B\u9AD8\u7248\u672C\u8BED\u6CD5\uFF0C\u6CA1\u6709\u8FDB\u884C\u8F6C\u4E49</p><p>\u56E0\u4E3Avconsole \u5B58\u5728\u5F15\u7528\u7B2C\u4E09\u5305\u7684\u60C5\u51B5\uFF0C\u65E0\u6CD5\u786E\u5B9A\u8303\u56F4\uFF0C\u56E0\u6B64\u6CA1\u6709\u91C7\u7528 transpileDependencies\u65B9\u6848</p><p>\u63A8\u8350\u5F15\u5165\u94FE\u63A5\u65B9\u5F0F\u5F15\u5165\uFF0C\u4E0D\u63A8\u8350\u76F4\u63A5import</p><p>\u53EF\u4EE5\u76F4\u63A5\u5728\u5165\u53E3\uFF0C\u6839\u636E\u73AF\u5883\u53D8\u91CF\uFF0C\u6D4B\u8BD5\u73AF\u5883\u81EA\u52A8\u52A0\u8F7D\u4E00\u4E2A\u8F6C\u4E49\u540E\u7684js\u6587\u4EF6</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var WEB_ENV = &#39;&lt;%= VUE_APP_ONLINE_ENV %&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6839\u636E\u73AF\u5883\u53D8\u91CF\u5F15\u5165VConsole(\u5224\u65AD\u975E\u751F\u4EA7\u73AF\u5883)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!JSON.parse(WEB_ENV)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        var scriptEl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        scriptEl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;%= BASE_URL %&gt;vConsole.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">        scriptEl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">async </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">        document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(scriptEl)</span></span>
<span class="line"><span style="color:#A6ACCD;">        scriptEl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vConsole</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">VConsole</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><a href="/vue-template/page/index.html">\u25B2 \u56DE\u76EE\u5F55</a></p>`,24),o=[e];function r(c,t,D,i,y,F){return a(),n("div",null,o)}var b=s(l,[["render",r]]);export{A as __pageData,b as default};
