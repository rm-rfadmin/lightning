(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{cfSo:function(e,t,a){e.exports={title:"antd-pro-pages-profile-basic-profile-title"}},hJFj:function(e,t,a){"use strict";a.r(t);a("DAWX");var n,r,i=a("USTd"),o=(a("Mst4"),a("Fg9b")),c=(a("/lFS"),a("/2/W")),l=a("dLrW"),s=a.n(l),d=a("cjXc"),m=a.n(d),u=a("3m6/"),p=a.n(u),f=a("CIpT"),g=a.n(f),y=a("QetK"),h=a.n(y),E=(a("BHTy"),a("kKmY")),v=a("qE61"),k=a.n(v),x=a("zQXf"),I=a("+kNj"),b=a("zHco"),B=a("cfSo"),S=a.n(B);function w(e){var t=N();return function(){var a,n=h()(e);if(t){var r=h()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return g()(this,a)}}function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var D=I["a"].Description,W=[{title:"\u65f6\u95f4",dataIndex:"time",key:"time"},{title:"\u5f53\u524d\u8fdb\u5ea6",dataIndex:"rate",key:"rate"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return"success"===e?k.a.createElement(E["a"],{status:"success",text:"\u6210\u529f"}):k.a.createElement(E["a"],{status:"processing",text:"\u8fdb\u884c\u4e2d"})}},{title:"\u64cd\u4f5c\u5458ID",dataIndex:"operator",key:"operator"},{title:"\u8017\u65f6",dataIndex:"cost",key:"cost"}],R=(n=Object(x["connect"])(function(e){var t=e.profile,a=e.loading;return{profile:t,loading:a.effects["profile/fetchBasic"]}}),n(r=function(e){p()(a,e);var t=w(a);function a(){return s()(this,a),t.apply(this,arguments)}return m()(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match,n=a.params;t({type:"profile/fetchBasic",payload:n.id||"1000000000"})}},{key:"render",value:function(){var e=this.props,t=e.profile,a=void 0===t?{}:t,n=e.loading,r=a.basicGoods,l=void 0===r?[]:r,s=a.basicProgress,d=void 0===s?[]:s,m=a.userInfo,u=void 0===m?{}:m,p=a.application,f=void 0===p?{}:p,g=[];if(l.length){var y=0,h=0;l.forEach(function(e){y+=Number(e.num),h+=Number(e.amount)}),g=l.concat({id:"\u603b\u8ba1",num:y,amount:h})}var E=function(e,t,a){var n={children:e,props:{}};return a===l.length&&(n.props.colSpan=0),n},v=[{title:"\u5546\u54c1\u7f16\u53f7",dataIndex:"id",key:"id",render:function(e,t,a){return a<l.length?k.a.createElement("a",{href:""},e):{children:k.a.createElement("span",{style:{fontWeight:600}},"\u603b\u8ba1"),props:{colSpan:4}}}},{title:"\u5546\u54c1\u540d\u79f0",dataIndex:"name",key:"name",render:E},{title:"\u5546\u54c1\u6761\u7801",dataIndex:"barcode",key:"barcode",render:E},{title:"\u5355\u4ef7",dataIndex:"price",key:"price",align:"right",render:E},{title:"\u6570\u91cf\uff08\u4ef6\uff09",dataIndex:"num",key:"num",align:"right",render:function(e,t,a){return a<l.length?e:k.a.createElement("span",{style:{fontWeight:600}},e)}},{title:"\u91d1\u989d",dataIndex:"amount",key:"amount",align:"right",render:function(e,t,a){return a<l.length?e:k.a.createElement("span",{style:{fontWeight:600}},e)}}];return k.a.createElement(b["a"],{title:"\u57fa\u7840\u8be6\u60c5\u9875",loading:n},k.a.createElement(i["a"],{bordered:!1},k.a.createElement(I["a"],{size:"large",title:"\u9000\u6b3e\u7533\u8bf7",style:{marginBottom:32}},k.a.createElement(D,{term:"\u53d6\u8d27\u5355\u53f7"},f.id),k.a.createElement(D,{term:"\u72b6\u6001"},f.status),k.a.createElement(D,{term:"\u9500\u552e\u5355\u53f7"},f.orderNo),k.a.createElement(D,{term:"\u5b50\u8ba2\u5355"},f.childOrderNo)),k.a.createElement(c["a"],{style:{marginBottom:32}}),k.a.createElement(I["a"],{size:"large",title:"\u7528\u6237\u4fe1\u606f",style:{marginBottom:32}},k.a.createElement(D,{term:"\u7528\u6237\u59d3\u540d"},u.name),k.a.createElement(D,{term:"\u8054\u7cfb\u7535\u8bdd"},u.tel),k.a.createElement(D,{term:"\u5e38\u7528\u5feb\u9012"},u.delivery),k.a.createElement(D,{term:"\u53d6\u8d27\u5730\u5740"},u.addr),k.a.createElement(D,{term:"\u5907\u6ce8"},u.remark)),k.a.createElement(c["a"],{style:{marginBottom:32}}),k.a.createElement("div",{className:S.a.title},"\u9000\u8d27\u5546\u54c1"),k.a.createElement(o["a"],{style:{marginBottom:24},pagination:!1,loading:n,dataSource:g,columns:v,rowKey:"id"}),k.a.createElement("div",{className:S.a.title},"\u9000\u8d27\u8fdb\u5ea6"),k.a.createElement(o["a"],{style:{marginBottom:16},pagination:!1,loading:n,dataSource:d,columns:W})))}}]),a}(v["Component"]))||r);t["default"]=R}}]);