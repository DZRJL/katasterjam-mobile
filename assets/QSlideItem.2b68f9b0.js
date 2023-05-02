import{T as D}from"./format.feecb03e.js";import{s as F,a8 as T,aa as j,r as E,c as y,br as P,P as R,h as m,M as _,ai as k,g as z}from"./index.833812ab.js";function B(){const a=new Map;return{getCache:function(i,c){return a[i]===void 0?a[i]=c:a[i]},getCacheWithFn:function(i,c){return a[i]===void 0?a[i]=c():a[i]}}}const x=[["left","center","start","width"],["right","center","end","width"],["top","start","center","height"],["bottom","end","center","height"]];var Q=F({name:"QSlideItem",props:{...T,leftColor:String,rightColor:String,topColor:String,bottomColor:String,onSlide:Function},emits:["action","top","right","bottom","left"],setup(a,{slots:i,emit:c}){const{proxy:b}=z(),{$q:w}=b,$=j(a,w),{getCacheWithFn:S}=B(),p=E(null);let d=null,e={},h={},g={};const f=y(()=>w.lang.rtl===!0?{left:"right",right:"left"}:{left:"left",right:"right"}),q=y(()=>"q-slide-item q-item-type overflow-hidden"+($.value===!0?" q-slide-item--dark q-dark":""));function v(){p.value.style.transform="translate(0,0)"}function C(t,l,r){a.onSlide!==void 0&&c("slide",{side:t,ratio:l,isReset:r})}function M(t){const l=p.value;if(t.isFirst)e={dir:null,size:{left:0,right:0,top:0,bottom:0},scale:0},l.classList.add("no-transition"),x.forEach(n=>{if(i[n[0]]!==void 0){const u=g[n[0]];u.style.transform="scale(1)",e.size[n[0]]=u.getBoundingClientRect()[n[3]]}}),e.axis=t.direction==="up"||t.direction==="down"?"Y":"X";else if(t.isFinal){l.classList.remove("no-transition"),e.scale===1?(l.style.transform=`translate${e.axis}(${e.dir*100}%)`,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,c(e.showing,{reset:v}),c("action",{side:e.showing,reset:v})},230)):(l.style.transform="translate(0,0)",C(e.showing,0,!0));return}else t.direction=e.axis==="X"?t.offset.x<0?"left":"right":t.offset.y<0?"up":"down";if(i.left===void 0&&t.direction===f.value.right||i.right===void 0&&t.direction===f.value.left||i.top===void 0&&t.direction==="down"||i.bottom===void 0&&t.direction==="up"){l.style.transform="translate(0,0)";return}let r,s,o;e.axis==="X"?(s=t.direction==="left"?-1:1,r=s===1?f.value.left:f.value.right,o=t.distance.x):(s=t.direction==="up"?-2:2,r=s===2?"top":"bottom",o=t.distance.y),!(e.dir!==null&&Math.abs(s)!==Math.abs(e.dir))&&(e.dir!==s&&(["left","right","top","bottom"].forEach(n=>{h[n]&&(h[n].style.visibility=r===n?"visible":"hidden")}),e.showing=r,e.dir=s),e.scale=Math.max(0,Math.min(1,(o-40)/e.size[r])),l.style.transform=`translate${e.axis}(${o*s/Math.abs(s)}px)`,g[r].style.transform=`scale(${e.scale})`,C(r,e.scale,!1))}return P(()=>{h={},g={}}),R(()=>{d!==null&&clearTimeout(d)}),Object.assign(b,{reset:v}),()=>{const t=[],l={left:i[f.value.right]!==void 0,right:i[f.value.left]!==void 0,up:i.bottom!==void 0,down:i.top!==void 0},r=Object.keys(l).filter(o=>l[o]===!0);x.forEach(o=>{const n=o[0];i[n]!==void 0&&t.push(m("div",{ref:u=>{h[n]=u},class:`q-slide-item__${n} absolute-full row no-wrap items-${o[1]} justify-${o[2]}`+(a[n+"Color"]!==void 0?` bg-${a[n+"Color"]}`:"")},[m("div",{ref:u=>{g[n]=u}},i[n]())]))});const s=m("div",{key:`${r.length===0?"only-":""} content`,ref:p,class:"q-slide-item__content"},_(i.default));return r.length===0?t.push(s):t.push(k(s,S("dir#"+r.join(""),()=>{const o={prevent:!0,stop:!0,mouse:!0};return r.forEach(n=>{o[n]=!0}),[[D,M,void 0,o]]}))),m("div",{class:q.value},t)}}});export{Q};
