import{Q as F,a as _}from"./QFab.975ed23a.js";import{_ as O,r as v,bF as D,bG as w,aJ as L,al as g,j as s,P as Q,Q as f,V as M,d as l,S as o,U as e,am as N,W as S,bD as z,k as i,m as r,F as T,aO as E}from"./index.18ea7970.js";import{Q as I}from"./QMarkupTable.83ea2687.js";import{u as P}from"./use-quasar.c588333e.js";import{F as q,P as B}from"./CartoLayers.0bad73e0.js";import{O as V}from"./OrganizationsList.97941f92.js";import{S as H}from"./SimpleHeaderMap.8eaa03af.js";const R={name:"CaveDetailsPage",components:{OrganizationsList:V,SimpleHeaderMap:H},setup(){const{dialog:a}=P(),c=v([1637531,5766419]),n=v([]),t=v(null),h=v(null);return{confirmDialog:a,center:c,confirm:v(!1),markLocations:n,cave:t,confirmRef:h,formatDate:D}},computed:{favouriteIcon(){return this.cave.isFavourite?"favorite":"favorite_border"},selectedName(){var a,c;return`[${(a=this.cave)==null?void 0:a.caveNumber}] ${(c=this.cave)==null?void 0:c.name}`}},methods:{goTo(){var c,n;this.confirm=!0;const a=`[${(c=this.cave)==null?void 0:c.caveNumber}] ${(n=this.cave)==null?void 0:n.name}`;this.confirmDialog({title:`${this.$t("confirm")}`,message:`${this.$t("navigateToCave")}: ${a}`,cancel:!0,persistent:!0}).onOk(()=>{this.$router.push({path:"/",query:{lat:this.cave.lat,lng:this.cave.lng,navigate:!0,name:a}})})},showOnMap(){this.$router.push({path:"/",query:{lat:this.cave.lat,lng:this.cave.lng}})},async toggleFavourite(){if(this.cave.isFavourite)try{await w.delete("/api/favorites/",{data:{caveId:this.cave.caveNumber}}),this.cave.isFavourite=!1}catch(a){console.error(a)}else try{await w.post("/api/favorites",{caveId:this.cave.caveNumber}),this.cave.isFavourite=!0}catch(a){console.error(a)}}},created(){this.cave=this.$route.meta.cave;const a=L([this.cave.lng,this.cave.lat]);this.center=a;const c=new q(new B(a));this.markLocations=[c]}},Y={class:"text-overline text-orange-9"},j={class:"row no-wrap items-center"},A={class:"col text-h6 ellipsis"},G={class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"},J={class:"row no-wrap items-center"},U={class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"},W={key:0},K={class:"text-left table-row-fit"},X={class:"text-left table-row-fit"},Z={key:1},$={class:"text-left table-row-fit"},tt={class:"text-left table-row-fit"},et={key:2},at={class:"text-left table-row-fit"},ot={class:"text-left table-row-fit"},st={key:3},it={class:"text-left table-row-fit"},rt={class:"text-left table-row-fit"},ct={key:4},lt={class:"text-left table-row-fit"},nt={class:"text-left table-row-fit"},dt={key:5},vt={class:"text-left table-row-fit"},ft={class:"text-left table-row-fit"},_t={key:6},ht={class:"text-left table-row-fit"},mt={class:"text-left table-row-fit"},ut={key:7},bt={class:"text-left table-row-fit"},wt={class:"text-left table-row-fit"},gt={key:8},yt={class:"text-left table-row-fit"},kt={class:"text-left table-row-fit"},pt={class:"text-left table-row-fit"},xt={class:"text-left table-row-fit"},Ct={key:9},Ft={class:"text-left table-row-fit"},Ot={class:"text-left table-row-fit"},Dt={key:10},Lt={class:"text-left table-row-fit"},Qt={class:"text-left table-row-fit"},Mt={key:11},Nt={class:"text-left table-row-fit"},St={class:"text-left table-row-fit"},zt={key:12},Tt={class:"text-left table-row-fit"},Et={class:"text-left table-row-fit"};function It(a,c,n,t,h,d){const y=g("SimpleHeaderMap"),k=g("OrganizationsList");return s(),Q(M,{class:"cave-top"},{default:f(()=>[l(y,{center:t.center,markLocations:t.markLocations},null,8,["center","markLocations"]),l(S,null,{default:f(()=>[l(F,{class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"},"vertical-actions-align":"right",color:"primary",glossy:"",icon:"keyboard_arrow_up",direction:"up"},{default:f(()=>[l(_,{"label-position":"left",color:"green",icon:"map",label:a.$t("mainMap"),onClick:d.showOnMap},null,8,["label","onClick"]),l(_,{"label-position":"left",color:"red",icon:d.favouriteIcon,label:a.$t("favourite"),onClick:d.toggleFavourite},null,8,["icon","label","onClick"]),l(_,{"label-position":"left",color:"orange",icon:"assist_walker",label:a.$t("navigate"),onClick:d.goTo},null,8,["label","onClick"])]),_:1}),o("div",Y,e(a.$t("caveDetails")),1),o("div",j,[o("div",A,e(t.cave.caveNumber)+" - "+e(t.cave.name),1),o("div",G,[l(N,{name:d.favouriteIcon,color:t.cave.isFavourite?"red":"default",size:"sm"},null,8,["name","color"])])]),o("div",J,[o("div",U,e(a.$t("length"))+": "+e(t.cave.length)+" m, "+e(a.$t("depth"))+": "+e(t.cave.depth)+" m ",1)])]),_:1}),l(z),l(I,null,{default:f(()=>{var m,u,b;return[o("tbody",null,[t.cave.organizations?(s(),i("tr",W,[o("td",K,e(a.$t("organizations")),1),o("td",X,[l(k,{organizations:t.cave.organizations},null,8,["organizations"])])])):r("",!0),t.cave.dateOfExcursion?(s(),i("tr",Z,[o("td",$,e(a.$t("dateOfDiscovery")),1),o("td",tt,e(t.formatDate(t.cave.dateOfExcursion)),1)])):r("",!0),t.cave.author?(s(),i("tr",et,[o("td",at,e(a.$t("authorsOfReport")),1),o("td",ot,e(t.cave.author),1)])):r("",!0),t.cave.team?(s(),i("tr",st,[o("td",it,e(a.$t("discoverers")),1),o("td",rt,e(t.cave.team),1)])):r("",!0),t.cave.dateOfSubmission?(s(),i("tr",ct,[o("td",lt,e(a.$t("importDate")),1),o("td",nt,e(t.formatDate(t.cave.dateOfSubmission)),1)])):r("",!0),t.cave.notes?(s(),i("tr",dt,[o("td",vt,e(a.$t("note")),1),o("td",ft,e(t.cave.notes),1)])):r("",!0),t.cave.turisticCave?(s(),i("tr",_t,[o("td",ht,e(a.$t("showCave")),1),o("td",mt,e(t.cave.turisticCave?"Yes":"No"),1)])):r("",!0),t.cave.caveTypes?(s(),i("tr",ut,[o("td",bt,e(a.$t("type")),1),o("td",wt,[(s(!0),i(T,null,E(t.cave.caveTypes,({name:p,description:x},C)=>(s(),i("span",{key:C},e(p)+" - "+e(a.$t(`caveTypes.${x}`)),1))),128))])])):r("",!0),t.cave.xcoordinate?(s(),i("tr",gt,[o("td",yt,e(a.$t("dk48")),1),o("td",kt,e(t.cave.xcoordinate)+", "+e(t.cave.ycoordinate),1)])):r("",!0),o("tr",null,[o("td",pt,e(a.$t("wgs84")),1),o("td",xt,e(t.cave.lng.toFixed(5))+", "+e(t.cave.lat.toFixed(5)),1)]),t.cave.entranceElevation?(s(),i("tr",Ct,[o("td",Ft,e(a.$t("entranceElevation")),1),o("td",Ot,e(t.cave.entranceElevation)+" m",1)])):r("",!0),t.cave.settlement?(s(),i("tr",Dt,[o("td",Lt,e(a.$t("closestTown")),1),o("td",Qt,e((m=t.cave.settlement)==null?void 0:m.name),1)])):r("",!0),t.cave.settlement?(s(),i("tr",Mt,[o("td",Nt,e(a.$t("municipality")),1),o("td",St,e((u=t.cave.settlement)==null?void 0:u.municipality),1)])):r("",!0),t.cave.kadasterMunicipality?(s(),i("tr",zt,[o("td",Tt,e(a.$t("kadasterMunicipality")),1),o("td",Et,e((b=t.cave.kadasterMunicipality)==null?void 0:b.name),1)])):r("",!0)])]}),_:1})]),_:1})}var jt=O(R,[["render",It]]);export{jt as default};
