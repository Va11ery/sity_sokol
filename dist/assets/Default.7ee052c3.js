import{p as X,i as J,c as f,r as B,a as z,b as V,g as it,o as rt,d as $t,e as ut,f as It,h as Vt,j as wt,k as Bt,l as k,T as Tt,m as ct,n as dt,q as Ct,s as Y,t as r,u as vt,v as U,w as ft,x as At,y as Lt,z as Pt,A as mt,B as Q,C as tt,D as et,E as D,F as Rt,G as zt,H as kt,I as Et}from"./index.0b819703.js";import{u as Ht,m as ot,a as T,b as Nt,c as Mt,d as Ot,e as Dt,f as jt,g as qt,h as Ft,V as K,i as Gt,j as Kt}from"./VIcon.62a0808e.js";const j=Symbol.for("vuetify:layout"),yt=Symbol.for("vuetify:layout-item"),lt=1e3,Ut=X({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Zt=X({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Wt(){const t=J(j);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function Xt(t){var a;const s=J(j);if(!s)throw new Error("[Vuetify] Could not find injected layout");const n=(a=t.id)!=null?a:`layout-item-${$t()}`,o=it("useLayoutItem");ut(yt,{id:n});const l=B(!1);It(()=>l.value=!0),Vt(()=>l.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:e}=s.register(o,{...t,active:f(()=>l.value?!1:t.active.value),id:n});return wt(()=>s.unregister(n)),{layoutItemStyles:i,layoutRect:s.layoutRect,layoutItemScrimStyles:e}}const Jt=(t,s,n,o)=>{let l={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...l}}];for(const e of t){const a=s.get(e),d=n.get(e),y=o.get(e);if(!a||!d||!y)continue;const m={...l,[a.value]:parseInt(l[a.value],10)+(y.value?parseInt(d.value,10):0)};i.push({id:e,layer:m}),l=m}return i};function Yt(t){const s=J(j,null),n=f(()=>s?s.rootZIndex.value-100:lt),o=B([]),l=z(new Map),i=z(new Map),e=z(new Map),a=z(new Map),d=z(new Map),{resizeRef:y,contentRect:m}=Ht(),h=f(()=>{var u;const c=new Map,b=(u=t.overlaps)!=null?u:[];for(const S of b.filter(v=>v.includes(":"))){const[v,_]=S.split(":");if(!o.value.includes(v)||!o.value.includes(_))continue;const w=l.get(v),L=l.get(_),P=i.get(v),O=i.get(_);!w||!L||!P||!O||(c.set(_,{position:w.value,amount:parseInt(P.value,10)}),c.set(v,{position:L.value,amount:-parseInt(O.value,10)}))}return c}),p=f(()=>{const c=[...new Set([...e.values()].map(u=>u.value))].sort((u,S)=>u-S),b=[];for(const u of c){const S=o.value.filter(v=>{var _;return((_=e.get(v))==null?void 0:_.value)===u});b.push(...S)}return Jt(b,l,i,a)}),C=f(()=>!Array.from(d.values()).some(c=>c.value)),$=f(()=>p.value[p.value.length-1].layer),E=f(()=>({"--v-layout-left":V($.value.left),"--v-layout-right":V($.value.right),"--v-layout-top":V($.value.top),"--v-layout-bottom":V($.value.bottom),...C.value?void 0:{transition:"none"}})),I=f(()=>p.value.slice(1).map((c,b)=>{let{id:u}=c;const{layer:S}=p.value[b],v=i.get(u),_=l.get(u);return{id:u,...S,size:Number(v.value),position:_.value}})),A=c=>I.value.find(b=>b.id===c),H=it("createLayout"),N=B(!1);rt(()=>{N.value=!0}),ut(j,{register:(c,b)=>{let{id:u,order:S,position:v,layoutSize:_,elementSize:w,active:L,disableTransitions:P,absolute:O}=b;e.set(u,S),l.set(u,v),i.set(u,_),a.set(u,L),P&&d.set(u,P);const nt=Bt(yt,H==null?void 0:H.vnode).indexOf(c);nt>-1?o.value.splice(nt,0,u):o.value.push(u);const at=f(()=>I.value.findIndex(R=>R.id===u)),q=f(()=>n.value+p.value.length*2-at.value*2),_t=f(()=>{const R=v.value==="left"||v.value==="right",F=v.value==="right",St=v.value==="bottom",st={[v.value]:0,zIndex:q.value,transform:`translate${R?"X":"Y"}(${(L.value?0:-110)*(F||St?-1:1)}%)`,position:O.value||n.value!==lt?"absolute":"fixed",...C.value?void 0:{transition:"none"}};if(!N.value)return st;const x=I.value[at.value];if(!x)throw new Error(`[Vuetify] Could not find layout item "${u}"`);const G=h.value.get(u);return G&&(x[G.position]+=G.amount),{...st,height:R?`calc(100% - ${x.top}px - ${x.bottom}px)`:w.value?`${w.value}px`:void 0,left:F?void 0:`${x.left}px`,right:F?`${x.right}px`:void 0,top:v.value!=="bottom"?`${x.top}px`:void 0,bottom:v.value!=="top"?`${x.bottom}px`:void 0,width:R?w.value?`${w.value}px`:void 0:`calc(100% - ${x.left}px - ${x.right}px)`}}),xt=f(()=>({zIndex:q.value-1}));return{layoutItemStyles:_t,layoutItemScrimStyles:xt,zIndex:q}},unregister:c=>{e.delete(c),l.delete(c),i.delete(c),a.delete(c),d.delete(c),o.value=o.value.filter(b=>b!==c)},mainRect:$,mainStyles:E,getLayoutItem:A,items:I,layoutRect:m,rootZIndex:n});const M=f(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),bt=f(()=>({zIndex:n.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:M,layoutStyles:bt,getLayoutItem:A,items:I,layoutRect:m,layoutRef:y}}function g(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return k({name:t,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:s}},setup(o,l){let{slots:i}=l;return()=>{const e=o.group?Tt:ct;return dt(e,{name:t,mode:o.mode,onBeforeEnter(a){a.style.transformOrigin=o.origin},onLeave(a){if(o.leaveAbsolute){const{offsetTop:d,offsetLeft:y,offsetWidth:m,offsetHeight:h}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${d}px`,a.style.left=`${y}px`,a.style.width=`${m}px`,a.style.height=`${h}px`}o.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(o.leaveAbsolute&&a!=null&&a._transitionInitialStyles){const{position:d,top:y,left:m,width:h,height:p}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=d||"",a.style.top=y||"",a.style.left=m||"",a.style.width=h||"",a.style.height=p||""}}},i.default)}}})}function pt(t,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return k({name:t,props:{mode:{type:String,default:n}},setup(o,l){let{slots:i}=l;return()=>dt(ct,{name:t,...s},i.default)}})}function gt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=Ct(`offset-${n}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},onEnter(e){const a=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const d=`${e[o]}px`;e.style[n]="0",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[n]=d})},onAfterEnter:i,onEnterCancelled:i,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[o]}px`,e.offsetHeight,requestAnimationFrame(()=>e.style[n]="0")},onAfterLeave:l,onLeaveCancelled:l};function l(e){t&&e._parent&&e._parent.classList.remove(t),i(e)}function i(e){const a=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,a!=null&&(e.style[n]=a),delete e._initialStyle}}g("fab-transition","center center","out-in");g("dialog-bottom-transition");g("dialog-top-transition");g("fade-transition");g("scale-transition");g("scroll-x-transition");g("scroll-x-reverse-transition");g("scroll-y-transition");g("scroll-y-reverse-transition");g("slide-x-transition");g("slide-x-reverse-transition");g("slide-y-transition");g("slide-y-reverse-transition");const Qt=pt("expand-transition",gt());pt("expand-x-transition",gt("",!0));const Z=Y()({name:"VToolbarTitle",props:{text:String,...ot()},setup(t,s){let{slots:n}=s;return T(()=>{var o;const l=!!(n.default||n.text||t.text);return r(t.tag,{class:"v-toolbar-title"},{default:()=>[l&&r("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(o=n.default)==null?void 0:o.call(n)])]})}),{}}}),te=[null,"prominent","default","comfortable","compact"],ht=X({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>te.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Nt(),...Mt(),...Ot(),...ot({tag:"header"}),...vt()},"v-toolbar"),W=Y()({name:"VToolbar",props:ht(),setup(t,s){var n;let{slots:o}=s;const{backgroundColorClasses:l,backgroundColorStyles:i}=Dt(U(t,"color")),{borderClasses:e}=jt(t),{elevationClasses:a}=qt(t),{roundedClasses:d}=Ft(t),{themeClasses:y}=ft(t),m=B(!!(t.extended||(n=o.extension)!=null&&n.call(o))),h=f(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),p=f(()=>m.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return At({VBtn:{variant:"text"}}),T(()=>{var C,$,E,I,A;const H=!!(t.title||o.title),N=!!(o.image||t.image),M=(C=o.extension)==null?void 0:C.call(o);return m.value=!!(t.extended||M),r(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},l.value,e.value,a.value,d.value,y.value],style:[i.value]},{default:()=>[N&&r("div",{key:"image",class:"v-toolbar__image"},[r(K,{defaults:{VImg:{cover:!0,src:t.image}}},{default:()=>[o.image?($=o.image)==null?void 0:$.call(o):r(Gt,null,null)]})]),r(K,{defaults:{VTabs:{height:V(h.value)}}},{default:()=>[r("div",{class:"v-toolbar__content",style:{height:V(h.value)}},[o.prepend&&r("div",{class:"v-toolbar__prepend"},[(E=o.prepend)==null?void 0:E.call(o)]),H&&r(Z,{key:"title",text:t.title},{text:o.title}),(I=o.default)==null?void 0:I.call(o),o.append&&r("div",{class:"v-toolbar__append"},[(A=o.append)==null?void 0:A.call(o)])])]}),r(K,{defaults:{VTabs:{height:V(p.value)}}},{default:()=>[r(Qt,null,{default:()=>[m.value&&r("div",{class:"v-toolbar__extension",style:{height:V(p.value)}},[M])]})]})]})}),{contentHeight:h,extensionHeight:p}}});function ee(t){var s;return Lt(t,Object.keys((s=W==null?void 0:W.props)!=null?s:{}))}const oe=Y()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...ht(),...Zt(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":t=>!0},setup(t,s){let{slots:n}=s;const o=B(),l=Pt(t,"modelValue"),i=f(()=>{var h,p;var a,d;const y=(h=(a=o.value)==null?void 0:a.contentHeight)!=null?h:0,m=(p=(d=o.value)==null?void 0:d.extensionHeight)!=null?p:0;return y+m}),{layoutItemStyles:e}=Xt({id:t.name,order:f(()=>parseInt(t.order,10)),position:U(t,"location"),layoutSize:i,elementSize:i,active:l,absolute:U(t,"absolute")});return T(()=>{const[a]=ee(t);return r(W,mt({ref:o,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"}],style:{...e.value,height:void 0}},a),n)}),{}}}),ne=k({name:"VAppBarTitle",props:{...Z.props},setup(t,s){let{slots:n}=s;return T(()=>r(Z,mt(t,{class:"v-app-bar-title"}),n)),{}}}),ae=Q({__name:"AppBar",setup(t){return(s,n)=>(tt(),et(oe,{flat:""},{default:D(()=>[r(ne,null,{default:D(()=>[r(Kt,{icon:"mdi-circle-slice-6"}),Rt(" Essentials Preset ")]),_:1})]),_:1}))}});function se(){const t=B(!1);return rt(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:f(()=>t.value?void 0:{transition:"none !important"}),isBooted:zt(t)}}const le=k({name:"VMain",props:{scrollable:Boolean,...ot({tag:"main"})},setup(t,s){let{slots:n}=s;const{mainStyles:o}=Wt(),{ssrBootStyles:l}=se();return T(()=>{var i,e;return r(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[o.value,l.value]},{default:()=>[t.scrollable?r("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(e=n.default)==null?void 0:e.call(n)]})}),{}}}),ie=Q({__name:"View",setup(t){return(s,n)=>{const o=kt("router-view");return tt(),et(le,null,{default:D(()=>[r(o)]),_:1})}}});const re=k({name:"VApp",props:{...Ut({fullHeight:!0}),...vt()},setup(t,s){let{slots:n}=s;const o=ft(t),{layoutClasses:l,layoutStyles:i,getLayoutItem:e,items:a,layoutRef:d}=Yt(t),{rtlClasses:y}=Et();return T(()=>{var m;return r("div",{ref:d,class:["v-application",o.themeClasses.value,l.value,y.value],style:i.value},[r("div",{class:"v-application__wrap"},[(m=n.default)==null?void 0:m.call(n)])])}),{getLayoutItem:e,items:a,theme:o}}}),ve=Q({__name:"Default",setup(t){return(s,n)=>(tt(),et(re,null,{default:D(()=>[r(ae),r(ie)]),_:1}))}});export{ve as default};
