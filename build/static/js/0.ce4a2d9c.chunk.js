webpackJsonp([0],{184:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function i(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=t(0),u=t.n(a),c=t(4),f=t(9),p=t(60),l=t(185),s=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),d=function(n){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,n),s(e,[{key:"render",value:function(){var n=this.props,e=n.title,t=n.content;return u.a.createElement(l.b,null,u.a.createElement(l.c,null,e),u.a.createElement(l.a,{dangerouslySetInnerHTML:{__html:t}}))}},{key:"componentDidMount",value:function(){this.props.getDetail(this.props.match.params.id)}}]),e}(a.PureComponent),h=function(n){return{title:n.getIn(["detail","title"]),content:n.getIn(["detail","content"])}},b=function(n){return{getDetail:function(e){n(p.a.getDetail(e))}}};e.default=Object(c.b)(h,b)(Object(f.e)(d))},185:function(n,e,t){"use strict";function o(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,"b",function(){return c}),t.d(e,"c",function(){return f}),t.d(e,"a",function(){return p});var r=t(8),i=o(["\n  overflow: hidden;\n  width: 620px;\n  margin: 0 auto;\n  padding-bottom: 100px;\n"],["\n  overflow: hidden;\n  width: 620px;\n  margin: 0 auto;\n  padding-bottom: 100px;\n"]),a=o(["\n  margin: 50px 0 20px 0;\n  font-size: 34px;\n  line-height: 44px;\n  color: #333;\n  font-weight: bold;\n"],["\n  margin: 50px 0 20px 0;\n  font-size: 34px;\n  line-height: 44px;\n  color: #333;\n  font-weight: bold;\n"]),u=o(["\n  color: #2f2f2f;\n  img {\n    width: 100%;\n  }\n  p {\n    margin: 25px 0;\n    font-size: 16px;\n    line-height: 30px;\n  }\n"],["\n  color: #2f2f2f;\n  img {\n    width: 100%;\n  }\n  p {\n    margin: 25px 0;\n    font-size: 16px;\n    line-height: 30px;\n  }\n"]),c=r.a.div(i),f=r.a.div(a),p=r.a.div(u)}});
//# sourceMappingURL=0.ce4a2d9c.chunk.js.map