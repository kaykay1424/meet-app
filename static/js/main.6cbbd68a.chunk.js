(this["webpackJsonpevent-finder"]=this["webpackJsonpevent-finder"]||[]).push([[0],{203:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},227:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},363:function(e,t,n){},367:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(69),s=n.n(c),o=(n(203),n(20)),i=n.n(o),l=n(48),u=n(34),h=n(45),d=n(35),v=n(39),j=n(31),f=n(29),m=n(368),b=n(372),p=n(373),g=n(188),x=n(189),O=n(82),w=n(193),y=(n(208),n(209),n(192)),S=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),k=n(122),N=n.n(k),E=n(79),T=n.n(E),C=function(e){var t=e.split(":"),n=t[0],a=t[1];return n<12?0===n?"12:"+a+"am":e+"am":(n-12===0?12:n-12)+":"+a+"pm"},A=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},W=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,N.a.get("https://cx7nza2e8i.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return c=e.sent,s=c.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&I(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://cx7nza2e8i.execute-api.us-west-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return T.a.done(),e.abrupt("return",S);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),T.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,D();case 10:if(!(n=e.sent)){e.next=20;break}return L(),a="https://cx7nza2e8i.execute-api.us-west-2.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,N.a.get(a);case 16:return(r=e.sent).data&&(c=A(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(c))),T.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}},_=(n(227),n(2)),F=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getIcon=function(){return Object(_.jsx)(j.a,{icon:a.icon})},a.getStyle=function(){return{color:a.color,fontWeight:"bold"}},a.color=null,a.icon=f.e,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"Alert",children:Object(_.jsxs)("p",{style:this.getStyle(),children:[""!==this.props.text?this.getIcon():null," ",this.props.text]})})}}]),n}(a.Component),R=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#BA5550",a}return n}(F),U=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#31598F",a.icon=f.f,a}return n}(F),B=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={infoText:"",query:"",showSuggestions:void 0,suggestions:[]},e.handleInputChange=function(t){if(""!==t){var n=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));0===n.length?e.setState({infoText:"No matching cities were found. Please try again.",query:t,suggestions:n}):e.setState({infoText:"",query:t,suggestions:n})}else e.setState({suggestions:[],query:t})},e.handleItemClick=function(t){e.setState({infoText:"",query:"all"===t?"All cities":t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.showSuggestions,r=t.suggestions;return Object(_.jsxs)("div",{className:"City-Search",children:[Object(_.jsx)("label",{className:"label",htmlFor:"city",children:"Search for a city"}),Object(_.jsx)("input",{id:"city",className:"city",type:"text",value:n,onChange:function(t){return e.handleInputChange(t.target.value)},onFocus:function(){return e.setState({showSuggestions:!0})}}),Object(_.jsxs)("ul",{className:"suggestions ".concat(a?"show":"hide"),children:[r.map((function(t){return Object(_.jsx)("li",{onClick:function(){return e.handleItemClick(t)},children:t},t)})),Object(_.jsx)("li",{onClick:function(){return e.handleItemClick("all")},children:Object(_.jsx)("b",{children:"See all cities"})},"all")]}),Object(_.jsx)(U,{text:this.state.infoText})]})}}]),n}(a.Component),J=n(17),M=(n(229),function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showState:!1},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.showDetails,a=new Date(t.start.dateTime),r=a.getHours(),c=a.getMinutes(),s="".concat(r,":").concat(0===c?"00":c),o=new Date(t.end.dateTime),i=o.getHours(),l=o.getMinutes(),u="".concat(i,":").concat(0===l?"00":l);return Object(_.jsxs)("div",{className:"Event",children:[Object(_.jsx)("h3",{children:t.summary}),Object(_.jsxs)("p",{children:[Object(_.jsx)(j.a,{icon:f.d}),new Date(t.start.dateTime).toDateString()," | ",C(s)," - ",C(u)]}),Object(_.jsxs)("p",{children:[Object(_.jsx)(j.a,{icon:f.g})," ",t.location]}),Object(_.jsxs)("div",{className:"details ".concat(n?"show":"hide"),children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(j.a,{icon:f.h}),Object(_.jsx)("p",{children:t.description})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)(j.a,{icon:f.a}),Object(_.jsx)("p",{children:Object(_.jsx)("a",{href:t.htmlLink,rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"})})]})]}),Object(_.jsxs)("button",{className:"toggle-details",onClick:function(){return e.setState({showDetails:!n})},children:["Details ",this.state.showDetails?Object(_.jsx)(j.a,{icon:f.c}):Object(_.jsx)(j.a,{icon:f.b})]})]})}}]),n}(a.Component)),q=(n(230),function(e){var t=e.events,n=Object(a.useState)(""),r=Object(J.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){s(navigator.onLine?"":"The list loaded may not be up to date. \n        Please go online to view the most current list.")}),[t]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(U,{text:c}),Object(_.jsx)("div",{className:"event-list-container",children:Object(_.jsx)("ul",{className:"Event-List",children:t.map((function(e,t){return Object(_.jsx)("li",{children:Object(_.jsx)(M,{event:e})},t)}))})})]})}),P=(n(231),function(e){var t=e.currentNumEvents,n=e.maxNumEvents,r=e.updateEvents,c=Object(a.useState)(""),s=Object(J.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(""),u=Object(J.a)(l,2),h=u[0],d=u[1],v=Object(a.useState)(""),j=Object(J.a)(v,2),f=j[0],m=j[1];Object(a.useEffect)((function(){d(t),m(n)}),[t,n]);return Object(_.jsxs)("div",{className:"Number-Of-Events",children:[Object(_.jsx)("label",{className:"label",htmlFor:"number",children:"Select number of events"}),Object(_.jsx)("input",{id:"number",className:"number",type:"number",value:h,max:f,min:"1",onChange:function(e){return function(e){if(e<1||e>f)return i("Please enter a number between 1 and ".concat(n,".")),void d(e);i(""),d(e),r(null,e)}(e.target.value)}}),Object(_.jsx)(R,{text:o})]})}),H=n(375),z=n(77),G=n(183),K=n(95),Y=n(96),V=function(e){var t=e.events;Object(a.useEffect)((function(){s(i())}),[t]);var n=Object(a.useState)([]),r=Object(J.a)(n,2),c=r[0],s=r[1],o=["#6A8CFA","#68B54C","#FA3824","#ED892B","#8B69FA"],i=function(){var e=[{name:"jQuery",value:0},{name:"JavaScript",value:0},{name:"React",value:0},{name:"Angular",value:0},{name:"Node",value:0}],n=0;return t.forEach((function(t){var a=t.summary;a=a.toLowerCase();for(var r=0;r<e.length;r++){var c=e[r].name,s=e[r].value,o=new RegExp(c.toLowerCase(),"g"),i=a.match(o);i&&(e[r].value=s+i.length,n+=i.length)}})),(e=e.filter((function(e){return 0!==e.value}))).forEach((function(e){var t=e.value/n*100;e.percentage=t.toFixed()+"%"})),e};return Object(_.jsxs)("div",{className:"chart-container",children:[Object(_.jsx)("h3",{className:"text-center",children:"Events by genre"}),Object(_.jsx)(m.a,{width:"100%",height:400,children:Object(_.jsxs)(H.a,{height:400,children:[Object(_.jsx)(z.a,{verticalAlign:"top",height:30}),Object(_.jsxs)(G.a,{data:c,labelLine:!1,outerRadius:"90%",dataKey:"value",children:[Object(_.jsx)(K.a,{dataKey:"percentage",position:"inside"}),c.map((function(e,t){return Object(_.jsx)(Y.a,{fill:o[t]},t)}))]})]})})]})};n(363);var X=function(e){var t=e.showWelcomeScreen,n=e.getAccessToken;return t?Object(_.jsxs)("div",{className:"WelcomeScreen",children:[Object(_.jsx)("h1",{children:"Welcome to the Event Finder app"}),Object(_.jsx)("h4",{children:"Sign in to see upcoming events around the world for developers."}),Object(_.jsx)("div",{className:"button_cont",children:Object(_.jsxs)("div",{className:"google-btn",children:[Object(_.jsx)("div",{className:"google-icon-wrapper",children:Object(_.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(_.jsx)("button",{onClick:function(){n()},rel:"nofollow noopener",className:"btn-text",children:Object(_.jsx)("b",{children:"Sign in with google"})})]})}),Object(_.jsx)("a",{href:"".concat("/event-finder","/privacy-policy.html"),rel:"nofollow noopener",children:"Privacy policy"})]}):null},Q=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={allEvents:[],currentLocation:"all",currentNumEvents:20,events:[],locations:[],maxNumEvents:20,selectedChart:"city",showWelcomeScreen:void 0,showUserInput:!0},e.getCitiesData=function(){var t=[],n={},a=e.state.events;for(var r in a.forEach((function(e){var t=e.location,a=0;n.hasOwnProperty(t)&&(a=n[t]),n[t]=a+1})),n)t.push({city:r.split(",")[0],number:n[r]});return t},e.updateEvents=function(){var t=Object(l.a)(i.a.mark((function t(n,a){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a||e.state.currentNumEvents,!n){t.next=14;break}if("all"!==n){t.next=8;break}return t.next=5,Z();case 5:t.t1=t.sent,t.next=11;break;case 8:return t.next=10,Z();case 10:t.t1=t.sent.filter((function(e){return e.location===n}));case 11:t.t0=t.t1,t.next=15;break;case 14:t.t0=e.state.allEvents;case 15:c=t.t0,n&&e.setState({allEvents:c}),e.setState({currentNumEvents:r>c.length?c.length:r,maxNumEvents:c.length}),c=c.slice(0,r),e.setState({events:c});case 20:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,c=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,W(t);case 4:n=!!e.sent.error,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&Z().then((function(e){c.mounted&&c.setState({allEvents:e,currentNumEvents:e.length,events:e,locations:A(e),maxNumEvents:e.length})}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this,t=this.state,n=t.events,a=t.locations,r=t.selectedChart,c=t.showWelcomeScreen,s=t.showUserInput,o=this.getCitiesData,i=this.updateEvents;return void 0===c?Object(_.jsx)("div",{className:"App"}):Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("div",{className:"sidebar",children:s?Object(_.jsxs)("div",{className:"user-input-container",children:[Object(_.jsx)("span",{className:"close",onClick:function(){return e.setState({showUserInput:!s})},children:"\xd7"}),Object(_.jsx)(B,{locations:a,updateEvents:i}),Object(_.jsx)(P,{currentNumEvents:this.state.currentNumEvents,maxNumEvents:this.state.maxNumEvents,updateEvents:i}),Object(_.jsx)("p",{className:"label",children:"View events chart by:"}),Object(_.jsx)("label",{htmlFor:"events-by-genre",children:"Genre"}),Object(_.jsx)("input",{id:"events-by-genre",type:"radio",name:"chart",value:"Genre",checked:"genre"===r,onChange:function(){return e.setState({selectedChart:"genre"})}}),Object(_.jsx)("label",{htmlFor:"events-by-city",children:"City"}),Object(_.jsx)("input",{id:"events-by-city",type:"radio",name:"chart",value:"City",checked:"city"===r,onChange:function(){return e.setState({selectedChart:"city"})}})]}):Object(_.jsx)("div",{className:"search-icon-container",children:Object(_.jsxs)("span",{className:"search-icon",onClick:function(){return e.setState({showUserInput:!s})},children:[Object(_.jsx)(j.a,{icon:f.i})," "]})})}),Object(_.jsxs)("div",{className:"content",children:[Object(_.jsx)(q,{events:n}),Object(_.jsx)("div",{className:"data-vis-wrapper",children:"genre"===r?Object(_.jsx)(V,{events:n}):Object(_.jsxs)("div",{className:"chart-container",children:[Object(_.jsx)("h3",{className:"text-center",children:"Events by city"}),Object(_.jsx)(m.a,{width:"100%",height:400,children:Object(_.jsxs)(b.a,{margin:{left:-30,top:5},children:[Object(_.jsx)(p.a,{}),Object(_.jsx)(g.a,{type:"category",dataKey:"city",name:"City"}),Object(_.jsx)(x.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"Number of events"}),Object(_.jsx)(O.a,{cursor:{strokeDasharray:"3 3"}}),Object(_.jsx)(w.a,{data:o(),fill:"#3c92e8"})]})})]})})]}),Object(_.jsx)(X,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){D()}})]})}}]),n}(a.Component),$=n(190),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,376)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(364).config(),$.config(Object({NODE_ENV:"production",PUBLIC_URL:"/event-finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ATATUS_KEY).install(),s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(Q,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/event-finder",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/event-finder","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):te(t,e)}))}}(),ne()}},[[367,1,2]]]);
//# sourceMappingURL=main.6cbbd68a.chunk.js.map