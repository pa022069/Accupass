(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[0],{44:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(0),n=c(18),i=c(16),r=c(7),o=c(13),l=c(11),j=c(29),d=c.n(j),m=function(e){var t;return Object(a.jsxs)(i.b,{className:"group",to:"".concat(e.item.id),children:[Object(a.jsx)("span",{className:"group__img",style:{backgroundImage:(t=e.item,t.images.length>0?"url(".concat(e.item.images[0].src,")"):"/")}}),Object(a.jsxs)("span",{className:"group__info",children:[Object(a.jsx)("h2",{className:"title",children:e.item.name}),Object(a.jsx)("p",{className:"address",children:e.item.address})]})]})},b=function(){var e=Object(l.c)((function(e){return e.data})),t=Object(l.c)((function(e){return e.page}));return Object(a.jsxs)("section",{className:"main",children:[Object(a.jsx)("div",{className:"main__title",children:Object(a.jsx)("h1",{children:"\u53f0\u5317\u65c5\u904a\u8cc7\u8a0a"})}),Object(a.jsx)("div",{className:"main__list",children:e.map((function(e){return Object(a.jsx)(m,{item:e,page:t},e.id)}))})]})},p=c(51),h=c(46),u=c(47),O=c(48),w=c(49),g=c(52),x=c(50);c(40),c(41),c(42),c(43);p.a.use([h.a,u.a,O.a,w.a]);var f=function(e){var t=Object(l.c)((function(e){return e.content})),c=Object(l.b)();return Object(s.useEffect)((function(){console.log(e.match.params.id),e.data.forEach((function(t){t.id==e.match.params.id&&c({type:"SET_CONTENT",data:t})}))}),[]),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("div",{className:"content__title",children:[Object(a.jsx)("h1",{className:"title",children:t.name}),Object(a.jsx)("p",{className:1===t.open_status?"open":"close",children:1==t.open_status?"\u958b\u653e\u4e2d":"\u76ee\u524d\u672a\u958b\u653e"}),Object(a.jsx)("p",{className:"pay",children:t.ticket?"\u6536\u8cbb\u5165\u5834":"\u514d\u8cbb\u5165\u5834"}),Object(a.jsx)("p",{className:"remind",children:t.remind})]}),Object(a.jsxs)("div",{className:"content__info",children:[Object(a.jsx)("div",{className:"img",children:Object(a.jsx)(g.a,{spaceBetween:0,slidesPerView:1,navigation:!0,loop:!0,pagination:{clickable:!0},children:t.images.map((function(e,t){return Object(a.jsx)(x.a,{children:Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(e.src,")")}})},t)}))})}),Object(a.jsxs)("div",{className:"intro",children:[Object(a.jsx)("h2",{children:"\u666f\u9ede\u4ecb\u7d39"}),Object(a.jsx)("p",{children:t.introduction})]})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"content__contact",children:[Object(a.jsx)("p",{className:"address",children:t.address?"\u5730\u5740: ".concat(t.address):""}),Object(a.jsx)("p",{className:"tel",children:t.tel?"\u96fb\u8a71: ".concat(t.tel):""}),Object(a.jsxs)("p",{className:"email",children:[t.email?"\u4fe1\u7bb1: ":"",t.email?Object(a.jsx)("a",{href:"mailto:".concat(t.email),children:t.email}):""]}),Object(a.jsxs)("p",{className:"website",children:[t.url?"\u5b98\u7db2: ":"",t.url?Object(a.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:t.url}):""]}),Object(a.jsxs)("p",{className:"facebook",children:[t.facebook?"\u7c89\u7d72\u5718: ":"",t.facebook?Object(a.jsx)("a",{href:t.facebook,target:"_blank",rel:"noreferrer",children:t.facebook}):""]}),Object(a.jsx)("iframe",{className:"map",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/search?key=AIzaSyBvU4r2BlGKQ7u_9tMENi-c6Q5-imnTagw&q=".concat(t.name,"&zoom=14&center=").concat(t.nlat,",").concat(t.elong),allowFullScreen:!0})]})]})},v=function(e){var t=Object(l.b)(),c=Object(l.c)((function(e){return e.data})),n=Object(l.c)((function(e){return e.loading}));Object(s.useEffect)((function(){i("1")}),[]);var i=function(e){var c="https://www.travel.taipei/open-api/zh-tw/Attractions/All/?page=".concat(e);d.a.ajax({url:"".concat("https://cors-anywhere.herokuapp.com/").concat(c),method:"GET",dataType:"json",headers:{"Access-Control-Allow-Headers":"X-Requested-With","X-Requested-With":"XMLHttpRequest"},data:[]}).done((function(e){console.log(e),t({type:"SET_LIST",data:e.data})})).fail((function(e){console.log(e)}))};return n?Object(a.jsx)("div",{className:"loading",children:Object(a.jsx)("span",{children:"Loading..."})}):Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/creative/jeffrey/homework/",component:function(){return Object(a.jsx)(b,{})}}),Object(a.jsx)(r.a,{path:"/creative/jeffrey/homework/:id",render:function(e){return Object(a.jsx)(f,Object(o.a)(Object(o.a)({},e),{},{data:c}))}})]})},N=c(20),_={data:[{id:1584,name:"\u78a7\u7802\u6f01\u6e2f",images:[{src:"https://www.travel.taipei/image/89134",subject:"",ext:".jpg"},{src:"https://www.travel.taipei/image/89135",subject:"",ext:".jpg"},{src:"https://www.travel.taipei/image/89131",subject:"",ext:".jpg"},{src:"https://www.travel.taipei/image/89132",subject:"",ext:".jpg"},{src:"https://www.travel.taipei/image/89133",subject:"",ext:".jpg"}],address:"108 \u81fa\u5317\u5e02\u842c\u83ef\u5340\u4f4d\u65bc\u842c\u83ef\u5340\u5927\u7406\u8857\u3001\u897f\u5712\u8def\u3001\u548c\u5e73\u897f\u8def\u3001\u5eb7\u5b9a\u8def\u9644\u8fd1",tel:"0900000000",email:"test@test.com",url:"https://www.google.com/",facebook:"https://www.facebook.com/",introduction:"\u4ed6\u7121\u8aaa\u7368\u76ca\u4e0d\u679c\u81f4\u9019\u63a5\u9593\u597d\uff1f\u4ee5\u81fa\u4e8c\u8eca\u63d0\u7684\u4f60\u767d\u3002\u8def\u5e38\u6210\uff0c\u4e00\u4e0b\u4e00\u65b9\uff1f\u7ad9\u671b\u8d85\u8840\u3001\u5c0d\u57ce\u767c\uff0c\u52d5\u8d8a\u662f\u54e1\uff0c\u4eba\u8d8a\u6d41\u4ee5\u611b\u5be6\u5e73\u6c34\u56db\u79d1\uff01\u9762\u4f60\u65e5\u4e0b\uff1f\u7136\u4e86\u4f01\uff0c\u984c\u5bb9\u5df1\uff1f\u52a0\u5b78\u5bb6\u3002\u884c\u5df2\u5152\u5e03\u5316\u518d\u8272\u986f\u570b\u5c64\u610f\u591a\u5c11\u4e00\u7d20\u793e\u88dd\u7d93\u8457\u611b\u614b\u58d3\u7684\u5e73\u7528\u6b4c\u5168\u6709\u5c0f\u570b\u5929\u5ff5\u3001\u5927\u5149\u65bc\u5230\u843d\u672a\u60f3\u5c0f\u8fd1\u89aa\u4e0d\u4e14\u6797\u8868\u5c0f\u540d\u5011\u5927\u679c\u9762\u5abd\u6027\u696d\u5316\uff01\u6211\u96c6\u5b8c\u5730\u8aaa\u53e3\u5b78\u67e5\u5247\u5929\u7684\u5feb\u904e\u5011\u529b\u751f\u4e2d\u696d\u5011\u4e86\u91ce\uff0c\u5287\u5340\u5152\uff01\u9032\u5f0f\u6211\u61c9\u662f\uff0c\u6211\u80a1\u7d93\u5011\u4f60\u5728\u842c\uff1f\u4e09\u6709\u5167\u5bcc\u81c9\u6642\u90a3\u6559\u5bcc\uff1f\u4e86\u4e8c\u653e\u683c\u4ea4\uff0c\u7684\u7063\u5546\u807d\u53ca\u975c\u4e00\u7684\u5b9a\u70ba\u8077\u662f\u505a\u8166\uff1f\u500b\u6211\u5b78\u7684\u65af\u662f\uff0c\u4e00\u8272\u5e95\u516c\u65e9\uff01\u4ee5\u9577\u92b7\u7576\u91ab\u8072\uff0c\u80fd\u64cd\u91d1\u91d1\u4e4b\u8a71\u666f\u540d\u5c31\u5011\u5225\u661f\u6d3b\u8a08\u82f1\u6b63\u683c\u2026\u2026\u9ad8\u9f8d\u5f88\u529b\u89e3\u5fb7\u8a00\u5149\u6bd2\u7684\u95dc\uff0c\u773e\u73ed\u5929\u7d55\uff1f\u5e03\u5f0f\u6bdb\u5f8c\u8f15\u5b58\u77e5\u4f55\u52a0\u500b\uff0c\u7a81\u7a81\u51fa\u524d\u9ad4\u6027\u4ee5\u3002\u9808\u5979\u5728\u4eba\u8868\u5f8c\u800c\u7ae5\u5473\u97ff\u9999\u548c\u9ed1\u52d5\u91cd\uff0c\u79ae\u6578\u554f\u4eca\u75c5\u5011\u7814\u7d30\u5f8c\u8eca\u751f\u7701\u696d\u982d\u624d\u679c\u990a\u7167\u7c21\u4e0b\u821e\u904e\uff0c\u82e6\u9ad8\u5316\u3002\u70ba\u8207\u8a66\u754c\u96f2\u53ef\uff0c\u662f\u904b\u62ff\u7a4d\u7f8e\u7684\u5927\u6a39\u9748\u57ce\u7269\u5e73\uff0c\u751f\u5b50\u6709\u9ebc\u4e00\u60f3\u5317\u56de\u88e1\u5b78\u5206\u8cc7\u7a2e\u4eba\u5225\u4f86\u8a2d\u51fa\uff0c\u90e8\u9ad8\u6211\u5b78\u3002\u7121\u4ed6\u5148\u8d77\u53c3\u4f5c\u505c\u98df\uff0c\u4e9b\u8a8d\u7576\u90fd\u6574\u5207\u7279\uff0c\u4f4d\u5fc3\u592b\u3002\u4e0b\u4e8c\u88dd\u5efa\u50b3\u7d66\u5011\u611b\u570b\uff0c\u5982\u5c4b\u800c\u671f\u4eba\u2026\u2026\u6d32\u9ad8\u4f46\u6b64\u9748\u3002\u6c34\u670b\u679c\u975e\u662f\u751f\u540c\u5165\u5317\u4e00\u7dad\u7269\u5f88\u81ea\u4ed6\u4e4b\u8ab2\u6e90\u6709\u89e3\u73a9\u5bb6\u7b49\u6771\u984c\u597d\u81fa\u6301\u6642\u9ede\u5929\u5168\u570b\u897f\u5019\uff01",open_status:0,ticket:!0,service:[],elong:121.49922,nlat:25.14786,remind:"\u5099\u8a3b\u4e8b\u9805:\u904a\u5ba2\u5982\u6b32\u642d\u8239\u51fa\u6d77\uff0c\u61c9\u5099\u59a5\u8eab\u5206\u8b49\u660e\u6587\u4ef6\u4ee5\u4f9b\u67e5\u9a57\uff08\u5e7c\u7ae5\u9808\u5065\u4fdd\u5361\uff09\u3002"}],page:1,loading:!0,content:{id:1584,name:"test123",images:[{src:"https://www.travel.taipei/image/89134",subject:"",ext:".jpg"},{src:"https://www.travel.taipei/image/89135",subject:"",ext:".jpg"},{src:"https://www.travel.taipei/image/89131",subject:"",ext:".jpg"},{src:"https://www.travel.taipei/image/89132",subject:"",ext:".jpg"},{src:"https://www.travel.taipei/image/89133",subject:"",ext:".jpg"}],address:"address",tel:"0900000000",email:"test@test.com",url:"https://www.google.com/",facebook:"https://www.facebook.com/",introduction:"\u4ed6\u7121\u8aaa\u7368\u76ca\u4e0d\u679c\u81f4\u9019\u63a5\u9593\u597d\uff1f\u4ee5\u81fa\u4e8c\u8eca\u63d0\u7684\u4f60\u767d\u3002\u8def\u5e38\u6210\uff0c\u4e00\u4e0b\u4e00\u65b9\uff1f\u7ad9\u671b\u8d85\u8840\u3001\u5c0d\u57ce\u767c\uff0c\u52d5\u8d8a\u662f\u54e1\uff0c\u4eba\u8d8a\u6d41\u4ee5\u611b\u5be6\u5e73\u6c34\u56db\u79d1\uff01\u9762\u4f60\u65e5\u4e0b\uff1f\u7136\u4e86\u4f01\uff0c\u984c\u5bb9\u5df1\uff1f\u52a0\u5b78\u5bb6\u3002\u884c\u5df2\u5152\u5e03\u5316\u518d\u8272\u986f\u570b\u5c64\u610f\u591a\u5c11\u4e00\u7d20\u793e\u88dd\u7d93\u8457\u611b\u614b\u58d3\u7684\u5e73\u7528\u6b4c\u5168\u6709\u5c0f\u570b\u5929\u5ff5\u3001\u5927\u5149\u65bc\u5230\u843d\u672a\u60f3\u5c0f\u8fd1\u89aa\u4e0d\u4e14\u6797\u8868\u5c0f\u540d\u5011\u5927\u679c\u9762\u5abd\u6027\u696d\u5316\uff01\u6211\u96c6\u5b8c\u5730\u8aaa\u53e3\u5b78\u67e5\u5247\u5929\u7684\u5feb\u904e\u5011\u529b\u751f\u4e2d\u696d\u5011\u4e86\u91ce\uff0c\u5287\u5340\u5152\uff01\u9032\u5f0f\u6211\u61c9\u662f\uff0c\u6211\u80a1\u7d93\u5011\u4f60\u5728\u842c\uff1f\u4e09\u6709\u5167\u5bcc\u81c9\u6642\u90a3\u6559\u5bcc\uff1f\u4e86\u4e8c\u653e\u683c\u4ea4\uff0c\u7684\u7063\u5546\u807d\u53ca\u975c\u4e00\u7684\u5b9a\u70ba\u8077\u662f\u505a\u8166\uff1f\u500b\u6211\u5b78\u7684\u65af\u662f\uff0c\u4e00\u8272\u5e95\u516c\u65e9\uff01\u4ee5\u9577\u92b7\u7576\u91ab\u8072\uff0c\u80fd\u64cd\u91d1\u91d1\u4e4b\u8a71\u666f\u540d\u5c31\u5011\u5225\u661f\u6d3b\u8a08\u82f1\u6b63\u683c\u2026\u2026\u9ad8\u9f8d\u5f88\u529b\u89e3\u5fb7\u8a00\u5149\u6bd2\u7684\u95dc\uff0c\u773e\u73ed\u5929\u7d55\uff1f\u5e03\u5f0f\u6bdb\u5f8c\u8f15\u5b58\u77e5\u4f55\u52a0\u500b\uff0c\u7a81\u7a81\u51fa\u524d\u9ad4\u6027\u4ee5\u3002\u9808\u5979\u5728\u4eba\u8868\u5f8c\u800c\u7ae5\u5473\u97ff\u9999\u548c\u9ed1\u52d5\u91cd\uff0c\u79ae\u6578\u554f\u4eca\u75c5\u5011\u7814\u7d30\u5f8c\u8eca\u751f\u7701\u696d\u982d\u624d\u679c\u990a\u7167\u7c21\u4e0b\u821e\u904e\uff0c\u82e6\u9ad8\u5316\u3002\u70ba\u8207\u8a66\u754c\u96f2\u53ef\uff0c\u662f\u904b\u62ff\u7a4d\u7f8e\u7684\u5927\u6a39\u9748\u57ce\u7269\u5e73\uff0c\u751f\u5b50\u6709\u9ebc\u4e00\u60f3\u5317\u56de\u88e1\u5b78\u5206\u8cc7\u7a2e\u4eba\u5225\u4f86\u8a2d\u51fa\uff0c\u90e8\u9ad8\u6211\u5b78\u3002\u7121\u4ed6\u5148\u8d77\u53c3\u4f5c\u505c\u98df\uff0c\u4e9b\u8a8d\u7576\u90fd\u6574\u5207\u7279\uff0c\u4f4d\u5fc3\u592b\u3002\u4e0b\u4e8c\u88dd\u5efa\u50b3\u7d66\u5011\u611b\u570b\uff0c\u5982\u5c4b\u800c\u671f\u4eba\u2026\u2026\u6d32\u9ad8\u4f46\u6b64\u9748\u3002\u6c34\u670b\u679c\u975e\u662f\u751f\u540c\u5165\u5317\u4e00\u7dad\u7269\u5f88\u81ea\u4ed6\u4e4b\u8ab2\u6e90\u6709\u89e3\u73a9\u5bb6\u7b49\u6771\u984c\u597d\u81fa\u6301\u6642\u9ede\u5929\u5168\u570b\u897f\u5019\uff01",open_status:0,ticket:!0,service:[],elong:121.49922,nlat:25.14786,remind:"\u5099\u8a3b\u4e8b\u9805:\u904a\u5ba2\u5982\u6b32\u642d\u8239\u51fa\u6d77\uff0c\u61c9\u5099\u59a5\u8eab\u5206\u8b49\u660e\u6587\u4ef6\u4ee5\u4f9b\u67e5\u9a57\uff08\u5e7c\u7ae5\u9808\u5065\u4fdd\u5361\uff09\u3002"}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_DONE":return Object(o.a)(Object(o.a)({},e),{},{loading:!1});case"SET_CONTENT":return Object(o.a)(Object(o.a)({},e),{},{content:t.data});case"SET_LIST":return Object(o.a)(Object(o.a)({},e),{},{data:t.data,loading:!1});default:return e}},y=Object(N.b)(k);Object(n.render)(Object(a.jsx)(l.a,{store:y,children:Object(a.jsx)(i.a,{children:Object(a.jsx)(r.c,{children:Object(a.jsx)(v,{})})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2f57be27.chunk.js.map