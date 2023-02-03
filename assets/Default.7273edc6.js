import{p as te,i as oe,g as Ne,a as ce,b as de,r as T,o as Me,c as De,d as u,e as Fe,f as H,h as I,j as ve,k as Oe,l as je,m as L,T as qe,n as fe,q as me,s as Ke,t as ne,u as r,v as ae,w as N,x as se,y as Ge,z as Ue,A as Ze,B as ye,I as Je,C as K,D as E,E as G,F as w,G as We,H as pe,J as Xe,K as U,L as Qe,M as Ye,N as et,O as tt,P as ot,Q as nt,R as at,S as st}from"./index.026f0829.js";import{u as ge,m as he,a as _e,b as be,c as xe,d as Se,e as $e,f as Ve,V as Q,g as Be,h as Ie,R as lt,i as it}from"./VAvatar.becec884.js";import{m as Z,u as C}from"./tag.7049cf31.js";const q=Symbol.for("vuetify:layout"),we=Symbol.for("vuetify:layout-item"),ue=1e3,rt=te({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ce=te({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ut(){const e=oe(q);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ae(e){var a;const s=oe(q);if(!s)throw new Error("[Vuetify] Could not find injected layout");const n=(a=e.id)!=null?a:`layout-item-${Ne()}`,o=ce("useLayoutItem");de(we,{id:n});const l=T(!1);Me(()=>l.value=!0),De(()=>l.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:t}=s.register(o,{...e,active:u(()=>l.value?!1:e.active.value),id:n});return Fe(()=>s.unregister(n)),{layoutItemStyles:i,layoutRect:s.layoutRect,layoutItemScrimStyles:t}}const ct=(e,s,n,o)=>{let l={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...l}}];for(const t of e){const a=s.get(t),d=n.get(t),y=o.get(t);if(!a||!d||!y)continue;const v={...l,[a.value]:parseInt(l[a.value],10)+(y.value?parseInt(d.value,10):0)};i.push({id:t,layer:v}),l=v}return i};function dt(e){const s=oe(q,null),n=u(()=>s?s.rootZIndex.value-100:ue),o=T([]),l=H(new Map),i=H(new Map),t=H(new Map),a=H(new Map),d=H(new Map),{resizeRef:y,contentRect:v}=ge(),g=u(()=>{var c;const f=new Map,_=(c=e.overlaps)!=null?c:[];for(const S of _.filter(m=>m.includes(":"))){const[m,b]=S.split(":");if(!o.value.includes(m)||!o.value.includes(b))continue;const A=l.get(m),R=l.get(b),z=i.get(m),j=i.get(b);!A||!R||!z||!j||(f.set(b,{position:A.value,amount:parseInt(z.value,10)}),f.set(m,{position:R.value,amount:-parseInt(j.value,10)}))}return f}),p=u(()=>{const f=[...new Set([...t.values()].map(c=>c.value))].sort((c,S)=>c-S),_=[];for(const c of f){const S=o.value.filter(m=>{var b;return((b=t.get(m))==null?void 0:b.value)===c});_.push(...S)}return ct(_,l,i,a)}),$=u(()=>!Array.from(d.values()).some(f=>f.value)),V=u(()=>p.value[p.value.length-1].layer),M=u(()=>({"--v-layout-left":I(V.value.left),"--v-layout-right":I(V.value.right),"--v-layout-top":I(V.value.top),"--v-layout-bottom":I(V.value.bottom),...$.value?void 0:{transition:"none"}})),B=u(()=>p.value.slice(1).map((f,_)=>{let{id:c}=f;const{layer:S}=p.value[_],m=i.get(c),b=l.get(c);return{id:c,...S,size:Number(m.value),position:b.value}})),k=f=>B.value.find(_=>_.id===f),D=ce("createLayout"),F=T(!1);ve(()=>{F.value=!0}),de(q,{register:(f,_)=>{let{id:c,order:S,position:m,layoutSize:b,elementSize:A,active:R,disableTransitions:z,absolute:j}=_;t.set(c,S),l.set(c,m),i.set(c,b),a.set(c,R),z&&d.set(c,z);const le=Oe(we,D==null?void 0:D.vnode).indexOf(f);le>-1?o.value.splice(le,0,c):o.value.push(c);const ie=u(()=>B.value.findIndex(P=>P.id===c)),J=u(()=>n.value+p.value.length*2-ie.value*2),ze=u(()=>{const P=m.value==="left"||m.value==="right",W=m.value==="right",He=m.value==="bottom",re={[m.value]:0,zIndex:J.value,transform:`translate${P?"X":"Y"}(${(R.value?0:-110)*(W||He?-1:1)}%)`,position:j.value||n.value!==ue?"absolute":"fixed",...$.value?void 0:{transition:"none"}};if(!F.value)return re;const x=B.value[ie.value];if(!x)throw new Error(`[Vuetify] Could not find layout item "${c}"`);const X=g.value.get(c);return X&&(x[X.position]+=X.amount),{...re,height:P?`calc(100% - ${x.top}px - ${x.bottom}px)`:A.value?`${A.value}px`:void 0,left:W?void 0:`${x.left}px`,right:W?`${x.right}px`:void 0,top:m.value!=="bottom"?`${x.top}px`:void 0,bottom:m.value!=="top"?`${x.bottom}px`:void 0,width:P?A.value?`${A.value}px`:void 0:`calc(100% - ${x.left}px - ${x.right}px)`}}),Pe=u(()=>({zIndex:J.value-1}));return{layoutItemStyles:ze,layoutItemScrimStyles:Pe,zIndex:J}},unregister:f=>{t.delete(f),l.delete(f),i.delete(f),a.delete(f),d.delete(f),o.value=o.value.filter(_=>_!==f)},mainRect:V,mainStyles:M,getLayoutItem:k,items:B,layoutRect:v,rootZIndex:n});const O=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),Re=u(()=>({zIndex:n.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:O,layoutStyles:Re,getLayoutItem:k,items:B,layoutRect:v,layoutRef:y}}const vt="/sity_sokol/assets/logo.6757dac0.png",Te=je("app",{state:()=>({theme:"light"}),actions:{setTheme(){this.theme=this.theme==="light"?"dark":"light"}}});function h(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return L({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:s}},setup(o,l){let{slots:i}=l;return()=>{const t=o.group?qe:fe;return me(t,{name:e,mode:o.mode,onBeforeEnter(a){a.style.transformOrigin=o.origin},onLeave(a){if(o.leaveAbsolute){const{offsetTop:d,offsetLeft:y,offsetWidth:v,offsetHeight:g}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${d}px`,a.style.left=`${y}px`,a.style.width=`${v}px`,a.style.height=`${g}px`}o.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(o.leaveAbsolute&&a!=null&&a._transitionInitialStyles){const{position:d,top:y,left:v,width:g,height:p}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=d||"",a.style.top=y||"",a.style.left=v||"",a.style.width=g||"",a.style.height=p||""}}},i.default)}}})}function Le(e,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return L({name:e,props:{mode:{type:String,default:n}},setup(o,l){let{slots:i}=l;return()=>me(fe,{name:e,...s},i.default)}})}function Ee(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=Ke(`offset-${n}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},onEnter(t){const a=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const d=`${t[o]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=a.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[n]=d})},onAfterEnter:i,onEnterCancelled:i,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[o]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[n]="0")},onAfterLeave:l,onLeaveCancelled:l};function l(t){e&&t._parent&&t._parent.classList.remove(e),i(t)}function i(t){const a=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,a!=null&&(t.style[n]=a),delete t._initialStyle}}h("fab-transition","center center","out-in");h("dialog-bottom-transition");h("dialog-top-transition");h("fade-transition");h("scale-transition");h("scroll-x-transition");h("scroll-x-reverse-transition");h("scroll-y-transition");h("scroll-y-reverse-transition");h("slide-x-transition");h("slide-x-reverse-transition");h("slide-y-transition");h("slide-y-reverse-transition");const ft=Le("expand-transition",Ee());Le("expand-x-transition",Ee("",!0));const Y=ne()({name:"VToolbarTitle",props:{text:String,...Z()},setup(e,s){let{slots:n}=s;return C(()=>{var o;const l=!!(n.default||n.text||e.text);return r(e.tag,{class:"v-toolbar-title"},{default:()=>[l&&r("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(o=n.default)==null?void 0:o.call(n)])]})}),{}}}),mt=[null,"prominent","default","comfortable","compact"],ke=te({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>mt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...he(),..._e(),...be(),...Z({tag:"header"}),...ae()},"v-toolbar"),ee=ne()({name:"VToolbar",props:ke(),setup(e,s){var n;let{slots:o}=s;const{backgroundColorClasses:l,backgroundColorStyles:i}=xe(N(e,"color")),{borderClasses:t}=Se(e),{elevationClasses:a}=$e(e),{roundedClasses:d}=Ve(e),{themeClasses:y}=se(e),v=T(!!(e.extended||(n=o.extension)!=null&&n.call(o))),g=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),p=u(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ge({VBtn:{variant:"text"}}),C(()=>{var $,V,M,B,k;const D=!!(e.title||o.title),F=!!(o.image||e.image),O=($=o.extension)==null?void 0:$.call(o);return v.value=!!(e.extended||O),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,t.value,a.value,d.value,y.value],style:[i.value]},{default:()=>[F&&r("div",{key:"image",class:"v-toolbar__image"},[r(Q,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[o.image?(V=o.image)==null?void 0:V.call(o):r(Be,null,null)]})]),r(Q,{defaults:{VTabs:{height:I(g.value)}}},{default:()=>[r("div",{class:"v-toolbar__content",style:{height:I(g.value)}},[o.prepend&&r("div",{class:"v-toolbar__prepend"},[(M=o.prepend)==null?void 0:M.call(o)]),D&&r(Y,{key:"title",text:e.title},{text:o.title}),(B=o.default)==null?void 0:B.call(o),o.append&&r("div",{class:"v-toolbar__append"},[(k=o.append)==null?void 0:k.call(o)])])]}),r(Q,{defaults:{VTabs:{height:I(p.value)}}},{default:()=>[r(ft,null,{default:()=>[v.value&&r("div",{class:"v-toolbar__extension",style:{height:I(p.value)}},[O])]})]})]})}),{contentHeight:g,extensionHeight:p}}});function yt(e){var s;return Ue(e,Object.keys((s=ee==null?void 0:ee.props)!=null?s:{}))}const pt=ne()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ke(),...Ce(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:n}=s;const o=T(),l=Ze(e,"modelValue"),i=u(()=>{var g,p;var a,d;const y=(g=(a=o.value)==null?void 0:a.contentHeight)!=null?g:0,v=(p=(d=o.value)==null?void 0:d.extensionHeight)!=null?p:0;return y+v}),{layoutItemStyles:t}=Ae({id:e.name,order:u(()=>parseInt(e.order,10)),position:N(e,"location"),layoutSize:i,elementSize:i,active:l,absolute:N(e,"absolute")});return C(()=>{const[a]=yt(e);return r(ee,ye({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...t.value,height:void 0}},a),n)}),{}}}),gt=L({name:"VAppBarNavIcon",props:{icon:{type:Je,default:"$menu"}},setup(e,s){let{slots:n}=s;return C(()=>r(Ie,{class:"v-app-bar-nav-icon",icon:e.icon},n)),{}}}),ht=L({name:"VAppBarTitle",props:{...Y.props},setup(e,s){let{slots:n}=s;return C(()=>r(Y,ye(e,{class:"v-app-bar-title"}),n)),{}}}),_t=U("div",null,"\u041E\u041E \u0421\u043E\u043A\u043E\u043B",-1),bt=K({__name:"AppBar",setup(e){return Te(),(s,n)=>(E(),G(pt,{elevation:0,color:"#3C435C",class:"text-white"},{append:w(()=>[r(gt)]),default:w(()=>[We((E(),pe("div",{class:"d-flex",style:{cursor:"pointer"},onClick:n[0]||(n[0]=Xe(o=>s.$router.push({name:"home"}),["prevent"]))},[r(it,{size:"65px"},{default:w(()=>[r(Be,{alt:"Avatar",src:vt})]),_:1}),r(ht,{class:"app-bar-title d-flex align-center"},{default:w(()=>[_t]),_:1})])),[[lt]])]),_:1}))}});function xt(){const e=T(!1);return ve(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:u(()=>e.value?void 0:{transition:"none !important"}),isBooted:Qe(e)}}const St=L({name:"VMain",props:{scrollable:Boolean,...Z({tag:"main"})},setup(e,s){let{slots:n}=s;const{mainStyles:o}=ut(),{ssrBootStyles:l}=xt();return C(()=>{var i,t;return r(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[o.value,l.value]},{default:()=>[e.scrollable?r("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(t=n.default)==null?void 0:t.call(n)]})}),{}}}),$t=K({__name:"View",setup(e){return(s,n)=>{const o=Ye("router-view");return E(),G(St,{style:{"min-height":"calc(100vh)"}},{default:w(()=>[r(o)]),_:1})}}});const Vt=L({name:"VFooter",props:{app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...he(),..._e(),...Ce(),...be(),...Z({tag:"footer"}),...ae()},setup(e,s){let{slots:n}=s;const{themeClasses:o}=se(e),{backgroundColorClasses:l,backgroundColorStyles:i}=xe(N(e,"color")),{borderClasses:t}=Se(e),{elevationClasses:a}=$e(e),{roundedClasses:d}=Ve(e),y=T(32),{resizeRef:v}=ge($=>{!$.length||(y.value=$[0].target.clientHeight)}),g=u(()=>e.height==="auto"?y.value:parseInt(e.height,10)),{layoutItemStyles:p}=Ae({id:e.name,order:u(()=>parseInt(e.order,10)),position:u(()=>"bottom"),layoutSize:g,elementSize:u(()=>e.height==="auto"?void 0:g.value),active:u(()=>e.app),absolute:N(e,"absolute")});return C(()=>r(e.tag,{ref:v,class:["v-footer",o.value,l.value,t.value,a.value,d.value],style:[i.value,e.app?p.value:void 0]},n)),{}}}),Bt={class:"d-flex"},It=U("div",null,null,-1),wt=U("div",{class:"text-h6"},"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F C\u043E\u043A\u043E\u043B",-1),Ct=K({__name:"Footer",setup(e){const s=["\u0423\u0441\u043B\u0443\u0433\u0438","\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"];return(n,o)=>(E(),G(Vt,{class:"text-center d-flex flex-column justify-space-between"},{default:w(()=>[U("div",Bt,[(E(),pe(tt,null,et(s,l=>r(Ie,{key:l,variant:"text",class:"mx-2",rounded:"xl"},{default:w(()=>[ot(nt(l),1)]),_:2},1024)),64))]),It,wt]),_:1}))}});const At=L({name:"VApp",props:{...rt({fullHeight:!0}),...ae()},setup(e,s){let{slots:n}=s;const o=se(e),{layoutClasses:l,layoutStyles:i,getLayoutItem:t,items:a,layoutRef:d}=dt(e),{rtlClasses:y}=at();return C(()=>{var v;return r("div",{ref:d,class:["v-application",o.themeClasses.value,l.value,y.value],style:i.value},[r("div",{class:"v-application__wrap"},[(v=n.default)==null?void 0:v.call(n)])])}),{getLayoutItem:t,items:a,theme:o}}}),Rt=K({__name:"Default",setup(e){const s=Te();return(n,o)=>(E(),G(At,{theme:st(s).$state.theme},{default:w(()=>[r(bt),r($t),r(Ct)]),_:1},8,["theme"]))}});export{Rt as default};
