import{_ as s,c as n,o as a,a as e}from"./app.d289ba31.js";const l="/assets/history-img.ab14cbf3.png",A=JSON.parse('{"title":"\u591A\u5165\u53E3\u652F\u6301history\u8DEF\u7531\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u80CC\u666F","slug":"\u80CC\u666F"},{"level":2,"title":"ngnix\u6838\u5FC3\u914D\u7F6E","slug":"ngnix\u6838\u5FC3\u914D\u7F6E"},{"level":2,"title":"router.js\u4FEE\u6539","slug":"router-js\u4FEE\u6539"}],"relativePath":"page/history.md","lastUpdated":null}'),p={name:"page/history.md"},r=e('<h1 id="\u591A\u5165\u53E3\u652F\u6301history\u8DEF\u7531\u6A21\u5F0F" tabindex="-1">\u591A\u5165\u53E3\u652F\u6301history\u8DEF\u7531\u6A21\u5F0F <a class="header-anchor" href="#\u591A\u5165\u53E3\u652F\u6301history\u8DEF\u7531\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u80CC\u666F" tabindex="-1">\u80CC\u666F <a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u9879\u76EE\u91CC\u4F7F\u7528\u7684\u8DEF\u7531\u6A21\u5F0F\u662Fhash,\u4F46\u662F\u5982\u679C\u4E3A\u4E86\u8DEF\u5F84\u540D\u66F4\u52A0\u7F8E\u89C2\uFF0C\u6211\u4EEC\u4F7F\u7528history\uFF0C\u9700\u8981\u5BF9ngnix\u505A\u7279\u6B8A\u914D\u7F6E</p><p>\u6211\u4EEC\u7684\u591A\u5165\u53E3\u9879\u76EE\uFF0C\u6253\u5305\u51FA\u7684\u6587\u4EF6\uFF0C\u4E00\u7EA7\u76EE\u5F55\u6CA1\u6709index.html</p><p>\u9700\u8981\u5C55\u793A\u7684\u5165\u53E3\u6587\u4EF6\u5728page1/index.html\uFF0Chehehe/index.html \u5982\u4E0B\u56FE\u6240\u793A\u3002 <img src="'+l+`" alt=""></p><p>\u671F\u671B\u7684\u7ED3\u679C\u662F \u8BBF\u95EE page1 \u8BF7\u6C42\u5230page1/index.html \u8BBF\u95EE hehehe \u8BF7\u6C42\u5230hehehe/index.html</p><h2 id="ngnix\u6838\u5FC3\u914D\u7F6E" tabindex="-1">ngnix\u6838\u5FC3\u914D\u7F6E <a class="header-anchor" href="#ngnix\u6838\u5FC3\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">	    location ^~ /page1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">	        root   /opt/homebrew/var/www;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	    try_files   $uri $uri/ /page1/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location ^~ /hehehe {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   /opt/homebrew/var/www;</span></span>
<span class="line"><span style="color:#A6ACCD;">            try_files   $uri $uri/ /hehehe/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>root \u4E3A\u67E5\u8BE2\u7684\u76EE\u5F55 try_files \u4E3A\u5C1D\u8BD5\u8BFB\u53D6\u7684\u9759\u6001\u6587\u4EF6 \u5B8C\u6574\u6587\u4EF6\u5728\u9879\u76EEngnix\u76EE\u5F55\u4E0B \u6BCF\u6B21\u65B0\u589E\u9879\u76EE\u90FD\u9700\u8981\u624B\u52A8\u589E\u52A0ngnix \u914D\u7F6E\u6587\u4EF6</p><h2 id="router-js\u4FEE\u6539" tabindex="-1">router.js\u4FEE\u6539 <a class="header-anchor" href="#router-js\u4FEE\u6539" aria-hidden="true">#</a></h2><p>\u628A\u6211\u4EEC\u7684\u8DEF\u7531\u90FD\u653E\u5728\u4E86page1\u8DEF\u5F84\u4E0B\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u591A\u5165\u53E3\u6587\u4EF6\u540D\u4E0D\u51B2\u7A81\u3002</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// src/module/page1/router.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// history: createWebHashHistory(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">history</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createWebHistory</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/page1/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	routes</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,12),o=[r];function t(c,i,h,d,u,y){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{A as __pageData,m as default};
