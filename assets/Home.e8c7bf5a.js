import{ai as cu,m as A,y as Mu,u as n,I as P,v as ru,x as du,c as E,C as K,G as vu,t as Ru,W as Yu,aj as fu,r as w,F as T,d as Hu,p as Xu,i as Ou,D as Gu,b as q,a3 as zu,A as Wu,o as Uu,Q as mu,B as qu,Z as Q,q as hu,J as _u,U as z,K as J,N as nu,S as v,M as i,V as D,O as Ju,P as au,X as b,ak as Ku,al as Qu,am as Zu,an as u4,L as e4}from"./index.e38cf425.js";import{a as S,k as Z,l as gu,V as O,w as lu,R as t4,b as n4,n as a4,c as l4,A as s4,B as o4,C as i4,d as c4,o as r4,m as G,p as d4,f as v4,r as f4,s as m4,t as h4,g as _4,D as g4,E as E4,F as y4,h as C4,q as B4,i as I,L as D4,v as b4,G as x4,j as F,H as A4,I as k4,z as w4,M as F4,J as S4,x as su}from"./ssrBoot.ba225bf6.js";const V4=u=>{const{touchstartX:a,touchendX:t,touchstartY:e,touchendY:l}=u,o=.5,s=16;u.offsetX=t-a,u.offsetY=l-e,Math.abs(u.offsetY)<o*Math.abs(u.offsetX)&&(u.left&&t<a-s&&u.left(u),u.right&&t>a+s&&u.right(u)),Math.abs(u.offsetX)<o*Math.abs(u.offsetY)&&(u.up&&l<e-s&&u.up(u),u.down&&l>e+s&&u.down(u))};function I4(u,a){var t;const e=u.changedTouches[0];a.touchstartX=e.clientX,a.touchstartY=e.clientY,(t=a.start)==null||t.call(a,{originalEvent:u,...a})}function $4(u,a){var t;const e=u.changedTouches[0];a.touchendX=e.clientX,a.touchendY=e.clientY,(t=a.end)==null||t.call(a,{originalEvent:u,...a}),V4(a)}function L4(u,a){var t;const e=u.changedTouches[0];a.touchmoveX=e.clientX,a.touchmoveY=e.clientY,(t=a.move)==null||t.call(a,{originalEvent:u,...a})}function T4(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:u.left,right:u.right,up:u.up,down:u.down,start:u.start,move:u.move,end:u.end};return{touchstart:t=>I4(t,a),touchend:t=>$4(t,a),touchmove:t=>L4(t,a)}}function P4(u,a){var d,r;var t;const e=a.value,l=e!=null&&e.parent?u.parentElement:u,o=(d=e==null?void 0:e.options)!=null?d:{passive:!0},s=(t=a.instance)==null?void 0:t.$.uid;if(!l||!s)return;const c=T4(a.value);l._touchHandlers=(r=l._touchHandlers)!=null?r:Object.create(null),l._touchHandlers[s]=c,cu(c).forEach(f=>{l.addEventListener(f,c[f],o)})}function p4(u,a){var t,e;const l=(t=a.value)!=null&&t.parent?u.parentElement:u,o=(e=a.instance)==null?void 0:e.$.uid;if(!(l!=null&&l._touchHandlers)||!o)return;const s=l._touchHandlers[o];cu(s).forEach(c=>{l.removeEventListener(c,s[c])}),delete l._touchHandlers[o]}const Eu={mounted:P4,unmounted:p4},j4=Eu,N4="/sity_sokol/assets/lic_1.fe363a7f.png",M4="/sity_sokol/assets/lic_2.a08eaaee.png",R="/sity_sokol/assets/cards_img_3.9ffa5c06.svg",R4="/sity_sokol/assets/camera_2.0fbd1be3.jpg",Y4="/sity_sokol/assets/fon.3a1b3243.jpg",Y="/sity_sokol/assets/delko.7ecd34ff.png";const H=A({name:"VCardActions",setup(u,a){let{slots:t}=a;return Mu({VBtn:{variant:"text"}}),S(()=>{var e;return n("div",{class:"v-card-actions"},[(e=t.default)==null?void 0:e.call(t)])}),{}}}),H4=Z("v-card-subtitle"),yu=Z("v-card-title"),X4=A({name:"VCardItem",props:{appendAvatar:String,appendIcon:P,prependAvatar:String,prependIcon:P,subtitle:String,title:String,...gu()},setup(u,a){let{slots:t}=a;return S(()=>{var e,l,o,s,c;const d=!!(u.prependAvatar||u.prependIcon||t.prepend),r=!!(u.appendAvatar||u.appendIcon||t.append),f=!!(u.title||t.title),y=!!(u.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[d&&n(O,{key:"prepend",defaults:{VAvatar:{density:u.density,icon:u.prependIcon,image:u.prependAvatar},VIcon:{density:u.density,icon:u.prependIcon}}},{default:()=>{var m;return[n("div",{class:"v-card-item__prepend"},[(m=(e=t.prepend)==null?void 0:e.call(t))!=null?m:n(lu,null,null)])]}}),n("div",{class:"v-card-item__content"},[f&&n(yu,{key:"title"},{default:()=>{var m;return[(m=(l=t.title)==null?void 0:l.call(t))!=null?m:u.title]}}),y&&n(H4,{key:"subtitle"},{default:()=>{var m;return[(m=(o=t.subtitle)==null?void 0:o.call(t))!=null?m:u.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),r&&n(O,{key:"append",defaults:{VAvatar:{density:u.density,icon:u.appendIcon,image:u.appendAvatar},VIcon:{density:u.density,icon:u.appendIcon}}},{default:()=>{var m;return[n("div",{class:"v-card-item__append"},[(m=(c=t.append)==null?void 0:c.call(t))!=null?m:n(lu,null,null)])]}})])}),{}}}),X=Z("v-card-text"),x=A({name:"VCard",directives:{Ripple:t4},props:{appendAvatar:String,appendIcon:P,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:P,ripple:Boolean,subtitle:String,text:String,title:String,...ru(),...n4(),...gu(),...a4(),...l4(),...s4(),...o4(),...i4(),...c4(),...r4(),...G(),...d4({variant:"elevated"})},setup(u,a){let{attrs:t,slots:e}=a;const{themeClasses:l}=du(u),{borderClasses:o}=v4(u),{colorClasses:s,colorStyles:c,variantClasses:d}=f4(u),{densityClasses:r}=m4(u),{dimensionStyles:f}=h4(u),{elevationClasses:y}=_4(u),{loaderClasses:m}=g4(u),{locationStyles:B}=E4(u),{positionClasses:g}=y4(u),{roundedClasses:p}=C4(u),k=B4(u,t),j=E(()=>u.link!==!1&&k.isLink.value),V=E(()=>!u.disabled&&u.link!==!1&&(u.link||k.isClickable.value));return S(()=>{var N,h,_;const C=j.value?"a":u.tag,M=!!(e.title||u.title),$u=!!(e.subtitle||u.subtitle),Lu=M||$u,Tu=!!(e.append||u.appendAvatar||u.appendIcon),Pu=!!(e.prepend||u.prependAvatar||u.prependIcon),pu=!!(e.image||u.image),ju=Lu||Pu||Tu,Nu=!!(e.text||u.text);return K(n(C,{class:["v-card",{"v-card--disabled":u.disabled,"v-card--flat":u.flat,"v-card--hover":u.hover&&!(u.disabled||u.flat),"v-card--link":V.value},l.value,o.value,s.value,r.value,y.value,m.value,g.value,p.value,d.value],style:[c.value,f.value,B.value],href:k.href.value,onClick:V.value&&k.navigate,tabindex:u.disabled?-1:void 0},{default:()=>[pu&&n(O,{key:"image",defaults:{VImg:{cover:!0,src:u.image}}},{default:()=>{var L;return[n("div",{class:"v-card__image"},[(L=(N=e.image)==null?void 0:N.call(e))!=null?L:n(I,null,null)])]}}),n(D4,{name:"v-card",active:!!u.loading,color:typeof u.loading=="boolean"?void 0:u.loading},{default:e.loader}),ju&&n(X4,{key:"item",prependAvatar:u.prependAvatar,prependIcon:u.prependIcon,title:u.title,subtitle:u.subtitle,appendAvatar:u.appendAvatar,appendIcon:u.appendIcon},{default:e.item,prepend:e.prepend,title:e.title,subtitle:e.subtitle,append:e.append}),Nu&&n(X,{key:"text"},{default:()=>{var L;return[(L=(h=e.text)==null?void 0:h.call(e))!=null?L:u.text]}}),(_=e.default)==null?void 0:_.call(e),e.actions&&n(H,null,{default:e.actions}),b4(V.value,"v-card")]}),[[vu("ripple"),V.value]])}),{}}});const Cu=Symbol.for("vuetify:v-window"),Bu=Symbol.for("vuetify:v-window-group"),O4=Ru()({name:"VWindow",directives:{Touch:Eu},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:u=>typeof u=="boolean"||u==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...G(),...ru()},emits:{"update:modelValue":u=>!0},setup(u,a){let{slots:t}=a;const{themeClasses:e}=du(u),{isRtl:l}=Yu(),{t:o}=fu(),s=x4(u,Bu),c=w(),d=E(()=>l.value?!u.reverse:u.reverse),r=w(!1),f=E(()=>{const h=u.direction==="vertical"?"y":"x",C=(d.value?!r.value:r.value)?"-reverse":"";return`v-window-${h}${C}-transition`}),y=w(0),m=w(void 0),B=E(()=>s.items.value.findIndex(h=>s.selected.value.includes(h.id)));T(B,(h,_)=>{const C=s.items.value.length,M=C-1;C<=2?r.value=h<_:h===M&&_===0?r.value=!0:h===0&&_===M?r.value=!1:r.value=h<_}),Hu(Cu,{transition:f,isReversed:r,transitionCount:y,transitionHeight:m,rootRef:c});const g=E(()=>u.continuous||B.value!==0),p=E(()=>u.continuous||B.value!==s.items.value.length-1);function k(){g.value&&s.prev()}function j(){p.value&&s.next()}const V=E(()=>{const h=[],_={icon:l.value?u.nextIcon:u.prevIcon,class:`v-window__${d.value?"right":"left"}`,onClick:s.prev,ariaLabel:o("$vuetify.carousel.prev")};h.push(g.value?t.prev?t.prev({props:_}):n(F,_,null):n("div",null,null));const C={icon:l.value?u.prevIcon:u.nextIcon,class:`v-window__${d.value?"left":"right"}`,onClick:s.next,ariaLabel:o("$vuetify.carousel.next")};return h.push(p.value?t.next?t.next({props:C}):n(F,C,null):n("div",null,null)),h}),N=E(()=>u.touch===!1?u.touch:{...{left:()=>{d.value?k():j()},right:()=>{d.value?j():k()},start:_=>{let{originalEvent:C}=_;C.stopPropagation()}},...u.touch===!0?{}:u.touch});return S(()=>{var h,_;return K(n(u.tag,{ref:c,class:["v-window",{"v-window--show-arrows-on-hover":u.showArrows==="hover"},e.value]},{default:()=>[n("div",{class:"v-window__container",style:{height:m.value}},[(h=t.default)==null?void 0:h.call(t,{group:s}),u.showArrows!==!1&&n("div",{class:"v-window__controls"},[V.value])]),(_=t.additional)==null?void 0:_.call(t,{group:s})]}),[[vu("touch"),N.value]])}),{group:s}}}),G4=Xu({eager:Boolean},"lazy");function z4(u,a){const t=w(!1),e=E(()=>t.value||u.eager||a.value);T(a,()=>t.value=!0);function l(){u.eager||(t.value=!1)}return{isBooted:t,hasContent:e,onAfterLeave:l}}const W4=A({name:"VWindowItem",directives:{Touch:j4},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...A4(),...G4()},emits:{"group:selected":u=>!0},setup(u,a){let{slots:t}=a;const e=Ou(Cu),l=k4(u,Bu),{isBooted:o}=w4();if(!e||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=w(!1),c=E(()=>e.isReversed.value?u.reverseTransition!==!1:u.transition!==!1);function d(){!s.value||!e||(s.value=!1,e.transitionCount.value>0&&(e.transitionCount.value-=1,e.transitionCount.value===0&&(e.transitionHeight.value=void 0)))}function r(){if(!(s.value||!e)){if(s.value=!0,e.transitionCount.value===0){var g;e.transitionHeight.value=q((g=e.rootRef.value)==null?void 0:g.clientHeight)}e.transitionCount.value+=1}}function f(){d()}function y(g){!s.value||zu(()=>{!c.value||!s.value||!e||(e.transitionHeight.value=q(g.clientHeight))})}const m=E(()=>{const g=e.isReversed.value?u.reverseTransition:u.transition;return c.value?{name:typeof g!="string"?e.transition.value:g,onBeforeEnter:r,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:r,onAfterLeave:d,onLeaveCancelled:f,onEnter:y}:!1}),{hasContent:B}=z4(u,l.isSelected);return S(()=>{var g;return n(F4,{transition:o.value&&m.value},{default:()=>[K(n("div",{class:["v-window-item",l.selectedClass.value]},[B.value&&((g=t.default)==null?void 0:g.call(t))]),[[Gu,l.isSelected.value]])]})}),{}}}),U4=A({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:P,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:u=>u>0},modelValue:null,progress:[Boolean,String],showArrows:{type:[Boolean,String],default:!0,validator:u=>typeof u=="boolean"||u==="hover"},verticalDelimiters:[Boolean,String]},emits:{"update:modelValue":u=>!0},setup(u,a){let{slots:t}=a;const e=Wu(u,"modelValue"),{t:l}=fu(),o=w();let s=-1;T(e,d),T(()=>u.interval,d),T(()=>u.cycle,r=>{r?d():window.clearTimeout(s)}),Uu(c);function c(){!u.cycle||!o.value||(s=window.setTimeout(o.value.group.next,+u.interval>0?+u.interval:6e3))}function d(){window.clearTimeout(s),window.requestAnimationFrame(c)}return S(()=>n(O4,{ref:o,modelValue:e.value,"onUpdate:modelValue":r=>e.value=r,class:["v-carousel",{"v-carousel--hide-delimiter-background":u.hideDelimiterBackground,"v-carousel--vertical-delimiters":u.verticalDelimiters}],style:{height:q(u.height)},continuous:!0,mandatory:"force",showArrows:u.showArrows},{default:t.default,additional:r=>{let{group:f}=r;return n(mu,null,[!u.hideDelimiters&&n("div",{class:"v-carousel__controls",style:{left:u.verticalDelimiters==="left"&&u.verticalDelimiters?0:"auto",right:u.verticalDelimiters==="right"?0:"auto"}},[f.items.value.length>0&&n(O,{defaults:{VBtn:{color:u.color,icon:u.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[f.items.value.map((y,m)=>{const B={"aria-label":l("$vuetify.carousel.ariaLabel.delimiter",m+1,f.items.value.length),class:[f.isSelected(y.id)&&"v-btn--active"],onClick:()=>f.select(y.id,!0)};return t.item?t.item({props:B,item:y}):n(F,qu(y,B),null)})]})]),u.progress&&n(S4,{class:"v-carousel__progress",color:typeof u.progress=="string"?u.progress:void 0,modelValue:(f.getItemIndex(e.value)+1)/f.items.value.length*100},null)])},prev:t.prev,next:t.next})),{}}}),q4=A({name:"VCarouselItem",inheritAttrs:!1,props:{value:null},setup(u,a){let{slots:t,attrs:e}=a;S(()=>n(W4,{class:"v-carousel-item",value:u.value},{default:()=>[n(I,e,t)]}))}});const uu=["sm","md","lg","xl","xxl"],Du=(()=>uu.reduce((u,a)=>(u[a]={type:[Boolean,String,Number],default:!1},u),{}))(),bu=(()=>uu.reduce((u,a)=>(u["offset"+Q(a)]={type:[String,Number],default:null},u),{}))(),xu=(()=>uu.reduce((u,a)=>(u["order"+Q(a)]={type:[String,Number],default:null},u),{}))(),ou={col:Object.keys(Du),offset:Object.keys(bu),order:Object.keys(xu)};function J4(u,a,t){let e=u;if(!(t==null||t===!1)){if(a){const l=a.replace(u,"");e+=`-${l}`}return u==="col"&&(e="v-"+e),u==="col"&&(t===""||t===!0)||(e+=`-${t}`),e.toLowerCase()}}const K4=["auto","start","end","center","baseline","stretch"],W=A({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Du,offset:{type:[String,Number],default:null},...bu,order:{type:[String,Number],default:null},...xu,alignSelf:{type:String,default:null,validator:u=>K4.includes(u)},...G()},setup(u,a){let{slots:t}=a;const e=E(()=>{const l=[];let o;for(o in ou)ou[o].forEach(c=>{const d=u[c],r=J4(o,c,d);r&&l.push(r)});const s=l.some(c=>c.startsWith("v-col-"));return l.push({"v-col":!s||!u.cols,[`v-col-${u.cols}`]:u.cols,[`offset-${u.offset}`]:u.offset,[`order-${u.order}`]:u.order,[`align-self-${u.alignSelf}`]:u.alignSelf}),l});return()=>{var l;return hu(u.tag,{class:e.value},(l=t.default)==null?void 0:l.call(t))}}}),Q4=["sm","md","lg","xl","xxl"],eu=["start","end","center"],Au=["space-between","space-around","space-evenly"];function tu(u,a){return Q4.reduce((t,e)=>(t[u+Q(e)]=a(),t),{})}const Z4=[...eu,"baseline","stretch"],ku=u=>Z4.includes(u),wu=tu("align",()=>({type:String,default:null,validator:ku})),ue=[...eu,...Au],Fu=u=>ue.includes(u),Su=tu("justify",()=>({type:String,default:null,validator:Fu})),ee=[...eu,...Au,"stretch"],Vu=u=>ee.includes(u),Iu=tu("alignContent",()=>({type:String,default:null,validator:Vu})),iu={align:Object.keys(wu),justify:Object.keys(Su),alignContent:Object.keys(Iu)},te={align:"align",justify:"justify",alignContent:"align-content"};function ne(u,a,t){let e=te[u];if(t!=null){if(a){const l=a.replace(u,"");e+=`-${l}`}return e+=`-${t}`,e.toLowerCase()}}const U=A({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ku},...wu,justify:{type:String,default:null,validator:Fu},...Su,alignContent:{type:String,default:null,validator:Vu},...Iu,...G()},setup(u,a){let{slots:t}=a;const e=E(()=>{const l=[];let o;for(o in iu)iu[o].forEach(s=>{const c=u[s],d=ne(o,s,c);d&&l.push(d)});return l.push({"v-row--no-gutters":u.noGutters,"v-row--dense":u.dense,[`align-${u.align}`]:u.align,[`justify-${u.justify}`]:u.justify,[`align-content-${u.alignContent}`]:u.alignContent}),l});return()=>{var l;return hu(u.tag,{class:["v-row",e.value]},(l=t.default)==null?void 0:l.call(t))}}}),$=u=>(Zu("data-v-f7e9b1af"),u=u(),u4(),u),ae={class:"main-security"},le={class:"main-security__img",style:{"min-height":"calc(100vh - 180px)",display:"flex","flex-direction":"column","justify-content":"flex-end"}},se={class:"pb-8"},oe={class:"container-main"},ie={style:{background:"#3c435c","padding-bottom":"100px"}},ce={class:"fill-height container"},re=$(()=>v("div",{class:"why-me ptb-100",style:{color:"#ffff"}},"\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438",-1)),de={style:{background:"#f5f5f5"}},ve={class:"fill-height container"},fe=$(()=>v("div",{class:"why-me ptb-100"},"\u041E \u043D\u0430\u0441",-1)),me=$(()=>v("div",{style:{"padding-bottom":"100px"},class:"why-me__title"}," \u041C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0435 \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432\u043E\u0442 \u0443\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442 \u0438 \u0441\u0440\u0435\u0434\u0438 \u043D\u0430\u0448\u0438\u0445 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0435\u0441\u0442\u044C \u0441\u0435\u0442\u0435\u0432\u044B\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B, \u0444\u0438\u043B\u0438\u0430\u043B\u044B \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0431\u0430\u043D\u043A\u043E\u0432, \u043E\u0444\u0438\u0441\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u0438. \u041D\u0430\u0448 \u043E\u043F\u044B\u0442, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0438\u0445 \u043E\u0442\u0437\u044B\u0432\u044B \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0441\u0430\u043C\u0438 \u0437\u0430 \u0441\u0435\u0431\u044F. \u041C\u044B \u043D\u0435 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0438\u0431\u044B\u0432\u0430\u0435\u043C \u043F\u043E \u043F\u0435\u0440\u0432\u043E\u043C\u0443 \u0437\u0432\u043E\u043D\u043A\u0443 \u0438 \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u043D\u043E \u043E\u0441\u043D\u0430\u0449\u0435\u043D\u0430, \u043C\u044B \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u043E\u043C, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u044B, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0445 \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0439 \u0438 \xAB\u0422\u0440\u0435\u0432\u043E\u0436\u043D\u044B\u0445 \u043A\u043D\u043E\u043F\u043E\u043A\xBB. ",-1)),he={style:{"padding-bottom":"100px"}},_e={style:{background:"#f5f5f5"},class:"ptb-100"},ge={class:"fill-height container"},Ee=$(()=>v("div",{class:"company__title"},"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B",-1)),ye=$(()=>v("div",{class:"pl-2 mt-4"},"\u0421 \u043A\u0430\u043A\u0438\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438 \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C",-1)),Ce={class:"list-column"},Be={class:"list-column__field"},De={class:"list-column__field"},be={class:"list-column__field"},xe={class:"list-column__field"},Ae=$(()=>v("div",{class:"company__title ptb-100"},"\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438",-1)),ke={style:{background:"#f5f5f5"}},we=_u({__name:"Main",setup(u){const a=[59.952628,30.445917],t=["fullscreenControl"],e=[{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438, \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",img:Y4},{title:"\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432",text:"\u0416/\u0434 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u043C, \u0441\u0430\u043C\u043E\u043B\u0435\u0442\u043E\u043C, \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0444\u0443\u0440",img:R},{title:"\u041B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u042F\u0432\u043D\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0441\u043A\u0440\u044B\u0442\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0442\u0435\u043B\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u0438",img:R},{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439",text:"\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",img:R4},{title:"\u041F\u043E\u0447\u0430\u0441\u043E\u0432\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0441\u0443\u0442\u043A\u0438, \u043E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0434\u0435\u043D\u044C: \u043D\u0430 \u043D\u043E\u0447\u044C",img:R},{title:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E \u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0443 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",img:R}];return(l,o)=>{const s=z("n-image"),c=z("n-space"),d=z("n-image-group");return J(),nu("div",ae,[v("div",le,[v("div",se,[v("div",oe,[n(H,{class:"pl-4"},{default:i(()=>[n(F,{style:{"font-size":"36px","font-weight":"600"},size:"x-large",variant:"outlined",color:"white"},{default:i(()=>[D("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ")]),_:1})]),_:1})])])]),v("div",ie,[v("div",ce,[re,n(U,{"no-gutters":""},{default:i(()=>[(J(),nu(mu,null,Ju(e,(r,f)=>n(W,{key:f,cols:"6",sm:"4"},{default:i(()=>[n(x,{class:"ma-5","max-width":"400"},{default:i(()=>[n(yu,null,{default:i(()=>[D(au(r.title),1)]),_:2},1024),n(X,null,{default:i(()=>[D(au(r.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])]),v("div",de,[v("div",ve,[fe,me,v("div",he,[n(x,{variant:"tonal"},{default:i(()=>[n(U,{"no-gutters":"",justify:"space-around"},{default:i(()=>[n(x,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(su,{style:{"font-size":"200px"},icon:"mdi-shield-account"}),n(X,{class:"why-me__text"},{default:i(()=>[D(" 100 ")]),_:1}),n(H,null,{default:i(()=>[n(F,null,{default:i(()=>[D("\u0428\u0422\u0410\u0422 \u041A\u0412\u0410\u041B\u0418\u0424\u0418\u0426\u0418\u0420\u041E\u0412\u0410\u041D\u041D\u042B\u0425 \u0421\u041E\u0422\u0420\u0423\u0414\u041D\u0418\u041A\u041E\u0412")]),_:1})]),_:1})]),_:1}),n(x,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(su,{style:{"font-size":"200px"},icon:"mdi-domain"}),n(X,{class:"why-me__text"},{default:i(()=>[D(" 20 ")]),_:1}),n(H,null,{default:i(()=>[n(F,null,{default:i(()=>[D("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u0430 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0438")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])]),v("div",_e,[v("div",ge,[n(U,{"no-gutters":""},{default:i(()=>[n(W,null,{default:i(()=>[Ee,ye,n(F,{color:"error",size:"x-large",class:"mt-6"},{default:i(()=>[D("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")]),_:1})]),_:1}),n(W,null,{default:i(()=>[n(U4,{"hide-delimiters":""},{default:i(()=>[n(q4,null,{default:i(()=>[v("div",Ce,[v("div",Be,[n(x,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(I,{src:b(Y),width:"300"},null,8,["src"])]),_:1})]),v("div",De,[n(x,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(I,{src:b(Y),width:"300"},null,8,["src"])]),_:1})]),v("div",be,[n(x,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(I,{src:b(Y),width:"300"},null,8,["src"])]),_:1})]),v("div",xe,[n(x,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(I,{src:b(Y),width:"300"},null,8,["src"])]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1}),Ae,n(d,null,{default:i(()=>[n(c,null,{default:i(()=>[n(s,{width:"500",src:b(N4)},null,8,["src"]),n(s,{width:"500",src:b(M4)},null,8,["src"])]),_:1})]),_:1})])]),v("div",ke,[n(b(Qu),{coordinates:a,controls:t,zoom:18},{default:i(()=>[n(b(Ku),{coordinates:a,"marker-id":123})]),_:1})])])}}});const Fe=(u,a)=>{const t=u.__vccOpts||u;for(const[e,l]of a)t[e]=l;return t},Se=Fe(we,[["__scopeId","data-v-f7e9b1af"]]),$e=_u({__name:"Home",setup(u){return(a,t)=>(J(),e4(Se))}});export{$e as default};