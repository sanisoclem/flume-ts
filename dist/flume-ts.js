import ve, { useState as ir } from "react";
var N = { exports: {} }, m = {};
var de;
function Mr() {
  if (de)
    return m;
  de = 1;
  var I = ve, L = Symbol.for("react.element"), p = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, Y = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(E, s, x) {
    var f, T = {}, d = null, R = null;
    x !== void 0 && (d = "" + x), s.key !== void 0 && (d = "" + s.key), s.ref !== void 0 && (R = s.ref);
    for (f in s)
      v.call(s, f) && !k.hasOwnProperty(f) && (T[f] = s[f]);
    if (E && E.defaultProps)
      for (f in s = E.defaultProps, s)
        T[f] === void 0 && (T[f] = s[f]);
    return { $$typeof: L, type: E, key: d, ref: R, props: T, _owner: Y.current };
  }
  return m.Fragment = p, m.jsx = S, m.jsxs = S, m;
}
var b = {};
var Ae;
function or() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var I = ve, L = Symbol.for("react.element"), p = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), E = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), q = Symbol.iterator, xe = "@@iterator";
    function ze(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var z = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Oe("error", e, t);
      }
    }
    function Oe(e, r, t) {
      {
        var n = z.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var M = t.map(function(u) {
          return String(u);
        });
        M.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var Ce = !1, pe = !1, Se = !1, he = !1, we = !1, X;
    X = Symbol.for("react.module.reference");
    function me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === k || we || e === Y || e === x || e === f || he || e === R || Ce || pe || Se || typeof e == "object" && e !== null && (e.$$typeof === d || e.$$typeof === T || e.$$typeof === S || e.$$typeof === E || e.$$typeof === s || e.$$typeof === X || e.getModuleId !== void 0));
    }
    function be(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function K(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case p:
          return "Portal";
        case k:
          return "Profiler";
        case Y:
          return "StrictMode";
        case x:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return K(r) + ".Consumer";
          case S:
            var t = e;
            return K(t._context) + ".Provider";
          case s:
            return be(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case d: {
            var i = e, M = i._payload, u = i._init;
            try {
              return y(u(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, h = 0, ee, re, te, ne, ae, ue, ie;
    function Me() {
    }
    Me.__reactDisabledLog = !0;
    function Ye() {
      {
        if (h === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, ue = console.groupCollapsed, ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        h++;
      }
    }
    function ke() {
      {
        if (h--, h === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: ee
            }),
            info: A({}, e, {
              value: re
            }),
            warn: A({}, e, {
              value: te
            }),
            error: A({}, e, {
              value: ne
            }),
            group: A({}, e, {
              value: ae
            }),
            groupCollapsed: A({}, e, {
              value: ue
            }),
            groupEnd: A({}, e, {
              value: ie
            })
          });
        }
        h < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = z.ReactCurrentDispatcher, V;
    function _(e, r, t) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            V = n && n[1] || "";
          }
        return `
` + V + e;
      }
    }
    var $ = !1, U;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Re();
    }
    function oe(e, r) {
      if (!e || $)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      $ = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = F.current, F.current = null, Ye();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (D) {
              n = D;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (D) {
              n = D;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            n = D;
          }
          e();
        }
      } catch (D) {
        if (D && n && typeof D.stack == "string") {
          for (var a = D.stack.split(`
`), j = n.stack.split(`
`), o = a.length - 1, c = j.length - 1; o >= 1 && c >= 0 && a[o] !== j[c]; )
            c--;
          for (; o >= 1 && c >= 0; o--, c--)
            if (a[o] !== j[c]) {
              if (o !== 1 || c !== 1)
                do
                  if (o--, c--, c < 0 || a[o] !== j[c]) {
                    var g = `
` + a[o].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, g), g;
                  }
                while (o >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        $ = !1, F.current = M, ke(), Error.prepareStackTrace = i;
      }
      var C = e ? e.displayName || e.name : "", Ee = C ? _(C) : "";
      return typeof e == "function" && U.set(e, Ee), Ee;
    }
    function _e(e, r, t) {
      return oe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return oe(e, Ue(e));
      if (typeof e == "string")
        return _(e);
      switch (e) {
        case x:
          return _("Suspense");
        case f:
          return _("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return _e(e.render);
          case T:
            return Q(e.type, r, t);
          case d: {
            var n = e, i = n._payload, M = n._init;
            try {
              return Q(M(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var P = Object.prototype.hasOwnProperty, ce = {}, se = z.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = Q(e.type, e._source, r ? r.type : null);
        se.setExtraStackFrame(t);
      } else
        se.setExtraStackFrame(null);
    }
    function Qe(e, r, t, n, i) {
      {
        var M = Function.call.bind(P);
        for (var u in e)
          if (M(e, u)) {
            var a = void 0;
            try {
              if (typeof e[u] != "function") {
                var j = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              a = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (o) {
              a = o;
            }
            a && !(a instanceof Error) && (W(i), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof a), W(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, W(i), l("Failed %s type: %s", t, a.message), W(null));
          }
      }
    }
    var Pe = Array.isArray;
    function G(e) {
      return Pe(e);
    }
    function We(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Fe(e) {
      try {
        return le(e), !1;
      } catch {
        return !0;
      }
    }
    function le(e) {
      return "" + e;
    }
    function je(e) {
      if (Fe(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(e)), le(e);
    }
    var w = z.ReactCurrentOwner, Ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fe, Ne, Z;
    Z = {};
    function $e(e) {
      if (P.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && w.current && r && w.current.stateNode !== r) {
        var t = y(w.current.type);
        Z[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(w.current.type), e.ref), Z[t] = !0);
      }
    }
    function Be(e, r) {
      {
        var t = function() {
          fe || (fe = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Je(e, r) {
      {
        var t = function() {
          Ne || (Ne = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var He = function(e, r, t, n, i, M, u) {
      var a = {
        $$typeof: L,
        type: e,
        key: r,
        ref: t,
        props: u,
        _owner: M
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function qe(e, r, t, n, i) {
      {
        var M, u = {}, a = null, j = null;
        t !== void 0 && (je(t), a = "" + t), Ge(r) && (je(r.key), a = "" + r.key), $e(r) && (j = r.ref, Ze(r, i));
        for (M in r)
          P.call(r, M) && !Ve.hasOwnProperty(M) && (u[M] = r[M]);
        if (e && e.defaultProps) {
          var o = e.defaultProps;
          for (M in o)
            u[M] === void 0 && (u[M] = o[M]);
        }
        if (a || j) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Be(u, c), j && Je(u, c);
        }
        return He(e, a, j, i, n, w.current, u);
      }
    }
    var B = z.ReactCurrentOwner, ge = z.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = Q(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === L;
    }
    function Te() {
      {
        if (B.current) {
          var e = y(B.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Xe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ye = {};
    function Ke(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = Ke(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== B.current && (n = " It was passed a child from " + y(e._owner.type) + "."), O(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), O(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && De(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = ze(e);
          if (typeof i == "function" && i !== e.entries)
            for (var M = i.call(e), u; !(u = M.next()).done; )
              H(u.value) && De(u.value, r);
        }
      }
    }
    function er(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !J) {
          J = !0;
          var i = y(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            O(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    function Le(e, r, t, n, i, M) {
      {
        var u = me(e);
        if (!u) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = Xe(i);
          j ? a += j : a += Te();
          var o;
          e === null ? o = "null" : G(e) ? o = "array" : e !== void 0 && e.$$typeof === L ? (o = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : o = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", o, a);
        }
        var c = qe(e, r, t, i, M);
        if (c == null)
          return c;
        if (u) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (G(g)) {
                for (var C = 0; C < g.length; C++)
                  Ie(g[C], e);
                Object.freeze && Object.freeze(g);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(g, e);
        }
        return e === v ? rr(c) : er(c), c;
      }
    }
    function tr(e, r, t) {
      return Le(e, r, t, !0);
    }
    function nr(e, r, t) {
      return Le(e, r, t, !1);
    }
    var ar = nr, ur = tr;
    b.Fragment = v, b.jsx = ar, b.jsxs = ur;
  }()), b;
}
(function(I) {
  process.env.NODE_ENV === "production" ? I.exports = Mr() : I.exports = or();
})(N);
const cr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM1LjkzIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDIyOCI+PHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTIxMC40ODMgNzMuODI0YTE3MS40OSAxNzEuNDkgMCAwIDAtOC4yNC0yLjU5N2MuNDY1LTEuOS44OTMtMy43NzcgMS4yNzMtNS42MjFjNi4yMzgtMzAuMjgxIDIuMTYtNTQuNjc2LTExLjc2OS02Mi43MDhjLTEzLjM1NS03LjctMzUuMTk2LjMyOS01Ny4yNTQgMTkuNTI2YTE3MS4yMyAxNzEuMjMgMCAwIDAtNi4zNzUgNS44NDhhMTU1Ljg2NiAxNTUuODY2IDAgMCAwLTQuMjQxLTMuOTE3QzEwMC43NTkgMy44MjkgNzcuNTg3LTQuODIyIDYzLjY3MyAzLjIzM0M1MC4zMyAxMC45NTcgNDYuMzc5IDMzLjg5IDUxLjk5NSA2Mi41ODhhMTcwLjk3NCAxNzAuOTc0IDAgMCAwIDEuODkyIDguNDhjLTMuMjguOTMyLTYuNDQ1IDEuOTI0LTkuNDc0IDIuOThDMTcuMzA5IDgzLjQ5OCAwIDk4LjMwNyAwIDExMy42NjhjMCAxNS44NjUgMTguNTgyIDMxLjc3OCA0Ni44MTIgNDEuNDI3YTE0NS41MiAxNDUuNTIgMCAwIDAgNi45MjEgMi4xNjVhMTY3LjQ2NyAxNjcuNDY3IDAgMCAwLTIuMDEgOS4xMzhjLTUuMzU0IDI4LjItMS4xNzMgNTAuNTkxIDEyLjEzNCA1OC4yNjZjMTMuNzQ0IDcuOTI2IDM2LjgxMi0uMjIgNTkuMjczLTE5Ljg1NWExNDUuNTY3IDE0NS41NjcgMCAwIDAgNS4zNDItNC45MjNhMTY4LjA2NCAxNjguMDY0IDAgMCAwIDYuOTIgNi4zMTRjMjEuNzU4IDE4LjcyMiA0My4yNDYgMjYuMjgyIDU2LjU0IDE4LjU4NmMxMy43MzEtNy45NDkgMTguMTk0LTMyLjAwMyAxMi40LTYxLjI2OGExNDUuMDE2IDE0NS4wMTYgMCAwIDAtMS41MzUtNi44NDJjMS42Mi0uNDggMy4yMS0uOTc0IDQuNzYtMS40ODhjMjkuMzQ4LTkuNzIzIDQ4LjQ0My0yNS40NDMgNDguNDQzLTQxLjUyYzAtMTUuNDE3LTE3Ljg2OC0zMC4zMjYtNDUuNTE3LTM5Ljg0NFptLTYuMzY1IDcwLjk4NGMtMS40LjQ2My0yLjgzNi45MS00LjMgMS4zNDVjLTMuMjQtMTAuMjU3LTcuNjEyLTIxLjE2My0xMi45NjMtMzIuNDMyYzUuMTA2LTExIDkuMzEtMjEuNzY3IDEyLjQ1OS0zMS45NTdjMi42MTkuNzU4IDUuMTYgMS41NTcgNy42MSAyLjRjMjMuNjkgOC4xNTYgMzguMTQgMjAuMjEzIDM4LjE0IDI5LjUwNGMwIDkuODk2LTE1LjYwNiAyMi43NDMtNDAuOTQ2IDMxLjE0Wm0tMTAuNTE0IDIwLjgzNGMyLjU2MiAxMi45NCAyLjkyNyAyNC42NCAxLjIzIDMzLjc4N2MtMS41MjQgOC4yMTktNC41OSAxMy42OTgtOC4zODIgMTUuODkzYy04LjA2NyA0LjY3LTI1LjMyLTEuNC00My45MjctMTcuNDEyYTE1Ni43MjYgMTU2LjcyNiAwIDAgMS02LjQzNy01Ljg3YzcuMjE0LTcuODg5IDE0LjQyMy0xNy4wNiAyMS40NTktMjcuMjQ2YzEyLjM3Ni0xLjA5OCAyNC4wNjgtMi44OTQgMzQuNjcxLTUuMzQ1YTEzNC4xNyAxMzQuMTcgMCAwIDEgMS4zODYgNi4xOTNaTTg3LjI3NiAyMTQuNTE1Yy03Ljg4MiAyLjc4My0xNC4xNiAyLjg2My0xNy45NTUuNjc1Yy04LjA3NS00LjY1Ny0xMS40MzItMjIuNjM2LTYuODUzLTQ2Ljc1MmExNTYuOTIzIDE1Ni45MjMgMCAwIDEgMS44NjktOC40OTljMTAuNDg2IDIuMzIgMjIuMDkzIDMuOTg4IDM0LjQ5OCA0Ljk5NGM3LjA4NCA5Ljk2NyAxNC41MDEgMTkuMTI4IDIxLjk3NiAyNy4xNWExMzQuNjY4IDEzNC42NjggMCAwIDEtNC44NzcgNC40OTJjLTkuOTMzIDguNjgyLTE5Ljg4NiAxNC44NDItMjguNjU4IDE3Ljk0Wk01MC4zNSAxNDQuNzQ3Yy0xMi40ODMtNC4yNjctMjIuNzkyLTkuODEyLTI5Ljg1OC0xNS44NjNjLTYuMzUtNS40MzctOS41NTUtMTAuODM2LTkuNTU1LTE1LjIxNmMwLTkuMzIyIDEzLjg5Ny0yMS4yMTIgMzcuMDc2LTI5LjI5M2MyLjgxMy0uOTggNS43NTctMS45MDUgOC44MTItMi43NzNjMy4yMDQgMTAuNDIgNy40MDYgMjEuMzE1IDEyLjQ3NyAzMi4zMzJjLTUuMTM3IDExLjE4LTkuMzk5IDIyLjI0OS0xMi42MzQgMzIuNzkyYTEzNC43MTggMTM0LjcxOCAwIDAgMS02LjMxOC0xLjk3OVptMTIuMzc4LTg0LjI2Yy00LjgxMS0yNC41ODctMS42MTYtNDMuMTM0IDYuNDI1LTQ3Ljc4OWM4LjU2NC00Ljk1OCAyNy41MDIgMi4xMTEgNDcuNDYzIDE5LjgzNWExNDQuMzE4IDE0NC4zMTggMCAwIDEgMy44NDEgMy41NDVjLTcuNDM4IDcuOTg3LTE0Ljc4NyAxNy4wOC0yMS44MDggMjYuOTg4Yy0xMi4wNCAxLjExNi0yMy41NjUgMi45MDgtMzQuMTYxIDUuMzA5YTE2MC4zNDIgMTYwLjM0MiAwIDAgMS0xLjc2LTcuODg3Wm0xMTAuNDI3IDI3LjI2OGEzNDcuOCAzNDcuOCAwIDAgMC03Ljc4NS0xMi44MDNjOC4xNjggMS4wMzMgMTUuOTk0IDIuNDA0IDIzLjM0MyA0LjA4Yy0yLjIwNiA3LjA3Mi00Ljk1NiAxNC40NjUtOC4xOTMgMjIuMDQ1YTM4MS4xNTEgMzgxLjE1MSAwIDAgMC03LjM2NS0xMy4zMjJabS00NS4wMzItNDMuODYxYzUuMDQ0IDUuNDY1IDEwLjA5NiAxMS41NjYgMTUuMDY1IDE4LjE4NmEzMjIuMDQgMzIyLjA0IDAgMCAwLTMwLjI1Ny0uMDA2YzQuOTc0LTYuNTU5IDEwLjA2OS0xMi42NTIgMTUuMTkyLTE4LjE4Wk04Mi44MDIgODcuODNhMzIzLjE2NyAzMjMuMTY3IDAgMCAwLTcuMjI3IDEzLjIzOGMtMy4xODQtNy41NTMtNS45MDktMTQuOTgtOC4xMzQtMjIuMTUyYzcuMzA0LTEuNjM0IDE1LjA5My0yLjk3IDIzLjIwOS0zLjk4NGEzMjEuNTI0IDMyMS41MjQgMCAwIDAtNy44NDggMTIuODk3Wm04LjA4MSA2NS4zNTJjLTguMzg1LS45MzYtMTYuMjkxLTIuMjAzLTIzLjU5My0zLjc5M2MyLjI2LTcuMyA1LjA0NS0xNC44ODUgOC4yOTgtMjIuNmEzMjEuMTg3IDMyMS4xODcgMCAwIDAgNy4yNTcgMTMuMjQ2YzIuNTk0IDQuNDggNS4yOCA4Ljg2OCA4LjAzOCAxMy4xNDdabTM3LjU0MiAzMS4wM2MtNS4xODQtNS41OTItMTAuMzU0LTExLjc3OS0xNS40MDMtMTguNDMzYzQuOTAyLjE5MiA5Ljg5OS4yOSAxNC45NzguMjljNS4yMTggMCAxMC4zNzYtLjExNyAxNS40NTMtLjM0M2MtNC45ODUgNi43NzQtMTAuMDE4IDEyLjk3LTE1LjAyOCAxOC40ODZabTUyLjE5OC01Ny44MTdjMy40MjIgNy44IDYuMzA2IDE1LjM0NSA4LjU5NiAyMi41MmMtNy40MjIgMS42OTQtMTUuNDM2IDMuMDU4LTIzLjg4IDQuMDcxYTM4Mi40MTcgMzgyLjQxNyAwIDAgMCA3Ljg1OS0xMy4wMjZhMzQ3LjQwMyAzNDcuNDAzIDAgMCAwIDcuNDI1LTEzLjU2NVptLTE2Ljg5OCA4LjEwMWEzNTguNTU3IDM1OC41NTcgMCAwIDEtMTIuMjgxIDE5LjgxNWEzMjkuNCAzMjkuNCAwIDAgMS0yMy40NDQuODIzYy03Ljk2NyAwLTE1LjcxNi0uMjQ4LTIzLjE3OC0uNzMyYTMxMC4yMDIgMzEwLjIwMiAwIDAgMS0xMi41MTMtMTkuODQ2aC4wMDFhMzA3LjQxIDMwNy40MSAwIDAgMS0xMC45MjMtMjAuNjI3YTMxMC4yNzggMzEwLjI3OCAwIDAgMSAxMC44OS0yMC42MzdsLS4wMDEuMDAxYTMwNy4zMTggMzA3LjMxOCAwIDAgMSAxMi40MTMtMTkuNzYxYzcuNjEzLS41NzYgMTUuNDItLjg3NiAyMy4zMS0uODc2SDEyOGM3LjkyNiAwIDE1Ljc0My4zMDMgMjMuMzU0Ljg4M2EzMjkuMzU3IDMyOS4zNTcgMCAwIDEgMTIuMzM1IDE5LjY5NWEzNTguNDg5IDM1OC40ODkgMCAwIDEgMTEuMDM2IDIwLjU0YTMyOS40NzIgMzI5LjQ3MiAwIDAgMS0xMSAyMC43MjJabTIyLjU2LTEyMi4xMjRjOC41NzIgNC45NDQgMTEuOTA2IDI0Ljg4MSA2LjUyIDUxLjAyNmMtLjM0NCAxLjY2OC0uNzMgMy4zNjctMS4xNSA1LjA5Yy0xMC42MjItMi40NTItMjIuMTU1LTQuMjc1LTM0LjIzLTUuNDA4Yy03LjAzNC0xMC4wMTctMTQuMzIzLTE5LjEyNC0yMS42NC0yNy4wMDhhMTYwLjc4OSAxNjAuNzg5IDAgMCAxIDUuODg4LTUuNGMxOC45LTE2LjQ0NyAzNi41NjQtMjIuOTQxIDQ0LjYxMi0xOC4zWk0xMjggOTAuODA4YzEyLjYyNSAwIDIyLjg2IDEwLjIzNSAyMi44NiAyMi44NnMtMTAuMjM1IDIyLjg2LTIyLjg2IDIyLjg2cy0yMi44Ni0xMC4yMzUtMjIuODYtMjIuODZzMTAuMjM1LTIyLjg2IDIyLjg2LTIyLjg2WiI+PC9wYXRoPjwvc3ZnPg==";
function lr() {
  const [I, L] = ir(0);
  return /* @__PURE__ */ N.exports.jsxs("div", { className: "App", children: [
    /* @__PURE__ */ N.exports.jsxs("div", { children: [
      /* @__PURE__ */ N.exports.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ N.exports.jsx("img", { src: "/vite.svg", className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ N.exports.jsx("a", { href: "https://reactjs.org", target: "_blank", children: /* @__PURE__ */ N.exports.jsx("img", { src: cr, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ N.exports.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ N.exports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ N.exports.jsxs("button", { onClick: () => L((p) => p + 1), children: [
        "count is ",
        I
      ] }),
      /* @__PURE__ */ N.exports.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ N.exports.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ N.exports.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
export {
  lr as default
};
