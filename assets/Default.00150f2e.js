import{p as te,i as ae,c as i,r as w,a as z,b as B,g as ie,o as Re,d as re,f as ze,e as De,h as Pe,j as He,k as Ne,l as oe,m as n,n as ce,t as D,q as de,s as Me,u as Fe,v as Oe,w as ve,x as j,y as K,z as k,A as U,B as b,C as Y,D as me,E as fe,F as ye,G as ge,H as je,I as Ke,J as Z,K as Ue,L as Ze}from"./index.fb9e5f80.js";import{V as qe,a as Xe,b as Ge,c as Je}from"./VList.54324beb.js";import{m as q,u as T,a as pe,b as he,c as _e,d as be,e as xe,f as Ve,g as Se,V as W,h as Ie,R as We,i as Ye}from"./VAvatar.59e0ba20.js";import{u as $e,a as Qe,V as et}from"./ssrBoot.e5d5c06b.js";const O=Symbol.for("vuetify:layout"),Be=Symbol.for("vuetify:layout-item"),ue=1e3,tt=te({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ce=te({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function at(){const e=ae(O);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ke(e){var c;const l=ae(O);if(!l)throw new Error("[Vuetify] Could not find injected layout");const a=(c=e.id)!=null?c:`layout-item-${De()}`,t=ie("useLayoutItem");re(Be,{id:a});const o=w(!1);Pe(()=>o.value=!0),He(()=>o.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:r}=l.register(t,{...e,active:i(()=>o.value?!1:e.active.value),id:a});return Ne(()=>l.unregister(a)),{layoutItemStyles:s,layoutRect:l.layoutRect,layoutItemScrimStyles:r}}const ot=(e,l,a,t)=>{let o={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...o}}];for(const r of e){const c=l.get(r),m=a.get(r),p=t.get(r);if(!c||!m||!p)continue;const y={...o,[c.value]:parseInt(o[c.value],10)+(p.value?parseInt(m.value,10):0)};s.push({id:r,layer:y}),o=y}return s};function lt(e){const l=ae(O,null),a=i(()=>l?l.rootZIndex.value-100:ue),t=w([]),o=z(new Map),s=z(new Map),r=z(new Map),c=z(new Map),m=z(new Map),{resizeRef:p,contentRect:y}=$e(),h=i(()=>{var u;const d=new Map,g=(u=e.overlaps)!=null?u:[];for(const V of g.filter(v=>v.includes(":"))){const[v,_]=V.split(":");if(!t.value.includes(v)||!t.value.includes(_))continue;const C=o.get(v),E=o.get(_),L=s.get(v),F=s.get(_);!C||!E||!L||!F||(d.set(_,{position:C.value,amount:parseInt(L.value,10)}),d.set(v,{position:E.value,amount:-parseInt(F.value,10)}))}return d}),f=i(()=>{const d=[...new Set([...r.values()].map(u=>u.value))].sort((u,V)=>u-V),g=[];for(const u of d){const V=t.value.filter(v=>{var _;return((_=r.get(v))==null?void 0:_.value)===u});g.push(...V)}return ot(g,o,s,c)}),S=i(()=>!Array.from(m.values()).some(d=>d.value)),I=i(()=>f.value[f.value.length-1].layer),P=i(()=>({"--v-layout-left":B(I.value.left),"--v-layout-right":B(I.value.right),"--v-layout-top":B(I.value.top),"--v-layout-bottom":B(I.value.bottom),...S.value?void 0:{transition:"none"}})),$=i(()=>f.value.slice(1).map((d,g)=>{let{id:u}=d;const{layer:V}=f.value[g],v=s.get(u),_=o.get(u);return{id:u,...V,size:Number(v.value),position:_.value}})),A=d=>$.value.find(g=>g.id===d),H=ie("createLayout"),N=w(!1);Re(()=>{N.value=!0}),re(O,{register:(d,g)=>{let{id:u,order:V,position:v,layoutSize:_,elementSize:C,active:E,disableTransitions:L,absolute:F}=g;r.set(u,V),o.set(u,v),s.set(u,_),c.set(u,E),L&&m.set(u,L);const le=ze(Be,H==null?void 0:H.vnode).indexOf(d);le>-1?t.value.splice(le,0,u):t.value.push(u);const ne=i(()=>$.value.findIndex(R=>R.id===u)),X=i(()=>a.value+f.value.length*2-ne.value*2),Ae=i(()=>{const R=v.value==="left"||v.value==="right",G=v.value==="right",Le=v.value==="bottom",se={[v.value]:0,zIndex:X.value,transform:`translate${R?"X":"Y"}(${(E.value?0:-110)*(G||Le?-1:1)}%)`,position:F.value||a.value!==ue?"absolute":"fixed",...S.value?void 0:{transition:"none"}};if(!N.value)return se;const x=$.value[ne.value];if(!x)throw new Error(`[Vuetify] Could not find layout item "${u}"`);const J=h.value.get(u);return J&&(x[J.position]+=J.amount),{...se,height:R?`calc(100% - ${x.top}px - ${x.bottom}px)`:C.value?`${C.value}px`:void 0,left:G?void 0:`${x.left}px`,right:G?`${x.right}px`:void 0,top:v.value!=="bottom"?`${x.top}px`:void 0,bottom:v.value!=="top"?`${x.bottom}px`:void 0,width:R?C.value?`${C.value}px`:void 0:`calc(100% - ${x.left}px - ${x.right}px)`}}),Ee=i(()=>({zIndex:X.value-1}));return{layoutItemStyles:Ae,layoutItemScrimStyles:Ee,zIndex:X}},unregister:d=>{r.delete(d),o.delete(d),s.delete(d),c.delete(d),m.delete(d),t.value=t.value.filter(g=>g!==d)},mainRect:I,mainStyles:P,getLayoutItem:A,items:$,layoutRect:y,rootZIndex:a});const M=i(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),we=i(()=>({zIndex:a.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:M,layoutStyles:we,getLayoutItem:A,items:$,layoutRect:y,layoutRef:p}}const nt="/sity_sokol/assets/logo.6757dac0.png";const Q=oe()({name:"VToolbarTitle",props:{text:String,...q()},setup(e,l){let{slots:a}=l;return T(()=>{var t;const o=!!(a.default||a.text||e.text);return n(e.tag,{class:"v-toolbar-title"},{default:()=>[o&&n("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]})}),{}}}),st=[null,"prominent","default","comfortable","compact"],Te=te({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>st.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...pe(),...he(),..._e(),...q({tag:"header"}),...ce()},"v-toolbar"),ee=oe()({name:"VToolbar",props:Te(),setup(e,l){var a;let{slots:t}=l;const{backgroundColorClasses:o,backgroundColorStyles:s}=be(D(e,"color")),{borderClasses:r}=xe(e),{elevationClasses:c}=Ve(e),{roundedClasses:m}=Se(e),{themeClasses:p}=de(e),y=w(!!(e.extended||(a=t.extension)!=null&&a.call(t))),h=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),f=i(()=>y.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Me({VBtn:{variant:"text"}}),T(()=>{var S,I,P,$,A;const H=!!(e.title||t.title),N=!!(t.image||e.image),M=(S=t.extension)==null?void 0:S.call(t);return y.value=!!(e.extended||M),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,r.value,c.value,m.value,p.value],style:[s.value]},{default:()=>[N&&n("div",{key:"image",class:"v-toolbar__image"},[n(W,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(I=t.image)==null?void 0:I.call(t):n(Ie,null,null)]})]),n(W,{defaults:{VTabs:{height:B(h.value)}}},{default:()=>[n("div",{class:"v-toolbar__content",style:{height:B(h.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(P=t.prepend)==null?void 0:P.call(t)]),H&&n(Q,{key:"title",text:e.title},{text:t.title}),($=t.default)==null?void 0:$.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(A=t.append)==null?void 0:A.call(t)])])]}),n(W,{defaults:{VTabs:{height:B(f.value)}}},{default:()=>[n(qe,null,{default:()=>[y.value&&n("div",{class:"v-toolbar__extension",style:{height:B(f.value)}},[M])]})]})]})}),{contentHeight:h,extensionHeight:f}}});function ut(e){var l;return Fe(e,Object.keys((l=ee==null?void 0:ee.props)!=null?l:{}))}const it=oe()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Te(),...Ce(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const t=w(),o=Oe(e,"modelValue"),s=i(()=>{var h,f;var c,m;const p=(h=(c=t.value)==null?void 0:c.contentHeight)!=null?h:0,y=(f=(m=t.value)==null?void 0:m.extensionHeight)!=null?f:0;return p+y}),{layoutItemStyles:r}=ke({id:e.name,order:i(()=>parseInt(e.order,10)),position:D(e,"location"),layoutSize:s,elementSize:s,active:o,absolute:D(e,"absolute")});return T(()=>{const[c]=ut(e);return n(ee,ve({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...r.value,height:void 0}},c),a)}),{}}}),rt=j({name:"VAppBarTitle",props:{...Q.props},setup(e,l){let{slots:a}=l;return T(()=>n(Q,ve(e,{class:"v-app-bar-title"}),a)),{}}}),ct=Z("div",null,"\u041E\u041E \u0421\u043E\u043A\u043E\u043B",-1),dt=K({__name:"AppBar",setup(e){const l=[{text:"\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",icon:"mdi-clock",link:"about"},{text:"\u0423\u0441\u043B\u0443\u0433\u0438",icon:"mdi-account",link:"service"},{text:"\u041A\u043B\u0438\u0435\u043D\u0442\u044B",icon:"mdi-flag",link:"clients"},{text:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",icon:"mdi-flag",link:"teams"},{text:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",icon:"mdi-flag",link:"contacts"}];return(a,t)=>(k(),U(it,{elevation:0,color:"#3C435C",class:"text-white"},{append:b(()=>[n(Je,{density:"compact","bg-color":"#3C435C",class:"d-flex text-white"},{default:b(()=>[(k(),Y(ge,null,me(l,(o,s)=>n(Xe,{class:"ms-1",key:s,value:o,link:"",rounded:"",to:{name:o.link}},{default:b(()=>[n(Ge,null,{default:b(()=>[fe(ye(o.text),1)]),_:2},1024)]),_:2},1032,["value","to"])),64))]),_:1})]),default:b(()=>[je((k(),Y("div",{class:"d-flex",style:{cursor:"pointer"},onClick:t[0]||(t[0]=Ke(o=>a.$router.push({name:"home"}),["prevent"]))},[n(Ye,{size:"65px"},{default:b(()=>[n(Ie,{alt:"Avatar",src:nt})]),_:1}),n(rt,{class:"app-bar-title d-flex align-center"},{default:b(()=>[ct]),_:1})])),[[We]])]),_:1}))}});const vt=j({name:"VMain",props:{scrollable:Boolean,...q({tag:"main"})},setup(e,l){let{slots:a}=l;const{mainStyles:t}=at(),{ssrBootStyles:o}=Qe();return T(()=>{var s,r;return n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,o.value]},{default:()=>[e.scrollable?n("div",{class:"v-main__scroller"},[(s=a.default)==null?void 0:s.call(a)]):(r=a.default)==null?void 0:r.call(a)]})}),{}}}),mt=K({__name:"View",setup(e){return(l,a)=>{const t=Ue("router-view");return k(),U(vt,{style:{"min-height":"calc(100vh)"}},{default:b(()=>[n(t)]),_:1})}}});const ft=j({name:"VFooter",props:{app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...pe(),...he(),...Ce(),..._e(),...q({tag:"footer"}),...ce()},setup(e,l){let{slots:a}=l;const{themeClasses:t}=de(e),{backgroundColorClasses:o,backgroundColorStyles:s}=be(D(e,"color")),{borderClasses:r}=xe(e),{elevationClasses:c}=Ve(e),{roundedClasses:m}=Se(e),p=w(32),{resizeRef:y}=$e(S=>{!S.length||(p.value=S[0].target.clientHeight)}),h=i(()=>e.height==="auto"?p.value:parseInt(e.height,10)),{layoutItemStyles:f}=ke({id:e.name,order:i(()=>parseInt(e.order,10)),position:i(()=>"bottom"),layoutSize:h,elementSize:i(()=>e.height==="auto"?void 0:h.value),active:i(()=>e.app),absolute:D(e,"absolute")});return T(()=>n(e.tag,{ref:y,class:["v-footer",t.value,o.value,r.value,c.value,m.value],style:[s.value,e.app?f.value:void 0]},a)),{}}}),yt={class:"d-flex"},gt=Z("div",null,null,-1),pt=Z("div",{class:"text-h6"},"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F C\u043E\u043A\u043E\u043B",-1),ht=K({__name:"Footer",setup(e){const l=["\u0423\u0441\u043B\u0443\u0433\u0438","\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"];return(a,t)=>(k(),U(ft,{class:"text-center d-flex flex-column justify-space-between"},{default:b(()=>[Z("div",yt,[(k(),Y(ge,null,me(l,o=>n(et,{key:o,variant:"text",class:"mx-2",rounded:"xl"},{default:b(()=>[fe(ye(o),1)]),_:2},1024)),64))]),gt,pt]),_:1}))}}),_t=Ze("app",{state:()=>({theme:"light"}),actions:{setTheme(){this.theme=this.theme==="light"?"dark":"light"}}});const bt=j({name:"VLayout",props:tt(),setup(e,l){let{slots:a}=l;const{layoutClasses:t,layoutStyles:o,getLayoutItem:s,items:r,layoutRef:c}=lt(e);return T(()=>{var m;return n("div",{ref:c,class:t.value,style:o.value},[(m=a.default)==null?void 0:m.call(a)])}),{getLayoutItem:s,items:r}}}),Bt=K({__name:"Default",setup(e){return _t(),(l,a)=>(k(),U(bt,null,{default:b(()=>[n(dt),n(mt),n(ht)]),_:1}))}});export{Bt as default};
