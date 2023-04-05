;(function () {
  try {
    var elementStyle = document.createElement('style')
    elementStyle.appendChild(document.createTextNode(''))
    document.head.appendChild(elementStyle)
  } catch (e) {
    console.error('vite-plugin-css-injected-by-js', e)
  }
})()
;(function () {
  try {
    var elementStyle = document.createElement('style')
    elementStyle.appendChild(
      document.createTextNode(
        '*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.m-1,[m-1=""]{margin:0.25rem;}.cursor-pointer,[cursor-pointer=""]{cursor:pointer;}.rounded-lg,[rounded-lg=""]{border-radius:0.5rem;}.border-none,[border-none=""]{border-style:none;}.bg-\\$\\{props\\.color\\}-500{background-color:var(--\\{props\\.color\\}-500);}.bg-blue-500{--un-bg-opacity:1;background-color:rgba(59,130,246,var(--un-bg-opacity));}.bg-gray-500{--un-bg-opacity:1;background-color:rgba(107,114,128,var(--un-bg-opacity));}.bg-green-500{--un-bg-opacity:1;background-color:rgba(34,197,94,var(--un-bg-opacity));}.bg-indigo-500{--un-bg-opacity:1;background-color:rgba(99,102,241,var(--un-bg-opacity));}.bg-pink-500{--un-bg-opacity:1;background-color:rgba(236,72,153,var(--un-bg-opacity));}.bg-purple-500{--un-bg-opacity:1;background-color:rgba(168,85,247,var(--un-bg-opacity));}.bg-red-500{--un-bg-opacity:1;background-color:rgba(239,68,68,var(--un-bg-opacity));}.bg-yellow-500{--un-bg-opacity:1;background-color:rgba(234,179,8,var(--un-bg-opacity));}.hover\\:bg-\\$\\{props\\.color\\}-700:hover{background-color:var(--\\{props\\.color\\}-700);}.hover\\:bg-blue-700:hover{--un-bg-opacity:1;background-color:rgba(29,78,216,var(--un-bg-opacity));}.hover\\:bg-gray-700:hover{--un-bg-opacity:1;background-color:rgba(55,65,81,var(--un-bg-opacity));}.hover\\:bg-green-700:hover{--un-bg-opacity:1;background-color:rgba(21,128,61,var(--un-bg-opacity));}.hover\\:bg-indigo-700:hover{--un-bg-opacity:1;background-color:rgba(67,56,202,var(--un-bg-opacity));}.hover\\:bg-pink-700:hover{--un-bg-opacity:1;background-color:rgba(190,24,93,var(--un-bg-opacity));}.hover\\:bg-purple-700:hover{--un-bg-opacity:1;background-color:rgba(126,34,206,var(--un-bg-opacity));}.hover\\:bg-red-700:hover{--un-bg-opacity:1;background-color:rgba(185,28,28,var(--un-bg-opacity));}.hover\\:bg-yellow-700:hover{--un-bg-opacity:1;background-color:rgba(161,98,7,var(--un-bg-opacity));}.px-4,[px-4=""]{padding-left:1rem;padding-right:1rem;}.py-2,[py-2=""]{padding-top:0.5rem;padding-bottom:0.5rem;}.font-semibold,[font-semibold=""]{font-weight:600;}.text-white,[text-white=""]{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}.shadow-md,[shadow-md=""]{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgba(0,0,0,0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgba(0,0,0,0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.my-button{background:#fff;border:1px solid #e4e4e4;padding:8px 12px;border-radius:4px;cursor:pointer;transition:all .3s}.my-button:hover{background:#f3f3f3}\n*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.m-1,[m-1=""]{margin:0.25rem;}.cursor-pointer,[cursor-pointer=""]{cursor:pointer;}.rounded-lg,[rounded-lg=""]{border-radius:0.5rem;}.border-none,[border-none=""]{border-style:none;}.bg-\\$\\{props\\.color\\}-500{background-color:var(--\\{props\\.color\\}-500);}.bg-blue-500{--un-bg-opacity:1;background-color:rgba(59,130,246,var(--un-bg-opacity));}.bg-gray-500{--un-bg-opacity:1;background-color:rgba(107,114,128,var(--un-bg-opacity));}.bg-green-500{--un-bg-opacity:1;background-color:rgba(34,197,94,var(--un-bg-opacity));}.bg-indigo-500{--un-bg-opacity:1;background-color:rgba(99,102,241,var(--un-bg-opacity));}.bg-pink-500{--un-bg-opacity:1;background-color:rgba(236,72,153,var(--un-bg-opacity));}.bg-purple-500{--un-bg-opacity:1;background-color:rgba(168,85,247,var(--un-bg-opacity));}.bg-red-500{--un-bg-opacity:1;background-color:rgba(239,68,68,var(--un-bg-opacity));}.bg-yellow-500{--un-bg-opacity:1;background-color:rgba(234,179,8,var(--un-bg-opacity));}.hover\\:bg-\\$\\{props\\.color\\}-700:hover{background-color:var(--\\{props\\.color\\}-700);}.hover\\:bg-blue-700:hover{--un-bg-opacity:1;background-color:rgba(29,78,216,var(--un-bg-opacity));}.hover\\:bg-gray-700:hover{--un-bg-opacity:1;background-color:rgba(55,65,81,var(--un-bg-opacity));}.hover\\:bg-green-700:hover{--un-bg-opacity:1;background-color:rgba(21,128,61,var(--un-bg-opacity));}.hover\\:bg-indigo-700:hover{--un-bg-opacity:1;background-color:rgba(67,56,202,var(--un-bg-opacity));}.hover\\:bg-pink-700:hover{--un-bg-opacity:1;background-color:rgba(190,24,93,var(--un-bg-opacity));}.hover\\:bg-purple-700:hover{--un-bg-opacity:1;background-color:rgba(126,34,206,var(--un-bg-opacity));}.hover\\:bg-red-700:hover{--un-bg-opacity:1;background-color:rgba(185,28,28,var(--un-bg-opacity));}.hover\\:bg-yellow-700:hover{--un-bg-opacity:1;background-color:rgba(161,98,7,var(--un-bg-opacity));}.px-4,[px-4=""]{padding-left:1rem;padding-right:1rem;}.py-2,[py-2=""]{padding-top:0.5rem;padding-bottom:0.5rem;}.font-semibold,[font-semibold=""]{font-weight:600;}.text-white,[text-white=""]{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}.shadow-md,[shadow-md=""]{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgba(0,0,0,0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgba(0,0,0,0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.my-button{background:#fff;border:1px solid #e4e4e4;padding:8px 12px;border-radius:4px;cursor:pointer;transition:all .3s}.my-button:hover{background:#f3f3f3}'
      )
    )
    document.head.appendChild(elementStyle)
  } catch (e) {
    console.error('vite-plugin-css-injected-by-js', e)
  }
})()
var peacockui = (function (e, r) {
  'use strict'
  var t = document.createElement('style')
  ;(t.textContent =
    '*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.m-1,[m-1=""]{margin:0.25rem;}.cursor-pointer,[cursor-pointer=""]{cursor:pointer;}.rounded-lg,[rounded-lg=""]{border-radius:0.5rem;}.border-none,[border-none=""]{border-style:none;}.bg-${props.color}-500{background-color:var(--{props.color}-500);}.bg-blue-500{--un-bg-opacity:1;background-color:rgba(59,130,246,var(--un-bg-opacity));}.bg-gray-500{--un-bg-opacity:1;background-color:rgba(107,114,128,var(--un-bg-opacity));}.bg-green-500{--un-bg-opacity:1;background-color:rgba(34,197,94,var(--un-bg-opacity));}.bg-indigo-500{--un-bg-opacity:1;background-color:rgba(99,102,241,var(--un-bg-opacity));}.bg-pink-500{--un-bg-opacity:1;background-color:rgba(236,72,153,var(--un-bg-opacity));}.bg-purple-500{--un-bg-opacity:1;background-color:rgba(168,85,247,var(--un-bg-opacity));}.bg-red-500{--un-bg-opacity:1;background-color:rgba(239,68,68,var(--un-bg-opacity));}.bg-yellow-500{--un-bg-opacity:1;background-color:rgba(234,179,8,var(--un-bg-opacity));}.hover:bg-${props.color}-700:hover{background-color:var(--{props.color}-700);}.hover:bg-blue-700:hover{--un-bg-opacity:1;background-color:rgba(29,78,216,var(--un-bg-opacity));}.hover:bg-gray-700:hover{--un-bg-opacity:1;background-color:rgba(55,65,81,var(--un-bg-opacity));}.hover:bg-green-700:hover{--un-bg-opacity:1;background-color:rgba(21,128,61,var(--un-bg-opacity));}.hover:bg-indigo-700:hover{--un-bg-opacity:1;background-color:rgba(67,56,202,var(--un-bg-opacity));}.hover:bg-pink-700:hover{--un-bg-opacity:1;background-color:rgba(190,24,93,var(--un-bg-opacity));}.hover:bg-purple-700:hover{--un-bg-opacity:1;background-color:rgba(126,34,206,var(--un-bg-opacity));}.hover:bg-red-700:hover{--un-bg-opacity:1;background-color:rgba(185,28,28,var(--un-bg-opacity));}.hover:bg-yellow-700:hover{--un-bg-opacity:1;background-color:rgba(161,98,7,var(--un-bg-opacity));}.px-4,[px-4=""]{padding-left:1rem;padding-right:1rem;}.py-2,[py-2=""]{padding-top:0.5rem;padding-bottom:0.5rem;}.font-semibold,[font-semibold=""]{font-weight:600;}.text-white,[text-white=""]{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}.shadow-md,[shadow-md=""]{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgba(0,0,0,0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgba(0,0,0,0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.my-button{background:#fff;border:1px solid #e4e4e4;padding:8px 12px;border-radius:4px;cursor:pointer;transition:all .3s}.my-button:hover{background:#f3f3f3}\n'),
    document.head.appendChild(t)
  var n,
    o = {},
    a = {}
  var i,
    c,
    s = {}
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ function u() {
    return (
      i ||
        ((i = 1),
        'production' !== process.env.NODE_ENV &&
          (function () {
            var e = r,
              t = Symbol.for('react.element'),
              n = Symbol.for('react.portal'),
              o = Symbol.for('react.fragment'),
              a = Symbol.for('react.strict_mode'),
              i = Symbol.for('react.profiler'),
              c = Symbol.for('react.provider'),
              u = Symbol.for('react.context'),
              l = Symbol.for('react.forward_ref'),
              f = Symbol.for('react.suspense'),
              p = Symbol.for('react.suspense_list'),
              y = Symbol.for('react.memo'),
              d = Symbol.for('react.lazy'),
              v = Symbol.for('react.offscreen'),
              m = Symbol.iterator
            var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            function b(e) {
              for (
                var r = arguments.length,
                  t = new Array(r > 1 ? r - 1 : 0),
                  n = 1;
                n < r;
                n++
              )
                t[n - 1] = arguments[n]
              h('error', e, t)
            }
            function h(e, r, t) {
              var n = g.ReactDebugCurrentFrame.getStackAddendum()
              '' !== n && ((r += '%s'), (t = t.concat([n])))
              var o = t.map(function (e) {
                return String(e)
              })
              o.unshift('Warning: ' + r),
                Function.prototype.apply.call(console[e], console, o)
            }
            var _
            function k(e) {
              return e.displayName || 'Context'
            }
            function w(e) {
              if (null == e) return null
              if (
                ('number' == typeof e.tag &&
                  b(
                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                  ),
                'function' == typeof e)
              )
                return e.displayName || e.name || null
              if ('string' == typeof e) return e
              switch (e) {
                case o:
                  return 'Fragment'
                case n:
                  return 'Portal'
                case i:
                  return 'Profiler'
                case a:
                  return 'StrictMode'
                case f:
                  return 'Suspense'
                case p:
                  return 'SuspenseList'
              }
              if ('object' == typeof e)
                switch (e.$$typeof) {
                  case u:
                    return k(e) + '.Consumer'
                  case c:
                    return k(e._context) + '.Provider'
                  case l:
                    return (function (e, r, t) {
                      var n = e.displayName
                      if (n) return n
                      var o = r.displayName || r.name || ''
                      return '' !== o ? t + '(' + o + ')' : t
                    })(e, e.render, 'ForwardRef')
                  case y:
                    var r = e.displayName || null
                    return null !== r ? r : w(e.type) || 'Memo'
                  case d:
                    var t = e,
                      s = t._payload,
                      v = t._init
                    try {
                      return w(v(s))
                    } catch (m) {
                      return null
                    }
                }
              return null
            }
            _ = Symbol.for('react.module.reference')
            var S,
              O,
              j,
              R,
              E,
              x,
              P,
              T = Object.assign,
              $ = 0
            function N() {}
            N.__reactDisabledLog = !0
            var C,
              D = g.ReactCurrentDispatcher
            function F(e, r, t) {
              if (void 0 === C)
                try {
                  throw Error()
                } catch (o) {
                  var n = o.stack.trim().match(/\n( *(at )?)/)
                  C = (n && n[1]) || ''
                }
              return '\n' + C + e
            }
            var I,
              L = !1,
              A = 'function' == typeof WeakMap ? WeakMap : Map
            function W(e, r) {
              if (!e || L) return ''
              var t,
                n = I.get(e)
              if (void 0 !== n) return n
              L = !0
              var o,
                a = Error.prepareStackTrace
              ;(Error.prepareStackTrace = void 0),
                (o = D.current),
                (D.current = null),
                (function () {
                  if (0 === $) {
                    ;(S = console.log),
                      (O = console.info),
                      (j = console.warn),
                      (R = console.error),
                      (E = console.group),
                      (x = console.groupCollapsed),
                      (P = console.groupEnd)
                    var e = {
                      configurable: !0,
                      enumerable: !0,
                      value: N,
                      writable: !0
                    }
                    Object.defineProperties(console, {
                      info: e,
                      log: e,
                      warn: e,
                      error: e,
                      group: e,
                      groupCollapsed: e,
                      groupEnd: e
                    })
                  }
                  $++
                })()
              try {
                if (r) {
                  var i = function () {
                    throw Error()
                  }
                  if (
                    (Object.defineProperty(i.prototype, 'props', {
                      set: function () {
                        throw Error()
                      }
                    }),
                    'object' == typeof Reflect && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(i, [])
                    } catch (d) {
                      t = d
                    }
                    Reflect.construct(e, [], i)
                  } else {
                    try {
                      i.call()
                    } catch (d) {
                      t = d
                    }
                    e.call(i.prototype)
                  }
                } else {
                  try {
                    throw Error()
                  } catch (d) {
                    t = d
                  }
                  e()
                }
              } catch (v) {
                if (v && t && 'string' == typeof v.stack) {
                  for (
                    var c = v.stack.split('\n'),
                      s = t.stack.split('\n'),
                      u = c.length - 1,
                      l = s.length - 1;
                    u >= 1 && l >= 0 && c[u] !== s[l];

                  )
                    l--
                  for (; u >= 1 && l >= 0; u--, l--)
                    if (c[u] !== s[l]) {
                      if (1 !== u || 1 !== l)
                        do {
                          if ((u--, --l < 0 || c[u] !== s[l])) {
                            var f = '\n' + c[u].replace(' at new ', ' at ')
                            return (
                              e.displayName &&
                                f.includes('<anonymous>') &&
                                (f = f.replace('<anonymous>', e.displayName)),
                              'function' == typeof e && I.set(e, f),
                              f
                            )
                          }
                        } while (u >= 1 && l >= 0)
                      break
                    }
                }
              } finally {
                ;(L = !1),
                  (D.current = o),
                  (function () {
                    if (0 == --$) {
                      var e = { configurable: !0, enumerable: !0, writable: !0 }
                      Object.defineProperties(console, {
                        log: T({}, e, { value: S }),
                        info: T({}, e, { value: O }),
                        warn: T({}, e, { value: j }),
                        error: T({}, e, { value: R }),
                        group: T({}, e, { value: E }),
                        groupCollapsed: T({}, e, { value: x }),
                        groupEnd: T({}, e, { value: P })
                      })
                    }
                    $ < 0 &&
                      b(
                        'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
                      )
                  })(),
                  (Error.prepareStackTrace = a)
              }
              var p = e ? e.displayName || e.name : '',
                y = p ? F(p) : ''
              return 'function' == typeof e && I.set(e, y), y
            }
            function U(e, r, t) {
              if (null == e) return ''
              if ('function' == typeof e)
                return W(e, !(!(n = e.prototype) || !n.isReactComponent))
              var n
              if ('string' == typeof e) return F(e)
              switch (e) {
                case f:
                  return F('Suspense')
                case p:
                  return F('SuspenseList')
              }
              if ('object' == typeof e)
                switch (e.$$typeof) {
                  case l:
                    return W(e.render, !1)
                  case y:
                    return U(e.type, r, t)
                  case d:
                    var o = e,
                      a = o._payload,
                      i = o._init
                    try {
                      return U(i(a), r, t)
                    } catch (c) {}
                }
              return ''
            }
            I = new A()
            var z = Object.prototype.hasOwnProperty,
              M = {},
              Y = g.ReactDebugCurrentFrame
            function B(e) {
              if (e) {
                var r = e._owner,
                  t = U(e.type, e._source, r ? r.type : null)
                Y.setExtraStackFrame(t)
              } else Y.setExtraStackFrame(null)
            }
            var V = Array.isArray
            function q(e) {
              return V(e)
            }
            function H(e) {
              return '' + e
            }
            function J(e) {
              if (
                (function (e) {
                  try {
                    return H(e), !1
                  } catch (r) {
                    return !0
                  }
                })(e)
              )
                return (
                  b(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    (function (e) {
                      return (
                        ('function' == typeof Symbol &&
                          Symbol.toStringTag &&
                          e[Symbol.toStringTag]) ||
                        e.constructor.name ||
                        'Object'
                      )
                    })(e)
                  ),
                  H(e)
                )
            }
            var X,
              G,
              K,
              Q = g.ReactCurrentOwner,
              Z = { key: !0, ref: !0, __self: !0, __source: !0 }
            K = {}
            function ee(e, r, n, o, a) {
              var i,
                c = {},
                s = null,
                u = null
              for (i in (void 0 !== n && (J(n), (s = '' + n)),
              (function (e) {
                if (z.call(e, 'key')) {
                  var r = Object.getOwnPropertyDescriptor(e, 'key').get
                  if (r && r.isReactWarning) return !1
                }
                return void 0 !== e.key
              })(r) && (J(r.key), (s = '' + r.key)),
              (function (e) {
                if (z.call(e, 'ref')) {
                  var r = Object.getOwnPropertyDescriptor(e, 'ref').get
                  if (r && r.isReactWarning) return !1
                }
                return void 0 !== e.ref
              })(r) &&
                ((u = r.ref),
                (function (e, r) {
                  if (
                    'string' == typeof e.ref &&
                    Q.current &&
                    r &&
                    Q.current.stateNode !== r
                  ) {
                    var t = w(Q.current.type)
                    K[t] ||
                      (b(
                        'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                        w(Q.current.type),
                        e.ref
                      ),
                      (K[t] = !0))
                  }
                })(r, a)),
              r))
                z.call(r, i) && !Z.hasOwnProperty(i) && (c[i] = r[i])
              if (e && e.defaultProps) {
                var l = e.defaultProps
                for (i in l) void 0 === c[i] && (c[i] = l[i])
              }
              if (s || u) {
                var f =
                  'function' == typeof e
                    ? e.displayName || e.name || 'Unknown'
                    : e
                s &&
                  (function (e, r) {
                    var t = function () {
                      X ||
                        ((X = !0),
                        b(
                          '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                          r
                        ))
                    }
                    ;(t.isReactWarning = !0),
                      Object.defineProperty(e, 'key', {
                        get: t,
                        configurable: !0
                      })
                  })(c, f),
                  u &&
                    (function (e, r) {
                      var t = function () {
                        G ||
                          ((G = !0),
                          b(
                            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                            r
                          ))
                      }
                      ;(t.isReactWarning = !0),
                        Object.defineProperty(e, 'ref', {
                          get: t,
                          configurable: !0
                        })
                    })(c, f)
              }
              return (function (e, r, n, o, a, i, c) {
                var s = {
                  $$typeof: t,
                  type: e,
                  key: r,
                  ref: n,
                  props: c,
                  _owner: i,
                  _store: {}
                }
                return (
                  Object.defineProperty(s._store, 'validated', {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: !1
                  }),
                  Object.defineProperty(s, '_self', {
                    configurable: !1,
                    enumerable: !1,
                    writable: !1,
                    value: o
                  }),
                  Object.defineProperty(s, '_source', {
                    configurable: !1,
                    enumerable: !1,
                    writable: !1,
                    value: a
                  }),
                  Object.freeze && (Object.freeze(s.props), Object.freeze(s)),
                  s
                )
              })(e, s, u, a, o, Q.current, c)
            }
            var re,
              te = g.ReactCurrentOwner,
              ne = g.ReactDebugCurrentFrame
            function oe(e) {
              if (e) {
                var r = e._owner,
                  t = U(e.type, e._source, r ? r.type : null)
                ne.setExtraStackFrame(t)
              } else ne.setExtraStackFrame(null)
            }
            function ae(e) {
              return 'object' == typeof e && null !== e && e.$$typeof === t
            }
            function ie() {
              if (te.current) {
                var e = w(te.current.type)
                if (e) return '\n\nCheck the render method of `' + e + '`.'
              }
              return ''
            }
            re = !1
            var ce = {}
            function se(e, r) {
              if (e._store && !e._store.validated && null == e.key) {
                e._store.validated = !0
                var t = (function (e) {
                  var r = ie()
                  if (!r) {
                    var t = 'string' == typeof e ? e : e.displayName || e.name
                    t &&
                      (r =
                        '\n\nCheck the top-level render call using <' +
                        t +
                        '>.')
                  }
                  return r
                })(r)
                if (!ce[t]) {
                  ce[t] = !0
                  var n = ''
                  e &&
                    e._owner &&
                    e._owner !== te.current &&
                    (n =
                      ' It was passed a child from ' + w(e._owner.type) + '.'),
                    oe(e),
                    b(
                      'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                      t,
                      n
                    ),
                    oe(null)
                }
              }
            }
            function ue(e, r) {
              if ('object' == typeof e)
                if (q(e))
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t]
                    ae(n) && se(n, r)
                  }
                else if (ae(e)) e._store && (e._store.validated = !0)
                else if (e) {
                  var o = (function (e) {
                    if (null === e || 'object' != typeof e) return null
                    var r = (m && e[m]) || e['@@iterator']
                    return 'function' == typeof r ? r : null
                  })(e)
                  if ('function' == typeof o && o !== e.entries)
                    for (var a, i = o.call(e); !(a = i.next()).done; )
                      ae(a.value) && se(a.value, r)
                }
            }
            function le(e) {
              var r,
                t = e.type
              if (null != t && 'string' != typeof t) {
                if ('function' == typeof t) r = t.propTypes
                else {
                  if (
                    'object' != typeof t ||
                    (t.$$typeof !== l && t.$$typeof !== y)
                  )
                    return
                  r = t.propTypes
                }
                if (r) {
                  var n = w(t)
                  !(function (e, r, t, n, o) {
                    var a = Function.call.bind(z)
                    for (var i in e)
                      if (a(e, i)) {
                        var c = void 0
                        try {
                          if ('function' != typeof e[i]) {
                            var s = Error(
                              (n || 'React class') +
                                ': ' +
                                t +
                                ' type `' +
                                i +
                                '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                                typeof e[i] +
                                '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                            )
                            throw ((s.name = 'Invariant Violation'), s)
                          }
                          c = e[i](
                            r,
                            i,
                            n,
                            t,
                            null,
                            'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                          )
                        } catch (u) {
                          c = u
                        }
                        !c ||
                          c instanceof Error ||
                          (B(o),
                          b(
                            '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                            n || 'React class',
                            t,
                            i,
                            typeof c
                          ),
                          B(null)),
                          c instanceof Error &&
                            !(c.message in M) &&
                            ((M[c.message] = !0),
                            B(o),
                            b('Failed %s type: %s', t, c.message),
                            B(null))
                      }
                  })(r, e.props, 'prop', n, e)
                } else if (void 0 !== t.PropTypes && !re) {
                  ;(re = !0),
                    b(
                      'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                      w(t) || 'Unknown'
                    )
                }
                'function' != typeof t.getDefaultProps ||
                  t.getDefaultProps.isReactClassApproved ||
                  b(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                  )
              }
            }
            function fe(e, r, n, s, m, g) {
              var h = (function (e) {
                return (
                  'string' == typeof e ||
                  'function' == typeof e ||
                  e === o ||
                  e === i ||
                  e === a ||
                  e === f ||
                  e === p ||
                  e === v ||
                  ('object' == typeof e &&
                    null !== e &&
                    (e.$$typeof === d ||
                      e.$$typeof === y ||
                      e.$$typeof === c ||
                      e.$$typeof === u ||
                      e.$$typeof === l ||
                      e.$$typeof === _ ||
                      void 0 !== e.getModuleId))
                )
              })(e)
              if (!h) {
                var k = ''
                ;(void 0 === e ||
                  ('object' == typeof e &&
                    null !== e &&
                    0 === Object.keys(e).length)) &&
                  (k +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
                var S,
                  O = (function (e) {
                    return void 0 !== e
                      ? '\n\nCheck your code at ' +
                          e.fileName.replace(/^.*[\\\/]/, '') +
                          ':' +
                          e.lineNumber +
                          '.'
                      : ''
                  })(m)
                ;(k += O || ie()),
                  null === e
                    ? (S = 'null')
                    : q(e)
                    ? (S = 'array')
                    : void 0 !== e && e.$$typeof === t
                    ? ((S = '<' + (w(e.type) || 'Unknown') + ' />'),
                      (k =
                        ' Did you accidentally export a JSX literal instead of a component?'))
                    : (S = typeof e),
                  b(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    S,
                    k
                  )
              }
              var j = ee(e, r, n, m, g)
              if (null == j) return j
              if (h) {
                var R = r.children
                if (void 0 !== R)
                  if (s)
                    if (q(R)) {
                      for (var E = 0; E < R.length; E++) ue(R[E], e)
                      Object.freeze && Object.freeze(R)
                    } else
                      b(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                      )
                  else ue(R, e)
              }
              return (
                e === o
                  ? (function (e) {
                      for (
                        var r = Object.keys(e.props), t = 0;
                        t < r.length;
                        t++
                      ) {
                        var n = r[t]
                        if ('children' !== n && 'key' !== n) {
                          oe(e),
                            b(
                              'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                              n
                            ),
                            oe(null)
                          break
                        }
                      }
                      null !== e.ref &&
                        (oe(e),
                        b(
                          'Invalid attribute `ref` supplied to `React.Fragment`.'
                        ),
                        oe(null))
                    })(j)
                  : le(j),
                j
              )
            }
            var pe = function (e, r, t) {
                return fe(e, r, t, !1)
              },
              ye = function (e, r, t) {
                return fe(e, r, t, !0)
              }
            ;(s.Fragment = o), (s.jsx = pe), (s.jsxs = ye)
          })()),
      s
    )
  }
  ;(c = {
    get exports() {
      return o
    },
    set exports(e) {
      o = e
    }
  }),
    'production' === process.env.NODE_ENV
      ? (c.exports = (function () {
          if (n) return a
          n = 1
          var e = r,
            t = Symbol.for('react.element'),
            o = Symbol.for('react.fragment'),
            i = Object.prototype.hasOwnProperty,
            c =
              e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
            s = { key: !0, ref: !0, __self: !0, __source: !0 }
          function u(e, r, n) {
            var o,
              a = {},
              u = null,
              l = null
            for (o in (void 0 !== n && (u = '' + n),
            void 0 !== r.key && (u = '' + r.key),
            void 0 !== r.ref && (l = r.ref),
            r))
              i.call(r, o) && !s.hasOwnProperty(o) && (a[o] = r[o])
            if (e && e.defaultProps)
              for (o in (r = e.defaultProps)) void 0 === a[o] && (a[o] = r[o])
            return {
              $$typeof: t,
              type: e,
              key: u,
              ref: l,
              props: a,
              _owner: c.current
            }
          }
          return (a.Fragment = o), (a.jsx = u), (a.jsxs = u), a
        })())
      : (c.exports = u())
  const l = o.jsx
  var f = {}
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  !(function (e) {
    !(function () {
      var r = {}.hasOwnProperty
      function t() {
        for (var e = [], n = 0; n < arguments.length; n++) {
          var o = arguments[n]
          if (o) {
            var a = typeof o
            if ('string' === a || 'number' === a) e.push(o)
            else if (Array.isArray(o)) {
              if (o.length) {
                var i = t.apply(null, o)
                i && e.push(i)
              }
            } else if ('object' === a) {
              if (
                o.toString !== Object.prototype.toString &&
                !o.toString.toString().includes('[native code]')
              ) {
                e.push(o.toString())
                continue
              }
              for (var c in o) r.call(o, c) && o[c] && e.push(c)
            }
          }
        }
        return e.join(' ')
      }
      e.exports ? ((t.default = t), (e.exports = t)) : (window.classNames = t)
    })()
  })({
    get exports() {
      return f
    },
    set exports(e) {
      f = e
    }
  })
  const p = f
  return (
    (e.Button = ({ ...e }) =>
      l('button', {
        className: p(
          `\n    py-2 \n    px-4 \n    font-semibold \n    rounded-lg \n    shadow-md \n    text-white \n    bg-${e.color}-500 \n    hover:bg-${e.color}-700 \n    border-none \n    cursor-pointer \n    m-1\n    `,
          e.className
        ),
        ...e
      })),
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    e
  )
})({}, react)
//# sourceMappingURL=peacockui.iife.js.map
