import{_ as e,c as s,o as a,a as n}from"./app.53cbd370.js";const u=JSON.parse('{"title":"RemoveKey","description":"","frontmatter":{},"headers":[{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"relativePath":"core/actions/removeKey/removeKey.md"}'),t={name:"core/actions/removeKey/removeKey.md"},r=n(`<h1 id="removekey" tabindex="-1">RemoveKey <a class="header-anchor" href="#removekey" aria-hidden="true">#</a></h1><p>Remove the given key (if binded) from the binding list.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Mandatory</th><th>Default</th></tr></thead><tbody><tr><td>stringKey</td><td>string</td><td>true</td><td>-</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h2><p>void</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">removeKey</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keybind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Init KeyBind and do some stuff ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Then we can add remove the biding we want</span></span>
<span class="line"><span style="color:#82AAFF;">removeKey</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,8),o=[r];function l(p,c,i,d,h,y){return a(),s("div",null,o)}const D=e(t,[["render",l]]);export{u as __pageData,D as default};