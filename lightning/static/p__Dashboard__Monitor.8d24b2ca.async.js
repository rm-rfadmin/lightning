(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"6p3G":function(e,t,a){"use strict";a.r(t);a("DAWX");var n=a("USTd"),r=(a("3Y6A"),a("sG/I")),o=(a("FtyQ"),a("WvG8")),i=(a("8keV"),a("IhqU")),c=a("dLrW"),l=a.n(c),s=a("cjXc"),m=a.n(s),u=a("3m6/"),d=a.n(u),p=a("CIpT"),f=a.n(p),h=a("QetK"),g=a.n(h),v=a("qE61"),E=a.n(v),y=a("zQXf"),M=a("kHhk"),T=a("KTCi"),x=a("LOQS"),b=a("rGn4"),F=a.n(b);function C(e){var t=D();return function(){var a,n=g()(e);if(t){var r=g()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return f()(this,a)}}function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function k(e){return 1*e<10?"0".concat(e):e}var R=function(e){var t=0,a=0;try{a="[object Date]"===Object.prototype.toString.call(e.target)?e.target.getTime():new Date(e.target).getTime()}catch(e){throw new Error("invalid target prop",e)}return t=a-(new Date).getTime(),{lastTime:t<0?0:t}},S=function(e){d()(a,e);var t=C(a);function a(e){var n;l()(this,a),n=t.call(this,e),n.timer=0,n.interval=1e3,n.defaultFormat=function(e){var t=36e5,a=6e4,n=Math.floor(e/t),r=Math.floor((e-n*t)/a),o=Math.floor((e-n*t-r*a)/1e3);return E.a.createElement("span",null,k(n),":",k(r),":",k(o))},n.tick=function(){var e=n.props.onEnd,t=n.state.lastTime;n.timer=setTimeout(function(){t<n.interval?(clearTimeout(n.timer),n.setState({lastTime:0},function(){e&&e()})):(t-=n.interval,n.setState({lastTime:t},function(){n.tick()}))},n.interval)};var r=R(e),o=r.lastTime;return n.state={lastTime:o},n}return m()(a,[{key:"componentDidMount",value:function(){this.tick()}},{key:"componentDidUpdate",value:function(e){var t=this.props.target;t!==e.target&&(clearTimeout(this.timer),this.tick())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.format,a=void 0===t?this.defaultFormat:t,n=(e.onEnd,F()(e,["format","onEnd"])),r=this.state.lastTime,o=a(r);return E.a.createElement("span",n,o)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=R(e),n=a.lastTime;return t.lastTime!==n?{lastTime:n}:null}}]),a}(v["Component"]),w=S,W=a("lyYd"),A=a.n(W),L=a("cHiq"),N=a.n(L);function G(e){var t=B();return function(){var a,n=g()(e);if(t){var r=g()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return f()(this,a)}}function B(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function P(e){return 1*e<10?"0".concat(e):e}function j(){for(var e=[],t=0;t<24;t+=1)e.push({x:"".concat(P(t),":00"),y:Math.floor(200*Math.random())+50*t});return e}var U,z,H,X=function(e){d()(a,e);var t=G(a);function a(){var e;l()(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={activeData:j()},e.loopData=function(){e.timer=setTimeout(function(){e.setState({activeData:j()},function(){e.loopData()})},500)},e}return m()(a,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var e=this.state.activeData,t=void 0===e?[]:e;return E.a.createElement("div",{className:N.a.activeChart},E.a.createElement(x["a"],{subTitle:"\u76ee\u6807\u8bc4\u4f30",total:"\u6709\u671b\u8fbe\u5230\u9884\u671f"}),E.a.createElement("div",{style:{marginTop:32}},E.a.createElement(T["e"],{animate:!1,line:!0,borderWidth:2,height:84,scale:{y:{tickCount:3}},yAxis:{tickLine:!1,label:!1,title:!1,line:!1},data:t})),t&&E.a.createElement("div",null,E.a.createElement("div",{className:N.a.activeChartGrid},E.a.createElement("p",null,A()(t).sort()[t.length-1].y+200," \u4ebf\u5143"),E.a.createElement("p",null,A()(t).sort()[Math.floor(t.length/2)].y," \u4ebf\u5143")),E.a.createElement("div",{className:N.a.dashedLine},E.a.createElement("div",{className:N.a.line})),E.a.createElement("div",{className:N.a.dashedLine},E.a.createElement("div",{className:N.a.line}))),t&&E.a.createElement("div",{className:N.a.activeChartLegend},E.a.createElement("span",null,"00:00"),E.a.createElement("span",null,t[Math.floor(t.length/2)].x),E.a.createElement("span",null,t[t.length-1].x)))}}]),a}(v["Component"]),q=a("AALU"),O=a.n(q),Q=a("v99g"),I=a("HZnN"),K=a("XFmb"),J=a.n(K);function Y(e){var t=V();return function(){var a,n=g()(e);if(t){var r=g()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return f()(this,a)}}function V(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var Z=I["a"].Secured,$=(new Date).getTime()+39e5,_=new Promise(function(e){setTimeout(function(){return e()},300)}),ee=(U=Z(_),z=Object(y["connect"])(function(e){var t=e.monitor,a=e.loading;return{monitor:t,loading:a.models.monitor}}),U(H=z(H=function(e){d()(a,e);var t=Y(a);function a(){return l()(this,a),t.apply(this,arguments)}return m()(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"monitor/fetchTags"})}},{key:"render",value:function(){var e=this.props,t=e.monitor,a=e.loading,c=t.tags;return E.a.createElement(Q["a"],null,E.a.createElement(o["a"],{gutter:24},E.a.createElement(i["a"],{xl:18,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24}},E.a.createElement(n["a"],{title:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.trading-activity",defaultMessage:"Real-Time Trading Activity"}),bordered:!1},E.a.createElement(o["a"],null,E.a.createElement(i["a"],{md:6,sm:12,xs:24},E.a.createElement(x["a"],{subTitle:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.total-transactions",defaultMessage:"Total transactions today"}),suffix:"\u5143",total:O()(124543233).format("0,0")})),E.a.createElement(i["a"],{md:6,sm:12,xs:24},E.a.createElement(x["a"],{subTitle:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.sales-target",defaultMessage:"Sales target completion rate"}),total:"92%"})),E.a.createElement(i["a"],{md:6,sm:12,xs:24},E.a.createElement(x["a"],{subTitle:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.remaining-time",defaultMessage:"Remaining time of activity"}),total:E.a.createElement(w,{target:$})})),E.a.createElement(i["a"],{md:6,sm:12,xs:24},E.a.createElement(x["a"],{subTitle:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.total-transactions-per-second",defaultMessage:"Total transactions per second"}),suffix:"\u5143",total:O()(234).format("0,0")}))),E.a.createElement("div",{className:J.a.mapChart},E.a.createElement(r["a"],{title:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.waiting-for-implementation",defaultMessage:"Waiting for implementation"})},E.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/h%24wFbzuuzz/HBWnDEUXCnGnGrRfrpKa.png",alt:"map"}))))),E.a.createElement(i["a"],{xl:6,lg:24,md:24,sm:24,xs:24},E.a.createElement(n["a"],{title:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.activity-forecast",defaultMessage:"Activity forecast"}),style:{marginBottom:24},bordered:!1},E.a.createElement(X,null)),E.a.createElement(n["a"],{title:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.efficiency",defaultMessage:"Efficiency"}),style:{marginBottom:24},bodyStyle:{textAlign:"center"},bordered:!1},E.a.createElement(T["d"],{title:Object(M["formatMessage"])({id:"app.monitor.ratio",defaultMessage:"Ratio"}),height:180,percent:87})))),E.a.createElement(o["a"],{gutter:24},E.a.createElement(i["a"],{xl:12,lg:24,sm:24,xs:24,style:{marginBottom:24}},E.a.createElement(n["a"],{title:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.proportion-per-category",defaultMessage:"Proportion Per Category"}),bordered:!1,className:J.a.pieCard},E.a.createElement(o["a"],{style:{padding:"16px 0"}},E.a.createElement(i["a"],{span:8},E.a.createElement(T["h"],{animate:!1,percent:28,subTitle:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.fast-food",defaultMessage:"Fast food"}),total:"28%",height:128,lineWidth:2})),E.a.createElement(i["a"],{span:8},E.a.createElement(T["h"],{animate:!1,color:"#5DDECF",percent:22,subTitle:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.western-food",defaultMessage:"Western food"}),total:"22%",height:128,lineWidth:2})),E.a.createElement(i["a"],{span:8},E.a.createElement(T["h"],{animate:!1,color:"#2FC25B",percent:32,subTitle:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.hot-pot",defaultMessage:"Hot pot"}),total:"32%",height:128,lineWidth:2}))))),E.a.createElement(i["a"],{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},E.a.createElement(n["a"],{title:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.popular-searches",defaultMessage:"Popular Searches"}),loading:a,bordered:!1,bodyStyle:{overflow:"hidden"}},E.a.createElement(T["j"],{data:c,height:161}))),E.a.createElement(i["a"],{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},E.a.createElement(n["a"],{title:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.resource-surplus",defaultMessage:"Resource Surplus"}),bodyStyle:{textAlign:"center",fontSize:0},bordered:!1},E.a.createElement(T["l"],{height:161,title:E.a.createElement(M["FormattedMessage"],{id:"app.monitor.fund-surplus",defaultMessage:"Fund Surplus"}),percent:34})))))}}]),a}(v["Component"]))||H)||H);t["default"]=ee},XFmb:function(e,t,a){e.exports={mapChart:"antd-pro-pages-dashboard-monitor-mapChart",pieCard:"antd-pro-pages-dashboard-monitor-pieCard"}},cHiq:function(e,t,a){e.exports={activeChart:"antd-pro-components-active-chart-index-activeChart",activeChartGrid:"antd-pro-components-active-chart-index-activeChartGrid",activeChartLegend:"antd-pro-components-active-chart-index-activeChartLegend",dashedLine:"antd-pro-components-active-chart-index-dashedLine",line:"antd-pro-components-active-chart-index-line"}}}]);