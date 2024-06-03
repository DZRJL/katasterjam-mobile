import{a as d,Q as r,c as l}from"./format.7f0b6061.js";import{d2 as h,cJ as k,ef as $,cM as i,d9 as f,da as a,d as t,db as n,dd as s,cN as u,ea as g,F as Q,eN as _,dS as R,eO as y,eP as v}from"./index.d880ed97.js";import{Q as O}from"./TouchPan.3b569cbf.js";import{Q as w}from"./QPullToRefresh.d3168b8d.js";import{u as C}from"./use-quasar.fff60b60.js";const D=k({name:"OfflineDataList",components:{},setup(){const{dialog:e}=C(),c=$();return c.searchRecords().then(()=>{console.log("offline records loaded")}),{confirmDialog:e,store:c}},computed:{offlineRecords(){return this.store.getOfflineRecords}},methods:{async refresh(e){await this.store.searchRecords(),e()},click(e){this.$router.push({name:"offline-data-page",params:{id:e}})},deleteRecord(e){this.confirmDialog({title:`${this.$t("confirm")}`,message:`${this.$t("confirmDeleteOfflineRecords")}`,cancel:!0,persistent:!0}).onOk(async()=>{await this.store.deleteAll(e.id),await this.store.searchRecords()})}}});function S(e,c,I,L,b,B){return e.offlineRecords.length===0?(i(),f(d,{key:0},{default:a(()=>[t(l,{class:"text-center"},{default:a(()=>[t(r,{class:"text-h6",style:{"padding-top":"50px"}},{default:a(()=>[n(s(e.$t("noRecords")),1)]),_:1})]),_:1})]),_:1})):(i(),f(w,{key:1,onRefresh:e.refresh},{default:a(()=>[t(O,{ref:"scrollTargetRef",class:"scroll"},{default:a(()=>[(i(!0),u(Q,null,g(e.offlineRecords,(o,m)=>(i(),u("div",{key:m},[t(d,{clickable:"",onClick:p=>e.click(o.id)},{default:a(()=>[t(l,{avatar:"",top:""},{default:a(()=>[t(_,{icon:"info",color:"primary","text-color":"white"})]),_:1}),t(l,null,{default:a(()=>[t(r,{lines:"1"},{default:a(()=>[n(s(o.id)+" - "+s(o.name),1)]),_:2},1024),t(r,{caption:""},{default:a(()=>[n(s(e.$t("size"))+": "+s((parseInt(o.totalSize)/1e6).toFixed(2))+" MB",1)]),_:2},1024),t(r,{"vfeature-if":"offlineRecord.date",caption:""},{default:a(()=>[n(s(e.$t("date"))+": "+s(o.date),1)]),_:2},1024)]),_:2},1024),t(l,{side:""},{default:a(()=>[t(R,{name:"delete",color:"black",size:"lg",onClick:y(p=>e.deleteRecord(o),["stop"])},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["onClick"]),t(v)]))),128))]),_:1},512)]),_:1},8,["onRefresh"]))}var x=h(D,[["render",S]]);export{x as default};