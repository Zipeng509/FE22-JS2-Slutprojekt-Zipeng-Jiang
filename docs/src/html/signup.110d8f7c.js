function e(e,t){return Object.keys(t).forEach((function(n){"default"===n||"__esModule"===n||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})),e}function t(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequire0b32;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequire0b32=r),r.register("k4QTz",(function(e,t){
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var n=r("hxwDY");const i="transitionend",s=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},o=e=>{const t=s(e);return t&&document.querySelector(t)?t:null},a=e=>{const t=s(e);return t?document.querySelector(t):null},l=e=>{e.dispatchEvent(new Event(i))},c=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),h=e=>c(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,u=e=>{if(!c(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},d=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),f=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?f(e.parentNode):null},p=()=>{},_=e=>{e.offsetHeight},g=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,m=[],v=()=>"rtl"===document.documentElement.dir,y=e=>{var t;t=()=>{const t=g();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of m)e()})),m.push(t)):t()},b=e=>{"function"==typeof e&&e()},w=(e,t,n=!0)=>{if(!n)return void b(e);const s=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),s=Number.parseFloat(n);return i||s?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let r=!1;const o=({target:n})=>{n===t&&(r=!0,t.removeEventListener(i,o),b(e))};t.addEventListener(i,o),setTimeout((()=>{r||l(t)}),s)},C=(e,t,n,i)=>{const s=e.length;let r=e.indexOf(t);return-1===r?!n&&i?e[s-1]:e[0]:(r+=n?1:-1,i&&(r=(r+s)%s),e[Math.max(0,Math.min(r,s-1))])},E=/[^.]*(?=\..*)\.|.*/,T=/\..*/,x=/::\d+$/,I={};let k=1;const S={mouseenter:"mouseover",mouseleave:"mouseout"},N=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function P(e,t){return t&&`${t}::${k++}`||e.uidEvent||k++}function A(e){const t=P(e);return e.uidEvent=t,I[t]=I[t]||{},I[t]}function D(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function O(e,t,n){const i="string"==typeof t,s=i?n:t||n;let r=F(e);return N.has(r)||(r=e),[i,s,r]}function L(e,t,n,i,s){if("string"!=typeof t||!e)return;let[r,o,a]=O(t,n,i);if(t in S){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const l=A(e),c=l[a]||(l[a]={}),h=D(c,o,r?n:null);if(h)return void(h.oneOff=h.oneOff&&s);const u=P(o,t.replace(E,"")),d=r?function(e,t,n){return function i(s){const r=e.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return j(s,{delegateTarget:o}),i.oneOff&&q.off(e,s.type,t,n),n.apply(o,[s])}}(e,n,o):function(e,t){return function n(i){return j(i,{delegateTarget:e}),n.oneOff&&q.off(e,i.type,t),t.apply(e,[i])}}(e,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=s,d.uidEvent=u,c[u]=d,e.addEventListener(a,d,r)}function R(e,t,n,i,s){const r=D(t[n],i,s);r&&(e.removeEventListener(n,r,Boolean(s)),delete t[n][r.uidEvent])}function M(e,t,n,i){const s=t[n]||{};for(const r of Object.keys(s))if(r.includes(i)){const i=s[r];R(e,t,n,i.callable,i.delegationSelector)}}function F(e){return e=e.replace(T,""),S[e]||e}const q={on(e,t,n,i){L(e,t,n,i,!1)},one(e,t,n,i){L(e,t,n,i,!0)},off(e,t,n,i){if("string"!=typeof t||!e)return;const[s,r,o]=O(t,n,i),a=o!==t,l=A(e),c=l[o]||{},h=t.startsWith(".");if(void 0===r){if(h)for(const n of Object.keys(l))M(e,l,n,t.slice(1));for(const n of Object.keys(c)){const i=n.replace(x,"");if(!a||t.includes(i)){const t=c[n];R(e,l,o,t.callable,t.delegationSelector)}}}else{if(!Object.keys(c).length)return;R(e,l,o,r,s?n:null)}},trigger(e,t,n){if("string"!=typeof t||!e)return null;const i=g();let s=null,r=!0,o=!0,a=!1;t!==F(t)&&i&&(s=i.Event(t,n),i(e).trigger(s),r=!s.isPropagationStopped(),o=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let l=new Event(t,{bubbles:r,cancelable:!0});return l=j(l,n),a&&l.preventDefault(),o&&e.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function j(e,t){for(const[n,i]of Object.entries(t||{}))try{e[n]=i}catch(t){Object.defineProperty(e,n,{configurable:!0,get:()=>i})}return e}const $=new Map,H={set(e,t,n){$.has(e)||$.set(e,new Map);const i=$.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(e,t)=>$.has(e)&&$.get(e).get(t)||null,remove(e,t){if(!$.has(e))return;const n=$.get(e);n.delete(t),0===n.size&&$.delete(e)}};function W(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function B(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const U={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${B(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${B(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const i of n){let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=W(e.dataset[i])}return t},getDataAttribute:(e,t)=>W(e.getAttribute(`data-bs-${B(t)}`))};class z{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=c(t)?U.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...c(t)?U.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const i of Object.keys(t)){const s=t[i],r=e[i],o=c(r)?"element":null==(n=r)?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`)}var n}}class V extends z{constructor(e,t){super(),(e=h(e))&&(this._element=e,this._config=this._getConfig(t),H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),q.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){w(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return H.get(h(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.2.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const K=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;q.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),d(this))return;const s=a(this)||this.closest(`.${i}`);e.getOrCreateInstance(s)[t]()}))},Q=".bs.alert",Y=`close${Q}`,G=`closed${Q}`;class X extends V{static get NAME(){return"alert"}close(){if(q.trigger(this._element,Y).defaultPrevented)return;this._element.classList.remove("show");const e=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,e)}_destroyElement(){this._element.remove(),q.trigger(this._element,G),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=X.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}K(X,"close"),y(X);const J='[data-bs-toggle="button"]';class Z extends V{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each((function(){const t=Z.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}q.on(document,"click.bs.button.data-api",J,(e=>{e.preventDefault();const t=e.target.closest(J);Z.getOrCreateInstance(t).toggle()})),y(Z);const ee={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let i=e.parentNode.closest(t);for(;i;)n.push(i),i=i.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!d(e)&&u(e)))}},te=".bs.swipe",ne=`touchstart${te}`,ie=`touchmove${te}`,se=`touchend${te}`,re=`pointerdown${te}`,oe=`pointerup${te}`,ae={endCallback:null,leftCallback:null,rightCallback:null},le={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ce extends z{constructor(e,t){super(),this._element=e,e&&ce.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return ae}static get DefaultType(){return le}static get NAME(){return"swipe"}dispose(){q.off(this._element,te)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),b(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=40)return;const t=e/this._deltaX;this._deltaX=0,t&&b(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(q.on(this._element,re,(e=>this._start(e))),q.on(this._element,oe,(e=>this._end(e))),this._element.classList.add("pointer-event")):(q.on(this._element,ne,(e=>this._start(e))),q.on(this._element,ie,(e=>this._move(e))),q.on(this._element,se,(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const he=".bs.carousel",ue=".data-api",de="next",fe="prev",pe="left",_e="right",ge=`slide${he}`,me=`slid${he}`,ve=`keydown${he}`,ye=`mouseenter${he}`,be=`mouseleave${he}`,we=`dragstart${he}`,Ce=`load${he}${ue}`,Ee=`click${he}${ue}`,Te="carousel",xe="active",Ie=".active",ke=".carousel-item",Se=Ie+ke,Ne={ArrowLeft:_e,ArrowRight:pe},Pe={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ae={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class De extends V{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ee.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Te&&this.cycle()}static get Default(){return Pe}static get DefaultType(){return Ae}static get NAME(){return"carousel"}next(){this._slide(de)}nextWhenVisible(){!document.hidden&&u(this._element)&&this.next()}prev(){this._slide(fe)}pause(){this._isSliding&&l(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?q.one(this._element,me,(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void q.one(this._element,me,(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?de:fe;this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&q.on(this._element,ve,(e=>this._keydown(e))),"hover"===this._config.pause&&(q.on(this._element,ye,(()=>this.pause())),q.on(this._element,be,(()=>this._maybeEnableCycle()))),this._config.touch&&ce.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of ee.find(".carousel-item img",this._element))q.on(e,we,(e=>e.preventDefault()));const e={leftCallback:()=>this._slide(this._directionToOrder(pe)),rightCallback:()=>this._slide(this._directionToOrder(_e)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new ce(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Ne[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=ee.findOne(Ie,this._indicatorsElement);t.classList.remove(xe),t.removeAttribute("aria-current");const n=ee.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(xe),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),i=e===de,s=t||C(this._getItems(),n,i,this._config.wrap);if(s===n)return;const r=this._getItemIndex(s),o=t=>q.trigger(this._element,t,{relatedTarget:s,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:r});if(o(ge).defaultPrevented)return;if(!n||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=s;const l=i?"carousel-item-start":"carousel-item-end",c=i?"carousel-item-next":"carousel-item-prev";s.classList.add(c),_(s),n.classList.add(l),s.classList.add(l);this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(xe),n.classList.remove(xe,c,l),this._isSliding=!1,o(me)}),n,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ee.findOne(Se,this._element)}_getItems(){return ee.find(ke,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return v()?e===pe?fe:de:e===pe?de:fe}_orderToDirection(e){return v()?e===fe?pe:_e:e===fe?_e:pe}static jQueryInterface(e){return this.each((function(){const t=De.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}q.on(document,Ee,"[data-bs-slide], [data-bs-slide-to]",(function(e){const t=a(this);if(!t||!t.classList.contains(Te))return;e.preventDefault();const n=De.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");return i?(n.to(i),void n._maybeEnableCycle()):"next"===U.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),q.on(window,Ce,(()=>{const e=ee.find('[data-bs-ride="carousel"]');for(const t of e)De.getOrCreateInstance(t)})),y(De);const Oe=".bs.collapse",Le=`show${Oe}`,Re=`shown${Oe}`,Me=`hide${Oe}`,Fe=`hidden${Oe}`,qe=`click${Oe}.data-api`,je="show",$e="collapse",He="collapsing",We=`:scope .${$e} .${$e}`,Be='[data-bs-toggle="collapse"]',Ue={parent:null,toggle:!0},ze={parent:"(null|element)",toggle:"boolean"};class Ve extends V{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=ee.find(Be);for(const e of n){const t=o(e),n=ee.find(t).filter((e=>e===this._element));null!==t&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ue}static get DefaultType(){return ze}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>Ve.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(q.trigger(this._element,Le).defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove($e),this._element.classList.add(He),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(He),this._element.classList.add($e,je),this._element.style[t]="",q.trigger(this._element,Re)}),this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(q.trigger(this._element,Me).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,_(this._element),this._element.classList.add(He),this._element.classList.remove($e,je);for(const e of this._triggerArray){const t=a(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(He),this._element.classList.add($e),q.trigger(this._element,Fe)}),this._element,!0)}_isShown(e=this._element){return e.classList.contains(je)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=h(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Be);for(const t of e){const e=a(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=ee.find(We,this._config.parent);return ee.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=Ve.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}q.on(document,qe,Be,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=o(this),n=ee.find(t);for(const e of n)Ve.getOrCreateInstance(e,{toggle:!1}).toggle()})),y(Ve);const Ke="dropdown",Qe=".bs.dropdown",Ye=".data-api",Ge="ArrowUp",Xe="ArrowDown",Je=`hide${Qe}`,Ze=`hidden${Qe}`,et=`show${Qe}`,tt=`shown${Qe}`,nt=`click${Qe}${Ye}`,it=`keydown${Qe}${Ye}`,st=`keyup${Qe}${Ye}`,rt="show",ot='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',at=`${ot}.${rt}`,lt=".dropdown-menu",ct=v()?"top-end":"top-start",ht=v()?"top-start":"top-end",ut=v()?"bottom-end":"bottom-start",dt=v()?"bottom-start":"bottom-end",ft=v()?"left-start":"right-start",pt=v()?"right-start":"left-start",_t={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},gt={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class mt extends V{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=ee.next(this._element,lt)[0]||ee.prev(this._element,lt)[0]||ee.findOne(lt,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return _t}static get DefaultType(){return gt}static get NAME(){return Ke}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!q.trigger(this._element,et,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const e of[].concat(...document.body.children))q.on(e,"mouseover",p);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(rt),this._element.classList.add(rt),q.trigger(this._element,tt,e)}}hide(){if(d(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!q.trigger(this._element,Je,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))q.off(e,"mouseover",p);this._popper&&this._popper.destroy(),this._menu.classList.remove(rt),this._element.classList.remove(rt),this._element.setAttribute("aria-expanded","false"),U.removeDataAttribute(this._menu,"popper"),q.trigger(this._element,Ze,e)}}_getConfig(e){if("object"==typeof(e=super._getConfig(e)).reference&&!c(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${Ke.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(void 0===n)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:c(this._config.reference)?e=h(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=n.createPopper(e,this._menu,t)}_isShown(){return this._menu.classList.contains(rt)}_getPlacement(){const e=this._parent;if(e.classList.contains("dropend"))return ft;if(e.classList.contains("dropstart"))return pt;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?ht:ct:t?dt:ut}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(U.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=ee.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((e=>u(e)));n.length&&C(n,t,e===Xe,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=mt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(2===e.button||"keyup"===e.type&&"Tab"!==e.key)return;const t=ee.find(at);for(const n of t){const t=mt.getInstance(n);if(!t||!1===t._config.autoClose)continue;const i=e.composedPath(),s=i.includes(t._menu);if(i.includes(t._element)||"inside"===t._config.autoClose&&!s||"outside"===t._config.autoClose&&s)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const r={relatedTarget:t._element};"click"===e.type&&(r.clickEvent=e),t._completeHide(r)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n="Escape"===e.key,i=[Ge,Xe].includes(e.key);if(!i&&!n)return;if(t&&!n)return;e.preventDefault();const s=this.matches(ot)?this:ee.prev(this,ot)[0]||ee.next(this,ot)[0]||ee.findOne(ot,e.delegateTarget.parentNode),r=mt.getOrCreateInstance(s);if(i)return e.stopPropagation(),r.show(),void r._selectMenuItem(e);r._isShown()&&(e.stopPropagation(),r.hide(),s.focus())}}q.on(document,it,ot,mt.dataApiKeydownHandler),q.on(document,it,lt,mt.dataApiKeydownHandler),q.on(document,nt,mt.clearMenus),q.on(document,st,mt.clearMenus),q.on(document,nt,ot,(function(e){e.preventDefault(),mt.getOrCreateInstance(this).toggle()})),y(mt);const vt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",yt=".sticky-top",bt="padding-right",wt="margin-right";class Ct{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,bt,(t=>t+e)),this._setElementAttributes(vt,bt,(t=>t+e)),this._setElementAttributes(yt,wt,(t=>t-e))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,bt),this._resetElementAttributes(vt,bt),this._resetElementAttributes(yt,wt)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth();this._applyManipulationCallback(e,(e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const s=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&U.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,(e=>{const n=U.getDataAttribute(e,t);null!==n?(U.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)}))}_applyManipulationCallback(e,t){if(c(e))t(e);else for(const n of ee.find(e,this._element))t(n)}}const Et="backdrop",Tt="show",xt=`mousedown.bs.${Et}`,It={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},kt={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class St extends z{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return It}static get DefaultType(){return kt}static get NAME(){return Et}show(e){if(!this._config.isVisible)return void b(e);this._append();const t=this._getElement();this._config.isAnimated&&_(t),t.classList.add(Tt),this._emulateAnimation((()=>{b(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove(Tt),this._emulateAnimation((()=>{this.dispose(),b(e)}))):b(e)}dispose(){this._isAppended&&(q.off(this._element,xt),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=h(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),q.on(e,xt,(()=>{b(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){w(e,this._getElement(),this._config.isAnimated)}}const Nt=".bs.focustrap",Pt=`focusin${Nt}`,At=`keydown.tab${Nt}`,Dt="backward",Ot={autofocus:!0,trapElement:null},Lt={autofocus:"boolean",trapElement:"element"};class Rt extends z{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ot}static get DefaultType(){return Lt}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),q.off(document,Nt),q.on(document,Pt,(e=>this._handleFocusin(e))),q.on(document,At,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,q.off(document,Nt))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=ee.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===Dt?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?Dt:"forward")}}const Mt=".bs.modal",Ft=`hide${Mt}`,qt=`hidePrevented${Mt}`,jt=`hidden${Mt}`,$t=`show${Mt}`,Ht=`shown${Mt}`,Wt=`resize${Mt}`,Bt=`click.dismiss${Mt}`,Ut=`mousedown.dismiss${Mt}`,zt=`keydown.dismiss${Mt}`,Vt=`click${Mt}.data-api`,Kt="modal-open",Qt="show",Yt="modal-static",Gt={backdrop:!0,focus:!0,keyboard:!0},Xt={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Jt extends V{constructor(e,t){super(e,t),this._dialog=ee.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ct,this._addEventListeners()}static get Default(){return Gt}static get DefaultType(){return Xt}static get NAME(){return"modal"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;q.trigger(this._element,$t,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Kt),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;q.trigger(this._element,Ft).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Qt),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])q.off(e,Mt);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new St({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Rt({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=ee.findOne(".modal-body",this._dialog);t&&(t.scrollTop=0),_(this._element),this._element.classList.add(Qt);this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,q.trigger(this._element,Ht,{relatedTarget:e})}),this._dialog,this._isAnimated())}_addEventListeners(){q.on(this._element,zt,(e=>{if("Escape"===e.key)return this._config.keyboard?(e.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),q.on(window,Wt,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),q.on(this._element,Ut,(e=>{q.one(this._element,Bt,(t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Kt),this._resetAdjustments(),this._scrollBar.reset(),q.trigger(this._element,jt)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(q.trigger(this._element,qt).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;"hidden"===t||this._element.classList.contains(Yt)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Yt),this._queueCallback((()=>{this._element.classList.remove(Yt),this._queueCallback((()=>{this._element.style.overflowY=t}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=v()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){const e=v()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=Jt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}q.on(document,Vt,'[data-bs-toggle="modal"]',(function(e){const t=a(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),q.one(t,$t,(e=>{e.defaultPrevented||q.one(t,jt,(()=>{u(this)&&this.focus()}))}));const n=ee.findOne(".modal.show");n&&Jt.getInstance(n).hide();Jt.getOrCreateInstance(t).toggle(this)})),K(Jt),y(Jt);const Zt=".bs.offcanvas",en=".data-api",tn=`load${Zt}${en}`,nn="show",sn="showing",rn="hiding",on=".offcanvas.show",an=`show${Zt}`,ln=`shown${Zt}`,cn=`hide${Zt}`,hn=`hidePrevented${Zt}`,un=`hidden${Zt}`,dn=`resize${Zt}`,fn=`click${Zt}${en}`,pn=`keydown.dismiss${Zt}`,_n={backdrop:!0,keyboard:!0,scroll:!1},gn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class mn extends V{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return _n}static get DefaultType(){return gn}static get NAME(){return"offcanvas"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;if(q.trigger(this._element,an,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Ct).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(sn);this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(nn),this._element.classList.remove(sn),q.trigger(this._element,ln,{relatedTarget:e})}),this._element,!0)}hide(){if(!this._isShown)return;if(q.trigger(this._element,cn).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(rn),this._backdrop.hide();this._queueCallback((()=>{this._element.classList.remove(nn,rn),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Ct).reset(),q.trigger(this._element,un)}),this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=Boolean(this._config.backdrop);return new St({className:"offcanvas-backdrop",isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{"static"!==this._config.backdrop?this.hide():q.trigger(this._element,hn)}:null})}_initializeFocusTrap(){return new Rt({trapElement:this._element})}_addEventListeners(){q.on(this._element,pn,(e=>{"Escape"===e.key&&(this._config.keyboard?this.hide():q.trigger(this._element,hn))}))}static jQueryInterface(e){return this.each((function(){const t=mn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}q.on(document,fn,'[data-bs-toggle="offcanvas"]',(function(e){const t=a(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),d(this))return;q.one(t,un,(()=>{u(this)&&this.focus()}));const n=ee.findOne(on);n&&n!==t&&mn.getInstance(n).hide();mn.getOrCreateInstance(t).toggle(this)})),q.on(window,tn,(()=>{for(const e of ee.find(on))mn.getOrCreateInstance(e).show()})),q.on(window,dn,(()=>{for(const e of ee.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&mn.getOrCreateInstance(e).hide()})),K(mn),y(mn);const vn=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),yn=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,bn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,wn=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!vn.has(n)||Boolean(yn.test(e.nodeValue)||bn.test(e.nodeValue)):t.filter((e=>e instanceof RegExp)).some((e=>e.test(n)))},Cn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};const En={allowList:Cn,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Tn={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},xn={entry:"(string|element|function|null)",selector:"(string|element)"};class In extends z{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return En}static get DefaultType(){return Tn}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},xn)}_setContent(e,t,n){const i=ee.findOne(n,e);i&&((t=this._resolvePossibleFunction(t))?c(t)?this._putElementInTemplate(h(t),i):this._config.html?i.innerHTML=this._maybeSanitize(t):i.textContent=t:i.remove())}_maybeSanitize(e){return this._config.sanitize?function(e,t,n){if(!e.length)return e;if(n&&"function"==typeof n)return n(e);const i=(new window.DOMParser).parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const e of s){const n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const i=[].concat(...e.attributes),s=[].concat(t["*"]||[],t[n]||[]);for(const t of i)wn(t,s)||e.removeAttribute(t.nodeName)}return i.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return"function"==typeof e?e(this):e}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const kn=new Set(["sanitize","allowList","sanitizeFn"]),Sn="fade",Nn="show",Pn=".modal",An="hide.bs.modal",Dn="hover",On="focus",Ln={AUTO:"auto",TOP:"top",RIGHT:v()?"left":"right",BOTTOM:"bottom",LEFT:v()?"right":"left"},Rn={allowList:Cn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Mn={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Fn extends V{constructor(e,t){if(void 0===n)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Rn}static get DefaultType(){return Mn}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),q.off(this._element.closest(Pn),An,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=q.trigger(this._element,this.constructor.eventName("show")),t=(f(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this._disposePopper();const n=this._getTipElement();this._element.setAttribute("aria-describedby",n.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(n),q.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(n),n.classList.add(Nn),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))q.on(e,"mouseover",p);this._queueCallback((()=>{q.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(!this._isShown())return;if(q.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented)return;if(this._getTipElement().classList.remove(Nn),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))q.off(e,"mouseover",p);this._activeTrigger.click=!1,this._activeTrigger[On]=!1,this._activeTrigger[Dn]=!1,this._isHovered=null;this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),q.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(Sn,Nn),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=(e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e})(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(Sn),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new In({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Sn)}_isShown(){return this.tip&&this.tip.classList.contains(Nn)}_createPopper(e){const t="function"==typeof this._config.placement?this._config.placement.call(this,e,this._element):this._config.placement,i=Ln[t.toUpperCase()];return n.createPopper(this._element,e,this._getPopperConfig(i))}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"==typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)q.on(this._element,this.constructor.eventName("click"),this._config.selector,(e=>{this._initializeOnDelegatedTarget(e).toggle()}));else if("manual"!==t){const e=t===Dn?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),n=t===Dn?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");q.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?On:Dn]=!0,t._enter()})),q.on(this._element,n,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?On:Dn]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},q.on(this._element.closest(Pn),An,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=U.getDataAttributes(this._element);for(const e of Object.keys(t))kn.has(e)&&delete t[e];return e={...t,..."object"==typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:h(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each((function(){const t=Fn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}y(Fn);const qn={...Fn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},jn={...Fn.DefaultType,content:"(null|string|element|function)"};class $n extends Fn{static get Default(){return qn}static get DefaultType(){return jn}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=$n.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}y($n);const Hn=".bs.scrollspy",Wn=`activate${Hn}`,Bn=`click${Hn}`,Un=`load${Hn}.data-api`,zn="active",Vn="[href]",Kn=".nav-link",Qn=`${Kn}, .nav-item > ${Kn}, .list-group-item`,Yn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Gn={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Xn extends V{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Yn}static get DefaultType(){return Gn}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=h(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"==typeof e.threshold&&(e.threshold=e.threshold.split(",").map((e=>Number.parseFloat(e)))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(q.off(this._config.target,Bn),q.on(this._config.target,Bn,Vn,(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,i=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:i,behavior:"smooth"});n.scrollTop=i}})))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((e=>this._observerCallback(e)),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const r of e){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(r));continue}const e=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&e){if(n(r),!i)return}else s||e||n(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=ee.find(Vn,this._config.target);for(const t of e){if(!t.hash||d(t))continue;const e=ee.findOne(t.hash,this._element);u(e)&&(this._targetLinks.set(t.hash,t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(zn),this._activateParents(e),q.trigger(this._element,Wn,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains("dropdown-item"))ee.findOne(".dropdown-toggle",e.closest(".dropdown")).classList.add(zn);else for(const t of ee.parents(e,".nav, .list-group"))for(const e of ee.prev(t,Qn))e.classList.add(zn)}_clearActiveClass(e){e.classList.remove(zn);const t=ee.find(`${Vn}.${zn}`,e);for(const e of t)e.classList.remove(zn)}static jQueryInterface(e){return this.each((function(){const t=Xn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}q.on(window,Un,(()=>{for(const e of ee.find('[data-bs-spy="scroll"]'))Xn.getOrCreateInstance(e)})),y(Xn);const Jn=".bs.tab",Zn=`hide${Jn}`,ei=`hidden${Jn}`,ti=`show${Jn}`,ni=`shown${Jn}`,ii=`click${Jn}`,si=`keydown${Jn}`,ri=`load${Jn}`,oi="ArrowLeft",ai="ArrowRight",li="ArrowUp",ci="ArrowDown",hi="active",ui="fade",di="show",fi=":not(.dropdown-toggle)",pi='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',_i=`${`.nav-link${fi}, .list-group-item${fi}, [role="tab"]${fi}`}, ${pi}`,gi=`.${hi}[data-bs-toggle="tab"], .${hi}[data-bs-toggle="pill"], .${hi}[data-bs-toggle="list"]`;class mi extends V{constructor(e){super(e),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),q.on(this._element,si,(e=>this._keydown(e))))}static get NAME(){return"tab"}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?q.trigger(t,Zn,{relatedTarget:e}):null;q.trigger(e,ti,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(hi),this._activate(a(e));this._queueCallback((()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),q.trigger(e,ni,{relatedTarget:t})):e.classList.add(di)}),e,e.classList.contains(ui))}_deactivate(e,t){if(!e)return;e.classList.remove(hi),e.blur(),this._deactivate(a(e));this._queueCallback((()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),q.trigger(e,ei,{relatedTarget:t})):e.classList.remove(di)}),e,e.classList.contains(ui))}_keydown(e){if(![oi,ai,li,ci].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=[ai,ci].includes(e.key),n=C(this._getChildren().filter((e=>!d(e))),e.target,t,!0);n&&(n.focus({preventScroll:!0}),mi.getOrCreateInstance(n).show())}_getChildren(){return ee.find(_i,this._parent)}_getActiveElem(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=a(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains("dropdown"))return;const i=(e,i)=>{const s=ee.findOne(e,n);s&&s.classList.toggle(i,t)};i(".dropdown-toggle",hi),i(".dropdown-menu",di),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(hi)}_getInnerElement(e){return e.matches(_i)?e:ee.findOne(_i,e)}_getOuterElement(e){return e.closest(".nav-item, .list-group-item")||e}static jQueryInterface(e){return this.each((function(){const t=mi.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}q.on(document,ii,pi,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),d(this)||mi.getOrCreateInstance(this).show()})),q.on(window,ri,(()=>{for(const e of ee.find(gi))mi.getOrCreateInstance(e)})),y(mi);const vi=".bs.toast",yi=`mouseover${vi}`,bi=`mouseout${vi}`,wi=`focusin${vi}`,Ci=`focusout${vi}`,Ei=`hide${vi}`,Ti=`hidden${vi}`,xi=`show${vi}`,Ii=`shown${vi}`,ki="hide",Si="show",Ni="showing",Pi={animation:"boolean",autohide:"boolean",delay:"number"},Ai={animation:!0,autohide:!0,delay:5e3};class Di extends V{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Ai}static get DefaultType(){return Pi}static get NAME(){return"toast"}show(){if(q.trigger(this._element,xi).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");this._element.classList.remove(ki),_(this._element),this._element.classList.add(Si,Ni),this._queueCallback((()=>{this._element.classList.remove(Ni),q.trigger(this._element,Ii),this._maybeScheduleHide()}),this._element,this._config.animation)}hide(){if(!this.isShown())return;if(q.trigger(this._element,Ei).defaultPrevented)return;this._element.classList.add(Ni),this._queueCallback((()=>{this._element.classList.add(ki),this._element.classList.remove(Ni,Si),q.trigger(this._element,Ti)}),this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Si),super.dispose()}isShown(){return this._element.classList.contains(Si)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){q.on(this._element,yi,(e=>this._onInteraction(e,!0))),q.on(this._element,bi,(e=>this._onInteraction(e,!1))),q.on(this._element,wi,(e=>this._onInteraction(e,!0))),q.on(this._element,Ci,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Di.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}K(Di),y(Di)})),r.register("hxwDY",(function(n,i){t(n.exports,"popperGenerator",(()=>r("8iXfp").popperGenerator)),t(n.exports,"detectOverflow",(()=>r("gGcga").default)),t(n.exports,"createPopperBase",(()=>r("8iXfp").createPopper)),t(n.exports,"createPopper",(()=>r("3tUi5").createPopper)),t(n.exports,"createPopperLite",(()=>r("kznft").createPopper));var s=r("1KQnQ"),o=r("e0Om6");r("8iXfp"),r("gGcga"),r("3tUi5"),r("kznft");e(n.exports,s),e(n.exports,o)})),r.register("1KQnQ",(function(e,n){t(e.exports,"top",(()=>i)),t(e.exports,"bottom",(()=>s)),t(e.exports,"right",(()=>r)),t(e.exports,"left",(()=>o)),t(e.exports,"auto",(()=>a)),t(e.exports,"basePlacements",(()=>l)),t(e.exports,"start",(()=>c)),t(e.exports,"end",(()=>h)),t(e.exports,"clippingParents",(()=>u)),t(e.exports,"viewport",(()=>d)),t(e.exports,"popper",(()=>f)),t(e.exports,"reference",(()=>p)),t(e.exports,"variationPlacements",(()=>_)),t(e.exports,"placements",(()=>g)),t(e.exports,"beforeRead",(()=>m)),t(e.exports,"read",(()=>v)),t(e.exports,"afterRead",(()=>y)),t(e.exports,"beforeMain",(()=>b)),t(e.exports,"main",(()=>w)),t(e.exports,"afterMain",(()=>C)),t(e.exports,"beforeWrite",(()=>E)),t(e.exports,"write",(()=>T)),t(e.exports,"afterWrite",(()=>x)),t(e.exports,"modifierPhases",(()=>I));var i="top",s="bottom",r="right",o="left",a="auto",l=[i,s,r,o],c="start",h="end",u="clippingParents",d="viewport",f="popper",p="reference",_=l.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+h])}),[]),g=[].concat(l,[a]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+h])}),[]),m="beforeRead",v="read",y="afterRead",b="beforeMain",w="main",C="afterMain",E="beforeWrite",T="write",x="afterWrite",I=[m,v,y,b,w,C,E,T,x]})),r.register("e0Om6",(function(e,n){t(e.exports,"applyStyles",(()=>r("aOl9t").default)),t(e.exports,"arrow",(()=>r("kU5lB").default)),t(e.exports,"computeStyles",(()=>r("5ZHwq").default)),t(e.exports,"eventListeners",(()=>r("jU5vk").default)),t(e.exports,"flip",(()=>r("hMqHB").default)),t(e.exports,"hide",(()=>r("95q7y").default)),t(e.exports,"offset",(()=>r("lWzyf").default)),t(e.exports,"popperOffsets",(()=>r("cePA2").default)),t(e.exports,"preventOverflow",(()=>r("bxdrS").default));r("aOl9t"),r("kU5lB"),r("5ZHwq"),r("jU5vk"),r("hMqHB"),r("95q7y"),r("lWzyf"),r("cePA2"),r("bxdrS")})),r.register("aOl9t",(function(e,n){t(e.exports,"default",(()=>o));var i=r("oKPBf"),s=r("93iQ7");var o={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];(0,s.isHTMLElement)(o)&&(0,i.default)(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});(0,s.isHTMLElement)(r)&&(0,i.default)(r)&&(Object.assign(r.style,a),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]}})),r.register("oKPBf",(function(e,n){function i(e){return e?(e.nodeName||"").toLowerCase():null}t(e.exports,"default",(()=>i))})),r.register("93iQ7",(function(e,n){t(e.exports,"isElement",(()=>s)),t(e.exports,"isHTMLElement",(()=>o)),t(e.exports,"isShadowRoot",(()=>a));var i=r("93G53");function s(e){return e instanceof(0,i.default)(e).Element||e instanceof Element}function o(e){return e instanceof(0,i.default)(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof(0,i.default)(e).ShadowRoot||e instanceof ShadowRoot)}})),r.register("93G53",(function(e,n){function i(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}t(e.exports,"default",(()=>i))})),r.register("kU5lB",(function(e,n){t(e.exports,"default",(()=>f));var i=r("h06jI"),s=r("dElKO"),o=r("ciq1x"),a=r("5KzeH"),l=r("g1hRA"),c=r("cOvrb"),h=r("3Os63"),u=r("hdgde"),d=r("1KQnQ");var f={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,f=n.elements.arrow,p=n.modifiersData.popperOffsets,_=(0,i.default)(n.placement),g=(0,l.default)(_),m=[d.left,d.right].indexOf(_)>=0?"height":"width";if(f&&p){var v=function(e,t){return e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,(0,h.default)("number"!=typeof e?e:(0,u.default)(e,d.basePlacements))}(o.padding,n),y=(0,s.default)(f),b="y"===g?d.top:d.left,w="y"===g?d.bottom:d.right,C=n.rects.reference[m]+n.rects.reference[g]-p[g]-n.rects.popper[m],E=p[g]-n.rects.reference[g],T=(0,a.default)(f),x=T?"y"===g?T.clientHeight||0:T.clientWidth||0:0,I=C/2-E/2,k=v[b],S=x-y[m]-v[w],N=x/2-y[m]/2+I,P=(0,c.within)(k,N,S),A=g;n.modifiersData[r]=((t={})[A]=P,t.centerOffset=P-N,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&(0,o.default)(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}})),r.register("h06jI",(function(e,n){function i(e){return e.split("-")[0]}t(e.exports,"default",(()=>i))})),r.register("dElKO",(function(e,n){t(e.exports,"default",(()=>s));var i=r("41Z5W");function s(e){var t=(0,i.default)(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}})),r.register("41Z5W",(function(e,n){t(e.exports,"default",(()=>l));var i=r("93iQ7"),s=r("4J8n1"),o=r("93G53"),a=r("gotNd");function l(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),l=1,c=1;t&&(0,i.isHTMLElement)(e)&&(l=e.offsetWidth>0&&(0,s.round)(r.width)/e.offsetWidth||1,c=e.offsetHeight>0&&(0,s.round)(r.height)/e.offsetHeight||1);var h=((0,i.isElement)(e)?(0,o.default)(e):window).visualViewport,u=!(0,a.default)()&&n,d=(r.left+(u&&h?h.offsetLeft:0))/l,f=(r.top+(u&&h?h.offsetTop:0))/c,p=r.width/l,_=r.height/c;return{width:p,height:_,top:f,right:d+p,bottom:f+_,left:d,x:d,y:f}}})),r.register("4J8n1",(function(e,n){t(e.exports,"max",(()=>i)),t(e.exports,"min",(()=>s)),t(e.exports,"round",(()=>r));var i=Math.max,s=Math.min,r=Math.round})),r.register("gotNd",(function(e,n){t(e.exports,"default",(()=>s));var i=r("9r1ut");function s(){return!/^((?!chrome|android).)*safari/i.test((0,i.default)())}})),r.register("9r1ut",(function(e,n){function i(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}t(e.exports,"default",(()=>i))})),r.register("ciq1x",(function(e,n){t(e.exports,"default",(()=>s));var i=r("93iQ7");function s(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,i.isShadowRoot)(n)){var s=t;do{if(s&&e.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}})),r.register("5KzeH",(function(e,n){t(e.exports,"default",(()=>d));var i=r("93G53"),s=r("oKPBf"),o=r("huVQQ"),a=r("93iQ7"),l=r("lKbxe"),c=r("aerap"),h=r("9r1ut");function u(e){return(0,a.isHTMLElement)(e)&&"fixed"!==(0,o.default)(e).position?e.offsetParent:null}function d(e){for(var t=(0,i.default)(e),n=u(e);n&&(0,l.default)(n)&&"static"===(0,o.default)(n).position;)n=u(n);return n&&("html"===(0,s.default)(n)||"body"===(0,s.default)(n)&&"static"===(0,o.default)(n).position)?t:n||function(e){var t=/firefox/i.test((0,h.default)());if(/Trident/i.test((0,h.default)())&&(0,a.isHTMLElement)(e)&&"fixed"===(0,o.default)(e).position)return null;var n=(0,c.default)(e);for((0,a.isShadowRoot)(n)&&(n=n.host);(0,a.isHTMLElement)(n)&&["html","body"].indexOf((0,s.default)(n))<0;){var i=(0,o.default)(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}})),r.register("huVQQ",(function(e,n){t(e.exports,"default",(()=>s));var i=r("93G53");function s(e){return(0,i.default)(e).getComputedStyle(e)}})),r.register("lKbxe",(function(e,n){t(e.exports,"default",(()=>s));var i=r("oKPBf");function s(e){return["table","td","th"].indexOf((0,i.default)(e))>=0}})),r.register("aerap",(function(e,n){t(e.exports,"default",(()=>a));var i=r("oKPBf"),s=r("17OuU"),o=r("93iQ7");function a(e){return"html"===(0,i.default)(e)?e:e.assignedSlot||e.parentNode||((0,o.isShadowRoot)(e)?e.host:null)||(0,s.default)(e)}})),r.register("17OuU",(function(e,n){t(e.exports,"default",(()=>s));var i=r("93iQ7");function s(e){return(((0,i.isElement)(e)?e.ownerDocument:e.document)||window.document).documentElement}})),r.register("g1hRA",(function(e,n){function i(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}t(e.exports,"default",(()=>i))})),r.register("cOvrb",(function(e,n){t(e.exports,"within",(()=>s)),t(e.exports,"withinMaxClamp",(()=>o));var i=r("4J8n1");function s(e,t,n){return(0,i.max)(e,(0,i.min)(t,n))}function o(e,t,n){var i=s(e,t,n);return i>n?n:i}})),r.register("3Os63",(function(e,n){t(e.exports,"default",(()=>s));var i=r("gcu3h");function s(e){return Object.assign({},(0,i.default)(),e)}})),r.register("gcu3h",(function(e,n){function i(){return{top:0,right:0,bottom:0,left:0}}t(e.exports,"default",(()=>i))})),r.register("hdgde",(function(e,n){function i(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}t(e.exports,"default",(()=>i))})),r.register("5ZHwq",(function(e,n){t(e.exports,"default",(()=>p));var i=r("1KQnQ"),s=r("5KzeH"),o=r("93G53"),a=r("17OuU"),l=r("huVQQ"),c=r("h06jI"),h=r("7kchx"),u=r("4J8n1"),d={top:"auto",right:"auto",bottom:"auto",left:"auto"};function f(e){var t,n=e.popper,r=e.popperRect,c=e.placement,h=e.variation,f=e.offsets,p=e.position,_=e.gpuAcceleration,g=e.adaptive,m=e.roundOffsets,v=e.isFixed,y=f.x,b=void 0===y?0:y,w=f.y,C=void 0===w?0:w,E="function"==typeof m?m({x:b,y:C}):{x:b,y:C};b=E.x,C=E.y;var T=f.hasOwnProperty("x"),x=f.hasOwnProperty("y"),I=i.left,k=i.top,S=window;if(g){var N=(0,s.default)(n),P="clientHeight",A="clientWidth";if(N===(0,o.default)(n)&&(N=(0,a.default)(n),"static"!==(0,l.default)(N).position&&"absolute"===p&&(P="scrollHeight",A="scrollWidth")),c===i.top||(c===i.left||c===i.right)&&h===i.end)k=i.bottom,C-=(v&&N===S&&S.visualViewport?S.visualViewport.height:N[P])-r.height,C*=_?1:-1;if(c===i.left||(c===i.top||c===i.bottom)&&h===i.end)I=i.right,b-=(v&&N===S&&S.visualViewport?S.visualViewport.width:N[A])-r.width,b*=_?1:-1}var D,O=Object.assign({position:p},g&&d),L=!0===m?function(e,t){var n=e.x,i=e.y,s=t.devicePixelRatio||1;return{x:(0,u.round)(n*s)/s||0,y:(0,u.round)(i*s)/s||0}}({x:b,y:C},(0,o.default)(n)):{x:b,y:C};return b=L.x,C=L.y,_?Object.assign({},O,((D={})[k]=x?"0":"",D[I]=T?"0":"",D.transform=(S.devicePixelRatio||1)<=1?"translate("+b+"px, "+C+"px)":"translate3d("+b+"px, "+C+"px, 0)",D)):Object.assign({},O,((t={})[k]=x?C+"px":"",t[I]=T?b+"px":"",t.transform="",t))}var p={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,s=void 0===i||i,r=n.adaptive,o=void 0===r||r,a=n.roundOffsets,l=void 0===a||a,u={placement:(0,c.default)(t.placement),variation:(0,h.default)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,f(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,f(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}})),r.register("7kchx",(function(e,n){function i(e){return e.split("-")[1]}t(e.exports,"default",(()=>i))})),r.register("jU5vk",(function(e,n){t(e.exports,"default",(()=>o));var i=r("93G53"),s={passive:!0};var o={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,l=r.resize,c=void 0===l||l,h=(0,i.default)(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,s)})),c&&h.addEventListener("resize",n.update,s),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,s)})),c&&h.removeEventListener("resize",n.update,s)}},data:{}}})),r.register("hMqHB",(function(e,n){t(e.exports,"default",(()=>u));var i=r("eFT7Y"),s=r("h06jI"),o=r("4NVvZ"),a=r("gGcga"),l=r("iN4T7"),c=r("1KQnQ"),h=r("7kchx");var u={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var u=n.mainAxis,d=void 0===u||u,f=n.altAxis,p=void 0===f||f,_=n.fallbackPlacements,g=n.padding,m=n.boundary,v=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,w=void 0===b||b,C=n.allowedAutoPlacements,E=t.options.placement,T=(0,s.default)(E),x=_||(T===E||!w?[(0,i.default)(E)]:function(e){if((0,s.default)(e)===c.auto)return[];var t=(0,i.default)(e);return[(0,o.default)(e),t,(0,o.default)(t)]}(E)),I=[E].concat(x).reduce((function(e,n){return e.concat((0,s.default)(n)===c.auto?(0,l.default)(t,{placement:n,boundary:m,rootBoundary:v,padding:g,flipVariations:w,allowedAutoPlacements:C}):n)}),[]),k=t.rects.reference,S=t.rects.popper,N=new Map,P=!0,A=I[0],D=0;D<I.length;D++){var O=I[D],L=(0,s.default)(O),R=(0,h.default)(O)===c.start,M=[c.top,c.bottom].indexOf(L)>=0,F=M?"width":"height",q=(0,a.default)(t,{placement:O,boundary:m,rootBoundary:v,altBoundary:y,padding:g}),j=M?R?c.right:c.left:R?c.bottom:c.top;k[F]>S[F]&&(j=(0,i.default)(j));var $=(0,i.default)(j),H=[];if(d&&H.push(q[L]<=0),p&&H.push(q[j]<=0,q[$]<=0),H.every((function(e){return e}))){A=O,P=!1;break}N.set(O,H)}if(P)for(var W=function(e){var t=I.find((function(t){var n=N.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},B=w?3:1;B>0;B--){if("break"===W(B))break}t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}})),r.register("eFT7Y",(function(e,n){t(e.exports,"default",(()=>s));var i={left:"right",right:"left",bottom:"top",top:"bottom"};function s(e){return e.replace(/left|right|bottom|top/g,(function(e){return i[e]}))}})),r.register("4NVvZ",(function(e,n){t(e.exports,"default",(()=>s));var i={start:"end",end:"start"};function s(e){return e.replace(/start|end/g,(function(e){return i[e]}))}})),r.register("gGcga",(function(e,n){t(e.exports,"default",(()=>f));var i=r("5T76m"),s=r("17OuU"),o=r("41Z5W"),a=r("dgDBP"),l=r("ik7Fq"),c=r("1KQnQ"),h=r("93iQ7"),u=r("3Os63"),d=r("hdgde");function f(e,t){void 0===t&&(t={});var n=t,r=n.placement,f=void 0===r?e.placement:r,p=n.strategy,_=void 0===p?e.strategy:p,g=n.boundary,m=void 0===g?c.clippingParents:g,v=n.rootBoundary,y=void 0===v?c.viewport:v,b=n.elementContext,w=void 0===b?c.popper:b,C=n.altBoundary,E=void 0!==C&&C,T=n.padding,x=void 0===T?0:T,I=(0,u.default)("number"!=typeof x?x:(0,d.default)(x,c.basePlacements)),k=w===c.popper?c.reference:c.popper,S=e.rects.popper,N=e.elements[E?k:w],P=(0,i.default)((0,h.isElement)(N)?N:N.contextElement||(0,s.default)(e.elements.popper),m,y,_),A=(0,o.default)(e.elements.reference),D=(0,a.default)({reference:A,element:S,strategy:"absolute",placement:f}),O=(0,l.default)(Object.assign({},S,D)),L=w===c.popper?O:A,R={top:P.top-L.top+I.top,bottom:L.bottom-P.bottom+I.bottom,left:P.left-L.left+I.left,right:L.right-P.right+I.right},M=e.modifiersData.offset;if(w===c.popper&&M){var F=M[f];Object.keys(R).forEach((function(e){var t=[c.right,c.bottom].indexOf(e)>=0?1:-1,n=[c.top,c.bottom].indexOf(e)>=0?"y":"x";R[e]+=F[n]*t}))}return R}})),r.register("5T76m",(function(e,n){t(e.exports,"default",(()=>y));var i=r("1KQnQ"),s=r("e1yxe"),o=r("ef4Kl"),a=r("cqjGx"),l=r("5KzeH"),c=r("17OuU"),h=r("huVQQ"),u=r("93iQ7"),d=r("41Z5W"),f=r("aerap"),p=r("ciq1x"),_=r("oKPBf"),g=r("ik7Fq"),m=r("4J8n1");function v(e,t,n){return t===i.viewport?(0,g.default)((0,s.default)(e,n)):(0,u.isElement)(t)?function(e,t){var n=(0,d.default)(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):(0,g.default)((0,o.default)((0,c.default)(e)))}function y(e,t,n,i){var s="clippingParents"===t?function(e){var t=(0,a.default)((0,f.default)(e)),n=["absolute","fixed"].indexOf((0,h.default)(e).position)>=0&&(0,u.isHTMLElement)(e)?(0,l.default)(e):e;return(0,u.isElement)(n)?t.filter((function(e){return(0,u.isElement)(e)&&(0,p.default)(e,n)&&"body"!==(0,_.default)(e)})):[]}(e):[].concat(t),r=[].concat(s,[n]),o=r[0],c=r.reduce((function(t,n){var s=v(e,n,i);return t.top=(0,m.max)(s.top,t.top),t.right=(0,m.min)(s.right,t.right),t.bottom=(0,m.min)(s.bottom,t.bottom),t.left=(0,m.max)(s.left,t.left),t}),v(e,o,i));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}})),r.register("e1yxe",(function(e,n){t(e.exports,"default",(()=>l));var i=r("93G53"),s=r("17OuU"),o=r("8fnXo"),a=r("gotNd");function l(e,t){var n=(0,i.default)(e),r=(0,s.default)(e),l=n.visualViewport,c=r.clientWidth,h=r.clientHeight,u=0,d=0;if(l){c=l.width,h=l.height;var f=(0,a.default)();(f||!f&&"fixed"===t)&&(u=l.offsetLeft,d=l.offsetTop)}return{width:c,height:h,x:u+(0,o.default)(e),y:d}}})),r.register("8fnXo",(function(e,n){t(e.exports,"default",(()=>a));var i=r("41Z5W"),s=r("17OuU"),o=r("4WW7r");function a(e){return(0,i.default)((0,s.default)(e)).left+(0,o.default)(e).scrollLeft}})),r.register("4WW7r",(function(e,n){t(e.exports,"default",(()=>s));var i=r("93G53");function s(e){var t=(0,i.default)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}})),r.register("ef4Kl",(function(e,n){t(e.exports,"default",(()=>c));var i=r("17OuU"),s=r("huVQQ"),o=r("8fnXo"),a=r("4WW7r"),l=r("4J8n1");function c(e){var t,n=(0,i.default)(e),r=(0,a.default)(e),c=null==(t=e.ownerDocument)?void 0:t.body,h=(0,l.max)(n.scrollWidth,n.clientWidth,c?c.scrollWidth:0,c?c.clientWidth:0),u=(0,l.max)(n.scrollHeight,n.clientHeight,c?c.scrollHeight:0,c?c.clientHeight:0),d=-r.scrollLeft+(0,o.default)(e),f=-r.scrollTop;return"rtl"===(0,s.default)(c||n).direction&&(d+=(0,l.max)(n.clientWidth,c?c.clientWidth:0)-h),{width:h,height:u,x:d,y:f}}})),r.register("cqjGx",(function(e,n){t(e.exports,"default",(()=>l));var i=r("3QP5e"),s=r("aerap"),o=r("93G53"),a=r("1ADUj");function l(e,t){var n;void 0===t&&(t=[]);var r=(0,i.default)(e),c=r===(null==(n=e.ownerDocument)?void 0:n.body),h=(0,o.default)(r),u=c?[h].concat(h.visualViewport||[],(0,a.default)(r)?r:[]):r,d=t.concat(u);return c?d:d.concat(l((0,s.default)(u)))}})),r.register("3QP5e",(function(e,n){t(e.exports,"default",(()=>l));var i=r("aerap"),s=r("1ADUj"),o=r("oKPBf"),a=r("93iQ7");function l(e){return["html","body","#document"].indexOf((0,o.default)(e))>=0?e.ownerDocument.body:(0,a.isHTMLElement)(e)&&(0,s.default)(e)?e:l((0,i.default)(e))}})),r.register("1ADUj",(function(e,n){t(e.exports,"default",(()=>s));var i=r("huVQQ");function s(e){var t=(0,i.default)(e),n=t.overflow,s=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+s)}})),r.register("ik7Fq",(function(e,n){function i(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}t(e.exports,"default",(()=>i))})),r.register("dgDBP",(function(e,n){t(e.exports,"default",(()=>l));var i=r("h06jI"),s=r("7kchx"),o=r("g1hRA"),a=r("1KQnQ");function l(e){var t,n=e.reference,r=e.element,l=e.placement,c=l?(0,i.default)(l):null,h=l?(0,s.default)(l):null,u=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2;switch(c){case a.top:t={x:u,y:n.y-r.height};break;case a.bottom:t={x:u,y:n.y+n.height};break;case a.right:t={x:n.x+n.width,y:d};break;case a.left:t={x:n.x-r.width,y:d};break;default:t={x:n.x,y:n.y}}var f=c?(0,o.default)(c):null;if(null!=f){var p="y"===f?"height":"width";switch(h){case a.start:t[f]=t[f]-(n[p]/2-r[p]/2);break;case a.end:t[f]=t[f]+(n[p]/2-r[p]/2)}}return t}})),r.register("iN4T7",(function(e,n){t(e.exports,"default",(()=>l));var i=r("7kchx"),s=r("1KQnQ"),o=r("gGcga"),a=r("h06jI");function l(e,t){void 0===t&&(t={});var n=t,r=n.placement,l=n.boundary,c=n.rootBoundary,h=n.padding,u=n.flipVariations,d=n.allowedAutoPlacements,f=void 0===d?s.placements:d,p=(0,i.default)(r),_=p?u?s.variationPlacements:s.variationPlacements.filter((function(e){return(0,i.default)(e)===p})):s.basePlacements,g=_.filter((function(e){return f.indexOf(e)>=0}));0===g.length&&(g=_);var m=g.reduce((function(t,n){return t[n]=(0,o.default)(e,{placement:n,boundary:l,rootBoundary:c,padding:h})[(0,a.default)(n)],t}),{});return Object.keys(m).sort((function(e,t){return m[e]-m[t]}))}})),r.register("95q7y",(function(e,n){t(e.exports,"default",(()=>l));var i=r("1KQnQ"),s=r("gGcga");function o(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function a(e){return[i.top,i.right,i.bottom,i.left].some((function(t){return e[t]>=0}))}var l={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,l=t.modifiersData.preventOverflow,c=(0,s.default)(t,{elementContext:"reference"}),h=(0,s.default)(t,{altBoundary:!0}),u=o(c,i),d=o(h,r,l),f=a(u),p=a(d);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:d,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}}})),r.register("lWzyf",(function(e,n){t(e.exports,"default",(()=>o));var i=r("h06jI"),s=r("1KQnQ");var o={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=void 0===o?[0,0]:o,l=s.placements.reduce((function(e,n){return e[n]=function(e,t,n){var r=(0,i.default)(e),o=[s.left,s.top].indexOf(r)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,l=a[0],c=a[1];return l=l||0,c=(c||0)*o,[s.left,s.right].indexOf(r)>=0?{x:c,y:l}:{x:l,y:c}}(n,t.rects,a),e}),{}),c=l[t.placement],h=c.x,u=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=h,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=l}}})),r.register("cePA2",(function(e,n){t(e.exports,"default",(()=>s));var i=r("dgDBP");var s={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=(0,i.default)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}}})),r.register("bxdrS",(function(e,n){t(e.exports,"default",(()=>_));var i=r("1KQnQ"),s=r("h06jI"),o=r("g1hRA"),a=r("8ptl2"),l=r("cOvrb"),c=r("dElKO"),h=r("5KzeH"),u=r("gGcga"),d=r("7kchx"),f=r("gcu3h"),p=r("4J8n1");var _={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,_=n.mainAxis,g=void 0===_||_,m=n.altAxis,v=void 0!==m&&m,y=n.boundary,b=n.rootBoundary,w=n.altBoundary,C=n.padding,E=n.tether,T=void 0===E||E,x=n.tetherOffset,I=void 0===x?0:x,k=(0,u.default)(t,{boundary:y,rootBoundary:b,padding:C,altBoundary:w}),S=(0,s.default)(t.placement),N=(0,d.default)(t.placement),P=!N,A=(0,o.default)(S),D=(0,a.default)(A),O=t.modifiersData.popperOffsets,L=t.rects.reference,R=t.rects.popper,M="function"==typeof I?I(Object.assign({},t.rects,{placement:t.placement})):I,F="number"==typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),q=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,j={x:0,y:0};if(O){if(g){var $,H="y"===A?i.top:i.left,W="y"===A?i.bottom:i.right,B="y"===A?"height":"width",U=O[A],z=U+k[H],V=U-k[W],K=T?-R[B]/2:0,Q=N===i.start?L[B]:R[B],Y=N===i.start?-R[B]:-L[B],G=t.elements.arrow,X=T&&G?(0,c.default)(G):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,f.default)(),Z=J[H],ee=J[W],te=(0,l.within)(0,L[B],X[B]),ne=P?L[B]/2-K-te-Z-F.mainAxis:Q-te-Z-F.mainAxis,ie=P?-L[B]/2+K+te+ee+F.mainAxis:Y+te+ee+F.mainAxis,se=t.elements.arrow&&(0,h.default)(t.elements.arrow),re=se?"y"===A?se.clientTop||0:se.clientLeft||0:0,oe=null!=($=null==q?void 0:q[A])?$:0,ae=U+ne-oe-re,le=U+ie-oe,ce=(0,l.within)(T?(0,p.min)(z,ae):z,U,T?(0,p.max)(V,le):V);O[A]=ce,j[A]=ce-U}if(v){var he,ue="x"===A?i.top:i.left,de="x"===A?i.bottom:i.right,fe=O[D],pe="y"===D?"height":"width",_e=fe+k[ue],ge=fe-k[de],me=-1!==[i.top,i.left].indexOf(S),ve=null!=(he=null==q?void 0:q[D])?he:0,ye=me?_e:fe-L[pe]-R[pe]-ve+F.altAxis,be=me?fe+L[pe]+R[pe]-ve-F.altAxis:ge,we=T&&me?(0,l.withinMaxClamp)(ye,fe,be):(0,l.within)(T?ye:_e,fe,T?be:ge);O[D]=we,j[D]=we-fe}t.modifiersData[r]=j}},requiresIfExists:["offset"]}})),r.register("8ptl2",(function(e,n){function i(e){return"x"===e?"y":"x"}t(e.exports,"default",(()=>i))})),r.register("8iXfp",(function(e,n){t(e.exports,"popperGenerator",(()=>p)),t(e.exports,"createPopper",(()=>_));var i=r("gcqB4"),s=r("dElKO"),o=r("cqjGx"),a=r("5KzeH"),l=r("ahlk8"),c=r("dlelj"),h=r("l57aq"),u=(r("gGcga"),r("93iQ7")),d={placement:"bottom",modifiers:[],strategy:"absolute"};function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function p(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,p=t.defaultOptions,_=void 0===p?d:p;return function(e,t,n){void 0===n&&(n=_);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},d,_),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},g=[],m=!1,v={state:p,setOptions:function(n){var i="function"==typeof n?n(p.options):n;y(),p.options=Object.assign({},_,p.options,i),p.scrollParents={reference:(0,u.isElement)(e)?(0,o.default)(e):e.contextElement?(0,o.default)(e.contextElement):[],popper:(0,o.default)(t)};var s=(0,l.default)((0,h.default)([].concat(r,p.options.modifiers)));return p.orderedModifiers=s.filter((function(e){return e.enabled})),p.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,s=e.effect;if("function"==typeof s){var r=s({state:p,name:t,instance:v,options:i}),o=function(){};g.push(r||o)}})),v.update()},forceUpdate:function(){if(!m){var e=p.elements,t=e.reference,n=e.popper;if(f(t,n)){p.rects={reference:(0,i.default)(t,(0,a.default)(n),"fixed"===p.options.strategy),popper:(0,s.default)(n)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach((function(e){return p.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<p.orderedModifiers.length;r++)if(!0!==p.reset){var o=p.orderedModifiers[r],l=o.fn,c=o.options,h=void 0===c?{}:c,u=o.name;"function"==typeof l&&(p=l({state:p,options:h,name:u,instance:v})||p)}else p.reset=!1,r=-1}}},update:(0,c.default)((function(){return new Promise((function(e){v.forceUpdate(),e(p)}))})),destroy:function(){y(),m=!0}};if(!f(e,t))return v;function y(){g.forEach((function(e){return e()})),g=[]}return v.setOptions(n).then((function(e){!m&&n.onFirstUpdate&&n.onFirstUpdate(e)})),v}}var _=p()})),r.register("gcqB4",(function(e,n){t(e.exports,"default",(()=>d));var i=r("41Z5W"),s=r("eOasn"),o=r("oKPBf"),a=r("93iQ7"),l=r("8fnXo"),c=r("17OuU"),h=r("1ADUj"),u=r("4J8n1");function d(e,t,n){void 0===n&&(n=!1);var r=(0,a.isHTMLElement)(t),d=(0,a.isHTMLElement)(t)&&function(e){var t=e.getBoundingClientRect(),n=(0,u.round)(t.width)/e.offsetWidth||1,i=(0,u.round)(t.height)/e.offsetHeight||1;return 1!==n||1!==i}(t),f=(0,c.default)(t),p=(0,i.default)(e,d,n),_={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(r||!r&&!n)&&(("body"!==(0,o.default)(t)||(0,h.default)(f))&&(_=(0,s.default)(t)),(0,a.isHTMLElement)(t)?((g=(0,i.default)(t,!0)).x+=t.clientLeft,g.y+=t.clientTop):f&&(g.x=(0,l.default)(f))),{x:p.left+_.scrollLeft-g.x,y:p.top+_.scrollTop-g.y,width:p.width,height:p.height}}})),r.register("eOasn",(function(e,n){t(e.exports,"default",(()=>l));var i=r("4WW7r"),s=r("93G53"),o=r("93iQ7"),a=r("ieX38");function l(e){return e!==(0,s.default)(e)&&(0,o.isHTMLElement)(e)?(0,a.default)(e):(0,i.default)(e)}})),r.register("ieX38",(function(e,n){function i(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}t(e.exports,"default",(()=>i))})),r.register("ahlk8",(function(e,n){t(e.exports,"default",(()=>o));var i=r("1KQnQ");function s(e){var t=new Map,n=new Set,i=[];function s(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&s(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||s(e)})),i}function o(e){var t=s(e);return i.modifierPhases.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}})),r.register("dlelj",(function(e,n){function i(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}t(e.exports,"default",(()=>i))})),r.register("l57aq",(function(e,n){function i(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}t(e.exports,"default",(()=>i))})),r.register("3tUi5",(function(e,n){t(e.exports,"createPopper",(()=>_));var i=r("8iXfp"),s=r("jU5vk"),o=r("cePA2"),a=r("5ZHwq"),l=r("aOl9t"),c=r("lWzyf"),h=r("hMqHB"),u=r("bxdrS"),d=r("kU5lB"),f=r("95q7y"),p=[s.default,o.default,a.default,l.default,c.default,h.default,u.default,d.default,f.default],_=(0,i.popperGenerator)({defaultModifiers:p})})),r.register("kznft",(function(e,n){t(e.exports,"createPopper",(()=>h));var i=r("8iXfp"),s=r("jU5vk"),o=r("cePA2"),a=r("5ZHwq"),l=r("aOl9t"),c=[s.default,o.default,a.default,l.default],h=(0,i.popperGenerator)({defaultModifiers:c})})),r.register("a5J6j",(function(e,n){t(e.exports,"createUser",(()=>l)),t(e.exports,"signIn",(()=>c)),r("fhN3L");var i=r("7xvHX");r("gdelx");var s=r("iJApx");let o;o||(o=(0,i.initializeApp)({databaseURL:"https://js2-slutprojekt-zipeng-jiang-default-rtdb.europe-west1.firebasedatabase.app"}));const a=(0,s.getDatabase)(o);async function l(e,t,n,i,r){await async function(e){const t=await(0,s.get)((0,s.ref)(a,"users/"+e)),n=t.val();return n?.name===e}(e)?r():(await(0,s.set)((0,s.ref)(a,"users/"+e),{name:e,password:t,image:n}),i())}async function c(e,t,n){const i=await(0,s.get)((0,s.ref)(a,"users/"+e));if(!i.exists())throw new Error("Username not found");i.val().password===t&&n()}})),r.register("fhN3L",(function(e,n){t(e.exports,"initializeApp",(()=>r("7xvHX").initializeApp)),t(e.exports,"registerVersion",(()=>r("7xvHX").registerVersion));r("7xvHX");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r("7xvHX").registerVersion)("firebase","9.19.1","app")})),r.register("7xvHX",(function(e,n){t(e.exports,"_registerComponent",(()=>m)),t(e.exports,"_getProvider",(()=>v)),t(e.exports,"SDK_VERSION",(()=>C)),t(e.exports,"initializeApp",(()=>E)),t(e.exports,"getApp",(()=>T)),t(e.exports,"registerVersion",(()=>x));var i=r("eryG9"),s=r("5Z2ef"),o=r("gMVVg"),a=(o=r("gMVVg"),r("iItpQ"));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const c="@firebase/app",h="0.9.7",u=new(0,s.Logger)("@firebase/app"),d="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,_=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function m(e){const t=e.name;if(_.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;_.set(t,e);for(const t of p.values())g(t,e);return!0}function v(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new(0,o.ErrorFactory)("app","Firebase",y);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="9.19.1";function E(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),r=s.name;if("string"!=typeof r||!r)throw b.create("bad-app-name",{appName:String(r)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw b.create("no-options");const a=p.get(r);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(s,a.config))return a;throw b.create("duplicate-app",{appName:r})}const l=new(0,i.ComponentContainer)(r);for(const e of _.values())l.addComponent(e);const c=new w(n,s,l);return p.set(r,c),c}function T(e=d){const t=p.get(e);if(!t&&e===d)return E();if(!t)throw b.create("no-app",{appName:e});return t}function x(e,t,n){var s;let r=null!==(s=f[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}m(new(0,i.Component)(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="firebase-heartbeat-database",k=1,S="firebase-heartbeat-store";let N=null;function P(){return N||(N=(0,a.openDB)(I,k,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(S)}}).catch((e=>{throw b.create("idb-open",{originalErrorMessage:e.message})}))),N}async function A(e,t){try{const n=(await P()).transaction(S,"readwrite"),i=n.objectStore(S);return await i.put(t,D(e)),n.done}catch(e){if(e instanceof o.FirebaseError)u.warn(e.message);else{const t=b.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function D(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new R(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=L();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=L(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),M(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),M(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function L(){return(new Date).toISOString().substring(0,10)}class R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await P()).transaction(S).objectStore(S).get(D(e))}catch(e){if(e instanceof o.FirebaseError)u.warn(e.message);else{const t=b.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function M(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;F="",m(new(0,i.Component)("platform-logger",(e=>new l(e)),"PRIVATE")),m(new(0,i.Component)("heartbeat",(e=>new O(e)),"PRIVATE")),x(c,h,F),x(c,h,"esm2017"),x("fire-js","")})),r.register("eryG9",(function(e,n){t(e.exports,"Component",(()=>s)),t(e.exports,"ComponentContainer",(()=>l));var i=r("gMVVg");class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===o?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}})),r.register("gMVVg",(function(e,i){t(e.exports,"assert",(()=>a)),t(e.exports,"assertionError",(()=>l)),t(e.exports,"base64",(()=>h)),t(e.exports,"base64Encode",(()=>d)),t(e.exports,"base64urlEncodeWithoutPadding",(()=>f)),t(e.exports,"deepCopy",(()=>_)),t(e.exports,"getDefaultEmulatorHostnameAndPort",(()=>y)),t(e.exports,"getDefaultAppConfig",(()=>b)),t(e.exports,"Deferred",(()=>w)),t(e.exports,"createMockUserToken",(()=>C)),t(e.exports,"isMobileCordova",(()=>T)),t(e.exports,"isReactNative",(()=>x)),t(e.exports,"isNodeSdk",(()=>I)),t(e.exports,"isIndexedDBAvailable",(()=>k)),t(e.exports,"validateIndexedDBOpenable",(()=>S)),t(e.exports,"FirebaseError",(()=>N)),t(e.exports,"ErrorFactory",(()=>P)),t(e.exports,"jsonEval",(()=>D)),t(e.exports,"stringify",(()=>O)),t(e.exports,"isValidFormat",(()=>R)),t(e.exports,"isAdmin",(()=>M)),t(e.exports,"contains",(()=>F)),t(e.exports,"safeGet",(()=>q)),t(e.exports,"isEmpty",(()=>j)),t(e.exports,"map",(()=>$)),t(e.exports,"deepEqual",(()=>H)),t(e.exports,"querystring",(()=>B)),t(e.exports,"Sha1",(()=>U)),t(e.exports,"errorPrefix",(()=>z)),t(e.exports,"stringToByteArray",(()=>V)),t(e.exports,"stringLength",(()=>K)),t(e.exports,"getModularInstance",(()=>Q));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s=r("hPtJY");const o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(e,t){if(!e)throw l(t)},l=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},c=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new u;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d=function(e){const t=c(e);return h.encodeByteArray(t,!0)},f=function(e){return d(e).replace(/\./g,"")},p=function(e){try{return h.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(e){return g(void 0,e)}function g(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=g(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const m=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,v=()=>{try{return m()||(()=>{if(void 0===s||void 0===s.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&p(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=e=>{const t=(e=>{var t,n;return null===(n=null===(t=v())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},b=()=>{var e;return null===(e=v())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[f(JSON.stringify({alg:"none",type:"JWT"})),f(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function T(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function x(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function I(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function k(){try{return"object"==typeof indexedDB}catch(e){return!1}}function S(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(A,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new N(i,o,n)}}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return JSON.parse(e)}function O(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=D(p(r[0])||""),n=D(p(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},R=function(e){const t=L(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},M=function(e){const t=L(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function q(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function j(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function H(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(W(n)&&W(r)){if(!H(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function W(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function z(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,a(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},K=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){return e&&e._delegate?e._delegate:e}})),r.register("hPtJY",(function(e,t){var n,i,s=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],h=!1,u=-1;function d(){h&&l&&(h=!1,l.length?c=l.concat(c):u=-1,c.length&&f())}function f(){if(!h){var e=a(d);h=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,h=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function _(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||h||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=_,s.addListener=_,s.once=_,s.off=_,s.removeListener=_,s.removeAllListeners=_,s.emit=_,s.prependListener=_,s.prependOnceListener=_,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}})),r.register("5Z2ef",(function(e,n){t(e.exports,"LogLevel",(()=>s)),t(e.exports,"Logger",(()=>h)),t(e.exports,"setLogLevel",(()=>u)),t(e.exports,"setUserLogHandler",(()=>d));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s,r;(r=s||(s={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";const o={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},a=s.INFO,l={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=l[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class h{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function u(e){i.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of i){let i=null;t&&t.level&&(i=o[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const o=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:r,type:t.name})}}}})),r.register("iItpQ",(function(e,n){t(e.exports,"openDB",(()=>s));var i=r("jMRra");i=r("jMRra");function s(e,t,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),l=(0,i.w)(a);return s&&a.addEventListener("upgradeneeded",(e=>{s((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),l.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),l}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(l.get(t))return l.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!o.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return l.set(t,r),r}(0,i.r)((e=>({...e,get:(t,n,i)=>c(t,n)||e.get(t,n,i),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),r.register("jMRra",(function(e,n){t(e.exports,"w",(()=>_)),t(e.exports,"r",(()=>d));const i=(e,t)=>t.some((t=>e instanceof t));let s,r;const o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,h=new WeakMap;let u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){u=e(u)}function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),_(o.get(this))}:function(...t){return _(e.apply(g(this),t))}:function(t,...n){const i=e.call(g(this),t,...n);return l.set(i,t.sort?t.sort():[t]),_(i)}}function p(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(a.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));a.set(e,t)}(e),i(e,s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,u):e)}function _(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(_(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),h.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=p(e);return t!==e&&(c.set(e,t),h.set(t,e)),t}const g=e=>h.get(e)})),r.register("gdelx",(function(e,n){t(e.exports,"get",(()=>r("iJApx").get)),t(e.exports,"getDatabase",(()=>r("iJApx").getDatabase)),t(e.exports,"ref",(()=>r("iJApx").ref)),t(e.exports,"remove",(()=>r("iJApx").remove)),t(e.exports,"set",(()=>r("iJApx").set)),r("iJApx")})),r.register("iJApx",(function(e,n){t(e.exports,"ref",(()=>xs)),t(e.exports,"set",(()=>Ss)),t(e.exports,"remove",(()=>ks)),t(e.exports,"get",(()=>Ns)),t(e.exports,"getDatabase",(()=>Ms));var i=r("7xvHX"),s=r("eryG9"),o=r("gMVVg"),a=r("5Z2ef"),l=r("hPtJY");const c="@firebase/database",h="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.stringify)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new d(t)}}catch(e){}return new f},_=p("localStorage"),g=p("sessionStorage"),m=new(0,a.Logger)("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,o.stringToByteArray)(e),n=new(0,o.Sha1);n.update(t);const i=n.digest();return o.base64.encodeByteArray(i)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=b.apply(null,i):t+="object"==typeof i?(0,o.stringify)(i):i,t+=" "}return t};let w=null,C=!0;const E=function(e,t){(0,o.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=a.LogLevel.VERBOSE,w=m.log.bind(m),t&&g.set("logging_enabled",!0)):"function"==typeof e?w=e:(w=null,g.remove("logging_enabled"))},T=function(...e){if(!0===C&&(C=!1,null===w&&!0===g.get("logging_enabled")&&E(!0)),w){const t=b.apply(null,e);w(t)}},x=function(e){return function(...t){T(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);m.error(t)},k=function(...e){const t=`FIREBASE FATAL ERROR: ${b(...e)}`;throw m.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+b(...e);m.warn(t)},N=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P="[MIN_NAME]",A="[MAX_NAME]",D=function(e,t){if(e===t)return 0;if(e===P||t===A)return-1;if(t===P||e===A)return 1;{const n=$(e),i=$(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},O=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.stringify)(t))},R=function(e){if("object"!=typeof e||null===e)return(0,o.stringify)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,o.stringify)(t[i]),n+=":",n+=R(e[t[i]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const q=function(e){(0,o.assert)(!N(e),"Invalid JSON number");const t=1023;let n,i,s,r,a;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const l=[];for(a=52;a;a-=1)l.push(s%2?1:0),s=Math.floor(s/2);for(a=11;a;a-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(n?1:0),l.reverse();const c=l.join("");let h="";for(a=0;a<64;a+=8){let e=parseInt(c.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),h+=e}return h.toLowerCase()};const j=new RegExp("^-?(0*)\\d{1,10}$"),$=function(e){if(j.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},H=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw S("Exception was thrown by user callback.",t),e}),Math.floor(0))}},W=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class z{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}z.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V="5",K=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Q="ac",Y="websocket",G="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function J(e,t,n){let i;if((0,o.assert)("string"==typeof t,"typeof type must == string"),(0,o.assert)("object"==typeof n,"typeof params must == object"),t===Y)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==G)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return F(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.deepCopy)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={},te={};function ne(e){const t=e.toString();return ee[t]||(ee[t]=new Z),ee[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&H((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="start";class re{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=x(e),this.stats_=ne(t),this.urlFn=e=>(this.appCheckToken&&(e[Q]=this.appCheckToken),J(t,G,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ie(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,o.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new oe(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===se)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[se]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=V,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Q]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&K.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){re.forceAllow_=!0}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){return!(0,o.isNodeSdk)()&&(!!re.forceAllow_||!(re.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.base64Encode)(t),i=M(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class oe{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=oe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){T("frame writing exception"),e.stack&&T(e.stack),T(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){(0,o.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ae=null;"undefined"!=typeof MozWebSocket?ae=MozWebSocket:"undefined"!=typeof WebSocket&&(ae=WebSocket);class le{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=x(this.connId),this.stats_=ne(t),this.connURL=le.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r.v=V,!(0,o.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&K.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[Q]=i),s&&(r.p=s),J(e,Y,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_.set("previous_websocket_failure",!0);try{let e;if((0,o.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${V}/${u}/${l.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new ae(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){le.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ae&&!le.forceDisallow_}static previouslyFailed(){return _.isInMemoryStorage||!0===_.get("previous_websocket_failure")}markConnectionHealthy(){_.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}le.responsesRequiredToBeHealthy=2,le.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[re,le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=le&&le.isAvailable();let n=t&&!le.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[le];else{const e=this.transports_=[];for(const t of ce.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ce.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ce.globalTransportInitialized_=!1;class he{constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=x("c:"+this.id+":"),this.transportManager_=new ce(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=W((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?I("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),V!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),W((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):W((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){(0,o.assert)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends de{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,o.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new fe}getInitialEvent(e){return(0,o.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=32,_e=768;class ge{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function me(){return new ge("")}function ve(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ye(e){return e.pieces_.length-e.pieceNum_}function be(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ge(e.pieces_,t)}function we(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ce(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ee(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ge(t,0)}function Te(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ge)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ge(n,0)}function xe(e){return e.pieceNum_>=e.pieces_.length}function Ie(e,t){const n=ve(e),i=ve(t);if(null===n)return t;if(n===i)return Ie(be(e),be(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ke(e,t){if(ye(e)!==ye(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Se(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ye(e)>ye(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ne{constructor(e,t){this.errorPrefix_=t,this.parts_=Ce(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,o.stringLength)(this.parts_[e]);Pe(this)}}function Pe(e){if(e.byteLength_>_e)throw new Error(e.errorPrefix_+"has a key path longer than "+_e+" bytes ("+e.byteLength_+").");if(e.parts_.length>pe)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pe+") or object contains a cycle "+Ae(e))}function Ae(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends de{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new De}getInitialEvent(e){return(0,o.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=1e3;class Le extends ue{constructor(e,t,n,i,s,r,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Le.nextPersistentConnectionId_++,this.log_=x("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oe,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,o.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");De.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&fe.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,o.stringify)(s)),(0,o.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new(0,o.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.assert)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Le.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,o.contains)(e,"w")){const n=(0,o.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,o.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.stringify)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+(0,o.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Oe),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Le.nextConnectionId_++,s=this.lastSessionId;let r=!1,a=null;const l=function(){a?a.close():(r=!0,n())},c=function(e){(0,o.assert)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);r?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=l&&l.token,a=new he(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&S(e),l())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>R(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ge(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,(0,o.isMobileCordova)()?e["framework.cordova"]=1:(0,o.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fe.getInstance().currentlyOnline();return(0,o.isEmpty)(this.interruptReasons_)&&e}}Le.nextPersistentConnectionId_=0,Le.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Re(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Re(P,e),i=new Re(P,t);return 0!==this.compare(n,i)}minPost(){return Re.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe;class qe extends Me{static get __EMPTY_NODE(){return Fe}static set __EMPTY_NODE(e){Fe=e}compare(e,t){return D(e.name,t.name)}isDefinedOn(e){throw(0,o.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Re.MIN}maxPost(){return new Re(A,Fe)}makePost(e,t){return(0,o.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Re(e,Fe)}toString(){return".key"}}const je=new qe;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:He.RED,this.left=null!=i?i:We.EMPTY_NODE,this.right=null!=s?s:We.EMPTY_NODE}copy(e,t,n,i,s){return new He(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return We.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0,He.BLACK=!1;class We{constructor(e,t=We.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new We(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $e(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $e(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $e(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $e(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Be(e,t){return D(e.name,t.name)}function Ue(e,t){return D(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ze;We.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new He(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ve=function(e){return"number"==typeof e?"number:"+q(e):"string:"+e},Ke=function(e){if(e.isLeafNode()){const t=e.val();(0,o.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,o.contains)(t,".sv"),"Priority must be a string or number.")}else(0,o.assert)(e===ze||e.isEmpty(),"priority of unexpected type.");(0,o.assert)(e===ze||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qe,Ye,Ge;class Xe{constructor(e,t=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ke(this.priorityNode_)}static set __childrenNodeConstructor(e){Qe=e}static get __childrenNodeConstructor(){return Qe}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return xe(e)?this:".priority"===ve(e)?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ve(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.assert)(".priority"!==n||1===ye(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ve(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?q(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:((0,o.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Xe.VALUE_TYPE_ORDER.indexOf(t),s=Xe.VALUE_TYPE_ORDER.indexOf(n);return(0,o.assert)(i>=0,"Unknown leaf type: "+t),(0,o.assert)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Je=new class extends Me{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?D(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Re.MIN}maxPost(){return new Re(A,new Xe("[PRIORITY-POST]",Ge))}makePost(e,t){const n=Ye(e);return new Re(t,new Xe("[PRIORITY-POST]",n))}toString(){return".priority"}},Ze=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ze,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const tt=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new He(a,o.node,He.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),h=s(l+1,i);return o=e[l],a=n?n(o):o,new He(a,o.node,He.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),h=e[r],u=n?n(h):h;l(new He(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,He.BLACK):(a(i,He.BLACK),a(i,He.RED))}return r}(new et(e.length));return new We(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt;const it={};class st{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.assert)(it&&Je,"ChildrenNode.ts has not been loaded"),nt=nt||new st({".priority":it},{".priority":Je}),nt}get(e){const t=(0,o.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof We?t:null}hasIndex(e){return(0,o.contains)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.assert)(e!==je,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Re.Wrap);let r,a=s.getNext();for(;a;)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();r=i?tt(n,e.getCompare()):it;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=r,new st(h,c)}addToIndexes(e,t){const n=(0,o.map)(this.indexes_,((n,i)=>{const s=(0,o.safeGet)(this.indexSet_,i);if((0,o.assert)(s,"Missing index implementation for "+i),n===it){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Re.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),tt(n,s.getCompare())}return it}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Re(e.name,i))),s.insert(e,e.node)}}));return new st(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.map)(this.indexes_,(n=>{if(n===it)return n;{const i=t.get(e.name);return i?n.remove(new Re(e.name,i)):n}}));return new st(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt;class ot{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ke(this.priorityNode_),this.children_.isEmpty()&&(0,o.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return rt||(rt=new ot(new We(Ue),null,st.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rt}updatePriority(e){return this.children_.isEmpty()?this:new ot(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?rt:t}}getChild(e){const t=ve(e);return null===t?this:this.getImmediateChild(t).getChild(be(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Re(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?rt:this.priorityNode_;return new ot(i,r,s)}}updateChild(e,t){const n=ve(e);if(null===n)return t;{(0,o.assert)(".priority"!==ve(e)||1===ye(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(be(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Je,((r,o)=>{t[r]=o.val(e),n++,s&&ot.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ve(this.getPriority().val())+":"),this.forEachChild(Je,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Re(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Re(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Re(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Re.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Re.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===at?-1:0}withIndex(e){if(e===je||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ot(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===je||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Je),n=t.getIterator(Je);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===je?null:this.indexMap_.get(e.toString())}}ot.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const at=new class extends ot{constructor(){super(new We(Ue),ot.EMPTY_NODE,st.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ot.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Re,{MIN:{value:new Re(P,ot.EMPTY_NODE)},MAX:{value:new Re(A,at)}}),qe.__EMPTY_NODE=ot.EMPTY_NODE,Xe.__childrenNodeConstructor=ot,ze=at,function(e){Ge=e}(at);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt=!0;function ct(e,t=null){if(null===e)return ot.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Xe(e,ct(t))}if(e instanceof Array||!lt){let n=ot.EMPTY_NODE;return F(e,((t,i)=>{if((0,o.contains)(e,t)&&"."!==t.substring(0,1)){const e=ct(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ct(t))}{const n=[];let i=!1;if(F(e,((e,t)=>{if("."!==e.substring(0,1)){const s=ct(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Re(e,s)))}})),0===n.length)return ot.EMPTY_NODE;const s=tt(n,Be,(e=>e.name),Ue);if(i){const e=tt(n,Je.getCompare());return new ot(s,ct(t),new st({".priority":e},{".priority":Je}))}return new ot(s,ct(t),st.Default)}}!function(e){Ye=e}(ct);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht extends Me{constructor(e){super(),this.indexPath_=e,(0,o.assert)(!xe(e)&&".priority"!==ve(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?D(e.name,t.name):s}makePost(e,t){const n=ct(e),i=ot.EMPTY_NODE.updateChild(this.indexPath_,n);return new Re(t,i)}maxPost(){const e=ot.EMPTY_NODE.updateChild(this.indexPath_,at);return new Re(A,e)}toString(){return Ce(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new class extends Me{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?D(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Re.MIN}maxPost(){return Re.MAX}makePost(e,t){const n=ct(e);return new Re(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e){return{type:"value",snapshotNode:e}}function ft(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function pt(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function _t(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){(0,o.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(pt(t,a)):(0,o.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?r.trackChildChange(ft(t,n)):r.trackChildChange(_t(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Je,((e,i)=>{t.hasChild(e)||n.trackChildChange(pt(e,i))})),t.isLeafNode()||t.forEachChild(Je,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(_t(t,i,s))}else n.trackChildChange(ft(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ot.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.indexedFilter_=new gt(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mt.getStartPost_(e),this.endPost_=mt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new Re(t,n))||(n=ot.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ot.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ot.EMPTY_NODE);const s=this;return t.forEachChild(Je,((e,t)=>{s.matches(new Re(e,t))||(i=i.updateImmediateChild(e,ot.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new mt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new Re(t,n))||(n=ot.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=ot.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=ot.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(ot.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,ot.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const a=e;(0,o.assert)(a.numChildren()===this.limit_,"");const l=new Re(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=i.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=o&&(o.name===t||a.hasChild(o.name));)o=i.getChildAfterChild(this.index_,o,this.reverse_);const u=null==o?1:r(o,l);if(h&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(_t(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(pt(t,e));const n=a.updateImmediateChild(t,ot.EMPTY_NODE);return null!=o&&this.rangedFilter_.matches(o)?(null!=s&&s.trackChildChange(ft(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:h&&r(c,l)>=0?(null!=s&&(s.trackChildChange(pt(c.name,c.node)),s.trackChildChange(ft(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,ot.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Je}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Je}copy(){const e=new yt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bt(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Je?n="$priority":e.index_===ut?n="$value":e.index_===je?n="$key":((0,o.assert)(e.index_ instanceof ht,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,o.stringify)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.stringify)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.stringify)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function wt(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Je&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends ue{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=x("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Ct.getListenId_(e,n),a={};this.listens_[r]=a;const l=bt(e._queryParams);this.restRequest_(s+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(s,l,!1,n),(0,o.safeGet)(this.listens_,r)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ct.getListenId_(e,t);delete this.listens_[n]}get(e){const t=bt(e._queryParams),n=e._path.toString(),i=new(0,o.Deferred);return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.querystring)(t);this.log_("Sending REST request for "+r);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+r+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,o.jsonEval)(a.responseText)}catch(e){S("Failed to parse JSON response for "+r+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+r+" Status: "+a.status),n(a.status);n=null}},a.open("GET",r,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.rootNode_=ot.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return{value:null,children:new Map}}function xt(e,t,n){if(xe(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ve(t);e.children.has(i)||e.children.set(i,Tt());xt(e.children.get(i),t=be(t),n)}}function It(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{It(i,new ge(t.toString()+"/"+e),n)}))}class kt{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new kt(e);const n=1e4+2e4*Math.random();W(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,((e,i)=>{i>0&&(0,o.contains)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),W(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt,Pt;function At(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Pt=Nt||(Nt={}))[Pt.OVERWRITE=0]="OVERWRITE",Pt[Pt.MERGE=1]="MERGE",Pt[Pt.ACK_USER_WRITE=2]="ACK_USER_WRITE",Pt[Pt.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Dt{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Nt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(xe(this.path)){if(null!=this.affectedTree.value)return(0,o.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ge(e));return new Dt(me(),t,this.revert)}}return(0,o.assert)(ve(this.path)===e,"operationForChild called for unrelated child."),new Dt(be(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t){this.source=e,this.path=t,this.type=Nt.LISTEN_COMPLETE}operationForChild(e){return xe(this.path)?new Ot(this.source,me()):new Ot(this.source,be(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Nt.OVERWRITE}operationForChild(e){return xe(this.path)?new Lt(this.source,me(),this.snap.getImmediateChild(e)):new Lt(this.source,be(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Nt.MERGE}operationForChild(e){if(xe(this.path)){const t=this.children.subtree(new ge(e));return t.isEmpty()?null:t.value?new Lt(this.source,me(),t.value):new Rt(this.source,me(),t)}return(0,o.assert)(ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rt(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(xe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ve(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qt(e,t,n,i,s,r){const a=i.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.assertionError)("Should only compare child_ events.");const i=new Re(t.childName,t.snapshotNode),s=new Re(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),a.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function jt(e,t){return{eventCache:e,serverCache:t}}function $t(e,t,n,i){return jt(new Mt(t,n,i),e.serverCache)}function Ht(e,t,n,i){return jt(e.eventCache,new Mt(t,n,i))}function Wt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Bt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;class zt{constructor(e,t=(()=>(Ut||(Ut=new We(O)),Ut))()){this.value=e,this.children=t}static fromObject(e){let t=new zt(null);return F(e,((e,n)=>{t=t.set(new ge(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:me(),value:this.value};if(xe(e))return null;{const n=ve(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(be(e),t);if(null!=s){return{path:Te(new ge(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(xe(e))return this;{const t=ve(e),n=this.children.get(t);return null!==n?n.subtree(be(e)):new zt(null)}}set(e,t){if(xe(e))return new zt(t,this.children);{const n=ve(e),i=(this.children.get(n)||new zt(null)).set(be(e),t),s=this.children.insert(n,i);return new zt(this.value,s)}}remove(e){if(xe(e))return this.children.isEmpty()?new zt(null):new zt(null,this.children);{const t=ve(e),n=this.children.get(t);if(n){const i=n.remove(be(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new zt(null):new zt(this.value,s)}return this}}get(e){if(xe(e))return this.value;{const t=ve(e),n=this.children.get(t);return n?n.get(be(e)):null}}setTree(e,t){if(xe(e))return t;{const n=ve(e),i=(this.children.get(n)||new zt(null)).setTree(be(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new zt(this.value,s)}}fold(e){return this.fold_(me(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Te(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,me(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(xe(e))return null;{const i=ve(e),s=this.children.get(i);return s?s.findOnPath_(be(e),Te(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,me(),t)}foreachOnPath_(e,t,n){if(xe(e))return this;{this.value&&n(t,this.value);const i=ve(e),s=this.children.get(i);return s?s.foreachOnPath_(be(e),Te(t,i),n):new zt(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Te(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new zt(null))}}function Kt(e,t,n){if(xe(t))return new Vt(new zt(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Ie(s,t);return r=r.updateChild(o,n),new Vt(e.writeTree_.set(s,r))}{const i=new zt(n),s=e.writeTree_.setTree(t,i);return new Vt(s)}}}function Qt(e,t,n){let i=e;return F(n,((e,n)=>{i=Kt(i,Te(t,e),n)})),i}function Yt(e,t){if(xe(t))return Vt.empty();{const n=e.writeTree_.setTree(t,new zt(null));return new Vt(n)}}function Gt(e,t){return null!=Xt(e,t)}function Xt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ie(n.path,t)):null}function Jt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Je,((e,n)=>{t.push(new Re(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Re(e,n.value))})),t}function Zt(e,t){if(xe(t))return e;{const n=Xt(e,t);return new Vt(null!=n?new zt(n):e.writeTree_.subtree(t))}}function en(e){return e.writeTree_.isEmpty()}function tn(e,t){return nn(me(),e.writeTree_,t)}function nn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?((0,o.assert)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=nn(Te(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Te(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e,t){return mn(t,e)}function rn(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.assert)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,a=e.allWrites.length-1;for(;s&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&on(t,i.path)?s=!1:Se(i.path,t.path)&&(r=!0)),a--}if(s){if(r)return function(e){e.visibleWrites=ln(e.allWrites,an,me()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Yt(e.visibleWrites,i.path);else{F(i.children,(t=>{e.visibleWrites=Yt(e.visibleWrites,Te(i.path,t))}))}return!0}return!1}function on(e,t){if(e.snap)return Se(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Se(Te(e.path,n),t))return!0;return!1}function an(e){return e.visible}function ln(e,t,n){let i=Vt.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Se(n,e)?(t=Ie(n,e),i=Kt(i,t,r.snap)):Se(e,n)&&(t=Ie(e,n),i=Kt(i,me(),r.snap.getChild(t)));else{if(!r.children)throw(0,o.assertionError)("WriteRecord should have .snap or .children");if(Se(n,e))t=Ie(n,e),i=Qt(i,t,r.children);else if(Se(e,n))if(t=Ie(e,n),xe(t))i=Qt(i,me(),r.children);else{const e=(0,o.safeGet)(r.children,ve(t));if(e){const n=e.getChild(be(t));i=Kt(i,me(),n)}}}}}return i}function cn(e,t,n,i,s){if(i||s){const r=Zt(e.visibleWrites,t);if(!s&&en(r))return n;if(s||null!=n||Gt(r,me())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Se(e.path,t)||Se(t,e.path))};return tn(ln(e.allWrites,r,t),n||ot.EMPTY_NODE)}return null}{const i=Xt(e.visibleWrites,t);if(null!=i)return i;{const i=Zt(e.visibleWrites,t);if(en(i))return n;if(null!=n||Gt(i,me())){return tn(i,n||ot.EMPTY_NODE)}return null}}}function hn(e,t,n,i){return cn(e.writeTree,e.treePath,t,n,i)}function un(e,t){return function(e,t,n){let i=ot.EMPTY_NODE;const s=Xt(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Je,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Zt(e.visibleWrites,t);return n.forEachChild(Je,((e,t)=>{const n=tn(Zt(s,new ge(e)),t);i=i.updateImmediateChild(e,n)})),Jt(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Jt(Zt(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function dn(e,t,n,i){return function(e,t,n,i,s){(0,o.assert)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Te(t,n);if(Gt(e.visibleWrites,r))return null;{const t=Zt(e.visibleWrites,r);return en(t)?s.getChild(n):tn(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function fn(e,t){return function(e,t){return Xt(e.visibleWrites,t)}(e.writeTree,Te(e.treePath,t))}function pn(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=Zt(e.visibleWrites,t),c=Xt(l,me());if(null!=c)a=c;else{if(null==n)return[];a=tn(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function _n(e,t,n){return function(e,t,n,i){const s=Te(t,n),r=Xt(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return tn(Zt(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function gn(e,t){return mn(Te(e.treePath,t),e.writeTree)}function mn(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,_t(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,pt(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,ft(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,o.assertionError)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,_t(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class bn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Mt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _n(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Bt(this.viewCache_),s=pn(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e,t,n,i,s){const r=new vn;let a,l;if(n.type===Nt.OVERWRITE){const c=n;c.source.fromUser?a=Tn(e,t,c.path,c.snap,i,s,r):((0,o.assert)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!xe(c.path),a=En(e,t,c.path,c.snap,i,s,l,r))}else if(n.type===Nt.MERGE){const c=n;c.source.fromUser?a=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=Te(n,i);xn(t,ve(c))&&(a=Tn(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=Te(n,i);xn(t,ve(c))||(a=Tn(e,a,c,l,s,r,o))})),a}(e,t,c.path,c.children,i,s,r):((0,o.assert)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=kn(e,t,c.path,c.children,i,s,l,r))}else if(n.type===Nt.ACK_USER_WRITE){const l=n;a=l.revert?function(e,t,n,i,s,r){let a;if(null!=fn(i,n))return t;{const l=new bn(i,t,s),c=t.eventCache.getNode();let h;if(xe(n)||".priority"===ve(n)){let n;if(t.serverCache.isFullyInitialized())n=hn(i,Bt(t));else{const e=t.serverCache.getNode();(0,o.assert)(e instanceof ot,"serverChildren would be complete if leaf node"),n=un(i,e)}h=e.filter.updateFullNode(c,n,r)}else{const s=ve(n);let o=_n(i,s,t.serverCache);null==o&&t.serverCache.isCompleteForChild(s)&&(o=c.getImmediateChild(s)),h=null!=o?e.filter.updateChild(c,s,o,be(n),l,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(c,s,ot.EMPTY_NODE,be(n),l,r):c,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=hn(i,Bt(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,r)))}return a=t.serverCache.isFullyInitialized()||null!=fn(i,me()),$t(t,h,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=fn(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(xe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return En(e,t,n,l.getNode().getChild(n),s,r,a,o);if(xe(n)){let i=new zt(null);return l.getNode().forEachChild(je,((e,t)=>{i=i.set(new ge(e),t)})),kn(e,t,n,i,s,r,a,o)}return t}{let c=new zt(null);return i.foreach(((e,t)=>{const i=Te(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),kn(e,t,n,c,s,r,a,o)}}(e,t,l.path,l.affectedTree,i,s,r)}else{if(n.type!==Nt.LISTEN_COMPLETE)throw(0,o.assertionError)("Unknown operation type: "+n.type);a=function(e,t,n,i,s){const r=t.serverCache,o=Ht(t,r.getNode(),r.isFullyInitialized()||xe(n),r.isFiltered());return Cn(e,o,n,i,yn,s)}(e,t,n.path,i,r)}const c=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Wt(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(dt(Wt(t)))}}(t,a,c),{viewCache:a,changes:c}}function Cn(e,t,n,i,s,r){const a=t.eventCache;if(null!=fn(i,n))return t;{let l,c;if(xe(n))if((0,o.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Bt(t),s=un(i,n instanceof ot?n:ot.EMPTY_NODE);l=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=hn(i,Bt(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const h=ve(n);if(".priority"===h){(0,o.assert)(1===ye(n),"Can't have a priority with additional path components");const s=a.getNode();c=t.serverCache.getNode();const r=dn(i,n,s,c);l=null!=r?e.filter.updatePriority(s,r):a.getNode()}else{const o=be(n);let u;if(a.isCompleteForChild(h)){c=t.serverCache.getNode();const e=dn(i,n,a.getNode(),c);u=null!=e?a.getNode().getImmediateChild(h).updateChild(o,e):a.getNode().getImmediateChild(h)}else u=_n(i,h,t.serverCache);l=null!=u?e.filter.updateChild(a.getNode(),h,u,o,s,r):a.getNode()}}return $t(t,l,a.isFullyInitialized()||xe(n),e.filter.filtersNodes())}}function En(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(xe(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=ve(n);if(!l.isCompleteForPath(n)&&ye(n)>1)return t;const s=be(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?h.updatePriority(l.getNode(),r):h.updateChild(l.getNode(),e,r,s,yn,null)}const u=Ht(t,c,l.isFullyInitialized()||xe(n),h.filtersNodes());return Cn(e,u,n,s,new bn(s,u,r),a)}function Tn(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const h=new bn(s,t,r);if(xe(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=$t(t,c,!0,e.filter.filtersNodes());else{const s=ve(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=$t(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=be(n),c=a.getNode().getImmediateChild(s);let u;if(xe(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===we(r)&&e.getChild(Ee(r)).isEmpty()?e:e.updateChild(r,i):ot.EMPTY_NODE}if(c.equals(u))l=t;else{l=$t(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function xn(e,t){return e.eventCache.isCompleteForChild(t)}function In(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function kn(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=xe(n)?i:new zt(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=In(0,t.serverCache.getNode().getImmediateChild(n),i);c=En(e,c,new ge(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=In(0,t.serverCache.getNode().getImmediateChild(n),i);c=En(e,c,new ge(n),l,s,r,o,a)}})),c}class Sn{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new gt(n.getIndex()),s=(r=n).loadsAllData()?new gt(r.getIndex()):r.hasLimit()?new vt(r):new mt(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(ot.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ot.EMPTY_NODE,a.getNode(),null),h=new Mt(l,o.isFullyInitialized(),i.filtersNodes()),u=new Mt(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=jt(u,h),this.eventGenerator_=new Ft(this.query_)}get query(){return this.query_}}function Nn(e,t){const n=Bt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!xe(t)&&!n.getImmediateChild(ve(t)).isEmpty())?n.getChild(t):null}function Pn(e){return 0===e.eventRegistrations_.length}function An(e,t,n){const i=[];if(n){(0,o.assert)(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Dn(e,t,n,i){t.type===Nt.MERGE&&null!==t.source.queryId&&((0,o.assert)(Bt(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.assert)(Wt(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=wn(e.processor_,s,t,n,i);var a,l;return a=e.processor_,l=r.viewCache,(0,o.assert)(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),(0,o.assert)(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),(0,o.assert)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,On(e,r.changes,r.viewCache.eventCache.getNode(),null)}function On(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),qt(e,s,"child_removed",t,i,n),qt(e,s,"child_added",t,i,n),qt(e,s,"child_moved",r,i,n),qt(e,s,"child_changed",t,i,n),qt(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln,Rn;class Mn{constructor(){this.views=new Map}}function Fn(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return(0,o.assert)(null!=r,"SyncTree gave us an op for an invalid query."),Dn(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Dn(r,t,n,i));return s}}function qn(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=hn(n,s?i:null),r=!1;e?r=!0:i instanceof ot?(e=un(n,i),r=!1):(e=ot.EMPTY_NODE,r=!1);const o=jt(new Mt(e,r,!1),new Mt(i,s,!1));return new Sn(t,o)}return o}function jn(e,t,n,i,s,r){const o=qn(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Je,((e,t)=>{i.push(ft(e,t))}));return n.isFullyInitialized()&&i.push(dt(n.getNode())),On(e,i,n.getNode(),t)}(o,n)}function $n(e,t,n,i){const s=t._queryIdentifier,r=[];let a=[];const l=zn(e);if("default"===s)for(const[t,s]of e.views.entries())a=a.concat(An(s,n,i)),Pn(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||r.push(s.query));else{const t=e.views.get(s);t&&(a=a.concat(An(t,n,i)),Pn(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return l&&!zn(e)&&r.push(new((0,o.assert)(Ln,"Reference.ts has not been loaded"),Ln)(t._repo,t._path)),{removed:r,events:a}}function Hn(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Wn(e,t){let n=null;for(const i of e.views.values())n=n||Nn(i,t);return n}function Bn(e,t){if(t._queryParams.loadsAllData())return Vn(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Un(e,t){return null!=Bn(e,t)}function zn(e){return null!=Vn(e)}function Vn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn=1;class Qn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new zt(null),this.pendingWriteTree_={visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yn(e,t,n,i,s){return function(e,t,n,i,s){(0,o.assert)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Kt(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?ii(e,new Lt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Gn(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(rn(e.pendingWriteTree_,t)){let t=new zt(null);return null!=i.snap?t=t.set(me(),!0):F(i.children,(e=>{t=t.set(new ge(e),!0)})),ii(e,new Dt(i.path,t,n))}return[]}function Xn(e,t,n){return ii(e,new Lt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Jn(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||Un(o,t))){const l=$n(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>zn(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&zn(t)){return[Vn(t)]}{let e=[];return t&&(e=Hn(t)),F(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=oi(e,i);e.listenProvider_.startListening(di(s),ai(e,s),r.hashFn,r.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(di(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(li(t));e.listenProvider_.stopListening(di(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=li(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Zn(e,t,n,i){const s=ci(e,i);if(null!=s){const i=hi(s),r=i.path,o=i.queryId,a=Ie(r,t);return ui(e,r,new Lt(At(o),a,n))}return[]}function ei(e,t,n,i=!1){const s=t._path;let r=null,a=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=Ie(e,s);r=r||Wn(t,n),a=a||zn(t)}));let l,c=e.syncPointTree_.get(s);if(c?(a=a||zn(c),r=r||Wn(c,me())):(c=new Mn,e.syncPointTree_=e.syncPointTree_.set(s,c)),null!=r)l=!0;else{l=!1,r=ot.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=Wn(t,me());n&&(r=r.updateImmediateChild(e,n))}))}const h=Un(c,t);if(!h&&!t._queryParams.loadsAllData()){const n=li(t);(0,o.assert)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Kn++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=jn(c,t,n,sn(e.pendingWriteTree_,s),r,l);if(!h&&!a&&!i){const n=Bn(c,t);u=u.concat(function(e,t,n){const i=t._path,s=ai(e,t),r=oi(e,n),a=e.listenProvider_.startListening(di(t),s,r.hashFn,r.onComplete),l=e.syncPointTree_.subtree(i);if(s)(0,o.assert)(!zn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!xe(e)&&t&&zn(t))return[Vn(t).query];{let e=[];return t&&(e=e.concat(Hn(t).map((e=>e.query)))),F(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(di(i),ai(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function ti(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Wn(n,Ie(e,t));if(i)return i}));return cn(i,t,s,n,!0)}function ni(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=Ie(e,n);i=i||Wn(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||Wn(s,me()):(s=new Mn,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new Mt(i,!0,!1):null;return function(e){return Wt(e.viewCache_)}(qn(s,t,sn(e.pendingWriteTree_,t._path),r?o.getNode():ot.EMPTY_NODE,r))}function ii(e,t){return si(t,e.syncPointTree_,null,sn(e.pendingWriteTree_,me()))}function si(e,t,n,i){if(xe(e.path))return ri(e,t,n,i);{const s=t.get(me());null==n&&null!=s&&(n=Wn(s,me()));let r=[];const o=ve(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=gn(i,o);r=r.concat(si(a,l,e,t))}return s&&(r=r.concat(Fn(s,e,i,n))),r}}function ri(e,t,n,i){const s=t.get(me());null==n&&null!=s&&(n=Wn(s,me()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=gn(i,t),l=e.operationForChild(t);l&&(r=r.concat(ri(l,s,o,a)))})),s&&(r=r.concat(Fn(s,e,i,n))),r}function oi(e,t){const n=t.query,i=ai(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||ot.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=ci(e,n);if(i){const n=hi(i),s=n.path,r=n.queryId,o=Ie(s,t);return ui(e,s,new Ot(At(r),o))}return[]}(e,n._path,i):function(e,t){return ii(e,new Ot({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Jn(e,n,null,i)}}}}function ai(e,t){const n=li(t);return e.queryToTagMap.get(n)}function li(e){return e._path.toString()+"$"+e._queryIdentifier}function ci(e,t){return e.tagToQueryMap.get(t)}function hi(e){const t=e.indexOf("$");return(0,o.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ge(e.substr(0,t))}}function ui(e,t,n){const i=e.syncPointTree_.get(t);(0,o.assert)(i,"Missing sync point for query tag that we're tracking");return Fn(i,n,sn(e.pendingWriteTree_,t),null)}function di(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,o.assert)(Rn,"Reference.ts has not been loaded"),Rn)(e._repo,e._path):e}class fi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fi(t)}node(){return this.node_}}class pi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Te(this.path_,e);return new pi(this.syncTree_,t)}node(){return ti(this.syncTree_,this.path_)}}const _i=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},gi=function(e,t,n){return e&&"object"==typeof e?((0,o.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?mi(e[".sv"],t,n):"object"==typeof e[".sv"]?vi(e[".sv"],t):void(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},mi=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,o.assert)(!1,"Unexpected server value: "+e)},vi=function(e,t,n){e.hasOwnProperty("increment")||(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&(0,o.assert)(!1,"Unexpected increment value: "+i);const s=t.node();if((0,o.assert)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},yi=function(e,t,n,i){return wi(t,new pi(n,e),i)},bi=function(e,t,n){return wi(e,new fi(t),n)};function wi(e,t,n){const i=e.getPriority().val(),s=gi(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=gi(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Xe(r,ct(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Xe(s))),i.forEachChild(Je,((e,i)=>{const s=wi(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ei(e,t){let n=t instanceof ge?t:new ge(t),i=e,s=ve(n);for(;null!==s;){const e=(0,o.safeGet)(i.node.children,s)||{children:{},childCount:0};i=new Ci(s,i,e),n=be(n),s=ve(n)}return i}function Ti(e){return e.node.value}function xi(e,t){e.node.value=t,Pi(e)}function Ii(e){return e.node.childCount>0}function ki(e,t){F(e.node.children,((n,i)=>{t(new Ci(n,e,i))}))}function Si(e,t,n,i){n&&!i&&t(e),ki(e,(e=>{Si(e,t,!0,i)})),n&&i&&t(e)}function Ni(e){return new ge(null===e.parent?e.name:Ni(e.parent)+"/"+e.name)}function Pi(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Ti(e)&&!Ii(e)}(n),s=(0,o.contains)(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Pi(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Pi(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Ai=/[\[\].#$\/\u0000-\u001F\u007F]/,Di=/[\[\].#$\u0000-\u001F\u007F]/,Oi=10485760,Li=function(e){return"string"==typeof e&&0!==e.length&&!Ai.test(e)},Ri=function(e){return"string"==typeof e&&0!==e.length&&!Di.test(e)},Mi=function(e,t,n,i){i&&void 0===t||Fi((0,o.errorPrefix)(e,"value"),t,n)},Fi=function(e,t,n){const i=n instanceof ge?new Ne(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ae(i));if("function"==typeof t)throw new Error(e+"contains a function "+Ae(i)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+Ae(i));if("string"==typeof t&&t.length>3495253.3333333335&&(0,o.stringLength)(t)>Oi)throw new Error(e+"contains a string greater than "+Oi+" utf8 bytes "+Ae(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(F(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Li(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ae(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,l;l=t,(a=i).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(l),a.byteLength_+=(0,o.stringLength)(l),Pe(a),Fi(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=(0,o.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+Ae(i)+" in addition to actual children.")}},qi=function(e,t,n,i){if(!(i&&void 0===n||Ri(n)))throw new Error((0,o.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ji=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qi(e,t,n,i)},$i=function(e,t){if(".info"===ve(t))throw new Error(e+" failed = Can't modify data under /.info/")},Hi=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Li(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ri(e)}(n))throw new Error((0,o.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bi(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||ke(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Ui(e,t,n){Bi(e,n),zi(e,(e=>Se(e,t)||Se(t,e)))}function zi(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(Vi(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Vi(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();w&&T("event: "+n.toString()),H(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="repo_interrupt",Qi=25;class Yi{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Wi,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tt(),this.transactionQueueTree_=new Ci,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Gi(e,t,n){if(e.stats_=ne(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ct(e.repoInfo_,((t,n,i,s)=>{Zi(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>es(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Le(e.repoInfo_,t,((t,n,i,s)=>{Zi(e,t,n,i,s)}),(t=>{es(e,t)}),(t=>{!function(e,t){F(t,((t,n)=>{ts(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return te[n]||(te[n]=t()),te[n]}(e.repoInfo_,(()=>new St(e.stats_,e.server_))),e.infoData_=new Et,e.infoSyncTree_=new Qn({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Xn(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),ts(e,"connected",!1),e.serverSyncTree_=new Qn({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Ui(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Xi(e){const t=e.infoData_.getNode(new ge(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Ji(e){return _i({timestamp:Xi(e)})}function Zi(e,t,n,i,s){e.dataUpdateCount++;const r=new ge(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(s)if(i){const t=(0,o.map)(n,(e=>ct(e)));a=function(e,t,n,i){const s=ci(e,i);if(s){const i=hi(s),r=i.path,o=i.queryId,a=Ie(r,t),l=zt.fromObject(n);return ui(e,r,new Rt(At(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=ct(n);a=Zn(e.serverSyncTree_,r,t,s)}else if(i){const t=(0,o.map)(n,(e=>ct(e)));a=function(e,t,n){const i=zt.fromObject(n);return ii(e,new Rt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=ct(n);a=Xn(e.serverSyncTree_,r,t)}let l=r;a.length>0&&(l=cs(e,r)),Ui(e.eventQueue_,l,a)}function es(e,t){ts(e,"connected",t),!1===t&&function(e){rs(e,"onDisconnectEvents");const t=Ji(e),n=Tt();It(e.onDisconnect_,me(),((i,s)=>{const r=yi(i,s,e.serverSyncTree_,t);xt(n,i,r)}));let i=[];It(n,me(),((t,n)=>{i=i.concat(Xn(e.serverSyncTree_,t,n));const s=ps(e,t);cs(e,s)})),e.onDisconnect_=Tt(),Ui(e.eventQueue_,me(),i)}(e)}function ts(e,t,n){const i=new ge("/.info/"+t),s=ct(n);e.infoData_.updateSnapshot(i,s);const r=Xn(e.infoSyncTree_,i,s);Ui(e.eventQueue_,i,r)}function ns(e){return e.nextWriteId_++}function is(e,t,n,i,s){rs(e,"set",{path:t.toString(),value:n,priority:i});const r=Ji(e),o=ct(n,i),a=ti(e.serverSyncTree_,t),l=bi(o,a,r),c=ns(e),h=Yn(e.serverSyncTree_,t,l,c,!0);Bi(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||S("set at "+t+" failed: "+n);const o=Gn(e.serverSyncTree_,c,!r);Ui(e.eventQueue_,t,o),os(e,s,n,i)}));const u=ps(e,t);cs(e,u),Ui(e.eventQueue_,u,[])}function ss(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Ki)}function rs(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function os(e,t,n,i){t&&H((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function as(e,t,n){return ti(e.serverSyncTree_,t,n)||ot.EMPTY_NODE}function ls(e,t=e.transactionQueueTree_){if(t||fs(e,t),Ti(t)){const n=us(e,t);(0,o.assert)(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=as(e,t,i);let r=s;const a=s.hash();for(let e=0;e<n.length;e++){const i=n[e];(0,o.assert)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Ie(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const l=r.val(!0),c=t;e.server_.put(c.toString(),l,(i=>{rs(e,"transaction put response",{path:c.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Gn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();fs(e,Ei(e.transactionQueueTree_,t)),ls(e,e.transactionQueueTree_),Ui(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)H(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}cs(e,t)}}),a)}(e,Ni(t),n)}else Ii(t)&&ki(t,(t=>{ls(e,t)}))}function cs(e,t){const n=hs(e,t),i=Ni(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),a=r.map((e=>e.currentWriteId));for(let r=0;r<t.length;r++){const c=t[r],h=Ie(n,c.path);let u,d=!1;if((0,o.assert)(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)d=!0,u=c.abortReason,s=s.concat(Gn(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=Qi)d=!0,u="maxretry",s=s.concat(Gn(e.serverSyncTree_,c.currentWriteId,!0));else{const n=as(e,c.path,a);c.currentInputSnapshot=n;const i=t[r].update(n.val());if(void 0!==i){Fi("transaction failed: Data returned ",i,c.path);let t=ct(i);"object"==typeof i&&null!=i&&(0,o.contains)(i,".priority")||(t=t.updatePriority(n.getPriority()));const r=c.currentWriteId,l=Ji(e),h=bi(t,n,l);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=h,c.currentWriteId=ns(e),a.splice(a.indexOf(r),1),s=s.concat(Yn(e.serverSyncTree_,c.path,h,c.currentWriteId,c.applyLocally)),s=s.concat(Gn(e.serverSyncTree_,r,!0))}else d=!0,u="nodata",s=s.concat(Gn(e.serverSyncTree_,c.currentWriteId,!0))}Ui(e.eventQueue_,n,s),s=[],d&&(t[r].status=2,l=t[r].unwatcher,setTimeout(l,Math.floor(0)),t[r].onComplete&&("nodata"===u?i.push((()=>t[r].onComplete(null,!1,t[r].currentInputSnapshot))):i.push((()=>t[r].onComplete(new Error(u),!1,null)))))}var l;fs(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)H(i[e]);ls(e,e.transactionQueueTree_)}(e,us(e,n),i),i}function hs(e,t){let n,i=e.transactionQueueTree_;for(n=ve(t);null!==n&&void 0===Ti(i);)i=Ei(i,n),n=ve(t=be(t));return i}function us(e,t){const n=[];return ds(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function ds(e,t,n){const i=Ti(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);ki(t,(t=>{ds(e,t,n)}))}function fs(e,t){const n=Ti(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,xi(t,n.length>0?n:void 0)}ki(t,(t=>{fs(e,t)}))}function ps(e,t){const n=Ni(hs(e,t)),i=Ei(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{_s(e,t)})),_s(e,i),Si(i,(t=>{_s(e,t)})),n}function _s(e,t){const n=Ti(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.assert)(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):((0,o.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Gn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?xi(t,void 0):n.length=r+1,Ui(e.eventQueue_,Ni(t),s);for(let e=0;e<i.length;e++)H(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=function(e,t){const n=ms(e),i=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new X(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new ge(n.pathString)}},ms=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},vs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.stringify)(this.snapshot.exportVal())}}class bs{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return xe(this._path)?null:we(this._path)}get ref(){return new Es(this._repo,this._path)}get _queryIdentifier(){const e=wt(this._queryParams),t=R(e);return"{}"===t?"default":t}get _queryObject(){return wt(this._queryParams)}isEqual(e){if(!((e=(0,o.getModularInstance)(e))instanceof Cs))return!1;const t=this._repo===e._repo,n=ke(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Es extends Cs{constructor(e,t){super(e,t,new yt,!1)}get parent(){const e=Ee(this._path);return null===e?null:new Es(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Ts{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ge(e),n=Is(this.ref,e);return new Ts(this._node.getChild(t),n,Je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Ts(n,Is(this.ref,t),Je))))}hasChild(e){const t=new ge(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xs(e,t){return(e=(0,o.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?Is(e._root,t):e._root}function Is(e,t){return null===ve((e=(0,o.getModularInstance)(e))._path)?ji("child","path",t,!1):qi("child","path",t,!1),new Es(e._repo,Te(e._path,t))}function ks(e){return $i("remove",e._path),Ss(e,null)}function Ss(e,t){e=(0,o.getModularInstance)(e),$i("set",e._path),Mi("set",t,e._path,!1);const n=new(0,o.Deferred);return is(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Ns(e){e=(0,o.getModularInstance)(e);const t=new ws((()=>{})),n=new Ps(t);return function(e,t,n){const i=ni(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const s=ct(i).withIndex(t._queryParams.getIndex());let r;if(ei(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=Xn(e.serverSyncTree_,t._path,s);else{const n=ai(e.serverSyncTree_,t);r=Zn(e.serverSyncTree_,t._path,s,n)}return Ui(e.eventQueue_,t._path,r),Jn(e.serverSyncTree_,t,n,null,!0),s}),(n=>(rs(e,"get for query "+(0,o.stringify)(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Ts(t,new Es(e._repo,e._path),e._queryParams.getIndex())))}class Ps{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new ys("value",this,new Ts(e.snapshotNode,new Es(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new bs(this,e,t):null}matches(e){return e instanceof Ps&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}!function(e){(0,o.assert)(!Ln,"__referenceConstructor has already been defined"),Ln=e}(Es),function(e){(0,o.assert)(!Rn,"__referenceConstructor has already been defined"),Rn=e}(Es);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const As="FIREBASE_DATABASE_EMULATOR_HOST",Ds={};let Os=!1;function Ls(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=gs(r,s),h=c.repoInfo;void 0!==l&&l.env&&(a=l.env[As]),a?(o=!0,r=`http://${a}?ns=${h.namespace}`,c=gs(r,s),h=c.repoInfo):o=!c.repoInfo.secure;const u=s&&o?new z(z.OWNER):new U(e.name,e.options,t);Hi("Invalid Firebase Database URL",c),xe(c.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let s=Ds[t.name];s||(s={},Ds[t.name]=s);let r=s[e.toURLString()];r&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Yi(e,Os,n,i),s[e.toURLString()]=r,r}(h,e,u,new B(e.name,n));return new Rs(d,e)}class Rs{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Gi(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Es(this._repo,me())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Ds[t];n&&n[e.key]===e||k(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ss(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&k("Cannot call "+e+" on a deleted database.")}}function Ms(e=(0,i.getApp)(),t){const n=(0,i._getProvider)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.getDefaultEmulatorHostnameAndPort)("database");e&&function(e,t,n,i={}){e=(0,o.getModularInstance)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&k("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&k('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new z(z.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:(0,o.createMockUserToken)(i.mockUserToken,e.app.options.projectId);r=new z(t)}!function(e,t,n,i){e.repoInfo_=new X(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}return n}Le.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Le.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fs,qs;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qs=i.SDK_VERSION,u=qs,(0,i._registerComponent)(new(0,s.Component)("database",((e,{instanceIdentifier:t})=>Ls(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(c,h,Fs),(0,i.registerVersion)(c,h,"esm2017")}));
//# sourceMappingURL=signup.110d8f7c.js.map
