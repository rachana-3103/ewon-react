import{__rest as r,__read as o,__assign as e}from"../../../../../node_modules/tslib/tslib.es6.js";import{jsx as n}from"react/jsx-runtime";import{useState as t,useCallback as i,Children as s,isValidElement as a}from"react";import m from"classnames";import{useClickOutside as l}from"@doar/shared/hooks";import{StyledDropdown as p}from"./style.js";var c=function(c){var d=c.children,f=c.direction,u=c.className,h=r(c,["children","direction","className"]),w=o(t(!1),2),y=w[0],v=w[1],N=function(){v((function(r){return!r}))},j=i((function(){v(!1)}),[]),b=l(j),g=s.map(d,(function(r){if(!a(r))return r;var o=r;if(null!==o){var t=o.type,i=t.displayName||t.name;if("DropdownToggle"===i)return n(o.type,e({},o.props,{onClick:N}));if("DropdownMenu"===i)return n(o.type,e({},o.props,{direction:f,show:y}))}return null}));return n(p,e({},h,{className:m(u,"dropdown"),ref:b},{children:g}))};c.defaultProps={direction:"down"};export{c as default};
//# sourceMappingURL=dropdown.js.map