(function(I,s){typeof exports=="object"&&typeof module<"u"?module.exports=s(require("react")):typeof define=="function"&&define.amd?define(["react"],s):(I=typeof globalThis<"u"?globalThis:I||self,I["flume-ts"]=s(I.React))})(this,function(I){"use strict";var s={exports:{}},S={};var X;function xe(){if(X)return S;X=1;var L=I,d=Symbol.for("react.element"),w=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,Y=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function m(E,l,z){var N,T={},A=null,_=null;z!==void 0&&(A=""+z),l.key!==void 0&&(A=""+l.key),l.ref!==void 0&&(_=l.ref);for(N in l)x.call(l,N)&&!k.hasOwnProperty(N)&&(T[N]=l[N]);if(E&&E.defaultProps)for(N in l=E.defaultProps,l)T[N]===void 0&&(T[N]=l[N]);return{$$typeof:d,type:E,key:A,ref:_,props:T,_owner:Y.current}}return S.Fragment=w,S.jsx=m,S.jsxs=m,S}var h={};var K;function ze(){return K||(K=1,process.env.NODE_ENV!=="production"&&function(){var L=I,d=Symbol.for("react.element"),w=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),E=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),_=Symbol.for("react.offscreen"),ee=Symbol.iterator,pe="@@iterator";function Se(e){if(e===null||typeof e!="object")return null;var r=ee&&e[ee]||e[pe];return typeof r=="function"?r:null}var O=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];he("error",e,t)}}function he(e,r,t){{var n=O.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var M=t.map(function(u){return String(u)});M.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,M)}}var we=!1,me=!1,be=!1,Re=!1,Ye=!1,re;re=Symbol.for("react.module.reference");function ke(e){return!!(typeof e=="string"||typeof e=="function"||e===x||e===k||Ye||e===Y||e===z||e===N||Re||e===_||we||me||be||typeof e=="object"&&e!==null&&(e.$$typeof===A||e.$$typeof===T||e.$$typeof===m||e.$$typeof===E||e.$$typeof===l||e.$$typeof===re||e.getModuleId!==void 0))}function _e(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function te(e){return e.displayName||"Context"}function y(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case w:return"Portal";case k:return"Profiler";case Y:return"StrictMode";case z:return"Suspense";case N:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E:var r=e;return te(r)+".Consumer";case m:var t=e;return te(t._context)+".Provider";case l:return _e(e,e.render,"ForwardRef");case T:var n=e.displayName||null;return n!==null?n:y(e.type)||"Memo";case A:{var i=e,M=i._payload,u=i._init;try{return y(u(M))}catch{return null}}}return null}var v=Object.assign,b=0,ne,ae,ue,ie,Me,oe,ce;function se(){}se.__reactDisabledLog=!0;function Ue(){{if(b===0){ne=console.log,ae=console.info,ue=console.warn,ie=console.error,Me=console.group,oe=console.groupCollapsed,ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:se,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}b++}}function Qe(){{if(b--,b===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:v({},e,{value:ne}),info:v({},e,{value:ae}),warn:v({},e,{value:ue}),error:v({},e,{value:ie}),group:v({},e,{value:Me}),groupCollapsed:v({},e,{value:oe}),groupEnd:v({},e,{value:ce})})}b<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var V=O.ReactCurrentDispatcher,G;function U(e,r,t){{if(G===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var $=!1,Q;{var Pe=typeof WeakMap=="function"?WeakMap:Map;Q=new Pe}function le(e,r){if(!e||$)return"";{var t=Q.get(e);if(t!==void 0)return t}var n;$=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var M;M=V.current,V.current=null,Ue();try{if(r){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(D){n=D}Reflect.construct(e,[],u)}else{try{u.call()}catch(D){n=D}e.call(u.prototype)}}else{try{throw Error()}catch(D){n=D}e()}}catch(D){if(D&&n&&typeof D.stack=="string"){for(var a=D.stack.split(`
`),j=n.stack.split(`
`),o=a.length-1,c=j.length-1;o>=1&&c>=0&&a[o]!==j[c];)c--;for(;o>=1&&c>=0;o--,c--)if(a[o]!==j[c]){if(o!==1||c!==1)do if(o--,c--,c<0||a[o]!==j[c]){var g=`
`+a[o].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),typeof e=="function"&&Q.set(e,g),g}while(o>=1&&c>=0);break}}}finally{$=!1,V.current=M,Qe(),Error.prepareStackTrace=i}var p=e?e.displayName||e.name:"",ve=p?U(p):"";return typeof e=="function"&&Q.set(e,ve),ve}function We(e,r,t){return le(e,!1)}function Fe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function P(e,r,t){if(e==null)return"";if(typeof e=="function")return le(e,Fe(e));if(typeof e=="string")return U(e);switch(e){case z:return U("Suspense");case N:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return We(e.render);case T:return P(e.type,r,t);case A:{var n=e,i=n._payload,M=n._init;try{return P(M(i),r,t)}catch{}}}return""}var W=Object.prototype.hasOwnProperty,fe={},je=O.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,t=P(e.type,e._source,r?r.type:null);je.setExtraStackFrame(t)}else je.setExtraStackFrame(null)}function Ve(e,r,t,n,i){{var M=Function.call.bind(W);for(var u in e)if(M(e,u)){var a=void 0;try{if(typeof e[u]!="function"){var j=Error((n||"React class")+": "+t+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw j.name="Invariant Violation",j}a=e[u](r,u,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(o){a=o}a&&!(a instanceof Error)&&(F(i),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,u,typeof a),F(null)),a instanceof Error&&!(a.message in fe)&&(fe[a.message]=!0,F(i),f("Failed %s type: %s",t,a.message),F(null))}}}var Ge=Array.isArray;function Z(e){return Ge(e)}function $e(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ze(e){try{return Ne(e),!1}catch{return!0}}function Ne(e){return""+e}function ge(e){if(Ze(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",$e(e)),Ne(e)}var R=O.ReactCurrentOwner,Be={key:!0,ref:!0,__self:!0,__source:!0},Te,ye,B;B={};function Je(e){if(W.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function He(e){if(W.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function qe(e,r){if(typeof e.ref=="string"&&R.current&&r&&R.current.stateNode!==r){var t=y(R.current.type);B[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',y(R.current.type),e.ref),B[t]=!0)}}function Xe(e,r){{var t=function(){Te||(Te=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Ke(e,r){{var t=function(){ye||(ye=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var er=function(e,r,t,n,i,M,u){var a={$$typeof:d,type:e,key:r,ref:t,props:u,_owner:M};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function rr(e,r,t,n,i){{var M,u={},a=null,j=null;t!==void 0&&(ge(t),a=""+t),He(r)&&(ge(r.key),a=""+r.key),Je(r)&&(j=r.ref,qe(r,i));for(M in r)W.call(r,M)&&!Be.hasOwnProperty(M)&&(u[M]=r[M]);if(e&&e.defaultProps){var o=e.defaultProps;for(M in o)u[M]===void 0&&(u[M]=o[M])}if(a||j){var c=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Xe(u,c),j&&Ke(u,c)}return er(e,a,j,i,n,R.current,u)}}var J=O.ReactCurrentOwner,De=O.ReactDebugCurrentFrame;function C(e){if(e){var r=e._owner,t=P(e.type,e._source,r?r.type:null);De.setExtraStackFrame(t)}else De.setExtraStackFrame(null)}var H;H=!1;function q(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function Ie(){{if(J.current){var e=y(J.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function tr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Le={};function nr(e){{var r=Ie();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function de(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=nr(r);if(Le[t])return;Le[t]=!0;var n="";e&&e._owner&&e._owner!==J.current&&(n=" It was passed a child from "+y(e._owner.type)+"."),C(e),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),C(null)}}function Ee(e,r){{if(typeof e!="object")return;if(Z(e))for(var t=0;t<e.length;t++){var n=e[t];q(n)&&de(n,r)}else if(q(e))e._store&&(e._store.validated=!0);else if(e){var i=Se(e);if(typeof i=="function"&&i!==e.entries)for(var M=i.call(e),u;!(u=M.next()).done;)q(u.value)&&de(u.value,r)}}}function ar(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===T))t=r.propTypes;else return;if(t){var n=y(r);Ve(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!H){H=!0;var i=y(r);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ur(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){C(e),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),C(null);break}}e.ref!==null&&(C(e),f("Invalid attribute `ref` supplied to `React.Fragment`."),C(null))}}function Ae(e,r,t,n,i,M){{var u=ke(e);if(!u){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j=tr(i);j?a+=j:a+=Ie();var o;e===null?o="null":Z(e)?o="array":e!==void 0&&e.$$typeof===d?(o="<"+(y(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):o=typeof e,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",o,a)}var c=rr(e,r,t,i,M);if(c==null)return c;if(u){var g=r.children;if(g!==void 0)if(n)if(Z(g)){for(var p=0;p<g.length;p++)Ee(g[p],e);Object.freeze&&Object.freeze(g)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ee(g,e)}return e===x?ur(c):ar(c),c}}function ir(e,r,t){return Ae(e,r,t,!0)}function Mr(e,r,t){return Ae(e,r,t,!1)}var or=Mr,cr=ir;h.Fragment=x,h.jsx=or,h.jsxs=cr}()),h}(function(L){process.env.NODE_ENV==="production"?L.exports=xe():L.exports=ze()})(s);const Oe="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM1LjkzIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDIyOCI+PHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTIxMC40ODMgNzMuODI0YTE3MS40OSAxNzEuNDkgMCAwIDAtOC4yNC0yLjU5N2MuNDY1LTEuOS44OTMtMy43NzcgMS4yNzMtNS42MjFjNi4yMzgtMzAuMjgxIDIuMTYtNTQuNjc2LTExLjc2OS02Mi43MDhjLTEzLjM1NS03LjctMzUuMTk2LjMyOS01Ny4yNTQgMTkuNTI2YTE3MS4yMyAxNzEuMjMgMCAwIDAtNi4zNzUgNS44NDhhMTU1Ljg2NiAxNTUuODY2IDAgMCAwLTQuMjQxLTMuOTE3QzEwMC43NTkgMy44MjkgNzcuNTg3LTQuODIyIDYzLjY3MyAzLjIzM0M1MC4zMyAxMC45NTcgNDYuMzc5IDMzLjg5IDUxLjk5NSA2Mi41ODhhMTcwLjk3NCAxNzAuOTc0IDAgMCAwIDEuODkyIDguNDhjLTMuMjguOTMyLTYuNDQ1IDEuOTI0LTkuNDc0IDIuOThDMTcuMzA5IDgzLjQ5OCAwIDk4LjMwNyAwIDExMy42NjhjMCAxNS44NjUgMTguNTgyIDMxLjc3OCA0Ni44MTIgNDEuNDI3YTE0NS41MiAxNDUuNTIgMCAwIDAgNi45MjEgMi4xNjVhMTY3LjQ2NyAxNjcuNDY3IDAgMCAwLTIuMDEgOS4xMzhjLTUuMzU0IDI4LjItMS4xNzMgNTAuNTkxIDEyLjEzNCA1OC4yNjZjMTMuNzQ0IDcuOTI2IDM2LjgxMi0uMjIgNTkuMjczLTE5Ljg1NWExNDUuNTY3IDE0NS41NjcgMCAwIDAgNS4zNDItNC45MjNhMTY4LjA2NCAxNjguMDY0IDAgMCAwIDYuOTIgNi4zMTRjMjEuNzU4IDE4LjcyMiA0My4yNDYgMjYuMjgyIDU2LjU0IDE4LjU4NmMxMy43MzEtNy45NDkgMTguMTk0LTMyLjAwMyAxMi40LTYxLjI2OGExNDUuMDE2IDE0NS4wMTYgMCAwIDAtMS41MzUtNi44NDJjMS42Mi0uNDggMy4yMS0uOTc0IDQuNzYtMS40ODhjMjkuMzQ4LTkuNzIzIDQ4LjQ0My0yNS40NDMgNDguNDQzLTQxLjUyYzAtMTUuNDE3LTE3Ljg2OC0zMC4zMjYtNDUuNTE3LTM5Ljg0NFptLTYuMzY1IDcwLjk4NGMtMS40LjQ2My0yLjgzNi45MS00LjMgMS4zNDVjLTMuMjQtMTAuMjU3LTcuNjEyLTIxLjE2My0xMi45NjMtMzIuNDMyYzUuMTA2LTExIDkuMzEtMjEuNzY3IDEyLjQ1OS0zMS45NTdjMi42MTkuNzU4IDUuMTYgMS41NTcgNy42MSAyLjRjMjMuNjkgOC4xNTYgMzguMTQgMjAuMjEzIDM4LjE0IDI5LjUwNGMwIDkuODk2LTE1LjYwNiAyMi43NDMtNDAuOTQ2IDMxLjE0Wm0tMTAuNTE0IDIwLjgzNGMyLjU2MiAxMi45NCAyLjkyNyAyNC42NCAxLjIzIDMzLjc4N2MtMS41MjQgOC4yMTktNC41OSAxMy42OTgtOC4zODIgMTUuODkzYy04LjA2NyA0LjY3LTI1LjMyLTEuNC00My45MjctMTcuNDEyYTE1Ni43MjYgMTU2LjcyNiAwIDAgMS02LjQzNy01Ljg3YzcuMjE0LTcuODg5IDE0LjQyMy0xNy4wNiAyMS40NTktMjcuMjQ2YzEyLjM3Ni0xLjA5OCAyNC4wNjgtMi44OTQgMzQuNjcxLTUuMzQ1YTEzNC4xNyAxMzQuMTcgMCAwIDEgMS4zODYgNi4xOTNaTTg3LjI3NiAyMTQuNTE1Yy03Ljg4MiAyLjc4My0xNC4xNiAyLjg2My0xNy45NTUuNjc1Yy04LjA3NS00LjY1Ny0xMS40MzItMjIuNjM2LTYuODUzLTQ2Ljc1MmExNTYuOTIzIDE1Ni45MjMgMCAwIDEgMS44NjktOC40OTljMTAuNDg2IDIuMzIgMjIuMDkzIDMuOTg4IDM0LjQ5OCA0Ljk5NGM3LjA4NCA5Ljk2NyAxNC41MDEgMTkuMTI4IDIxLjk3NiAyNy4xNWExMzQuNjY4IDEzNC42NjggMCAwIDEtNC44NzcgNC40OTJjLTkuOTMzIDguNjgyLTE5Ljg4NiAxNC44NDItMjguNjU4IDE3Ljk0Wk01MC4zNSAxNDQuNzQ3Yy0xMi40ODMtNC4yNjctMjIuNzkyLTkuODEyLTI5Ljg1OC0xNS44NjNjLTYuMzUtNS40MzctOS41NTUtMTAuODM2LTkuNTU1LTE1LjIxNmMwLTkuMzIyIDEzLjg5Ny0yMS4yMTIgMzcuMDc2LTI5LjI5M2MyLjgxMy0uOTggNS43NTctMS45MDUgOC44MTItMi43NzNjMy4yMDQgMTAuNDIgNy40MDYgMjEuMzE1IDEyLjQ3NyAzMi4zMzJjLTUuMTM3IDExLjE4LTkuMzk5IDIyLjI0OS0xMi42MzQgMzIuNzkyYTEzNC43MTggMTM0LjcxOCAwIDAgMS02LjMxOC0xLjk3OVptMTIuMzc4LTg0LjI2Yy00LjgxMS0yNC41ODctMS42MTYtNDMuMTM0IDYuNDI1LTQ3Ljc4OWM4LjU2NC00Ljk1OCAyNy41MDIgMi4xMTEgNDcuNDYzIDE5LjgzNWExNDQuMzE4IDE0NC4zMTggMCAwIDEgMy44NDEgMy41NDVjLTcuNDM4IDcuOTg3LTE0Ljc4NyAxNy4wOC0yMS44MDggMjYuOTg4Yy0xMi4wNCAxLjExNi0yMy41NjUgMi45MDgtMzQuMTYxIDUuMzA5YTE2MC4zNDIgMTYwLjM0MiAwIDAgMS0xLjc2LTcuODg3Wm0xMTAuNDI3IDI3LjI2OGEzNDcuOCAzNDcuOCAwIDAgMC03Ljc4NS0xMi44MDNjOC4xNjggMS4wMzMgMTUuOTk0IDIuNDA0IDIzLjM0MyA0LjA4Yy0yLjIwNiA3LjA3Mi00Ljk1NiAxNC40NjUtOC4xOTMgMjIuMDQ1YTM4MS4xNTEgMzgxLjE1MSAwIDAgMC03LjM2NS0xMy4zMjJabS00NS4wMzItNDMuODYxYzUuMDQ0IDUuNDY1IDEwLjA5NiAxMS41NjYgMTUuMDY1IDE4LjE4NmEzMjIuMDQgMzIyLjA0IDAgMCAwLTMwLjI1Ny0uMDA2YzQuOTc0LTYuNTU5IDEwLjA2OS0xMi42NTIgMTUuMTkyLTE4LjE4Wk04Mi44MDIgODcuODNhMzIzLjE2NyAzMjMuMTY3IDAgMCAwLTcuMjI3IDEzLjIzOGMtMy4xODQtNy41NTMtNS45MDktMTQuOTgtOC4xMzQtMjIuMTUyYzcuMzA0LTEuNjM0IDE1LjA5My0yLjk3IDIzLjIwOS0zLjk4NGEzMjEuNTI0IDMyMS41MjQgMCAwIDAtNy44NDggMTIuODk3Wm04LjA4MSA2NS4zNTJjLTguMzg1LS45MzYtMTYuMjkxLTIuMjAzLTIzLjU5My0zLjc5M2MyLjI2LTcuMyA1LjA0NS0xNC44ODUgOC4yOTgtMjIuNmEzMjEuMTg3IDMyMS4xODcgMCAwIDAgNy4yNTcgMTMuMjQ2YzIuNTk0IDQuNDggNS4yOCA4Ljg2OCA4LjAzOCAxMy4xNDdabTM3LjU0MiAzMS4wM2MtNS4xODQtNS41OTItMTAuMzU0LTExLjc3OS0xNS40MDMtMTguNDMzYzQuOTAyLjE5MiA5Ljg5OS4yOSAxNC45NzguMjljNS4yMTggMCAxMC4zNzYtLjExNyAxNS40NTMtLjM0M2MtNC45ODUgNi43NzQtMTAuMDE4IDEyLjk3LTE1LjAyOCAxOC40ODZabTUyLjE5OC01Ny44MTdjMy40MjIgNy44IDYuMzA2IDE1LjM0NSA4LjU5NiAyMi41MmMtNy40MjIgMS42OTQtMTUuNDM2IDMuMDU4LTIzLjg4IDQuMDcxYTM4Mi40MTcgMzgyLjQxNyAwIDAgMCA3Ljg1OS0xMy4wMjZhMzQ3LjQwMyAzNDcuNDAzIDAgMCAwIDcuNDI1LTEzLjU2NVptLTE2Ljg5OCA4LjEwMWEzNTguNTU3IDM1OC41NTcgMCAwIDEtMTIuMjgxIDE5LjgxNWEzMjkuNCAzMjkuNCAwIDAgMS0yMy40NDQuODIzYy03Ljk2NyAwLTE1LjcxNi0uMjQ4LTIzLjE3OC0uNzMyYTMxMC4yMDIgMzEwLjIwMiAwIDAgMS0xMi41MTMtMTkuODQ2aC4wMDFhMzA3LjQxIDMwNy40MSAwIDAgMS0xMC45MjMtMjAuNjI3YTMxMC4yNzggMzEwLjI3OCAwIDAgMSAxMC44OS0yMC42MzdsLS4wMDEuMDAxYTMwNy4zMTggMzA3LjMxOCAwIDAgMSAxMi40MTMtMTkuNzYxYzcuNjEzLS41NzYgMTUuNDItLjg3NiAyMy4zMS0uODc2SDEyOGM3LjkyNiAwIDE1Ljc0My4zMDMgMjMuMzU0Ljg4M2EzMjkuMzU3IDMyOS4zNTcgMCAwIDEgMTIuMzM1IDE5LjY5NWEzNTguNDg5IDM1OC40ODkgMCAwIDEgMTEuMDM2IDIwLjU0YTMyOS40NzIgMzI5LjQ3MiAwIDAgMS0xMSAyMC43MjJabTIyLjU2LTEyMi4xMjRjOC41NzIgNC45NDQgMTEuOTA2IDI0Ljg4MSA2LjUyIDUxLjAyNmMtLjM0NCAxLjY2OC0uNzMgMy4zNjctMS4xNSA1LjA5Yy0xMC42MjItMi40NTItMjIuMTU1LTQuMjc1LTM0LjIzLTUuNDA4Yy03LjAzNC0xMC4wMTctMTQuMzIzLTE5LjEyNC0yMS42NC0yNy4wMDhhMTYwLjc4OSAxNjAuNzg5IDAgMCAxIDUuODg4LTUuNGMxOC45LTE2LjQ0NyAzNi41NjQtMjIuOTQxIDQ0LjYxMi0xOC4zWk0xMjggOTAuODA4YzEyLjYyNSAwIDIyLjg2IDEwLjIzNSAyMi44NiAyMi44NnMtMTAuMjM1IDIyLjg2LTIyLjg2IDIyLjg2cy0yMi44Ni0xMC4yMzUtMjIuODYtMjIuODZzMTAuMjM1LTIyLjg2IDIyLjg2LTIyLjg2WiI+PC9wYXRoPjwvc3ZnPg==",sr="";function Ce(){const[L,d]=I.useState(0);return s.exports.jsxs("div",{className:"App",children:[s.exports.jsxs("div",{children:[s.exports.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:s.exports.jsx("img",{src:"/vite.svg",className:"logo",alt:"Vite logo"})}),s.exports.jsx("a",{href:"https://reactjs.org",target:"_blank",children:s.exports.jsx("img",{src:Oe,className:"logo react",alt:"React logo"})})]}),s.exports.jsx("h1",{children:"Vite + React"}),s.exports.jsxs("div",{className:"card",children:[s.exports.jsxs("button",{onClick:()=>d(w=>w+1),children:["count is ",L]}),s.exports.jsxs("p",{children:["Edit ",s.exports.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),s.exports.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}return Ce});