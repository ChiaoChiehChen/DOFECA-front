(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"73cf":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-main",{attrs:{id:"register"}},[r("v-container",{staticClass:"reg_con"},[r("h1",{staticClass:"text-center"},[e._v("Join us!")]),r("v-row",{staticClass:"mt-md-5  ",attrs:{width:"400"}},[r("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hover;return[r("v-card",{staticClass:"reg_box mx-auto",attrs:{width:"420",height:"500",elevation:a?10:2}},[r("v-card-title",[r("h1",{staticClass:"mx-auto mt-5"},[e._v("Register")])]),r("v-divider",{staticClass:"ma-4"}),r("v-card-text",[r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{label:"E-mail",rules:e.emailRules,hint:"請輸入正確信箱格式","prepend-icon":"mdi-email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("v-text-field",{attrs:{label:"Your Name",rules:e.nameRules,hint:"名字必填","prepend-icon":"mdi-account",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),r("v-text-field",{attrs:{label:"Create New Account",rules:e.inputRules,hint:"帳號長度為 4 到 20 個字","prepend-icon":"mdi-account-circle",required:""},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}}),r("v-text-field",{attrs:{type:e.showPassword?"text":"password",label:"Create Password",rules:e.inputRules,hint:"密碼長度為 4 到 20 個字","prepend-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),r("v-card-actions",{staticClass:"d-flex justify-center align-center"},[r("v-btn",{staticClass:"mt-5 mt-md-2",attrs:{color:"brown darken-1",type:"submit",plain:""}},[e._v("Sign Up")])],1)],1)],1)],1)]}}])})],1)],1)],1)],1)},n=[],i=r("1da1"),s=(r("96cf"),r("ac1f"),r("00b4"),{data:function(){return{valid:!0,form:{account:"",password:"",email:"",name:""},showPassword:!1,inputRules:[function(e){return!!e||"必填"},function(e){return e&&e.length>=4&&e.length<=20||"長度為 4 到 20 個字"}],emailRules:[function(e){return!!e||"必填"},function(e){return/.+@.+\..+/.test(e)||"請輸入正確信箱格式"}],nameRules:[function(e){return!!e||"必填"}]}},methods:{register:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$refs.form.validate(),r){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,e.api.post("/users",e.form);case 6:e.$swal({icon:"success",title:"成功",text:"註冊成功"}),e.$router.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),e.$swal({icon:"error",title:"失敗",text:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}}),o=s,c=r("2877"),l=r("6544"),u=r.n(l),d=r("8336"),f=r("b0af"),m=r("99d9"),v=r("62ad"),p=r("a523"),h=r("ce7e"),b=r("4bd4"),w=r("ce87"),x=r("f6c4"),C=r("0fd9"),g=r("8654"),_=Object(c["a"])(o,a,n,!1,null,null,null);t["default"]=_.exports;u()(_,{VBtn:d["a"],VCard:f["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VCol:v["a"],VContainer:p["a"],VDivider:h["a"],VForm:b["a"],VHover:w["a"],VMain:x["a"],VRow:C["a"],VTextField:g["a"]})},"8ce9":function(e,t,r){},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return c}));var a=r("b0af"),n=r("80d2"),i=Object(n["i"])("v-card__actions"),s=Object(n["i"])("v-card__subtitle"),o=Object(n["i"])("v-card__text"),c=Object(n["i"])("v-card__title");a["a"]},ce7e:function(e,t,r){"use strict";var a=r("5530"),n=(r("8ce9"),r("7560"));t["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=register.3040067d.js.map