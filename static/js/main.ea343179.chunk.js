(this["webpackJsonpjuly-23-task"]=this["webpackJsonpjuly-23-task"]||[]).push([[0],{36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c,r,a,i,s,o,l,d,u,j,b,O,h,p,x=n(0),E=n.n(x),_=n(18),v=n.n(_),m=(n(36),n(20)),f=n(12),I=n(6),T=n(7),A=T.a.div(c||(c=Object(I.a)(["\n  margin: 4px;\n"]))),D=T.a.div(r||(r=Object(I.a)(["\n  display: grid;\n  justify-content: center;\n"]))),g=T.a.img(a||(a=Object(I.a)(["\n    width: 100%;\n    max-height: 30vh;\n    vertical-align: middle;\n    cursor: pointer;\n    min-width: 200px;\n    min-height: 200px;\n"]))),S=T.a.div(i||(i=Object(I.a)(["\n  display: grid;\n  justify-content: center;\n"]))),L=T.a.a(s||(s=Object(I.a)(["\n  color: white;\n  cursor: pointer;\n"]))),y=n(2),P=function(e){var t=e.movie,n=e.cardClicked;return Object(y.jsxs)(A,{className:"movie-card",children:[Object(y.jsx)(D,{className:"card-content white-text",children:Object(y.jsx)(g,{id:"card-poster-link-".concat(t.imdbID),src:t.Poster,alt:"",onClick:function(){return n(t)}})}),Object(y.jsx)(S,{className:"card-action",children:Object(y.jsxs)(L,{id:"card-title-link-".concat(t.imdbID),onClick:function(){return n(t)},children:[t.Title," (",t.Year,")"]})})]})},M=(n(42),function(e){var t=e.onSearch,n=E.a.useState(""),c=Object(m.a)(n,2),r=c[0],a=c[1];return Object(y.jsxs)("div",{className:"searchbar-wrapper",children:[Object(y.jsx)("input",{className:"input-wrapper",id:"search-input",type:"search",value:r,placeholder:"enter movie title to search",onChange:function(e){return a(String(e.target.value))},onKeyPress:function(e){return function(e){"Enter"===e.key&&t(r.trim())}(e)}}),Object(y.jsx)("button",{id:"search-button",className:"search-button",onClick:function(){return t(r.trim())},children:"Search"})]})});function R(e,t,n){return{type:o.LOAD_MOVIES_LIST,payload:{searchCriteria:e,page:t,paginatedRequest:n}}}function w(e){return{type:o.UPDATE_MOVIES_LIST,payload:e}}function U(e){return{type:o.UPDATE_MOVIES_LIST_PAGINATED,payload:e}}function V(e){return{type:o.UPDATE_MOVIE_DETAILS,payload:e}}function C(e){return{type:o.UPDATE_TOTAL_MOVIES,payload:e}}!function(e){e.LOAD_MOVIES_LIST="LOAD_MOVIES_LIST",e.UPDATE_MOVIES_LIST="UPDATE_MOVIES_LIST",e.UPDATE_MOVIES_LIST_PAGINATED="UPDATE_MOVIES_LIST_PAGINATED",e.UPDATE_SEARCH_CRITERIA="UPDATE_SEARCH_CRITERIA",e.LOAD_MOVIES_DETAILS_BY_ID="LOAD_MOVIES_DETAILS_BY_ID",e.UPDATE_MOVIE_DETAILS="UPDATE_MOVIE_DETAILS",e.UPDATE_TOTAL_MOVIES="UPDATE_TOTAL_MOVIES",e.UPDATE_PAGE_NUMBER="UPDATE_PAGE_NUMBER",e.RESET_MOVIE_LIST="RESET_MOVIE_LIST"}(o||(o={}));var k,N=T.a.div(l||(l=Object(I.a)(["\n  display: grid;\n  grid-template-columns: 40% 60%;\n  max-height: 40vh;\n  overflow: auto;\n"]))),B=T.a.aside(d||(d=Object(I.a)(["\n  grid-column: 1;\n  padding: 10px;\n  background-color: #5899ed;\n"]))),G=T.a.article(u||(u=Object(I.a)(["\n  grid-column: 2;\n  padding: 10px;\n"]))),F=T.a.img(j||(j=Object(I.a)(["\n  width: 100%;\n  max-height: 40vh;\n  object-fit: cover;\n"]))),Y=T.a.div(b||(b=Object(I.a)(["\n  margin: 8px 0px;\n"]))),H=T.a.span(O||(O=Object(I.a)([""]))),W=T.a.a(h||(h=Object(I.a)(["\n  background-color: white;\n  border-radius: 3.6rem;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 2rem;\n  height: 3.6rem;\n  line-height: 3.6rem;\n  margin: 0;\n  right: 1rem;\n  position: absolute;\n  text-align: center;\n  width: 3.6rem;\n"]))),q=T.a.img(p||(p=Object(I.a)(["\n  width: 100%;\n"]))),J=n.p+"static/media/close.62372c1d.png",z=function(e){var t=e.movie,n=e.closeDetails;return Object(y.jsxs)("div",{id:"movie-info-view",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(F,{src:t.Poster,alt:""}),Object(y.jsx)(W,{children:Object(y.jsx)(q,{id:"movie-detail-poster-".concat(t.imdbID),src:J,alt:"",onClick:function(){return n()}})})]}),Object(y.jsxs)(N,{children:[Object(y.jsxs)(B,{children:[Object(y.jsxs)("h3",{id:"movie-title-".concat(t.imdbID),children:[t.Title," (",t.Year,")"]}),Object(y.jsxs)(Y,{children:["Director: ",Object(y.jsx)(H,{children:t.Director})]}),Object(y.jsxs)(Y,{children:["Actors: ",Object(y.jsx)(H,{children:t.Actors})]}),Object(y.jsxs)(Y,{children:["Writer: ",Object(y.jsx)(H,{children:t.Writer})]}),Object(y.jsxs)(Y,{children:["Language: ",Object(y.jsx)(H,{children:t.Language})]}),Object(y.jsxs)(Y,{children:["Country: ",Object(y.jsx)(H,{children:t.Country})]}),Object(y.jsxs)(Y,{children:["Genre: ",Object(y.jsx)(H,{children:t.Genre})]}),Object(y.jsxs)(Y,{children:["Rated: ",Object(y.jsx)(H,{children:t.Rated})]}),Object(y.jsxs)(Y,{children:["Released: ",Object(y.jsx)(H,{children:t.Released})]}),Object(y.jsxs)(Y,{children:["Runtime: ",Object(y.jsx)(H,{children:t.Runtime})]}),Object(y.jsxs)(Y,{children:["Ratings: ",Object(y.jsx)(H,{children:t.imdbRating})]}),Object(y.jsxs)(Y,{children:["BoxOffice: ",Object(y.jsx)(H,{children:t.BoxOffice})]}),Object(y.jsxs)(Y,{children:["Production: ",Object(y.jsx)(H,{children:t.Production})]}),Object(y.jsxs)(Y,{children:["Website: ",Object(y.jsx)(H,{children:t.Website})]})]}),Object(y.jsx)(G,{children:Object(y.jsx)("p",{children:t.Plot})})]})]})},K=n(29),Q=(n(43),T.a.div(k||(k=Object(I.a)(["\n  height: 75vh;\n  width: 100vw;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n"]))));var X=function(){var e=Object(f.b)(),t=E.a.useState(null),n=Object(m.a)(t,2),c=n[0],r=n[1],a=Object(f.c)((function(e){return e.moviesList})),i=Object(f.c)((function(e){return e.searchCriteria})),s=Object(f.c)((function(e){return e.selectedMovieDetails})),l=Object(f.c)((function(e){return e.pageNumber})),d=Object(f.c)((function(e){return e.totalResults}));return E.a.useEffect((function(){e(R(i,l,1!==l))}),[e,i,l]),Object(y.jsxs)("div",{className:"content-wrapper",children:[Object(y.jsx)(M,{onSearch:function(t){r(null),e({type:o.RESET_MOVIE_LIST}),e(function(e){return{type:o.UPDATE_SEARCH_CRITERIA,payload:e}}(t))}}),!c&&Object(y.jsx)(y.Fragment,{children:a&&a.length?Object(y.jsx)(Q,{id:"scrollableDiv",children:Object(y.jsx)(K.a,{dataLength:a.length,next:function(){var t;e((t=l+1,{type:o.UPDATE_PAGE_NUMBER,payload:t}))},hasMore:a.length<d,inverse:!1,loader:Object(y.jsx)("h4",{children:"Loading..."}),scrollableTarget:"scrollableDiv",children:Object(y.jsx)("div",{className:"grid-container",children:a.map((function(t){return Object(y.jsx)(P,{movie:t,cardClicked:function(t){var n;e((n=t.imdbID,{type:o.LOAD_MOVIES_DETAILS_BY_ID,payload:n})),r(t)}},t.imdbID)}))})})}):""===i?Object(y.jsx)("div",{className:"empty-page",id:"no-search",children:"Enter Movie Title To Search"}):Object(y.jsx)("div",{className:"empty-page",id:"invalid-search",children:"No Results Found"})}),s&&Object(y.jsx)("div",{children:Object(y.jsx)(z,{movie:s,closeDetails:function(){r(null),e(V(null))}})})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},$=n(17),ee=n(9),te={moviesList:[],searchCriteria:"",selectedMovieDetails:null,pageNumber:1,totalResults:0},ne=function(e){return Object(ee.a)(Object(ee.a)({},e),{},{moviesList:[],selectedMovieDetails:null,pageNumber:1,totalResults:0,searchCriteria:""})},ce=function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{moviesList:t.payload})},re=function(e,t){var n=e.moviesList.concat(t.payload);return Object(ee.a)(Object(ee.a)({},e),{},{moviesList:n})},ae=function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{searchCriteria:t.payload})},ie=function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{selectedMovieDetails:t.payload})},se=function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{totalResults:t.payload})},oe=function(e,t){return Object(ee.a)(Object(ee.a)({},e),{},{pageNumber:t.payload})};var le=n(31),de=n(13),ue=n.n(de),je=n(11),be=function(e){return e.json()},Oe=ue.a.mark(Ee),he=ue.a.mark(_e),pe=ue.a.mark(ve),xe=ue.a.mark(me);function Ee(e){var t,n,c,r,a,i,s;return ue.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.searchCriteria,c=t.page,r=t.paginatedRequest,a="https://www.omdbapi.com/?apikey=b9bd48a6&s=".concat(n,"&type=movie&page=").concat(c),o.prev=2,o.next=5,Object(je.b)(fetch,a);case 5:return i=o.sent,o.next=8,be(i);case 8:if(s=o.sent,r){o.next=16;break}return o.next=12,Object(je.c)(w(null===s||void 0===s?void 0:s.Search));case 12:return o.next=14,Object(je.c)(C(Number(null===s||void 0===s?void 0:s.totalResults)));case 14:o.next=18;break;case 16:return o.next=18,Object(je.c)(U(null===s||void 0===s?void 0:s.Search));case 18:o.next=26;break;case 20:return o.prev=20,o.t0=o.catch(2),o.next=24,Object(je.c)(w([]));case 24:return o.next=26,Object(je.c)(C(0));case 26:case"end":return o.stop()}}),Oe,null,[[2,20]])}function _e(e){var t,n,c;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="https://www.omdbapi.com/?apikey=b9bd48a6&i=".concat(e.payload),r.next=3,Object(je.b)(fetch,t);case 3:return n=r.sent,r.next=6,be(n);case 6:return c=r.sent,r.next=9,Object(je.c)(V(c));case 9:case"end":return r.stop()}}),he)}function ve(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(je.d)(o.LOAD_MOVIES_LIST,Ee);case 2:return e.next=4,Object(je.d)(o.LOAD_MOVIES_DETAILS_BY_ID,_e);case 4:case"end":return e.stop()}}),pe)}function me(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(je.a)([ve()]);case 2:case"end":return e.stop()}}),xe)}var fe=Object(le.a)(),Ie=Object($.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.UPDATE_MOVIES_LIST:return ce(e,t);case o.UPDATE_MOVIES_LIST_PAGINATED:return re(e,t);case o.UPDATE_SEARCH_CRITERIA:return ae(e,t);case o.UPDATE_MOVIE_DETAILS:return ie(e,t);case o.UPDATE_TOTAL_MOVIES:return se(e,t);case o.UPDATE_PAGE_NUMBER:return oe(e,t);case o.RESET_MOVIE_LIST:return ne(e);default:return e}}),Object($.a)(fe));fe.run(me);var Te=Ie,Ae=n(30);v.a.render(Object(y.jsx)(f.a,{store:Te,children:Object(y.jsx)(Ae.a,{children:Object(y.jsx)(E.a.StrictMode,{children:Object(y.jsx)(X,{})})})}),document.getElementById("root")),Z()}},[[47,1,2]]]);
//# sourceMappingURL=main.ea343179.chunk.js.map