import{_ as s,c as a,o as n,a as e}from"./app.53cbd370.js";const F=JSON.parse('{"title":"Install","description":"","frontmatter":{},"headers":[{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]},{"level":2,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":2,"title":"Parameters","slug":"parameters-1","link":"#parameters-1","children":[]},{"level":2,"title":"Returns","slug":"returns-1","link":"#returns-1","children":[]},{"level":2,"title":"Usage","slug":"usage-2","link":"#usage-2","children":[]},{"level":2,"title":"Parameters","slug":"parameters-2","link":"#parameters-2","children":[]},{"level":2,"title":"Returns","slug":"returns-2","link":"#returns-2","children":[]},{"level":2,"title":"Usage","slug":"usage-3","link":"#usage-3","children":[]},{"level":2,"title":"Parameters","slug":"parameters-3","link":"#parameters-3","children":[]},{"level":2,"title":"Returns","slug":"returns-3","link":"#returns-3","children":[]},{"level":2,"title":"Usage","slug":"usage-4","link":"#usage-4","children":[]},{"level":2,"title":"Parameters","slug":"parameters-4","link":"#parameters-4","children":[]},{"level":2,"title":"Returns","slug":"returns-4","link":"#returns-4","children":[]},{"level":2,"title":"Usage","slug":"usage-5","link":"#usage-5","children":[]},{"level":2,"title":"Parameters","slug":"parameters-5","link":"#parameters-5","children":[]},{"level":2,"title":"Returns","slug":"returns-5","link":"#returns-5","children":[]},{"level":2,"title":"Usage","slug":"usage-6","link":"#usage-6","children":[]},{"level":2,"title":"Parameters","slug":"parameters-6","link":"#parameters-6","children":[]},{"level":2,"title":"Returns","slug":"returns-6","link":"#returns-6","children":[]},{"level":2,"title":"Usage","slug":"usage-7","link":"#usage-7","children":[]},{"level":2,"title":"Parameters","slug":"parameters-7","link":"#parameters-7","children":[]},{"level":2,"title":"Returns","slug":"returns-7","link":"#returns-7","children":[]},{"level":2,"title":"Usage","slug":"usage-8","link":"#usage-8","children":[]},{"level":2,"title":"KeyBindingCallbackMap","slug":"keybindingcallbackmap","link":"#keybindingcallbackmap","children":[{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]}]},{"level":2,"title":"KeyBindingCallbacks","slug":"keybindingcallbacks","link":"#keybindingcallbacks","children":[{"level":3,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[]}]},{"level":2,"title":"KeyBindingOptions","slug":"keybindingoptions","link":"#keybindingoptions","children":[{"level":3,"title":"Properties","slug":"properties-2","link":"#properties-2","children":[]}]}],"relativePath":"core/README.md"}'),l={name:"core/README.md"},t=e(`<h1 align="center">KeyBind</h1><div align="center"><img src="https://raw.githubusercontent.com/longo-andrea/keybind/main/assets/logo.svg" alt="KeybindJS logo"><h2>A Typescript library for easily binding keyboard keys</h2></div><hr><p>KeyBind is a library written in Typescripts, that aim to provide an easy way to bind keyboard keys and create amazing and interactive web applications.</p><ul><li>\u{1F637} Type safety with Typescript</li><li>\u{1F4CB} IDE integration with Typedoc</li><li>\u2728 Framework agnostic</li></ul><h1 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h1><p>Install the package with your favourite package manager. For example:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm i keybind</span></span>
<span class="line"></span></code></pre></div><h1 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h1><p>Start using Keybind is pretty simple:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initKeybind</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">addKey</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keybind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Init KeyBind library in document.body</span></span>
<span class="line"><span style="color:#82AAFF;">initKeybind</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Then we can add all the biding we want</span></span>
<span class="line"><span style="color:#82AAFF;">addKey</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">keyupCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello from keyup S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">keydownCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello from keydown S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">preventRepeatOnKeyDown</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>For a live demo take a look to the <a href="https://github.com/longo-andrea/keybind/tree/main/demo" target="_blank" rel="noreferrer">demo folder</a></p><h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h1><h1 id="addkey" tabindex="-1">AddKey <a class="header-anchor" href="#addkey" aria-hidden="true">#</a></h1><p>Add a new key to the binding list. Let you specify which key should be binded, keyup and keydown callback, and eventually some options.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Mandatory</th><th>Default</th></tr></thead><tbody><tr><td>stringKey</td><td>string</td><td>true</td><td>-</td></tr><tr><td>callbacks</td><td>KeyBindingCallbacks</td><td>true</td><td>-</td></tr><tr><td>options</td><td>KeyBindingOptions</td><td>false</td><td><code>{ preventRepeatOnKeyDown: false }</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h2><p>void</p><h2 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">addKey</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keybind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Init KeyBind and do some stuff ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Then we can add all the biding we want</span></span>
<span class="line"><span style="color:#82AAFF;">addKey</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">keyupCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello from keyup S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">keydownCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello from keydown S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">preventRepeatOnKeyDown</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h1 id="clearkeys" tabindex="-1">ClearKeys <a class="header-anchor" href="#clearkeys" aria-hidden="true">#</a></h1><p>Remove all the bindend keys from the list.</p><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h2><p>No parameters required.</p><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h2><p>void</p><h2 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">clearKeys</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keybind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Init KeyBind and do some stuff ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Then we can add all the biding we want</span></span>
<span class="line"><span style="color:#82AAFF;">clearKeys</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h1 id="initkeybind" tabindex="-1">InitKeybind <a class="header-anchor" href="#initkeybind" aria-hidden="true">#</a></h1><p>Init keybind library in a given target.</p><h2 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Mandatory</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>HTMLElement</td><td>true</td><td>-</td></tr></tbody></table><h2 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h2><p>void</p><h2 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initKeybind</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keybind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">initKeybind</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h1 id="isbindingenabled" tabindex="-1">IsBindingEnabled <a class="header-anchor" href="#isbindingenabled" aria-hidden="true">#</a></h1><p>Returns whether the binding is enabled or not.</p><h2 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h2><p>No parameters required</p><h2 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h2><p><code>boolean</code> - whether the binding is enabled</p><h2 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isBindingEnabled</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keybind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Init KeyBind and do some stuff ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Then we can add all the biding we want</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#82AAFF;">isBindingEnabled</span><span style="color:#A6ACCD;">()) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bindining enabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bindining disabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h1 id="iskeybinded" tabindex="-1">IsKeyBinded <a class="header-anchor" href="#iskeybinded" aria-hidden="true">#</a></h1><p>Returns whether a given key is binded or not.</p><h2 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Mandatory</th><th>Default</th></tr></thead><tbody><tr><td>stringKey</td><td>string</td><td>true</td><td>-</td></tr></tbody></table><h2 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h2><p><code>boolean</code> - returns whether the given key is binded</p><h2 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isKeyBinded</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keybind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Init KeyBind and do some stuff ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#82AAFF;">isKeyBinded</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">S is binded</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">S isn&#39;t binded</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h1 id="removekey" tabindex="-1">RemoveKey <a class="header-anchor" href="#removekey" aria-hidden="true">#</a></h1><p>Remove the given key (if binded) from the binding list.</p><h2 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Mandatory</th><th>Default</th></tr></thead><tbody><tr><td>stringKey</td><td>string</td><td>true</td><td>-</td></tr></tbody></table><h2 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h2><p>void</p><h2 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">removeKey</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keybind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Init KeyBind and do some stuff ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Then we can add remove the biding we want</span></span>
<span class="line"><span style="color:#82AAFF;">removeKey</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">S</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h1 id="togglebinding" tabindex="-1">ToggleBinding <a class="header-anchor" href="#togglebinding" aria-hidden="true">#</a></h1><p>Allows to enable/disable binding.</p><h2 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Mandatory</th><th>Default</th></tr></thead><tbody><tr><td>enable</td><td>boolean</td><td>true</td><td>-</td></tr></tbody></table><h2 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h2><p>void</p><h2 id="usage-7" tabindex="-1">Usage <a class="header-anchor" href="#usage-7" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toggleBinding</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keybind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Init KeyBind and do some stuff ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Let&#39;s turn off binding</span></span>
<span class="line"><span style="color:#82AAFF;">toggleBinding</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// ... and then turn on again</span></span>
<span class="line"><span style="color:#82AAFF;">toggleBinding</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h1 id="unbindlisteners" tabindex="-1">UnbindListeners <a class="header-anchor" href="#unbindlisteners" aria-hidden="true">#</a></h1><p>Unbind Keybind library.</p><h2 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Mandatory</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>HTMLElement</td><td>true</td><td>-</td></tr></tbody></table><h2 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h2><p>void</p><h2 id="usage-8" tabindex="-1">Usage <a class="header-anchor" href="#usage-8" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">unbindListeners</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keybind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Init KeyBind and do some stuff ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">unbindListeners</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h1 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h1><h2 id="keybindingcallbackmap" tabindex="-1">KeyBindingCallbackMap <a class="header-anchor" href="#keybindingcallbackmap" aria-hidden="true">#</a></h2><p>Represents the key binded by the library.</p><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Mandatory</th></tr></thead><tbody><tr><td>callbacks</td><td>KeyBindingCallbacks</td><td>true</td></tr><tr><td>options</td><td>KeyBindingOptions</td><td>false</td></tr></tbody></table><h2 id="keybindingcallbacks" tabindex="-1">KeyBindingCallbacks <a class="header-anchor" href="#keybindingcallbacks" aria-hidden="true">#</a></h2><p>Represents the callbacks binded by the library.</p><h3 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Mandatory</th></tr></thead><tbody><tr><td>keyupCallback</td><td>(e?: KeyboardEvent) =&gt; void</td><td>false</td></tr><tr><td>keydownCallback</td><td>(e?: KeyboardEvent) =&gt; void</td><td>true</td></tr></tbody></table><h2 id="keybindingoptions" tabindex="-1">KeyBindingOptions <a class="header-anchor" href="#keybindingoptions" aria-hidden="true">#</a></h2><p>Represent the available options for binding.</p><h3 id="properties-2" tabindex="-1">Properties <a class="header-anchor" href="#properties-2" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Mandatory</th></tr></thead><tbody><tr><td>preventRepeatOnKeyDown</td><td>boolean</td><td>false</td></tr></tbody></table><h1 id="licence" tabindex="-1">Licence <a class="header-anchor" href="#licence" aria-hidden="true">#</a></h1><p>MIT License \xA9 2022 <a href="https://github.com/longo-andrea" target="_blank" rel="noreferrer">Andrea Longo</a></p>`,92),p=[t];function o(r,c,i,d,y,D){return n(),a("div",null,p)}const u=s(l,[["render",o]]);export{F as __pageData,u as default};