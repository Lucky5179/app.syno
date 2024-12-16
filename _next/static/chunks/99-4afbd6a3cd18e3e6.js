(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [99],
  {
    66648: function (t, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return r.a;
        },
      });
      var n = i(55601),
        r = i.n(n);
    },
    16463: function (t, e, i) {
      "use strict";
      var n = i(71169);
      i.o(n, "usePathname") &&
        i.d(e, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        i.o(n, "useRouter") &&
          i.d(e, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        i.o(n, "useSearchParams") &&
          i.d(e, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    38173: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let n = i(99920),
        r = i(41452),
        s = i(57437),
        o = r._(i(2265)),
        a = n._(i(54887)),
        l = n._(i(28321)),
        u = i(80497),
        h = i(7103),
        c = i(93938);
      i(72301);
      let d = i(60291),
        p = n._(i(21241)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(t, e, i, n, r, s, o) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && r(!0), null == i ? void 0 : i.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let n = !1,
                    r = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => r,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (r = !0), e.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(t);
              }
            }));
      }
      function v(t) {
        return o.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let g = (0, o.forwardRef)((t, e) => {
        let {
          src: i,
          srcSet: n,
          sizes: r,
          height: a,
          width: l,
          decoding: u,
          className: h,
          style: c,
          fetchPriority: d,
          placeholder: p,
          loading: f,
          unoptimized: g,
          fill: y,
          onLoadRef: x,
          onLoadingCompleteRef: P,
          setBlurComplete: w,
          setShowAltText: b,
          sizesInput: S,
          onLoad: T,
          onError: A,
          ...C
        } = t;
        return (0, s.jsx)("img", {
          ...C,
          ...v(d),
          loading: f,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: h,
          style: c,
          sizes: r,
          srcSet: n,
          src: i,
          ref: (0, o.useCallback)(
            (t) => {
              e &&
                ("function" == typeof e
                  ? e(t)
                  : "object" == typeof e && (e.current = t)),
                t &&
                  (A && (t.src = t.src), t.complete && m(t, p, x, P, w, g, S));
            },
            [i, p, x, P, w, A, g, S, e]
          ),
          onLoad: (t) => {
            m(t.currentTarget, p, x, P, w, g, S);
          },
          onError: (t) => {
            b(!0), "empty" !== p && w(!0), A && A(t);
          },
        });
      });
      function y(t) {
        let { isAppRouter: e, imgAttributes: i } = t,
          n = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...v(i.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(i.src, n), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...n },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let x = (0, o.forwardRef)((t, e) => {
        let i = (0, o.useContext)(d.RouterContext),
          n = (0, o.useContext)(c.ImageConfigContext),
          r = (0, o.useMemo)(() => {
            let t = f || n || h.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              i = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: i };
          }, [n]),
          { onLoad: a, onLoadingComplete: l } = t,
          m = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          m.current = a;
        }, [a]);
        let v = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          v.current = l;
        }, [l]);
        let [x, P] = (0, o.useState)(!1),
          [w, b] = (0, o.useState)(!1),
          { props: S, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: r,
            blurComplete: x,
            showAltText: w,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: m,
              onLoadingCompleteRef: v,
              setBlurComplete: P,
              setShowAltText: b,
              sizesInput: t.sizes,
              ref: e,
            }),
            T.priority
              ? (0, s.jsx)(y, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    82901: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(99920)._(i(2265)).default.createContext({});
    },
    40687: function (t, e) {
      "use strict";
      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: n = !1,
        } = void 0 === t ? {} : t;
        return e || (i && n);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    80497: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        i(72301);
      let n = i(51564),
        r = i(7103);
      function s(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var i;
        let a,
          l,
          u,
          {
            src: h,
            sizes: c,
            unoptimized: d = !1,
            priority: p = !1,
            loading: f,
            className: m,
            quality: v,
            width: g,
            height: y,
            fill: x = !1,
            style: P,
            overrideSrc: w,
            onLoad: b,
            onLoadingComplete: S,
            placeholder: T = "empty",
            blurDataURL: A,
            fetchPriority: C,
            layout: M,
            objectFit: E,
            objectPosition: V,
            lazyBoundary: D,
            lazyRoot: R,
            ...j
          } = t,
          { imgConf: k, showAltText: O, blurComplete: L, defaultLoader: F } = e,
          B = k || r.imageConfigDefault;
        if ("allSizes" in B) a = B;
        else {
          let t = [...B.deviceSizes, ...B.imageSizes].sort((t, e) => t - e),
            e = B.deviceSizes.sort((t, e) => t - e);
          a = { ...B, allSizes: t, deviceSizes: e };
        }
        if (void 0 === F)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let _ = j.loader || F;
        delete j.loader, delete j.srcSet;
        let I = "__next_img_default" in _;
        if (I) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                h +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = _;
          _ = (e) => {
            let { config: i, ...n } = e;
            return t(n);
          };
        }
        if (M) {
          "fill" === M && (x = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[M];
          t && (P = { ...P, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[M];
          e && !c && (c = e);
        }
        let W = "",
          U = o(g),
          $ = o(y);
        if ("object" == typeof (i = h) && (s(i) || void 0 !== i.src)) {
          let t = s(h) ? h.default : h;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((l = t.blurWidth),
            (u = t.blurHeight),
            (A = A || t.blurDataURL),
            (W = t.src),
            !x)
          ) {
            if (U || $) {
              if (U && !$) {
                let e = U / t.width;
                $ = Math.round(t.height * e);
              } else if (!U && $) {
                let e = $ / t.height;
                U = Math.round(t.width * e);
              }
            } else (U = t.width), ($ = t.height);
          }
        }
        let z = !p && ("lazy" === f || void 0 === f);
        (!(h = "string" == typeof h ? h : W) ||
          h.startsWith("data:") ||
          h.startsWith("blob:")) &&
          ((d = !0), (z = !1)),
          a.unoptimized && (d = !0),
          I && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (d = !0),
          p && (C = "high");
        let N = o(v),
          X = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: E,
                  objectPosition: V,
                }
              : {},
            O ? {} : { color: "transparent" },
            P
          ),
          Y =
            L || "empty" === T
              ? null
              : "blur" === T
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: U,
                  heightInt: $,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: A || "",
                  objectFit: X.objectFit,
                }) +
                '")'
              : 'url("' + T + '")',
          H = Y
            ? {
                backgroundSize: X.objectFit || "cover",
                backgroundPosition: X.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y,
              }
            : {},
          G = (function (t) {
            let {
              config: e,
              src: i,
              unoptimized: n,
              width: r,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (n) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, i) {
                let { deviceSizes: n, allSizes: r } = t;
                if (i) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let n; (n = t.exec(i)); n) e.push(parseInt(n[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: r.filter((e) => e >= n[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: r, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => r.find((e) => e >= t) || r[r.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, r, o),
              h = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (t, n) =>
                    a({ config: e, src: i, quality: s, width: t }) +
                    " " +
                    ("w" === u ? t : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: i, quality: s, width: l[h] }),
            };
          })({
            config: a,
            src: h,
            unoptimized: d,
            width: U,
            quality: N,
            sizes: c,
            loader: _,
          });
        return {
          props: {
            ...j,
            loading: z ? "lazy" : f,
            fetchPriority: C,
            width: U,
            height: $,
            decoding: "async",
            className: m,
            style: { ...X, ...H },
            sizes: G.sizes,
            srcSet: G.srcSet,
            src: w || G.src,
          },
          meta: { unoptimized: d, priority: p, placeholder: T, fill: x },
        };
      }
    },
    28321: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return c;
          },
        });
      let n = i(99920),
        r = i(41452),
        s = i(57437),
        o = r._(i(2265)),
        a = n._(i(65960)),
        l = i(82901),
        u = i(36590),
        h = i(40687);
      function c(t) {
        void 0 === t && (t = !1);
        let e = [(0, s.jsx)("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              (0, s.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function d(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === o.default.Fragment
          ? t.concat(
              o.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      i(72301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(t, e) {
        let { inAmpMode: i } = e;
        return t
          .reduce(d, [])
          .reverse()
          .concat(c(i).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                i = new Set(),
                n = {};
              return (r) => {
                let s = !0,
                  o = !1;
                if (
                  r.key &&
                  "number" != typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let e = r.key.slice(r.key.indexOf("$") + 1);
                  t.has(e) ? (s = !1) : t.add(e);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    e.has(r.type) ? (s = !1) : e.add(r.type);
                    break;
                  case "meta":
                    for (let t = 0, e = p.length; t < e; t++) {
                      let e = p[t];
                      if (r.props.hasOwnProperty(e)) {
                        if ("charSet" === e) i.has(e) ? (s = !1) : i.add(e);
                        else {
                          let t = r.props[e],
                            i = n[e] || new Set();
                          ("name" !== e || !o) && i.has(t)
                            ? (s = !1)
                            : (i.add(t), (n[e] = i));
                        }
                      }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let n = t.key || e;
            if (
              !i &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                o.default.cloneElement(t, e)
              );
            }
            return o.default.cloneElement(t, { key: n });
          });
      }
      let m = function (t) {
        let { children: e } = t,
          i = (0, o.useContext)(l.AmpStateContext),
          n = (0, o.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(a.default, {
          reduceComponentsToState: f,
          headManager: n,
          inAmpMode: (0, h.isInAmpMode)(i),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    51564: function (t, e) {
      "use strict";
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: n,
            blurHeight: r,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = n ? 40 * n : e,
          l = r ? 40 * r : i,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    93938: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(99920)._(i(2265)),
        r = i(7103),
        s = n.default.createContext(r.imageConfigDefault);
    },
    7103: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    55601: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = i(99920),
        r = i(80497),
        s = i(38173),
        o = n._(i(21241));
      function a(t) {
        let { props: e } = (0, r.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    21241: function (t, e) {
      "use strict";
      function i(t) {
        let { config: e, src: i, width: n, quality: r } = t;
        return i;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (i.__next_img_default = !0);
      let n = i;
    },
    60291: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(99920)._(i(2265)).default.createContext(null);
    },
    65960: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = i(2265),
        r = "undefined" == typeof window,
        s = r ? () => {} : n.useLayoutEffect,
        o = r ? () => {} : n.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function a() {
          if (e && e.mountedInstances) {
            let r = n.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(i(r, t));
          }
        }
        if (r) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children),
            a();
        }
        return (
          s(() => {
            var i;
            return (
              null == e ||
                null == (i = e.mountedInstances) ||
                i.add(t.children),
              () => {
                var i;
                null == e ||
                  null == (i = e.mountedInstances) ||
                  i.delete(t.children);
              }
            );
          }),
          s(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          o(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    99949: function (t, e, i) {
      "use strict";
      var n = i(88877);
      function r() {}
      function s() {}
      (s.resetWarningCache = r),
        (t.exports = function () {
          function t(t, e, i, r, s, o) {
            if (o !== n) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var i = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: s,
            resetWarningCache: r,
          };
          return (i.PropTypes = i), i;
        });
    },
    41448: function (t, e, i) {
      t.exports = i(99949)();
    },
    88877: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    89894: function (t, e, i) {
      "use strict";
      i.d(e, {
        x: function () {
          return c;
        },
      });
      var n,
        r = i(2265),
        s = i(41448),
        o = i.n(s),
        a =
          ((n = function (t, e) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
              })(t, e);
          }),
          function (t, e) {
            function i() {
              this.constructor = t;
            }
            n(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((i.prototype = e.prototype), new i()));
          }),
        l = function () {
          return (l =
            Object.assign ||
            function (t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var r in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }).apply(this, arguments);
        },
        u = function (t, e) {
          var i = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              0 > e.indexOf(n) &&
              (i[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, n = Object.getOwnPropertySymbols(t);
              r < n.length;
              r++
            )
              0 > e.indexOf(n[r]) &&
                Object.prototype.propertyIsEnumerable.call(t, n[r]) &&
                (i[n[r]] = t[n[r]]);
          return i;
        },
        h = {
          position: "relative",
          display: "inline-flex",
          overflow: "hidden",
        },
        c = function (t) {
          var e;
          return (
            void 0 === t && (t = {}),
            ((e = (function (t) {
              function e(e) {
                var i = t.call(this, e) || this;
                return (
                  (i.timer = 0),
                  (i.onClick = function (t) {
                    var e = i.props,
                      n = e.during,
                      r = e.onClick,
                      s = e.color;
                    t.stopPropagation();
                    var o = t.pageX,
                      a = t.pageY,
                      u = t.currentTarget.getBoundingClientRect(),
                      h = o - (u.left + window.scrollX),
                      c = a - (u.top + window.scrollY),
                      d = Math.max(u.width, u.height);
                    i.setState(
                      function (t) {
                        return {
                          rippleStyle: l({}, t.rippleStyle, {
                            left: h,
                            top: c,
                            opacity: 1,
                            transform: "translate(-50%, -50%)",
                            transition: "initial",
                            backgroundColor: s,
                          }),
                        };
                      },
                      function () {
                        i.timer = setTimeout(function () {
                          i.setState(function (t) {
                            return {
                              rippleStyle: l({}, t.rippleStyle, {
                                opacity: 0,
                                transform: "scale(" + d / 9 + ")",
                                transition: "all " + n + "ms",
                              }),
                            };
                          });
                        }, 50);
                      }
                    ),
                      r && r(t);
                  }),
                  (i.state = {
                    rippleStyle: {
                      position: "absolute",
                      borderRadius: "50%",
                      opacity: 0,
                      width: 35,
                      height: 35,
                      transform: "translate(-50%, -50%)",
                      pointerEvents: "none",
                    },
                  }),
                  i
                );
              }
              return (
                a(e, t),
                (e.prototype.componentWillUnmount = function () {
                  clearTimeout(this.timer);
                }),
                (e.prototype.render = function () {
                  var t = this.props,
                    e = t.children,
                    i = (t.during, t.color, t.onClick, t.className),
                    n = u(t, [
                      "children",
                      "during",
                      "color",
                      "onClick",
                      "className",
                    ]),
                    s = this.state.rippleStyle;
                  return r.createElement(
                    "div",
                    l({}, n, {
                      className: ("react-ripples " + i).trim(),
                      style: h,
                      onClick: this.onClick,
                    }),
                    e,
                    r.createElement("s", { style: s })
                  );
                }),
                e
              );
            })(r.PureComponent)).displayName = "Ripples"),
            (e.propTypes = {
              during: o().number,
              color: o().string,
              onClick: o().func,
              className: o().string,
            }),
            (e.defaultProps = l(
              {
                during: 600,
                color: "rgba(0, 0, 0, .3)",
                className: "",
                onClick: function () {},
              },
              t
            )),
            e
          );
        };
      c();
    },
    5658: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return s;
        },
      });
      var n = i(86219);
      let r = (0, i(37521).X)(() => void 0 !== window.ScrollTimeline);
      class s {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!r() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let r = () => {
                    let { currentTime: n } = e,
                      r = (null === n ? 0 : n.value) / 100;
                    i !== r && t(r), (i = r);
                  };
                  return n.Wi.update(r, !0), () => (0, n.Pn)(r);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
    },
    66323: function (t, e, i) {
      "use strict";
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = new Set(["opacity", "clipPath", "filter", "transform"]);
    },
    19470: function (t, e, i) {
      "use strict";
      i.d(e, {
        S: function () {
          return c;
        },
      });
      var n = i(80557),
        r = i(27529),
        s = i(19047),
        o = i(51506);
      function a(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let l = ["duration", "bounce"],
        u = ["stiffness", "damping", "mass"];
      function h(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function c({ keyframes: t, restDelta: e, restSpeed: i, ...c }) {
        let d;
        let p = t[0],
          f = t[t.length - 1],
          m = { done: !1, value: p },
          {
            stiffness: v,
            damping: g,
            mass: y,
            duration: x,
            velocity: P,
            isResolvedFromDuration: w,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!h(t, u) && h(t, l)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let l, u;
                (0, s.K)(
                  t <= (0, n.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let h = 1 - e;
                (h = (0, o.u)(0.05, 1, h)),
                  (t = (0, o.u)(0.01, 10, (0, n.X)(t))),
                  h < 1
                    ? ((l = (e) => {
                        let n = e * h,
                          r = n * t;
                        return 0.001 - ((n - i) / a(e, h)) * Math.exp(-r);
                      }),
                      (u = (e) => {
                        let n = e * h * t,
                          r = Math.pow(h, 2) * Math.pow(e, 2) * t,
                          s = a(Math.pow(e, 2), h);
                        return (
                          ((n * i + i - r) *
                            Math.exp(-n) *
                            (-l(e) + 0.001 > 0 ? -1 : 1)) /
                          s
                        );
                      }))
                    : ((l = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (u = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let c = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(l, u, 5 / t);
                if (((t = (0, n.w)(t)), isNaN(c)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(c, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * h * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...c, velocity: -(0, n.X)(c.velocity || 0) }),
          b = P || 0,
          S = g / (2 * Math.sqrt(v * y)),
          T = f - p,
          A = (0, n.X)(Math.sqrt(v / y)),
          C = 5 > Math.abs(T);
        if ((i || (i = C ? 0.01 : 2), e || (e = C ? 0.005 : 0.5), S < 1)) {
          let t = a(A, S);
          d = (e) =>
            f -
            Math.exp(-S * A * e) *
              (((b + S * A * T) / t) * Math.sin(t * e) + T * Math.cos(t * e));
        } else if (1 === S)
          d = (t) => f - Math.exp(-A * t) * (T + (b + A * T) * t);
        else {
          let t = A * Math.sqrt(S * S - 1);
          d = (e) => {
            let i = Math.exp(-S * A * e),
              n = Math.min(t * e, 300);
            return (
              f -
              (i * ((b + S * A * T) * Math.sinh(n) + t * T * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (w && x) || null,
          next: (t) => {
            let s = d(t);
            if (w) m.done = t >= x;
            else {
              let o = 0;
              S < 1 && (o = 0 === t ? (0, n.w)(b) : (0, r.P)(d, t, s));
              let a = Math.abs(o) <= i,
                l = Math.abs(f - s) <= e;
              m.done = a && l;
            }
            return (m.value = m.done ? f : s), m;
          },
        };
      }
    },
    49653: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return n;
        },
        i: function () {
          return r;
        },
      });
      let n = 2e4;
      function r(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < n; ) (e += 50), (i = t.next(e));
        return e >= n ? 1 / 0 : e;
      }
    },
    49868: function (t, e, i) {
      "use strict";
      function n(t) {
        return "function" == typeof t;
      }
      i.d(e, {
        x: function () {
          return n;
        },
      });
    },
    27529: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return r;
        },
      });
      var n = i(83476);
      function r(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, n.R)(i - t(r), e - r);
      }
    },
    22410: function (t, e, i) {
      "use strict";
      i.d(e, {
        v: function () {
          return tg;
        },
      });
      var n = i(80557),
        r = i(26019);
      let s = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        o = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (t, { keyframes: e }) =>
          e.length > 2
            ? a
            : r.G.has(t)
            ? t.startsWith("scale")
              ? o(e[1])
              : s
            : l;
      var h = i(69792),
        c = i(565);
      let d = { current: !1 },
        p = (t) => null !== t;
      function f(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(p),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      var m = i(86219),
        v = i(63078),
        g = i(37521),
        y = i(69276),
        x = i(49868),
        P = i(59993),
        w = i(23653),
        b = i(19047),
        S = i(83646);
      let T = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (S.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class A {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = P.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, w.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = P.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = T(r, e),
                a = T(s, e);
              return (
                (0, b.K)(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || (0, x.x)(i)) && n))
              );
            })(t, i, n, r)
          ) {
            if (d.current || !s) {
              null == a || a(f(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var C = i(19470),
        M = i(27529);
      function E({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / n),
          w = (t) => x + P(t),
          b = (t) => {
            let e = P(t),
              i = w(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : i);
          },
          S = (t) => {
            m(f.value) &&
              ((c = t),
              (d = (0, C.S)({
                keyframes: [f.value, v(f.value)],
                velocity: (0, M.P)(w, t, f.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), b(t), S(t)),
              void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || b(t), f);
            },
          }
        );
      }
      var V = i(18298),
        D = i(19379),
        R = i(33742),
        j = i(51506),
        k = i(89654),
        O = i(33217),
        L = i(75004);
      function F(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var B = i(45778),
        _ = i(91583),
        I = i(598);
      function W(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let U = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        $ = [B.$, _.m, I.J],
        z = (t) => $.find((e) => e.test(t));
      function N(t) {
        let e = z(t);
        if (
          ((0, b.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === I.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = F(a, n, t + 1 / 3)),
                  (s = F(a, n, t)),
                  (o = F(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let X = (t, e) => {
        let i = N(t),
          n = N(e);
        if (!i || !n) return W(t, e);
        let r = { ...i };
        return (t) => (
          (r.red = U(i.red, n.red, t)),
          (r.green = U(i.green, n.green, t)),
          (r.blue = U(i.blue, n.blue, t)),
          (r.alpha = (0, L.t)(i.alpha, n.alpha, t)),
          _.m.transform(r)
        );
      };
      var Y = i(50146),
        H = i(61534);
      let G = new Set(["none", "hidden"]);
      function K(t, e) {
        return (i) => (0, L.t)(t, e, i);
      }
      function Z(t) {
        return "number" == typeof t
          ? K
          : "string" == typeof t
          ? (0, H.t)(t)
            ? W
            : Y.$.test(t)
            ? X
            : Q
          : Array.isArray(t)
          ? q
          : "object" == typeof t
          ? Y.$.test(t)
            ? X
            : J
          : W;
      }
      function q(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => Z(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function J(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = Z(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let Q = (t, e) => {
        let i = S.P.createTransformer(e),
          n = (0, S.V)(t),
          r = (0, S.V)(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (G.has(t) && !r.values.length) || (G.has(e) && !n.values.length)
            ? G.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, k.z)(
                q(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, r),
                  r.values
                ),
                i
              )
          : ((0, b.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            W(t, e));
      };
      function tt(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, L.t)(t, e, i)
          : Z(t)(t, e);
      }
      var te = i(92007);
      function ti({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = (0, D.N)(n) ? n.map(R.R) : (0, R.R)(n),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let s = t.length;
            if (
              ((0, b.k)(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  r = i || tt,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[i] || y.Z : e;
                    s = (0, k.z)(t, s);
                  }
                  n.push(s);
                }
                return n;
              })(e, n, r),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = (0, O.Y)(t[i], t[i + 1], e);
                return o[i](n);
              };
            return i ? (e) => l((0, j.u)(t[0], t[s - 1], e)) : l;
          })(
            (i && i.length === e.length ? i : (0, te.Y)(e)).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || V.mZ).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      var tn = i(49653);
      let tr = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => m.Wi.update(e, !0),
            stop: () => (0, m.Pn)(e),
            now: () =>
              m.frameData.isProcessing ? m.frameData.timestamp : P.X.now(),
          };
        },
        ts = { decay: E, inertia: E, tween: ti, keyframes: ti, spring: C.S },
        to = (t) => t / 100;
      class ta extends A {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || w.e;
          (this.resolver = new s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = (0, x.x)(n) ? n : ts[n] || ti;
          l !== ti &&
            "number" != typeof t[0] &&
            ((e = (0, k.z)(to, tt(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (0, tn.i)(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: p,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let x = this.currentTime,
            P = r;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (P = s)),
              (x = (0, j.u)(0, 1, i) * h);
          }
          let w = y ? { done: !1, value: a[0] } : P.next(x);
          o && (w.value = o(w.value));
          let { done: b } = w;
          y ||
            null === l ||
            (b =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && b));
          return (
            S && void 0 !== n && (w.value = f(a, this.options, n)),
            v && v(w.value),
            S && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, n.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, n.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, n.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, n.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tr, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      var tl = i(66323);
      let tu = (t) => Array.isArray(t) && "number" == typeof t[0],
        th = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        tc = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: th([0, 0.65, 0.55, 1]),
          circOut: th([0.55, 0, 1, 0.45]),
          backIn: th([0.31, 0.01, 0.66, -0.59]),
          backOut: th([0.33, 1.53, 0.69, 0.99]),
        };
      function td(t) {
        return tp(t) || tc.easeOut;
      }
      function tp(t) {
        if (t) return tu(t) ? th(t) : Array.isArray(t) ? t.map(td) : tc[t];
      }
      let tf = (0, g.X)(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate")
      );
      class tm extends A {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          (this.resolver = new v.s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            ((n = this.options),
            (0, x.x)(n.type) ||
              "spring" === n.type ||
              !(function t(e) {
                return !!(
                  !e ||
                  ("string" == typeof e && e in tc) ||
                  tu(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(n.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new ta({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let c = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = tp(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(f(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, n.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, n.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, n.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return y.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return y.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: r,
            type: s,
            ease: o,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...h
              } = this.options,
              c = new ta({
                ...h,
                keyframes: i,
                duration: r,
                type: s,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              d = (0, n.w)(this.time);
            t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            tf() &&
            i &&
            tl.t.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      var tv = i(5658);
      let tg =
        (t, e, i, r = {}, s, o) =>
        (a) => {
          let l = (0, h.e)(r, t) || {},
            p = l.delay || r.delay || 0,
            { elapsed: v = 0 } = r;
          v -= (0, n.w)(p);
          let g = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...l,
            delay: -v,
            onUpdate: (t) => {
              e.set(t), l.onUpdate && l.onUpdate(t);
            },
            onComplete: () => {
              a(), l.onComplete && l.onComplete();
            },
            name: t,
            motionValue: e,
            element: o ? void 0 : s,
          };
          (0, h.r)(l) || (g = { ...g, ...u(t, g) }),
            g.duration && (g.duration = (0, n.w)(g.duration)),
            g.repeatDelay && (g.repeatDelay = (0, n.w)(g.repeatDelay)),
            void 0 !== g.from && (g.keyframes[0] = g.from);
          let y = !1;
          if (
            ((!1 !== g.type && (0 !== g.duration || g.repeatDelay)) ||
              ((g.duration = 0), 0 !== g.delay || (y = !0)),
            (d.current || c.c.skipAnimations) &&
              ((y = !0), (g.duration = 0), (g.delay = 0)),
            y && !o && void 0 !== e.get())
          ) {
            let t = f(g.keyframes, l);
            if (void 0 !== t)
              return (
                m.Wi.update(() => {
                  g.onUpdate(t), g.onComplete();
                }),
                new tv.s([])
              );
          }
          return !o && tm.supports(g) ? new tm(g) : new ta(g);
        };
    },
    89334: function (t, e, i) {
      "use strict";
      i.d(e, {
        D: function () {
          return o;
        },
      });
      var n = i(22410),
        r = i(20804),
        s = i(77599);
      function o(t, e, i) {
        let o = (0, s.i)(t) ? t : (0, r.BX)(t);
        return o.start((0, n.v)("", o, e, i)), o.animation;
      }
    },
    58688: function (t, e, i) {
      "use strict";
      i.d(e, {
        w: function () {
          return d;
        },
      });
      var n = i(26019),
        r = i(22410),
        s = i(99155),
        o = i(20804),
        a = i(70352),
        l = i(69792),
        u = i(2087),
        h = i(3944),
        c = i(86219);
      function d(t, e, { delay: i = 0, transitionOverride: d, type: p } = {}) {
        var f;
        let {
          transition: m = t.getDefaultTransition(),
          transitionEnd: v,
          ...g
        } = e;
        d && (m = d);
        let y = [],
          x = p && t.animationState && t.animationState.getState()[p];
        for (let e in g) {
          let s = t.getValue(
              e,
              null !== (f = t.latestValues[e]) && void 0 !== f ? f : null
            ),
            o = g[e];
          if (
            void 0 === o ||
            (x &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(x, e))
          )
            continue;
          let a = { delay: i, ...(0, l.e)(m || {}, e) },
            d = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, u.s)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, c.Wi);
              null !== t && ((a.startTime = t), (d = !0));
            }
          }
          (0, h.K)(t, e),
            s.start(
              (0, r.v)(
                e,
                s,
                o,
                t.shouldReduceMotion && n.G.has(e) ? { type: !1 } : a,
                t,
                d
              )
            );
          let p = s.animation;
          p && y.push(p);
        }
        return (
          v &&
            Promise.all(y).then(() => {
              c.Wi.update(() => {
                v &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = (0, a.x)(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = (0, s.Y)(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, o.BX)(i));
                    }
                  })(t, v);
              });
            }),
          y
        );
      }
    },
    65908: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = "data-" + (0, i(51580).D)("framerAppearId");
    },
    2087: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return r;
        },
      });
      var n = i(65908);
      function r(t) {
        return t.props[n.M];
      }
    },
    64572: function (t, e, i) {
      "use strict";
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        H: function () {
          return n;
        },
      });
    },
    66925: function (t, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    69792: function (t, e, i) {
      "use strict";
      function n({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: n,
        staggerDirection: r,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return n;
        },
      });
    },
    5050: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    29791: function (t, e, i) {
      "use strict";
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    67797: function (t, e, i) {
      "use strict";
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)(null);
    },
    68536: function (t, e, i) {
      "use strict";
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var n = i(73108),
        r = i(62718);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, n.o)(s);
    },
    13194: function (t, e, i) {
      "use strict";
      i.d(e, {
        _: function () {
          return s;
        },
      });
      var n = i(69276);
      let r = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function s(t, e, i, s) {
        if (t === e && i === s) return n.Z;
        let o = (e) =>
          (function (t, e, i, n, s) {
            let o, a;
            let l = 0;
            do (o = r((a = e + (i - e) / 2), n, s) - t) > 0 ? (i = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : r(o(t), e, s));
      }
    },
    18298: function (t, e, i) {
      "use strict";
      i.d(e, {
        Vv: function () {
          return s;
        },
        YQ: function () {
          return r;
        },
        mZ: function () {
          return o;
        },
      });
      var n = i(13194);
      let r = (0, n._)(0.42, 0, 1, 1),
        s = (0, n._)(0, 0, 0.58, 1),
        o = (0, n._)(0.42, 0, 0.58, 1);
    },
    73108: function (t, e, i) {
      "use strict";
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    62718: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    19379: function (t, e, i) {
      "use strict";
      i.d(e, {
        N: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t) && "number" != typeof t[0];
    },
    33742: function (t, e, i) {
      "use strict";
      i.d(e, {
        R: function () {
          return f;
        },
      });
      var n = i(19047),
        r = i(13194),
        s = i(69276),
        o = i(18298),
        a = i(68536),
        l = i(73108),
        u = i(62718);
      let h = (0, r._)(0.33, 1.53, 0.69, 0.99),
        c = (0, u.M)(h),
        d = (0, l.o)(c),
        p = {
          linear: s.Z,
          easeIn: o.YQ,
          easeInOut: o.mZ,
          easeOut: o.Vv,
          circIn: a.Z7,
          circInOut: a.X7,
          circOut: a.Bn,
          backIn: c,
          backInOut: d,
          backOut: h,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * c(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        f = (t) => {
          if (Array.isArray(t)) {
            (0, n.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, s, o] = t;
            return (0, r._)(e, i, s, o);
          }
          return "string" == typeof t
            ? ((0, n.k)(void 0 !== p[t], `Invalid easing type '${t}'`), p[t])
            : t;
        };
    },
    2981: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = i(565);
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let i = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return r && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (n = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: c,
            preRender: d,
            render: p,
            postRender: f,
          } = l,
          m = () => {
            let r = n.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              c.process(o),
              d.process(o),
              p.process(o),
              f.process(o),
              (o.isProcessing = !1),
              i && e && ((s = !1), t(m));
          },
          v = () => {
            (i = !0), (s = !0), o.isProcessing || t(m);
          };
        return {
          schedule: r.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || v(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    86219: function (t, e, i) {
      "use strict";
      i.d(e, {
        Pn: function () {
          return s;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
        yL: function () {
          return a;
        },
      });
      var n = i(69276);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    59993: function (t, e, i) {
      "use strict";
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(565),
        s = i(86219);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    96317: function (t, e, i) {
      "use strict";
      i.d(e, {
        featureDefinitions: function () {
          return r;
        },
      });
      let n = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        r = {};
      for (let t in n) r[t] = { isEnabled: (e) => n[t].some((t) => !!e[t]) };
    },
    42020: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return s;
        },
      });
      var n = i(57290),
        r = i(26019);
      function s(t, { layout: e, layoutId: i }) {
        return (
          r.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!n.P[t] || "opacity" === t))
        );
      }
    },
    33005: function (t, e, i) {
      "use strict";
      function n({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let i = e({ x: t.left, y: t.top }),
          n = e({ x: t.right, y: t.bottom });
        return { top: i.y, left: i.x, bottom: n.y, right: n.x };
      }
      i.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return n;
        },
        z2: function () {
          return r;
        },
      });
    },
    46711: function (t, e, i) {
      "use strict";
      i.d(e, {
        D2: function () {
          return d;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return h;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var n = i(75004),
        r = i(98107);
      function s(t, e, i) {
        return i + e * (t - i);
      }
      function o(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function a(t, e = 0, i = 1, n, r) {
        (t.min = o(t.min, e, i, n, r)), (t.max = o(t.max, e, i, n, r));
      }
      function l(t, { x: e, y: i }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, i.translate, i.scale, i.originPoint);
      }
      function u(t, e, i, n = !1) {
        let s, o;
        let a = i.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = i[u]).projectionDelta;
            let { visualElement: a } = s.options;
            (!a || !a.props.style || "contents" !== a.props.style.display) &&
              (n &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                d(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              n && (0, r.ud)(s.latestValues) && d(t, s.latestValues));
          }
          e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
        }
      }
      function h(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function c(t, e, i, r, s = 0.5) {
        let o = (0, n.t)(t.min, t.max, s);
        a(t, e, i, o, r);
      }
      function d(t, e) {
        c(t.x, e.x, e.scaleX, e.scale, e.originX),
          c(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    58250: function (t, e, i) {
      "use strict";
      i.d(e, {
        dO: function () {
          return o;
        },
        wc: function () {
          return r;
        },
      });
      let n = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: n(), y: n() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    57290: function (t, e, i) {
      "use strict";
      i.d(e, {
        B: function () {
          return r;
        },
        P: function () {
          return n;
        },
      });
      let n = {};
      function r(t) {
        Object.assign(n, t);
      }
    },
    98107: function (t, e, i) {
      "use strict";
      function n(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: i }) {
        return !n(t) || !n(e) || !n(i);
      }
      function s(t) {
        return (
          r(t) ||
          o(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function o(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      i.d(e, {
        D_: function () {
          return o;
        },
        Lj: function () {
          return r;
        },
        ud: function () {
          return s;
        },
      });
    },
    77684: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var n = i(33005),
        r = i(46711);
      function s(t, e) {
        return (0, n.i8)((0, n.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, i) {
        let n = s(t, i),
          { scroll: o } = e;
        return o && ((0, r.am)(n.x, o.offset.x), (0, r.am)(n.y, o.offset.y)), n;
      }
    },
    77155: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return iC;
        },
      });
      var n,
        r,
        s,
        o = i(64572),
        a = i(66925);
      function l(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var u = i(56859),
        h = i(70352),
        c = i(53552),
        d = i(58688);
      function p(t, e, i = {}) {
        var n;
        let r = (0, h.x)(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r
            ? () => Promise.all((0, d.w)(t, r, i))
            : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(f)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              p(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function f(t, e) {
        return t.sortNodePosition(e);
      }
      let m = c.V.length,
        v = [...c.e].reverse(),
        g = c.e.length;
      function y(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function x() {
        return {
          animate: y(!0),
          whileInView: y(),
          whileHover: y(),
          whileTap: y(),
          whileDrag: y(),
          whileFocus: y(),
          exit: y(),
        };
      }
      class P {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class w extends P {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => p(t, e, i)));
                          else if ("string" == typeof e) n = p(t, e, i);
                          else {
                            let r =
                              "function" == typeof e
                                ? (0, h.x)(t, e, i.custom)
                                : e;
                            n = Promise.all((0, d.w)(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = x(),
                  n = !0,
                  r = (e) => (i, n) => {
                    var r;
                    let s = (0, h.x)(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let { props: h } = t,
                    d =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < m; t++) {
                          let n = c.V[t],
                            r = e.props[n];
                          ((0, u.$)(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    f = new Set(),
                    y = {},
                    x = 1 / 0;
                  for (let e = 0; e < g; e++) {
                    var P;
                    let c = v[e],
                      m = i[c],
                      g = void 0 !== h[c] ? h[c] : d[c],
                      w = (0, u.$)(g),
                      b = c === s ? m.isActive : null;
                    !1 === b && (x = e);
                    let S = g === d[c] && g !== h[c] && w;
                    if (
                      (S && n && t.manuallyAnimateOnMount && (S = !1),
                      (m.protectedKeys = { ...y }),
                      (!m.isActive && null === b) ||
                        (!g && !m.prevProp) ||
                        (0, o.H)(g) ||
                        "boolean" == typeof g)
                    )
                      continue;
                    let T =
                        ((P = m.prevProp),
                        "string" == typeof g
                          ? g !== P
                          : !!Array.isArray(g) && !l(g, P)),
                      A =
                        T || (c === s && m.isActive && !S && w) || (e > x && w),
                      C = !1,
                      M = Array.isArray(g) ? g : [g],
                      E = M.reduce(r(c), {});
                    !1 === b && (E = {});
                    let { prevResolvedValues: V = {} } = m,
                      D = { ...V, ...E },
                      R = (e) => {
                        (A = !0),
                          f.has(e) && ((C = !0), f.delete(e)),
                          (m.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in D) {
                      let e = E[t],
                        i = V[t];
                      if (!y.hasOwnProperty(t))
                        ((0, a.C)(e) && (0, a.C)(i) ? l(e, i) : e === i)
                          ? void 0 !== e && f.has(t)
                            ? R(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                          ? R(t)
                          : f.add(t);
                    }
                    (m.prevProp = g),
                      (m.prevResolvedValues = E),
                      m.isActive && (y = { ...y, ...E }),
                      n && t.blockInitialAnimation && (A = !1);
                    let j = !(S && T) || C;
                    A &&
                      j &&
                      p.push(
                        ...M.map((t) => ({
                          animation: t,
                          options: { type: c },
                        }))
                      );
                  }
                  if (f.size) {
                    let e = {};
                    f.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      p.push({ animation: e });
                  }
                  let w = !!p.length;
                  return (
                    n &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (w = !1),
                    (n = !1),
                    w ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = x()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, o.H)(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let b = 0;
      class S extends P {
        constructor() {
          super(...arguments), (this.id = b++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var T = i(69276),
        A = i(19047);
      let C = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function M(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let E = (t) => (e) => C(e) && t(e, M(e));
      var V = i(80557);
      function D(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function R(t, e, i, n) {
        return D(t, e, E(i), n);
      }
      var j = i(89654);
      let k = (t, e) => Math.abs(t - e);
      var O = i(86219);
      class L {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = _(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(k(t.x, e.x) ** 2 + k(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = O.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = F(e, this.transformPagePoint)),
                O.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = _(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : F(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !C(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = F(M(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = O.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, _(s, this.history)),
            (this.removeListeners = (0, j.z)(
              R(this.contextWindow, "pointermove", this.handlePointerMove),
              R(this.contextWindow, "pointerup", this.handlePointerUp),
              R(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, O.Pn)(this.updatePoint);
        }
      }
      function F(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function B(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function _({ point: t }, e) {
        return {
          point: t,
          delta: B(t, I(e)),
          offset: B(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = I(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, V.w)(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, V.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function I(t) {
        return t[t.length - 1];
      }
      function W(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let U = W("dragHorizontal"),
        $ = W("dragVertical");
      function z(t) {
        let e = !1;
        if ("y" === t) e = $();
        else if ("x" === t) e = U();
        else {
          let t = U(),
            i = $();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function N() {
        let t = z(!0);
        return !t || (t(), !1);
      }
      function X(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var Y = i(33217),
        H = i(75004);
      function G(t) {
        return t.max - t.min;
      }
      function K(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, H.t)(e.min, e.max, t.origin)),
          (t.scale = G(i) / G(e)),
          (t.translate = (0, H.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function Z(t, e, i, n) {
        K(t.x, e.x, i.x, n ? n.originX : void 0),
          K(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function q(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + G(e));
      }
      function J(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + G(e));
      }
      function Q(t, e, i) {
        J(t.x, e.x, i.x), J(t.y, e.y, i.y);
      }
      var tt = i(51506);
      function te(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function ti(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function tn(t, e, i) {
        return { min: tr(t, e), max: tr(t, i) };
      }
      function tr(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var ts = i(58250);
      function to(t) {
        return [t("x"), t("y")];
      }
      var ta = i(77684),
        tl = i(33005),
        tu = i(75480),
        th = i(22410);
      let tc = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var td = i(3944);
      let tp = new WeakMap();
      class tf {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, ts.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new L(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(M(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = z(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  to((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tu.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = G(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && O.Wi.postRender(() => r(t, e)),
                  (0, td.K)(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                to((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: tc(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && O.Wi.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !tm(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, H.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, H.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && X(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: te(t.x, i, r), y: te(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: tn(t, "left", "right"), y: tn(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              to((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !X(e)) return !1;
          let n = e.current;
          (0, A.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (0, ta.z)(
              n,
              r.root,
              this.visualElement.getTransformPagePoint()
            ),
            o = { x: ti((t = r.layout.layoutBox).x, s.x), y: ti(t.y, s.y) };
          if (i) {
            let t = i((0, tl.z2)(o));
            (this.hasMutatedConstraints = !!t), t && (o = (0, tl.i8)(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            to((o) => {
              if (!tm(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            (0, td.K)(this.visualElement, t),
            i.start((0, th.v)(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          to((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          to((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          to((e) => {
            let { drag: i } = this.getProps();
            if (!tm(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, H.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!X(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          to((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = G(t),
                  r = G(e);
                return (
                  r > n
                    ? (i = (0, Y.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, Y.Y)(t.min, t.max - r, e.min)),
                  (0, tt.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            to((e) => {
              if (!tm(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, H.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          tp.set(this.visualElement, this);
          let t = R(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              X(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            O.Wi.read(e);
          let r = D(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (to((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function tm(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class tv extends P {
        constructor(t) {
          super(t),
            (this.removeGroupControls = T.Z),
            (this.removeListeners = T.Z),
            (this.controls = new tf(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || T.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let tg = (t) => (e, i) => {
        t && O.Wi.postRender(() => t(e, i));
      };
      class ty extends P {
        constructor() {
          super(...arguments), (this.removePointerDownListener = T.Z);
        }
        onPointerDown(t) {
          this.session = new L(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: tc(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: tg(t),
            onStart: tg(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && O.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = R(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var tx = i(57437),
        tP = i(2265),
        tw = i(67797),
        tb = i(5050);
      let tS = (0, tP.createContext)({}),
        tT = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function tA(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tC = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tu.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = tA(t, e.target.x),
            n = tA(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var tM = i(83646),
        tE = i(57290);
      let { schedule: tV, cancel: tD } = (0, i(2981).Z)(queueMicrotask, !1);
      class tR extends tP.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          (0, tE.B)(tk),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tT.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    O.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            tV.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tj(t) {
        let [e, i] = (function () {
            let t = (0, tP.useContext)(tw.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, tP.useId)();
            (0, tP.useEffect)(() => n(r), []);
            let s = (0, tP.useCallback)(() => i && i(r), [r, i]);
            return !e && i ? [!1, s] : [!0];
          })(),
          n = (0, tP.useContext)(tb.p);
        return (0, tx.jsx)(tR, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, tP.useContext)(tS),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let tk = {
        borderRadius: {
          ...tC,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tC,
        borderTopRightRadius: tC,
        borderBottomLeftRadius: tC,
        borderBottomRightRadius: tC,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = tM.P.parse(t);
            if (n.length > 5) return t;
            let r = tM.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, H.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var tO = i(72428),
        tL = i(68536);
      let tF = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tB = tF.length,
        t_ = (t) => ("string" == typeof t ? parseFloat(t) : t),
        tI = (t) => "number" == typeof t || tu.px.test(t);
      function tW(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let tU = tz(0, 0.5, tL.Bn),
        t$ = tz(0.5, 0.95, T.Z);
      function tz(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, Y.Y)(t, e, n)));
      }
      function tN(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function tX(t, e) {
        tN(t.x, e.x), tN(t.y, e.y);
      }
      function tY(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      var tH = i(46711);
      function tG(t, e, i, n, r) {
        return (
          (t -= e),
          (t = (0, tH.q2)(t, 1 / i, n)),
          void 0 !== r && (t = (0, tH.q2)(t, 1 / r, n)),
          t
        );
      }
      function tK(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (tu.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, H.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, H.t)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = tG(t.min, e, i, a, r)),
            (t.max = tG(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let tZ = ["x", "scaleX", "originX"],
        tq = ["y", "scaleY", "originY"];
      function tJ(t, e, i, n) {
        tK(t.x, e, tZ, i ? i.x : void 0, n ? n.x : void 0),
          tK(t.y, e, tq, i ? i.y : void 0, n ? n.y : void 0);
      }
      var tQ = i(69792);
      function t0(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function t1(t) {
        return t0(t.x) && t0(t.y);
      }
      function t5(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function t2(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function t9(t, e) {
        return t2(t.x, e.x) && t2(t.y, e.y);
      }
      function t3(t) {
        return G(t.x) / G(t.y);
      }
      function t6(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      var t7 = i(28746);
      class t8 {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, t7.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, t7.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      var t4 = i(98107);
      let et = (t, e) => t.depth - e.depth;
      class ee {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, t7.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, t7.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(et),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var ei = i(99155),
        en = i(77599);
      function er(t) {
        let e = (0, en.i)(t) ? t.get() : t;
        return (0, ei.p)(e) ? e.toValue() : e;
      }
      var es = i(59993),
        eo = i(48170),
        ea = i(89334),
        el = i(2087);
      let eu = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        eh = "undefined" != typeof window && void 0 !== window.MotionDebug,
        ec = ["", "X", "Y", "Z"],
        ed = { visibility: "hidden" },
        ep = 0;
      function ef(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function em({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = ep++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  eh &&
                    (eu.totalNodes =
                      eu.resolvedTargetDeltas =
                      eu.recalculatedProjection =
                        0),
                  this.nodes.forEach(ey),
                  this.nodes.forEach(eA),
                  this.nodes.forEach(eC),
                  this.nodes.forEach(ex),
                  eh && window.MotionDebug.record(eu);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ee());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tO.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (0, eo.v)(e)), (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = es.X.now(),
                      n = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && ((0, O.Pn)(n), t(r - 250));
                      };
                    return O.Wi.read(n, !0), () => (0, O.Pn)(n);
                  })(n, 0)),
                  tT.hasAnimatedSinceResize &&
                    ((tT.hasAnimatedSinceResize = !1), this.nodes.forEach(eT));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        ej,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !t9(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, tQ.e)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || eT(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, O.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(eM),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = (0, el.s)(i);
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      O.Wi,
                      !(t || i)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(ew);
              return;
            }
            this.isUpdating || this.nodes.forEach(eb),
              (this.isUpdating = !1),
              this.nodes.forEach(eS),
              this.nodes.forEach(ev),
              this.nodes.forEach(eg),
              this.clearAllSnapshots();
            let t = es.X.now();
            (O.frameData.delta = (0, tt.u)(
              0,
              1e3 / 60,
              t - O.frameData.timestamp
            )),
              (O.frameData.timestamp = t),
              (O.frameData.isProcessing = !0),
              O.yL.update.process(O.frameData),
              O.yL.preRender.process(O.frameData),
              O.yL.render.process(O.frameData),
              (O.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), tV.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(eP), this.sharedNodes.forEach(eE);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              O.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            O.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, ts.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !t1(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || (0, t4.ud)(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              eL((e = n).x),
              eL(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return (0, ts.dO)();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(eB)
              )
            ) {
              let { scroll: t } = this.root;
              t && ((0, tH.am)(i.x, t.offset.x), (0, tH.am)(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = (0, ts.dO)();
            if (
              (tX(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && tX(i, t),
                (0, tH.am)(i.x, r.offset.x),
                (0, tH.am)(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = (0, ts.dO)();
            tX(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                (0, tH.D2)(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                (0, t4.ud)(n.latestValues) && (0, tH.D2)(i, n.latestValues);
            }
            return (
              (0, t4.ud)(this.latestValues) && (0, tH.D2)(i, this.latestValues),
              i
            );
          }
          removeTransform(t) {
            let e = (0, ts.dO)();
            tX(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, t4.ud)(i.latestValues)) continue;
              (0, t4.Lj)(i.latestValues) && i.updateSnapshot();
              let n = (0, ts.dO)();
              tX(n, i.measurePageBox()),
                tJ(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return (0, t4.ud)(this.latestValues) && tJ(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                O.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = O.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, ts.dO)()),
                    (this.relativeTargetOrigin = (0, ts.dO)()),
                    Q(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    tX(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, ts.dO)()),
                    (this.targetWithTransforms = (0, ts.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      q(i.x, n.x, r.x),
                      q(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : tX(this.target, this.layout.layoutBox),
                      (0, tH.o2)(this.target, this.targetDelta))
                    : tX(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, ts.dO)()),
                      (this.relativeTargetOrigin = (0, ts.dO)()),
                      Q(this.relativeTargetOrigin, this.target, t.target),
                      tX(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                eh && eu.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, t4.Lj)(this.parent.latestValues) ||
              (0, t4.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === O.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            tX(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, tH.YY)(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, ts.dO)()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (tY(this.prevProjectionDelta.x, this.projectionDelta.x),
                tY(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              Z(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                t6(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                t6(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              eh && eu.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = (0, ts.wc)()),
              (this.projectionDelta = (0, ts.wc)()),
              (this.projectionDeltaWithTransform = (0, ts.wc)());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = (0, ts.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, ts.dO)(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(eR)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (eV(o.x, t.x, n),
                  eV(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  Q(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    eD(p.x, f.x, a.x, n),
                    eD(p.y, f.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      t5(u.x, d.x) && t5(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = (0, ts.dO)()),
                    tX(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, H.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          tU(n)
                        )),
                        (t.opacityExit = (0, H.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          t$(n)
                        )))
                      : s &&
                        (t.opacity = (0, H.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < tB; r++) {
                      let s = `border${tF[r]}Radius`,
                        o = tW(e, s),
                        a = tW(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || tI(o) === tI(a)
                          ? ((t[s] = Math.max((0, H.t)(t_(o), t_(a), n), 0)),
                            (tu.aQ.test(a) || tu.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, H.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, O.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = O.Wi.update(() => {
                (tT.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, ea.D)(0, 1e3, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                eF(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || (0, ts.dO)();
                let e = G(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = G(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              tX(e, i),
                (0, tH.D2)(e, r),
                Z(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new t8()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && ef("z", t, n, this.animationValues);
            for (let e = 0; e < ec.length; e++)
              ef(`rotate${ec[e]}`, t, n, this.animationValues),
                ef(`skew${ec[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ed;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  er(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    er(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, t4.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            tE.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = tE.P[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? er(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(ew),
              this.root.sharedNodes.clear();
          }
        };
      }
      function ev(t) {
        t.updateLayout();
      }
      function eg(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? to((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = G(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : eF(r, i.layoutBox, e) &&
              to((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = G(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = (0, ts.wc)();
          Z(o, e, i.layoutBox);
          let a = (0, ts.wc)();
          s
            ? Z(a, t.applyTransform(n, !0), i.measuredBox)
            : Z(a, e, i.layoutBox);
          let l = !t1(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = (0, ts.dO)();
                Q(o, i.layoutBox, r.layoutBox);
                let a = (0, ts.dO)();
                Q(a, e, s.layoutBox),
                  t9(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function ey(t) {
        eh && eu.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ex(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function eP(t) {
        t.clearSnapshot();
      }
      function ew(t) {
        t.clearMeasurements();
      }
      function eb(t) {
        t.isLayoutDirty = !1;
      }
      function eS(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function eT(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function eA(t) {
        t.resolveTargetDelta();
      }
      function eC(t) {
        t.calcProjection();
      }
      function eM(t) {
        t.resetSkewAndRotation();
      }
      function eE(t) {
        t.removeLeadSnapshot();
      }
      function eV(t, e, i) {
        (t.translate = (0, H.t)(e.translate, 0, i)),
          (t.scale = (0, H.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function eD(t, e, i, n) {
        (t.min = (0, H.t)(e.min, i.min, n)),
          (t.max = (0, H.t)(e.max, i.max, n));
      }
      function eR(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ej = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ek = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        eO = ek("applewebkit/") && !ek("chrome/") ? Math.round : T.Z;
      function eL(t) {
        (t.min = eO(t.min)), (t.max = eO(t.max));
      }
      function eF(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(t3(e) - t3(i))))
        );
      }
      function eB(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let e_ = em({
          attachResizeListener: (t, e) => D(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        eI = { current: void 0 },
        eW = em({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!eI.current) {
              let t = new e_({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (eI.current = t);
            }
            return eI.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function eU(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return R(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (n, r) => {
            if ("touch" === n.pointerType || N()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = s[i];
            o && O.Wi.postRender(() => o(n, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class e$ extends P {
        mount() {
          this.unmount = (0, j.z)(eU(this.node, !0), eU(this.node, !1));
        }
        unmount() {}
      }
      class ez extends P {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, j.z)(
            D(this.node.current, "focus", () => this.onFocus()),
            D(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let eN = (t, e) => !!e && (t === e || eN(t, e.parentElement));
      function eX(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, M(i));
      }
      class eY extends P {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = T.Z),
            (this.removeEndListeners = T.Z),
            (this.removeAccessibleListeners = T.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = R(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: n,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      s = r || eN(this.node.current, t.target) ? i : n;
                    s && O.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = R(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, j.z)(n, r)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = D(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = D(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          eX("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && O.Wi.postRender(() => i(t, e));
                          });
                      }
                    )),
                    eX("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = D(this.node.current, "blur", () => {
                  this.isPressing &&
                    eX("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, j.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && O.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !N()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && O.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = R(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = D(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, j.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let eH = new WeakMap(),
        eG = new WeakMap(),
        eK = (t) => {
          let e = eH.get(t.target);
          e && e(t);
        },
        eZ = (t) => {
          t.forEach(eK);
        },
        eq = { some: 0, all: 1 };
      class eJ extends P {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : eq[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              eG.has(i) || eG.set(i, {});
              let n = eG.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(eZ, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              eH.set(t, i),
              n.observe(t),
              () => {
                eH.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var eQ = i(29791);
      let e0 = (0, tP.createContext)({});
      var e1 = i(9033);
      let e5 = (0, tP.createContext)({ strict: !1 });
      var e2 = i(65908);
      let e9 = !1;
      function e3() {
        window.MotionHandoffIsComplete = !0;
      }
      var e6 = i(83795);
      function e7(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var e8 = i(96317),
        e4 = i(77282);
      let it = Symbol.for("motionComponentSymbol"),
        ie = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function ii(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (ie.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var ir = i(70545),
        is = i(875),
        io = i(28595),
        ia = i(30458),
        il = i(35674);
      let iu = (t) => (e, i) => {
        let n = (0, tP.useContext)(e0),
          r = (0, tP.useContext)(tw.O),
          s = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: n,
              },
              r,
              s,
              a,
              l
            ) {
              let u = {
                latestValues: (function (t, e, i, n, r) {
                  var s;
                  let a = {},
                    l = [],
                    u =
                      n &&
                      (null === (s = t.style) || void 0 === s
                        ? void 0
                        : s.willChange) === void 0,
                    h = r(t, {});
                  for (let t in h) a[t] = er(h[t]);
                  let { initial: c, animate: d } = t,
                    p = (0, e6.G)(t),
                    f = (0, e6.M)(t);
                  e &&
                    f &&
                    !p &&
                    !1 !== t.inherit &&
                    (void 0 === c && (c = e.initial),
                    void 0 === d && (d = e.animate));
                  let m = !!i && !1 === i.initial,
                    v = (m = m || !1 === c) ? d : c;
                  return (
                    v &&
                      "boolean" != typeof v &&
                      !(0, o.H)(v) &&
                      ih(t, v, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = m ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (a[e] = i);
                        }
                        for (let t in e) a[t] = e[t];
                      }),
                    u &&
                      (d &&
                        !1 !== c &&
                        !(0, o.H)(d) &&
                        ih(t, d, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = (0, il.p)(e);
                              i && (0, t7.y4)(t, i);
                            })(l, e);
                        }),
                      l.length && (a.willChange = l.join(","))),
                    a
                  );
                })(r, s, a, !l && t, e),
                renderState: i(),
              };
              return n && (u.mount = (t) => n(r, t, u)), u;
            })(t, e, n, r, i);
        return i ? s() : (0, ia.h)(s);
      };
      function ih(t, e, i) {
        let n = Array.isArray(e) ? e : [e];
        for (let e = 0; e < n.length; e++) {
          let r = (0, io.o)(t, n[e]);
          if (r) {
            let { transitionEnd: t, transition: e, ...n } = r;
            i(n, t);
          }
        }
      }
      let ic = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        id = () => ({ ...ic(), attrs: {} });
      var ip = i(92622),
        im = i(75969);
      let iv = {
          useVisualState: iu({
            scrapeMotionValuesFromProps: is.U,
            createRenderState: id,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              O.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                O.Wi.render(() => {
                  (0, ip.i)(i, n, (0, im.a)(e.tagName), t.transformTemplate),
                    (0, ir.K)(e, i);
                });
            },
          }),
        },
        ig = {
          useVisualState: iu({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: i(11315).U,
            createRenderState: ic,
          }),
        };
      var iy = i(42020),
        ix = i(14651);
      function iP(t, e, i) {
        for (let n in e) (0, en.i)(e[n]) || (0, iy.j)(n, i) || (t[n] = e[n]);
      }
      let iw = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function ib(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          iw.has(t)
        );
      }
      let iS = (t) => !ib(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (iS = (t) => (t.startsWith("on") ? !ib(t) : n(t)));
      } catch (t) {}
      var iT = i(39440),
        iA = i(82714);
      let iC = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((r = {
          animation: { Feature: w },
          exit: { Feature: S },
          inView: { Feature: eJ },
          tap: { Feature: eY },
          focus: { Feature: ez },
          hover: { Feature: e$ },
          pan: { Feature: ty },
          drag: { Feature: tv, ProjectionNode: eW, MeasureLayout: tj },
          layout: { ProjectionNode: eW, MeasureLayout: tj },
        }),
        (s = (t, e) =>
          ii(t)
            ? new iA.e(e)
            : new iT.W(e, { allowProjection: t !== tP.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: n,
              useVisualState: r,
              Component: s,
            } = t;
            e &&
              (function (t) {
                for (let e in t)
                  e8.featureDefinitions[e] = {
                    ...e8.featureDefinitions[e],
                    ...t[e],
                  };
              })(e);
            let o = (0, tP.forwardRef)(function (t, e) {
              var o;
              let a;
              let l = {
                  ...(0, tP.useContext)(eQ._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, tP.useContext)(tb.p).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = l,
                c = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if ((0, e6.G)(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || (0, u.$)(e) ? e : void 0,
                        animate: (0, u.$)(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, tP.useContext)(e0));
                  return (0, tP.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [e7(e), e7(i)]
                  );
                })(t),
                d = r(t, h);
              if (!h && e4.j) {
                (0, tP.useContext)(e5).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = e8.featureDefinitions;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(l);
                (a = t.MeasureLayout),
                  (c.visualElement = (function (t, e, i, n, r) {
                    var s;
                    let { visualElement: o } = (0, tP.useContext)(e0),
                      a = (0, tP.useContext)(e5),
                      l = (0, tP.useContext)(tw.O),
                      u = (0, tP.useContext)(eQ._).reducedMotion,
                      h = (0, tP.useRef)();
                    (n = n || a.renderer),
                      !h.current &&
                        n &&
                        (h.current = n(t, {
                          visualState: e,
                          parent: o,
                          props: i,
                          presenceContext: l,
                          blockInitialAnimation: !!l && !1 === l.initial,
                          reducedMotionConfig: u,
                        }));
                    let c = h.current,
                      d = (0, tP.useContext)(tS);
                    c &&
                      !c.projection &&
                      r &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && X(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(h.current, i, r, d),
                      (0, tP.useInsertionEffect)(() => {
                        c && c.update(i, l);
                      });
                    let p = i[e2.M],
                      f = (0, tP.useRef)(
                        !!p &&
                          !window.MotionHandoffIsComplete &&
                          (null === (s = window.MotionHasOptimisedAnimation) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, p))
                      );
                    return (
                      (0, e1.L)(() => {
                        c &&
                          (c.updateFeatures(),
                          tV.render(c.render),
                          f.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, tP.useEffect)(() => {
                        c &&
                          (!f.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          (f.current = !1),
                          e9 || ((e9 = !0), queueMicrotask(e3)));
                      }),
                      c
                    );
                  })(s, d, l, i, t.ProjectionNode));
              }
              return (0, tx.jsxs)(e0.Provider, {
                value: c,
                children: [
                  a && c.visualElement
                    ? (0, tx.jsx)(a, { visualElement: c.visualElement, ...l })
                    : null,
                  n(
                    s,
                    t,
                    ((o = c.visualElement),
                    (0, tP.useCallback)(
                      (t) => {
                        t && d.mount && d.mount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : X(e) && (e.current = t));
                      },
                      [o]
                    )),
                    d,
                    h,
                    c.visualElement
                  ),
                ],
              });
            });
            return (o[it] = s), o;
          })({
            ...(ii(t) ? iv : ig),
            preloadedFeatures: r,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: r }, s) => {
                let o = (
                    ii(e)
                      ? function (t, e, i, n) {
                          let r = (0, tP.useMemo)(() => {
                            let i = id();
                            return (
                              (0, ip.i)(
                                i,
                                e,
                                (0, im.a)(n),
                                t.transformTemplate
                              ),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            iP(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                iP(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, tP.useMemo)(() => {
                                      let i = ic();
                                      return (
                                        (0, ix.r)(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, r, s, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (iS(r) ||
                          (!0 === i && ib(r)) ||
                          (!e && !ib(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(i, "string" == typeof e, t),
                  l = e !== tP.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, tP.useMemo)(() => ((0, en.i)(u) ? u.get() : u), [u]);
                return (0, tP.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: s,
            Component: t,
          });
        })
      );
    },
    63078: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return f;
        },
      });
      var n = i(99102),
        r = i(19047),
        s = i(84386),
        o = i(61534);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(35014),
        u = i(23769),
        h = i(23653),
        c = i(83646),
        d = i(66450);
      let p = new Set(["auto", "none", "0"]);
      class f extends h.e {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, o.t)(n))) {
              let l = (function t(e, i, n = 1) {
                (0, r.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [l, u] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!l) return;
                let h = window.getComputedStyle(i).getPropertyValue(l);
                if (h) {
                  let t = h.trim();
                  return (0, s.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(u) ? t(u, i, n + 1) : u;
              })(n, e.current);
              void 0 !== l && (t[i] = l),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(i) || 2 !== t.length))
            return;
          let [n, h] = t,
            c = (0, u.C)(n),
            d = (0, u.C)(h);
          if (c !== d) {
            if ((0, l.mP)(c) && (0, l.mP)(d))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || (0, n.W)(r)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !p.has(e) &&
                  (0, c.V)(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = (0, d.T)(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = l.lw[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    1886: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return D;
        },
      });
      var n = i(77282);
      let r = { current: null },
        s = { current: !1 };
      var o = i(72428),
        a = i(20804),
        l = i(77599),
        u = i(26019),
        h = i(83795),
        c = i(28595),
        d = i(96317),
        p = i(44839),
        f = i(23653),
        m = i(84386),
        v = i(99102),
        g = i(50146),
        y = i(83646),
        x = i(23769),
        P = i(12649);
      let w = [...x.$, g.$, y.P],
        b = (t) => w.find((0, P.l)(t));
      var S = i(66450),
        T = i(58250),
        A = i(59993),
        C = i(86219);
      let M = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class E {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = f.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = A.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                C.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: u } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = u),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, h.G)(e)),
            (this.isVariantNode = (0, h.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== a[t] && (0, l.i)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            p.R.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            s.current ||
              (function () {
                if (((s.current = !0), n.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (r.current = t.matches);
                    t.addListener(e), e();
                  } else r.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || r.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (p.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, C.Pn)(this.notifyUpdate),
          (0, C.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = u.G.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && C.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in d.featureDefinitions) {
            let e = d.featureDefinitions[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, T.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < M.length; e++) {
            let i = M[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if ((0, l.i)(r)) t.addValue(n, r);
              else if ((0, l.i)(s)) t.addValue(n, (0, a.BX)(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, a.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, a.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && ((0, m.P)(n) || (0, v.W)(n))
                ? (n = parseFloat(n))
                : !b(n) && y.P.test(e) && (n = (0, S.T)(t, e)),
              this.setBaseTarget(t, (0, l.i)(n) ? n.get() : n)),
            (0, l.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = (0, c.o)(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, l.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new o.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var V = i(63078);
      class D extends E {
        constructor() {
          super(...arguments), (this.KeyframeResolver = V.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
    },
    51580: function (t, e, i) {
      "use strict";
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    61534: function (t, e, i) {
      "use strict";
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    48170: function (t, e, i) {
      "use strict";
      function n(t) {
        return t instanceof SVGElement && "svg" !== t.tagName;
      }
      i.d(e, {
        v: function () {
          return n;
        },
      });
    },
    35014: function (t, e, i) {
      "use strict";
      i.d(e, {
        Ei: function () {
          return d;
        },
        lw: function () {
          return p;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var n = i(26019),
        r = i(40783),
        s = i(75480);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === r.Rx || t === s.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(["x", "y", "z"]),
        c = n._.filter((t) => !h.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n &&
              (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    66450: function (t, e, i) {
      "use strict";
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var n = i(83646),
        r = i(24913),
        s = i(40781);
      function o(t, e) {
        let i = (0, s.A)(t);
        return (
          i !== r.h && (i = n.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    40781: function (t, e, i) {
      "use strict";
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var n = i(50146),
        r = i(24913);
      let s = {
          ...i(37755).j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => s[t];
    },
    23769: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var n = i(40783),
        r = i(75480),
        s = i(12649);
      let o = [
          n.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    37755: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return o;
        },
      });
      var n = i(40783),
        r = i(75480);
      let s = { ...n.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: n.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: s,
        };
    },
    12649: function (t, e, i) {
      "use strict";
      i.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    39440: function (t, e, i) {
      "use strict";
      i.d(e, {
        W: function () {
          return d;
        },
      });
      var n = i(14651),
        r = i(61534),
        s = i(26019),
        o = i(11315),
        a = i(39979),
        l = i(40781),
        u = i(77684),
        h = i(1886),
        c = i(77599);
      class d extends h.J {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = a.N);
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, l.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, r.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.J)(t, e);
        }
        build(t, e, i) {
          (0, n.r)(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, o.U)(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, c.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
    },
    14651: function (t, e, i) {
      "use strict";
      i.d(e, {
        r: function () {
          return u;
        },
      });
      var n = i(26019);
      let r = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var s = i(37755);
      let o = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        a = n._.length;
      var l = i(61534);
      function u(t, e, i) {
        let { style: u, vars: h, transformOrigin: c } = t,
          d = !1,
          p = !1;
        for (let t in e) {
          let i = e[t];
          if (n.G.has(t)) {
            d = !0;
            continue;
          }
          if ((0, l.f)(t)) {
            h[t] = i;
            continue;
          }
          {
            let e = r(i, s.j[t]);
            t.startsWith("origin") ? ((p = !0), (c[t] = e)) : (u[t] = e);
          }
        }
        if (
          (!e.transform &&
            (d || i
              ? (u.transform = (function (t, e, i) {
                  let l = "",
                    u = !0;
                  for (let h = 0; h < a; h++) {
                    let a = n._[h],
                      c = t[a];
                    if (void 0 === c) continue;
                    let d = !0;
                    if (
                      !(d =
                        "number" == typeof c
                          ? c === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(c)) ||
                      i
                    ) {
                      let t = r(c, s.j[a]);
                      if (!d) {
                        u = !1;
                        let e = o[a] || a;
                        l += `${e}(${t}) `;
                      }
                      i && (e[a] = t);
                    }
                  }
                  return (
                    (l = l.trim()),
                    i ? (l = i(e, u ? "" : l)) : u && (l = "none"),
                    l
                  );
                })(e, t.transform, i))
              : u.transform && (u.transform = "none")),
          p)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = c;
          u.transformOrigin = `${t} ${e} ${i}`;
        }
      }
    },
    39979: function (t, e, i) {
      "use strict";
      function n(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      i.d(e, {
        N: function () {
          return n;
        },
      });
    },
    11315: function (t, e, i) {
      "use strict";
      i.d(e, {
        U: function () {
          return s;
        },
      });
      var n = i(42020),
        r = i(77599);
      function s(t, e, i) {
        var s;
        let { style: o } = t,
          a = {};
        for (let l in o)
          ((0, r.i)(o[l]) ||
            (e.style && (0, r.i)(e.style[l])) ||
            (0, n.j)(l, t) ||
            (null === (s = null == i ? void 0 : i.getValue(l)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (a[l] = o[l]);
        return (
          i && o && "string" == typeof o.willChange && (i.applyWillChange = !1),
          a
        );
      }
    },
    26019: function (t, e, i) {
      "use strict";
      i.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(n);
    },
    44839: function (t, e, i) {
      "use strict";
      i.d(e, {
        R: function () {
          return n;
        },
      });
      let n = new WeakMap();
    },
    82714: function (t, e, i) {
      "use strict";
      i.d(e, {
        e: function () {
          return p;
        },
      });
      var n = i(875),
        r = i(1886),
        s = i(92622),
        o = i(51580),
        a = i(82394),
        l = i(26019),
        u = i(70545),
        h = i(40781),
        c = i(58250),
        d = i(75969);
      class p extends r.J {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = c.dO);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (l.G.has(e)) {
            let t = (0, h.A)(e);
            return (t && t.default) || 0;
          }
          return (e = a.s.has(e) ? e : (0, o.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, n.U)(t, e, i);
        }
        build(t, e, i) {
          (0, s.i)(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          (0, u.K)(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = (0, d.a)(t.tagName)), super.mount(t);
        }
      }
    },
    92622: function (t, e, i) {
      "use strict";
      i.d(e, {
        i: function () {
          return l;
        },
      });
      var n = i(14651),
        r = i(75480);
      function s(t, e, i) {
        return "string" == typeof t ? t : r.px.transform(e + i * t);
      }
      let o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: l,
          originX: u,
          originY: h,
          pathLength: c,
          pathSpacing: d = 1,
          pathOffset: p = 0,
          ...f
        },
        m,
        v
      ) {
        if (((0, n.r)(t, f, v), m)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: g, style: y, dimensions: x } = t;
        g.transform && (x && (y.transform = g.transform), delete g.transform),
          x &&
            (void 0 !== u || void 0 !== h || y.transform) &&
            (y.transformOrigin = (function (t, e, i) {
              let n = s(e, t.x, t.width),
                r = s(i, t.y, t.height);
              return `${n} ${r}`;
            })(x, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (g.x = e),
          void 0 !== i && (g.y = i),
          void 0 !== l && (g.scale = l),
          void 0 !== c &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? o : a;
              t[l.offset] = r.px.transform(-n);
              let u = r.px.transform(e),
                h = r.px.transform(i);
              t[l.array] = `${u} ${h}`;
            })(g, c, d, p, !1);
      }
    },
    82394: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return n;
        },
      });
      let n = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    75969: function (t, e, i) {
      "use strict";
      i.d(e, {
        a: function () {
          return n;
        },
      });
      let n = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    70545: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return o;
        },
      });
      var n = i(51580),
        r = i(39979),
        s = i(82394);
      function o(t, e, i, o) {
        for (let i in ((0, r.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(s.s.has(i) ? i : (0, n.D)(i), e.attrs[i]);
      }
    },
    875: function (t, e, i) {
      "use strict";
      i.d(e, {
        U: function () {
          return o;
        },
      });
      var n = i(77599),
        r = i(11315),
        s = i(26019);
      function o(t, e, i) {
        let o = (0, r.U)(t, e, i);
        for (let i in t)
          ((0, n.i)(t[i]) || (0, n.i)(e[i])) &&
            (o[
              -1 !== s._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return o;
      }
    },
    23653: function (t, e, i) {
      "use strict";
      i.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var n = i(35014),
        r = i(86219);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, n.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class c {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    83795: function (t, e, i) {
      "use strict";
      i.d(e, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var n = i(64572),
        r = i(56859),
        s = i(53552);
      function o(t) {
        return (0, n.H)(t.animate) || s.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    56859: function (t, e, i) {
      "use strict";
      function n(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      i.d(e, {
        $: function () {
          return n;
        },
      });
    },
    70352: function (t, e, i) {
      "use strict";
      i.d(e, {
        x: function () {
          return r;
        },
      });
      var n = i(28595);
      function r(t, e, i) {
        let r = t.getProps();
        return (0, n.o)(r, e, void 0 !== i ? i : r.custom, t);
      }
    },
    28595: function (t, e, i) {
      "use strict";
      function n(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function r(t, e, i, r) {
        if ("function" == typeof e) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        return e;
      }
      i.d(e, {
        o: function () {
          return r;
        },
      });
    },
    53552: function (t, e, i) {
      "use strict";
      i.d(e, {
        V: function () {
          return r;
        },
        e: function () {
          return n;
        },
      });
      let n = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        r = ["initial", ...n];
    },
    565: function (t, e, i) {
      "use strict";
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    28746: function (t, e, i) {
      "use strict";
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    51506: function (t, e, i) {
      "use strict";
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    19047: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(69276);
      let r = n.Z,
        s = n.Z;
    },
    77282: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    84386: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    99102: function (t, e, i) {
      "use strict";
      i.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/u.test(t);
    },
    37521: function (t, e, i) {
      "use strict";
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      i.d(e, {
        X: function () {
          return n;
        },
      });
    },
    75004: function (t, e, i) {
      "use strict";
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    69276: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    92007: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return r;
        },
      });
      var n = i(29924);
      function r(t) {
        let e = [0];
        return (0, n.c)(e, t.length - 1), e;
      }
    },
    29924: function (t, e, i) {
      "use strict";
      i.d(e, {
        c: function () {
          return s;
        },
      });
      var n = i(75004),
        r = i(33217);
      function s(t, e) {
        let i = t[t.length - 1];
        for (let s = 1; s <= e; s++) {
          let o = (0, r.Y)(0, e, s);
          t.push((0, n.t)(i, 1, o));
        }
      }
    },
    89654: function (t, e, i) {
      "use strict";
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    33217: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    99155: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var n = i(66925);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    72428: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(28746);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    80557: function (t, e, i) {
      "use strict";
      i.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    30458: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    9033: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = i(77282).j ? n.useLayoutEffect : n.useEffect;
    },
    83476: function (t, e, i) {
      "use strict";
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      i.d(e, {
        R: function () {
          return n;
        },
      });
    },
    20804: function (t, e, i) {
      "use strict";
      i.d(e, {
        BX: function () {
          return h;
        },
        Hg: function () {
          return u;
        },
      });
      var n = i(72428),
        r = i(83476),
        s = i(59993),
        o = i(86219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.7.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    45778: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(91583);
      let r = {
        test: (0, i(93338).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    598: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(40783),
        r = i(75480),
        s = i(47292),
        o = i(93338);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    50146: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(47292),
        r = i(45778),
        s = i(598),
        o = i(91583);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    91583: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(51506),
        r = i(40783),
        s = i(47292),
        o = i(93338);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(r.Fq.transform(n)) +
            ")",
        };
    },
    93338: function (t, e, i) {
      "use strict";
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(47292);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, n.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    24913: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return l;
        },
      });
      var n = i(83646),
        r = i(47292);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(r.KP) || [];
        if (!n) return t;
        let o = i.replace(n, ""),
          a = s.has(e) ? 1 : 0;
        return n !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    83646: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var n = i(50146),
        r = i(47292);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(u), l.push(o), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(u), l.push("var"), i.push(t))
                  : (r.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                ? (l += n.$.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    40783: function (t, e, i) {
      "use strict";
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(51506);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    75480: function (t, e, i) {
      "use strict";
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(47292);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    47292: function (t, e, i) {
      "use strict";
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    3944: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return l;
        },
      });
      var n = i(20804),
        r = i(35674),
        s = i(28746);
      class o extends n.Hg {
        constructor() {
          super(...arguments), (this.values = []);
        }
        add(t) {
          let e = (0, r.p)(t);
          e && ((0, s.y4)(this.values, e), this.update());
        }
        update() {
          this.set(this.values.length ? this.values.join(", ") : "auto");
        }
      }
      var a = i(77599);
      function l(t, e) {
        var i, n;
        if (!t.applyWillChange) return;
        let r = t.getValue("willChange");
        if (
          (r ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((r = new o("auto")), t.addValue("willChange", r)),
          (n = r),
          (0, a.i)(n) && n.add)
        )
          return r.add(e);
      }
    },
    35674: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return o;
        },
      });
      var n = i(66323),
        r = i(51580),
        s = i(26019);
      function o(t) {
        return s.G.has(t) ? "transform" : n.t.has(t) ? (0, r.D)(t) : void 0;
      }
    },
    77599: function (t, e, i) {
      "use strict";
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
  },
]);
