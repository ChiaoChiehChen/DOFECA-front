(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{"410f":function(t,e,s){t.exports=s.p+"img/lessons.fec6e51a.png"},a2f9:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",{attrs:{id:"news"}},[n("v-container",[n("v-row",[n("v-col",[n("v-img",{attrs:{src:s("410f")}})],1),n("v-col",{staticClass:"mt-5",attrs:{cols:"12"}},[n("div",{staticClass:"activity"},[n("p",{staticClass:"text-center"},[t._v("想更了解一杯咖啡，如何從產區生豆變成香氣四溢的熟豆嗎?")]),n("p",{staticClass:"text-center"},[t._v("淺顯易懂的基礎烘豆課程，讓您快速了解烘豆原理")])])]),n("v-col")],1)],1),n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-data-table",{staticClass:"lesson_table mt-10",attrs:{headers:t.headers,items:t.lessons},scopedSlots:t._u([{key:"item.lessonName",fn:function(e){var s=e.item;return[n("div",[t._v(t._s(s.lessonName))])]}},{key:"item.price",fn:function(e){var s=e.item;return[n("div",[t._v("NT$"+t._s(s.price))])]}},{key:"item.action",fn:function(e){var s=e.item;return[n("v-btn",{attrs:{color:"#f7b267"},on:{click:function(e){return t.signUp(s)}}},[t._v("報名")])]}}])})],1)],1),n("v-btn",{attrs:{to:"/newsForm"}})],1)],1)},a=[],r=s("1da1"),i=(s("96cf"),{data:function(){return{lessons:[],headers:[{text:"課程名稱",value:"lessonName"},{text:"課程價錢",value:"price"},{text:"課程報名",value:"action"}],form:{lessonName:"",price:""}}},methods:{signUp:function(t){0===this.user.token.length?(this.$swal({icon:"error",title:"錯誤",text:"請先登入"}),this.$route.push("/")):(this.$store.commit("user/lessons",this.lessons),this.$router.push("/newsForm"))}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/lessons");case 3:s=e.sent,n=s.data,t.lessons=n.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),o=i,c=s("2877"),l=s("6544"),u=s.n(l),v=s("8336"),f=s("62ad"),m=s("a523"),p=s("8fea"),d=s("adda"),h=s("f6c4"),w=s("0fd9"),x=Object(c["a"])(o,n,a,!1,null,null,null);e["default"]=x.exports;u()(x,{VBtn:v["a"],VCol:f["a"],VContainer:m["a"],VDataTable:p["a"],VImg:d["a"],VMain:h["a"],VRow:w["a"]})}}]);
//# sourceMappingURL=news.d44794eb.js.map