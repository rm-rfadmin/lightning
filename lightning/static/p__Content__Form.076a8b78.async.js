(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"y+eM":function(t,e,n){"use strict";n.r(e);var r,c,a=n("dLrW"),u=n.n(a),o=n("cjXc"),i=n.n(o),s=n("3m6/"),f=n.n(s),l=n("CIpT"),p=n.n(l),h=n("QetK"),m=n.n(h),d=n("qE61"),y=n.n(d),v=n("s98/"),R=n.n(v),b=n("OaWn"),w=n.n(b),E=n("zQXf"),O=n("zHco"),g=n("xNPh"),j=n("JYAO"),k=n("wOmh");function C(t){var e=D();return function(){var n,r=m()(t);if(e){var c=m()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p()(this,n)}}function D(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}var P,U=(r=Object(E["connect"])(function(t){var e=t.content.schemas,n=t.user.currentUser;return{schemas:e,currentUser:n}}),R()(c=r(c=function(t){f()(n,t);var e=C(n);function n(){return u()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var t=this.props,e=t.match.params,n=e.model,r=e.id,c=t.location.query.redirect_path,a=t.schemas,u=this.permissions;if(!u)return null;var o=0!==r&&r,i=a[n]||{},s=o?"\u7f16\u8f91":"\u65b0\u5efa",f="".concat(s).concat(i.displayName),l=Object(g["a"])(n);return y.a.createElement(O["a"],{title:f},o&&u.includes("change")||!o&&u.includes("add")?y.a.createElement(l,{onCreate:function(t){return w.a.push(c?c.replace("{id}",Object(j["v"])(t,n)):"/content/".concat(n))},onUpdate:function(t){return w.a.push(c?c.replace("{id}",Object(j["v"])(t,n)):"/content/".concat(n))},model:n,objectid:r}):y.a.createElement(k["default"],null))}},{key:"permissions",get:function(){var t=this.props,e=t.currentUser.permissions,n=t.match.params.model;return e?e.filter(function(t){return t.endsWith(n)}).map(function(t){return t.split("_")[0]}):null}}]),n}(d["PureComponent"]))||c)||c),x=U,J=n("7gdK");function W(t){var e=q();return function(){var n,r=m()(t);if(e){var c=m()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return p()(this,n)}}function q(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}var z=R()(P=function(t){f()(n,t);var e=W(n);function n(){return u()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var t=this.props.match.params.model;return y.a.createElement(y.a.Fragment,null,y.a.createElement(x,this.props),y.a.createElement(J["a"],{key:t,model:t,defaultTab:"form"}))}}]),n}(d["Component"]))||P,K=z;e["default"]=K}}]);