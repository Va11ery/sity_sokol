import{r as N,I as Xe,o as Q,w as ce,a as Ve,p as Z,i as Y,c as v,b as G,d as E,g as ee,e as de,f as we,h as te,j as Ke,k as Qe,l as Be,m as Ye,n as M,T as et,q as ke,s as $e,t as tt,u as ne,v as r,x as J,y as L,z as X,A as Te,B as nt,C as Ae,D as Pe,E as at,F as lt,G as st,H as ot,J as it,K as ie,L as rt,M as ut,N as ve,O as fe,P as me,Q as q,R as ct,S as dt,U as vt,V as ft}from"./index.e00d0cc0.js";import{m as U,u as T,a as ge,b as ye,c as pe,d as mt,e as he,f as be,g as xe,V as F,h as Re,i as Le,j as ze,k as Ee,l as Ne,n as Me,o as Ie,p as gt,R as yt,q as pt,r as ht,s as bt,t as xt,v as _t,w as St,x as It,y as Ct,z as Vt,A as wt,B as Bt,C as kt,D as oe,E as $t}from"./VAvatar.e117a041.js";function Oe(e){const s=N(),n=N();if(Xe){const t=new ResizeObserver(a=>{e==null||e(a,t),a.length&&(n.value=a[0].contentRect)});Q(()=>{t.disconnect()}),ce(s,(a,i)=>{i&&(t.unobserve(i),n.value=void 0),a&&t.observe(a)},{flush:"post"})}return{resizeRef:s,contentRect:Ve(n)}}const K=Symbol.for("vuetify:layout"),De=Symbol.for("vuetify:layout-item"),Ce=1e3,Tt=Z({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),At=Z({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Pt(){const e=Y(K);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Rt(e){var o;const s=Y(K);if(!s)throw new Error("[Vuetify] Could not find injected layout");const n=(o=e.id)!=null?o:`layout-item-${we()}`,t=ee("useLayoutItem");te(De,{id:n});const a=N(!1);Ke(()=>a.value=!0),Qe(()=>a.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:l}=s.register(t,{...e,active:v(()=>a.value?!1:e.active.value),id:n});return Q(()=>s.unregister(n)),{layoutItemStyles:i,layoutRect:s.layoutRect,layoutItemScrimStyles:l}}const Lt=(e,s,n,t)=>{let a={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...a}}];for(const l of e){const o=s.get(l),c=n.get(l),x=t.get(l);if(!o||!c||!x)continue;const f={...a,[o.value]:parseInt(a[o.value],10)+(x.value?parseInt(c.value,10):0)};i.push({id:l,layer:f}),a=f}return i};function zt(e){const s=Y(K,null),n=v(()=>s?s.rootZIndex.value-100:Ce),t=N([]),a=G(new Map),i=G(new Map),l=G(new Map),o=G(new Map),c=G(new Map),{resizeRef:x,contentRect:f}=Oe(),I=v(()=>{var g;const p=new Map,C=(g=e.overlaps)!=null?g:[];for(const $ of C.filter(_=>_.includes(":"))){const[_,w]=$.split(":");if(!t.value.includes(_)||!t.value.includes(w))continue;const P=a.get(_),O=a.get(w),D=i.get(_),H=i.get(w);!P||!O||!D||!H||(p.set(w,{position:P.value,amount:parseInt(D.value,10)}),p.set(_,{position:O.value,amount:-parseInt(H.value,10)}))}return p}),u=v(()=>{const p=[...new Set([...l.values()].map(g=>g.value))].sort((g,$)=>g-$),C=[];for(const g of p){const $=t.value.filter(_=>{var w;return((w=l.get(_))==null?void 0:w.value)===g});C.push(...$)}return Lt(C,a,i,o)}),d=v(()=>!Array.from(c.values()).some(p=>p.value)),y=v(()=>u.value[u.value.length-1].layer),m=v(()=>({"--v-layout-left":E(y.value.left),"--v-layout-right":E(y.value.right),"--v-layout-top":E(y.value.top),"--v-layout-bottom":E(y.value.bottom),...d.value?void 0:{transition:"none"}})),h=v(()=>u.value.slice(1).map((p,C)=>{let{id:g}=p;const{layer:$}=u.value[C],_=i.get(g),w=a.get(g);return{id:g,...$,size:Number(_.value),position:w.value}})),S=p=>h.value.find(C=>C.id===p),b=ee("createLayout"),V=N(!1);de(()=>{V.value=!0}),te(K,{register:(p,C)=>{let{id:g,order:$,position:_,layoutSize:w,elementSize:P,active:O,disableTransitions:D,absolute:H}=C;l.set(g,$),a.set(g,_),i.set(g,w),o.set(g,O),D&&c.set(g,D);const B=Be(De,b==null?void 0:b.vnode).indexOf(p);B>-1?t.value.splice(B,0,g):t.value.push(g);const _e=v(()=>h.value.findIndex(W=>W.id===g)),ae=v(()=>n.value+u.value.length*2-_e.value*2),We=v(()=>{const W=_.value==="left"||_.value==="right",le=_.value==="right",Je=_.value==="bottom",Se={[_.value]:0,zIndex:ae.value,transform:`translate${W?"X":"Y"}(${(O.value?0:-110)*(le||Je?-1:1)}%)`,position:H.value||n.value!==Ce?"absolute":"fixed",...d.value?void 0:{transition:"none"}};if(!V.value)return Se;const R=h.value[_e.value];if(!R)throw new Error(`[Vuetify] Could not find layout item "${g}"`);const se=I.value.get(g);return se&&(R[se.position]+=se.amount),{...Se,height:W?`calc(100% - ${R.top}px - ${R.bottom}px)`:P.value?`${P.value}px`:void 0,left:le?void 0:`${R.left}px`,right:le?`${R.right}px`:void 0,top:_.value!=="bottom"?`${R.top}px`:void 0,bottom:_.value!=="top"?`${R.bottom}px`:void 0,width:W?P.value?`${P.value}px`:void 0:`calc(100% - ${R.left}px - ${R.right}px)`}}),Ze=v(()=>({zIndex:ae.value-1}));return{layoutItemStyles:We,layoutItemScrimStyles:Ze,zIndex:ae}},unregister:p=>{l.delete(p),a.delete(p),i.delete(p),o.delete(p),c.delete(p),t.value=t.value.filter(C=>C!==p)},mainRect:y,mainStyles:m,getLayoutItem:S,items:h,layoutRect:f,rootZIndex:n});const A=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),z=v(()=>({zIndex:n.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:A,layoutStyles:z,getLayoutItem:S,items:h,layoutRect:f,layoutRef:x}}const Et="/sity_sokol/assets/logo.6757dac0.png",He=Ye("app",{state:()=>({theme:"light"}),actions:{setTheme(){this.theme=this.theme==="light"?"dark":"light"}}});function k(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return M({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:s}},setup(t,a){let{slots:i}=a;return()=>{const l=t.group?et:ke;return $e(l,{name:e,mode:t.mode,onBeforeEnter(o){o.style.transformOrigin=t.origin},onLeave(o){if(t.leaveAbsolute){const{offsetTop:c,offsetLeft:x,offsetWidth:f,offsetHeight:I}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${c}px`,o.style.left=`${x}px`,o.style.width=`${f}px`,o.style.height=`${I}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&o!=null&&o._transitionInitialStyles){const{position:c,top:x,left:f,width:I,height:u}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=c||"",o.style.top=x||"",o.style.left=f||"",o.style.width=I||"",o.style.height=u||""}}},i.default)}}})}function Ge(e,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return M({name:e,props:{mode:{type:String,default:n}},setup(t,a){let{slots:i}=a;return()=>$e(ke,{name:e,...s},i.default)}})}function qe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=tt(`offset-${n}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[n]:l.style[n]}},onEnter(l){const o=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const c=`${l[t]}px`;l.style[n]="0",l.offsetHeight,l.style.transition=o.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[n]=c})},onAfterEnter:i,onEnterCancelled:i,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[n]:l.style[n]},l.style.overflow="hidden",l.style[n]=`${l[t]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[n]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(l){e&&l._parent&&l._parent.classList.remove(e),i(l)}function i(l){const o=l._initialStyle[n];l.style.overflow=l._initialStyle.overflow,o!=null&&(l.style[n]=o),delete l._initialStyle}}k("fab-transition","center center","out-in");k("dialog-bottom-transition");k("dialog-top-transition");k("fade-transition");k("scale-transition");k("scroll-x-transition");k("scroll-x-reverse-transition");k("scroll-y-transition");k("scroll-y-reverse-transition");k("slide-x-transition");k("slide-x-reverse-transition");k("slide-y-transition");k("slide-y-reverse-transition");const Nt=Ge("expand-transition",qe());Ge("expand-x-transition",qe("",!0));const re=ne()({name:"VToolbarTitle",props:{text:String,...U()},setup(e,s){let{slots:n}=s;return T(()=>{var t;const a=!!(n.default||n.text||e.text);return r(e.tag,{class:"v-toolbar-title"},{default:()=>[a&&r("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(t=n.default)==null?void 0:t.call(n)])]})}),{}}}),Mt=[null,"prominent","default","comfortable","compact"],Fe=Z({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Mt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ge(),...ye(),...pe(),...U({tag:"header"}),...J()},"v-toolbar"),ue=ne()({name:"VToolbar",props:Fe(),setup(e,s){var n;let{slots:t}=s;const{backgroundColorClasses:a,backgroundColorStyles:i}=mt(L(e,"color")),{borderClasses:l}=he(e),{elevationClasses:o}=be(e),{roundedClasses:c}=xe(e),{themeClasses:x}=X(e),f=N(!!(e.extended||(n=t.extension)!=null&&n.call(t))),I=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),u=v(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Te({VBtn:{variant:"text"}}),T(()=>{var d,y,m,h,S;const b=!!(e.title||t.title),V=!!(t.image||e.image),A=(d=t.extension)==null?void 0:d.call(t);return f.value=!!(e.extended||A),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,l.value,o.value,c.value,x.value],style:[i.value]},{default:()=>[V&&r("div",{key:"image",class:"v-toolbar__image"},[r(F,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(y=t.image)==null?void 0:y.call(t):r(Re,null,null)]})]),r(F,{defaults:{VTabs:{height:E(I.value)}}},{default:()=>[r("div",{class:"v-toolbar__content",style:{height:E(I.value)}},[t.prepend&&r("div",{class:"v-toolbar__prepend"},[(m=t.prepend)==null?void 0:m.call(t)]),b&&r(re,{key:"title",text:e.title},{text:t.title}),(h=t.default)==null?void 0:h.call(t),t.append&&r("div",{class:"v-toolbar__append"},[(S=t.append)==null?void 0:S.call(t)])])]}),r(F,{defaults:{VTabs:{height:E(u.value)}}},{default:()=>[r(Nt,null,{default:()=>[f.value&&r("div",{class:"v-toolbar__extension",style:{height:E(u.value)}},[A])]})]})]})}),{contentHeight:I,extensionHeight:u}}});function Ot(e){var s;return nt(e,Object.keys((s=ue==null?void 0:ue.props)!=null?s:{}))}const Dt=ne()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Fe(),...At(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:n}=s;const t=N(),a=Ae(e,"modelValue"),i=v(()=>{var I,u;var o,c;const x=(I=(o=t.value)==null?void 0:o.contentHeight)!=null?I:0,f=(u=(c=t.value)==null?void 0:c.extensionHeight)!=null?u:0;return x+f}),{layoutItemStyles:l}=Rt({id:e.name,order:v(()=>parseInt(e.order,10)),position:L(e,"location"),layoutSize:i,elementSize:i,active:a,absolute:L(e,"absolute")});return T(()=>{const[o]=Ot(e);return r(ue,Pe({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...l.value,height:void 0}},o),n)}),{}}});const Ht=M({name:"VBtnGroup",props:{divided:Boolean,...ge(),...Le(),...ye(),...pe(),...U(),...J(),...ze()},setup(e,s){let{slots:n}=s;const{themeClasses:t}=X(e),{densityClasses:a}=Ee(e),{borderClasses:i}=he(e),{elevationClasses:l}=be(e),{roundedClasses:o}=xe(e);Te({VBtn:{height:"auto",color:L(e,"color"),density:L(e,"density"),flat:!0,variant:L(e,"variant")}}),T(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,i.value,a.value,l.value,o.value]},n))}}),Gt=Z({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),qt=Z({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ft(e,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=ee("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=we();te(Symbol.for(`${s.description}:id`),a);const i=Y(s,null);if(!i){if(!n)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${s.description}`)}const l=L(e,"value"),o=v(()=>i.disabled.value||e.disabled);i.register({id:a,value:l,disabled:o},t),Q(()=>{i.unregister(a)});const c=v(()=>i.isSelected(a)),x=v(()=>c.value&&[i.selectedClass.value,e.selectedClass]);return ce(c,f=>{t.emit("group:selected",{value:f})}),{id:a,isSelected:c,toggle:()=>i.select(a,!c.value),select:f=>i.select(a,f),selectedClass:x,value:l,disabled:o,group:i}}function Ut(e,s){let n=!1;const t=G([]),a=Ae(e,"modelValue",[],u=>u==null?[]:Ue(t,lt(u)),u=>{const d=Wt(t,u);return e.multiple?d:d[0]}),i=ee("useGroup");function l(u,d){const y=u,m=Symbol.for(`${s.description}:id`),S=Be(m,i==null?void 0:i.vnode).indexOf(d);S>-1?t.splice(S,0,y):t.push(y)}function o(u){if(n)return;c();const d=t.findIndex(y=>y.id===u);t.splice(d,1)}function c(){const u=t.find(d=>!d.disabled);u&&e.mandatory==="force"&&!a.value.length&&(a.value=[u.id])}de(()=>{c()}),Q(()=>{n=!0});function x(u,d){const y=t.find(m=>m.id===u);if(!(d&&y!=null&&y.disabled))if(e.multiple){const m=a.value.slice(),h=m.findIndex(b=>b===u),S=~h;if(d=d!=null?d:!S,S&&e.mandatory&&m.length<=1||!S&&e.max!=null&&m.length+1>e.max)return;h<0&&d?m.push(u):h>=0&&!d&&m.splice(h,1),a.value=m}else{const m=a.value.includes(u);if(e.mandatory&&m)return;a.value=(d!=null?d:!m)?[u]:[]}}function f(u){if(e.multiple&&st('This method is not supported when using "multiple" prop'),a.value.length){const d=a.value[0],y=t.findIndex(S=>S.id===d);let m=(y+u)%t.length,h=t[m];for(;h.disabled&&m!==y;)m=(m+u)%t.length,h=t[m];if(h.disabled)return;a.value=[t[m].id]}else{const d=t.find(y=>!y.disabled);d&&(a.value=[d.id])}}const I={register:l,unregister:o,selected:a,select:x,disabled:L(e,"disabled"),prev:()=>f(t.length-1),next:()=>f(1),isSelected:u=>a.value.includes(u),selectedClass:v(()=>e.selectedClass),items:v(()=>t),getItemIndex:u=>jt(t,u)};return te(s,I),I}function jt(e,s){const n=Ue(e,[s]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function Ue(e,s){const n=[];for(let t=0;t<e.length;t++){const a=e[t];a.value!=null?s.find(i=>at(i,a.value))!=null&&n.push(a.id):s.includes(t)&&n.push(a.id)}return n}function Wt(e,s){const n=[];for(let t=0;t<e.length;t++){const a=e[t];s.includes(a.id)&&n.push(a.value!=null?a.value:t)}return n}const je=Symbol.for("vuetify:v-btn-toggle");ne()({name:"VBtnToggle",props:Gt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:n}=s;const{isSelected:t,next:a,prev:i,select:l,selected:o}=Ut(e,je);return T(()=>{var c;return r(Ht,{class:"v-btn-toggle"},{default:()=>[(c=n.default)==null?void 0:c.call(n,{isSelected:t,next:a,prev:i,select:l,selected:o})]})}),{next:a,prev:i,select:l}}});const Zt=M({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Ne(),...U({tag:"div"}),...J()},setup(e,s){let{slots:n}=s;const t=20,a=2*Math.PI*t,i=N(),{themeClasses:l}=X(e),{sizeClasses:o,sizeStyles:c}=Me(e),{textColorClasses:x,textColorStyles:f}=Ie(L(e,"color")),{textColorClasses:I,textColorStyles:u}=Ie(L(e,"bgColor")),{intersectionRef:d,isIntersecting:y}=gt(),{resizeRef:m,contentRect:h}=Oe(),S=v(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),b=v(()=>Number(e.width)),V=v(()=>c.value?Number(e.size):h.value?h.value.width:Math.max(b.value,32)),A=v(()=>t/(1-b.value/V.value)*2),z=v(()=>b.value/V.value*A.value),p=v(()=>E((100-S.value)/100*a));return ot(()=>{d.value=i.value,m.value=i.value}),T(()=>r(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":y.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,o.value,x.value],style:[c.value,f.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[r("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${A.value} ${A.value}`},[r("circle",{class:["v-progress-circular__underlay",I.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":z.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),r("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":z.value,"stroke-dasharray":a,"stroke-dashoffset":p.value},null)]),n.default&&r("div",{class:"v-progress-circular__content"},[n.default({value:S.value})])]})),{}}});function Jt(e,s){ce(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&s&&it(()=>{s(!0)})},{immediate:!0})}const Xt=M({name:"VBtn",directives:{Ripple:yt},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:je},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ie,appendIcon:ie,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...ge(),...pe(),...Le(),...pt(),...ye(),...qt(),...ht(),...bt(),...xt(),..._t(),...Ne(),...U({tag:"button"}),...J(),...ze({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,s){let{attrs:n,slots:t}=s;const{themeClasses:a}=X(e),{borderClasses:i}=he(e),{colorClasses:l,colorStyles:o,variantClasses:c}=St(e),{densityClasses:x}=Ee(e),{dimensionStyles:f}=It(e),{elevationClasses:I}=be(e),{loaderClasses:u}=Ct(e),{locationStyles:d}=Vt(e),{positionClasses:y}=wt(e),{roundedClasses:m}=xe(e),{sizeClasses:h,sizeStyles:S}=Me(e),b=Ft(e,e.symbol,!1),V=Bt(e,n),A=v(()=>{var C;return e.active!==!1&&(e.active||((C=V.isActive)==null?void 0:C.value)||(b==null?void 0:b.isSelected.value))}),z=v(()=>(b==null?void 0:b.disabled.value)||e.disabled),p=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border));return Jt(V,b==null?void 0:b.select),T(()=>{var C,g,$,_;const w=V.isLink.value?"a":e.tag,P=!b||b.isSelected.value,O=!!(e.prependIcon||t.prepend),D=!!(e.appendIcon||t.append),H=!!(e.icon&&e.icon!==!0);return rt(r(w,{type:w==="a"?void 0:"button",class:["v-btn",b==null?void 0:b.selectedClass.value,{"v-btn--active":A.value,"v-btn--block":e.block,"v-btn--disabled":z.value,"v-btn--elevated":p.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,i.value,P?l.value:void 0,x.value,I.value,u.value,y.value,m.value,h.value,c.value],style:[P?o.value:void 0,f.value,d.value,S.value],disabled:z.value||void 0,href:V.href.value,onClick:j=>{var B;z.value||((B=V.navigate)==null||B.call(V,j),b==null||b.toggle())}},{default:()=>{var j;return[kt(!0,"v-btn"),!e.icon&&O&&r(F,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>{var B;return[r("span",{class:"v-btn__prepend"},[(B=(C=t.prepend)==null?void 0:C.call(t))!=null?B:r(oe,null,null)])]}}),r("span",{class:"v-btn__content","data-no-activator":""},[r(F,{key:"content",defaults:{VIcon:{icon:H?e.icon:void 0}}},{default:()=>{var B;return[(B=(g=t.default)==null?void 0:g.call(t))!=null?B:H&&r(oe,{key:"icon"},null)]}})]),!e.icon&&D&&r(F,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>{var B;return[r("span",{class:"v-btn__append"},[(B=($=t.append)==null?void 0:$.call(t))!=null?B:r(oe,null,null)])]}}),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[(j=(_=t.loader)==null?void 0:_.call(t))!=null?j:r(Zt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[ut("ripple"),!z.value&&e.ripple,null]])}),{}}}),Kt=M({name:"VAppBarNavIcon",props:{icon:{type:ie,default:"$menu"}},setup(e,s){let{slots:n}=s;return T(()=>r(Xt,{class:"v-app-bar-nav-icon",icon:e.icon},n)),{}}}),Qt=M({name:"VAppBarTitle",props:{...re.props},setup(e,s){let{slots:n}=s;return T(()=>r(re,Pe(e,{class:"v-app-bar-title"}),n)),{}}}),Yt=ve({__name:"AppBar",setup(e){return He(),(s,n)=>(fe(),me(Dt,{elevation:0,color:"info"},{append:q(()=>[r(Kt)]),default:q(()=>[r($t,{size:"65px"},{default:q(()=>[r(Re,{alt:"Avatar",src:Et})]),_:1}),r(Qt,null,{default:q(()=>[ct(" \u041E\u041E \u0421\u043E\u043A\u043E\u043B ")]),_:1})]),_:1}))}});function en(){const e=N(!1);return de(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ve(e)}}const tn=M({name:"VMain",props:{scrollable:Boolean,...U({tag:"main"})},setup(e,s){let{slots:n}=s;const{mainStyles:t}=Pt(),{ssrBootStyles:a}=en();return T(()=>{var i,l;return r(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,a.value]},{default:()=>[e.scrollable?r("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(l=n.default)==null?void 0:l.call(n)]})}),{}}}),nn=ve({__name:"View",setup(e){return(s,n)=>{const t=dt("router-view");return fe(),me(tn,null,{default:q(()=>[r(t)]),_:1})}}});const an=M({name:"VApp",props:{...Tt({fullHeight:!0}),...J()},setup(e,s){let{slots:n}=s;const t=X(e),{layoutClasses:a,layoutStyles:i,getLayoutItem:l,items:o,layoutRef:c}=zt(e),{rtlClasses:x}=vt();return T(()=>{var f;return r("div",{ref:c,class:["v-application",t.themeClasses.value,a.value,x.value],style:i.value},[r("div",{class:"v-application__wrap"},[(f=n.default)==null?void 0:f.call(n)])])}),{getLayoutItem:l,items:o,theme:t}}}),on=ve({__name:"Default",setup(e){const s=He();return(n,t)=>(fe(),me(an,{theme:ft(s).$state.theme},{default:q(()=>[r(Yt),r(nn)]),_:1},8,["theme"]))}});export{on as default};
