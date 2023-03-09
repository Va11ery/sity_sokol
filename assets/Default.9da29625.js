import{p as te,i as ae,c as i,r as T,a as z,b as B,g as ce,o as Le,d as de,f as ze,e as De,h as Pe,j as He,k as Ne,l as oe,m as n,n as le,t as D,q as ne,s as Me,u as Fe,v as Oe,w as ve,x as j,y as K,z as k,A as U,B as b,C as Y,D as me,E as fe,F as pe,G as ye,H as je,I as Ke,J as Z,K as Ue,L as Ze,M as qe,N as Xe}from"./index.5b58ed34.js";import{V as Ge,a as Je,b as We,c as Ye}from"./VList.3767c062.js";import{m as q,u as A,a as ge,b as he,c as _e,d as be,e as xe,f as Ve,g as Se,V as W,h as $e,R as Qe,i as et}from"./VAvatar.463e5f97.js";import{u as Ie,a as tt,V as at}from"./ssrBoot.411449f1.js";const O=Symbol.for("vuetify:layout"),Be=Symbol.for("vuetify:layout-item"),re=1e3,ot=te({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ce=te({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function lt(){const e=ae(O);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ke(e){var c;const o=ae(O);if(!o)throw new Error("[Vuetify] Could not find injected layout");const a=(c=e.id)!=null?c:`layout-item-${De()}`,t=ce("useLayoutItem");de(Be,{id:a});const l=T(!1);Pe(()=>l.value=!0),He(()=>l.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:r}=o.register(t,{...e,active:i(()=>l.value?!1:e.active.value),id:a});return Ne(()=>o.unregister(a)),{layoutItemStyles:s,layoutRect:o.layoutRect,layoutItemScrimStyles:r}}const nt=(e,o,a,t)=>{let l={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...l}}];for(const r of e){const c=o.get(r),f=a.get(r),y=t.get(r);if(!c||!f||!y)continue;const m={...l,[c.value]:parseInt(l[c.value],10)+(y.value?parseInt(f.value,10):0)};s.push({id:r,layer:m}),l=m}return s};function st(e){const o=ae(O,null),a=i(()=>o?o.rootZIndex.value-100:re),t=T([]),l=z(new Map),s=z(new Map),r=z(new Map),c=z(new Map),f=z(new Map),{resizeRef:y,contentRect:m}=Ie(),h=i(()=>{var u;const d=new Map,g=(u=e.overlaps)!=null?u:[];for(const V of g.filter(v=>v.includes(":"))){const[v,_]=V.split(":");if(!t.value.includes(v)||!t.value.includes(_))continue;const C=l.get(v),E=l.get(_),R=s.get(v),F=s.get(_);!C||!E||!R||!F||(d.set(_,{position:C.value,amount:parseInt(R.value,10)}),d.set(v,{position:E.value,amount:-parseInt(F.value,10)}))}return d}),p=i(()=>{const d=[...new Set([...r.values()].map(u=>u.value))].sort((u,V)=>u-V),g=[];for(const u of d){const V=t.value.filter(v=>{var _;return((_=r.get(v))==null?void 0:_.value)===u});g.push(...V)}return nt(g,l,s,c)}),S=i(()=>!Array.from(f.values()).some(d=>d.value)),$=i(()=>p.value[p.value.length-1].layer),P=i(()=>({"--v-layout-left":B($.value.left),"--v-layout-right":B($.value.right),"--v-layout-top":B($.value.top),"--v-layout-bottom":B($.value.bottom),...S.value?void 0:{transition:"none"}})),I=i(()=>p.value.slice(1).map((d,g)=>{let{id:u}=d;const{layer:V}=p.value[g],v=s.get(u),_=l.get(u);return{id:u,...V,size:Number(v.value),position:_.value}})),w=d=>I.value.find(g=>g.id===d),H=ce("createLayout"),N=T(!1);Le(()=>{N.value=!0}),de(O,{register:(d,g)=>{let{id:u,order:V,position:v,layoutSize:_,elementSize:C,active:E,disableTransitions:R,absolute:F}=g;r.set(u,V),l.set(u,v),s.set(u,_),c.set(u,E),R&&f.set(u,R);const se=ze(Be,H==null?void 0:H.vnode).indexOf(d);se>-1?t.value.splice(se,0,u):t.value.push(u);const ue=i(()=>I.value.findIndex(L=>L.id===u)),X=i(()=>a.value+p.value.length*2-ue.value*2),we=i(()=>{const L=v.value==="left"||v.value==="right",G=v.value==="right",Re=v.value==="bottom",ie={[v.value]:0,zIndex:X.value,transform:`translate${L?"X":"Y"}(${(E.value?0:-110)*(G||Re?-1:1)}%)`,position:F.value||a.value!==re?"absolute":"fixed",...S.value?void 0:{transition:"none"}};if(!N.value)return ie;const x=I.value[ue.value];if(!x)throw new Error(`[Vuetify] Could not find layout item "${u}"`);const J=h.value.get(u);return J&&(x[J.position]+=J.amount),{...ie,height:L?`calc(100% - ${x.top}px - ${x.bottom}px)`:C.value?`${C.value}px`:void 0,left:G?void 0:`${x.left}px`,right:G?`${x.right}px`:void 0,top:v.value!=="bottom"?`${x.top}px`:void 0,bottom:v.value!=="top"?`${x.bottom}px`:void 0,width:L?C.value?`${C.value}px`:void 0:`calc(100% - ${x.left}px - ${x.right}px)`}}),Ee=i(()=>({zIndex:X.value-1}));return{layoutItemStyles:we,layoutItemScrimStyles:Ee,zIndex:X}},unregister:d=>{r.delete(d),l.delete(d),s.delete(d),c.delete(d),f.delete(d),t.value=t.value.filter(g=>g!==d)},mainRect:$,mainStyles:P,getLayoutItem:w,items:I,layoutRect:m,rootZIndex:a});const M=i(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),Te=i(()=>({zIndex:a.value,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:M,layoutStyles:Te,getLayoutItem:w,items:I,layoutRect:m,layoutRef:y}}const ut="/sity_sokol/assets/logo.6757dac0.png";const Q=oe()({name:"VToolbarTitle",props:{text:String,...q()},setup(e,o){let{slots:a}=o;return A(()=>{var t;const l=!!(a.default||a.text||e.text);return n(e.tag,{class:"v-toolbar-title"},{default:()=>[l&&n("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]})}),{}}}),it=[null,"prominent","default","comfortable","compact"],Ae=te({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>it.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ge(),...he(),..._e(),...q({tag:"header"}),...le()},"v-toolbar"),ee=oe()({name:"VToolbar",props:Ae(),setup(e,o){var a;let{slots:t}=o;const{backgroundColorClasses:l,backgroundColorStyles:s}=be(D(e,"color")),{borderClasses:r}=xe(e),{elevationClasses:c}=Ve(e),{roundedClasses:f}=Se(e),{themeClasses:y}=ne(e),m=T(!!(e.extended||(a=t.extension)!=null&&a.call(t))),h=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),p=i(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Me({VBtn:{variant:"text"}}),A(()=>{var S,$,P,I,w;const H=!!(e.title||t.title),N=!!(t.image||e.image),M=(S=t.extension)==null?void 0:S.call(t);return m.value=!!(e.extended||M),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,r.value,c.value,f.value,y.value],style:[s.value]},{default:()=>[N&&n("div",{key:"image",class:"v-toolbar__image"},[n(W,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?($=t.image)==null?void 0:$.call(t):n($e,null,null)]})]),n(W,{defaults:{VTabs:{height:B(h.value)}}},{default:()=>[n("div",{class:"v-toolbar__content",style:{height:B(h.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(P=t.prepend)==null?void 0:P.call(t)]),H&&n(Q,{key:"title",text:e.title},{text:t.title}),(I=t.default)==null?void 0:I.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(w=t.append)==null?void 0:w.call(t)])])]}),n(W,{defaults:{VTabs:{height:B(p.value)}}},{default:()=>[n(Ge,null,{default:()=>[m.value&&n("div",{class:"v-toolbar__extension",style:{height:B(p.value)}},[M])]})]})]})}),{contentHeight:h,extensionHeight:p}}});function rt(e){var o;return Fe(e,Object.keys((o=ee==null?void 0:ee.props)!=null?o:{}))}const ct=oe()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ae(),...Ce(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const t=T(),l=Oe(e,"modelValue"),s=i(()=>{var h,p;var c,f;const y=(h=(c=t.value)==null?void 0:c.contentHeight)!=null?h:0,m=(p=(f=t.value)==null?void 0:f.extensionHeight)!=null?p:0;return y+m}),{layoutItemStyles:r}=ke({id:e.name,order:i(()=>parseInt(e.order,10)),position:D(e,"location"),layoutSize:s,elementSize:s,active:l,absolute:D(e,"absolute")});return A(()=>{const[c]=rt(e);return n(ee,ve({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...r.value,height:void 0}},c),a)}),{}}}),dt=j({name:"VAppBarTitle",props:{...Q.props},setup(e,o){let{slots:a}=o;return A(()=>n(Q,ve(e,{class:"v-app-bar-title"}),a)),{}}}),vt=Z("div",null,"\u041E\u041E \u0421\u043E\u043A\u043E\u043B",-1),mt=K({__name:"AppBar",setup(e){const o=[{text:"\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",icon:"mdi-clock",link:"about"},{text:"\u0423\u0441\u043B\u0443\u0433\u0438",icon:"mdi-account",link:"service"},{text:"\u041A\u043B\u0438\u0435\u043D\u0442\u044B",icon:"mdi-flag",link:"clients"},{text:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",icon:"mdi-flag",link:"teams"},{text:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",icon:"mdi-flag",link:"contacts"}];return(a,t)=>(k(),U(ct,{elevation:0,color:"#3C435C",class:"text-white"},{append:b(()=>[n(Ye,{density:"compact","bg-color":"#3C435C",class:"d-flex text-white"},{default:b(()=>[(k(),Y(ye,null,me(o,(l,s)=>n(Je,{class:"ms-1",key:s,value:l,link:"",rounded:"",to:{name:l.link}},{default:b(()=>[n(We,null,{default:b(()=>[fe(pe(l.text),1)]),_:2},1024)]),_:2},1032,["value","to"])),64))]),_:1})]),default:b(()=>[je((k(),Y("div",{class:"d-flex",style:{cursor:"pointer"},onClick:t[0]||(t[0]=Ke(l=>a.$router.push({name:"home"}),["prevent"]))},[n(et,{size:"65px"},{default:b(()=>[n($e,{alt:"Avatar",src:ut})]),_:1}),n(dt,{class:"app-bar-title d-flex align-center"},{default:b(()=>[vt]),_:1})])),[[Qe]])]),_:1}))}});const ft=j({name:"VMain",props:{scrollable:Boolean,...q({tag:"main"})},setup(e,o){let{slots:a}=o;const{mainStyles:t}=lt(),{ssrBootStyles:l}=tt();return A(()=>{var s,r;return n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,l.value]},{default:()=>[e.scrollable?n("div",{class:"v-main__scroller"},[(s=a.default)==null?void 0:s.call(a)]):(r=a.default)==null?void 0:r.call(a)]})}),{}}}),pt=K({__name:"View",setup(e){return(o,a)=>{const t=Ue("router-view");return k(),U(ft,{style:{"min-height":"calc(100vh)"}},{default:b(()=>[n(t)]),_:1})}}});const yt=j({name:"VFooter",props:{app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ge(),...he(),...Ce(),..._e(),...q({tag:"footer"}),...le()},setup(e,o){let{slots:a}=o;const{themeClasses:t}=ne(e),{backgroundColorClasses:l,backgroundColorStyles:s}=be(D(e,"color")),{borderClasses:r}=xe(e),{elevationClasses:c}=Ve(e),{roundedClasses:f}=Se(e),y=T(32),{resizeRef:m}=Ie(S=>{!S.length||(y.value=S[0].target.clientHeight)}),h=i(()=>e.height==="auto"?y.value:parseInt(e.height,10)),{layoutItemStyles:p}=ke({id:e.name,order:i(()=>parseInt(e.order,10)),position:i(()=>"bottom"),layoutSize:h,elementSize:i(()=>e.height==="auto"?void 0:h.value),active:i(()=>e.app),absolute:D(e,"absolute")});return A(()=>n(e.tag,{ref:m,class:["v-footer",t.value,l.value,r.value,c.value,f.value],style:[s.value,e.app?p.value:void 0]},a)),{}}}),gt={class:"d-flex"},ht=Z("div",null,null,-1),_t=Z("div",{class:"text-h6"},"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F C\u043E\u043A\u043E\u043B",-1),bt=K({__name:"Footer",setup(e){const o=["\u0423\u0441\u043B\u0443\u0433\u0438","\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"];return(a,t)=>(k(),U(yt,{class:"text-center d-flex flex-column justify-space-between"},{default:b(()=>[Z("div",gt,[(k(),Y(ye,null,me(o,l=>n(at,{key:l,variant:"text",class:"mx-2",rounded:"xl"},{default:b(()=>[fe(pe(l),1)]),_:2},1024)),64))]),ht,_t]),_:1}))}}),xt=Ze("app",{state:()=>({theme:"light"}),actions:{setTheme(){this.theme=this.theme==="light"?"dark":"light"}}});const Vt=j({name:"VApp",props:{...ot({fullHeight:!0}),...le()},setup(e,o){let{slots:a}=o;const t=ne(e),{layoutClasses:l,layoutStyles:s,getLayoutItem:r,items:c,layoutRef:f}=st(e),{rtlClasses:y}=qe();return A(()=>{var m;return n("div",{ref:f,class:["v-application",t.themeClasses.value,l.value,y.value],style:s.value},[n("div",{class:"v-application__wrap"},[(m=a.default)==null?void 0:m.call(a)])])}),{getLayoutItem:r,items:c,theme:t}}}),kt=K({__name:"Default",setup(e){const o=xt();return(a,t)=>(k(),U(Vt,{theme:Xe(o).$state.theme},{default:b(()=>[n(mt),n(pt),n(bt)]),_:1},8,["theme"]))}});export{kt as default};