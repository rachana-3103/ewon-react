import{__assign as r}from"../../../../../node_modules/tslib/tslib.es6.js";import{jsx as o}from"react/jsx-runtime";import{Children as e,isValidElement as t}from"react";import{useJsApiLoader as a,GoogleMap as i}from"@react-google-maps/api";import{MapKey as l}from"@doar/shared/data";import{StyledMap as n}from"./style.js";var d=function(d){var p=d.width,m=d.height,s=d.lat,h=d.lng,g=d.zoom,f=d.children,c=a({id:"google-map-script",googleMapsApiKey:l}),u=c.isLoaded;if(c.loadError)return o("div",{children:"Map cannot be loaded right now, sorry."});var v=e.map(f,(function(e){if(!t(e))return e;var a=e;if(null!==a){var i=a.type;if("GoogleMapMarker"===(i.displayName||i.name))return o(a.type,r({lat:s,lng:h},a.props))}return null}));return u?o(n,r({width:p,height:m},{children:o(i,r({mapContainerStyle:{width:"100%",height:"100%"},center:{lat:s,lng:h},zoom:g},{children:v}))})):o("div",{children:"Map is loading."})};d.defaultProps={width:"100%",height:"400px",lat:-3.745,lng:-38.523,zoom:12};export{d as default};
//# sourceMappingURL=google-map.js.map
