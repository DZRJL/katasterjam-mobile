import{c as o,s as g,i as F,U as O,aI as S,h as n,P as k,ah as B,a3 as x,g as h,a5 as T,a7 as D,r as m,aJ as V,aa as z,p,x as $,a6 as N,a8 as R}from"./index.c223e8cd.js";const U=["top","right","bottom","left"],P={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>U.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function w(e,a){return{formClass:o(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:o(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:o(()=>{if(e.externalLabel===!0){const s=e.hideLabel===null?a.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(s===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const A={start:"self-end",center:"self-center",end:"self-start"},W=Object.keys(A);var G=g({name:"QFabAction",props:{...P,icon:{type:String,default:""},anchor:{type:String,validator:e=>W.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:a,emit:s}){const l=F(S,()=>({showing:{value:!0},onChildClick:O})),{formClass:r,labelProps:c}=w(e,l.showing),u=o(()=>{const t=A[e.anchor];return r.value+(t!==void 0?` ${t}`:"")}),d=o(()=>e.disable===!0||l.showing.value!==!0);function b(t){l.onChildClick(t),s("click",t)}function f(){const t=[];return a.icon!==void 0?t.push(a.icon()):e.icon!==""&&t.push(n(B,{name:e.icon})),(e.label!==""||a.label!==void 0)&&t[c.value.action](n("div",c.value.data,a.label!==void 0?a.label():[e.label])),x(a.default,t)}const v=h();return Object.assign(v.proxy,{click:b}),()=>n(k,{class:u.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:d.value,onClick:b},f)}});const E=["up","right","down","left"],H=["left","center","right"];var X=g({name:"QFab",props:{...P,...T,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>E.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>H.includes(e)}},emits:D,setup(e,{slots:a}){const s=m(null),l=m(e.modelValue===!0),r=V(),{proxy:{$q:c}}=h(),{formClass:u,labelProps:d}=w(e,l),b=o(()=>e.persistent!==!0),{hide:f,toggle:v}=z({showing:l,hideOnRouteChange:b}),t=o(()=>({opened:l.value})),L=o(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${u.value}`+(l.value===!0?" q-fab--opened":" q-fab--closed")),Q=o(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value===!0?"opened":"closed"}`),I=o(()=>{const i={id:r,role:"menu"};return l.value!==!0&&(i["aria-hidden"]="true"),i}),M=o(()=>`q-fab__icon-holder  q-fab__icon-holder--${l.value===!0?"opened":"closed"}`);function q(i,_){const C=a[i],y=`q-fab__${i} absolute-full`;return C===void 0?n(B,{class:y,name:e[_]||c.iconSet.fab[_]}):n("div",{class:y},C(t.value))}function j(){const i=[];return e.hideIcon!==!0&&i.push(n("div",{class:M.value},[q("icon","icon"),q("active-icon","activeIcon")])),(e.label!==""||a.label!==void 0)&&i[d.value.action](n("div",d.value.data,a.label!==void 0?a.label(t.value):[e.label])),x(a.tooltip,i)}return p(S,{showing:l,onChildClick(i){f(i),s.value!==null&&s.value.$el.focus()}}),()=>n("div",{class:L.value},[n(k,{ref:s,class:u.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":r,onClick:v},j),n("div",{class:Q.value,...I.value},$(a.default))])}});const J=["horizontal","vertical","cell","none"];var Y=g({name:"QMarkupTable",props:{...N,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>J.includes(e)}},setup(e,{slots:a}){const s=h(),l=R(e,s.proxy.$q),r=o(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(l.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:r.value},[n("table",{class:"q-table"},$(a.default))])}});export{X as Q,G as a,Y as b};