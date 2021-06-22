(this["webpackJsonpevent-finder"]=this["webpackJsonpevent-finder"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),c=n.n(o),s=(n(26),n(3)),i=n(4),u=n(6),l=n(5),d=(n(27),n(28),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",showSuggestions:void 0,suggestions:[]},e.handleInputChange=function(t){var n=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));e.setState({query:t,suggestions:n})},e.handleItemClick=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.showSuggestions,r=t.suggestions;return Object(d.jsxs)("div",{className:"City-Search",children:[Object(d.jsx)("label",{htmlFor:"city",children:"Choose your city"}),Object(d.jsx)("input",{id:"city",className:"city",type:"text",value:n,onChange:function(t){return e.handleInputChange(t.target.value)},onFocus:function(){return e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions ".concat(a?"show":"hide"),children:[r.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClick(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClick("all")},children:Object(d.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showState:!1},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.showDetails,a=new Date(t.start.dateTime),r=a.getHours(),o=a.getMinutes(),c="".concat(r,":").concat(0===o?"00":o),s=new Date(t.end.dateTime),i=s.getHours(),u=s.getMinutes(),l="".concat(i,":").concat(0===u?"00":u);return Object(d.jsxs)("div",{className:"Event",children:[Object(d.jsx)("h3",{children:t.summary}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Date:"})," ",new Date(t.start.dateTime).toDateString()]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Time:"})," ",c," - ",l]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Location:"})," ",t.location]}),Object(d.jsxs)("div",{className:"details ".concat(n?"show":"hide"),children:[Object(d.jsx)("h4",{children:"About event:"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:t.htmlLink,rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"})}),Object(d.jsx)("p",{children:t.description})]}),Object(d.jsx)("button",{className:"toggle-details",onClick:function(){return e.setState({showDetails:!n})},children:"Details"})]})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"Event-List",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numEvents:20},e.handleInputChange=function(t){e.setState({numEvents:t}),e.props.updateEvents(null,t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"Number-Of-Events",children:[Object(d.jsx)("label",{htmlFor:"number",children:"Select number of events"}),Object(d.jsx)("input",{id:"number",className:"number",type:"number",value:this.state.numEvents,max:this.props.maxNumEvents,onChange:function(t){return e.handleInputChange(t.target.value)}})]})}}]),n}(a.Component),v=n(7),b=n.n(v),j=n(8),g=n(21),w=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),x=n(11),y=n.n(x),O=n(9),k=n.n(O),S=function(e){var t=e.map((function(e){return e.location}));return Object(g.a)(new Set(t))},T=function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,T(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,y.a.get("https://cx7nza2e8i.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&E(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://cx7nza2e8i.execute-api.us-west-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return k.a.done(),e.abrupt("return",w);case 4:return e.next=6,C();case 6:if(!(t=e.sent)){e.next=16;break}return N(),n="https://cx7nza2e8i.execute-api.us-west-2.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,y.a.get(n);case 12:return(a=e.sent).data&&(r=S(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),k.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}},I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentLocation:"all",events:[],locations:[]},e.updateEvents=function(t,n){t?e.setState({currentLocation:t}):t||(t=e.state.currentLocation),n||(n=20),Z().then((function(a){var r;r="all"===t?a:a.filter((function(e){return e.location===t})),e.setState({events:r.slice(0,n),maxNumEvents:r.length})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Z().then((function(t){e.mounted&&e.setState({events:t,locations:S(t),maxNumEvents:20})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.locations,a=this.updateEvents;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{locations:n,updateEvents:a}),Object(d.jsx)(f,{maxNumEvents:this.state.maxNumEvents,updateEvents:a}),Object(d.jsx)(m,{events:t})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),D()}},[[49,1,2]]]);
//# sourceMappingURL=main.27c7de0e.chunk.js.map