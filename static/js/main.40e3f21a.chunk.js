(this["webpackJsonptop-albums"]=this["webpackJsonptop-albums"]||[]).push([[0],{219:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEE0lEQVR4nO2bT4hNURzHP3N7VwwJSRb+LST/laT8ieuQhaiJBZONws6sRGqSJmYhSWKhZM9GFrLiOkVMyoIUSXmxlaZp0jRHk8U5b8zMe++e++aeew+9+6m3efe87+97fvf8u+ed24EDhFSLgIvAPmCmC80c+QU8AfrjKBzsyKompFoMvAZWZNUqmE/AtsCB0GX+v8oDrAZ6XSTggAMNXxxwkYBOBxq+6HSRgP+aMgG+DfimUkCMTcBQAXEasQR4kVSgiAR8i6NwsIA4dQiprGXavguUCfBtwDdlAnwb8E3bJ6CIafBrmukoJ6w3uIgEzCsgxrRp+y5QJsC3Ad+UCfBtwDdtn4AipsHl+NsPWAa8SypQRAKGPO4HWNcgbd8FygT4NuCbMgG+DfimTIBvA74pE+DbgG/KBPg24JsyAb4N+KalBAipZgqp/tkjMUKqTiFVS8f0Eh+HhVSrgOPo83/rgbnm+1/oY2YSmDEdsy4QUm0BuoEIfeqr03w/BLw3n0QanhMUUq0ArgGHyd5N5rveDxBSbQZuALsySlXrWoCQ6hhwF5iTUTwXhFQX0GcTnWzmTBIRUp0BbrkQzgMh1S3gjEvN8eYtpOoCbroUd4mQ6jyOKw8mAea87z3+0WnR9Pn+PLRrFb4ELMgjgCOuk9MGbiCkWgicSFn+NzCah5FmmKkuSll8FO0xNQHQhf2M/xfgEDAbmAXsAF61EigD3SnKDKA9zUJ7PIT2bKUC7LGU+QZsi6Pwx4TvXgmp9gDPge1pAmXANtcPALvjKKy1zFHgsZBqAHiL/nOkKQF6BZVE35TKA2ACnrP81gVrLdfPTqj8OMZzn008wD74vUy4NkCOY4JZ1yc9e4waD81I8g7oBIxZyiSNvhXsU+eIzUQCNm8Bdn+J+gFQ17ynkPRGyH5LkKE4CqedANO0k/5YrRgPzbC9zfIjwP7E1CukqhsnzPR53fLbD5brabD5u2G8TMJ47rVpV4BnwKmEQvOA10KqfvTrZr+BnejFU+IICzy1XE9DbOI1YyXwVkjVh+7zFfSd78V+Qu1Zh5BqDvA9ReFWGQPWxFH4OYuI2ZP4iPtl+iCwNIijcBi47Vgc4GHWygMYjYcO/EzldhyFw7WsXgWqDsWHcbtGOGc0XVFF11k3K9MKjpJtyprI6TgKq460MFqnHcmNAN2mzn/7VRyFb4AjZJ+3e+IovJ/JYgOMZg/2tUESI8CROArHF091e4JCqq3AA1p/HfYncDKOwkcZDFoxGzf3aP3xvYq+85NWjnUjq2kJG4Ar6JHSxghwB1iXd+UBTIx1Jmaa1jqIrsuGqZWHJrvCNcwUeRDYC2wEFqKT9hO9Lf4ceNToYakIzAKoC/1EuxrdKsbQq9v36DXO41p/b8Qfh5oK78W65/4AAAAASUVORK5CYII="},222:function(e,t,n){e.exports=n(446)},440:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){},444:function(e,t,n){},445:function(e,t,n){},446:function(e,t,n){"use strict";n.r(t);n(223),n(232),n(415);var a=n(0),r=n.n(a),l=n(43),c=n.n(l),o=n(71),i=n(53),s=n(213),m=n(44),u={pending:!1,success:!1,items:[],titleList:[]},p=function(e){return e.map((function(e){return{value:e["im:name"].label,label:e["im:name"].label}}))},f={item:{},selected:!1,method:null},b=Object(i.c)({albums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_ALBUMS_START":return Object(m.a)({},e,{pending:!0});case"FETCH_ALBUMS_SUCCESS":return{pending:!1,success:!0,items:t.albums,titleList:p(t.albums)};case"FETCH_ALBUMS_FAILED":return u;default:return e}},selectedAlbum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SELECT_ALBUM":return{item:t.album,selected:t.selected,method:t.method};case"CLEAR_ALBUM_SELECTION":return Object(m.a)({},f);default:return e}}}),d=(!!window.chrome&&(!!window.chrome.webstore||window.chrome.runtime),n(66)),E=n(67),h=n(70),A=n(69),g=n(68),v=n(54),C=n(448),O=n(447),w=n(449),y=n(450),j=n(137),S=n.n(j),x=n(214),T=n(215),B=n.n(T),N=function(e,t,n){return{type:"SELECT_ALBUM",album:e,selected:t,method:n}},k=function(e,t,n){return function(a){var r;1===(r=t.filter((function(t){return e===t["im:name"].label}))).length?a(N(r[0],!0,n)):a(N({},!1))}},U=n(59),L=n(451),M=n(60);n(440);function I(){var e=Object(U.a)(["\n  font-size: 1em;\n  color: #eeeee;\n"]);return I=function(){return e},e}function F(){var e=Object(U.a)(["\n  font-size: 1.2em;\n  color: #eeeee;\n"]);return F=function(){return e},e}function z(){var e=Object(U.a)(["\n  font-size: 1em;\n  font-weight: 800;\n  letter-spacing: 1px;\n  color: #eeeee;\n"]);return z=function(){return e},e}var K=M.a.h4(z()),H=M.a.span(F()),P=M.a.span(I()),D=Object(a.memo)((function(e){var t=e.album,n=e.num,l=e.selected,c=e.selectMethod,o=e.handleCardClicked,i=Object(a.useRef)(null),s={margin:"0.5rem",width:"".concat(t["im:image"][2].attributes.height,"px"),height:"".concat(1.9*t["im:image"][2].attributes.height,"px")};Object(a.useEffect)((function(){var e;l&&"menu"===c&&(e=i,window.scrollTo(0,e.current.offsetTop))}),[l,c]);return r.a.createElement(L.a,{className:"card-album",ref:i,style:l?Object(m.a)({},s,{},{border:"#89e8e3 1px solid",WebkitBoxShadow:"0px 2px 20px 0px rgba(72,194,252,1)",MozBoxShadow:"0px 2px 20px 0px rgba(72,194,252,1)",boxShadow:"0px 2px 20px 0px rgba(72,194,252,1)"}):s,onClick:function(){var e=t["im:name"].label;o(e)}},r.a.createElement(L.a.Img,{variant:"top",alt:"Cover Image",title:"Cover Image",src:t["im:image"][2].label}),r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Title,null,r.a.createElement(K,null,"".concat(n,". ").concat(t["im:name"].label))),r.a.createElement(L.a.Text,null,r.a.createElement(H,null,t["im:artist"].label))),r.a.createElement(L.a.Body,{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-end",fontSize:"1.4rem"}},r.a.createElement(L.a.Text,null,r.a.createElement(P,null,t["im:price"].label)),r.a.createElement(L.a.Link,{className:"link-more",target:"_blank",title:"More Info",href:t.link.attributes.href},"More")))}),(function(e,t){return e.selected===t.selected})),R=n(220),Q={option:function(e){return Object(m.a)({},e,{fontSize:"1.6rem"})},placeholder:function(){return{fontSize:"1.6rem"}},control:function(e){return Object(m.a)({},e,{fontSize:"1.6rem"})}},q=function(e){Object(h.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={selectedOption:null},e.handleChange=function(t){if(t){var n=e.props.handleOptionSelected;e.setState({selectedOption:t},(function(){n(t.value)}))}else{(0,e.props.handleClearSelection)()}},e}return Object(E.a)(n,[{key:"shouldComponentUpdate",value:function(e){return this.props.options!==e.options}},{key:"render",value:function(){var e=this.props.options;return r.a.createElement(R.a,{className:"basic-single",classNamePrefix:"select",styles:Q,isClearable:!0,isSearchable:!0,name:"color",options:e,onChange:this.handleChange})}}]),n}(a.Component),G=Object(a.memo)((function(){var e=Object(o.c)((function(e){return e.albums})),t=Object(o.c)((function(e){return e.selectedAlbum})),n=Object(o.b)();Object(a.useEffect)((function(){n(function(){var e=Object(x.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_ALBUMS_START"}),e.prev=1,e.next=4,B.a.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");case 4:200===(n=e.sent).status&&t({type:"FETCH_ALBUMS_SUCCESS",albums:n.data.feed.entry}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error",Error),t({type:"FETCH_ALBUMS_FAILED"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n]);var l,c=function(t){n(k(t,e.items,"click"))},i=Object(a.useCallback)((function(){n({type:"CLEAR_ALBUM_SELECTION"})}),[n]);return l=e&&e.success&&0!==e.items.length?e.pending?r.a.createElement(O.a,{animation:"border",role:"status",style:{marginTop:"2rem"}},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(C.a,null,r.a.createElement(w.a,{className:"mb-4"},r.a.createElement(y.a,{lg:{span:5,offset:7},md:{span:6,offset:6},sm:12},r.a.createElement(q,{options:e.titleList,handleOptionSelected:function(t){n(k(t,e.items,"menu"))},handleClearSelection:i}))),r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"d-flex flex-wrap justify-content-center"},e.items.map((function(e,n){return r.a.createElement(D,{key:e.id.attributes["im:id"],num:n+1,album:e,handleCardClicked:c,selected:t.selected&&e["im:name"].label===t.item["im:name"].label,selectMethod:t.method})}))))):r.a.createElement("h3",{style:{marginTop:"2rem"}}," Something went wrong.... Please try it later."),r.a.createElement(w.a,{className:"justify-content-center"},l)}),(function(e,t){return e.albums===t.albums&&e.selectedAlbum===t.selectedAlbum}));function J(){var e=Object(U.a)(["\n  font-size: 2em;\n  color: #eeeee;\n  text-align: center;\n  margin-top: 5rem;\n"]);return J=function(){return e},e}function X(){var e=Object(U.a)(["\n  font-size: 4em;\n  color: #eeeee;\n  text-align: center;\n  margin-top: 3rem;\n"]);return X=function(){return e},e}var W=M.a.h1(X()),Z=M.a.h4(J()),V=function(){return r.a.createElement(w.a,null,r.a.createElement(y.a,{sm:2},r.a.createElement(g.b,{to:"/"},r.a.createElement(Z,{className:"fade-in"},"Home"))),r.a.createElement(y.a,{style:{padding:0}},r.a.createElement(W,null,"Top 100 Albums")),r.a.createElement(y.a,{sm:2}))},_=function(){return r.a.createElement(C.a,{className:"fade-in"},r.a.createElement(V,null),r.a.createElement(G,null))},Y=n(221),$=n(219),ee=n.n($),te=(n(442),function(e){Object(h.a)(n,e);var t=Object(A.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.show;return r.a.createElement("div",{id:"tooltip",className:" on bottom tooltip-arrow"},r.a.createElement("div",{className:"tooltip-arrow",style:{opacity:n?"1":"0"}}),r.a.createElement("div",{className:"tooltip-inner",style:{opacity:n?"1":"0"}},t))}}]),n}(a.PureComponent)),ne=(n(443),function(){var e=Object(a.useState)(!1),t=Object(Y.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:"intro fade-in"},r.a.createElement("div",{className:"title-wrap"},r.a.createElement("div",{className:"intro-title"},"Top 100 Albums"),r.a.createElement("div",null,r.a.createElement("img",{className:"spin",alt:"music-note",src:ee.a})),r.a.createElement("div",{style:{position:"relative",marginTop:"2rem"}},r.a.createElement(g.b,{to:"/top100",className:"intro-title-sm color-in",onMouseLeave:function(){l(!1)},onMouseEnter:function(e){e.stopPropagation(),l(!0)}},"Click Here to Continue"),r.a.createElement("div",null,r.a.createElement(te,{show:n},"Go to Top 100 Albums")))))}),ae=(n(444),function(e){Object(h.a)(n,e);var t=Object(A.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return r.a.createElement(g.a,{basename:"/top-albums/"},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/top100"},r.a.createElement(_,null)),r.a.createElement(v.a,{path:"/",exact:!0},r.a.createElement(ne,null))))}}]),n}(a.PureComponent));n(445),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=i.d,le=Object(i.e)(b,re(Object(i.a)(s.a))),ce=r.a.createElement(o.a,{store:le},r.a.createElement(ae,null));c.a.render(ce,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[222,1,2]]]);
//# sourceMappingURL=main.40e3f21a.chunk.js.map