(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["products"],{1393:function(t,r,e){"use strict";var a=e("23e7"),i=e("857a"),c=e("af03");a({target:"String",proto:!0,forced:c("big")},{big:function(){return i(this,"big","","")}})},"5fa5":function(t,r,e){t.exports=e.p+"img/powderpackage.19fc07ea.png"},9362:function(t,r,e){t.exports=e.p+"img/capsulepackage.78e4881a.png"},"99d9":function(t,r,e){"use strict";e.d(r,"a",(function(){return c})),e.d(r,"b",(function(){return s})),e.d(r,"c",(function(){return n})),e.d(r,"d",(function(){return o}));var a=e("b0af"),i=e("80d2"),c=Object(i["i"])("v-card__actions"),s=Object(i["i"])("v-card__subtitle"),n=Object(i["i"])("v-card__text"),o=Object(i["i"])("v-card__title");a["a"]},e6dc:function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-main",{staticClass:"mt-10",attrs:{id:"products"}},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"2"}},[e("v-list",{attrs:{flat:""}},[e("v-list-item-group",{staticClass:"products_menu",attrs:{color:"#9d8460"}},[e("v-list-item",{on:{click:function(r){t.filter=""}}},[e("v-list-item-title",[t._v("ALL")])],1),e("v-list-item",{on:{click:function(r){t.filter="咖啡豆"}}},[e("v-list-item-title",[t._v("咖啡豆")])],1),e("v-list-item",{on:{click:function(r){t.filter="咖啡粉"}}},[e("v-list-item-title",[t._v("咖啡粉")])],1),e("v-list-item",{on:{click:function(r){t.filter="膠囊咖啡"}}},[e("v-list-item-title",[t._v("膠囊咖啡")])],1),e("v-list-item",{on:{click:function(r){t.filter="設備"}}},[e("v-list-item-title",[t._v("設備")])],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"10"}},[e("v-row",t._l(t.filterItems,(function(t){return e("v-col",{key:t._id,attrs:{cols:"12",sm:"6",lg:"3"}},[e("ProductCard",{attrs:{product:t}})],1)})),1)],1)],1)],1)],1)},i=[],c=e("1da1"),s=(e("96cf"),e("4de4"),e("d3b7"),e("1393"),function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("router-link",{attrs:{id:"productcard",to:"/product/"+t.product._id}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var i=r.hover;return[a("v-card",{staticClass:"card-product ma-5",attrs:{flat:"",width:"400"}},[a("v-img",{staticClass:"card-product-img",attrs:{src:t.product.image}},[a("v-fade-transition",[i?a("v-overlay",{attrs:{absolute:""}},["咖啡豆"===t.product.category.big?a("v-img",{staticClass:"bean",attrs:{src:e("edff")}}):t._e(),"咖啡粉"===t.product.category.big?a("v-img",{staticClass:"powder",attrs:{src:e("5fa5")}}):t._e(),"膠囊咖啡"===t.product.category.big?a("v-img",{staticClass:"capsule",attrs:{src:e("9362")}}):t._e()],1):t._e()],1)],1),a("v-card-subtitle",{staticClass:"pt-1 pb-0 px-3"},[t._v(" "+t._s(t.product.category.big)+"-"+t._s(t.product.category.small)+" ")]),a("v-card-title",{staticClass:"px-3 pt-1"},[a("h1",[t._v(t._s(t.product.name))])]),a("v-card-text",[a("h3",[t._v(t._s("NT$ "+t.product.price))])])],1)]}}])})],1)}),n=[],o={props:{product:{type:Object,required:!0}},data:function(){return{overlay:!1}}},u=o,l=e("2877"),d=e("6544"),p=e.n(d),v=e("b0af"),f=e("99d9"),m=e("0789"),g=e("ce87"),_=e("adda"),b=e("a797"),C=Object(l["a"])(u,s,n,!1,null,null,null),w=C.exports;p()(C,{VCard:v["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VFadeTransition:m["c"],VHover:g["a"],VImg:_["a"],VOverlay:b["a"]});var V={components:{ProductCard:w},data:function(){return{products:[],filter:""}},computed:{filterItems:function(){var t=this;return this.products.filter((function(r){return""===t.filter||r.category.big===t.filter}))}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var e,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.api.get("/products");case 3:e=r.sent,a=e.data,t.products=a.result,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},h=V,k=e("62ad"),x=e("a523"),y=e("8860"),O=e("da13"),j=e("1baa"),I=e("5d23"),L=e("f6c4"),T=e("0fd9"),$=Object(l["a"])(h,a,i,!1,null,null,null);r["default"]=$.exports;p()($,{VCol:k["a"],VContainer:x["a"],VList:y["a"],VListItem:O["a"],VListItemGroup:j["a"],VListItemTitle:I["b"],VMain:L["a"],VRow:T["a"]})},edff:function(t,r,e){t.exports=e.p+"img/package.e1a61ea4.png"}}]);
//# sourceMappingURL=products.5b776843.js.map