import{i as p,j as z,V as F,t as T,R as Du,m as hu,k as ku,a as Au,x as Fu,y as Su,z as pu,b as Bu,l as Vu,n as xu,d as Iu,p as $u,q as Pu,r as Lu,e as Nu,A as ju,B as wu,C as Tu,f as Ru,o as Ou,g as q,L as Mu,s as Gu,h as Uu}from"./VAvatar.3ec14ca8.js";import{m as g,y as zu,u as a,I as b,v as qu,x as Hu,d as D,C as Ju,G as Wu,_ as B,q as H,J,K as S,N as R,R as r,M as d,W as y,P as O,O as Ku,S as M,ai as Yu,aj as Qu,L as Xu}from"./index.b0ffa355.js";import{u as V,m as x}from"./tag.91a4bbf7.js";import{V as A}from"./VContainer.1bdda9c2.js";import{_ as Zu}from"./_plugin-vue_export-helper.cdc0426e.js";const C="/sity_sokol/assets/cards_img_3.9ffa5c06.svg",u4="/sity_sokol/assets/camera_2.0fbd1be3.jpg",e4="/sity_sokol/assets/fon.3a1b3243.jpg";const W=g({name:"VCardActions",setup(u,l){let{slots:t}=l;return zu({VBtn:{variant:"text"}}),V(()=>{var e;return a("div",{class:"v-card-actions"},[(e=t.default)==null?void 0:e.call(t)])}),{}}}),K=p("v-card-subtitle"),Y=p("v-card-title"),t4=g({name:"VCardItem",props:{appendAvatar:String,appendIcon:b,prependAvatar:String,prependIcon:b,subtitle:String,title:String,...z()},setup(u,l){let{slots:t}=l;return V(()=>{var e,n,s,c,o;const f=!!(u.prependAvatar||u.prependIcon||t.prepend),v=!!(u.appendAvatar||u.appendIcon||t.append),h=!!(u.title||t.title),k=!!(u.subtitle||t.subtitle);return a("div",{class:"v-card-item"},[f&&a(F,{key:"prepend",defaults:{VAvatar:{density:u.density,icon:u.prependIcon,image:u.prependAvatar},VIcon:{density:u.density,icon:u.prependIcon}}},{default:()=>{var i;return[a("div",{class:"v-card-item__prepend"},[(i=(e=t.prepend)==null?void 0:e.call(t))!=null?i:a(T,null,null)])]}}),a("div",{class:"v-card-item__content"},[h&&a(Y,{key:"title"},{default:()=>{var i;return[(i=(n=t.title)==null?void 0:n.call(t))!=null?i:u.title]}}),k&&a(K,{key:"subtitle"},{default:()=>{var i;return[(i=(s=t.subtitle)==null?void 0:s.call(t))!=null?i:u.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),v&&a(F,{key:"append",defaults:{VAvatar:{density:u.density,icon:u.appendIcon,image:u.appendAvatar},VIcon:{density:u.density,icon:u.appendIcon}}},{default:()=>{var i;return[a("div",{class:"v-card-item__append"},[(i=(o=t.append)==null?void 0:o.call(t))!=null?i:a(T,null,null)])]}})])}),{}}}),Q=p("v-card-text"),a4=g({name:"VCard",directives:{Ripple:Du},props:{appendAvatar:String,appendIcon:b,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:b,ripple:Boolean,subtitle:String,text:String,title:String,...qu(),...hu(),...z(),...ku(),...Au(),...Fu(),...Su(),...pu(),...Bu(),...Vu(),...x(),...xu({variant:"elevated"})},setup(u,l){let{attrs:t,slots:e}=l;const{themeClasses:n}=Hu(u),{borderClasses:s}=Iu(u),{colorClasses:c,colorStyles:o,variantClasses:f}=$u(u),{densityClasses:v}=Pu(u),{dimensionStyles:h}=Lu(u),{elevationClasses:k}=Nu(u),{loaderClasses:i}=ju(u),{locationStyles:ou}=wu(u),{positionClasses:du}=Tu(u),{roundedClasses:cu}=Ru(u),_=Ou(u,t),ru=D(()=>u.link!==!1&&_.isLink.value),E=D(()=>!u.disabled&&u.link!==!1&&(u.link||_.isClickable.value));return V(()=>{var N,j,w;const fu=ru.value?"a":u.tag,vu=!!(e.title||u.title),mu=!!(e.subtitle||u.subtitle),gu=vu||mu,_u=!!(e.append||u.appendAvatar||u.appendIcon),Eu=!!(e.prepend||u.prependAvatar||u.prependIcon),yu=!!(e.image||u.image),Cu=gu||Eu||_u,bu=!!(e.text||u.text);return Ju(a(fu,{class:["v-card",{"v-card--disabled":u.disabled,"v-card--flat":u.flat,"v-card--hover":u.hover&&!(u.disabled||u.flat),"v-card--link":E.value},n.value,s.value,c.value,v.value,k.value,i.value,du.value,cu.value,f.value],style:[o.value,h.value,ou.value],href:_.href.value,onClick:E.value&&_.navigate,tabindex:u.disabled?-1:void 0},{default:()=>[yu&&a(F,{key:"image",defaults:{VImg:{cover:!0,src:u.image}}},{default:()=>{var m;return[a("div",{class:"v-card__image"},[(m=(N=e.image)==null?void 0:N.call(e))!=null?m:a(q,null,null)])]}}),a(Mu,{name:"v-card",active:!!u.loading,color:typeof u.loading=="boolean"?void 0:u.loading},{default:e.loader}),Cu&&a(t4,{key:"item",prependAvatar:u.prependAvatar,prependIcon:u.prependIcon,title:u.title,subtitle:u.subtitle,appendAvatar:u.appendAvatar,appendIcon:u.appendIcon},{default:e.item,prepend:e.prepend,title:e.title,subtitle:e.subtitle,append:e.append}),bu&&a(Q,{key:"text"},{default:()=>{var m;return[(m=(j=e.text)==null?void 0:j.call(e))!=null?m:u.text]}}),(w=e.default)==null?void 0:w.call(e),e.actions&&a(W,null,{default:e.actions}),Gu(E.value,"v-card")]}),[[Wu("ripple"),E.value]])}),{}}}),I=["sm","md","lg","xl","xxl"],X=(()=>I.reduce((u,l)=>(u[l]={type:[Boolean,String,Number],default:!1},u),{}))(),Z=(()=>I.reduce((u,l)=>(u["offset"+B(l)]={type:[String,Number],default:null},u),{}))(),uu=(()=>I.reduce((u,l)=>(u["order"+B(l)]={type:[String,Number],default:null},u),{}))(),G={col:Object.keys(X),offset:Object.keys(Z),order:Object.keys(uu)};function n4(u,l,t){let e=u;if(!(t==null||t===!1)){if(l){const n=l.replace(u,"");e+=`-${n}`}return u==="col"&&(e="v-"+e),u==="col"&&(t===""||t===!0)||(e+=`-${t}`),e.toLowerCase()}}const l4=["auto","start","end","center","baseline","stretch"],s4=g({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...X,offset:{type:[String,Number],default:null},...Z,order:{type:[String,Number],default:null},...uu,alignSelf:{type:String,default:null,validator:u=>l4.includes(u)},...x()},setup(u,l){let{slots:t}=l;const e=D(()=>{const n=[];let s;for(s in G)G[s].forEach(o=>{const f=u[o],v=n4(s,o,f);v&&n.push(v)});const c=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!c||!u.cols,[`v-col-${u.cols}`]:u.cols,[`offset-${u.offset}`]:u.offset,[`order-${u.order}`]:u.order,[`align-self-${u.alignSelf}`]:u.alignSelf}),n});return()=>{var n;return H(u.tag,{class:e.value},(n=t.default)==null?void 0:n.call(t))}}}),i4=["sm","md","lg","xl","xxl"],$=["start","end","center"],eu=["space-between","space-around","space-evenly"];function P(u,l){return i4.reduce((t,e)=>(t[u+B(e)]=l(),t),{})}const o4=[...$,"baseline","stretch"],tu=u=>o4.includes(u),au=P("align",()=>({type:String,default:null,validator:tu})),d4=[...$,...eu],nu=u=>d4.includes(u),lu=P("justify",()=>({type:String,default:null,validator:nu})),c4=[...$,...eu,"stretch"],su=u=>c4.includes(u),iu=P("alignContent",()=>({type:String,default:null,validator:su})),U={align:Object.keys(au),justify:Object.keys(lu),alignContent:Object.keys(iu)},r4={align:"align",justify:"justify",alignContent:"align-content"};function f4(u,l,t){let e=r4[u];if(t!=null){if(l){const n=l.replace(u,"");e+=`-${n}`}return e+=`-${t}`,e.toLowerCase()}}const v4=g({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:tu},...au,justify:{type:String,default:null,validator:nu},...lu,alignContent:{type:String,default:null,validator:su},...iu,...x()},setup(u,l){let{slots:t}=l;const e=D(()=>{const n=[];let s;for(s in U)U[s].forEach(c=>{const o=u[c],f=f4(s,c,o);f&&n.push(f)});return n.push({"v-row--no-gutters":u.noGutters,"v-row--dense":u.dense,[`align-${u.align}`]:u.align,[`justify-${u.justify}`]:u.justify,[`align-content-${u.alignContent}`]:u.alignContent}),n});return()=>{var n;return H(u.tag,{class:["v-row",e.value]},(n=t.default)==null?void 0:n.call(t))}}}),L=u=>(Yu("data-v-fa0316bc"),u=u(),Qu(),u),m4={style:{background:"#F5F5F5"}},g4=L(()=>r("div",{class:"title ptb-100"},[r("div",{style:{color:"#F44336"}},"\u041E\u0411\u0415\u0421\u041F\u0415\u0427\u0418\u041C "),r("div",{style:{color:"#26A69A"}},"\u0411\u0415\u0417\u041E\u041F\u0410\u0421\u041D\u041E\u0421\u0422\u042C")],-1)),_4={style:{background:"#3C435C","padding-bottom":"100px"}},E4=L(()=>r("div",{class:"why-me ptb-100",style:{color:"#FFA000"}}," \u0423\u0441\u043B\u0443\u0433\u0438 ",-1)),y4={style:{background:"#F5F5F5"}},C4=L(()=>r("div",{class:"why-me ptb-100"}," \u041E \u043D\u0430\u0441 ",-1)),b4=J({__name:"Main",setup(u){const l=[{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438, \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",img:e4},{title:"\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0433\u0440\u0443\u0437\u043E\u0432",text:"\u0416/\u0434 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u043C, \u0441\u0430\u043C\u043E\u043B\u0435\u0442\u043E\u043C, \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0444\u0443\u0440",img:C},{title:"\u041B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u042F\u0432\u043D\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0441\u043A\u0440\u044B\u0442\u0430\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0442\u0435\u043B\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u0438",img:C},{title:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439",text:"\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0445\u0440\u0430\u043D\u0430, \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",img:u4},{title:"\u041F\u043E\u0447\u0430\u0441\u043E\u0432\u0430\u044F \u043E\u0445\u0440\u0430\u043D\u0430",text:"\u041E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0441\u0443\u0442\u043A\u0438, \u043E\u0445\u0440\u0430\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430 \u0434\u0435\u043D\u044C: \u043D\u0430 \u043D\u043E\u0447\u044C",img:C},{title:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",text:"\u041E\u0445\u0440\u0430\u043D\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E \u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0443 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u043F\u0441\u0438\u0445\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432",img:C}];return(t,e)=>(S(),R(O,null,[r("div",m4,[a(A,{class:"fill-height container"},{default:d(()=>[r("div",null,[g4,a(K,null,{default:d(()=>[y("\u0423\u0441\u043B\u0443\u0433\u0438 \u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0434\u043B\u044F \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u043B\u0438\u0446 \u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")]),_:1}),a(W,null,{default:d(()=>[a(Uu,{variant:"outlined",size:"large",color:"info"},{default:d(()=>[y("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ")]),_:1})]),_:1})])]),_:1})]),r("div",_4,[a(A,{class:"fill-height container"},{default:d(()=>[E4,a(v4,{"no-gutters":""},{default:d(()=>[(S(),R(O,null,Ku(l,(n,s)=>a(s4,{key:s,cols:"6",sm:"4"},{default:d(()=>[a(a4,{class:"ma-2","max-width":"400"},{default:d(()=>[a(q,{src:n.img,height:"300px",cover:""},null,8,["src"]),a(Y,null,{default:d(()=>[y(M(n.title),1)]),_:2},1024),a(Q,null,{default:d(()=>[y(M(n.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),r("div",y4,[a(A,{class:"fill-height container"},{default:d(()=>[C4]),_:1})])],64))}});const D4=Zu(b4,[["__scopeId","data-v-fa0316bc"]]),p4=J({__name:"Home",setup(u){return(l,t)=>(S(),Xu(D4))}});export{p4 as default};
