(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{"410f":function(t,e,a){t.exports=a.p+"img/lessons.fec6e51a.png"},a2f9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",{attrs:{id:"news"}},[n("v-container",[n("v-row",[n("v-col",[n("u-animate-container",[n("u-animate",{attrs:{name:"fadeIn",delay:"1s",duration:"5s",iteration:1,offset:0,animateClass:"animated",begin:!1}},[n("v-img",{attrs:{src:a("410f")}})],1)],1)],1),n("v-col",{staticClass:"mt-5",attrs:{cols:"12"}},[n("u-animate-container",[n("u-animate",{attrs:{name:"fadeIn",delay:"1s",duration:"5s",iteration:1,offset:0,animateClass:"animated",begin:!1}},[n("div",{staticClass:"activity"},[n("p",{staticClass:"text-center"},[t._v("想更了解一杯咖啡，如何從產區生豆變成香氣四溢的熟豆嗎?")]),n("p",{staticClass:"text-center"},[t._v("淺顯易懂的基礎烘豆課程，讓您快速了解烘豆原理")])])])],1)],1),n("v-col")],1)],1),n("v-container",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-data-table",{staticClass:"lesson_table mt-5",attrs:{headers:t.headers,items:t.lessons},scopedSlots:t._u([{key:"item.lessonName",fn:function(e){var a=e.item;return[n("div",[t._v(t._s(a.lessonName))])]}},{key:"item.price",fn:function(e){var a=e.item;return[n("div",[t._v("NT$"+t._s(a.price))])]}},{key:"item.action",fn:function(e){var a=e.item;return[n("v-btn",{attrs:{color:"#f7b267"},on:{click:function(e){return t.signUp(a)}}},[t._v("報名")])]}}])})],1)],1)],1)],1)},s=[],r=a("1da1"),i=(a("96cf"),{data:function(){return{lessons:[],headers:[{text:"課程名稱",value:"lessonName"},{text:"課程價錢",value:"price"},{text:"課程報名",value:"action"}],form:{lessonName:"",price:""}}},methods:{signUp:function(t){console.log(this.lessons),0===this.user.token.length?(this.$swal({icon:"error",title:"錯誤",text:"請先登入"}),this.$route.push("/")):(this.$store.commit("user/lessons",t),this.$router.push("/newsForm"))}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/lessons");case 3:a=e.sent,n=a.data,t.lessons=n.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),o=i,c=a("2877"),l=a("6544"),u=a.n(l),m=a("8336"),f=a("62ad"),v=a("a523"),d=a("8fea"),p=a("adda"),h=a("f6c4"),w=a("0fd9"),g=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=g.exports;u()(g,{VBtn:m["a"],VCol:f["a"],VContainer:v["a"],VDataTable:d["a"],VImg:p["a"],VMain:h["a"],VRow:w["a"]})}}]);
//# sourceMappingURL=news.771f5016.js.map