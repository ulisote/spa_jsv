!function(t){var n={};function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(a,r,function(n){return t[n]}.bind(null,r));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var a=()=>'\n\t<div class="Header-main">\n\t\t<div>\n\t\t\t<h1>\n\t\t\t\t<a href="/" title="">\n\t\t\t\t\tSPAJSV\n\t\t\t\t</a>\n\t\t\t</h1>\n\t\t</div>\n\t\t<div class="Header-nav">\n\t\t\t<a href="#/about/" title="">\n\t\t\t\tAbout\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t';const r="https://rickandmortyapi.com/api/character/";var i=async t=>{const n=t?`${r}${t}`:r;console.log(n);try{const t=await fetch(n);return await t.json()}catch(t){console.error("Fetch Error",t)}};var o=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var c=()=>'\n\t\t<div class="Erro404">\n\t\t\t<h2>Error 404</h2>\n\t\t</div>\n\t';var s=t=>{if(t.length<=3){return"/"===t?t:"/:id"}return"/"+t};const l={"/":async()=>`\n\t<div class="Characters"> \n\t ${(await i()).results.map(t=>`<article class="Character-item">\n\t\t\t\t<a href="#/${t.id}/">\n\t\t\t\t\t<img src="${t.image}" alt="${t.name}">\n\t\t\t\t\t<h2>${t.name}</h2>\n\t\t\t\t</a>\n\t\t\t</article>\n\t \t`).join("")}\n\t</div>`,"/:id":async()=>{const t=o(),n=await i(t);console.log(n);return`\n\t\t<div class="Character-inner">\n\t\t\t<article class="Character-card">\n\t\t\t\t<img src="${n.image}" alt="${n.name}"/>\n\t\t\t\t<h2>${n.name}</h2>\n\t\t\t</article>\n\t\t\t<article class="Character-card">\n\t\t\t\t<h3>Episodios: <span>${n.episode.length}</span></h3>\n\t\t\t\t<h3>Status: <span>${n.status}</span></h3>\n\t\t\t\t<h3>Especies: <span>${n.species}</span></h3>\n\t\t\t\t<h3>Genero: <span>${n.gender}</span></h3>\n\t\t\t\t<h3>Origen: <span>${n.origin.name}</span></h3>\n\t\t\t\t<h3>Ultima lozalicación: <span>${n.location.name} </span></h3>\n\t\t\t</article>\n\t\t</div>\n\t`},"/contact":"Contact"};var d=async()=>{const t=document.getElementById("header"),n=document.getElementById("content");t.innerHTML=await a();let e=o(),r=await s(e),i=l[r]?l[r]:c;n.innerHTML=await i()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);