import{d2 as x,d8 as P,r as k,eQ as _,cM as n,cN as d,d as r,da as a,dg as w,di as Q,F as g,d9 as h,dS as c,ea as E,eR as C,eN as q,db as u,dd as l,eP as N}from"./index.d880ed97.js";import{a as v,c as y,Q as m}from"./format.7f0b6061.js";import{Q as M}from"./QSlideItem.a47d2873.js";import{Q as I}from"./TouchPan.3b569cbf.js";import{Q as L}from"./QPullToRefresh.d3168b8d.js";import{u as T}from"./use-quasar.fff60b60.js";const j={name:"ExcursionSearchPage",setup(){const{dialog:e}=T(),t=P(),p=k(t.getQuery),i=k(!1);return t.tryFetchExcursionsForOffline().then(()=>{console.log("Excursion list updated")}),t.search().then(()=>{console.log("excursions loaded")}),{confirmDialog:e,store:t,mine:i,query:p,formatDate:_}},computed:{excursions(){return this.store.getExcursions},pageNumber(){return this.store.getPageNumber},totalPages(){return this.store.getTotalPages},currentSort(){return this.store.getCurrentSort},searching(){return this.store.getSearchingStatus}},watch:{query(e,t){this.executeSearch()}},methods:{canJoinExcursion(e){return!e.meParticipant&&!e.requestedJoin},excursionClick(e){this.$router.push({name:"trips-details",params:{id:e}})},joinExcursion({reset:e},t){e(),this.confirmDialog({title:`${this.$t("confirm")}`,message:`${this.$t("joinExcursionText")}${t.name}`,cancel:!0,persistent:!0}).onOk(async()=>{await this.store.joinExcursion(t)})},async onlyMine(){this.store.onlyMyExcursions(this.mine=!this.mine),await this.store.search()},async executeSearch(){this.store.addQueryParameter(this.query),await this.store.search()},async loadMore(){this.store.incrementPageNumber(),await this.store.search()},async refresh(e){await this.store.search(),e()}}};function z(e,t,p,i,D,o){return n(),d(g,null,[r(w,{loading:o.searching,modelValue:i.query,"onUpdate:modelValue":t[1]||(t[1]=s=>i.query=s),debounce:"500",filled:"",placeholder:e.$t("search"),hint:e.$t("searchForExcursion")},{append:a(()=>[i.query!==""?(n(),h(c,{key:0,name:"close",onClick:t[0]||(t[0]=s=>i.query=""),class:"cursor-pointer"})):(n(),h(c,{key:1,name:"search"}))]),after:a(()=>[r(Q,{round:"",dense:"",flat:"",icon:"check",onClick:o.onlyMine,color:i.mine?"light-green":""},null,8,["onClick","color"])]),_:1},8,["loading","modelValue","placeholder","hint"]),r(L,{onRefresh:o.refresh},{default:a(()=>[r(I,{ref:"scrollTargetRef",class:"scroll"},{default:a(()=>[(n(!0),d(g,null,E(o.excursions,(s,b)=>(n(),d("div",{key:b},[r(M,{onLeft:f=>o.joinExcursion(f,s)},C({default:a(()=>[r(v,{clickable:"",onClick:f=>o.excursionClick(s.id)},{default:a(()=>[r(y,{avatar:"",top:""},{default:a(()=>[r(q,{icon:"info",color:"primary","text-color":"white"}),s.meParticipant?(n(),h(c,{key:0,name:"check",color:"green",size:"lg"})):s.requestedJoin?(n(),d(g,{key:1},[r(c,{name:"check",color:"grey",size:"smc"}),r(m,{caption:""},{default:a(()=>[u(l(e.$t("requested")),1)]),_:1})],64)):(n(),h(c,{key:2,name:"keyboard_double_arrow_right",size:"lg",color:"primary"}))]),_:2},1024),r(y,null,{default:a(()=>[r(m,{lines:"1"},{default:a(()=>[u(l(s.name),1)]),_:2},1024),r(m,{caption:""},{default:a(()=>[u(l(e.$t("date"))+": "+l(i.formatDate(s.dateOfExcursion)),1)]),_:2},1024),r(m,{caption:""},{default:a(()=>[u(l(e.$t("excursionParticipants"))+": "+l(s.participants),1)]),_:2},1024)]),_:2},1024),r(y,{side:""},{default:a(()=>[(n(!0),d(g,null,E(s.organizations,(f,S)=>(n(),h(m,{caption:"",key:S},{default:a(()=>[u(l(f.name),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},[o.canJoinExcursion(s)?{name:"left",fn:a(()=>[r(c,{name:"check"}),u(" "+l(e.$t("joinExcursion")),1)]),key:"0"}:void 0]),1032,["onLeft"]),r(N)]))),128))]),_:1},512)]),_:1},8,["onRefresh"]),r(Q,{unelevated:"",color:"light-blue-7",size:"lg",class:"full-width",label:e.$t("loadMore"),onClick:o.loadMore,disabled:o.totalPages<=o.pageNumber},null,8,["label","onClick","disabled"])],64)}var $=x(j,[["render",z]]);export{$ as default};