import{p as Q,i as U,g as Fe,a as Pe,b as ee,r as w,o as xt,c as kt,d as v,e as Te,f as se,h as R,j as ze,k as Ct,l as wt,m as F,T as Vt,n as He,q as Ge,s as At,t as X,u as r,v as te,w as B,x as ne,y as je,z as Ee,A as we,B as ve,I as q,C as Oe,D as It,E as Me,F as $t,G as Bt,H as oe,J as me,K as W,L as ye,M as N,N as Ve,O as Ke,P as qe,Q as Lt,R as ge,S as We,U as Pt,V as Tt,W as Et,X as Ot,Y as Dt}from"./index.b0ffa355.js";import{m as G,u as P}from"./tag.91a4bbf7.js";import{u as Ue,m as pe,a as he,b as be,c as Se,d as _e,e as xe,f as ke,V as Y,g as Xe,h as Ze,i as Je,R as Ye,j as Qe,k as et,l as Mt,n as tt,o as Nt,p as Rt,q as nt,r as lt,s as Ft,t as Ae,v as Ne,w as zt}from"./VAvatar.3ec14ca8.js";const fe=Symbol.for("vuetify:layout"),at=Symbol.for("vuetify:layout-item"),Re=1e3,Ht=Q({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),st=Q({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Gt(){const e=U(fe);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ot(e){var i;const s=U(fe);if(!s)throw new Error("[Vuetify] Could not find injected layout");const t=(i=e.id)!=null?i:`layout-item-${Fe()}`,n=Pe("useLayoutItem");ee(at,{id:t});const o=w(!1);xt(()=>o.value=!0),kt(()=>o.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:a}=s.register(n,{...e,active:v(()=>o.value?!1:e.active.value),id:t});return Te(()=>s.unregister(t)),{layoutItemStyles:l,layoutRect:s.layoutRect,layoutItemScrimStyles:a}}const jt=(e,s,t,n)=>{let o={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...o}}];for(const a of e){const i=s.get(a),d=t.get(a),p=n.get(a);if(!i||!d||!p)continue;const f={...o,[i.value]:parseInt(o[i.value],10)+(p.value?parseInt(d.value,10):0)};l.push({id:a,layer:f}),o=f}return l};function Kt(e){const s=U(fe,null),t=v(()=>s?s.rootZIndex.value-100:Re),n=w([]),o=se(new Map),l=se(new Map),a=se(new Map),i=se(new Map),d=se(new Map),{resizeRef:p,contentRect:f}=Ue(),u=v(()=>{var m;const _=new Map,k=(m=e.overlaps)!=null?m:[];for(const C of k.filter(x=>x.includes(":"))){const[x,L]=C.split(":");if(!n.value.includes(x)||!n.value.includes(L))continue;const E=o.get(x),M=o.get(L),$=l.get(x),O=l.get(L);!E||!M||!$||!O||(_.set(L,{position:E.value,amount:parseInt($.value,10)}),_.set(x,{position:M.value,amount:-parseInt(O.value,10)}))}return _}),c=v(()=>{const _=[...new Set([...a.values()].map(m=>m.value))].sort((m,C)=>m-C),k=[];for(const m of _){const C=n.value.filter(x=>{var L;return((L=a.get(x))==null?void 0:L.value)===m});k.push(...C)}return jt(k,o,l,i)}),y=v(()=>!Array.from(d.values()).some(_=>_.value)),g=v(()=>c.value[c.value.length-1].layer),V=v(()=>({"--v-layout-left":R(g.value.left),"--v-layout-right":R(g.value.right),"--v-layout-top":R(g.value.top),"--v-layout-bottom":R(g.value.bottom),...y.value?void 0:{transition:"none"}})),I=v(()=>c.value.slice(1).map((_,k)=>{let{id:m}=_;const{layer:C}=c.value[k],x=l.get(m),L=o.get(m);return{id:m,...C,size:Number(x.value),position:L.value}})),A=_=>I.value.find(k=>k.id===_),S=Pe("createLayout"),b=w(!1);ze(()=>{b.value=!0}),ee(fe,{register:(_,k)=>{let{id:m,order:C,position:x,layoutSize:L,elementSize:E,active:M,disableTransitions:$,absolute:O}=k;a.set(m,C),o.set(m,x),l.set(m,L),i.set(m,M),$&&d.set(m,$);const h=Ct(at,S==null?void 0:S.vnode).indexOf(_);h>-1?n.value.splice(h,0,m):n.value.push(m);const H=v(()=>I.value.findIndex(j=>j.id===m)),Z=v(()=>t.value+c.value.length*2-H.value*2),re=v(()=>{const j=x.value==="left"||x.value==="right",J=x.value==="right",Ce=x.value==="bottom",de={[x.value]:0,zIndex:Z.value,transform:`translate${j?"X":"Y"}(${(M.value?0:-110)*(J||Ce?-1:1)}%)`,position:O.value||t.value!==Re?"absolute":"fixed",...y.value?void 0:{transition:"none"}};if(!b.value)return de;const D=I.value[H.value];if(!D)throw new Error(`[Vuetify] Could not find layout item "${m}"`);const K=u.value.get(m);return K&&(D[K.position]+=K.amount),{...de,height:j?`calc(100% - ${D.top}px - ${D.bottom}px)`:E.value?`${E.value}px`:void 0,left:J?void 0:`${D.left}px`,right:J?`${D.right}px`:void 0,top:x.value!=="bottom"?`${D.top}px`:void 0,bottom:x.value!=="top"?`${D.bottom}px`:void 0,width:j?E.value?`${E.value}px`:void 0:`calc(100% - ${D.left}px - ${D.right}px)`}}),ce=v(()=>({zIndex:Z.value-1}));return{layoutItemStyles:re,layoutItemScrimStyles:ce,zIndex:Z}},unregister:_=>{a.delete(_),o.delete(_),l.delete(_),i.delete(_),d.delete(_),n.value=n.value.filter(k=>k!==_)},mainRect:g,mainStyles:V,getLayoutItem:A,items:I,layoutRect:f,rootZIndex:t});const z=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),le=v(()=>({zIndex:t.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:z,layoutStyles:le,getLayoutItem:A,items:I,layoutRect:f,layoutRef:p}}const qt="/sity_sokol/assets/logo.6757dac0.png",it=wt("app",{state:()=>({theme:"light"}),actions:{setTheme(){this.theme=this.theme==="light"?"dark":"light"}}});function T(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",t=arguments.length>2?arguments[2]:void 0;return F({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:t},origin:{type:String,default:s}},setup(n,o){let{slots:l}=o;return()=>{const a=n.group?Vt:He;return Ge(a,{name:e,mode:n.mode,onBeforeEnter(i){i.style.transformOrigin=n.origin},onLeave(i){if(n.leaveAbsolute){const{offsetTop:d,offsetLeft:p,offsetWidth:f,offsetHeight:u}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=`${d}px`,i.style.left=`${p}px`,i.style.width=`${f}px`,i.style.height=`${u}px`}n.hideOnLeave&&i.style.setProperty("display","none","important")},onAfterLeave(i){if(n.leaveAbsolute&&i!=null&&i._transitionInitialStyles){const{position:d,top:p,left:f,width:u,height:c}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=d||"",i.style.top=p||"",i.style.left=f||"",i.style.width=u||"",i.style.height=c||""}}},l.default)}}})}function ut(e,s){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return F({name:e,props:{mode:{type:String,default:t}},setup(n,o){let{slots:l}=o;return()=>Ge(He,{name:e,...s},l.default)}})}function rt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=At(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const i=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const d=`${a[n]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=i.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=d})},onAfterEnter:l,onEnterCancelled:l,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[n]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(a){e&&a._parent&&a._parent.classList.remove(e),l(a)}function l(a){const i=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,i!=null&&(a.style[t]=i),delete a._initialStyle}}T("fab-transition","center center","out-in");T("dialog-bottom-transition");T("dialog-top-transition");T("fade-transition");T("scale-transition");T("scroll-x-transition");T("scroll-x-reverse-transition");T("scroll-y-transition");T("scroll-y-reverse-transition");T("slide-x-transition");T("slide-x-reverse-transition");T("slide-y-transition");T("slide-y-reverse-transition");const ct=ut("expand-transition",rt());ut("expand-x-transition",rt("",!0));const Ie=X()({name:"VToolbarTitle",props:{text:String,...G()},setup(e,s){let{slots:t}=s;return P(()=>{var n;const o=!!(t.default||t.text||e.text);return r(e.tag,{class:"v-toolbar-title"},{default:()=>[o&&r("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]})}),{}}}),Wt=[null,"prominent","default","comfortable","compact"],dt=Q({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Wt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...pe(),...he(),...be(),...G({tag:"header"}),...te()},"v-toolbar"),$e=X()({name:"VToolbar",props:dt(),setup(e,s){var t;let{slots:n}=s;const{backgroundColorClasses:o,backgroundColorStyles:l}=Se(B(e,"color")),{borderClasses:a}=_e(e),{elevationClasses:i}=xe(e),{roundedClasses:d}=ke(e),{themeClasses:p}=ne(e),f=w(!!(e.extended||(t=n.extension)!=null&&t.call(n))),u=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=v(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return je({VBtn:{variant:"text"}}),P(()=>{var y,g,V,I,A;const S=!!(e.title||n.title),b=!!(n.image||e.image),z=(y=n.extension)==null?void 0:y.call(n);return f.value=!!(e.extended||z),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,a.value,i.value,d.value,p.value],style:[l.value]},{default:()=>[b&&r("div",{key:"image",class:"v-toolbar__image"},[r(Y,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[n.image?(g=n.image)==null?void 0:g.call(n):r(Xe,null,null)]})]),r(Y,{defaults:{VTabs:{height:R(u.value)}}},{default:()=>[r("div",{class:"v-toolbar__content",style:{height:R(u.value)}},[n.prepend&&r("div",{class:"v-toolbar__prepend"},[(V=n.prepend)==null?void 0:V.call(n)]),S&&r(Ie,{key:"title",text:e.title},{text:n.title}),(I=n.default)==null?void 0:I.call(n),n.append&&r("div",{class:"v-toolbar__append"},[(A=n.append)==null?void 0:A.call(n)])])]}),r(Y,{defaults:{VTabs:{height:R(c.value)}}},{default:()=>[r(ct,null,{default:()=>[f.value&&r("div",{class:"v-toolbar__extension",style:{height:R(c.value)}},[z])]})]})]})}),{contentHeight:u,extensionHeight:c}}});function Ut(e){var s;return Ee(e,Object.keys((s=$e==null?void 0:$e.props)!=null?s:{}))}const Xt=X()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...dt(),...st(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const n=w(),o=we(e,"modelValue"),l=v(()=>{var u,c;var i,d;const p=(u=(i=n.value)==null?void 0:i.contentHeight)!=null?u:0,f=(c=(d=n.value)==null?void 0:d.extensionHeight)!=null?c:0;return p+f}),{layoutItemStyles:a}=ot({id:e.name,order:v(()=>parseInt(e.order,10)),position:B(e,"location"),layoutSize:l,elementSize:l,active:o,absolute:B(e,"absolute")});return P(()=>{const[i]=Ut(e);return r($e,ve({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...a.value,height:void 0}},i),t)}),{}}}),Zt=F({name:"VAppBarNavIcon",props:{icon:{type:q,default:"$menu"}},setup(e,s){let{slots:t}=s;return P(()=>r(Ze,{class:"v-app-bar-nav-icon",icon:e.icon},t)),{}}}),Jt=F({name:"VAppBarTitle",props:{...Ie.props},setup(e,s){let{slots:t}=s;return P(()=>r(Ie,ve(e,{class:"v-app-bar-title"}),t)),{}}});const Yt=F({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...te()},setup(e,s){let{attrs:t}=s;const{themeClasses:n}=ne(e),{backgroundColorClasses:o,backgroundColorStyles:l}=Se(B(e,"color")),a=v(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=R(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=R(e.thickness)),i});return P(()=>r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,o.value],style:[a.value,l.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),Be=Symbol.for("vuetify:list");function vt(){const e=U(Be,{hasPrepend:w(!1),updateHasPrepend:()=>null}),s={hasPrepend:w(!1),updateHasPrepend:t=>{t&&(s.hasPrepend.value=t)}};return ee(Be,s),e}function ft(){return U(Be,null)}const Qt={open:e=>{let{id:s,value:t,opened:n,parents:o}=e;if(t){const l=new Set;l.add(s);let a=o.get(s);for(;a!=null;)l.add(a),a=o.get(a);return l}else return n.delete(s),n},select:()=>null},mt={open:e=>{let{id:s,value:t,opened:n,parents:o}=e;if(t){let l=o.get(s);for(n.add(s);l!=null&&l!==s;)n.add(l),l=o.get(l);return n}else n.delete(s);return n},select:()=>null},en={open:mt.open,select:e=>{let{id:s,value:t,opened:n,parents:o}=e;if(!t)return n;const l=[];let a=o.get(s);for(;a!=null;)l.push(a),a=o.get(a);return new Set(l)}},De=e=>{const s={select:t=>{let{id:n,value:o,selected:l}=t;if(e&&!o){const a=Array.from(l.entries()).reduce((i,d)=>{let[p,f]=d;return f==="on"?[...i,p]:i},[]);if(a.length===1&&a[0]===n)return l}return l.set(n,o?"on":"off"),l},in:(t,n,o)=>{let l=new Map;for(const a of t||[])l=s.select({id:a,value:!0,selected:new Map(l),children:n,parents:o});return l},out:t=>{const n=[];for(const[o,l]of t.entries())l==="on"&&n.push(o);return n}};return s},yt=e=>{const s=De(e);return{select:n=>{let{selected:o,id:l,...a}=n;const i=o.has(l)?new Map([[l,o.get(l)]]):new Map;return s.select({...a,id:l,selected:i})},in:(n,o,l)=>{let a=new Map;return n!=null&&n.length&&(a=s.in(n.slice(0,1),o,l)),a},out:(n,o,l)=>s.out(n,o,l)}},tn=e=>{const s=De(e);return{select:n=>{let{id:o,selected:l,children:a,...i}=n;return a.has(o)?l:s.select({id:o,selected:l,children:a,...i})},in:s.in,out:s.out}},nn=e=>{const s=yt(e);return{select:n=>{let{id:o,selected:l,children:a,...i}=n;return a.has(o)?l:s.select({id:o,selected:l,children:a,...i})},in:s.in,out:s.out}},ln=e=>{const s={select:t=>{let{id:n,value:o,selected:l,children:a,parents:i}=t;const d=new Map(l),p=[n];for(;p.length;){const u=p.shift();l.set(u,o?"on":"off"),a.has(u)&&p.push(...a.get(u))}let f=i.get(n);for(;f;){const u=a.get(f),c=u.every(g=>l.get(g)==="on"),y=u.every(g=>!l.has(g)||l.get(g)==="off");l.set(f,c?"on":y?"off":"indeterminate"),f=i.get(f)}return e&&!o&&Array.from(l.entries()).reduce((c,y)=>{let[g,V]=y;return V==="on"?[...c,g]:c},[]).length===0?d:l},in:(t,n,o)=>{let l=new Map;for(const a of t||[])l=s.select({id:a,value:!0,selected:new Map(l),children:n,parents:o});return l},out:(t,n)=>{const o=[];for(const[l,a]of t.entries())a==="on"&&!n.has(l)&&o.push(l);return o}};return s},ie=Symbol.for("vuetify:nested"),gt={id:w(),root:{register:()=>null,unregister:()=>null,parents:w(new Map),children:w(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:w(new Set),selected:w(new Map),selectedValues:w([])}},an=Q({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),sn=e=>{let s=!1;const t=w(new Map),n=w(new Map),o=we(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),l=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return nn(e.mandatory);case"leaf":return tn(e.mandatory);case"independent":return De(e.mandatory);case"single-independent":return yt(e.mandatory);case"classic":default:return ln(e.mandatory)}}),a=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return en;case"single":return Qt;case"multiple":default:return mt}}),i=we(e,"selected",e.selected,u=>l.value.in(u,t.value,n.value),u=>l.value.out(u,t.value,n.value));Te(()=>{s=!0});function d(u){const c=[];let y=u;for(;y!=null;)c.unshift(y),y=n.value.get(y);return c}const p=Pe("nested"),f={id:w(),root:{opened:o,selected:i,selectedValues:v(()=>{const u=[];for(const[c,y]of i.value.entries())y==="on"&&u.push(c);return u}),register:(u,c,y)=>{c&&u!==c&&n.value.set(u,c),y&&t.value.set(u,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],u])},unregister:u=>{var y;if(s)return;t.value.delete(u);const c=n.value.get(u);if(c){const g=(y=t.value.get(c))!=null?y:[];t.value.set(c,g.filter(V=>V!==u))}n.value.delete(u),o.value.delete(u)},open:(u,c,y)=>{p.emit("click:open",{id:u,value:c,path:d(u),event:y});const g=a.value.open({id:u,value:c,opened:new Set(o.value),children:t.value,parents:n.value,event:y});g&&(o.value=g)},openOnSelect:(u,c,y)=>{const g=a.value.select({id:u,value:c,selected:new Map(i.value),opened:new Set(o.value),children:t.value,parents:n.value,event:y});g&&(o.value=g)},select:(u,c,y)=>{p.emit("click:select",{id:u,value:c,path:d(u),event:y});const g=l.value.select({id:u,value:c,selected:new Map(i.value),children:t.value,parents:n.value,event:y});g&&(i.value=g),f.root.openOnSelect(u,c,y)},children:t,parents:n}};return ee(ie,f),f.root},pt=(e,s)=>{const t=U(ie,gt),n=v(()=>{var l;return(l=e.value)!=null?l:Symbol(Fe())}),o={...t,id:n,open:(l,a)=>t.root.open(n.value,l,a),openOnSelect:(l,a)=>t.root.openOnSelect(n.value,l,a),isOpen:v(()=>t.root.opened.value.has(n.value)),parent:v(()=>t.root.parents.value.get(n.value)),select:(l,a)=>t.root.select(n.value,l,a),isSelected:v(()=>t.root.selected.value.get(n.value)==="on"),isIndeterminate:v(()=>t.root.selected.value.get(n.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(n.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(n.value,t.id.value,s),Te(()=>{!t.isGroupActivator&&t.root.unregister(n.value)}),s&&ee(ie,o),o},on=()=>{const e=U(ie,gt);ee(ie,{...e,isGroupActivator:!0})},un=F({name:"VListGroupActivator",setup(e,s){let{slots:t}=s;return on(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),rn=Q({activeColor:String,color:String,collapseIcon:{type:q,default:"$collapse"},expandIcon:{type:q,default:"$expand"},prependIcon:q,appendIcon:q,fluid:Boolean,subgroup:Boolean,value:null,...G()},"v-list-group"),ht=X()({name:"VListGroup",props:{title:String,...rn()},setup(e,s){let{slots:t}=s;const{isOpen:n,open:o,id:l}=pt(B(e,"value"),!0),a=v(()=>`v-list-group--id-${String(l.value)}`),i=ft();function d(u){o(!n.value,u)}const p=v(()=>({onClick:d,class:"v-list-group__header",id:a.value})),f=v(()=>n.value?e.collapseIcon:e.expandIcon);return P(()=>{var u;return r(e.tag,{class:["v-list-group",{"v-list-group--prepend":i==null?void 0:i.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value}]},{default:()=>[t.activator&&r(Y,{defaults:{VListItem:{active:n.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&f.value,appendIcon:e.appendIcon||!e.subgroup&&f.value,title:e.title,value:e.value}}},{default:()=>[r(un,null,{default:()=>[t.activator({props:p.value,isOpen:n})]})]}),r(ct,null,{default:()=>[Oe(r("div",{class:"v-list-group__items",role:"group","aria-labelledby":a.value},[(u=t.default)==null?void 0:u.call(t)]),[[It,n.value]])]})]})}),{}}});function cn(e){return Ee(e,Object.keys(ht.props))}const dn=Je("v-list-item-subtitle"),bt=Je("v-list-item-title"),Le=X()({name:"VListItem",directives:{Ripple:Ye},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:q,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:q,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Me,onClickOnce:Me,...pe(),...Qe(),...et(),...he(),...be(),...Mt(),...G(),...te(),...tt({variant:"text"})},emits:{click:e=>!0},setup(e,s){let{attrs:t,slots:n,emit:o}=s;const l=Nt(e,t),a=v(()=>{var h;return(h=e.value)!=null?h:l.href.value}),{select:i,isSelected:d,isIndeterminate:p,isGroupActivator:f,root:u,parent:c,openOnSelect:y}=pt(a,!1),g=ft(),V=v(()=>{var h;return e.active!==!1&&(e.active||((h=l.isActive)==null?void 0:h.value)||d.value)}),I=v(()=>e.link!==!1&&l.isLink.value),A=v(()=>!e.disabled&&e.link!==!1&&(e.link||l.isClickable.value||e.value!=null&&!!g)),S=v(()=>e.rounded||e.nav),b=v(()=>{var h;return{color:V.value&&(h=e.activeColor)!=null?h:e.color,variant:e.variant}});$t(()=>{var h;return(h=l.isActive)==null?void 0:h.value},h=>{h&&c.value!=null&&u.open(c.value,!0),h&&y(h)},{immediate:!0});const{themeClasses:z}=ne(e),{borderClasses:le}=_e(e),{colorClasses:_,colorStyles:k,variantClasses:m}=Rt(b),{densityClasses:C}=nt(e),{dimensionStyles:x}=lt(e),{elevationClasses:L}=xe(e),{roundedClasses:E}=ke(S),M=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),$=v(()=>({isActive:V.value,select:i,isSelected:d.value,isIndeterminate:p.value}));function O(h){var H;o("click",h),!(f||!A.value)&&((H=l.navigate)==null||H.call(l,h),e.value!=null&&i(!d.value,h))}function ue(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),O(h))}return P(()=>{var h,H,Z,re,ce;const j=I.value?"a":e.tag,J=!g||d.value||V.value,Ce=n.title||e.title,de=n.subtitle||e.subtitle,D=!!(n.append||e.appendAvatar||e.appendIcon),K=!!(n.prepend||e.prependAvatar||e.prependIcon);return g==null||g.updateHasPrepend(K),Oe(r(j,{class:["v-list-item",{"v-list-item--active":V.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!K&&(g==null?void 0:g.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&V.value},z.value,le.value,J?_.value:void 0,C.value,L.value,M.value,E.value,m.value],style:[J?k.value:void 0,x.value],href:l.href.value,tabindex:A.value?0:void 0,onClick:O,onKeydown:A.value&&!I.value&&ue},{default:()=>[Ft(A.value||V.value,"v-list-item"),K&&r(Y,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[r("div",{class:"v-list-item__prepend"},[e.prependAvatar&&r(Ae,{key:"prepend-avatar"},null),e.prependIcon&&r(Ne,{key:"prepend-icon"},null),(h=n.prepend)==null?void 0:h.call(n,$.value)])]}),r("div",{class:"v-list-item__content","data-no-activator":""},[Ce&&r(bt,{key:"title"},{default:()=>{var ae;return[(ae=(H=n.title)==null?void 0:H.call(n,{title:e.title}))!=null?ae:e.title]}}),de&&r(dn,{key:"subtitle"},{default:()=>{var ae;return[(ae=(Z=n.subtitle)==null?void 0:Z.call(n,{subtitle:e.subtitle}))!=null?ae:e.subtitle]}}),(re=n.default)==null?void 0:re.call(n,$.value)]),D&&r(Y,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[r("div",{class:"v-list-item__append"},[(ce=n.append)==null?void 0:ce.call(n,$.value),e.appendIcon&&r(Ne,{key:"append-icon"},null),e.appendAvatar&&r(Ae,{key:"append-avatar"},null)])]})]}),[[Bt("ripple"),A.value]])}),{}}}),vn=F({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...G()},setup(e,s){let{slots:t}=s;const{textColorClasses:n,textColorStyles:o}=zt(B(e,"color"));return P(()=>{var l;const a=!!(t.default||e.title);return r(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value],style:{textColorStyles:o}},{default:()=>{var i;return[a&&r("div",{class:"v-list-subheader__text"},[(i=(l=t.default)==null?void 0:l.call(t))!=null?i:e.title])]}})}),{}}}),St=X()({name:"VListChildren",props:{items:Array},setup(e,s){let{slots:t}=s;return vt(),()=>{var l;var n,o;return(l=(n=t.default)==null?void 0:n.call(t))!=null?l:(o=e.items)==null?void 0:o.map(a=>{var I,A;let{children:i,props:d,type:p,raw:f}=a;if(p==="divider"){var u;return(I=(u=t.divider)==null?void 0:u.call(t,{props:d}))!=null?I:r(Yt,d,null)}if(p==="subheader"){var c;return(A=(c=t.subheader)==null?void 0:c.call(t,{props:d}))!=null?A:r(vn,d,{default:t.subheader})}const y={subtitle:t.subtitle?S=>{var b;return(b=t.subtitle)==null?void 0:b.call(t,{...S,item:f})}:void 0,prepend:t.prepend?S=>{var b;return(b=t.prepend)==null?void 0:b.call(t,{...S,item:f})}:void 0,append:t.append?S=>{var b;return(b=t.append)==null?void 0:b.call(t,{...S,item:f})}:void 0,default:t.default?S=>{var b;return(b=t.default)==null?void 0:b.call(t,{...S,item:f})}:void 0,title:t.title?S=>{var b;return(b=t.title)==null?void 0:b.call(t,{...S,item:f})}:void 0},[g,V]=cn(d);return i?r(ht,ve({value:d==null?void 0:d.value},g),{activator:S=>{let{props:b}=S;return t.header?t.header({...d,...b}):r(Le,ve(d,b),y)},default:()=>r(St,{items:i},t)}):t.item?t.item(d):r(Le,d,y)})}}}),fn=Q({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function mn(e,s){const t=oe(s,e.itemType,"item"),n=typeof s=="string"?s:oe(s,e.itemTitle),o=oe(s,e.itemValue,void 0),l=oe(s,e.itemChildren),a=e.itemProps===!0?Ee(s,["children"])[1]:oe(s,e.itemProps),i={title:n,value:o,...a};return{type:t,title:i.title,value:i.value,props:i,children:t==="item"&&l?_t(e,l):void 0,raw:s}}function _t(e,s){const t=[];for(const n of s)t.push(mn(e,n));return t}function yn(e){return{items:v(()=>_t(e,e.items))}}const gn=X()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...an({selectStrategy:"single-leaf",openStrategy:"list"}),...pe(),...Qe(),...et(),...he(),itemType:{type:String,default:"type"},...fn(),...be(),...G(),...te(),...tt({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,s){let{slots:t}=s;const{items:n}=yn(e),{themeClasses:o}=ne(e),{backgroundColorClasses:l,backgroundColorStyles:a}=Se(B(e,"bgColor")),{borderClasses:i}=_e(e),{densityClasses:d}=nt(e),{dimensionStyles:p}=lt(e),{elevationClasses:f}=xe(e),{roundedClasses:u}=ke(e),{open:c,select:y}=sn(e),g=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),V=B(e,"activeColor"),I=B(e,"color");vt(),je({VListGroup:{activeColor:V,color:I},VListItem:{activeClass:B(e,"activeClass"),activeColor:V,color:I,density:B(e,"density"),disabled:B(e,"disabled"),lines:B(e,"lines"),nav:B(e,"nav"),variant:B(e,"variant")}});const A=w(!1),S=w();function b(m){A.value=!0}function z(m){A.value=!1}function le(m){var C;!A.value&&!(m.relatedTarget&&(C=S.value)!=null&&C.contains(m.relatedTarget))&&k()}function _(m){if(!!S.value){if(m.key==="ArrowDown")k("next");else if(m.key==="ArrowUp")k("prev");else if(m.key==="Home")k("first");else if(m.key==="End")k("last");else return;m.preventDefault()}}function k(m){if(!S.value)return;const C=[...S.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter($=>!$.hasAttribute("disabled")),x=C.indexOf(document.activeElement);if(m)if(m==="first"){var E;(E=C[0])==null||E.focus()}else if(m==="last"){var M;(M=C.at(-1))==null||M.focus()}else{let $,O=x;const ue=m==="next"?1:-1;do O+=ue,$=C[O];while((!$||$.offsetParent==null)&&O<C.length&&O>=0);$?$.focus():k(m==="next"?"first":"last")}else if(!S.value.contains(document.activeElement)){var L;(L=C[0])==null||L.focus()}}return P(()=>r(e.tag,{ref:S,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},o.value,l.value,i.value,d.value,f.value,g.value,u.value],style:[a.value,p.value],role:"listbox","aria-activedescendant":void 0,onFocusin:b,onFocusout:z,onFocus:le,onKeydown:_},{default:()=>[r(St,{items:n.value},t)]})),{open:c,select:y,focus:k}}}),pn=ge("div",null,"\u041E\u041E \u0421\u043E\u043A\u043E\u043B",-1),hn=me({__name:"AppBar",setup(e){it();const s=[{text:"\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",icon:"mdi-clock",link:"about"},{text:"\u0423\u0441\u043B\u0443\u0433\u0438",icon:"mdi-account",link:"service"},{text:"\u041A\u043B\u0438\u0435\u043D\u0442\u044B",icon:"mdi-flag",link:"clients"},{text:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",icon:"mdi-flag",link:"teams"},{text:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",icon:"mdi-flag",link:"contacts"}];return(t,n)=>(W(),ye(Xt,{elevation:0,color:"#3C435C",class:"text-white"},{append:N(()=>[r(gn,{density:"compact","bg-color":"#3C435C",class:"d-flex text-white"},{default:N(()=>[(W(),Ve(qe,null,Ke(s,(o,l)=>r(Le,{key:l,value:o,link:"",to:o.link},{default:N(()=>[r(bt,{textContent:We(o.text)},null,8,["textContent"])]),_:2},1032,["value","to"])),64))]),_:1}),r(Zt)]),default:N(()=>[Oe((W(),Ve("div",{class:"d-flex",style:{cursor:"pointer"},onClick:n[0]||(n[0]=Lt(o=>t.$router.push({name:"home"}),["prevent"]))},[r(Ae,{size:"65px"},{default:N(()=>[r(Xe,{alt:"Avatar",src:qt})]),_:1}),r(Jt,{class:"app-bar-title d-flex align-center"},{default:N(()=>[pn]),_:1})])),[[Ye]])]),_:1}))}});function bn(){const e=w(!1);return ze(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:Pt(e)}}const Sn=F({name:"VMain",props:{scrollable:Boolean,...G({tag:"main"})},setup(e,s){let{slots:t}=s;const{mainStyles:n}=Gt(),{ssrBootStyles:o}=bn();return P(()=>{var l,a;return r(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[n.value,o.value]},{default:()=>[e.scrollable?r("div",{class:"v-main__scroller"},[(l=t.default)==null?void 0:l.call(t)]):(a=t.default)==null?void 0:a.call(t)]})}),{}}}),_n=me({__name:"View",setup(e){return(s,t)=>{const n=Tt("router-view");return W(),ye(Sn,{style:{"min-height":"calc(100vh)"}},{default:N(()=>[r(n)]),_:1})}}});const xn=F({name:"VFooter",props:{app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...pe(),...he(),...st(),...be(),...G({tag:"footer"}),...te()},setup(e,s){let{slots:t}=s;const{themeClasses:n}=ne(e),{backgroundColorClasses:o,backgroundColorStyles:l}=Se(B(e,"color")),{borderClasses:a}=_e(e),{elevationClasses:i}=xe(e),{roundedClasses:d}=ke(e),p=w(32),{resizeRef:f}=Ue(y=>{!y.length||(p.value=y[0].target.clientHeight)}),u=v(()=>e.height==="auto"?p.value:parseInt(e.height,10)),{layoutItemStyles:c}=ot({id:e.name,order:v(()=>parseInt(e.order,10)),position:v(()=>"bottom"),layoutSize:u,elementSize:v(()=>e.height==="auto"?void 0:u.value),active:v(()=>e.app),absolute:B(e,"absolute")});return P(()=>r(e.tag,{ref:f,class:["v-footer",n.value,o.value,a.value,i.value,d.value],style:[l.value,e.app?c.value:void 0]},t)),{}}}),kn={class:"d-flex"},Cn=ge("div",null,null,-1),wn=ge("div",{class:"text-h6"},"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F C\u043E\u043A\u043E\u043B",-1),Vn=me({__name:"Footer",setup(e){const s=["\u0423\u0441\u043B\u0443\u0433\u0438","\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"];return(t,n)=>(W(),ye(xn,{class:"text-center d-flex flex-column justify-space-between"},{default:N(()=>[ge("div",kn,[(W(),Ve(qe,null,Ke(s,o=>r(Ze,{key:o,variant:"text",class:"mx-2",rounded:"xl"},{default:N(()=>[Et(We(o),1)]),_:2},1024)),64))]),Cn,wn]),_:1}))}});const An=F({name:"VApp",props:{...Ht({fullHeight:!0}),...te()},setup(e,s){let{slots:t}=s;const n=ne(e),{layoutClasses:o,layoutStyles:l,getLayoutItem:a,items:i,layoutRef:d}=Kt(e),{rtlClasses:p}=Ot();return P(()=>{var f;return r("div",{ref:d,class:["v-application",n.themeClasses.value,o.value,p.value],style:l.value},[r("div",{class:"v-application__wrap"},[(f=t.default)==null?void 0:f.call(t)])])}),{getLayoutItem:a,items:i,theme:n}}}),Ln=me({__name:"Default",setup(e){const s=it();return(t,n)=>(W(),ye(An,{theme:Dt(s).$state.theme},{default:N(()=>[r(hn),r(_n),r(Vn)]),_:1},8,["theme"]))}});export{Ln as default};
