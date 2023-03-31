import{aw as k,aB as w,am as N,_ as S,r as d,j as c,k as y,d as r,I as t,N as q,P as p,F as P,H as C,ah as u,aC as Q,aD as _,J as g,L as n,m as F,aE as L,aF as A}from"./index.c223e8cd.js";import{Q as $,c as I,d as v,a as m}from"./format.c2dcb3f1.js";import{Q as M,a as T}from"./QPullToRefresh.e5aacfba.js";import{u as D}from"./use-quasar.4127f101.js";const x=k("caves",{state:()=>({caves:[],searchParameters:{query:"",pageNumber:1,x:null,y:null,sort:null,sortDirection:null},totalPages:0,searching:!1,searchAbort:new AbortController}),getters:{getCaves(e){return e.caves},getSearchParameters(e){return e.searchParameters},getTotalPages(e){return e.totalPages},getQuery(e){return e.searchParameters.query},getPageNumber(e){return e.searchParameters.pageNumber},getCurrentSort(e){return e.searchParameters.sort},getSearchingStatus(e){return e.searching}},actions:{setLocationParameters(e){this.searchParameters=e},addQueryParameter(e){this.searchParameters.query=e},clearLocationParameters(){this.searchParameters={query:this.searchParameters.query,pageNumber:1}},incrementPageNumber(){this.searchParameters.pageNumber++},async searchForCaves(){this.searching&&this.searchAbort.abort(),this.searching=!0,this.searchAbort=new AbortController;try{const e=await w.get("/api/caves",{params:this.searchParameters,signal:this.searchAbort.signal});this.totalPages=JSON.parse(e.headers.pagination).totalPages,this.searchParameters.pageNumber>1?e.data.map(a=>this.caves.push(a)):this.caves=e.data}catch(e){console.error(e)}finally{this.searching=!1}},async searchForNearbyCaves(){N.is.cordova?window.BackgroundGeolocation.getCurrentLocation(async e=>{this.query="",this.setLocationParameters({...this.getSearchParameters,query:this.query,y:e.latitude,x:e.longitude,sort:"distance",sortDirection:"asc",pageNumber:1}),await this.searchForCaves()},(e,a)=>{console.error("Error when trying to fetch location",e,a)},{enableHighAccuracy:!0}):navigator.geolocation.getCurrentPosition(async e=>{this.query="",this.setLocationParameters({...this.getSearchParameters,query:this.query,y:e.coords.latitude,x:e.coords.longitude,sort:"distance",sortDirection:"asc",pageNumber:1},(a,l)=>{console.error("Error when trying to fetch location",a,l)},{enableHighAccuracy:!0}),await this.searchForCaves()},e=>{console.log(e)})}}}),B={name:"CaveSearchPage",setup(){const{dialog:e}=D(),a=x();a.getCaves.length===0&&a.searchForCaves().then(()=>{console.log("caves loaded")});const l=d(a.getQuery),i=d(null),h=d(null);return{confirmDialog:e,store:a,query:l,confirm:d(!1),selectedCave:i,closeSlider:null,confirmRef:h}},computed:{caves(){return this.store.getCaves},pageNumber(){return this.store.getPageNumber},totalPages(){return this.store.getTotalPages},currentSort(){return this.store.getCurrentSort},selectedName(){var e,a;return`[${(e=this.selectedCave)==null?void 0:e.caveNumber}] ${(a=this.selectedCave)==null?void 0:a.name}`},searching(){return this.store.getSearchingStatus}},watch:{query(e,a){this.executeSearch()}},methods:{goTo({reset:e},a){var i,h;e(),this.selectedCave=a;const l=`[${(i=this.selectedCave)==null?void 0:i.caveNumber}] ${(h=this.selectedCave)==null?void 0:h.name}`;this.confirmDialog({title:`${this.$t("confirm")}`,message:`${this.$t("navigateToCave")}: ${l}`,cancel:!0,persistent:!0}).onOk(()=>{this.$router.push({path:"/",query:{lat:this.selectedCave.lat,lng:this.selectedCave.lng,navigate:!0,name:l}})})},caveClick(e){this.$router.push({name:"caves-details",params:{caveNumber:e}})},showOnMapClick(e){this.$router.push({path:"/",query:{lat:e.lat,lng:e.lng}})},async loadMore(){this.store.incrementPageNumber(),await this.store.searchForCaves()},async executeSearch(){this.store.clearLocationParameters(),this.store.addQueryParameter(this.query),await this.store.searchForCaves()},async searchAroundMe(){if(this.currentSort){this.store.clearLocationParameters(),this.store.addQueryParameter(this.query),await this.store.searchForCaves();return}await this.store.searchForNearbyCaves()},async refresh(e){this.currentSort==="distance"?await this.store.searchForNearbyCaves():await this.store.searchForCaves(),e()}}};function V(e,a,l,i,h,o){return c(),y(P,null,[r(q,{loading:o.searching,modelValue:i.query,"onUpdate:modelValue":a[1]||(a[1]=s=>i.query=s),debounce:"500",filled:"",placeholder:e.$t("search"),hint:e.$t("searchForCave")},{append:t(()=>[i.query!==""?(c(),C(u,{key:0,name:"close",onClick:a[0]||(a[0]=s=>i.query=""),class:"cursor-pointer"})):(c(),C(u,{key:1,name:"search"}))]),after:t(()=>[r(p,{round:"",dense:"",flat:"",icon:"gps_fixed",onClick:o.searchAroundMe,color:o.currentSort==="distance"?"light-green":""},null,8,["onClick","color"])]),_:1},8,["loading","modelValue","placeholder","hint"]),r(M,{onRefresh:o.refresh},{default:t(()=>[r($,{ref:"scrollTargetRef",class:"scroll"},{default:t(()=>[(c(!0),y(P,null,Q(o.caves,(s,b)=>(c(),y("div",{key:b},[r(T,{onLeft:f=>o.goTo(f,s)},{left:t(()=>[r(u,{name:"assist_walker"})]),default:t(()=>[r(I,{clickable:"",onClick:f=>o.caveClick(s.caveNumber)},{default:t(()=>[r(v,{avatar:"",top:""},{default:t(()=>[r(_,{icon:"info",color:"primary","text-color":"white"}),r(u,{name:"keyboard_double_arrow_right",size:"lg",color:"primary"})]),_:1}),r(v,null,{default:t(()=>[r(m,{lines:"1"},{default:t(()=>[g(n(s.caveNumber)+" - "+n(s.name),1)]),_:2},1024),r(m,{caption:""},{default:t(()=>[g(n(e.$t("length"))+": "+n(s.length)+" m, "+n(e.$t("depth"))+": "+n(s.depth)+" m",1)]),_:2},1024),r(m,{caption:""},{default:t(()=>[g(n(s.organization),1)]),_:2},1024),s.distance?(c(),C(m,{key:0,caption:""},{default:t(()=>[g(n(e.$t("distance"))+": "+n(parseInt(s.distance))+" m",1)]),_:2},1024)):F("",!0)]),_:2},1024),r(v,{side:""},{default:t(()=>[r(u,{name:"map",color:"green",size:"lg",onClick:L(f=>o.showOnMapClick(s),["stop"])},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1032,["onLeft"]),r(A)]))),128))]),_:1},512)]),_:1},8,["onRefresh"]),r(p,{unelevated:"",color:"light-blue-7",size:"lg",class:"full-width",label:e.$t("loadMore"),onClick:o.loadMore,disabled:o.totalPages<=o.pageNumber},null,8,["label","onClick","disabled"])],64)}var H=S(B,[["render",V]]);export{H as default};