(this["webpackJsonpwobble-transition"]=this["webpackJsonpwobble-transition"]||[]).push([[0],{64:function(e,t,a){e.exports=a(83)},68:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(27),c=a.n(r),l=a(9);a(68);function i(){return o.a.createElement("header",null,o.a.createElement("div",{className:"header-inner"},o.a.createElement("div",{className:"logo"},"Oval"),o.a.createElement("nav",null,o.a.createElement("ul",{className:"right-nav"},o.a.createElement("li",{className:"btn"},o.a.createElement("a",{href:"/"},"Chat"))))))}var s=a(60),m=a(8),u=a(48),f=a.n(u),h={sections:4,pages:4,zoom:1,top:Object(n.createRef)()},d=Object(n.createContext)(0);function p(e){var t=e.children,a=e.offset,r=e.factor,c=Object(s.a)(e,["children","offset","factor"]),l=function(){var e=h.sections,t=h.pages,a=h.zoom,o=Object(m.g)(),r=o.size,c=o.viewport,l=Object(n.useContext)(d),i=c.width,s=c.height,u=i/a,f=s/a,p=r.width<700,g=u*(p?.2:.1),E=u*(p?.8:.6),b=f*((t-1)/(e-1));return{aspect:r.height/s,viewport:c,offset:l,viewportWidth:i,viewportHeight:s,canvasWidth:u,canvasHeight:f,mobile:p,margin:g,contentMaxWidth:E,sectionHeight:b}}(),i=l.offset,u=l.sectionHeight,p=l.aspect,g=Object(n.useRef)();return a=void 0!==a?a:i,Object(m.e)((function(){var e=g.current.position.y,t=h.top.current/p;g.current.position.y=f()(e,t/h.zoom*r,.1)})),o.a.createElement(d.Provider,{value:a},o.a.createElement("group",Object.assign({},c,{position:[0,-u*a*r,0]}),o.a.createElement("group",{ref:g},t)))}var g=a(41),E=a(21),b=a(59);function v(e){var t=e.url,a=Object(g.b)(t,!0);return o.a.createElement("primitive",{object:a.scene,dispose:null})}var w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ambientLight",{intensity:.3}),o.a.createElement("directionalLight",{position:[10,10,5],intensity:1}),o.a.createElement("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),o.a.createElement("spotLight",{intensity:1,position:[1e3,0,0],castShadow:!0}))},O=function(e){var t=e.domContent,a=e.children,r=e.bgColor,c=e.modelPath,i=e.position,s=Object(n.useRef)();Object(m.e)((function(){return s.current.rotation.y+=.01}));var u=Object(b.a)({threshold:0}),f=Object(l.a)(u,2),h=f[0],d=f[1];return Object(n.useEffect)((function(){d&&(document.body.style.background=r)}),[d]),o.a.createElement(p,{factor:1.5,offset:1},o.a.createElement("group",{position:[0,i,0]},o.a.createElement("mesh",{ref:s,position:[0,-35,0]},o.a.createElement(v,{url:c})),o.a.createElement(g.a,{fullscreen:!0,portal:t},o.a.createElement("div",{ref:h,className:"container"},o.a.createElement("h1",{className:"title"},a)))))};function j(){var e=Object(g.c)(),t=e.active,a=e.progress;return Object(E.useTransition)(t,{from:{opacity:1,progress:0},leave:{opacity:0},update:{progress:a}})((function(e,t){var a=e.progress,n=e.opacity;return t&&o.a.createElement(E.a.div,{className:"loading",style:{opacity:n}},o.a.createElement("div",{className:"loading-bar-container"},o.a.createElement(E.a.div,{className:"loading-bar",style:{width:a}})))}))}function y(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],r=(t[1],Object(n.useRef)()),c=Object(n.useRef)(),s=function(e){return h.top.current=e.target.scrollTop};return Object(n.useEffect)((function(){s({target:c.current})}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(i,null),o.a.createElement(m.a,{concurrent:!0,colorManagement:!0,camera:{position:[0,0,120],fov:70}},o.a.createElement(w,null),o.a.createElement(n.Suspense,{fallback:null},o.a.createElement(O,{domContent:r,bgColor:"#ffff66",modelPath:"/city.gltf",position:250},o.a.createElement("span",null,"Meet the new "),o.a.createElement("span",null,"online")),o.a.createElement(O,{domContent:r,bgColor:"#ffff66",modelPath:"/village.gltf",position:0},o.a.createElement("span",null,"Where the future"),o.a.createElement("span",null,"meets you")),o.a.createElement(O,{domContent:r,bgColor:"#636567",modelPath:"/iPhone.gltf",position:-250},o.a.createElement("span",null,"You and the"),o.a.createElement("span",null,"world")),o.a.createElement(O,{domContent:r,bgColor:"#571ec1",modelPath:"/scene.gltf",position:-500},o.a.createElement("span",null,"One decision"),o.a.createElement("span",null,"away")))),o.a.createElement(j,null),o.a.createElement("div",Object.assign({className:"scrollArea",ref:c,onScroll:s},a),o.a.createElement("div",{style:{position:"sticky",top:0},ref:r}),o.a.createElement("div",{style:{height:"".concat(100*h.pages,"vh")}})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.3323b760.chunk.js.map