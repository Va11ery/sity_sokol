import{$ as X,g as Ee,N as ze,a0 as Re,A as Ne,p as y,c as u,d as f,n as N,v as l,a1 as Y,s as Be,D as Pe,q as ue,r as k,w as H,a2 as Ve,J as Ie,L as Q,M as Oe,X as ce,a3 as Ae,a4 as w,a5 as B,a6 as de,a7 as ee,_ as te,K as ve,x as K,a8 as He,z as U,a9 as De,y as me,o as We,aa as je,ab as ne,C as Me,Z as fe,ac as Xe,ad as ae}from"./index.c435fd8a.js";const Fe=["top","bottom"],qe=["start","end","left","right"];function Ye(e,t){let[a,n]=e.split(" ");return n||(n=X(Fe,a)?"start":X(qe,a)?"top":"center"),{side:se(a,t),align:se(n,t)}}function se(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function P(e){const t=Ee("useRender");t.render=e}const $t=ze({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:a}=t;const{defaults:n,reset:r,root:s,scoped:i}=Re(e);return Ne(n,{reset:r,root:s,scoped:i}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}});const Ke=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ue(e){return{dimensionStyles:u(()=>({height:f(e.height),maxHeight:f(e.maxHeight),maxWidth:f(e.maxWidth),minHeight:f(e.minHeight),minWidth:f(e.minWidth),width:f(e.width)}))}}function Je(e){return{aspectStyles:u(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Ze=N({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Ke()},setup(e,t){let{slots:a}=t;const{aspectStyles:n}=Je(e),{dimensionStyles:r}=Ue(e);return P(()=>{var s;return l("div",{class:"v-responsive",style:r.value},[l("div",{class:"v-responsive__sizer",style:n.value},null),(s=a.additional)==null?void 0:s.call(a),a.default&&l("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function Ge(e,t){if(!Y)return;const a=t.modifiers||{},n=t.value,{handler:r,options:s}=typeof n=="object"?n:{handler:n,options:{}},i=new IntersectionObserver(function(){var o;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const m=(o=e._observe)==null?void 0:o[t.instance.$.uid];if(!m)return;const g=c.some(_=>_.isIntersecting);r&&(!a.quiet||m.init)&&(!a.once||g||m.init)&&r(g,c,d),g&&a.once?ge(e,t):m.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function ge(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Qe={mounted:Ge,unmounted:ge},et=Qe,tt=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),A=(e,t)=>{let{slots:a}=t;const{transition:n,...r}=e,{component:s=ue,...i}=typeof n=="object"?n:{};return Be(s,Pe(typeof n=="string"?{name:n}:i,r),a)},nt=N({name:"VImg",directives:{intersect:et},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...tt()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:a,slots:n}=t;const r=k(""),s=k(),i=k(e.eager?"loading":"idle"),o=k(),c=k(),d=u(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=u(()=>d.value.aspect||o.value/c.value||0);H(()=>e.src,()=>{g(i.value!=="idle")}),H(m,(v,h)=>{!v&&h&&s.value&&C(s.value)}),Ve(()=>g());function g(v){if(!(e.eager&&v)&&!(Y&&!v&&!e.eager)){if(i.value="loading",d.value.lazySrc){const h=new Image;h.src=d.value.lazySrc,C(h,null)}!d.value.src||Ie(()=>{var h,S;if(a("loadstart",((h=s.value)==null?void 0:h.currentSrc)||d.value.src),(S=s.value)!=null&&S.complete){if(s.value.naturalWidth||p(),i.value==="error")return;m.value||C(s.value,null),_()}else m.value||C(s.value),V()})}}function _(){var v;V(),i.value="loaded",a("load",((v=s.value)==null?void 0:v.currentSrc)||d.value.src)}function p(){var v;i.value="error",a("error",((v=s.value)==null?void 0:v.currentSrc)||d.value.src)}function V(){const v=s.value;v&&(r.value=v.currentSrc||v.src)}let x=-1;function C(v){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{clearTimeout(x);const{naturalHeight:O,naturalWidth:G}=v;O||G?(o.value=G,c.value=O):!v.complete&&i.value==="loading"&&h!=null?x=window.setTimeout(S,h):(v.currentSrc.endsWith(".svg")||v.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,c.value=1)};S()}const L=u(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),E=()=>{var v;if(!d.value.src||i.value==="idle")return null;const h=l("img",{class:["v-img__img",L.value],src:d.value.src,srcset:d.value.srcset,alt:"",sizes:e.sizes,ref:s,onLoad:_,onError:p},null),S=(v=n.sources)==null?void 0:v.call(n);return l(A,{transition:e.transition,appear:!0},{default:()=>[Q(S?l("picture",{class:"v-img__picture"},[S,h]):h,[[Ae,i.value==="loaded"]])]})},T=()=>l(A,{transition:e.transition},{default:()=>[d.value.lazySrc&&i.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",L.value],src:d.value.lazySrc,alt:""},null)]}),W=()=>n.placeholder?l(A,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&l("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,I=()=>n.error?l(A,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&l("div",{class:"v-img__error"},[n.error()])]}):null,j=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,$=k(!1);{const v=H(m,h=>{h&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{$.value=!0})}),v())})}return P(()=>Q(l(Ze,{class:["v-img",{"v-img--booting":!$.value}],style:{width:f(e.width==="auto"?o.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>l(ce,null,[l(E,null,null),l(T,null,null),l(j,null,null),l(W,null,null),l(I,null,null)]),default:n.default}),[[Oe("intersect"),{handler:g,options:e.options},null,{once:!0}]])),{currentSrc:r,image:s,state:i,naturalWidth:o,naturalHeight:c}}}),J=y({tag:{type:String,default:"div"}},"tag"),kt=y({border:[Boolean,Number,String]},"border");function wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{borderClasses:u(()=>{const n=B(e)?e.value:e.border,r=[];if(n===!0||n==="")r.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))r.push(`border-${s}`);return r})}}const xt=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Lt(e){return{elevationClasses:u(()=>{const a=B(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const he=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{roundedClasses:u(()=>{const n=B(e)?e.value:e.rounded,r=[];if(n===!0||n==="")r.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))r.push(`rounded-${s}`);return r})}}function Z(e){return de(()=>{const t=[],a={};return e.value.background&&(ee(e.value.background)?a.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(ee(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function _e(e,t){const a=u(()=>({text:B(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:r}=Z(a);return{textColorClasses:n,textColorStyles:r}}function re(e,t){const a=u(()=>({background:B(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:r}=Z(a);return{backgroundColorClasses:n,backgroundColorStyles:r}}const at=[null,"default","comfortable","compact"],st=y({density:{type:String,default:"default",validator:e=>at.includes(e)}},"density");function rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{densityClasses:u(()=>`${t}--density-${e.density}`)}}const it=["elevated","flat","tonal","outlined","text","plain"];function lt(e,t){return l(ce,null,[e&&l("span",{key:"overlay",class:`${t}__overlay`},null),l("span",{key:"underlay",class:`${t}__underlay`},null)])}const ot=y({color:String,variant:{type:String,default:"elevated",validator:e=>it.includes(e)}},"variant");function ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();const a=u(()=>{const{variant:s}=te(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:r}=Z(u(()=>{const{variant:s,color:i}=te(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:n,colorStyles:r,variantClasses:a}}const ct=["x-small","small","default","large","x-large"],ye=y({size:{type:[String,Number],default:"default"}},"size");function be(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return de(()=>{let a,n;return X(ct,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:f(e.size),height:f(e.size)}),{sizeClasses:a,sizeStyles:n}})}const dt=y({color:String,start:Boolean,end:Boolean,icon:ve,...ye(),...J({tag:"i"}),...K()},"v-icon"),vt=N({name:"VIcon",props:dt(),setup(e,t){let{attrs:a,slots:n}=t,r;n.default&&(r=u(()=>{var m,g;const _=(m=n.default)==null?void 0:m.call(n);if(!!_)return(g=_.filter(p=>p.type===He&&p.children&&typeof p.children=="string")[0])==null?void 0:g.children}));const{themeClasses:s}=U(e),{iconData:i}=De(r||e),{sizeClasses:o}=be(e),{textColorClasses:c,textColorStyles:d}=_e(me(e,"color"));return P(()=>{var m;return l(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,o.value,c.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[o.value?void 0:{fontSize:f(e.size),height:f(e.size),width:f(e.size)},d.value],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[(m=n.default)==null?void 0:m.call(n)]})}),{}}});function mt(e){const t=k(),a=k(!1);if(Y){const n=new IntersectionObserver(r=>{e==null||e(r,n),a.value=!!r.find(s=>s.isIntersecting)});We(()=>{n.disconnect()}),H(t,(r,s)=>{s&&(n.unobserve(s),a.value=!1),r&&n.observe(r)},{flush:"post"})}return{intersectionRef:t,isIntersecting:a}}const F=Symbol("rippleStop"),ft=80;function ie(e,t){e.style.transform=t,e.style.webkitTransform=t}function M(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function q(e){return e.constructor.name==="TouchEvent"}function Se(e){return e.constructor.name==="KeyboardEvent"}const gt=function(e,t){var a;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=0,s=0;if(!Se(e)){const _=t.getBoundingClientRect(),p=q(e)?e.touches[e.touches.length-1]:e;r=p.clientX-_.left,s=p.clientY-_.top}let i=0,o=.3;(a=t._ripple)!=null&&a.circle?(o=.15,i=t.clientWidth/2,i=n.center?i:i+Math.sqrt((r-i)**2+(s-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=`${(t.clientWidth-i*2)/2}px`,d=`${(t.clientHeight-i*2)/2}px`,m=n.center?c:`${r-i}px`,g=n.center?d:`${s-i}px`;return{radius:i,scale:o,x:m,y:g,centerX:c,centerY:d}},D={show(e,t){var a;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(t!=null&&(a=t._ripple)!=null&&a.enabled))return;const r=document.createElement("span"),s=document.createElement("span");r.appendChild(s),r.className="v-ripple__container",n.class&&(r.className+=` ${n.class}`);const{radius:i,scale:o,x:c,y:d,centerX:m,centerY:g}=gt(e,t,n),_=`${i*2}px`;s.className="v-ripple__animation",s.style.width=_,s.style.height=_,t.appendChild(r);const p=window.getComputedStyle(t);p&&p.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ie(s,`translate(${c}, ${d}) scale3d(${o},${o},${o})`),M(s,0),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ie(s,`translate(${m}, ${g}) scale3d(1,1,1)`),M(s,.08)},0)},hide(e){var t;if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const r=performance.now()-Number(n.dataset.activated),s=Math.max(250-r,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),M(n,0),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)},300)},s)}};function Ce(e){return typeof e>"u"||!!e}function z(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[F])){if(e[F]=!0,q(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Se(e),a._ripple.class&&(t.class=a._ripple.class),q(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{D.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;a!=null&&(n=a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},ft)}else D.show(e,a,t)}}function le(e){e[F]=!0}function b(e){const t=e.currentTarget;if(!(!t||!t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{b(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),D.hide(t)}}function $e(e){const t=e.currentTarget;!t||!t._ripple||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let R=!1;function ke(e){!R&&(e.keyCode===ne.enter||e.keyCode===ne.space)&&(R=!0,z(e))}function we(e){R=!1,b(e)}function xe(e){R&&(R=!1,b(e))}function Le(e,t,a){var i;const{value:n,modifiers:r}=t,s=Ce(n);if(s||D.hide(e),e._ripple=(i=e._ripple)!=null?i:{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,je(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(r.stop){e.addEventListener("touchstart",le,{passive:!0}),e.addEventListener("mousedown",le);return}e.addEventListener("touchstart",z,{passive:!0}),e.addEventListener("touchend",b,{passive:!0}),e.addEventListener("touchmove",$e,{passive:!0}),e.addEventListener("touchcancel",b),e.addEventListener("mousedown",z),e.addEventListener("mouseup",b),e.addEventListener("mouseleave",b),e.addEventListener("keydown",ke),e.addEventListener("keyup",we),e.addEventListener("blur",xe),e.addEventListener("dragstart",b,{passive:!0})}else!s&&a&&Te(e)}function Te(e){e.removeEventListener("mousedown",z),e.removeEventListener("touchstart",z),e.removeEventListener("touchend",b),e.removeEventListener("touchmove",$e),e.removeEventListener("touchcancel",b),e.removeEventListener("mouseup",b),e.removeEventListener("mouseleave",b),e.removeEventListener("keydown",ke),e.removeEventListener("keyup",we),e.removeEventListener("dragstart",b),e.removeEventListener("blur",xe)}function ht(e,t){Le(e,t,!1)}function pt(e){delete e._ripple,Te(e)}function _t(e,t){if(t.value===t.oldValue)return;const a=Ce(t.oldValue);Le(e,t,a)}const Tt={mounted:ht,unmounted:pt,updated:_t};const yt=N({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...he(),...J(),...K()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Me(e,"modelValue"),{isRtl:r}=fe(),{themeClasses:s}=U(e),{textColorClasses:i,textColorStyles:o}=_e(e,"color"),{backgroundColorClasses:c,backgroundColorStyles:d}=re(u(()=>e.bgColor||e.color)),{backgroundColorClasses:m,backgroundColorStyles:g}=re(e,"color"),{roundedClasses:_}=pe(e),{intersectionRef:p,isIntersecting:V}=mt(),x=u(()=>parseInt(e.max,10)),C=u(()=>parseInt(e.height,10)),L=u(()=>parseFloat(e.bufferValue)/x.value*100),E=u(()=>parseFloat(n.value)/x.value*100),T=u(()=>r.value!==e.reverse),W=u(()=>e.indeterminate?"fade-transition":"slide-x-transition"),I=u(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function j($){if(!p.value)return;const{left:v,right:h,width:S}=p.value.getBoundingClientRect(),O=T.value?S-$.clientX+(h-S):$.clientX-v;n.value=Math.round(O/S*x.value)}return P(()=>l(e.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--active":e.active&&V.value,"v-progress-linear--reverse":T.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},_.value,s.value],style:{height:e.active?f(C.value):0,"--v-progress-linear-height":f(C.value)},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:E.value,onClick:e.clickable&&j},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",i.value],style:{...o.value,[T.value?"left":"right"]:f(-C.value),borderTop:`${f(C.value/2)} dotted`,opacity:I.value,top:`calc(50% - ${f(C.value/4)})`,width:f(100-L.value,"%"),"--v-progress-linear-stream-to":f(C.value*(T.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",c.value],style:[d.value,{opacity:I.value,width:f(e.stream?L.value:100,"%")}]},null),l(ue,{name:W.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map($=>l("div",{key:$,class:["v-progress-linear__indeterminate",$,m.value],style:g.value},null))]):l("div",{class:["v-progress-linear__determinate",m.value],style:[g.value,{width:f(E.value,"%")}]},null)]}),a.default&&l("div",{class:"v-progress-linear__content"},[a.default({value:E.value,buffer:L.value})])]})),{}}}),Et=y({loading:[Boolean,String]},"loader");function zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{loaderClasses:u(()=>({[`${t}--loading`]:e.loading}))}}function Rt(e,t){var a;let{slots:n}=t;return l("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||l(yt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const oe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Nt=y({location:String},"location");function Bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=fe();return{locationStyles:u(()=>{if(!e.location)return{};const{side:s,align:i}=Ye(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function o(d){return a?a(d):0}const c={};return s!=="center"&&(t?c[oe[s]]=`calc(100% - ${o(s)}px)`:c[s]=0),i!=="center"?t?c[oe[i]]=`calc(100% - ${o(i)}px)`:c[i]=0:(s==="center"?c.top=c.left="50%":c[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",c.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),c})}}const bt=["static","relative","fixed","absolute","sticky"],Pt=y({position:{type:String,validator:e=>bt.includes(e)}},"position");function Vt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{positionClasses:u(()=>e.position?`${t}--${e.position}`:void 0)}}function It(e,t){const a=Xe("RouterLink"),n=u(()=>!!(e.href||e.to)),r=u(()=>(n==null?void 0:n.value)||ae(t,"click")||ae(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:r,href:me(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:r,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&u(()=>{var i,o;return e.exact?(i=s.isExactActive)==null?void 0:i.value:(o=s.isActive)==null?void 0:o.value}),href:u(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Ot=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const St=y({start:Boolean,end:Boolean,icon:ve,image:String,...st(),...he(),...ye(),...J(),...K(),...ot({variant:"flat"})},"v-avatar"),At=N({name:"VAvatar",props:St(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=U(e),{colorClasses:r,colorStyles:s,variantClasses:i}=ut(e),{densityClasses:o}=rt(e),{roundedClasses:c}=pe(e),{sizeClasses:d,sizeStyles:m}=be(e);return P(()=>{var g;return l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,r.value,o.value,c.value,d.value,i.value],style:[s.value,m.value]},{default:()=>[e.image?l(nt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(vt,{key:"icon",icon:e.icon},null):(g=a.default)==null?void 0:g.call(a),lt(!1,"v-avatar")]})}),{}}});export{Vt as A,It as B,lt as C,vt as D,At as E,Rt as L,Tt as R,$t as V,kt as a,xt as b,he as c,re as d,wt as e,Lt as f,pe as g,nt as h,st as i,ot as j,rt as k,ye as l,J as m,be as n,_e as o,mt as p,Ke as q,Et as r,Nt as s,Pt as t,P as u,Ot as v,ut as w,Ue as x,zt as y,Bt as z};
