(this["webpackJsonpevent-finder"]=this["webpackJsonpevent-finder"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(21),c=n.n(o),i=(n(28),n(2)),s=n(6),u=n(4),l=n(3),d=(n(29),n(30),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Alert",children:Object(d.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:"#BA5550",fontWeight:"bold"}},a}return n}(h),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="#31598F",a}return n}(h),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={infoText:"",query:"",showSuggestions:void 0,suggestions:[]},e.handleInputChange=function(t){var n=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));0===n.length?e.setState({infoText:"No matching cities were found. Please try again.",query:t,suggestions:n}):e.setState({infoText:"",query:t,suggestions:n})},e.handleItemClick=function(t){e.setState({infoText:"",query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.showSuggestions,r=t.suggestions;return Object(d.jsxs)("div",{className:"City-Search",children:[Object(d.jsx)("label",{htmlFor:"city",children:"Choose your city"}),Object(d.jsx)("input",{id:"city",className:"city",type:"text",value:n,onChange:function(t){return e.handleInputChange(t.target.value)},onFocus:function(){return e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions ".concat(a?"show":"hide"),children:[r.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClick(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClick("all")},children:Object(d.jsx)("b",{children:"See all cities"})},"all")]}),Object(d.jsx)(p,{text:this.state.infoText})]})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showState:!1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.showDetails,a=new Date(t.start.dateTime),r=a.getHours(),o=a.getMinutes(),c="".concat(r,":").concat(0===o?"00":o),i=new Date(t.end.dateTime),s=i.getHours(),u=i.getMinutes(),l="".concat(s,":").concat(0===u?"00":u);return Object(d.jsxs)("div",{className:"Event",children:[Object(d.jsx)("h3",{children:t.summary}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Date:"})," ",new Date(t.start.dateTime).toDateString()]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Time:"})," ",c," - ",l]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Location: "}),Object(d.jsx)("span",{className:"location",children:t.location})]}),Object(d.jsxs)("div",{className:"details ".concat(n?"show":"hide"),children:[Object(d.jsx)("h4",{children:"About event:"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:t.htmlLink,rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"})}),Object(d.jsx)("p",{children:t.description})]}),Object(d.jsx)("button",{className:"toggle-details",onClick:function(){return e.setState({showDetails:!n})},children:"Details"})]})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={infoText:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({infoText:navigator.onLine?"":"The list loaded may not be up to date. \n                Please go online to view the most current list."})}},{key:"render",value:function(){var e=this.props.events;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{className:"text-center",text:this.state.infoText}),Object(d.jsx)("ul",{className:"Event-List",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(m,{event:e})},e.id)}))})]})}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={infoText:"",numEvents:20},e.handleInputChange=function(t){t<0||t>50?e.setState({infoText:"Please enter a number between 0 and 50.",numEvents:t}):e.setState({infoText:"",numEvents:t}),e.props.updateEvents(null,t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"Number-Of-Events",children:[Object(d.jsx)("label",{htmlFor:"number",children:"Select number of events"}),Object(d.jsx)("input",{id:"number",className:"number",type:"number",value:this.state.numEvents,max:this.props.maxNumEvents,onChange:function(t){return e.handleInputChange(t.target.value)}}),Object(d.jsx)(f,{text:this.state.infoText})]})}}]),n}(a.Component),j=n(7),w=n.n(j),x=n(8),O=n(23),y=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),k=n(12),S=n.n(k),T=n(9),C=n.n(T),E=function(e){var t=e.map((function(e){return e.location}));return Object(O.a)(new Set(t))},N=function(){var e=Object(x.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(x.a)(w.a.mark((function e(){var t,n,a,r,o,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,S.a.get("https://cx7nza2e8i.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&W(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(x.a)(w.a.mark((function e(t){var n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://cx7nza2e8i.execute-api.us-west-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(x.a)(w.a.mark((function e(){var t,n,a,r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",y);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),C.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,Z();case 10:if(!(n=e.sent)){e.next=20;break}return I(),a="https://cx7nza2e8i.execute-api.us-west-2.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,S.a.get(a);case 16:return(r=e.sent).data&&(o=E(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),C.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}},D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentLocation:"all",events:[],locations:[]},e.updateEvents=function(t,n){t?e.setState({currentLocation:t}):t||(t=e.state.currentLocation),n||(n=20),A().then((function(a){var r;r="all"===t?a:a.filter((function(e){return e.location===t})),e.setState({events:r.slice(0,n),maxNumEvents:r.length})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,A().then((function(t){e.mounted&&e.setState({events:t,locations:E(t),maxNumEvents:20})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.locations,a=this.updateEvents;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(v,{locations:n,updateEvents:a}),Object(d.jsx)(g,{maxNumEvents:this.state.maxNumEvents,updateEvents:a}),Object(d.jsx)(b,{events:t})]})}}]),n}(a.Component),L=n(22),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};n(50).config(),L.config("6341650b41194eda914366c0cda389a4").install(),c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/event-finder",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/event-finder","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(t,e)}))}}(),q()}},[[54,1,2]]]);
//# sourceMappingURL=main.14af3bd1.chunk.js.map