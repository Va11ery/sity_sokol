import{L as Mu,a as Ru}from"./lic_2.687b8210.js";import{ai as cu,x as A,s as Yu,m as n,R as P,n as ru,q as du,c as E,H as K,W as vu,l as Hu,M as Xu,aj as fu,r as w,V as T,d as zu,p as Gu,i as Ou,S as Wu,b as q,a0 as Uu,v as qu,o as Ju,G as mu,w as Ku,Y as Q,P as hu,y as _u,K as O,z as J,C as nu,J as v,B as i,E as D,D as Qu,F as au,N as x,ak as Zu,al as u4,am as e4,an as t4,A as n4}from"./index.d14c520b.js";import{m as a4,b as l4,c as s4,d as o4,e as i4,f as c4,L as r4,g as d4,V as S,h as v4,i as f4,a as m4,j as h4}from"./ssrBoot.ab680a20.js";import{u as F,j as Z,k as gu,V as z,i as lu,R as _4,a as g4,l as E4,b as y4,c as C4,n as B4,m as G,o as D4,e as x4,q as b4,r as A4,s as k4,f as w4,g as S4,p as F4,h as I,t as V4,M as I4,v as su}from"./VAvatar.bf498fed.js";import{_ as $4}from"./_plugin-vue_export-helper.cdc0426e.js";const L4=u=>{const{touchstartX:a,touchendX:t,touchstartY:e,touchendY:l}=u,o=.5,s=16;u.offsetX=t-a,u.offsetY=l-e,Math.abs(u.offsetY)<o*Math.abs(u.offsetX)&&(u.left&&t<a-s&&u.left(u),u.right&&t>a+s&&u.right(u)),Math.abs(u.offsetX)<o*Math.abs(u.offsetY)&&(u.up&&l<e-s&&u.up(u),u.down&&l>e+s&&u.down(u))};function T4(u,a){var t;const e=u.changedTouches[0];a.touchstartX=e.clientX,a.touchstartY=e.clientY,(t=a.start)==null||t.call(a,{originalEvent:u,...a})}function P4(u,a){var t;const e=u.changedTouches[0];a.touchendX=e.clientX,a.touchendY=e.clientY,(t=a.end)==null||t.call(a,{originalEvent:u,...a}),L4(a)}function p4(u,a){var t;const e=u.changedTouches[0];a.touchmoveX=e.clientX,a.touchmoveY=e.clientY,(t=a.move)==null||t.call(a,{originalEvent:u,...a})}function j4(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:u.left,right:u.right,up:u.up,down:u.down,start:u.start,move:u.move,end:u.end};return{touchstart:t=>T4(t,a),touchend:t=>P4(t,a),touchmove:t=>p4(t,a)}}function N4(u,a){var d,r;var t;const e=a.value,l=e!=null&&e.parent?u.parentElement:u,o=(d=e==null?void 0:e.options)!=null?d:{passive:!0},s=(t=a.instance)==null?void 0:t.$.uid;if(!l||!s)return;const c=j4(a.value);l._touchHandlers=(r=l._touchHandlers)!=null?r:Object.create(null),l._touchHandlers[s]=c,cu(c).forEach(f=>{l.addEventListener(f,c[f],o)})}function M4(u,a){var t,e;const l=(t=a.value)!=null&&t.parent?u.parentElement:u,o=(e=a.instance)==null?void 0:e.$.uid;if(!(l!=null&&l._touchHandlers)||!o)return;const s=l._touchHandlers[o];cu(s).forEach(c=>{l.removeEventListener(c,s[c])}),delete l._touchHandlers[o]}const Eu={mounted:N4,unmounted:M4},R4=Eu,R="/sity_sokol/assets/cards_img_3.9ffa5c06.svg",Y4="/sity_sokol/assets/camera_2.0fbd1be3.jpg",H4="/sity_sokol/assets/fon.3a1b3243.jpg",Y="/sity_sokol/assets/delko.7ecd34ff.png";const H=A({name:"VCardActions",setup(u,a){let{slots:t}=a;return Yu({VBtn:{variant:"text"}}),F(()=>{var e;return n("div",{class:"v-card-actions"},[(e=t.default)==null?void 0:e.call(t)])}),{}}}),X4=Z("v-card-subtitle"),yu=Z("v-card-title"),z4=A({name:"VCardItem",props:{appendAvatar:String,appendIcon:P,prependAvatar:String,prependIcon:P,subtitle:String,title:String,...gu()},setup(u,a){let{slots:t}=a;return F(()=>{var e,l,o,s,c;const d=!!(u.prependAvatar||u.prependIcon||t.prepend),r=!!(u.appendAvatar||u.appendIcon||t.append),f=!!(u.title||t.title),y=!!(u.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[d&&n(z,{key:"prepend",defaults:{VAvatar:{density:u.density,icon:u.prependIcon,image:u.prependAvatar},VIcon:{density:u.density,icon:u.prependIcon}}},{default:()=>{var m;return[n("div",{class:"v-card-item__prepend"},[(m=(e=t.prepend)==null?void 0:e.call(t))!=null?m:n(lu,null,null)])]}}),n("div",{class:"v-card-item__content"},[f&&n(yu,{key:"title"},{default:()=>{var m;return[(m=(l=t.title)==null?void 0:l.call(t))!=null?m:u.title]}}),y&&n(X4,{key:"subtitle"},{default:()=>{var m;return[(m=(o=t.subtitle)==null?void 0:o.call(t))!=null?m:u.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),r&&n(z,{key:"append",defaults:{VAvatar:{density:u.density,icon:u.appendIcon,image:u.appendAvatar},VIcon:{density:u.density,icon:u.appendIcon}}},{default:()=>{var m;return[n("div",{class:"v-card-item__append"},[(m=(c=t.append)==null?void 0:c.call(t))!=null?m:n(lu,null,null)])]}})])}),{}}}),X=Z("v-card-text"),b=A({name:"VCard",directives:{Ripple:_4},props:{appendAvatar:String,appendIcon:P,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:P,ripple:Boolean,subtitle:String,text:String,title:String,...ru(),...g4(),...gu(),...E4(),...y4(),...a4(),...l4(),...s4(),...C4(),...B4(),...G(),...D4({variant:"elevated"})},setup(u,a){let{attrs:t,slots:e}=a;const{themeClasses:l}=du(u),{borderClasses:o}=x4(u),{colorClasses:s,colorStyles:c,variantClasses:d}=b4(u),{densityClasses:r}=A4(u),{dimensionStyles:f}=k4(u),{elevationClasses:y}=w4(u),{loaderClasses:m}=o4(u),{locationStyles:B}=i4(u),{positionClasses:g}=c4(u),{roundedClasses:p}=S4(u),k=F4(u,t),j=E(()=>u.link!==!1&&k.isLink.value),V=E(()=>!u.disabled&&u.link!==!1&&(u.link||k.isClickable.value));return F(()=>{var N,h,_;const C=j.value?"a":u.tag,M=!!(e.title||u.title),$u=!!(e.subtitle||u.subtitle),Lu=M||$u,Tu=!!(e.append||u.appendAvatar||u.appendIcon),Pu=!!(e.prepend||u.prependAvatar||u.prependIcon),pu=!!(e.image||u.image),ju=Lu||Pu||Tu,Nu=!!(e.text||u.text);return K(n(C,{class:["v-card",{"v-card--disabled":u.disabled,"v-card--flat":u.flat,"v-card--hover":u.hover&&!(u.disabled||u.flat),"v-card--link":V.value},l.value,o.value,s.value,r.value,y.value,m.value,g.value,p.value,d.value],style:[c.value,f.value,B.value],href:k.href.value,onClick:V.value&&k.navigate,tabindex:u.disabled?-1:void 0},{default:()=>[pu&&n(z,{key:"image",defaults:{VImg:{cover:!0,src:u.image}}},{default:()=>{var L;return[n("div",{class:"v-card__image"},[(L=(N=e.image)==null?void 0:N.call(e))!=null?L:n(I,null,null)])]}}),n(r4,{name:"v-card",active:!!u.loading,color:typeof u.loading=="boolean"?void 0:u.loading},{default:e.loader}),ju&&n(z4,{key:"item",prependAvatar:u.prependAvatar,prependIcon:u.prependIcon,title:u.title,subtitle:u.subtitle,appendAvatar:u.appendAvatar,appendIcon:u.appendIcon},{default:e.item,prepend:e.prepend,title:e.title,subtitle:e.subtitle,append:e.append}),Nu&&n(X,{key:"text"},{default:()=>{var L;return[(L=(h=e.text)==null?void 0:h.call(e))!=null?L:u.text]}}),(_=e.default)==null?void 0:_.call(e),e.actions&&n(H,null,{default:e.actions}),V4(V.value,"v-card")]}),[[vu("ripple"),V.value]])}),{}}});const Cu=Symbol.for("vuetify:v-window"),Bu=Symbol.for("vuetify:v-window-group"),G4=Hu()({name:"VWindow",directives:{Touch:Eu},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:u=>typeof u=="boolean"||u==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...G(),...ru()},emits:{"update:modelValue":u=>!0},setup(u,a){let{slots:t}=a;const{themeClasses:e}=du(u),{isRtl:l}=Xu(),{t:o}=fu(),s=d4(u,Bu),c=w(),d=E(()=>l.value?!u.reverse:u.reverse),r=w(!1),f=E(()=>{const h=u.direction==="vertical"?"y":"x",C=(d.value?!r.value:r.value)?"-reverse":"";return`v-window-${h}${C}-transition`}),y=w(0),m=w(void 0),B=E(()=>s.items.value.findIndex(h=>s.selected.value.includes(h.id)));T(B,(h,_)=>{const C=s.items.value.length,M=C-1;C<=2?r.value=h<_:h===M&&_===0?r.value=!0:h===0&&_===M?r.value=!1:r.value=h<_}),zu(Cu,{transition:f,isReversed:r,transitionCount:y,transitionHeight:m,rootRef:c});const g=E(()=>u.continuous||B.value!==0),p=E(()=>u.continuous||B.value!==s.items.value.length-1);function k(){g.value&&s.prev()}function j(){p.value&&s.next()}const V=E(()=>{const h=[],_={icon:l.value?u.nextIcon:u.prevIcon,class:`v-window__${d.value?"right":"left"}`,onClick:s.prev,ariaLabel:o("$vuetify.carousel.prev")};h.push(g.value?t.prev?t.prev({props:_}):n(S,_,null):n("div",null,null));const C={icon:l.value?u.prevIcon:u.nextIcon,class:`v-window__${d.value?"left":"right"}`,onClick:s.next,ariaLabel:o("$vuetify.carousel.next")};return h.push(p.value?t.next?t.next({props:C}):n(S,C,null):n("div",null,null)),h}),N=E(()=>u.touch===!1?u.touch:{...{left:()=>{d.value?k():j()},right:()=>{d.value?j():k()},start:_=>{let{originalEvent:C}=_;C.stopPropagation()}},...u.touch===!0?{}:u.touch});return F(()=>{var h,_;return K(n(u.tag,{ref:c,class:["v-window",{"v-window--show-arrows-on-hover":u.showArrows==="hover"},e.value]},{default:()=>[n("div",{class:"v-window__container",style:{height:m.value}},[(h=t.default)==null?void 0:h.call(t,{group:s}),u.showArrows!==!1&&n("div",{class:"v-window__controls"},[V.value])]),(_=t.additional)==null?void 0:_.call(t,{group:s})]}),[[vu("touch"),N.value]])}),{group:s}}}),O4=Gu({eager:Boolean},"lazy");function W4(u,a){const t=w(!1),e=E(()=>t.value||u.eager||a.value);T(a,()=>t.value=!0);function l(){u.eager||(t.value=!1)}return{isBooted:t,hasContent:e,onAfterLeave:l}}const U4=A({name:"VWindowItem",directives:{Touch:R4},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...v4(),...O4()},emits:{"group:selected":u=>!0},setup(u,a){let{slots:t}=a;const e=Ou(Cu),l=f4(u,Bu),{isBooted:o}=m4();if(!e||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=w(!1),c=E(()=>e.isReversed.value?u.reverseTransition!==!1:u.transition!==!1);function d(){!s.value||!e||(s.value=!1,e.transitionCount.value>0&&(e.transitionCount.value-=1,e.transitionCount.value===0&&(e.transitionHeight.value=void 0)))}function r(){if(!(s.value||!e)){if(s.value=!0,e.transitionCount.value===0){var g;e.transitionHeight.value=q((g=e.rootRef.value)==null?void 0:g.clientHeight)}e.transitionCount.value+=1}}function f(){d()}function y(g){!s.value||Uu(()=>{!c.value||!s.value||!e||(e.transitionHeight.value=q(g.clientHeight))})}const m=E(()=>{const g=e.isReversed.value?u.reverseTransition:u.transition;return c.value?{name:typeof g!="string"?e.transition.value:g,onBeforeEnter:r,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:r,onAfterLeave:d,onLeaveCancelled:f,onEnter:y}:!1}),{hasContent:B}=W4(u,l.isSelected);return F(()=>{var g;return n(I4,{transition:o.value&&m.value},{default:()=>[K(n("div",{class:["v-window-item",l.selectedClass.value]},[B.value&&((g=t.default)==null?void 0:g.call(t))]),[[Wu,l.isSelected.value]])]})}),{}}}),q4=A({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:P,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:u=>u>0},modelValue:null,progress:[Boolean,String],showArrows:{type:[Boolean,String],default:!0,validator:u=>typeof u=="boolean"||u==="hover"},verticalDelimiters:[Boolean,String]},emits:{"update:modelValue":u=>!0},setup(u,a){let{slots:t}=a;const e=qu(u,"modelValue"),{t:l}=fu(),o=w();let s=-1;T(e,d),T(()=>u.interval,d),T(()=>u.cycle,r=>{r?d():window.clearTimeout(s)}),Ju(c);function c(){!u.cycle||!o.value||(s=window.setTimeout(o.value.group.next,+u.interval>0?+u.interval:6e3))}function d(){window.clearTimeout(s),window.requestAnimationFrame(c)}return F(()=>n(G4,{ref:o,modelValue:e.value,"onUpdate:modelValue":r=>e.value=r,class:["v-carousel",{"v-carousel--hide-delimiter-background":u.hideDelimiterBackground,"v-carousel--vertical-delimiters":u.verticalDelimiters}],style:{height:q(u.height)},continuous:!0,mandatory:"force",showArrows:u.showArrows},{default:t.default,additional:r=>{let{group:f}=r;return n(mu,null,[!u.hideDelimiters&&n("div",{class:"v-carousel__controls",style:{left:u.verticalDelimiters==="left"&&u.verticalDelimiters?0:"auto",right:u.verticalDelimiters==="right"?0:"auto"}},[f.items.value.length>0&&n(z,{defaults:{VBtn:{color:u.color,icon:u.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[f.items.value.map((y,m)=>{const B={"aria-label":l("$vuetify.carousel.ariaLabel.delimiter",m+1,f.items.value.length),class:[f.isSelected(y.id)&&"v-btn--active"],onClick:()=>f.select(y.id,!0)};return t.item?t.item({props:B,item:y}):n(S,Ku(y,B),null)})]})]),u.progress&&n(h4,{class:"v-carousel__progress",color:typeof u.progress=="string"?u.progress:void 0,modelValue:(f.getItemIndex(e.value)+1)/f.items.value.length*100},null)])},prev:t.prev,next:t.next})),{}}}),J4=A({name:"VCarouselItem",inheritAttrs:!1,props:{value:null},setup(u,a){let{slots:t,attrs:e}=a;F(()=>n(U4,{class:"v-carousel-item",value:u.value},{default:()=>[n(I,e,t)]}))}});const uu=["sm","md","lg","xl","xxl"],Du=(()=>uu.reduce((u,a)=>(u[a]={type:[Boolean,String,Number],default:!1},u),{}))(),xu=(()=>uu.reduce((u,a)=>(u["offset"+Q(a)]={type:[String,Number],default:null},u),{}))(),bu=(()=>uu.reduce((u,a)=>(u["order"+Q(a)]={type:[String,Number],default:null},u),{}))(),ou={col:Object.keys(Du),offset:Object.keys(xu),order:Object.keys(bu)};function K4(u,a,t){let e=u;if(!(t==null||t===!1)){if(a){const l=a.replace(u,"");e+=`-${l}`}return u==="col"&&(e="v-"+e),u==="col"&&(t===""||t===!0)||(e+=`-${t}`),e.toLowerCase()}}const Q4=["auto","start","end","center","baseline","stretch"],W=A({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Du,offset:{type:[String,Number],default:null},...xu,order:{type:[String,Number],default:null},...bu,alignSelf:{type:String,default:null,validator:u=>Q4.includes(u)},...G()},setup(u,a){let{slots:t}=a;const e=E(()=>{const l=[];let o;for(o in ou)ou[o].forEach(c=>{const d=u[c],r=K4(o,c,d);r&&l.push(r)});const s=l.some(c=>c.startsWith("v-col-"));return l.push({"v-col":!s||!u.cols,[`v-col-${u.cols}`]:u.cols,[`offset-${u.offset}`]:u.offset,[`order-${u.order}`]:u.order,[`align-self-${u.alignSelf}`]:u.alignSelf}),l});return()=>{var l;return hu(u.tag,{class:e.value},(l=t.default)==null?void 0:l.call(t))}}}),Z4=["sm","md","lg","xl","xxl"],eu=["start","end","center"],Au=["space-between","space-around","space-evenly"];function tu(u,a){return Z4.reduce((t,e)=>(t[u+Q(e)]=a(),t),{})}const ue=[...eu,"baseline","stretch"],ku=u=>ue.includes(u),wu=tu("align",()=>({type:String,default:null,validator:ku})),ee=[...eu,...Au],Su=u=>ee.includes(u),Fu=tu("justify",()=>({type:String,default:null,validator:Su})),te=[...eu,...Au,"stretch"],Vu=u=>te.includes(u),Iu=tu("alignContent",()=>({type:String,default:null,validator:Vu})),iu={align:Object.keys(wu),justify:Object.keys(Fu),alignContent:Object.keys(Iu)},ne={align:"align",justify:"justify",alignContent:"align-content"};function ae(u,a,t){let e=ne[u];if(t!=null){if(a){const l=a.replace(u,"");e+=`-${l}`}return e+=`-${t}`,e.toLowerCase()}}const U=A({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ku},...wu,justify:{type:String,default:null,validator:Su},...Fu,alignContent:{type:String,default:null,validator:Vu},...Iu,...G()},setup(u,a){let{slots:t}=a;const e=E(()=>{const l=[];let o;for(o in iu)iu[o].forEach(s=>{const c=u[s],d=ae(o,s,c);d&&l.push(d)});return l.push({"v-row--no-gutters":u.noGutters,"v-row--dense":u.dense,[`align-${u.align}`]:u.align,[`justify-${u.justify}`]:u.justify,[`align-content-${u.alignContent}`]:u.alignContent}),l});return()=>{var l;return hu(u.tag,{class:["v-row",e.value]},(l=t.default)==null?void 0:l.call(t))}}}),$=u=>(e4("data-v-dae8e3f4"),u=u(),t4(),u),le={class:"main-security"},se={class:"main-security__img",style:{"min-height":"calc(100vh - 180px)",display:"flex","flex-direction":"column","justify-content":"flex-end"}},oe={class:"pb-8"},ie={class:"container-main"},ce={style:{background:"#3c435c","padding-bottom":"100px"}},re={class:"fill-height container"},de=$(()=>v("div",{class:"why-me ptb-100 text-center",style:{color:"#ffff"}},"\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438",-1)),ve={style:{background:"#f5f5f5"}},fe={class:"fill-height container"},me=$(()=>v("div",{class:"why-me ptb-100 text-center"},"\u041E \u043D\u0430\u0441",-1)),he=$(()=>v("div",{style:{"padding-bottom":"100px"},class:"why-me__title"}," \u041C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u0435 \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432\u043E\u0442 \u0443\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442 \u0438 \u0441\u0440\u0435\u0434\u0438 \u043D\u0430\u0448\u0438\u0445 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0435\u0441\u0442\u044C \u0441\u0435\u0442\u0435\u0432\u044B\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B, \u0444\u0438\u043B\u0438\u0430\u043B\u044B \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0431\u0430\u043D\u043A\u043E\u0432, \u043E\u0444\u0438\u0441\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u0438. \u041D\u0430\u0448 \u043E\u043F\u044B\u0442, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0438\u0445 \u043E\u0442\u0437\u044B\u0432\u044B \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0441\u0430\u043C\u0438 \u0437\u0430 \u0441\u0435\u0431\u044F. \u041C\u044B \u043D\u0435 \u043F\u043E\u0434\u0432\u043E\u0434\u0438\u043C \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0438\u0431\u044B\u0432\u0430\u0435\u043C \u043F\u043E \u043F\u0435\u0440\u0432\u043E\u043C\u0443 \u0437\u0432\u043E\u043D\u043A\u0443 \u0438 \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u043D\u043E \u043E\u0441\u043D\u0430\u0449\u0435\u043D\u0430, \u043C\u044B \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u043E\u043C, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u044B, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u043E\u0445\u0440\u0430\u043D\u043D\u044B\u0445 \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0439 \u0438 \xAB\u0422\u0440\u0435\u0432\u043E\u0436\u043D\u044B\u0445 \u043A\u043D\u043E\u043F\u043E\u043A\xBB. ",-1)),_e={style:{"padding-bottom":"100px"}},ge={style:{background:"#f5f5f5"},class:"ptb-100"},Ee={class:"fill-height container"},ye=$(()=>v("div",{class:"company__title pl-1"},"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B",-1)),Ce=$(()=>v("div",{class:"pl-2 mt-4"},"\u0421 \u043A\u0430\u043A\u0438\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438 \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C",-1)),Be={class:"list-column"},De={class:"list-column__field"},xe={class:"list-column__field"},be={class:"list-column__field"},Ae={class:"list-column__field"},ke=$(()=>v("div",{class:"company__title ptb-100 pl-1 text-center"},"\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438",-1)),we={style:{background:"#f5f5f5"}},Se=_u({__name:"Main",setup(u){const a=[59.877543,30.335739],t=["fullscreenControl"],e=[{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438, \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",img:H4},{title:"\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432",text:"\u0416/\u0434 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u043C, \u0441\u0430\u043C\u043E\u043B\u0435\u0442\u043E\u043C, \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0444\u0443\u0440",img:R},{title:"\u041B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u042F\u0432\u043D\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0441\u043A\u0440\u044B\u0442\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0442\u0435\u043B\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u0438",img:R},{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439",text:"\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",img:Y4},{title:"\u041F\u043E\u0447\u0430\u0441\u043E\u0432\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0441\u0443\u0442\u043A\u0438, \u043E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0434\u0435\u043D\u044C: \u043D\u0430 \u043D\u043E\u0447\u044C",img:R},{title:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E \u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0443 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",img:R}];return(l,o)=>{const s=O("n-image"),c=O("n-space"),d=O("n-image-group");return J(),nu("div",le,[v("div",se,[v("div",oe,[v("div",ie,[n(H,{class:"pl-4"},{default:i(()=>[n(S,{style:{"font-size":"36px","font-weight":"600"},size:"x-large",variant:"outlined",color:"white"},{default:i(()=>[D("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ")]),_:1})]),_:1})])])]),v("div",ce,[v("div",re,[de,n(U,{"no-gutters":""},{default:i(()=>[(J(),nu(mu,null,Qu(e,(r,f)=>n(W,{key:f,cols:"6",sm:"4"},{default:i(()=>[n(b,{class:"ma-5","max-width":"400"},{default:i(()=>[n(yu,null,{default:i(()=>[D(au(r.title),1)]),_:2},1024),n(X,null,{default:i(()=>[D(au(r.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])]),v("div",ve,[v("div",fe,[me,he,v("div",_e,[n(b,{variant:"tonal"},{default:i(()=>[n(U,{"no-gutters":"",justify:"space-around"},{default:i(()=>[n(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(su,{style:{"font-size":"200px"},icon:"mdi-shield-account"}),n(X,{class:"why-me__text"},{default:i(()=>[D(" 100 ")]),_:1}),n(H,null,{default:i(()=>[n(S,null,{default:i(()=>[D("\u0428\u0422\u0410\u0422 \u041A\u0412\u0410\u041B\u0418\u0424\u0418\u0426\u0418\u0420\u041E\u0412\u0410\u041D\u041D\u042B\u0425 \u0421\u041E\u0422\u0420\u0423\u0414\u041D\u0418\u041A\u041E\u0412")]),_:1})]),_:1})]),_:1}),n(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(su,{style:{"font-size":"200px"},icon:"mdi-domain"}),n(X,{class:"why-me__text"},{default:i(()=>[D(" 20 ")]),_:1}),n(H,null,{default:i(()=>[n(S,null,{default:i(()=>[D("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043D\u0430 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0438")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])]),v("div",ge,[v("div",Ee,[n(U,{"no-gutters":""},{default:i(()=>[n(W,null,{default:i(()=>[ye,Ce,n(S,{color:"error",size:"x-large",class:"mt-6"},{default:i(()=>[D("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")]),_:1})]),_:1}),n(W,null,{default:i(()=>[n(q4,{"hide-delimiters":""},{default:i(()=>[n(J4,null,{default:i(()=>[v("div",Be,[v("div",De,[n(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(I,{src:x(Y),width:"300"},null,8,["src"])]),_:1})]),v("div",xe,[n(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(I,{src:x(Y),width:"300"},null,8,["src"])]),_:1})]),v("div",be,[n(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(I,{src:x(Y),width:"300"},null,8,["src"])]),_:1})]),v("div",Ae,[n(b,{"max-width":"400",class:"d-flex flex-column align-center"},{default:i(()=>[n(I,{src:x(Y),width:"300"},null,8,["src"])]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1}),ke,n(d,null,{default:i(()=>[n(c,{justify:"center"},{default:i(()=>[n(s,{width:"500",src:x(Mu)},null,8,["src"]),n(s,{width:"500",src:x(Ru)},null,8,["src"])]),_:1})]),_:1})])]),v("div",we,[n(x(u4),{coordinates:a,controls:t,zoom:18},{default:i(()=>[n(x(Zu),{coordinates:a,"marker-id":123})]),_:1})])])}}});const Fe=$4(Se,[["__scopeId","data-v-dae8e3f4"]]),Pe=_u({__name:"Home",setup(u){return(a,t)=>(J(),n4(Fe))}});export{Pe as default};
