(this.webpackJsonpstar_wars_films=this.webpackJsonpstar_wars_films||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),r=s(18),i=s.n(r),j=s(9),d=s.n(j),l=s(12),o=s(8),b=(s(26),s(2)),h=(s(27),s(28),s(7));var u=function(e){return Object(c.jsxs)("div",{className:"search-box",children:[Object(c.jsx)("input",{type:"text",className:"search-txt",name:"",placeholder:"Search",onChange:e.onHandlerChange}),Object(c.jsx)(h.b,{to:"#",className:"search-btn",children:Object(c.jsx)("i",{className:"fas fa-search"})})]})},O=s.p+"static/media/star_wars_logo.b516d009.png",x=function(e){return Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)("div",{className:"nav-logo",children:Object(c.jsx)(h.b,{to:"/star_wars_films/",children:Object(c.jsx)("img",{src:O,alt:"star wars logo"})})}),Object(c.jsx)("div",{className:"nav-search",children:Object(c.jsx)(u,{onHandlerChange:e.onHandlerChange})})]})},p=(s(34),function(){return Object(c.jsx)("div",{className:"containerLoader",children:Object(c.jsx)("div",{className:"preloader",children:Object(c.jsx)("div",{className:"loader"})})})}),f=(s(35),function(e){var t=e.data.sort((function(e,t){return e.title.localeCompare(t.title)}));return Object(c.jsx)("div",{className:"films-cards",children:t.map((function(e,t){return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-title",children:e.title}),Object(c.jsx)("div",{className:"card-description",children:e.opening_crawl}),Object(c.jsxs)("div",{className:"card-creator",children:[Object(c.jsx)("div",{className:"creator",children:e.director}),Object(c.jsx)("div",{className:"release-data",children:e.release_date})]}),Object(c.jsx)(h.b,{to:"/star_wars_films/singleCard/".concat(e.episode_id),children:Object(c.jsx)("div",{className:"card-btn",children:"Show more"})})]},t)}))})}),v=(s(36),function(e){var t=e.data,s=Object(b.f)().episode_id,a=t.map((function(e){return{id:e.episode_id,planets:e.planets}})).find((function(e){return e.id===+s})).planets,r=t.map((function(e){return{id:e.episode_id,starships:e.starships}})).find((function(e){return e.id===+s})).starships,i=Object(n.useState)([]),j=Object(o.a)(i,2),h=j[0],u=j[1],O=Object(n.useState)([]),x=Object(o.a)(O,2),f=x[0],v=x[1],m=Object(n.useState)(!0),g=Object(o.a)(m,2),N=g[0],_=g[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(r.map((function(e){return fetch("".concat(e,"?format=json"),{}).then((function(e){return e.json()}))})));case 3:t=e.sent,v(t),_(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(a.map((function(e){return fetch("".concat(e,"?format=json"),{}).then((function(e){return e.json()}))})));case 3:t=e.sent,u(t),_(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e(),t(),console.log("starships",f),console.log("planets",h)}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"single-card",id:s,children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"cards-planets-header",children:Object(c.jsx)("h1",{children:"Planets:"})}),N?Object(c.jsx)(p,{}):Object(c.jsx)("div",{className:"cards-planets",children:h.map((function(e,t){return Object(c.jsxs)("div",{className:"card-planets",children:[Object(c.jsxs)("div",{children:["Name: ",Object(c.jsx)("span",{children:e.name})]}),Object(c.jsxs)("div",{children:["Climate: ",Object(c.jsx)("span",{children:e.climate})]}),Object(c.jsxs)("div",{children:["Diameter: ",Object(c.jsx)("span",{children:e.diameter})]}),Object(c.jsxs)("div",{children:["Gravity: ",Object(c.jsx)("span",{children:e.gravity})]}),Object(c.jsxs)("div",{children:["Orbital period: ",Object(c.jsx)("span",{children:e.orbital_period})]}),Object(c.jsxs)("div",{children:["Population: ",Object(c.jsx)("span",{children:e.population})]}),Object(c.jsxs)("div",{children:["Rotation period: ",Object(c.jsx)("span",{children:e.rotation_period})]}),Object(c.jsxs)("div",{children:["Surface water: ",Object(c.jsx)("span",{children:e.surface_water})]}),Object(c.jsxs)("div",{children:["Terrain: ",Object(c.jsx)("span",{children:e.terrain})]})]},t)}))}),Object(c.jsx)("div",{className:"cards-planets-header",children:Object(c.jsx)("h1",{children:"Starships:"})}),N?Object(c.jsx)(p,{}):Object(c.jsx)("div",{className:"cards-planets",children:f.map((function(e,t){return Object(c.jsxs)("div",{className:"card-starships",children:[Object(c.jsxs)("div",{children:["Manufacturer: ",Object(c.jsx)("span",{children:e.manufacturer})]}),Object(c.jsxs)("div",{children:["Model: ",Object(c.jsx)("span",{children:e.model})]}),Object(c.jsxs)("div",{children:["Name: ",Object(c.jsx)("span",{children:e.name})]}),Object(c.jsxs)("div",{children:["MGLT: ",Object(c.jsx)("span",{children:e.MGLT})]}),Object(c.jsxs)("div",{children:["Cargo Capacity: ",Object(c.jsx)("span",{children:e.cargo_capacity})]}),Object(c.jsxs)("div",{children:["Consumables: ",Object(c.jsx)("span",{children:e.consumables})]}),Object(c.jsxs)("div",{children:["Cost in credits: ",Object(c.jsx)("span",{children:e.cost_in_credits})]}),Object(c.jsxs)("div",{children:["Crew: ",Object(c.jsx)("span",{children:e.crew})]}),Object(c.jsxs)("div",{children:["Created: ",Object(c.jsx)("span",{children:e.created.slice(0,10)})]}),Object(c.jsxs)("div",{children:["Edited: ",Object(c.jsx)("span",{children:e.edited.slice(0,10)})]}),Object(c.jsxs)("div",{children:["Length: ",Object(c.jsx)("span",{children:e.length})]}),Object(c.jsxs)("div",{children:["Max atmosphering speed: ",Object(c.jsx)("span",{children:e.max_atmosphering_speed})]}),Object(c.jsxs)("div",{children:["Passengers: ",Object(c.jsx)("span",{children:e.passengers})]}),Object(c.jsxs)("div",{children:["Starship class",Object(c.jsx)("span",{children:e.starship_class})]})]},t)}))})]})})})});var m=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)(!0),i=Object(o.a)(r,2),j=i[0],h=i[1],u=Object(n.useState)(""),O=Object(o.a)(u,2),m=O[0],g=O[1],N=Object(n.useState)(),_=Object(o.a)(N,2),w=_[0],C=_[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var t,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/films/?format=json",{});case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,a(s.results),h(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){C(s.filter((function(e){return e.title.toLowerCase().includes(m.toLowerCase())})))}),[m,s]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"nav-container",children:Object(c.jsx)(x,{onHandlerChange:function(e){e.preventDefault(),g(e.target.value)}})}),j?Object(c.jsx)(p,{}):Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/star_wars_films/",render:function(){return Object(c.jsx)(f,{data:w})}}),Object(c.jsx)(b.a,{exact:!0,path:"/star_wars_films/singleCard/:episode_id",render:function(){return Object(c.jsx)(v,{data:s})}}),Object(c.jsx)(b.a,{render:function(){return Object(c.jsx)("h1",{children:"404: page not found"})}})]})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(h.a,{children:Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})})}),document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.8c9001d9.chunk.js.map