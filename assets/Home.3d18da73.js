import{ai as iu,m as x,y as Mu,u as a,I as T,v as cu,x as du,c as E,C as J,G as ru,t as Ru,W as Yu,aj as vu,r as k,F as L,d as pu,p as Hu,i as Xu,D as Ou,b as U,a3 as Gu,A as zu,o as Wu,Q as fu,B as Uu,Z as K,q as mu,J as hu,K as q,N as tu,S as v,M as c,V as D,O as qu,P as nu,X as V,ak as Ju,al as Ku,am as Qu,an as Zu,L as u4}from"./index.028b7ca7.js";import{a as F,k as Q,l as gu,V as O,w as au,R as e4,b as t4,n as n4,c as a4,A as l4,B as s4,C as o4,d as i4,o as c4,m as G,p as d4,f as r4,r as v4,s as f4,t as m4,g as h4,D as g4,E as _4,F as E4,h as y4,q as C4,i as I,L as B4,v as D4,G as b4,j as w,H as x4,I as A4,z as k4,M as w4,J as F4,x as lu}from"./ssrBoot.d80da593.js";const S4=u=>{const{touchstartX:n,touchendX:t,touchstartY:e,touchendY:l}=u,o=.5,s=16;u.offsetX=t-n,u.offsetY=l-e,Math.abs(u.offsetY)<o*Math.abs(u.offsetX)&&(u.left&&t<n-s&&u.left(u),u.right&&t>n+s&&u.right(u)),Math.abs(u.offsetX)<o*Math.abs(u.offsetY)&&(u.up&&l<e-s&&u.up(u),u.down&&l>e+s&&u.down(u))};function V4(u,n){var t;const e=u.changedTouches[0];n.touchstartX=e.clientX,n.touchstartY=e.clientY,(t=n.start)==null||t.call(n,{originalEvent:u,...n})}function I4(u,n){var t;const e=u.changedTouches[0];n.touchendX=e.clientX,n.touchendY=e.clientY,(t=n.end)==null||t.call(n,{originalEvent:u,...n}),S4(n)}function $4(u,n){var t;const e=u.changedTouches[0];n.touchmoveX=e.clientX,n.touchmoveY=e.clientY,(t=n.move)==null||t.call(n,{originalEvent:u,...n})}function L4(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:u.left,right:u.right,up:u.up,down:u.down,start:u.start,move:u.move,end:u.end};return{touchstart:t=>V4(t,n),touchend:t=>I4(t,n),touchmove:t=>$4(t,n)}}function T4(u,n){var r,d;var t;const e=n.value,l=e!=null&&e.parent?u.parentElement:u,o=(r=e==null?void 0:e.options)!=null?r:{passive:!0},s=(t=n.instance)==null?void 0:t.$.uid;if(!l||!s)return;const i=L4(n.value);l._touchHandlers=(d=l._touchHandlers)!=null?d:Object.create(null),l._touchHandlers[s]=i,iu(i).forEach(m=>{l.addEventListener(m,i[m],o)})}function P4(u,n){var t,e;const l=(t=n.value)!=null&&t.parent?u.parentElement:u,o=(e=n.instance)==null?void 0:e.$.uid;if(!(l!=null&&l._touchHandlers)||!o)return;const s=l._touchHandlers[o];iu(s).forEach(i=>{l.removeEventListener(i,s[i])}),delete l._touchHandlers[o]}const _u={mounted:T4,unmounted:P4},j4=_u,Y="/sity_sokol/assets/cards_img_3.9ffa5c06.svg",N4="/sity_sokol/assets/camera_2.0fbd1be3.jpg",M4="/sity_sokol/assets/fon.3a1b3243.jpg",p="/sity_sokol/assets/delko.7ecd34ff.png";const H=x({name:"VCardActions",setup(u,n){let{slots:t}=n;return Mu({VBtn:{variant:"text"}}),F(()=>{var e;return a("div",{class:"v-card-actions"},[(e=t.default)==null?void 0:e.call(t)])}),{}}}),R4=Q("v-card-subtitle"),Eu=Q("v-card-title"),Y4=x({name:"VCardItem",props:{appendAvatar:String,appendIcon:T,prependAvatar:String,prependIcon:T,subtitle:String,title:String,...gu()},setup(u,n){let{slots:t}=n;return F(()=>{var e,l,o,s,i;const r=!!(u.prependAvatar||u.prependIcon||t.prepend),d=!!(u.appendAvatar||u.appendIcon||t.append),m=!!(u.title||t.title),y=!!(u.subtitle||t.subtitle);return a("div",{class:"v-card-item"},[r&&a(O,{key:"prepend",defaults:{VAvatar:{density:u.density,icon:u.prependIcon,image:u.prependAvatar},VIcon:{density:u.density,icon:u.prependIcon}}},{default:()=>{var f;return[a("div",{class:"v-card-item__prepend"},[(f=(e=t.prepend)==null?void 0:e.call(t))!=null?f:a(au,null,null)])]}}),a("div",{class:"v-card-item__content"},[m&&a(Eu,{key:"title"},{default:()=>{var f;return[(f=(l=t.title)==null?void 0:l.call(t))!=null?f:u.title]}}),y&&a(R4,{key:"subtitle"},{default:()=>{var f;return[(f=(o=t.subtitle)==null?void 0:o.call(t))!=null?f:u.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),d&&a(O,{key:"append",defaults:{VAvatar:{density:u.density,icon:u.appendIcon,image:u.appendAvatar},VIcon:{density:u.density,icon:u.appendIcon}}},{default:()=>{var f;return[a("div",{class:"v-card-item__append"},[(f=(i=t.append)==null?void 0:i.call(t))!=null?f:a(au,null,null)])]}})])}),{}}}),X=Q("v-card-text"),b=x({name:"VCard",directives:{Ripple:e4},props:{appendAvatar:String,appendIcon:T,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:T,ripple:Boolean,subtitle:String,text:String,title:String,...cu(),...t4(),...gu(),...n4(),...a4(),...l4(),...s4(),...o4(),...i4(),...c4(),...G(),...d4({variant:"elevated"})},setup(u,n){let{attrs:t,slots:e}=n;const{themeClasses:l}=du(u),{borderClasses:o}=r4(u),{colorClasses:s,colorStyles:i,variantClasses:r}=v4(u),{densityClasses:d}=f4(u),{dimensionStyles:m}=m4(u),{elevationClasses:y}=h4(u),{loaderClasses:f}=g4(u),{locationStyles:B}=_4(u),{positionClasses:_}=E4(u),{roundedClasses:j}=y4(u),A=C4(u,t),N=E(()=>u.link!==!1&&A.isLink.value),S=E(()=>!u.disabled&&u.link!==!1&&(u.link||A.isClickable.value));return F(()=>{var M,h,g;const C=N.value?"a":u.tag,R=!!(e.title||u.title),Iu=!!(e.subtitle||u.subtitle),$u=R||Iu,Lu=!!(e.append||u.appendAvatar||u.appendIcon),Tu=!!(e.prepend||u.prependAvatar||u.prependIcon),Pu=!!(e.image||u.image),ju=$u||Tu||Lu,Nu=!!(e.text||u.text);return J(a(C,{class:["v-card",{"v-card--disabled":u.disabled,"v-card--flat":u.flat,"v-card--hover":u.hover&&!(u.disabled||u.flat),"v-card--link":S.value},l.value,o.value,s.value,d.value,y.value,f.value,_.value,j.value,r.value],style:[i.value,m.value,B.value],href:A.href.value,onClick:S.value&&A.navigate,tabindex:u.disabled?-1:void 0},{default:()=>[Pu&&a(O,{key:"image",defaults:{VImg:{cover:!0,src:u.image}}},{default:()=>{var $;return[a("div",{class:"v-card__image"},[($=(M=e.image)==null?void 0:M.call(e))!=null?$:a(I,null,null)])]}}),a(B4,{name:"v-card",active:!!u.loading,color:typeof u.loading=="boolean"?void 0:u.loading},{default:e.loader}),ju&&a(Y4,{key:"item",prependAvatar:u.prependAvatar,prependIcon:u.prependIcon,title:u.title,subtitle:u.subtitle,appendAvatar:u.appendAvatar,appendIcon:u.appendIcon},{default:e.item,prepend:e.prepend,title:e.title,subtitle:e.subtitle,append:e.append}),Nu&&a(X,{key:"text"},{default:()=>{var $;return[($=(h=e.text)==null?void 0:h.call(e))!=null?$:u.text]}}),(g=e.default)==null?void 0:g.call(e),e.actions&&a(H,null,{default:e.actions}),D4(S.value,"v-card")]}),[[ru("ripple"),S.value]])}),{}}});const yu=Symbol.for("vuetify:v-window"),Cu=Symbol.for("vuetify:v-window-group"),p4=Ru()({name:"VWindow",directives:{Touch:_u},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:u=>typeof u=="boolean"||u==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...G(),...cu()},emits:{"update:modelValue":u=>!0},setup(u,n){let{slots:t}=n;const{themeClasses:e}=du(u),{isRtl:l}=Yu(),{t:o}=vu(),s=b4(u,Cu),i=k(),r=E(()=>l.value?!u.reverse:u.reverse),d=k(!1),m=E(()=>{const h=u.direction==="vertical"?"y":"x",C=(r.value?!d.value:d.value)?"-reverse":"";return`v-window-${h}${C}-transition`}),y=k(0),f=k(void 0),B=E(()=>s.items.value.findIndex(h=>s.selected.value.includes(h.id)));L(B,(h,g)=>{const C=s.items.value.length,R=C-1;C<=2?d.value=h<g:h===R&&g===0?d.value=!0:h===0&&g===R?d.value=!1:d.value=h<g}),pu(yu,{transition:m,isReversed:d,transitionCount:y,transitionHeight:f,rootRef:i});const _=E(()=>u.continuous||B.value!==0),j=E(()=>u.continuous||B.value!==s.items.value.length-1);function A(){_.value&&s.prev()}function N(){j.value&&s.next()}const S=E(()=>{const h=[],g={icon:l.value?u.nextIcon:u.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,ariaLabel:o("$vuetify.carousel.prev")};h.push(_.value?t.prev?t.prev({props:g}):a(w,g,null):a("div",null,null));const C={icon:l.value?u.prevIcon:u.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,ariaLabel:o("$vuetify.carousel.next")};return h.push(j.value?t.next?t.next({props:C}):a(w,C,null):a("div",null,null)),h}),M=E(()=>u.touch===!1?u.touch:{...{left:()=>{r.value?A():N()},right:()=>{r.value?N():A()},start:g=>{let{originalEvent:C}=g;C.stopPropagation()}},...u.touch===!0?{}:u.touch});return F(()=>{var h,g;return J(a(u.tag,{ref:i,class:["v-window",{"v-window--show-arrows-on-hover":u.showArrows==="hover"},e.value]},{default:()=>[a("div",{class:"v-window__container",style:{height:f.value}},[(h=t.default)==null?void 0:h.call(t,{group:s}),u.showArrows!==!1&&a("div",{class:"v-window__controls"},[S.value])]),(g=t.additional)==null?void 0:g.call(t,{group:s})]}),[[ru("touch"),M.value]])}),{group:s}}}),H4=Hu({eager:Boolean},"lazy");function X4(u,n){const t=k(!1),e=E(()=>t.value||u.eager||n.value);L(n,()=>t.value=!0);function l(){u.eager||(t.value=!1)}return{isBooted:t,hasContent:e,onAfterLeave:l}}const O4=x({name:"VWindowItem",directives:{Touch:j4},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...x4(),...H4()},emits:{"group:selected":u=>!0},setup(u,n){let{slots:t}=n;const e=Xu(yu),l=A4(u,Cu),{isBooted:o}=k4();if(!e||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=k(!1),i=E(()=>e.isReversed.value?u.reverseTransition!==!1:u.transition!==!1);function r(){!s.value||!e||(s.value=!1,e.transitionCount.value>0&&(e.transitionCount.value-=1,e.transitionCount.value===0&&(e.transitionHeight.value=void 0)))}function d(){if(!(s.value||!e)){if(s.value=!0,e.transitionCount.value===0){var _;e.transitionHeight.value=U((_=e.rootRef.value)==null?void 0:_.clientHeight)}e.transitionCount.value+=1}}function m(){r()}function y(_){!s.value||Gu(()=>{!i.value||!s.value||!e||(e.transitionHeight.value=U(_.clientHeight))})}const f=E(()=>{const _=e.isReversed.value?u.reverseTransition:u.transition;return i.value?{name:typeof _!="string"?e.transition.value:_,onBeforeEnter:d,onAfterEnter:r,onEnterCancelled:m,onBeforeLeave:d,onAfterLeave:r,onLeaveCancelled:m,onEnter:y}:!1}),{hasContent:B}=X4(u,l.isSelected);return F(()=>{var _;return a(w4,{transition:o.value&&f.value},{default:()=>[J(a("div",{class:["v-window-item",l.selectedClass.value]},[B.value&&((_=t.default)==null?void 0:_.call(t))]),[[Ou,l.isSelected.value]])]})}),{}}}),G4=x({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:T,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:u=>u>0},modelValue:null,progress:[Boolean,String],showArrows:{type:[Boolean,String],default:!0,validator:u=>typeof u=="boolean"||u==="hover"},verticalDelimiters:[Boolean,String]},emits:{"update:modelValue":u=>!0},setup(u,n){let{slots:t}=n;const e=zu(u,"modelValue"),{t:l}=vu(),o=k();let s=-1;L(e,r),L(()=>u.interval,r),L(()=>u.cycle,d=>{d?r():window.clearTimeout(s)}),Wu(i);function i(){!u.cycle||!o.value||(s=window.setTimeout(o.value.group.next,+u.interval>0?+u.interval:6e3))}function r(){window.clearTimeout(s),window.requestAnimationFrame(i)}return F(()=>a(p4,{ref:o,modelValue:e.value,"onUpdate:modelValue":d=>e.value=d,class:["v-carousel",{"v-carousel--hide-delimiter-background":u.hideDelimiterBackground,"v-carousel--vertical-delimiters":u.verticalDelimiters}],style:{height:U(u.height)},continuous:!0,mandatory:"force",showArrows:u.showArrows},{default:t.default,additional:d=>{let{group:m}=d;return a(fu,null,[!u.hideDelimiters&&a("div",{class:"v-carousel__controls",style:{left:u.verticalDelimiters==="left"&&u.verticalDelimiters?0:"auto",right:u.verticalDelimiters==="right"?0:"auto"}},[m.items.value.length>0&&a(O,{defaults:{VBtn:{color:u.color,icon:u.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[m.items.value.map((y,f)=>{const B={"aria-label":l("$vuetify.carousel.ariaLabel.delimiter",f+1,m.items.value.length),class:[m.isSelected(y.id)&&"v-btn--active"],onClick:()=>m.select(y.id,!0)};return t.item?t.item({props:B,item:y}):a(w,Uu(y,B),null)})]})]),u.progress&&a(F4,{class:"v-carousel__progress",color:typeof u.progress=="string"?u.progress:void 0,modelValue:(m.getItemIndex(e.value)+1)/m.items.value.length*100},null)])},prev:t.prev,next:t.next})),{}}}),z4=x({name:"VCarouselItem",inheritAttrs:!1,props:{value:null},setup(u,n){let{slots:t,attrs:e}=n;F(()=>a(O4,{class:"v-carousel-item",value:u.value},{default:()=>[a(I,e,t)]}))}});const Z=["sm","md","lg","xl","xxl"],Bu=(()=>Z.reduce((u,n)=>(u[n]={type:[Boolean,String,Number],default:!1},u),{}))(),Du=(()=>Z.reduce((u,n)=>(u["offset"+K(n)]={type:[String,Number],default:null},u),{}))(),bu=(()=>Z.reduce((u,n)=>(u["order"+K(n)]={type:[String,Number],default:null},u),{}))(),su={col:Object.keys(Bu),offset:Object.keys(Du),order:Object.keys(bu)};function W4(u,n,t){let e=u;if(!(t==null||t===!1)){if(n){const l=n.replace(u,"");e+=`-${l}`}return u==="col"&&(e="v-"+e),u==="col"&&(t===""||t===!0)||(e+=`-${t}`),e.toLowerCase()}}const U4=["auto","start","end","center","baseline","stretch"],z=x({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Bu,offset:{type:[String,Number],default:null},...Du,order:{type:[String,Number],default:null},...bu,alignSelf:{type:String,default:null,validator:u=>U4.includes(u)},...G()},setup(u,n){let{slots:t}=n;const e=E(()=>{const l=[];let o;for(o in su)su[o].forEach(i=>{const r=u[i],d=W4(o,i,r);d&&l.push(d)});const s=l.some(i=>i.startsWith("v-col-"));return l.push({"v-col":!s||!u.cols,[`v-col-${u.cols}`]:u.cols,[`offset-${u.offset}`]:u.offset,[`order-${u.order}`]:u.order,[`align-self-${u.alignSelf}`]:u.alignSelf}),l});return()=>{var l;return mu(u.tag,{class:e.value},(l=t.default)==null?void 0:l.call(t))}}}),q4=["sm","md","lg","xl","xxl"],uu=["start","end","center"],xu=["space-between","space-around","space-evenly"];function eu(u,n){return q4.reduce((t,e)=>(t[u+K(e)]=n(),t),{})}const J4=[...uu,"baseline","stretch"],Au=u=>J4.includes(u),ku=eu("align",()=>({type:String,default:null,validator:Au})),K4=[...uu,...xu],wu=u=>K4.includes(u),Fu=eu("justify",()=>({type:String,default:null,validator:wu})),Q4=[...uu,...xu,"stretch"],Su=u=>Q4.includes(u),Vu=eu("alignContent",()=>({type:String,default:null,validator:Su})),ou={align:Object.keys(ku),justify:Object.keys(Fu),alignContent:Object.keys(Vu)},Z4={align:"align",justify:"justify",alignContent:"align-content"};function ue(u,n,t){let e=Z4[u];if(t!=null){if(n){const l=n.replace(u,"");e+=`-${l}`}return e+=`-${t}`,e.toLowerCase()}}const W=x({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Au},...ku,justify:{type:String,default:null,validator:wu},...Fu,alignContent:{type:String,default:null,validator:Su},...Vu,...G()},setup(u,n){let{slots:t}=n;const e=E(()=>{const l=[];let o;for(o in ou)ou[o].forEach(s=>{const i=u[s],r=ue(o,s,i);r&&l.push(r)});return l.push({"v-row--no-gutters":u.noGutters,"v-row--dense":u.dense,[`align-${u.align}`]:u.align,[`justify-${u.justify}`]:u.justify,[`align-content-${u.alignContent}`]:u.alignContent}),l});return()=>{var l;return mu(u.tag,{class:["v-row",e.value]},(l=t.default)==null?void 0:l.call(t))}}}),P=u=>(Qu("data-v-2ee9bd6f"),u=u(),Zu(),u),ee={class:"main-security"},te={class:"main-security__img",style:{"min-height":"calc(100vh - 180px)",display:"flex","flex-direction":"column","justify-content":"flex-end"}},ne={class:"pb-8"},ae={class:"container-main"},le={style:{background:"#3c435c","padding-bottom":"100px"}},se={class:"fill-height container"},oe=P(()=>v("div",{class:"why-me ptb-100",style:{color:"#ffff"}},"\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438",-1)),ie={style:{background:"#f5f5f5"}},ce={class:"fill-height container"},de=P(()=>v("div",{class:"why-me ptb-100"},"\u041E \u043D\u0430\u0441",-1)),re=P(()=>v("div",{style:{"padding-bottom":"100px"},class:"why-me__title"}," \u041C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0435 \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432\u043E\u0442 \u0443\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442 \u0438 \u0441\u0440\u0435\u0434\u0438 \u043D\u0430\u0448\u0438\u0445 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0435\u0441\u0442\u044C \u0441\u0435\u0442\u0435\u0432\u044B\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B, \u0444\u0438\u043B\u0438\u0430\u043B\u044B \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0431\u0430\u043D\u043A\u043E\u0432, \u043E\u0444\u0438\u0441\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u0438. \u041D\u0430\u0448 \u043E\u043F\u044B\u0442, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0438\u0445 \u043E\u0442\u0437\u044B\u0432\u044B \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0441\u0430\u043C\u0438 \u0437\u0430 \u0441\u0435\u0431\u044F. \u041C\u044B \u043D\u0435 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0438\u0431\u044B\u0432\u0430\u0435\u043C \u043F\u043E \u043F\u0435\u0440\u0432\u043E\u043C\u0443 \u0437\u0432\u043E\u043D\u043A\u0443 \u0438 \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u043D\u043E \u043E\u0441\u043D\u0430\u0449\u0435\u043D\u0430, \u043C\u044B \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u043E\u043C, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u044B, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0445 \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0439 \u0438 \xAB\u0422\u0440\u0435\u0432\u043E\u0436\u043D\u044B\u0445 \u043A\u043D\u043E\u043F\u043E\u043A\xBB. ",-1)),ve={style:{"padding-bottom":"100px"}},fe={style:{background:"#f5f5f5"},class:"ptb-100"},me={class:"fill-height container"},he=P(()=>v("div",{class:"company__title"},"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B",-1)),ge=P(()=>v("div",{class:"pl-2 mt-4"},"\u0421 \u043A\u0430\u043A\u0438\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438 \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C",-1)),_e={class:"list-column"},Ee={class:"list-column__field"},ye={class:"list-column__field"},Ce={class:"list-column__field"},Be={class:"list-column__field"},De={style:{background:"#f5f5f5"}},be=hu({__name:"Main",setup(u){const n=[59.952628,30.445917],t=["fullscreenControl"],e=[{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438, \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",img:M4},{title:"\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432",text:"\u0416/\u0434 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u043C, \u0441\u0430\u043C\u043E\u043B\u0435\u0442\u043E\u043C, \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0444\u0443\u0440",img:Y},{title:"\u041B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u042F\u0432\u043D\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0441\u043A\u0440\u044B\u0442\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0442\u0435\u043B\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u0438",img:Y},{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439",text:"\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",img:N4},{title:"\u041F\u043E\u0447\u0430\u0441\u043E\u0432\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0441\u0443\u0442\u043A\u0438, \u043E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0434\u0435\u043D\u044C: \u043D\u0430 \u043D\u043E\u0447\u044C",img:Y},{title:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E \u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0443 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",img:Y}];return(l,o)=>(q(),tu("div",ee,[v("div",te,[v("div",ne,[v("div",ae,[a(H,{class:"pl-4"},{default:c(()=>[a(w,{style:{"font-size":"36px","font-weight":"600"},size:"x-large",variant:"outlined",color:"white"},{default:c(()=>[D("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ")]),_:1})]),_:1})])])]),v("div",le,[v("div",se,[oe,a(W,{"no-gutters":""},{default:c(()=>[(q(),tu(fu,null,qu(e,(s,i)=>a(z,{key:i,cols:"6",sm:"4"},{default:c(()=>[a(b,{class:"ma-5","max-width":"400"},{default:c(()=>[a(Eu,null,{default:c(()=>[D(nu(s.title),1)]),_:2},1024),a(X,null,{default:c(()=>[D(nu(s.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])]),v("div",ie,[v("div",ce,[de,re,v("div",ve,[a(b,{variant:"tonal"},{default:c(()=>[a(W,{"no-gutters":"",justify:"space-around"},{default:c(()=>[a(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:c(()=>[a(lu,{style:{"font-size":"200px"},icon:"mdi-shield-account"}),a(X,{class:"why-me__text"},{default:c(()=>[D(" 100 ")]),_:1}),a(H,null,{default:c(()=>[a(w,null,{default:c(()=>[D("\u0428\u0422\u0410\u0422 \u041A\u0412\u0410\u041B\u0418\u0424\u0418\u0426\u0418\u0420\u041E\u0412\u0410\u041D\u041D\u042B\u0425 \u0421\u041E\u0422\u0420\u0423\u0414\u041D\u0418\u041A\u041E\u0412")]),_:1})]),_:1})]),_:1}),a(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:c(()=>[a(lu,{style:{"font-size":"200px"},icon:"mdi-domain"}),a(X,{class:"why-me__text"},{default:c(()=>[D(" 20 ")]),_:1}),a(H,null,{default:c(()=>[a(w,null,{default:c(()=>[D("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u0430 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0438")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])]),v("div",fe,[v("div",me,[a(W,{"no-gutters":""},{default:c(()=>[a(z,null,{default:c(()=>[he,ge,a(w,{color:"error",size:"x-large",class:"mt-6"},{default:c(()=>[D("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")]),_:1})]),_:1}),a(z,null,{default:c(()=>[a(G4,{"hide-delimiters":""},{default:c(()=>[a(z4,null,{default:c(()=>[v("div",_e,[v("div",Ee,[a(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:c(()=>[a(I,{src:V(p),width:"300"},null,8,["src"])]),_:1})]),v("div",ye,[a(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:c(()=>[a(I,{src:V(p),width:"300"},null,8,["src"])]),_:1})]),v("div",Ce,[a(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:c(()=>[a(I,{src:V(p),width:"300"},null,8,["src"])]),_:1})]),v("div",Be,[a(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:c(()=>[a(I,{src:V(p),width:"300"},null,8,["src"])]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})])]),v("div",De,[a(V(Ku),{coordinates:n,controls:t,zoom:18},{default:c(()=>[a(V(Ju),{coordinates:n,"marker-id":123})]),_:1})])]))}});const xe=(u,n)=>{const t=u.__vccOpts||u;for(const[e,l]of n)t[e]=l;return t},Ae=xe(be,[["__scopeId","data-v-2ee9bd6f"]]),Fe=hu({__name:"Home",setup(u){return(n,t)=>(q(),u4(Ae))}});export{Fe as default};
