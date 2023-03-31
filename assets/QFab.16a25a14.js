import{c as i,s as S,i as Q,U as M,aR as y,h as o,P as m,ah as x,a3 as k,g as B,a5 as O,a7 as T,r as C,aS as R,aa as V,p as N,x as U}from"./index.ae8a7555.js";const W=["top","right","bottom","left"],$={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>W.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function P(e,a){return{formClass:i(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:i(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:i(()=>{if(e.externalLabel===!0){const c=e.hideLabel===null?a.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(c===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const A={start:"self-end",center:"self-center",end:"self-start"},z=Object.keys(A);var K=S({name:"QFabAction",props:{...$,icon:{type:String,default:""},anchor:{type:String,validator:e=>z.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:a,emit:c}){const l=Q(y,()=>({showing:{value:!0},onChildClick:M})),{formClass:s,labelProps:r}=P(e,l.showing),u=i(()=>{const t=A[e.anchor];return s.value+(t!==void 0?` ${t}`:"")}),d=i(()=>e.disable===!0||l.showing.value!==!0);function b(t){l.onChildClick(t),c("click",t)}function f(){const t=[];return a.icon!==void 0?t.push(a.icon()):e.icon!==""&&t.push(o(x,{name:e.icon})),(e.label!==""||a.label!==void 0)&&t[r.value.action](o("div",r.value.data,a.label!==void 0?a.label():[e.label])),k(a.default,t)}const v=B();return Object.assign(v.proxy,{click:b}),()=>o(m,{class:u.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:d.value,onClick:b},f)}});const D=["up","right","down","left"],E=["left","center","right"];var G=S({name:"QFab",props:{...$,...O,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>D.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>E.includes(e)}},emits:T,setup(e,{slots:a}){const c=C(null),l=C(e.modelValue===!0),s=R(),{proxy:{$q:r}}=B(),{formClass:u,labelProps:d}=P(e,l),b=i(()=>e.persistent!==!0),{hide:f,toggle:v}=V({showing:l,hideOnRouteChange:b}),t=i(()=>({opened:l.value})),L=i(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${u.value}`+(l.value===!0?" q-fab--opened":" q-fab--closed")),j=i(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value===!0?"opened":"closed"}`),w=i(()=>{const n={id:s,role:"menu"};return l.value!==!0&&(n["aria-hidden"]="true"),n}),F=i(()=>`q-fab__icon-holder  q-fab__icon-holder--${l.value===!0?"opened":"closed"}`);function g(n,h){const _=a[n],q=`q-fab__${n} absolute-full`;return _===void 0?o(x,{class:q,name:e[h]||r.iconSet.fab[h]}):o("div",{class:q},_(t.value))}function I(){const n=[];return e.hideIcon!==!0&&n.push(o("div",{class:F.value},[g("icon","icon"),g("active-icon","activeIcon")])),(e.label!==""||a.label!==void 0)&&n[d.value.action](o("div",d.value.data,a.label!==void 0?a.label(t.value):[e.label])),k(a.tooltip,n)}return N(y,{showing:l,onChildClick(n){f(n),c.value!==null&&c.value.$el.focus()}}),()=>o("div",{class:L.value},[o(m,{ref:c,class:u.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":s,onClick:v},I),o("div",{class:j.value,...w.value},U(a.default))])}});export{G as Q,K as a};
