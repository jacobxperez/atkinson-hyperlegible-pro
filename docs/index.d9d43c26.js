function t(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}var e=globalThis,a={},n={},o=e.parcelRequire0b36;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},e.parcelRequire0b36=o),(0,o.register)("aqjMD",(function(e,a){function n(){Element.prototype.setDataAttr=function(t,e=""){return this.setAttribute(`data-${t}`,e)}}function o(){Element.prototype.removeDataAttr=function(t){return this.removeAttribute(`data-${t}`)}}function r(){Element.prototype.getDataAttr=function(t,e){return e?this.getAttribute(`data-${t}="${e}"`):this.getAttribute(`data-${t}`)}}function i(){Element.prototype.hasDataAttr=function(t,e){return e?this.hasAttribute(`data-${t}="${e}"`):this.hasAttribute(`data-${t}`)}}function s(){Element.prototype.closestDataAttr=function(t,e){return e?this.closest(`[data-${t}="${e}"]`):this.closest(`[data-${t}]`)}}function l(){Element.prototype.matchDataAttr=function(t,e){return e?this.matches(`[data-${t}="${e}"]`):this.matches(`[data-${t}]`)}}function d(){Element.prototype.toggleDataAttr=function(t,e){return this.hasDataAttr(t)?this.removeDataAttr(t):this.setDataAttr(t,e)}}t(e.exports,"setDataAttr",(()=>n)),t(e.exports,"removeDataAttr",(()=>o)),t(e.exports,"getDataAttr",(()=>r)),t(e.exports,"hasDataAttr",(()=>i)),t(e.exports,"closestDataAttr",(()=>s)),t(e.exports,"matchDataAttr",(()=>l)),t(e.exports,"toggleDataAttr",(()=>d))}));var r=o("aqjMD");function i(...t){const e=new Set,a=new Set(["pop","tooltip",...t]);function n(){e.forEach((t=>{a.has(t.dataset.toggle)&&t.removeDataAttr("state")}))}function o(t){const e=t.closestDataAttr("dropbox"),a=t.hasDataAttr("state");e||a||n(),t.toggleDataAttr("state","active")}return document.addEventListener("click",(t=>{const a=t.target.closestDataAttr("toggle");if(a){if(e.has(a))return;e.add(a),a.addEventListener("click",(t=>{o(a),t.stopPropagation()}),!0),o(a)}else n();t.stopPropagation()})),this}class s{constructor(){s.#t(),this.toggle=i}static#t(){(0,r.setDataAttr)(),(0,r.removeDataAttr)(),(0,r.getDataAttr)(),(0,r.hasDataAttr)(),(0,r.closestDataAttr)(),(0,r.matchDataAttr)(),(0,r.toggleDataAttr)()}toggle}const l=new s;""===meta.title?meta.title="<h1>Rams</h1>":meta.title=`<h1 data-text="h0">${meta.title}</h1>`;let d=`\n        <div id="header" data-container>\n            ${meta.title}\n        </div>\n        `,c='\n        <div data-container data-grid="main">\n            <aside id="aside" data-column="large-3 medium-3 small-4"></aside>\n            <article id="content" data-column="large-9 medium-9 small-4"></article>\n        </div>\n        ';"fullPage"===meta.type&&(c='\n        <div data-container data-grid="main">\n            <div id="content" data-column="large-12 medium-12 small-4"></div>\n        </div>\n        ');let m;m="localhost"===location.hostname||"127.0.0.1"===location.hostname?window.location.origin+"/templates/a.90a1e42e.html":window.location.origin+"/atkinson-hyperlegible-pro/templates/a.191129c6.html";let u=`\n        \n    <nav id="nav" data-navbar="top"></nav>\n    \n        <header data-section="header">\n            ${d}\n        </header>\n        <main data-section="main">\n            ${c}\n        </main>\n        \n    <footer data-section="footer">\n        <div id="footer" data-container>\n        </div>\n    </footer>\n    \n        `;template.fromString(u,"body").setTemplate("#headerTemplate","#header").setTemplate("#contentTemplate","#content",(()=>{const t=document.getElementById("aside"),e=document.getElementById("content");if("post"===meta.type){const a=e.querySelectorAll("h1, h2, h3, h4, h5, h6"),n='\n                <ul id=\'contents\' data-display="small-none">\n                    <li>\n                        <p><strong>Contents</strong></p>\n                    </li>\n                </ul>\n    \n                <ul data-display="small" data-box="border">\n                    <li>\n                        <a data-anchor data-flex data-toggle>\n                            <strong data-item="grow">Contents</strong>\n                            <span data-icon="&#xe043;"></span>\n                        </a>\n    \n                        <ul id=\'contentsDropdown\' data-dropbox>\n                        </ul>\n                    </li>\n                </ul>';t.insertAdjacentHTML("beforeend",n),a.forEach(((t,e)=>{t.setAttribute("id",`${e}`);const a=t.innerText,n=`<li><a href="#${e}">${a}</a></li>`;document.getElementById("contents").insertAdjacentHTML("beforeend",n);const o=`<li><a href="#${e}" data-anchor="menu">${a}</a></li>`;document.getElementById("contentsDropdown").insertAdjacentHTML("beforeend",o)}))}})).fetchTemplate(m,"#nav").fetchTemplate(m,"#footer"),l.toggle();