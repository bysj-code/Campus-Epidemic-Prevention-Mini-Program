(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xuesheng-add-or-update"],{1304:function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("28a5"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o={data:function(){return{ruleForm:{xuehao:"",mima:"",xingming:"",xingbie:"",zhuanye:"",banji:"",lianxidianhua:"",youxiang:"",shenfenzheng:"",sfsh:"",shhf:""},xingbieOptions:[],xingbieIndex:0,zhuanyeOptions:[],zhuanyeIndex:0,user:{},ro:{xuehao:!1,mima:!1,xingming:!1,xingbie:!1,zhuanye:!1,banji:!1,lianxidianhua:!1,youxiang:!1,shenfenzheng:!1,sfsh:!1,shhf:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:return i=e.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),e.next=8,this.$api.option("zhuanye","zhuanye",{});case 8:if(i=e.sent,this.zhuanyeOptions=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=18;break}return this.ruleForm.id=r.id,e.next=16,this.$api.info("xuesheng",this.ruleForm.id);case 16:i=e.sent,this.ruleForm=i.data;case 18:if(!r.cross){e.next=61;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 21:if((e.t1=e.t0()).done){e.next=61;break}if(a=e.t1.value,"xuehao"!=a){e.next=27;break}return this.ruleForm.xuehao=n[a],this.ro.xuehao=!0,e.abrupt("continue",21);case 27:if("mima"!=a){e.next=31;break}return this.ruleForm.mima=n[a],this.ro.mima=!0,e.abrupt("continue",21);case 31:if("xingming"!=a){e.next=35;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,e.abrupt("continue",21);case 35:if("xingbie"!=a){e.next=39;break}return this.ruleForm.xingbie=n[a],this.ro.xingbie=!0,e.abrupt("continue",21);case 39:if("zhuanye"!=a){e.next=43;break}return this.ruleForm.zhuanye=n[a],this.ro.zhuanye=!0,e.abrupt("continue",21);case 43:if("banji"!=a){e.next=47;break}return this.ruleForm.banji=n[a],this.ro.banji=!0,e.abrupt("continue",21);case 47:if("lianxidianhua"!=a){e.next=51;break}return this.ruleForm.lianxidianhua=n[a],this.ro.lianxidianhua=!0,e.abrupt("continue",21);case 51:if("youxiang"!=a){e.next=55;break}return this.ruleForm.youxiang=n[a],this.ro.youxiang=!0,e.abrupt("continue",21);case 55:if("shenfenzheng"!=a){e.next=59;break}return this.ruleForm.shenfenzheng=n[a],this.ro.shenfenzheng=!0,e.abrupt("continue",21);case 59:e.next=21;break;case 61:this.styleChange();case 62:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhuanyeChange:function(e){this.zhuanyeIndex=e.target.value,this.ruleForm.zhuanye=this.zhuanyeOptions[this.zhuanyeIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.lianxidianhua||this.$validate.isPhone(this.ruleForm.lianxidianhua)){e.next=3;break}return this.$utils.msg("联系电话应输入电话格式"),e.abrupt("return");case 3:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=6;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 6:if(!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=9;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 9:if(!this.ruleForm.id){e.next=14;break}return e.next=12,this.$api.update("xuesheng",this.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,this.$api.add("xuesheng",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},"3f9a":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-08f96535]{padding:%?20?%}.content[data-v-08f96535]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-08f96535]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-08f96535]{width:%?180?%}.avator[data-v-08f96535]{width:%?150?%;height:%?60?%}.right-input[data-v-08f96535]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-08f96535]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-08f96535]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-08f96535]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-08f96535]{border:0}.cu-form-group uni-input[data-v-08f96535]{padding:0 %?30?%}.uni-input[data-v-08f96535]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-08f96535]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-08f96535]::after{line-height:%?88?%}.select .uni-input[data-v-08f96535]{line-height:%?88?%}.input .right-input[data-v-08f96535]{line-height:%?88?%}',""]),e.exports=r},"50a8":function(e,r,t){"use strict";var i=t("8279"),n=t.n(i);n.a},8279:function(e,r,t){var i=t("3f9a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("547d54d2",i,!0,{sourceMap:!1,shadowMode:!1})},e78a:function(e,r,t){"use strict";var i,n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("学号")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.xuehao,placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(r){e.$set(e.ruleForm,"xuehao",r)},expression:"ruleForm.xuehao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("密码")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.mima,placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(r){e.$set(e.ruleForm,"mima",r)},expression:"ruleForm.mima"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("性别")]),t("v-uni-picker",{attrs:{value:e.xingbieIndex,range:e.xingbieOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.xingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("专业")]),t("v-uni-picker",{attrs:{value:e.zhuanyeIndex,range:e.zhuanyeOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.zhuanyeChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.zhuanye?e.ruleForm.zhuanye:"请选择专业"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("班级")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.banji,placeholder:"班级"},model:{value:e.ruleForm.banji,callback:function(r){e.$set(e.ruleForm,"banji",r)},expression:"ruleForm.banji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("联系电话")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.lianxidianhua,placeholder:"联系电话"},model:{value:e.ruleForm.lianxidianhua,callback:function(r){e.$set(e.ruleForm,"lianxidianhua",r)},expression:"ruleForm.lianxidianhua"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("邮箱")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.youxiang,placeholder:"邮箱"},model:{value:e.ruleForm.youxiang,callback:function(r){e.$set(e.ruleForm,"youxiang",r)},expression:"ruleForm.youxiang"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("身份证")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.shenfenzheng,placeholder:"身份证"},model:{value:e.ruleForm.shenfenzheng,callback:function(r){e.$set(e.ruleForm,"shenfenzheng",r)},expression:"ruleForm.shenfenzheng"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(255, 153, 0, 1)",borderColor:"rgba(255, 255, 0, 1)",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},a=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))},f19e:function(e,r,t){"use strict";t.r(r);var i=t("e78a"),n=t("f2c1");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("50a8");var o,u=t("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"08f96535",null,!1,i["a"],o);r["default"]=s.exports},f2c1:function(e,r,t){"use strict";t.r(r);var i=t("1304"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=n.a}}]);