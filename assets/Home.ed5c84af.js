import{a as S,k as x,l as G,V as A,w as N,R as Eu,b as Cu,n as bu,c as hu,z as Du,A as ku,B as Au,d as pu,o as Su,m as B,p as xu,f as Bu,r as Vu,s as Iu,t as Fu,g as $u,C as Pu,D as Lu,E as ju,h as Nu,q as wu,i as M,L as Tu,v as Ou,j as Ru}from"./VAvatar.49d8e90c.js";import{m as g,y as Gu,u as n,I as C,v as Mu,x as Uu,c as b,C as zu,G as qu,_ as V,q as U,J as z,K as p,N as w,S as c,M as f,W as k,Q as Hu,O as Ju,P as T,ai as Wu,aj as Ku,L as Qu}from"./index.9eaa8386.js";import{_ as Yu}from"./_plugin-vue_export-helper.cdc0426e.js";const E="/sity_sokol/assets/cards_img_3.9ffa5c06.svg",Xu="/sity_sokol/assets/camera_2.0fbd1be3.jpg",Zu="/sity_sokol/assets/fon.3a1b3243.jpg";const q=g({name:"VCardActions",setup(u,l){let{slots:t}=l;return Gu({VBtn:{variant:"text"}}),S(()=>{var e;return n("div",{class:"v-card-actions"},[(e=t.default)==null?void 0:e.call(t)])}),{}}}),ue=x("v-card-subtitle"),H=x("v-card-title"),ee=g({name:"VCardItem",props:{appendAvatar:String,appendIcon:C,prependAvatar:String,prependIcon:C,subtitle:String,title:String,...G()},setup(u,l){let{slots:t}=l;return S(()=>{var e,a,s,d,o;const r=!!(u.prependAvatar||u.prependIcon||t.prepend),v=!!(u.appendAvatar||u.appendIcon||t.append),h=!!(u.title||t.title),D=!!(u.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[r&&n(A,{key:"prepend",defaults:{VAvatar:{density:u.density,icon:u.prependIcon,image:u.prependAvatar},VIcon:{density:u.density,icon:u.prependIcon}}},{default:()=>{var i;return[n("div",{class:"v-card-item__prepend"},[(i=(e=t.prepend)==null?void 0:e.call(t))!=null?i:n(N,null,null)])]}}),n("div",{class:"v-card-item__content"},[h&&n(H,{key:"title"},{default:()=>{var i;return[(i=(a=t.title)==null?void 0:a.call(t))!=null?i:u.title]}}),D&&n(ue,{key:"subtitle"},{default:()=>{var i;return[(i=(s=t.subtitle)==null?void 0:s.call(t))!=null?i:u.subtitle]}}),(d=t.default)==null?void 0:d.call(t)]),v&&n(A,{key:"append",defaults:{VAvatar:{density:u.density,icon:u.appendIcon,image:u.appendAvatar},VIcon:{density:u.density,icon:u.appendIcon}}},{default:()=>{var i;return[n("div",{class:"v-card-item__append"},[(i=(o=t.append)==null?void 0:o.call(t))!=null?i:n(N,null,null)])]}})])}),{}}}),J=x("v-card-text"),te=g({name:"VCard",directives:{Ripple:Eu},props:{appendAvatar:String,appendIcon:C,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:C,ripple:Boolean,subtitle:String,text:String,title:String,...Mu(),...Cu(),...G(),...bu(),...hu(),...Du(),...ku(),...Au(),...pu(),...Su(),...B(),...xu({variant:"elevated"})},setup(u,l){let{attrs:t,slots:e}=l;const{themeClasses:a}=Uu(u),{borderClasses:s}=Bu(u),{colorClasses:d,colorStyles:o,variantClasses:r}=Vu(u),{densityClasses:v}=Iu(u),{dimensionStyles:h}=Fu(u),{elevationClasses:D}=$u(u),{loaderClasses:i}=Pu(u),{locationStyles:lu}=Lu(u),{positionClasses:su}=ju(u),{roundedClasses:iu}=Nu(u),_=wu(u,t),ou=b(()=>u.link!==!1&&_.isLink.value),y=b(()=>!u.disabled&&u.link!==!1&&(u.link||_.isClickable.value));return S(()=>{var P,L,j;const du=ou.value?"a":u.tag,cu=!!(e.title||u.title),ru=!!(e.subtitle||u.subtitle),fu=cu||ru,vu=!!(e.append||u.appendAvatar||u.appendIcon),mu=!!(e.prepend||u.prependAvatar||u.prependIcon),gu=!!(e.image||u.image),_u=fu||mu||vu,yu=!!(e.text||u.text);return zu(n(du,{class:["v-card",{"v-card--disabled":u.disabled,"v-card--flat":u.flat,"v-card--hover":u.hover&&!(u.disabled||u.flat),"v-card--link":y.value},a.value,s.value,d.value,v.value,D.value,i.value,su.value,iu.value,r.value],style:[o.value,h.value,lu.value],href:_.href.value,onClick:y.value&&_.navigate,tabindex:u.disabled?-1:void 0},{default:()=>[gu&&n(A,{key:"image",defaults:{VImg:{cover:!0,src:u.image}}},{default:()=>{var m;return[n("div",{class:"v-card__image"},[(m=(P=e.image)==null?void 0:P.call(e))!=null?m:n(M,null,null)])]}}),n(Tu,{name:"v-card",active:!!u.loading,color:typeof u.loading=="boolean"?void 0:u.loading},{default:e.loader}),_u&&n(ee,{key:"item",prependAvatar:u.prependAvatar,prependIcon:u.prependIcon,title:u.title,subtitle:u.subtitle,appendAvatar:u.appendAvatar,appendIcon:u.appendIcon},{default:e.item,prepend:e.prepend,title:e.title,subtitle:e.subtitle,append:e.append}),yu&&n(J,{key:"text"},{default:()=>{var m;return[(m=(L=e.text)==null?void 0:L.call(e))!=null?m:u.text]}}),(j=e.default)==null?void 0:j.call(e),e.actions&&n(q,null,{default:e.actions}),Ou(y.value,"v-card")]}),[[qu("ripple"),y.value]])}),{}}});const I=["sm","md","lg","xl","xxl"],W=(()=>I.reduce((u,l)=>(u[l]={type:[Boolean,String,Number],default:!1},u),{}))(),K=(()=>I.reduce((u,l)=>(u["offset"+V(l)]={type:[String,Number],default:null},u),{}))(),Q=(()=>I.reduce((u,l)=>(u["order"+V(l)]={type:[String,Number],default:null},u),{}))(),O={col:Object.keys(W),offset:Object.keys(K),order:Object.keys(Q)};function ae(u,l,t){let e=u;if(!(t==null||t===!1)){if(l){const a=l.replace(u,"");e+=`-${a}`}return u==="col"&&(e="v-"+e),u==="col"&&(t===""||t===!0)||(e+=`-${t}`),e.toLowerCase()}}const ne=["auto","start","end","center","baseline","stretch"],le=g({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...W,offset:{type:[String,Number],default:null},...K,order:{type:[String,Number],default:null},...Q,alignSelf:{type:String,default:null,validator:u=>ne.includes(u)},...B()},setup(u,l){let{slots:t}=l;const e=b(()=>{const a=[];let s;for(s in O)O[s].forEach(o=>{const r=u[o],v=ae(s,o,r);v&&a.push(v)});const d=a.some(o=>o.startsWith("v-col-"));return a.push({"v-col":!d||!u.cols,[`v-col-${u.cols}`]:u.cols,[`offset-${u.offset}`]:u.offset,[`order-${u.order}`]:u.order,[`align-self-${u.alignSelf}`]:u.alignSelf}),a});return()=>{var a;return U(u.tag,{class:e.value},(a=t.default)==null?void 0:a.call(t))}}}),se=["sm","md","lg","xl","xxl"],F=["start","end","center"],Y=["space-between","space-around","space-evenly"];function $(u,l){return se.reduce((t,e)=>(t[u+V(e)]=l(),t),{})}const ie=[...F,"baseline","stretch"],X=u=>ie.includes(u),Z=$("align",()=>({type:String,default:null,validator:X})),oe=[...F,...Y],uu=u=>oe.includes(u),eu=$("justify",()=>({type:String,default:null,validator:uu})),de=[...F,...Y,"stretch"],tu=u=>de.includes(u),au=$("alignContent",()=>({type:String,default:null,validator:tu})),R={align:Object.keys(Z),justify:Object.keys(eu),alignContent:Object.keys(au)},ce={align:"align",justify:"justify",alignContent:"align-content"};function re(u,l,t){let e=ce[u];if(t!=null){if(l){const a=l.replace(u,"");e+=`-${a}`}return e+=`-${t}`,e.toLowerCase()}}const fe=g({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:X},...Z,justify:{type:String,default:null,validator:uu},...eu,alignContent:{type:String,default:null,validator:tu},...au,...B()},setup(u,l){let{slots:t}=l;const e=b(()=>{const a=[];let s;for(s in R)R[s].forEach(d=>{const o=u[d],r=re(s,d,o);r&&a.push(r)});return a.push({"v-row--no-gutters":u.noGutters,"v-row--dense":u.dense,[`align-${u.align}`]:u.align,[`justify-${u.justify}`]:u.justify,[`align-content-${u.alignContent}`]:u.alignContent}),a});return()=>{var a;return U(u.tag,{class:["v-row",e.value]},(a=t.default)==null?void 0:a.call(t))}}}),nu=u=>(Wu("data-v-4e3607f2"),u=u(),Ku(),u),ve={class:"main-security"},me={class:"main-security__img",style:{"min-height":"calc(100vh - 180px)",display:"flex","flex-direction":"column","justify-content":"flex-end"}},ge={class:"pb-8"},_e={class:"container-main"},ye={style:{background:"#3c435c","padding-bottom":"100px"}},Ee={class:"fill-height container"},Ce=nu(()=>c("div",{class:"why-me ptb-100",style:{color:"#ffa000"}},"\u0423\u0441\u043B\u0443\u0433\u0438",-1)),be=nu(()=>c("div",{style:{background:"#f5f5f5"}},[c("div",{class:"fill-height container"},[c("div",{class:"why-me ptb-100"},"\u041E \u043D\u0430\u0441")])],-1)),he=z({__name:"Main",setup(u){const l=[{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438, \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",img:Zu},{title:"\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432",text:"\u0416/\u0434 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u043C, \u0441\u0430\u043C\u043E\u043B\u0435\u0442\u043E\u043C, \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0444\u0443\u0440",img:E},{title:"\u041B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u042F\u0432\u043D\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0441\u043A\u0440\u044B\u0442\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0442\u0435\u043B\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u0438",img:E},{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439",text:"\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",img:Xu},{title:"\u041F\u043E\u0447\u0430\u0441\u043E\u0432\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0441\u0443\u0442\u043A\u0438, \u043E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0434\u0435\u043D\u044C: \u043D\u0430 \u043D\u043E\u0447\u044C",img:E},{title:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E \u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0443 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",img:E}];return(t,e)=>(p(),w("div",ve,[c("div",me,[c("div",ge,[c("div",_e,[n(q,{class:"pl-4"},{default:f(()=>[n(Ru,{style:{"font-size":"36px","font-weight":"600"},size:"x-large",variant:"outlined",color:"white"},{default:f(()=>[k("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ")]),_:1})]),_:1})])])]),c("div",ye,[c("div",Ee,[Ce,n(fe,{"no-gutters":""},{default:f(()=>[(p(),w(Hu,null,Ju(l,(a,s)=>n(le,{key:s,cols:"6",sm:"4"},{default:f(()=>[n(te,{class:"ma-2","max-width":"400"},{default:f(()=>[n(M,{src:a.img,height:"300px",cover:""},null,8,["src"]),n(H,null,{default:f(()=>[k(T(a.title),1)]),_:2},1024),n(J,null,{default:f(()=>[k(T(a.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])]),be]))}});const De=Yu(he,[["__scopeId","data-v-4e3607f2"]]),Se=z({__name:"Home",setup(u){return(l,t)=>(p(),Qu(De))}});export{Se as default};
