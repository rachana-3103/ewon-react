import{__read as o,__spreadArray as r,__assign as t}from"../../../../../node_modules/tslib/tslib.es6.js";import{jsxs as e,jsx as a}from"react/jsx-runtime";import{useState as l,useEffect as i}from"react";import{VectorMap as n}from"@south-paw/react-vector-maps";import s from"@doar/shared/data/maps/world-low-res.json";import{StyledMap as c}from"./style.js";var d=function(d){var u=d.width,f=d.height,m=d.backgroundColor,p=d.borderColor,v=d.color,h=d.checkedLayers,b=d.selectedColor,g=d.tooltip,C=d.data,w=void 0===C?s:C,k=o(l([]),2),y=k[0],M=k[1],j=o(l(),2),$=j[0],x=j[1],L=o(l(!1),2),N=L[0],O=L[1],P=o(l(0),2),V=P[0],X=P[1],Y=o(l(0),2),_=Y[0],q=Y[1];return i((function(){h&&M(r([],o(h),!1))}),[h]),e(c,t({width:u,height:f,$bg:m,$bdc:p,$color:v,$slColor:b,className:"vector-map"},{children:[a(n,t({},w,{checkedLayers:y,layerProps:{onClick:function(t){var e,a=null===(e=t.target.attributes)||void 0===e?void 0:e.id.value;y.includes(a)?M(y.filter((function(o){return o!==a}))):M(r(r([],o(y),!1),[a],!1))},onMouseOver:function(o){var r,t=null===(r=o.target.attributes)||void 0===r?void 0:r.name.value;x(t),O(!0)},onMouseOut:function(){x(""),O(!1)},onMouseMove:function(o){X(o.clientY-20),q(o.clientX-10)}}})),g&&N&&a("div",t({className:"tooltip",style:{top:V,left:_}},{children:$}))]}))};d.defaultProps={backgroundColor:"transparent",borderColor:"#fff",color:"#8392a5",selectedColor:"rgba(56, 43, 168, 1)",width:"90%",height:"500px",tooltip:!1};export{d as default};
//# sourceMappingURL=vector-map.js.map
