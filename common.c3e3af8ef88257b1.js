"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(O,w,i)=>{i.d(w,{c:()=>r});var h=i(4261),l=i(1086),c=i(8607);const r=(n,s)=>{let e,t;const u=(a,m,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,m);E&&s(E)&&!E.disabled?E!==e&&(o(),d(E,p)):o()},d=(a,m)=>{e=a,t||(t=e);const p=e;(0,h.w)(()=>p.classList.add("ion-activated")),m()},o=(a=!1)=>{if(!e)return;const m=e;(0,h.w)(()=>m.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,l.a),onMove:a=>u(a.currentX,a.currentY,l.b),onEnd:()=>{o(!0),(0,l.h)(),t=void 0}})}},8438:(O,w,i)=>{i.d(w,{g:()=>l});var h=i(8476);const l=()=>{if(void 0!==h.w)return h.w.Capacitor}},5572:(O,w,i)=>{i.d(w,{c:()=>h,i:()=>l});const h=(c,r,n)=>"function"==typeof n?n(c,r):"string"==typeof n?c[n]===r[n]:Array.isArray(r)?r.includes(c):c===r,l=(c,r,n)=>void 0!==c&&(Array.isArray(c)?c.some(s=>h(s,r,n)):h(c,r,n))},3351:(O,w,i)=>{i.d(w,{g:()=>h});const h=(s,e,t,u,d)=>c(s[1],e[1],t[1],u[1],d).map(o=>l(s[0],e[0],t[0],u[0],o)),l=(s,e,t,u,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+u*d))-s*Math.pow(d-1,3),c=(s,e,t,u,d)=>n((u-=d)-3*(t-=d)+3*(e-=d)-(s-=d),3*t-6*e+3*s,3*e-3*s,s).filter(a=>a>=0&&a<=1),n=(s,e,t,u)=>{if(0===s)return((s,e,t)=>{const u=e*e-4*s*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*s),(-e-Math.sqrt(u))/(2*s)]})(e,t,u);const d=(3*(t/=s)-(e/=s)*e)/3,o=(2*e*e*e-9*e*t+27*(u/=s))/27;if(0===d)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-d),-Math.sqrt(-d)];const a=Math.pow(o/2,2)+Math.pow(d/3,3);if(0===a)return[Math.pow(o/2,.5)-e/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-e/3];const m=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-o/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(m,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5083:(O,w,i)=>{i.d(w,{i:()=>h});const h=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(O,w,i)=>{i.r(w),i.d(w,{startFocusVisible:()=>r});const h="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let s=[],e=!0;const t=n?n.shadowRoot:document,u=n||document.body,d=M=>{s.forEach(f=>f.classList.remove(h)),M.forEach(f=>f.classList.add(h)),s=M},o=()=>{e=!1,d([])},a=M=>{e=c.includes(M.key),e||d([])},m=M=>{if(e&&void 0!==M.composedPath){const f=M.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));d(f)}},p=()=>{t.activeElement===u&&d([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",m),t.addEventListener("focusout",p),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mousedown",o),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",m),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",o),t.removeEventListener("mousedown",o)},setFocus:d}}},1086:(O,w,i)=>{i.d(w,{I:()=>l,a:()=>e,b:()=>t,c:()=>s,d:()=>d,h:()=>u});var h=i(8438),l=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(l||{});const r={getEngine(){const o=(0,h.g)();if(null!=o&&o.isPluginAvailable("Haptics"))return o.Plugins.Haptics},available(){if(!this.getEngine())return!1;const a=(0,h.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(o){const a=this.getEngine();a&&a.impact({style:o.style})},notification(o){const a=this.getEngine();a&&a.notification({type:o.type})},selection(){this.impact({style:l.Light})},selectionStart(){const o=this.getEngine();o&&o.selectionStart()},selectionChanged(){const o=this.getEngine();o&&o.selectionChanged()},selectionEnd(){const o=this.getEngine();o&&o.selectionEnd()}},n=()=>r.available(),s=()=>{n()&&r.selection()},e=()=>{n()&&r.selectionStart()},t=()=>{n()&&r.selectionChanged()},u=()=>{n()&&r.selectionEnd()},d=o=>{n()&&r.impact(o)}},909:(O,w,i)=>{i.d(w,{I:()=>s,a:()=>d,b:()=>n,c:()=>m,d:()=>E,f:()=>o,g:()=>u,i:()=>t,p:()=>p,r:()=>M,s:()=>a});var h=i(467),l=i(4920),c=i(4929);const n="ion-content",s=".ion-content-scroll-host",e=`${n}, ${s}`,t=f=>"ION-CONTENT"===f.tagName,u=function(){var f=(0,h.A)(function*(g){return t(g)?(yield new Promise(_=>(0,l.c)(g,_)),g.getScrollElement()):g});return function(_){return f.apply(this,arguments)}}(),d=f=>f.querySelector(s)||f.querySelector(e),o=f=>f.closest(e),a=(f,g)=>t(f)?f.scrollToTop(g):Promise.resolve(f.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),m=(f,g,_,y)=>t(f)?f.scrollByPoint(g,_,y):Promise.resolve(f.scrollBy({top:_,left:g,behavior:y>0?"smooth":"auto"})),p=f=>(0,c.b)(f,n),E=f=>{if(t(f)){const _=f.scrollY;return f.scrollY=!1,_}return f.style.setProperty("overflow","hidden"),!0},M=(f,g)=>{t(f)?f.scrollY=g:f.style.removeProperty("overflow")}},3992:(O,w,i)=>{i.d(w,{a:()=>h,b:()=>m,c:()=>e,d:()=>p,e:()=>L,f:()=>s,g:()=>E,h:()=>c,i:()=>l,j:()=>v,k:()=>C,l:()=>t,m:()=>o,n:()=>M,o:()=>d,p:()=>n,q:()=>r,r:()=>D,s:()=>x,t:()=>a,u:()=>_,v:()=>y,w:()=>u,x:()=>f,y:()=>g});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(O,w,i)=>{i.d(w,{c:()=>r,g:()=>n});var h=i(8476),l=i(4920),c=i(4929);const r=(e,t,u)=>{let d,o;if(void 0!==h.w&&"MutationObserver"in h.w){const E=Array.isArray(t)?t:[t];d=new MutationObserver(M=>{for(const f of M)for(const g of f.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&E.includes(g.slot))return u(),void(0,l.r)(()=>a(g))}),d.observe(e,{childList:!0,subtree:!0})}const a=E=>{var M;o&&(o.disconnect(),o=void 0),o=new MutationObserver(f=>{u();for(const g of f)for(const _ of g.removedNodes)_.nodeType===Node.ELEMENT_NODE&&_.slot===t&&p()}),o.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},p=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),p()}}},n=(e,t,u)=>{const d=null==e?0:e.toString().length,o=s(d,t);if(void 0===u)return o;try{return u(d,t)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),o}},s=(e,t)=>`${e} / ${t}`},1622:(O,w,i)=>{i.r(w),i.d(w,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>D,keyboardDidClose:()=>f,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>p,setKeyboardOpen:()=>m,startKeyboardAssist:()=>o,trackViewportChanges:()=>y});var h=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},t={},u=!1;const d=()=>{e={},t={},u=!1},o=v=>{if(h.K.getEngine())a(v);else{if(!v.visualViewport)return;t=D(v.visualViewport),v.visualViewport.onresize=()=>{y(v),E()||M(v)?m(v):f(v)&&p(v)}}},a=v=>{v.addEventListener("keyboardDidShow",C=>m(v,C)),v.addEventListener("keyboardDidHide",()=>p(v))},m=(v,C)=>{g(v,C),u=!0},p=v=>{_(v),u=!1},E=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=v=>u&&!f(v),f=v=>u&&t.height===v.innerHeight,g=(v,C)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:C?C.keyboardHeight:v.innerHeight-t.height}});v.dispatchEvent(L)},_=v=>{const C=new CustomEvent(n);v.dispatchEvent(C)},y=v=>{e=Object.assign({},t),t=D(v.visualViewport)},D=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},4379:(O,w,i)=>{i.d(w,{K:()=>r,a:()=>c});var h=i(8438),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),c=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(c||{});const r={getEngine(){const n=(0,h.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(s=>{if(s.code!==l.Unimplemented)throw s}):Promise.resolve(void 0)}}},4731:(O,w,i)=>{i.d(w,{c:()=>s});var h=i(467),l=i(8476),c=i(4379);const r=e=>{if(void 0===l.d||e===c.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},n=e=>{const t=r(e);return null===t?0:t.clientHeight},s=function(){var e=(0,h.A)(function*(t){let u,d,o,a;const m=function(){var g=(0,h.A)(function*(){const _=yield c.K.getResizeMode(),y=void 0===_?void 0:_.mode;u=()=>{void 0===a&&(a=n(y)),o=!0,p(o,y)},d=()=>{o=!1,p(o,y)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return g.apply(this,arguments)}}(),p=(g,_)=>{t&&t(g,E(_))},E=g=>{if(0===a||a===n(g))return;const _=r(g);return null!==_?new Promise(y=>{const v=new ResizeObserver(()=>{_.clientHeight===a&&(v.disconnect(),y())});v.observe(_)}):void 0};return yield m(),{init:m,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>o}});return function(u){return e.apply(this,arguments)}}()},7838:(O,w,i)=>{i.d(w,{c:()=>l});var h=i(467);const l=()=>{let c;return{lock:function(){var n=(0,h.A)(function*(){const s=c;let e;return c=new Promise(t=>e=t),void 0!==s&&(yield s),e});return function(){return n.apply(this,arguments)}}()}}},9001:(O,w,i)=>{i.d(w,{c:()=>c});var h=i(8476),l=i(4920);const c=(r,n,s)=>{let e;const t=()=>!(void 0===n()||void 0!==r.label||null===s()),d=()=>{const a=n();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const m=s().scrollWidth;if(0===m&&null===a.offsetParent&&void 0!==h.w&&"IntersectionObserver"in h.w){if(void 0!==e)return;const p=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),p.disconnect(),e=void 0)},{threshold:.01,root:r});p.observe(a)}else a.style.setProperty("width",.75*m+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(O,w,i)=>{i.d(w,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,r,n)=>{const s=c*r/n-c+"ms",e=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(c,r,n)=>{const s=r/n,e=c*s-c+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})}}},7166:(O,w,i)=>{i.r(w),i.d(w,{createSwipeBackGesture:()=>n});var h=i(4920),l=i(5083),c=i(8607);i(1970);const n=(s,e,t,u,d)=>{const o=s.ownerDocument.defaultView;let a=(0,l.i)(s);const p=_=>a?-_.deltaX:_.deltaX;return(0,c.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:_=>(a=(0,l.i)(s),(_=>{const{startX:D}=_;return a?D>=o.innerWidth-50:D<=50})(_)&&e()),onStart:t,onMove:_=>{const D=p(_)/o.innerWidth;u(D)},onEnd:_=>{const y=p(_),D=o.innerWidth,v=y/D,C=(_=>a?-_.velocityX:_.velocityX)(_),L=C>=0&&(C>.2||y>D/2),k=(L?1-v:v)*D;let b=0;if(k>5){const P=k/Math.abs(C);b=Math.min(P,540)}d(L,v<=0?.01:(0,h.j)(0,v,.9999),b)}})}},2935:(O,w,i)=>{i.d(w,{w:()=>h});const h=(r,n,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(l(t,n))});return e.observe(r,{childList:!0,subtree:!0}),e},l=(r,n)=>{let s;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=c(e.addedNodes[t],n)||s}),s},c=(r,n)=>{if(1!==r.nodeType)return;const s=r;return(s.tagName===n.toUpperCase()?[s]:Array.from(s.querySelectorAll(n))).find(t=>t.value===s.value)}}}]);