(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});a(170);var r=a(0),n=a.n(r),i=a(141),s=a(172),o=a.n(s),l=a(147),d=a(173),u=a.n(d);t.default=function(e){var t=e.data;return n.a.createElement(l.a,null,n.a.createElement("h1",null,"Hi people"),n.a.createElement("p",null,"Welcome to your new Gatsby site."),n.a.createElement("p",null,"Now go build something great."),n.a.createElement(i.Link,{to:"/page-2/"},"Go to page 2"),n.a.createElement(o.a,{fixed:t.file.childImageSharp.fixed}),n.a.createElement("img",{src:u.a}))};var c="290573272"},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(140),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(26);a.d(t,"waitForRouteChange",function(){return d.c});var u=a(142),c=a.n(u);a.d(t,"PageRenderer",function(){return c.a});var f=a(36);a.d(t,"parsePath",function(){return f.a});var p=n.a.createContext({}),h=function(e){return n.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},142:function(e,t,a){var r;e.exports=(r=a(144))&&r.default||r},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Daniel Husar",description:"Daniel Husar personal website",keywords:"blog"}}}}},144:function(e,t,a){"use strict";a.r(t);a(37);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(51),l=a(1),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},145:function(e,t,a){},147:function(e,t,a){"use strict";var r=a(143),n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(148),d=a.n(l),u=a(141),c=a(149).a.div.withConfig({displayName:"container__Container",componentId:"sc-2o7k8r-0"})(["margin:0 auto;max-width:960px;padding:0px 1.0875rem 1.45rem;padding-top:0;"]),f=function(e){var t=e.children;return i.a.createElement(c,null,t)},p=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},h=(a(145),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"4085570902",render:function(e){var a=e.site.siteMetadata,r=a.title,n=a.description,s=a.keywords;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:r},i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("meta",{name:"keywords",content:s})),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(f,null,t))},data:r})});h.propTypes={children:o.a.node.isRequired};t.a=h},170:function(e,t,a){"use strict";a(171)("fixed",function(e){return function(){return e(this,"tt","","")}})},171:function(e,t,a){var r=a(6),n=a(16),i=a(27),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},172:function(e,t,a){"use strict";var r=a(38);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(50)),o=r(a(151)),l=r(a(152)),d=r(a(0)),u=r(a(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var g=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!0,i=!1,o=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!1,i=!0),"undefined"==typeof window&&(r=!1,n=!1),t.critical&&(r=!0,n=!1,i=!1);var u=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:n,IOSupported:i,fadeIn:o,hasNoScript:u,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e,t=c(this.props),a=t.title,r=t.alt,n=t.className,i=t.style,s=void 0===i?{}:i,o=t.imgStyle,u=void 0===o?{}:o,f=t.placeholderStyle,p=void 0===f?{}:f,h=t.fluid,g=t.fixed,b=t.backgroundColor,v=t.Tag;e="boolean"==typeof b?"lightgray":b;var w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},u,p),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},u);if(h){var S=h;return d.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&d.default.createElement(y,{alt:r,title:a,src:S.base64,style:w}),S.tracedSVG&&d.default.createElement(y,{alt:r,title:a,src:S.tracedSVG,style:w}),e&&d.default.createElement(v,{title:a,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),d.default.createElement(y,{alt:r,title:a,src:S.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:r,title:a},S))}}))}if(g){var R=g,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},s);return"inherit"===s.display&&delete L.display,d.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef},R.base64&&d.default.createElement(y,{alt:r,title:a,src:R.base64,style:w}),R.tracedSVG&&d.default.createElement(y,{alt:r,title:a,src:R.tracedSVG,style:w}),e&&d.default.createElement(v,{title:a,style:{backgroundColor:e,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:r,title:a,width:R.width,height:R.height,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:r,title:a,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),w=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,Tag:u.default.string};var E=b;t.default=E},173:function(e,t,a){e.exports=a.p+"static/portrait-a54dc04e5b0a2e3f0e25023129808a28.jpeg"}}]);
//# sourceMappingURL=component---src-pages-index-js-073468a4487536a4e645.js.map