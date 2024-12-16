(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    78914: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 64404)),
        Promise.resolve().then(s.bind(s, 27640)),
        Promise.resolve().then(s.bind(s, 90239)),
        Promise.resolve().then(s.t.bind(s, 84080, 23)),
        Promise.resolve().then(s.bind(s, 10912)),
        Promise.resolve().then(s.bind(s, 61481)),
        Promise.resolve().then(s.t.bind(s, 53054, 23)),
        Promise.resolve().then(s.bind(s, 83733)),
        Promise.resolve().then(s.bind(s, 29259)),
        Promise.resolve().then(s.bind(s, 49873)),
        Promise.resolve().then(s.bind(s, 74085)),
        Promise.resolve().then(s.bind(s, 26018)),
        Promise.resolve().then(s.bind(s, 10823)),
        Promise.resolve().then(s.bind(s, 86346)),
        Promise.resolve().then(s.bind(s, 90861)),
        Promise.resolve().then(s.bind(s, 43075)),
        Promise.resolve().then(s.bind(s, 35273));
    },
    83733: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return o;
        },
      });
      var n = s(57437),
        i = s(2265),
        a = s(28857),
        r = s(61195),
        l = s(28109);
      function o(e) {
        let t = (0, a.Z)((e) => e.setAll),
          s = (0, r.Z)((e) => e.setAll),
          { all: o } = (0, r.Z)(),
          c = (0, a.Z)((e) => e.fetchPrices),
          d = (0, r.Z)((e) => e.fetchMoneyMarketData),
          u = (0, l.Z)((e) => e.fetchIncentives);
        return (
          (0, i.useEffect)(() => {
            t(e.prices);
          }, [e.prices, t]),
          (0, i.useEffect)(() => {
            o.length > 0 || s(e.markets, e.interestRateModels);
          }, []),
          (0, i.useEffect)(() => {
            c(), d(), u();
          }, [d, u, c]),
          (0, n.jsx)(n.Fragment, { children: e.children })
        );
      }
    },
    29259: function (e, t, s) {
      "use strict";
      var n = s(57437),
        i = s(2265),
        a = s(15766),
        r = s(67593),
        l = s(87726),
        o = s(12430);
      t.default = () => {
        let [e, t] = (0, i.useState)(!1);
        return ((0, i.useEffect)(() => {
          t(!localStorage.getItem(o._.cookieConsent));
        }, []),
        e)
          ? (0, n.jsx)("div", {
              className:
                "fixed bottom-0 z-30 w-full border-t border-border-color bg-background p-3",
              children: (0, n.jsx)(r.default, {
                children: (0, n.jsxs)("section", {
                  className:
                    "mx-auto flex flex-col md:flex-row gap-5 items-center justify-between text-sm text-justify",
                  children: [
                    (0, n.jsx)(l.Z, {
                      wrap: !0,
                      text: "We use our own cookies and third-party cookies so that we can display this website correctly and better understand how this website is used, with a view to improving the services we offer.",
                    }),
                    (0, n.jsx)("div", {
                      className: "flex items-center gap-3",
                      children: (0, n.jsx)(a.Z, {
                        onClick: () => {
                          localStorage.setItem(o._.cookieConsent, "true"),
                            t(!1);
                        },
                        text: "Accept",
                      }),
                    }),
                  ],
                }),
              }),
            })
          : null;
      };
    },
    49873: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return p;
        },
      });
      var n = s(57437),
        i = s(2265),
        a = s(78336);
      let r = [
          a.bz[a.T3.Forum],
          a.bz[a.T3.Documentation],
          a.bz[a.T3.ReportAnIssue],
        ],
        l = [a.bz[a.T3.TermsOfUse], a.bz[a.T3.PrivacyPolicy]],
        o = [
          { ...a.bz[a.T3.X], icon: "x" },
        ];
      var c = s(66648),
        d = s(87138),
        u = s(87726),
        x = s(73399),
        m = s(67593),
        h = s(53078),
        f = s(7231);
      function p() {
        let e = (0, i.useMemo)(() => r, []),
          t = (0, i.useMemo)(() => l, []),
          s = (0, i.useMemo)(() => o, []),
          a = new Date().getFullYear();
        return (0, n.jsx)(m.default, {
          children: (0, n.jsxs)("section", {
            className:
              "flex flex-col-reverse gap-6 lg:grid lg:grid-cols-4 py-12",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "flex flex-col items-center lg:items-start justify-center gap-5",
                children: [
                  (0, n.jsx)(c.default, {
                    src: "/logo/logo-footer.svg",
                    alt: "Logo SYNO",
                    width: 128,
                    height: 64,
                    priority: !0,
                  }),

                ],
              }),
              (0, n.jsxs)("section", {
                className: "flex flex-col w-full lg:col-span-3",
                children: [

                  (0, n.jsxs)("footer", {
                    className:
                      "flex flex-col justify-end items-center lg:items-end gap-2",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "flex w-full justify-center lg:justify-end mt-6 gap-6",
                        children: t.map((e, t) =>
                          (0, n.jsx)(
                            d.default,
                            {
                              href: e.href,
                              target: "_blank",
                              className:
                                "uppercase transition text-white/60 hover:text-white/80 text-[11px]",
                              children: e.name,
                            },
                            "footer-second-link-" + t
                          )
                        ),
                      }),
                      (0, n.jsx)("span", {
                        className: "opacity-60",
                        children: (0, n.jsx)(u.Z, {
                          size: "sm",
                          text: "\xa9 ".concat(
                            a,
                            " Syno Labs. All Rights Reserved."
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    74085: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return g;
        },
      });
      var n = s(57437),
        i = s(2265),
        a = s(72664),
        r = s(83556),
        l = s(78336);
      let o = [
        { ...l.bz[l.T3.Markets] },
        { ...l.bz[l.T3.Portfolio] },
        { ...l.bz[l.T3.SYNO] },
        { ...l.bz[l.T3.Governance] },
      ];
      var c = s(16463),
        d = s(77155),
        u = s(87138),
        x = s(57818),
        m = s(66648),
        h = s(43075);
      function f() {
        let e = (0, h.MG)();
        return (0, n.jsx)(u.default, {
          href: "/",
          children: (0, n.jsxs)("div", {
            className: "flex gap-[18px]",
            children: [
              (0, n.jsx)(m.default, {
                priority: !0,
                width: 40.8,
                height: 20.4,
                src: "/logo/logo-white.svg",
                alt: e.name + " logo",
              }),
              (0, n.jsx)(m.default, {
                priority: !0,
                className: "hidden sm:block",
                width: 94,
                height: 20.4,
                src: "/logo/logo-text-white.svg",
                alt: e.name + "text logo",
              }),
            ],
          }),
        });
      }
      var p = s(53078),
        v = s(49261);
      let j = (0, x.default)(() => s.e(234).then(s.bind(s, 44234)), {
        loadableGenerated: { webpack: () => [44234] },
        ssr: !1,
      });
      function g() {
        let [e] = (0, i.useState)(o),
          [t, s] = (0, i.useState)(!1),
          l = (0, c.usePathname)(),
          { isVisible: u } = (0, v.Z)(),
          x = (0, a.o)(),
          m = (0, i.useMemo)(() => (0, r.UM)(x), [x]),
          [h, g] = (0, i.useState)(!0),
          [w, y] = (0, i.useState)(0);
        return (
          (0, i.useEffect)(() => {
            let e = () => {
              let e = window.scrollY;
              e > w && e > 122 ? g(!1) : g(!0), y(e);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, [w]),
          (0, n.jsxs)(d.E.nav, {
            initial: { y: 0 },
            animate: { y: m || h || u ? 0 : -100 },
            transition: { duration: 0.3 },
            className: "".concat(
              w > 0 ? " backdrop-blur-md " : "bg-background",
              " border-b border-border-color transition-opacity sticky top-0 z-40  overflow-hidden"
            ),
            children: [
              (0, n.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: (0, n.jsxs)("div", {
                  className:
                    "relative flex items-center justify-between min-h-[81px]",
                  children: [
                    (0, n.jsx)("div", {
                      className: "absolute left-0 flex items-center",
                      children: (0, n.jsx)("div", {
                        className: "pl-4 xl:pl-0 flex-shrink-0",
                        children: (0, n.jsx)(f, {}),
                      }),
                    }),
                    (0, n.jsx)(C, { items: e, pathname: l }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute right-0 flex w-full xl:w-[380px] justify-end mr-12 xl:mr-0 items-center space-x-4",
                      children: (0, n.jsx)(j, {}),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute inset-y-0 right-0 flex items-center xl:hidden",
                      children: (0, n.jsxs)("button", {
                        type: "button",
                        className:
                          "inline-flex items-center justify-center p-2 rounded-md hover:text-font-basic-white hover:bg-background-button focus:outline-none focus:ring-1 focus:ring-inset focus:ring-font-basic-white",
                        "aria-controls": "mobile-menu",
                        "aria-expanded": t,
                        onClick: () => {
                          s(!t);
                        },
                        children: [
                          (0, n.jsx)("span", {
                            className: "sr-only",
                            children: "Open main menu",
                          }),
                          t
                            ? (0, n.jsx)(p.Z, {
                                type: "close",
                                className: "block h-6 w-6",
                              })
                            : (0, n.jsx)(p.Z, {
                                type: "bars",
                                className: "block h-6 w-6",
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(b, { items: e, pathname: l, isOpen: t }),
            ],
          })
        );
      }
      let C = (e) => {
          let { items: t, pathname: s } = e,
            [a, r] = (0, i.useState)({ width: 0, left: 0 }),
            [l, o] = (0, i.useState)(!1),
            c = (0, i.useRef)(null),
            x = (0, i.useRef)(null),
            m = (0, i.useRef)(null);
          (0, i.useEffect)(() => {
            o(!0);
          }, []),
            (0, i.useEffect)(() => {
              if (l && c.current && m.current) {
                let e = c.current.getBoundingClientRect(),
                  t = m.current.getBoundingClientRect();
                r({ width: e.width, left: e.left - t.left });
              }
            }, [s, l]),
            (0, i.useEffect)(() => {
              x.current &&
                ((x.current.style.width = "".concat(a.width, "px")),
                (x.current.style.transform = "translateX(".concat(
                  a.left,
                  "px)"
                )));
            }, [a]);
          let h = t.some((e) => s === e.href);
          return (0, n.jsx)("div", {
            ref: m,
            className: "relative hidden xl:block xl:mx-auto h-[81px]",

          });
        },
        b = (e) => {
          let { items: t, pathname: s, isOpen: i } = e,
            a = (e) =>
              "".concat(
                s === e.href
                  ? "bg-background-gradient text-active-link"
                  : "hover:bg-background-gradient hover:active-link",
                " block px-3 py-2 transition text-base font-medium uppercase tracking-[0.35px]"
              );
          return (0, n.jsx)("div", {
            className: "transition-all duration-300 overflow-hidden ".concat(
              i ? "max-h-screen" : "max-h-0",
              " xl:hidden"
            ),
            children: (0, n.jsx)("div", {
              className: "px-2 pt-2 pb-3 space-y-1",
              children: t.map((e, t) =>
                (0, n.jsx)(
                  u.default,
                  {
                    className: a(e),
                    href: e.href,
                    target: e.isExternal ? "_blank" : "_self",
                    children: e.name,
                  },
                  "mobile-".concat(e.name, "-").concat(t)
                )
              ),
            }),
          });
        };
    },
    26018: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return el;
          },
        });
      var n = s(57437),
        i = s(2265),
        a = s(73289),
        r = s(15856),
        l = s(35273),
        o = s(49261),
        c = s(73399),
        d = s(78243),
        u = s(60339),
        x = s(36329),
        m = s(83556),
        h = s(53430),
        f = s(71292);
      function p(e) {
        let { children: t, href: s } = e;
        return (0, n.jsx)("section", {
          onClick: () => {
            s.startsWith("http") && window.open(s, "_blank");
          },
          className:
            "px-6 cursor-pointer py-3 flex justify-between transition hover:bg-background-history-item-hover",
          children: t,
        });
      }
      function v(e) {
        let { status: t } = e;
        return "error" === t
          ? (0, n.jsxs)("svg", {
              width: "55",
              height: "16",
              viewBox: "0 0 55 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("rect", {
                  width: "55",
                  height: "16",
                  rx: "4",
                  fill: "#36A6E7",
                  "fill-opacity": "0.1",
                }),
                (0, n.jsx)("circle", {
                  cx: "14",
                  cy: "8",
                  r: "6",
                  fill: "#AB1F00",
                }),
                (0, n.jsx)("path", {
                  d: "M16.3043 5.69727L11.6973 10.3043M11.6973 5.69727L16.3043 10.3043",
                  stroke: "#FCFCFC",
                  strokeWidth: "1.5",
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                }),
                (0, n.jsx)("path", {
                  d: "M24.55 11V3.85H29.81V5.07H26V6.67H29.34V7.86H26V9.79H29.84V11H24.55ZM31.9414 5.87V6.69H31.9714C32.1314 6.39 32.3081 6.17 32.5014 6.03C32.6947 5.88333 32.9381 5.81 33.2314 5.81C33.3714 5.81 33.4781 5.82333 33.5514 5.85V7.04H33.5214C33.0614 6.99333 32.6914 7.09333 32.4114 7.34C32.1314 7.58667 31.9914 7.97333 31.9914 8.5V11H30.6314V5.87H31.9414ZM35.4473 5.87V6.69H35.4773C35.6373 6.39 35.8139 6.17 36.0073 6.03C36.2006 5.88333 36.4439 5.81 36.7373 5.81C36.8773 5.81 36.9839 5.82333 37.0573 5.85V7.04H37.0273C36.5673 6.99333 36.1973 7.09333 35.9173 7.34C35.6373 7.58667 35.4973 7.97333 35.4973 8.5V11H34.1373V5.87H35.4473ZM41.8566 10.38C41.3566 10.8933 40.7133 11.15 39.9266 11.15C39.14 11.15 38.4966 10.8933 37.9966 10.38C37.4966 9.86 37.2466 9.21333 37.2466 8.44C37.2466 7.66667 37.4966 7.02333 37.9966 6.51C38.4966 5.99 39.14 5.73 39.9266 5.73C40.7133 5.73 41.3566 5.99 41.8566 6.51C42.3566 7.02333 42.6066 7.66667 42.6066 8.44C42.6066 9.21333 42.3566 9.86 41.8566 10.38ZM39.9266 10.11C40.3333 10.11 40.65 9.96 40.8766 9.66C41.11 9.35333 41.2266 8.94667 41.2266 8.44C41.2266 7.93333 41.11 7.52667 40.8766 7.22C40.65 6.91333 40.3333 6.76 39.9266 6.76C39.5133 6.76 39.1933 6.91333 38.9666 7.22C38.74 7.52 38.6266 7.92667 38.6266 8.44C38.6266 8.94667 38.74 9.35333 38.9666 9.66C39.1933 9.96 39.5133 10.11 39.9266 10.11ZM44.5488 5.87V6.69H44.5788C44.7388 6.39 44.9155 6.17 45.1088 6.03C45.3022 5.88333 45.5455 5.81 45.8388 5.81C45.9788 5.81 46.0855 5.82333 46.1588 5.85V7.04H46.1288C45.6688 6.99333 45.2988 7.09333 45.0188 7.34C44.7388 7.58667 44.5988 7.97333 44.5988 8.5V11H43.2388V5.87H44.5488Z",
                  fill: "#FCFCFC",
                }),
              ],
            })
          : "success" === t
          ? (0, n.jsxs)("svg", {
              width: "70",
              height: "16",
              viewBox: "0 0 70 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("rect", {
                  width: "70",
                  height: "16",
                  rx: "4",
                  fill: "#36A6E7",
                  fillOpacity: "0.1",
                }),
                (0, n.jsx)("circle", {
                  cx: "14",
                  cy: "8",
                  r: "6",
                  fill: "#60AB00",
                }),
                (0, n.jsx)("path", {
                  d: "M17.341 5.93555L13.2124 10.0642L10.6583 7.50997",
                  stroke: "#FCFCFC",
                  strokeWidth: "1.5",
                  strokeLinecap: "square",
                }),
                (0, n.jsx)("path", {
                  d: "M27.32 11.16C26.3533 11.16 25.6033 10.9567 25.07 10.55C24.5367 10.1367 24.2567 9.55 24.23 8.79H25.65C25.6967 9.21667 25.8467 9.52333 26.1 9.71C26.36 9.89667 26.7467 9.99 27.26 9.99C27.6667 9.99 28 9.91667 28.26 9.77C28.52 9.61667 28.65 9.38333 28.65 9.07C28.65 8.95667 28.6333 8.85667 28.6 8.77C28.5733 8.67667 28.5133 8.59667 28.42 8.53C28.3267 8.45667 28.2467 8.4 28.18 8.36C28.1133 8.31333 27.99 8.26667 27.81 8.22C27.63 8.16667 27.4933 8.13 27.4 8.11C27.3067 8.08333 27.1333 8.04 26.88 7.98C26.5733 7.90667 26.32 7.84333 26.12 7.79C25.9267 7.73667 25.71 7.65333 25.47 7.54C25.2367 7.42667 25.05 7.30333 24.91 7.17C24.7767 7.03 24.6633 6.85 24.57 6.63C24.4767 6.40333 24.43 6.14667 24.43 5.86C24.43 5.17333 24.68 4.64667 25.18 4.28C25.6867 3.90667 26.35 3.72 27.17 3.72C27.9833 3.72 28.6333 3.91333 29.12 4.3C29.6067 4.68667 29.8767 5.23667 29.93 5.95H28.54C28.5 5.60333 28.3533 5.33667 28.1 5.15C27.8533 4.96333 27.54 4.87 27.16 4.87C26.7667 4.87 26.4533 4.94667 26.22 5.1C25.9867 5.25333 25.87 5.45667 25.87 5.71C25.87 5.98333 25.9833 6.18333 26.21 6.31C26.4433 6.43667 26.85 6.56333 27.43 6.69C27.7767 6.76333 28.06 6.83333 28.28 6.9C28.5 6.96 28.7367 7.05 28.99 7.17C29.25 7.28333 29.45 7.41 29.59 7.55C29.7367 7.69 29.8567 7.87667 29.95 8.11C30.05 8.33667 30.1 8.6 30.1 8.9C30.1 9.60667 29.8433 10.16 29.33 10.56C28.8167 10.96 28.1467 11.16 27.32 11.16ZM35.406 11H34.096V10.4H34.066C33.8793 10.6533 33.6727 10.84 33.446 10.96C33.226 11.08 32.9427 11.14 32.596 11.14C32.036 11.14 31.5993 10.9733 31.286 10.64C30.9727 10.3067 30.816 9.85667 30.816 9.29V5.87H32.166V9.06C32.166 9.68 32.4493 9.99 33.016 9.99C33.3293 9.99 33.5793 9.88333 33.766 9.67C33.9527 9.45667 34.046 9.17667 34.046 8.83V5.87H35.406V11ZM38.6657 11.15C37.8724 11.15 37.2357 10.8933 36.7557 10.38C36.2757 9.86667 36.0357 9.22 36.0357 8.44C36.0357 7.66 36.269 7.01333 36.7357 6.5C37.209 5.98667 37.829 5.73 38.5957 5.73C39.2424 5.73 39.769 5.9 40.1757 6.24C40.5824 6.58 40.8324 7.03667 40.9257 7.61H39.5957C39.549 7.37667 39.4424 7.18667 39.2757 7.04C39.109 6.89333 38.9024 6.82 38.6557 6.82C38.2557 6.82 37.949 6.96333 37.7357 7.25C37.5224 7.53667 37.4157 7.93333 37.4157 8.44C37.4157 8.94 37.519 9.33667 37.7257 9.63C37.9324 9.91667 38.2357 10.06 38.6357 10.06C39.229 10.06 39.5724 9.77 39.6657 9.19H40.9757C40.929 9.75667 40.699 10.2267 40.2857 10.6C39.8724 10.9667 39.3324 11.15 38.6657 11.15ZM43.9489 11.15C43.1556 11.15 42.5189 10.8933 42.0389 10.38C41.5589 9.86667 41.3189 9.22 41.3189 8.44C41.3189 7.66 41.5522 7.01333 42.0189 6.5C42.4922 5.98667 43.1122 5.73 43.8789 5.73C44.5256 5.73 45.0522 5.9 45.4589 6.24C45.8656 6.58 46.1156 7.03667 46.2089 7.61H44.8789C44.8322 7.37667 44.7256 7.18667 44.5589 7.04C44.3922 6.89333 44.1856 6.82 43.9389 6.82C43.5389 6.82 43.2322 6.96333 43.0189 7.25C42.8056 7.53667 42.6989 7.93333 42.6989 8.44C42.6989 8.94 42.8022 9.33667 43.0089 9.63C43.2156 9.91667 43.5189 10.06 43.9189 10.06C44.5122 10.06 44.8556 9.77 44.9489 9.19H46.2589C46.2122 9.75667 45.9822 10.2267 45.5689 10.6C45.1556 10.9667 44.6156 11.15 43.9489 11.15ZM49.2621 11.15C48.4354 11.15 47.7854 10.8967 47.3121 10.39C46.8388 9.87667 46.6021 9.22333 46.6021 8.43C46.6021 7.66333 46.8388 7.02333 47.3121 6.51C47.7854 5.99 48.3921 5.73 49.1321 5.73C49.9388 5.73 50.5621 6.01 51.0021 6.57C51.4421 7.13 51.6621 7.88 51.6621 8.82H47.9421C47.9954 9.22667 48.1321 9.54333 48.3521 9.77C48.5721 9.99 48.8721 10.1 49.2521 10.1C49.7521 10.1 50.0821 9.89 50.2421 9.47H51.5821C51.4821 9.95 51.2288 10.35 50.8221 10.67C50.4154 10.99 49.8954 11.15 49.2621 11.15ZM49.1521 6.78C48.4921 6.78 48.0954 7.14667 47.9621 7.88H50.2421C50.2221 7.55333 50.1121 7.29 49.9121 7.09C49.7121 6.88333 49.4588 6.78 49.1521 6.78ZM54.3716 11.15C53.6382 11.15 53.0649 10.99 52.6516 10.67C52.2382 10.3433 52.0116 9.9 51.9716 9.34H53.2316C53.3182 9.90667 53.6916 10.19 54.3516 10.19C54.6516 10.19 54.8816 10.1367 55.0416 10.03C55.2082 9.92333 55.2916 9.78 55.2916 9.6C55.2916 9.53333 55.2782 9.47333 55.2516 9.42C55.2316 9.36667 55.1916 9.32 55.1316 9.28C55.0782 9.23333 55.0282 9.19667 54.9816 9.17C54.9416 9.14333 54.8682 9.11667 54.7616 9.09C54.6549 9.06333 54.5716 9.04333 54.5116 9.03C54.4582 9.01667 54.3616 9 54.2216 8.98C54.0882 8.95333 53.9949 8.93333 53.9416 8.92C53.6616 8.86667 53.4316 8.81333 53.2516 8.76C53.0782 8.7 52.8949 8.61667 52.7016 8.51C52.5082 8.39667 52.3616 8.24667 52.2616 8.06C52.1682 7.86667 52.1216 7.63667 52.1216 7.37C52.1216 6.83667 52.3149 6.43 52.7016 6.15C53.0949 5.87 53.5982 5.73 54.2116 5.73C54.8716 5.73 55.3882 5.88333 55.7616 6.19C56.1416 6.49 56.3582 6.90333 56.4116 7.43H55.1816C55.1282 6.93 54.7982 6.68 54.1916 6.68C53.9182 6.68 53.7016 6.73 53.5416 6.83C53.3882 6.93 53.3116 7.07 53.3116 7.25C53.3116 7.31 53.3216 7.36667 53.3416 7.42C53.3682 7.46667 53.4082 7.51 53.4616 7.55C53.5216 7.58333 53.5782 7.61333 53.6316 7.64C53.6849 7.66 53.7616 7.68333 53.8616 7.71C53.9616 7.73 54.0482 7.75 54.1216 7.77C54.1949 7.78333 54.2949 7.80333 54.4216 7.83C54.5482 7.85 54.6482 7.86667 54.7216 7.88C54.9349 7.92667 55.1082 7.97 55.2416 8.01C55.3816 8.04333 55.5416 8.10333 55.7216 8.19C55.9016 8.27 56.0416 8.36333 56.1416 8.47C56.2482 8.57 56.3382 8.71 56.4116 8.89C56.4916 9.06333 56.5316 9.26667 56.5316 9.5C56.5316 10.0067 56.3316 10.41 55.9316 10.71C55.5382 11.0033 55.0182 11.15 54.3716 11.15ZM59.2251 11.15C58.4917 11.15 57.9184 10.99 57.5051 10.67C57.0917 10.3433 56.8651 9.9 56.8251 9.34H58.0851C58.1717 9.90667 58.5451 10.19 59.2051 10.19C59.5051 10.19 59.7351 10.1367 59.8951 10.03C60.0617 9.92333 60.1451 9.78 60.1451 9.6C60.1451 9.53333 60.1317 9.47333 60.1051 9.42C60.0851 9.36667 60.0451 9.32 59.9851 9.28C59.9317 9.23333 59.8817 9.19667 59.8351 9.17C59.7951 9.14333 59.7217 9.11667 59.6151 9.09C59.5084 9.06333 59.4251 9.04333 59.3651 9.03C59.3117 9.01667 59.2151 9 59.0751 8.98C58.9417 8.95333 58.8484 8.93333 58.7951 8.92C58.5151 8.86667 58.2851 8.81333 58.1051 8.76C57.9317 8.7 57.7484 8.61667 57.5551 8.51C57.3617 8.39667 57.2151 8.24667 57.1151 8.06C57.0217 7.86667 56.9751 7.63667 56.9751 7.37C56.9751 6.83667 57.1684 6.43 57.5551 6.15C57.9484 5.87 58.4517 5.73 59.0651 5.73C59.7251 5.73 60.2417 5.88333 60.6151 6.19C60.9951 6.49 61.2117 6.90333 61.2651 7.43H60.0351C59.9817 6.93 59.6517 6.68 59.0451 6.68C58.7717 6.68 58.5551 6.73 58.3951 6.83C58.2417 6.93 58.1651 7.07 58.1651 7.25C58.1651 7.31 58.1751 7.36667 58.1951 7.42C58.2217 7.46667 58.2617 7.51 58.3151 7.55C58.3751 7.58333 58.4317 7.61333 58.4851 7.64C58.5384 7.66 58.6151 7.68333 58.7151 7.71C58.8151 7.73 58.9017 7.75 58.9751 7.77C59.0484 7.78333 59.1484 7.80333 59.2751 7.83C59.4017 7.85 59.5017 7.86667 59.5751 7.88C59.7884 7.92667 59.9617 7.97 60.0951 8.01C60.2351 8.04333 60.3951 8.10333 60.5751 8.19C60.7551 8.27 60.8951 8.36333 60.9951 8.47C61.1017 8.57 61.1917 8.71 61.2651 8.89C61.3451 9.06333 61.3851 9.26667 61.3851 9.5C61.3851 10.0067 61.1851 10.41 60.7851 10.71C60.3917 11.0033 59.8717 11.15 59.2251 11.15Z",
                  fill: "#FCFCFC",
                }),
              ],
            })
          : "liquidated" === t
          ? (0, n.jsxs)("svg", {
              width: "63",
              height: "16",
              viewBox: "0 0 63 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("rect", {
                  width: "63",
                  height: "16",
                  rx: "4",
                  fill: "#36A6E7",
                  fillOpacity: "0.1",
                }),
                (0, n.jsx)("path", {
                  d: "M8.55 11V3.85H10V9.79H13.36V11H8.55ZM14.0748 11V5.87H15.4348V11H14.0748ZM14.0748 5.07V3.85H15.4348V5.07H14.0748ZM19.7811 12.68V10.42H19.7611C19.4611 10.9067 18.9944 11.15 18.3611 11.15C17.7278 11.15 17.1978 10.9033 16.7711 10.41C16.3511 9.91 16.1411 9.25333 16.1411 8.44C16.1411 7.63333 16.3411 6.98 16.7411 6.48C17.1478 5.98 17.6878 5.73 18.3611 5.73C18.9944 5.73 19.4744 5.99 19.8011 6.51H19.8311V5.87H21.1411V12.68H19.7811ZM17.8111 9.6C18.0111 9.86 18.2911 9.99 18.6511 9.99C19.0111 9.99 19.2944 9.85667 19.5011 9.59C19.7078 9.31667 19.8111 8.94667 19.8111 8.48C19.8111 7.98 19.7144 7.57667 19.5211 7.27C19.3344 6.96333 19.0478 6.81 18.6611 6.81C17.9011 6.81 17.5211 7.36667 17.5211 8.48C17.5211 8.96667 17.6178 9.34 17.8111 9.6ZM26.574 11H25.264V10.4H25.234C25.0473 10.6533 24.8407 10.84 24.614 10.96C24.394 11.08 24.1107 11.14 23.764 11.14C23.204 11.14 22.7673 10.9733 22.454 10.64C22.1407 10.3067 21.984 9.85667 21.984 9.29V5.87H23.334V9.06C23.334 9.68 23.6173 9.99 24.184 9.99C24.4973 9.99 24.7473 9.88333 24.934 9.67C25.1207 9.45667 25.214 9.17667 25.214 8.83V5.87H26.574V11ZM27.4537 11V5.87H28.8137V11H27.4537ZM27.4537 5.07V3.85H28.8137V5.07H27.4537ZM31.61 11.15C30.9633 11.15 30.44 10.9067 30.04 10.42C29.64 9.92667 29.44 9.26667 29.44 8.44C29.44 7.64 29.6433 6.99 30.05 6.49C30.4633 5.98333 30.99 5.73 31.63 5.73C32.27 5.73 32.7533 5.98333 33.08 6.49H33.11V3.85H34.47V11H33.16V10.33H33.14C32.8067 10.8767 32.2967 11.15 31.61 11.15ZM31.91 10.01C32.31 10.01 32.6133 9.87333 32.82 9.6C33.0333 9.32667 33.14 8.95 33.14 8.47C33.14 7.37667 32.7433 6.83 31.95 6.83C31.5833 6.83 31.3033 6.97667 31.11 7.27C30.9167 7.56333 30.82 7.95333 30.82 8.44C30.82 8.94 30.9133 9.32667 31.1 9.6C31.2933 9.87333 31.5633 10.01 31.91 10.01ZM38.5841 11C38.5174 10.9133 38.4641 10.7233 38.4241 10.43H38.4041C38.2574 10.65 38.0707 10.82 37.8441 10.94C37.6174 11.06 37.3007 11.12 36.8941 11.12C36.3541 11.12 35.9207 10.9833 35.5941 10.71C35.2674 10.4367 35.1041 10.05 35.1041 9.55C35.1041 9.03 35.2841 8.65 35.6441 8.41C36.0041 8.16333 36.5107 7.99333 37.1641 7.9C37.6441 7.83333 37.9707 7.76667 38.1441 7.7C38.3174 7.62667 38.4041 7.5 38.4041 7.32C38.4041 7.13333 38.3307 6.98667 38.1841 6.88C38.0374 6.76667 37.8241 6.71 37.5441 6.71C36.9241 6.71 36.5941 6.95 36.5541 7.43H35.3441C35.3641 6.94333 35.5607 6.54 35.9341 6.22C36.3074 5.9 36.8474 5.74 37.5541 5.74C38.9941 5.74 39.7141 6.37 39.7141 7.63V10.24C39.7141 10.6267 39.7741 10.8633 39.8941 10.95V11H38.5841ZM37.2241 10.17C37.5974 10.17 37.8907 10.0733 38.1041 9.88C38.3241 9.68667 38.4341 9.45667 38.4341 9.19V8.42C38.2874 8.50667 37.9707 8.60667 37.4841 8.72C37.0974 8.80667 36.8241 8.90667 36.6641 9.02C36.5041 9.12667 36.4241 9.29333 36.4241 9.52C36.4241 9.95333 36.6907 10.17 37.2241 10.17ZM40.181 6.77V5.87H40.891V4.27H42.221V5.87H43.101V6.77H42.221V9.49C42.221 9.83 42.391 10 42.731 10L43.131 9.99V10.99C42.9243 11.0033 42.641 11.01 42.281 11.01C41.8877 11.01 41.5577 10.9167 41.291 10.73C41.0243 10.5367 40.891 10.22 40.891 9.78V6.77H40.181ZM46.1625 11.15C45.3358 11.15 44.6858 10.8967 44.2125 10.39C43.7392 9.87667 43.5025 9.22333 43.5025 8.43C43.5025 7.66333 43.7392 7.02333 44.2125 6.51C44.6858 5.99 45.2925 5.73 46.0325 5.73C46.8392 5.73 47.4625 6.01 47.9025 6.57C48.3425 7.13 48.5625 7.88 48.5625 8.82H44.8425C44.8958 9.22667 45.0325 9.54333 45.2525 9.77C45.4725 9.99 45.7725 10.1 46.1525 10.1C46.6525 10.1 46.9825 9.89 47.1425 9.47H48.4825C48.3825 9.95 48.1292 10.35 47.7225 10.67C47.3158 10.99 46.7958 11.15 46.1625 11.15ZM46.0525 6.78C45.3925 6.78 44.9958 7.14667 44.8625 7.88H47.1425C47.1225 7.55333 47.0125 7.29 46.8125 7.09C46.6125 6.88333 46.3592 6.78 46.0525 6.78ZM51.112 11.15C50.4653 11.15 49.942 10.9067 49.542 10.42C49.142 9.92667 48.942 9.26667 48.942 8.44C48.942 7.64 49.1453 6.99 49.552 6.49C49.9653 5.98333 50.492 5.73 51.132 5.73C51.772 5.73 52.2553 5.98333 52.582 6.49H52.612V3.85H53.972V11H52.662V10.33H52.642C52.3086 10.8767 51.7986 11.15 51.112 11.15ZM51.412 10.01C51.812 10.01 52.1153 9.87333 52.322 9.6C52.5353 9.32667 52.642 8.95 52.642 8.47C52.642 7.37667 52.2453 6.83 51.452 6.83C51.0853 6.83 50.8053 6.97667 50.612 7.27C50.4186 7.56333 50.322 7.95333 50.322 8.44C50.322 8.94 50.4153 9.32667 50.602 9.6C50.7953 9.87333 51.0653 10.01 51.412 10.01Z",
                  fill: "#FCFCFC",
                }),
              ],
            })
          : void 0;
      }
      var j = s(87726),
        g = s(84889),
        C = s(62056),
        b = s(41015);
      function w(e) {
        let { token: t, value: s, label: a } = e,
          r = (0, i.useMemo)(() => (0, C.F)(t), [t]);
        return (0, n.jsxs)("div", {
          className: "flex gap-1",
          children: [
            (0, n.jsx)(b.Z, { symbol: r.symbol, width: 16 }),
            (0, n.jsx)("span", {
              className: "text-font-basic-white text-xs font-semibold",
              children: (0, g.u)(s, {
                showZeroApproximation: !0,
                maxDecimals: 4,
              }),
            }),
            (0, n.jsx)("span", {
              className: "text-font-basic-white text-xs",
              children: (null == a ? void 0 : a.length) ? a : r.symbol,
            }),
          ],
        });
      }
      function y(e) {
        let { item: t } = e,
          s = (0, i.useMemo)(
            () => (0, u.E)(t.token.chainId),
            [t.token.chainId]
          ),
          a = (0, i.useMemo)(() => {
            var e;
            return (0, x.f)(null !== (e = t.action) && void 0 !== e ? e : "");
          }, [t.action]),
          r = (0, i.useMemo)(() => (0, m.hK)(t.timestamp), [t.timestamp]),
          l = (0, i.useMemo)(() => (0, m.Y8)(t.txHash), [t.txHash]),
          [o, c] = (0, i.useState)("success"),
          [d, g] = (0, i.useState)(!1),
          C = (0, i.useRef)(null),
          b = (0, i.useCallback)(async () => {
            if (!d && t.txHash)
              try {
                let e = await (0, h.ag)(t.txHash);
                e && 1 === e.status ? (c("success"), g(!0)) : c("error");
              } catch (e) {
                console.error("Error verifying transaction: ".concat(e));
              }
          }, [t.txHash, d]);
        return (
          (0, i.useEffect)(() => {
            let e = C.current,
              t = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  t.isIntersecting && b();
                },
                { threshold: 0.1 }
              );
            return (
              e && t.observe(e),
              () => {
                e && t.unobserve(e);
              }
            );
          }, [t.txHash, b]),
          (0, n.jsx)("div", {
            ref: C,
            children: (0, n.jsxs)(p, {
              href: l,
              children: [
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, n.jsx)(w, { token: t.token, value: t.value }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsx)(j.Z, {
                          text: "".concat(a, " on ").concat(s.name),
                          size: "sm",
                        }),
                        (0, n.jsx)(j.Z, { text: r, size: "sm" }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-2 justify-center",
                  children: [
                    (0, n.jsx)(v, { status: o }),
                    (0, n.jsx)(f.Z, { href: "" }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var N = s(43075),
        Z = s(72258);
      function M(e) {
        let { item: t } = e,
          { appToken: s } = (0, N.MG)(),
          a = (0, i.useMemo)(() => (0, m.hK)(t.timestamp), [t.timestamp]),
          r = (0, i.useMemo)(() => (0, m.Y8)(t.txHash), [t.txHash]),
          l = (0, i.useMemo)(() => t.type.replace("_", " "), [t.type]),
          o = (0, i.useMemo)(() => ({ symbol: s, name: s }), [s]);
        return (0, n.jsxs)(p, {
          href: r,
          children: [
            (0, n.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, n.jsx)(w, { token: o, label: "vlSYNO", value: t.value }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, n.jsx)(j.Z, {
                      text: ""
                        .concat(
                          (0, x.f)("RESTAKED" === l ? "re-locked" : l),
                          " ("
                        )
                        .concat((0, Z.iP)(t.lockPeriod), ")"),
                      size: "sm",
                    }),
                    (0, n.jsx)(j.Z, { text: a, size: "sm" }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "flex flex-col gap-2 justify-center",
              children: [
                (0, n.jsx)(v, { status: "success" }),
                (0, n.jsx)(f.Z, { href: "" }),
              ],
            }),
          ],
        });
      }
      var k = s(38446);
      function H(e) {
        let { item: t } = e,
          s = (0, i.useMemo)(() => (0, m.hK)(t.timestamp), [t.timestamp]),
          a = (0, i.useMemo)(() => (0, m.Y8)(t.txHash), [t.txHash]),
          r = (0, i.useMemo)(() => k.IQ, []);
        return (0, n.jsxs)(p, {
          href: a,
          children: [
            (0, n.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, n.jsx)(w, { token: r, label: r.symbol, value: t.value }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, n.jsx)(j.Z, {
                      text: "sSYNO ".concat(
                        (0, x.f)(t.actionType.replace("_", " ")),
                        " "
                      ),
                      size: "sm",
                    }),
                    (0, n.jsx)(j.Z, { text: s, size: "sm" }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "flex flex-col gap-2 justify-center",
              children: [
                (0, n.jsx)(v, { status: "success" }),
                (0, n.jsx)(f.Z, { href: "" }),
              ],
            }),
          ],
        });
      }
      var S = s(95120),
        z = s(28857);
      function T(e) {
        let { item: t } = e,
          { getSinglePrice: s } = (0, z.Z)(),
          a = (0, i.useMemo)(() => (0, m.hK)(t.timestamp), [t.timestamp]),
          r = (0, i.useMemo)(() => (0, m.Y8)(t.txHash), [t.txHash]),
          l = (0, i.useMemo)(
            () =>
              t.tokens
                .map(
                  (e) => Number(e.receivedAmount) * s(e.token.symbol).usdValue
                )
                .reduce((e, t) => e + t, 0),
            [t.tokens, s]
          ),
          o = (0, i.useMemo)(
            () =>
              t.tokens
                .map((e) => Number(e.repaidAmount) * s(e.token.symbol).usdValue)
                .reduce((e, t) => e + t, 0),
            [t.tokens, s]
          ),
          c = (0, i.useMemo)(() => (0, S.T)(l), [l]),
          d = (0, i.useMemo)(() => (0, S.T)(l - o), [o, l]);
        return (0, n.jsxs)(p, {
          href: r,
          children: [
            (0, n.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, n.jsx)("div", {
                  className: "flex gap-1",
                  children: (0, n.jsx)("span", {
                    className: "text-font-basic-white text-xs font-semibold",
                    children: "Position Liquidated",
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, n.jsx)(j.Z, { text: "Amount: ".concat(c), size: "sm" }),
                    (0, n.jsx)(j.Z, { text: "Fee: ".concat(d), size: "sm" }),
                    (0, n.jsx)(j.Z, { text: a, size: "sm" }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "flex flex-col gap-2  justify-center",
              children: [
                (0, n.jsx)(v, { status: "liquidated" }),
                (0, n.jsx)(f.Z, { href: "" }),
              ],
            }),
          ],
        });
      }
      var I = s(59846);
      function E(e) {
        let { item: t } = e,
          s = (0, i.useMemo)(() => (0, m.hK)(t.timestamp), [t.timestamp]),
          a = (0, i.useMemo)(() => (0, m.Y8)(t.txHash), [t.txHash]),
          r = (0, i.useMemo)(() => k.jT, []);
        return (0, n.jsxs)(p, {
          href: a,
          children: [
            (0, n.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, n.jsx)(w, { token: r, label: r.symbol, value: t.value }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, n.jsx)(j.Z, {
                      text: "".concat(
                        t.distributor.symbol,
                        " Rewards Claimed "
                      ),
                      size: "sm",
                    }),
                    (0, n.jsx)(j.Z, { text: s, size: "sm" }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "flex flex-col gap-2 justify-center",
              children: [
                (0, n.jsx)(v, { status: "success" }),
                (0, n.jsx)(f.Z, { href: "" }),
              ],
            }),
          ],
        });
      }
      function V(e) {
        let { address: t } = (0, l.Z)(),
          { all: s } = (0, d.Z)();
        if (!t) return null;
        let i = s.reduce((e, t) => {
          let s = (0, I.WU)(
            new Date(1e3 * Number(t.timestamp)),
            "MMMM d, yyyy"
          );
          return e[s] || (e[s] = []), e[s].push(t), e;
        }, {});
        return (0, n.jsx)("article", {
          className: "relative overflow-y-auto app-scroll h-full",
          children: (0, n.jsxs)("div", {
            className: "flex flex-col",
            children: [
              0 === Object.keys(i).length &&
                (0, n.jsx)("div", {
                  className: "flex justify-center items-center h-40",
                  children: (0, n.jsx)(j.Z, {
                    text: "No history found",
                    size: "lg",
                    weight: "medium",
                  }),
                }),
              Object.entries(i).map((e) => {
                let [t, s] = e;
                return (0, n.jsxs)(
                  "div",
                  {
                    className: "day-group",
                    children: [
                      (0, n.jsx)("header", {
                        className: "py-2 px-4",
                        children: (0, n.jsx)(j.Z, {
                          text: t,
                          size: "sm",
                          weight: "medium",
                        }),
                      }),
                      s.map((e, t) => {
                        let s = null;
                        return (
                          "VaultHistory" === e.itemType
                            ? (s = (0, n.jsx)(y, { item: e }))
                            : "VaultLiquidation" === e.itemType
                            ? (s = (0, n.jsx)(T, { item: e }))
                            : "VlSynoStake" === e.itemType
                            ? (s = (0, n.jsx)(M, { item: e }))
                            : "SSynoStake" === e.itemType
                            ? (s = (0, n.jsx)(H, { item: e }))
                            : "ClaimHistory" === e.itemType &&
                              (s = (0, n.jsx)(E, { item: e })),
                          (0, n.jsx)(
                            "div",
                            { className: "mb-2", children: s },
                            "history_".concat(t)
                          )
                        );
                      }),
                    ],
                  },
                  t
                );
              }),
            ],
          }),
        });
      }
      var L = s(22428),
        A = s(14375),
        R = s(53078),
        P = s(93083),
        F = s(36864);
      function B(e) {
        let { item: t } = e,
          s = (0, i.useMemo)(() => (0, u.E)(t.chainId), [t.chainId]),
          a = (0, i.useMemo)(
            () =>
              "https://wormholescan.io/#/tx/"
                .concat(t.txHash, "?network=")
                .concat((0, F.b6)() ? "Testnet" : "Mainnet", "&view=overview"),
            [t.txHash]
          ),
          r = (0, i.useMemo)(
            () =>
              t.type === P.i.SendingBorrow || t.type === P.i.SendingWithdraw
                ? ""
                    .concat((0, x.f)(t.type.replace("-", " ")), " from ")
                    .concat(s.name)
                : ""
                    .concat((0, x.f)(t.type.replace("-", " ")), " on ")
                    .concat(s.name),
            [t.type, s]
          );
        return (0, n.jsxs)(p, {
          href: a,
          children: [
            (0, n.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, n.jsx)(w, { token: t.token, value: t.amount }),
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, n.jsx)(j.Z, { text: r, size: "sm" }),
                    (0, n.jsx)(j.Z, {
                      text: (0, m.hK)(t.timestamp),
                      size: "sm",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "flex flex-col gap-2 justify-center",
              children: (0, n.jsx)(f.Z, { href: a }),
            }),
          ],
        });
      }
      function W(e) {
        let { isConnected: t } = (0, l.Z)(),
          { all: s } = (0, L.Z)(),
          a = (0, i.useMemo)(() => s.filter((e) => "hub" !== e.speed), [s]),
          [r, o] = (0, i.useState)([]),
          c = (0, i.useMemo)(
            () => [
              P.i.Withdraw,
              P.i.Borrow,
              P.i.SendingBorrow,
              P.i.SendingWithdraw,
            ],
            []
          ),
          d = (0, i.useMemo)(
            () => [
              { label: "Txn Underway", value: 0 },
              { label: "Completing Relay", value: 2 },
              { label: "Relay Requested", value: 1 },
              { label: "Waiting for Tokens", value: 3 },
            ],
            []
          ),
          x = (0, i.useCallback)(async () => {
            o(
              await Promise.all(
                a.map(async (e) => {
                  var t;
                  let s = (0, u.E)(e.chainId),
                    n = await (0, h.Lv)(s.name, e.txHash);
                  return n &&
                    (null === (t = n.relayStartedAt) || void 0 === t
                      ? void 0
                      : t.length)
                    ? 1
                    : e.type === P.i.Withdraw || e.type === P.i.Borrow
                    ? 2
                    : e.type === P.i.SendingWithdraw ||
                      e.type === P.i.SendingBorrow
                    ? 3
                    : 0;
                })
              )
            );
          }, [a]);
        return ((0, i.useEffect)(() => {
          t && a.length && x();
        }, [a, t, x]),
        t && a.length)
          ? (0, n.jsxs)("div", {
              className: "px-3 py-3 flex flex-col gap-3",
              children: [
                (0, n.jsx)(j.Z, { size: "sm", text: "Pending" }),
                a.map((e, t) => {
                  let s = r[t] || 0;
                  return (0, n.jsxs)(
                    "div",
                    {
                      className: "mb-2",
                      children: [
                        (0, n.jsx)("section", {
                          className:
                            "bg-white-opacity-03 mb-2 mx-2 px-6 py-[6px] rounded-lg grid grid-cols-2 gap-1",
                          children: d
                            .filter((t) =>
                              -1 !== c.indexOf(e.type)
                                ? t.value < 4
                                : t.value < 3
                            )
                            .map((e, t) =>
                              (0, n.jsxs)(
                                "div",
                                {
                                  className: "flex items-center gap-1",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className: "w-6",
                                      children: [
                                        s > e.value &&
                                          (0, n.jsx)(R.Z, {
                                            className: "text-font-full",
                                            type: "check",
                                          }),
                                        s === e.value &&
                                          (0, n.jsx)("span", {
                                            className: "scale-50",
                                            children: (0, n.jsx)(A.Z, {}),
                                          }),
                                      ],
                                    }),
                                    (0, n.jsx)("span", {
                                      className:
                                        "text-[11px] font-medium ".concat(
                                          s > e.value
                                            ? "text-font-full"
                                            : s === e.value
                                            ? "text-font-basic-white"
                                            : "text-white/40"
                                        ),
                                      children: e.label,
                                    }),
                                  ],
                                },
                                "state_".concat(t)
                              )
                            ),
                        }),
                        (0, n.jsx)(B, { item: e }),
                      ],
                    },
                    "history_".concat(t)
                  );
                }),
              ],
            })
          : null;
      }
      function O(e) {
        let { address: t } = (0, l.Z)(),
          { all: s } = (0, d.Z)();
        return t
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("header", {
                  className:
                    "pl-6 pt-6 pr-3 pb-3 inline-flex gap-1 bg-background w-full border-b border-border-color",
                  children: [
                    (0, n.jsx)(c.Z, { size: "xs", text: "Recent Activity" }),
                    " ",
                    (0, n.jsxs)("span", {
                      className: "color-text-white/80 text-xs",
                      children: ["(", s.length, ")"],
                    }),
                  ],
                }),
                (0, n.jsx)(W, {}),
                (0, n.jsx)(V, {}),
              ],
            })
          : null;
      }
      var D = s(7231),
        _ = s(7078),
        U = s(17867),
        Y = s(80229);
      function q(e) {
        let { disconnect: t } = (0, l.Z)(),
          s = (0, i.useMemo)(
            () =>
              (0, _.A)(
                (0, U.ud)(!1, !1),
                "transition-transform  h-[26px] pl-3 pr-2 flex gap-1 items-center justify-center !rounded-xl"
              ),
            []
          ),
          a = async () => {
            await t();
          };
        return (0, n.jsx)(Y.Z, {
          children: (0, n.jsxs)("button", {
            onClick: a,
            className: s,
            children: [
              (0, n.jsx)(c.Z, { text: "Disconnect", size: "xs" }),
              (0, n.jsx)(R.Z, { type: "disconnect", className: "w-3 h-3" }),
            ],
          }),
        });
      }
      function G(e) {
        let { address: t, chainId: s } = (0, l.Z)(),
          [a, r] = (0, i.useState)(!1);
        if (!t) return null;
        let o = () => {
            navigator.clipboard.writeText(t),
              r(!0),
              setTimeout(() => {
                r(!1);
              }, 1e3);
          },
          d = () => {
            let e = (0, u.E)(s),
              n = ""
                .concat(null == e ? void 0 : e.explorerUrl, "address/")
                .concat(t);
            window.open(n, "_blank");
          };
        return (0, n.jsxs)("header", {
          className: "pl-6 pt-6 pr-3 pb-3 flex justify-between",
          children: [
            (0, n.jsx)(c.Z, { size: "xl", text: (0, m.Os)(t) }),
            (0, n.jsxs)("div", {
              className: "flex gap-2",
              children: [
                (0, n.jsx)("a", {
                  onClick: () => o(),
                  children: a
                    ? (0, n.jsx)(D.Z, { icon: "check", disabled: !1 })
                    : (0, n.jsx)(D.Z, { icon: "copy", disabled: !1 }),
                }),
                (0, n.jsx)("a", {
                  onClick: () => d(),
                  children: (0, n.jsx)(D.Z, {
                    icon: "link-external",
                    disabled: !1,
                  }),
                }),
                (0, n.jsx)(q, {}),
              ],
            }),
          ],
        });
      }
      var K = s(46426),
        Q = s(49699);
      function X(e) {
        let { symbol: t, amount: s } = e,
          a = (0, i.useMemo)(
            () => (s > 0 ? (0, g.u)(s, { abbreviate: !0 }) : "-- --"),
            [s]
          );
        return (0, n.jsxs)("div", {
          className: "flex gap-1 items-center !leading-none",
          children: [
            (0, n.jsx)(b.Z, { symbol: t, width: 20, height: 20 }),
            (0, n.jsx)(c.Z, { text: a, size: "sm" }),
            (0, n.jsx)("div", {
              className: "text-xs text-font-basic-white text-nowrap ",
              children: t,
            }),
          ],
        });
      }
      var J = s(16463),
        $ = s(15766);
      function ee(e) {
        let { symbol: t, text: s, buttonLabel: a, url: r, amount: l } = e,
          o = (0, J.useRouter)(),
          d = (0, i.useMemo)(
            () => (l > 0 ? (0, g.u)(l, { abbreviate: !0 }) : "-- --"),
            [l]
          );
        return (0, n.jsxs)("div", {
          className:
            "flex flex-col gap-2 p-3 border border-border-color rounded-xl w-full bg-white-opacity-02",
          children: [
            (0, n.jsxs)("div", {
              className: "flex gap-1 items-center",
              children: [
                (0, n.jsx)(b.Z, { symbol: t, width: 20, height: 20 }),
                (0, n.jsx)("div", {
                  className: "flex-1 text-xs text-font-basic-white",
                  children: s,
                }),
              ],
            }),
            (0, n.jsxs)("footer", {
              className: "flex justify-between items-center",
              children: [
                (0, n.jsx)(c.Z, { size: "xs", text: d }),
                (0, n.jsx)($.Z, {
                  height: 22,
                  text: a,
                  onClick: () => {
                    o.push(r);
                  },
                }),
              ],
            }),
          ],
        });
      }
      var et = s(78336);
      function es(e) {
        let { address: t } = (0, l.Z)(),
          {
            userSynoBalance: s,
            userSSynoBalance: a,
            userLocks: r,
          } = (0, Q.Z)(),
          o = (0, i.useMemo)(
            () =>
              r
                .filter((e) => e.unlocksAt > Date.now() / 1e3)
                .reduce((e, t) => e + Number(t.value), 0),
            [r]
          ),
          c = (0, i.useMemo)(
            () =>
              r.filter((e) => Number(e.unlocksAt) > Date.now() / 1e3).length
                ? r
                    .filter((e) => Number(e.unlocksAt) > Date.now() / 1e3)
                    .reduce(
                      (e, t) => e + (0, Z.v6)(t.lockPeriod) * Number(t.value),
                      0
                    ) / o
                : 0,
            [r, o]
          ),
          d = (0, i.useMemo)(() => (o > 0 ? c * o : 0), [c, o]);
        return t
          ? (0, n.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                (0, n.jsx)("div", {
                  className: "flex gap-1 items-center",
                  children: (0, n.jsx)(X, { symbol: k.jT.symbol, amount: s }),
                }),
                (0, n.jsxs)("div", {
                  className: "flex gap-6",
                  children: [
                    (0, n.jsx)(ee, {
                      symbol: k.IQ.symbol,
                      text: k.IQ.symbol + " Staked",
                      amount: a.balance,
                      buttonLabel: "Stake",
                      url: et.gh[et.T3.SYNO] + "?activeTab=sSYNO",
                    }),
                    (0, n.jsx)(ee, {
                      symbol: k.Bq.symbol,
                      text: k.Bq.symbol + " Locked",
                      amount: d,
                      buttonLabel: "Lock",
                      url: et.gh[et.T3.SYNO] + "?activeTab=vlSYNO",
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      var en = s(28109);
      function ei(e) {
        let { address: t } = (0, l.Z)(),
          { all: s } = (0, en.Z)(),
          i = (0, J.useRouter)();
        return t
          ? (0, n.jsxs)("div", {
              className: "flex justify-between",
              children: [
                (0, n.jsx)("div", {
                  className: "flex flex-col gap-1",
                  children: s.map((e) =>
                    (0, n.jsx)(
                      X,
                      { symbol: e.symbol, amount: Number(e.value) },
                      e.address
                    )
                  ),
                }),
                (0, n.jsx)($.Z, {
                  iconRight: !0,
                  height: 22,
                  text: "Claim",
                  onClick: () => {
                    i.push(et.gh[et.T3.Portfolio] + "?activeTab=rewards");
                  },
                }),
              ],
            })
          : null;
      }
      var ea = s(60394);
      function er(e) {
        let { address: t } = (0, l.Z)(),
          [s, a] = (0, i.useState)("balance");
        return t
          ? (0, n.jsxs)("div", {
              className:
                "bg-background w-full border-border-color px-4 border-t pt-4",
              children: [
                (0, n.jsx)("div", {
                  className: "pb-4",
                  children: (0, n.jsxs)(ea.Z, {
                    children: [
                      (0, n.jsx)(K.Z, {
                        width: 97,
                        isActive: "balance" === s,
                        onClick: () => a("balance"),
                        text: "Wallet Balance",
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)("section", {
                  className: "border-border-color border-t  pt-4",
                  children: [
                    "balance" === s && (0, n.jsx)(es, {}),
                    "rewards" === s && (0, n.jsx)(ei, {}),
                  ],
                }),
              ],
            })
          : null;
      }
      function el(e) {
        let { isVisible: t, close: s } = (0, o.Z)(),
          { isConnected: c } = (0, l.Z)(),
          d = (function (e) {
            let [t, s] = (0, a.H)(),
              [n, l] = (0, i.useState)(!1);
            return (
              (0, i.useEffect)(() => {
                if (!n) {
                  l(!0);
                  return;
                }
                s([
                  ...(e
                    ? [
                        [
                          "nav",
                          { transform: "translateX(0%)" },
                          { duration: 0.155 },
                        ],
                        [
                          "article",
                          { opacity: 1, filter: "blur(0px)" },
                          { delay: (0, r.E)(0.05, { from: 0 }), at: "-0.1" },
                        ],
                      ]
                    : [
                        [
                          "article",
                          { opacity: 0, filter: "blur(10px)" },
                          { duration: 0.155 },
                        ],
                        [
                          "nav",
                          { transform: "translateX(100%)" },
                          { at: "-0.1" },
                        ],
                      ]),
                ]);
              }, [e, n, s]),
              t
            );
          })(t),
          u = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            function e(e) {
              let t = "toggleRightPanel" === e.target.id;
              !u.current || u.current.contains(e.target) || t || s();
            }
            return (
              t
                ? document.addEventListener("mousedown", e)
                : document.removeEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [t, s]),
          (0, n.jsx)("div", {
            ref: d,
            children: c
              ? (0, n.jsx)("nav", {
                  ref: u,
                  className:
                    "fixed w-[356px] h-[calc(100%-82px)] top-[82px] translate-x-full right-0 z-10 border border-white/5 bg-background-card rounded-tl-xl rounded-bl-xl overflow-hidden",
                  children: (0, n.jsxs)("div", {
                    className: "h-full w-full flex flex-col",
                    children: [
                      (0, n.jsx)(G, {}),
                      (0, n.jsx)(er, {}),
                      (0, n.jsx)(O, {}),
                    ],
                  }),
                })
              : null,
          })
        );
      }
    },
    10823: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return eM;
        },
      });
      var n = s(57437),
        i = s(57570),
        a = s(81153),
        r = s(99234),
        l = s(2265),
        o = s(40440);
      function c(e) {
        let [t, s] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          e.showModal
            ? ((document.body.style.overflow = "hidden"),
              s(!0),
              setTimeout(() => {
                s(!1);
              }, 475))
            : (document.body.style.overflow = "");
        }, [e.showModal]);
        let i = (0, r.N)()[e.configName],
          a = "z-".concat(i.zIndex);
        return e.showModal
          ? (0, n.jsxs)("div", {
              className:
                "fixed z-10 inset-0 flex items-center justify-center ".concat(
                  a
                ),
              children: [
                (0, n.jsx)("div", {
                  onClick: e.onClose,
                  className: "bg-black/40 fixed inset-0 transition-opacity",
                }),
                (0, n.jsxs)("div", {
                  style: { maxWidth: i.maxWidth, zIndex: i.zIndex },
                  className:
                    "mb-16 overflow-hidden transform transition-all sm:max-w-[484px] w-full rounded-xl ",
                  children: [
                    (0, n.jsx)(o.Z, { onClick: e.onClose }),
                    (0, n.jsx)("div", {
                      className:
                        "bg-background rounded-xl border border-white/5 modal-bg flex flex-col w-full min-h-[360px] ".concat(
                          t ? "animate-modal" : ""
                        ),
                      children: e.children,
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      var d = s(44731),
        u = s(9139),
        x = s(73399);
      function m(e) {
        return (0, n.jsx)("header", {
          className: "px-6 pt-6 pb-4",
          children: e.children,
        });
      }
      var h = s(55360),
        f = s(36329);
      function p(e) {
        let { type: t } = (0, h.Q)(),
          s = (0, l.useMemo)(() => (0, f.f)(t), [t]);
        return (0, n.jsx)(m, {
          children: (0, n.jsx)(x.Z, { size: "lg", text: s }),
        });
      }
      var v = s(57818),
        j = s(14375);
      let g = (0, v.default)(
        () =>
          Promise.all([s.e(400), s.e(649), s.e(680), s.e(305)]).then(
            s.bind(s, 42680)
          ),
        {
          loadableGenerated: { webpack: () => [42680] },
          ssr: !1,
          loading: (e) =>
            (0, n.jsx)("div", {
              className: "flex items-center justify-center min-h-40",
              children: (0, n.jsx)(j.Z, {}),
            }),
        }
      );
      function C(e) {
        let t = (0, a.Z)((e) =>
            e.items.some((e) => e.name === i.t.AssetManager && e.isOpen)
          ),
          s = (0, a.Z)((e) => e.changeModalState),
          r = () => {
            s(i.t.AssetManager, !t);
          };
        return (0, n.jsx)(c, {
          showModal: t,
          configName: i.t.AssetManager,
          onClose: () => r(),
          children: (0, n.jsx)(l.Suspense, {
            fallback: (0, n.jsx)(n.Fragment, { children: "Loading..." }),
            children: (0, n.jsxs)(d.TokenPageProvider, {
              children: [
                (0, n.jsx)(p, {}),
                (0, n.jsx)("header", {
                  className: "px-3 pb-4",
                  children: (0, n.jsx)(u.Z, {}),
                }),
                (0, n.jsx)("div", {
                  className: "pb-4 px-4 flex flex-col gap-4",
                  children: (0, n.jsx)(g, { hideTabs: !0 }),
                }),
              ],
            }),
          }),
        });
      }
      var b = s(28857),
        w = s(72559),
        y = s(71581),
        N = s(26755),
        Z = s(95120),
        M = s(84889),
        k = s(62056),
        H = s(35273),
        S = s(94254),
        z = s(38446),
        T = s(37650),
        I = s(36864),
        E = s(35202);
      let V = (0, l.createContext)(void 0),
        L = () => {
          let e = (0, l.useContext)(V);
          if (!e)
            throw Error(
              "useClaimAndLockContext must be used within a ClaimAndLockProvider"
            );
          return e;
        },
        A = (e) => {
          let { children: t, rewardItem: s } = e,
            { isConnected: i, address: a } = (0, H.Z)(),
            { all: r } = (0, b.Z)(),
            { all: o } = (0, w.Z)(),
            c = (0, l.useMemo)(() => (s ? (0, E.VU)(s) : "0"), [s]),
            d = (0, l.useMemo)(
              () => s && y.vz(c.toString(), s.decimals),
              [s, c]
            ),
            u = (0, l.useMemo)(() => {
              var e;
              return (
                (BigInt(
                  null !== (e = null == s ? void 0 : s.amount) && void 0 !== e
                    ? e
                    : 0
                ) +
                  (null != d ? d : BigInt(0))) *
                BigInt(4)
              ).toString();
            }, [s, d]),
            [x, m] = (0, l.useState)(0),
            [h, f] = (0, l.useState)(0),
            p = (0, l.useMemo)(() => {
              var e, t;
              let s = o.find((e) => e.chainId === I.eG.hubChainId);
              return null !==
                (t = Number(
                  null == s
                    ? void 0
                    : null ===
                        (e = s.balances.find((e) => e.symbol === T.W.ETH)) ||
                      void 0 === e
                    ? void 0
                    : e.balance
                )) && void 0 !== t
                ? t
                : 0;
            }, [o]),
            [v, j] = (0, l.useState)(N.un.TWELVE_MONTHS),
            [g, C] = (0, l.useState)(!1),
            [L, A] = (0, l.useState)(""),
            [R, P] = (0, l.useState)(""),
            F = (0, l.useMemo)(() => Number(R) / x, [R, x]),
            B = (0, l.useMemo)(
              () => (0, M.u)(h * F, { maxDecimals: I.hS }),
              [h, F]
            ),
            W = (0, l.useMemo)(() => z.jT, []),
            O = (0, l.useMemo)(() => z.jT.symbol, []),
            D = (0, l.useMemo)(() => {
              var e, t;
              return null !==
                (t =
                  null ===
                    (e = r.find(
                      (e) => e.symbol.toLowerCase() === O.toLowerCase()
                    )) || void 0 === e
                    ? void 0
                    : e.usdValue) && void 0 !== t
                ? t
                : 0;
            }, [r, O]),
            _ = (0, l.useMemo)(() => (0, Z.T)(Number(R) * D), [R, D]),
            U = (0, l.useMemo)(() => {
              var e, t;
              return null !==
                (t =
                  null === (e = r.find((e) => e.symbol === T.W.WETH)) ||
                  void 0 === e
                    ? void 0
                    : e.usdValue) && void 0 !== t
                ? t
                : 0;
            }, [r]),
            Y = (0, l.useMemo)(() => {
              let e = (0, z.HX)().find((e) => e.symbol === T.W.WETH),
                t = (0, k.F)(e);
              return { ...e, ...t };
            }, []),
            q = (0, l.useMemo)(() => (0, Z.T)(Number(B) * U), [B, U]),
            G = (e, t) => {
              let s = !1,
                n = "",
                a = (0, S.dO)(W, e, i, x),
                r = (0, S.dO)(Y, t, i, p);
              (s = a.isValid && r.isValid),
                (n = a.isValid ? r.text : a.text),
                A(s ? "" : n),
                C(s);
            },
            K = async (e) => {
              var t;
              let [n, i] = await (0, E.tq)(
                  a,
                  e,
                  v,
                  null !== (t = null == s ? void 0 : s.tokenomics) &&
                    void 0 !== t
                    ? t
                    : "v1"
                ),
                r = W.decimals > I.hS ? I.hS : W.decimals,
                l = Y.decimals > I.hS ? I.hS : Y.decimals;
              return {
                syno: Number(y.bM(n.toString(), W.decimals)).toFixed(r),
                eth: Number(y.bM(i.toString(), Y.decimals)).toFixed(l),
              };
            },
            Q = async () => {
              if (s && s.hasLockFeature) {
                let { syno: e, eth: t } = await K(u);
                m(Number(e)), f(Number(t)), P(e);
              }
            };
          return (
            (0, l.useEffect)(() => {
              Q();
            }, [v]),
            (0, n.jsx)(V.Provider, {
              value: {
                rewardItem: s,
                activeToken: W,
                synoRewardsTotalAmount: u,
                amount: R,
                dollarValue: _,
                activeToken2: Y,
                amount2: B,
                dollarValue2: q,
                error: L,
                isFormValid: g,
                maxSynoReward: x,
                userNativeTokenBalance: p,
                handleAmountChange: (e) => {
                  P(e), G(e, B);
                },
                lockPeriod: v,
                setLockPeriod: j,
              },
              children: t,
            })
          );
        };
      function R(e) {
        return (0, n.jsx)("main", {
          className: "px-6  min-h-[230px]  h-full flex flex-1 flex-col",
          children: e.children,
        });
      }
      var P = s(22170),
        F = s.n(P),
        B = s(72258),
        W = s(89755),
        O = s(63544),
        D = s(41015),
        _ = s(87726),
        U = s(25392),
        Y = s(58818),
        q = s(46006),
        G = s(95172),
        K = s(90034),
        Q = s(22488),
        X = s(59339);
      function J() {
        let {
          userNativeTokenBalance: e,
          activeToken2: t,
          dollarValue2: s,
          amount2: i,
          error: a,
        } = L();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(q.Z, {
              children: [
                (0, n.jsx)("span", {
                  className: "opacity-80",
                  children: (0, n.jsx)(x.Z, { size: "md", text: i }),
                }),
                (0, n.jsxs)(Y.Z, {
                  children: [
                    (0, n.jsx)(D.Z, {
                      symbol: t.symbol,
                      width: 24,
                      height: 24,
                    }),
                    (0, n.jsx)(x.Z, { size: "lg", text: t.symbol }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)(G.Z, {
              children: [
                (0, n.jsxs)(K.Z, {
                  children: [
                    (0, n.jsx)(_.Z, { text: s }),
                    (0, n.jsx)(X.Z, {
                      decimals: t.decimals,
                      hideMaxButton: !0,
                      walletBalance: e,
                      onSetMax: () => {},
                    }),
                  ],
                }),
                (0, n.jsx)(Q.Z, { error: a }),
              ],
            }),
          ],
        });
      }
      function $() {
        let {
            maxSynoReward: e,
            activeToken: t,
            dollarValue: s,
            amount: r,
            handleAmountChange: o,
            error: c,
          } = L(),
          { getModalItem: d } = (0, a.Z)(),
          u = (0, l.useMemo)(() => "Step Two", []),
          m = (0, l.useMemo)(
            () => "Choose Amount of Bonus SYNO to Lock and Provide ETH:",
            []
          ),
          h = (0, l.useMemo)(
            () =>
              "Note: vlSYNO is an 80:20 Balancer Pool pair. Creating this vlSYNO lock will require locking 20% in ETH.",
            []
          ),
          f = (0, l.useMemo)(() => {
            var e;
            return null === (e = d(i.t.ClaimRewards)) || void 0 === e
              ? void 0
              : e.data;
          }, [d]),
          p = (0, l.useMemo)(
            () => (f ? Number(f.value + (0, E.VU)(f)) : 0),
            [f]
          ),
          v = (0, l.useMemo)(
            () => Math.ceil(((Number(r) - p) * 100) / p),
            [r, p]
          ),
          j = (0, l.useMemo)(() => (0, M.u)(v, { maxDecimals: 0 }), [v]);
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(U.Z, {
            hasError: !!c,
            subLabel: u,
            label: m,
            popoverContent: "claim-and-lock",
            children: [
              (0, n.jsxs)(q.Z, {
                className: "mt-2",
                children: [
                  (0, n.jsx)(O.Z, {
                    type: "text",
                    id: "claim_syno_transaction_amount",
                    placeholder: "0.0",
                    focus: !0,
                    value: r,
                    onChange: (e) => {
                      o(e.target.value);
                    },
                    error: !!c,
                  }),
                  v > 0 &&
                    (0, n.jsx)("div", {
                      className: "mr-9 italic",
                      children: (0, n.jsx)(x.Z, {
                        size: "xs",
                        color: "yellow",
                        text: "+" + j + "%",
                      }),
                    }),
                  (0, n.jsxs)(Y.Z, {
                    children: [
                      (0, n.jsx)(D.Z, {
                        symbol: t.symbol,
                        width: 24,
                        height: 24,
                      }),
                      (0, n.jsx)(x.Z, { size: "lg", text: t.symbol }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(G.Z, {
                children: (0, n.jsxs)(K.Z, {
                  children: [
                    (0, n.jsx)(_.Z, { text: s }),
                    (0, n.jsx)(X.Z, {
                      decimals: t.decimals,
                      label: "Rewards balance:",
                      showPercentageButtons: !0,
                      walletBalance: e,
                      onSetMax: (e) => {
                        o(e.toString());
                      },
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(J, {}),
              (0, n.jsx)(_.Z, { text: h, wrap: !0, color: "yellow" }),
            ],
          }),
        });
      }
      var ee = s(57233);
      function et() {
        let { lockPeriod: e, setLockPeriod: t } = L(),
          s = (0, l.useMemo)(
            () =>
              (0, N.Kv)()
                .filter((e) => e.value !== N.un.ONE_MONTH)
                .map((e) => ({ ...e, isDisabled: !1 })),
            []
          ),
          i = (0, l.useCallback)(
            (e) => {
              t(e);
            },
            [t]
          ),
          a = (0, l.useMemo)(() => "Step One", []),
          r = (0, l.useMemo)(() => "Choose Lock Duration:", []);
        return (0, n.jsx)(U.Z, {
          hasError: !1,
          subLabel: a,
          label: r,
          children: (0, n.jsx)(ee.Z, {
            options: s,
            onValueChange: i,
            modelValue: e,
          }),
        });
      }
      function es(e) {
        let { amount: t, amount2: s, lockPeriod: i } = L(),
          a = (0, l.useMemo)(() => "Creating new lock of", []),
          [r, o] = (0, l.useState)("-- --"),
          c = (0, l.useMemo)(() => Number(r) * (0, B.v6)(i), [r, i]),
          d = (0, l.useMemo)(
            () =>
              ""
                .concat((0, M.u)(r, { maxDecimals: 2 }), " ")
                .concat(z._H.symbol, " (")
                .concat((0, M.u)(c, { maxDecimals: 2 }), " ")
                .concat(z.Bq.symbol, ")"),
            [r, c]
          ),
          u = (0, l.useMemo)(() => "".concat((0, B.Rr)(i), " months."), [i]),
          x = (0, l.useCallback)(
            F()(async (e, t) => {
              o(await (0, B.r5)(e, t));
            }, 300),
            []
          );
        return (
          (0, l.useEffect)(
            () => (
              (t || s) && x(s, t),
              () => {
                x.cancel();
              }
            ),
            [t, s, x]
          ),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(et, {}),
              (0, n.jsxs)("section", {
                children: [
                  (0, n.jsx)($, {}),
                  (0, n.jsx)(W.Z, {
                    subText: a,
                    valueText: d,
                    valueTextColor: "yellow",
                    lockPeriodText: u,
                  }),
                ],
              }),
            ],
          })
        );
      }
      var en = s(19621),
        ei = s(68633),
        ea = s(32194),
        er = s(10200),
        el = s(54422),
        eo = s(97321),
        ec = s(65845),
        ed = s(22428);
      function eu(e) {
        let { walletProvider: t } = (0, H.Z)(),
          {
            isSwitchingChain: s,
            handleSwitchNetwork: r,
            isProperChain: o,
          } = (0, en.o)(),
          {
            amount: c,
            amount2: d,
            synoRewardsTotalAmount: u,
            rewardItem: x,
            lockPeriod: m,
            activeToken: h,
          } = L(),
          { addNotification: f, changeNotificationState: p } = (0, ec.Z)(),
          { add: v } = (0, ed.Z)(),
          [j, g] = (0, l.useState)(!1),
          C = (0, a.Z)((e) => e.changeModalState),
          b = () => {
            C(i.t.ClaimRewards, !1);
          },
          w = async () => {
            let e = -1,
              s = null;
            try {
              g(!0);
              let { signer: i, walletAddress: a } = await (0, el.z)(t),
                r = d ? y.fi(d) : BigInt(0),
                l = {
                  ...(0, el.l)(),
                  type: N.eY.Lock,
                  token: h,
                  amount: Number(c).toString(),
                };
              if (
                ((e = f((0, ei.h)(l))),
                (null == x ? void 0 : x.tokenomics) === "v1")
              ) {
                var n;
                let e = er.CI.connect(ea.l, i),
                  t = (
                    null == x
                      ? void 0
                      : null === (n = x.distributionTrees) || void 0 === n
                      ? void 0
                      : n.length
                  )
                    ? x.distributionTrees.map((e) => ({
                        proof: e.userData.proof,
                        epoch: e.epoch,
                        index: e.userData.index,
                        amount: e.userData.amount,
                      }))
                    : [],
                  a = BigInt(0),
                  l = t.map((e) => {
                    let t = (r * BigInt(e.amount)) / BigInt(u);
                    return (a += t), t;
                  }),
                  o = t.map(() => m);
                s = await e[
                  "claim((bytes32[],uint256,uint256,uint256)[],uint256[],uint8[])"
                ](t, l, o, { value: a });
              } else {
                let e = er.gK.connect(ea.a, i);
                s = await e.claimSyno(m, { value: r });
              }
              (l.txHash = s.hash),
                p(e, "inProgress"),
                await s.wait(),
                setTimeout(() => v(l, a), 3e3),
                b();
            } catch (t) {
              p(e, "error"), console.error("Error performing market action", t);
            } finally {
              g(!1);
            }
          };
        return o
          ? (0, n.jsx)(eo.Z, { onClick: w, isLoading: j, text: "Claim & Lock" })
          : (0, n.jsx)(eo.Z, {
              text: "Switch Network",
              isLoading: s,
              loadingText: "Switching Network",
              onClick: r,
            });
      }
      function ex() {
        return (0, n.jsxs)("header", {
          className: "flex items-center gap-3 ",
          children: [
            (0, n.jsx)(x.Z, { size: "md", text: "Claim & Lock Bonus" }),
            (0, n.jsx)(_.Z, {
              text: "Earn bonus emissions by locking your rewards into vlSYNO",
              size: "sm",
            }),
          ],
        });
      }
      function em(e) {
        return (0, n.jsxs)("section", {
          className: "flex flex-col gap-4 pb-6",
          children: [
            (0, n.jsx)(ex, {}),
            (0, n.jsx)(es, {}),
            (0, n.jsx)(eu, {}),
          ],
        });
      }
      var eh = s(75800),
        ef = s(15766);
      function ep(e) {
        let { getModalItem: t, changeModalState: s } = (0, a.Z)(),
          { walletProvider: r } = (0, H.Z)(),
          { addNotification: o, changeNotificationState: c } = (0, ec.Z)(),
          { add: d } = (0, ed.Z)(),
          { all: u } = (0, b.Z)(),
          [m, h] = (0, l.useState)(!1),
          f = (0, l.useMemo)(() => {
            var e;
            return null === (e = t(i.t.ClaimRewards)) || void 0 === e
              ? void 0
              : e.data;
          }, [t]),
          p = (0, l.useMemo)(() => {
            var e;
            return null !==
              (e = u.find(
                (e) =>
                  e.symbol.toLowerCase() ===
                  (null == f ? void 0 : f.symbol.toLowerCase())
              )) && void 0 !== e
              ? e
              : u[0];
          }, [u, f]),
          v = (0, l.useMemo)(
            () =>
              f
                ? (0, M.u)(Number(f.value + (0, E.VU)(f)), {
                    maxDecimals: 2,
                    showZeroApproximation: !0,
                  })
                : (0, Z.T)(0),
            [f]
          ),
          j = (0, l.useMemo)(
            () => (f ? (0, Z.T)(Number(f.value) * p.usdValue) : (0, Z.T)(0)),
            [f, p]
          );
        if (!f) return null;
        let g = async () => {
          try {
            h(!0);
            let { signer: e } = await (0, el.z)(r);
            await f.claim(e, o, c, d), s(i.t.ClaimRewards, !1);
          } catch (e) {
            console.error(e);
          } finally {
            h(!1);
          }
        };
        return (0, n.jsxs)(eh.Z, {
          className: "h-[52px] p-3 flex justify-between ",
          children: [
            (0, n.jsx)(x.Z, { text: "Claimable Rewards", size: "sm" }),
            (0, n.jsxs)("div", {
              className: "flex flex-col",
              children: [
                (0, n.jsx)(x.Z, { text: v, size: "sm" }),
                (0, n.jsx)(_.Z, { text: j, size: "sm" }),
              ],
            }),
            (0, n.jsx)(ef.Z, {
              isLoading: m,
              onClick: g,
              text: "Claim Now",
              width: 76,
            }),
          ],
        });
      }
      function ev(e) {
        return (0, n.jsx)(R, {
          children: (0, n.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [(0, n.jsx)(ep, {}), (0, n.jsx)(em, {})],
          }),
        });
      }
      function ej(e) {
        var t;
        let s = (0, a.Z)((e) =>
            e.items.some((e) => e.name === i.t.ClaimRewards && e.isOpen)
          ),
          { getModalItem: r } = (0, a.Z)(),
          o = (0, l.useMemo)(() => {
            var e;
            return null === (e = r(i.t.ClaimRewards)) || void 0 === e
              ? void 0
              : e.data;
          }, [
            null === (t = r(i.t.ClaimRewards)) || void 0 === t
              ? void 0
              : t.data,
          ]),
          d = (0, a.Z)((e) => e.changeModalState),
          u = () => {
            d(i.t.ClaimRewards, !s);
          };
        return o
          ? (0, n.jsx)(A, {
              rewardItem: o,
              children: (0, n.jsxs)(c, {
                showModal: s,
                configName: i.t.ClaimRewards,
                onClose: () => u(),
                children: [
                  (0, n.jsx)(m, {
                    children: (0, n.jsx)(x.Z, {
                      size: "lg",
                      text: "Claim SYNO Rewards",
                    }),
                  }),
                  (0, n.jsx)(ev, {}),
                ],
              }),
            })
          : null;
      }
      function eg(e) {
        return (0, n.jsx)(R, {
          children: (0, n.jsxs)("ul", {
            className:
              "flex flex-col gap-[15px] text-xs text-font-grey list-disc pl-4 pb-2",
            children: [
              (0, n.jsx)("li", {
                children:
                  " I am not the person or entities who reside in, are citizens of, are incorporated in, or have a registered office in the United States of America or any Prohibited Localities, as defined in the Terms of Use. ",
              }),
              (0, n.jsx)("li", {
                children:
                  " I will not in the future access this site or use the SYNO dApp while located in the United States or any Prohibited Localities, as defined in the Terms of Use. ",
              }),
              (0, n.jsx)("li", {
                children:
                  " I am not using, and will not in the future use, a VPN to mask my physical location from a restricted territory. ",
              }),
              (0, n.jsx)("li", {
                children:
                  " I am lawfully permitted to access this site and use the SYNO Dapp under the laws of the jurisdiction of which I reside and am located. ",
              }),
              (0, n.jsx)("li", {
                children:
                  " I understand the risks associated with entering into using the SYNO protocol. ",
              }),
            ],
          }),
        });
      }
      var eC = s(43075),
        eb = s(22259);
      function ew(e) {
        return (0, n.jsx)("footer", {
          className: "px-6 py-4 flex gap-3 justify-between",
          children: e.children,
        });
      }
      var ey = s(60209);
      function eN(e) {
        let { getTermsAndConditions: t } = (0, ey.Z)(),
          { termsAndConditions: s } = (0, eC.MG)(),
          [i, a] = (0, l.useState)(!1),
          { walletProvider: r } = (0, H.Z)(),
          o = async () => {
            a(!0);
            let { signer: n } = await (0, el.z)(r);
            try {
              let i = await n.signMessage(s),
                a = n.address;
              await (0, eb.T)({ rawMessage: s, address: a, signedMessage: i }),
                await t(a),
                e.onClose();
            } catch (e) {
              console.error("Error signing terms and conditions", e);
            } finally {
              a(!1);
            }
          };
        return (0, n.jsx)(ew, {
          children: (0, n.jsx)(eo.Z, {
            onClick: o,
            isLoading: i,
            text: "Sign",
          }),
        });
      }
      function eZ(e) {
        let t = (0, a.Z)((e) =>
            e.items.some((e) => e.name === i.t.TermsAndConditions && e.isOpen)
          ),
          s = (0, a.Z)((e) => e.changeModalState),
          r = () => {
            s(i.t.TermsAndConditions, !t);
          };
        return (0, n.jsxs)(c, {
          showModal: t,
          configName: i.t.TermsAndConditions,
          onClose: () => r(),
          children: [
            (0, n.jsx)(m, {
              children: (0, n.jsx)(x.Z, {
                size: "lg",
                text: "Terms & Conditions Agreement",
              }),
            }),
            (0, n.jsx)(eg, {}),
            (0, n.jsx)(eN, { onClose: r }),
          ],
        });
      }
      function eM() {
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(ej, {}), (0, n.jsx)(C, {}), (0, n.jsx)(eZ, {})],
        });
      }
    },
    86346: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return k;
        },
      });
      var n = s(57437),
        i = s(34446),
        a = s(65845),
        r = s(2265),
        l = s(77155),
        o = s(7078);
      function c(e) {
        return (0, n.jsx)("section", {
          children: (0, n.jsx)("header", { children: "Error" }),
        });
      }
      var d = s(73399),
        u = s(14375);
      function x(e) {
        let t = (0, n.jsx)(u.Z, {});
        switch (e.state) {
          case "waiting":
          case "inProgress":
            t = (0, n.jsx)(u.Z, {});
            break;
          case "success":
            t = (0, n.jsxs)("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("circle", {
                  cx: "6",
                  cy: "6",
                  r: "6",
                  fill: "#60AB00",
                }),
                (0, n.jsx)("path", {
                  d: "M9.34103 3.93555L5.21241 8.06417L2.65827 5.50997",
                  stroke: "#FCFCFC",
                  strokeWidth: "1.5",
                  strokeLinecap: "square",
                }),
              ],
            });
            break;
          case "error":
            t = (0, n.jsxs)("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("circle", {
                  cx: "6",
                  cy: "6",
                  r: "6",
                  fill: "#AB1F00",
                }),
                (0, n.jsx)("path", {
                  d: "M8.30432 3.69727L3.69727 8.30432M3.69727 3.69727L8.30432 8.30432",
                  stroke: "#FCFCFC",
                  strokeWidth: "1.5",
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                }),
              ],
            });
        }
        return (0, n.jsx)("div", {
          className: "w-6 ml-4 mr-2 flex justify-center items-center",
          children: t,
        });
      }
      function m(e) {
        let { notification: t } = e,
          s = {
            waiting: "Waiting on Wallet Approval",
            inProgress: "Wallet Approval in Progress",
            success: "Wallet Approval Success",
            error: "Wallet Approval Error",
          }[t.state];
        return (0, n.jsxs)("section", {
          className: "flex min-h-[64px]",
          children: [
            (0, n.jsx)(x, { state: t.state }),
            (0, n.jsx)("header", {
              className: "py-3 flex items-center",
              children: (0, n.jsx)(d.Z, { text: s, size: "md" }),
            }),
          ],
        });
      }
      var h = s(40440),
        f = s(60339),
        p = s(84889),
        v = s(36329),
        j = s(79811),
        g = s(36864),
        C = s(71292);
      function b(e) {
        let { chain: t, transaction: s } = e,
          i = (0, r.useMemo)(
            () => t.explorerUrl + "tx/" + s.txHash,
            [t, s.txHash]
          ),
          a = (0, r.useMemo)(
            () =>
              "https://wormholescan.io/#/tx/"
                .concat(s.txHash, "?network=")
                .concat((0, g.b6)() ? "Testnet" : "Mainnet", "&view=overview"),
            [s.txHash]
          ),
          l = (0, r.useMemo)(
            () => ("hub" === s.speed ? i : a),
            [i, a, s.speed]
          );
        return (0, n.jsx)(C.Z, { href: l });
      }
      var w = s(53430),
        y = s(87726);
      function N(e) {
        let { chain: t, transaction: s } = e;
        return (0, n.jsxs)("div", {
          className: "flex gap-0.5",
          children: [
            (0, n.jsx)(y.Z, {
              weight: "light",
              text: "Estimated processing time: ",
              size: "sm",
            }),
            (0, n.jsx)(y.Z, {
              weight: "medium",
              text: (0, w.SH)(s.speed, s.type, t, "short"),
              size: "sm",
            }),
          ],
        });
      }
      function Z(e) {
        let { notification: t } = e,
          s = (0, r.useMemo)(
            () => ({
              waiting: "Initiating Transaction",
              inProgress: "",
              success: "Transaction Successful",
              error: "Transaction Reverted",
            }),
            []
          ),
          i = (0, r.useMemo)(() => s[t.state], [t.state, s]),
          a = (0, r.useMemo)(() => t.data, [t.data]),
          l = (0, r.useMemo)(() => (0, f.E)(a.chainId), [a.chainId]),
          o = (0, n.jsx)("header", {
            className: "py-3 flex items-center",
            children: (0, n.jsx)(d.Z, { text: i, size: "md" }),
          });
        return (
          "inProgress" === t.state &&
            a &&
            (o = (0, n.jsxs)("div", {
              className: "py-3 flex flex-col gap-1 justify-center w-full ",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex items-center gap-0.5",
                  children: [
                    (0, n.jsx)("span", {
                      children: (0, v.f)(a.type.replace("-", " ")),
                    }),
                    (0, n.jsx)(d.Z, {
                      text: ""
                        .concat(
                          (0, p.u)(a.amount, {
                            abbreviate: !0,
                            showZeroApproximation: !0,
                          }),
                          " "
                        )
                        .concat(a.isNative ? l.currency : a.token.symbol),
                      size: "md",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsx)(j.Z, { chainId: l.id }),
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsxs)("div", {
                    className: "flex gap-3 w-full",
                    children: [
                      (0, n.jsx)(N, { chain: l, transaction: a }),
                      (0, n.jsx)(b, { chain: l, transaction: a }),
                    ],
                  }),
                }),
              ],
            })),
          (0, n.jsxs)("section", {
            className: "flex min-h-[64px]",
            children: [(0, n.jsx)(x, { state: t.state }), o],
          })
        );
      }
      function M(e) {
        let { notification: t } = e,
          { removeNotification: s } = (0, a.Z)(),
          i = (0, r.useMemo)(
            () =>
              (0, o.A)(
                "rounded-xl bg-origin-border shadow-notification min-w-[320px] min-h-[64px] bg-background-card"
              ),
            []
          ),
          d = (0, r.useMemo)(
            () => ({
              waiting: "bg-background-notification",
              inProgress: "bg-background-notification",
              success: "bg-background-notification-success",
              error: "bg-background-notification-error",
            }),
            []
          ),
          u = (0, r.useMemo)(
            () =>
              (0, o.A)(
                "p-[1px] bg-origin-border bg-background-notification rounded-xl shadow-lg",
                d[t.state]
              ),
            [d, t.state]
          );
        return t
          ? (0, n.jsxs)(
              l.E.li,
              {
                layout: !0,
                initial: { opacity: 0, y: 50, scale: 0.3 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: {
                  opacity: 0,
                  scale: 0.75,
                  transition: { duration: 0.15 },
                },
                className: "z-50 relative",
                children: [
                  (0, n.jsx)(h.Z, {
                    onClick: () => {
                      s(t.id);
                    },
                  }),
                  (0, n.jsx)("div", {
                    className: u,
                    children: (0, n.jsx)("div", {
                      className: i,
                      children: ((e) => {
                        switch (e.type) {
                          case "approval":
                            return (0, n.jsx)(m, { notification: e });
                          case "transaction":
                          case "stake":
                            return (0, n.jsx)(Z, { notification: e });
                          default:
                            return (0, n.jsx)(c, {});
                        }
                      })(t),
                    }),
                  }),
                ],
              },
              "notification_" + t.id
            )
          : null;
      }
      function k() {
        let { all: e } = (0, a.Z)();
        return (0, n.jsx)("ul", {
          className:
            "z-50 fixed bottom-0 right-0 flex flex-col justify-end list-none gap-3 mr-3 mb-3",
          children: (0, n.jsx)(i.M, {
            initial: !1,
            mode: "sync",
            children: e.map((e) => (0, n.jsx)(M, { notification: e }, e.id)),
          }),
        });
      }
    },
    90861: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return C;
        },
      });
      var n = s(2265),
        i = s(53430),
        a = s(68633),
        r = s(60339),
        l = s(35273),
        o = s(93083),
        c = s(36864),
        d = s(29112),
        u = s(49699),
        x = s(28109),
        m = s(72559),
        h = s(61195),
        f = s(65845),
        p = s(22428),
        v = s(77063),
        j = s(78243),
        g = s(26755);
      function C() {
        let { address: e } = (0, l.Z)(),
          {
            all: t,
            addNotification: s,
            changeNotificationState: C,
          } = (0, f.Z)(),
          { all: b, modify: w, remove: y } = (0, p.Z)(),
          {
            pendingTransactionsUpdated: N,
            updatedTypes: Z,
            onChainFinalityChanged: M,
          } = (0, d.Y)(),
          k = (0, h.Z)((e) => e.fetchMoneyMarketData),
          H = (0, x.Z)((e) => e.fetchIncentives),
          S = (0, v.Z)((e) => e.fetchUserData),
          z = (0, m.Z)((e) => e.fetchUserWalletBalances),
          T = (0, u.Z)((e) => e.fetchUserLocks),
          I = (0, j.Z)((e) => e.fetchHistoryData),
          E = (0, u.Z)((e) => e.fetchUserStakes),
          V = (0, x.Z)((e) => e.fetchRewards),
          [L, A] = (0, n.useState)(!0),
          R = (0, n.useCallback)(async () => {
            await Promise.all(
              b.map(async (n) => {
                let l = "hub" === n.speed,
                  d = (0, r.E)(n.chainId),
                  u = (0, r.E)(c.eG.hubChainId),
                  x =
                    n.type === o.i.SendingBorrow ||
                    n.type === o.i.SendingWithdraw
                      ? u.name
                      : d.name,
                  m = l
                    ? await (0, i.ag)(n.txHash)
                    : await (0, i.Lv)(x, n.txHash);
                if (m && (l || "redeemed" === m.status)) {
                  var h;
                  let i =
                    null ===
                      (h = t.find((e) => {
                        var t;
                        return (
                          (null == e
                            ? void 0
                            : null === (t = e.data) || void 0 === t
                            ? void 0
                            : t.txHash) === n.txHash
                        );
                      })) || void 0 === h
                      ? void 0
                      : h.id;
                  if (l || (n.type !== o.i.Borrow && n.type !== o.i.Withdraw))
                    i ? C(i, "success") : s((0, a.h)(n, "success")),
                      y(n.txHash, e);
                  else {
                    (n.txHash = m.toTxHash),
                      (n.type =
                        n.type === o.i.Borrow
                          ? o.i.SendingBorrow
                          : o.i.SendingWithdraw),
                      (n.chainId = c.eG.hubChainId),
                      w(n, e),
                      i ? C(i, "inProgress", n) : s((0, a.h)(n, "success"));
                    return;
                  }
                }
              })
            );
          }, [s, C, w, t, b, y, e]);
        return (
          (0, n.useEffect)(() => {
            R();
            let e = setInterval(() => {
              b.length && R();
            }, 1e4);
            return () => clearInterval(e);
          }, [b, t, R]),
          (0, n.useEffect)(() => {
            !L && N && Z.length
              ? (k(),
                H(),
                (null == e ? void 0 : e.length) &&
                  (z(e),
                  I(e),
                  Z.includes(g.eY.Lock) ||
                  Z.includes(g.eY.Extend) ||
                  Z.includes(g.eY.RequestWithdrawal)
                    ? T(e, "all")
                    : Z.includes(g.QK.Stake) || Z.includes(g.QK.UnStake)
                    ? E(e, "all")
                    : S(e),
                  V(e)))
              : A(!1);
          }, [L, e, N, Z, T, I, E, k, H, z, S, V]),
          (0, n.useEffect)(() => {
            M && (null == e ? void 0 : e.length) && z(e);
          }, [e, M, z]),
          null
        );
      }
    },
    89755: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = s(57437),
        i = s(2265),
        a = s(36864),
        r = s(73399),
        l = s(87726),
        o = s(71292);
      function c(e) {
        let {
            subText: t,
            valueText: s,
            valueTextColor: c,
            lockPeriodText: d,
          } = e,
          u = (0, i.useMemo)(() => (null != c ? c : "default"), [c]),
          x = (0, i.useMemo)(() => a.eG.balancerPoolUrl, []);
        return (0, n.jsxs)("div", {
          className:
            "mt-4 flex flex-wrap gap-1 justify-center items-center w-full",
          children: [
            (0, n.jsx)(l.Z, { text: t }),
            (0, n.jsx)(r.Z, { size: "sm", text: s, color: u }),
            (0, n.jsx)(l.Z, { text: "for" }),
            (0, n.jsx)(l.Z, { text: d }),
            (0, n.jsx)(o.Z, { href: x, text: "Link to the Pool" }),
          ],
        });
      }
    },
    57233: function (e, t, s) {
      "use strict";
      var n = s(57437),
        i = s(2265);
      t.Z = (e) => {
        let { modelValue: t, isDisabled: s, onValueChange: a, options: r } = e,
          [l, o] = (0, i.useState)(t),
          c = (0, i.useMemo)(() => 4 === r.length, [r]);
        return (
          (0, i.useEffect)(() => {
            o(t);
          }, [t]),
          (0, i.useEffect)(() => {
            a(l);
          }, [l, a]),
          (0, n.jsx)("div", {
            className: "grid "
              .concat(
                c ? "grid-cols-8 -mx-6" : "grid-cols-6 -mx-14",
                "  relative py-2 mt-2  "
              )
              .concat(
                s ? "pointer-events-none cursor-not-allowed opacity-60" : ""
              ),
            children: r.map((e, t) =>
              (0, n.jsx)(
                "div",
                {
                  className: "flex items-center ".concat(
                    t ? "col-span-2" : "",
                    " justify-end w-full relative"
                  ),
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-col items-end",
                    children: [
                      (0, n.jsx)("span", {
                        className:
                          "absolute transition-all duration-200 h-1 right-1 top-[5px] "
                            .concat(t ? "w-full" : "w-0 rounded-md", " ")
                            .concat(
                              (c ? t : t + 1) <= l
                                ? "custom-radio"
                                : "custom-radio-not-checked"
                            ),
                      }),
                      (0, n.jsx)("input", {
                        type: "radio",
                        id: "".concat(e.value),
                        value: e.value,
                        checked: l === e.value,
                        onChange: () =>
                          !(null == e ? void 0 : e.isDisabled) && o(e.value),
                        className: ""
                          .concat(
                            (null == e ? void 0 : e.isDisabled)
                              ? "cursor-not-allowed border-transparent bg-transparent"
                              : "cursor-pointer",
                            " "
                          )
                          .concat(
                            l < e.value
                              ? "custom-radio-not-checked"
                              : "custom-radio",
                            " relative z-10 w-4 h-4 border-[3px] rounded-full cursor-pointer appearance-none "
                          ),
                        disabled: (null == e ? void 0 : e.isDisabled) || s,
                      }),
                      (0, n.jsxs)("label", {
                        htmlFor: "".concat(e.value),
                        className:
                          "w-24 text-[11px] relative z-10 flex gap-0.5 text-center left-[54px] pr-4 leading-none mt-2 "
                            .concat(
                              l === e.value
                                ? "text-white font-semibold"
                                : "text-white/60",
                              " "
                            )
                            .concat(e.isDisabled ? "opacity-60" : ""),
                        children: [
                          (0, n.jsx)("span", { children: e.label }),
                          (0, n.jsxs)("span", {
                            children: ["(x", e.multiplier, ")"],
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                e.value
              )
            ),
          })
        );
      };
    },
    56032: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(57437),
        i = s(41015),
        a = s(93083),
        r = s(62056),
        l = s(67035),
        o = s(87138),
        c = s(2265);
      function d(e) {
        let { showNative: t, isNotALink: s } = e,
          { token: d } = e;
        t && (d = { ...e.token, ...(0, r.F)(d) });
        let u = (0, c.useMemo)(() => (0, l.H)(d, a.i.Supply), [d]),
          x = (null == e ? void 0 : e.size) || 36;
        return s
          ? (0, n.jsxs)("div", {
              className: "flex gap-2 relative",
              children: [
                (0, n.jsx)(i.Z, { symbol: d.symbol, width: x, height: x }),
                (0, n.jsxs)("div", { children: [" ", e.children] }),
              ],
            })
          : (0, n.jsxs)(o.default, {
              href: u,
              className: "flex gap-2 relative",
              children: [
                (0, n.jsx)(i.Z, { symbol: d.symbol, width: x, height: x }),
                (0, n.jsxs)("div", { children: [" ", e.children] }),
              ],
            });
      }
    },
    40440: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = s(57437),
        i = s(53078);
      function a(e) {
        return (0, n.jsx)("button", {
          className: "absolute z-10 top-4 right-4",
          onClick: e.onClick,
          children: (0, n.jsx)("div", {
            className:
              "transition-all flex items-center justify-center w-8 h-8 rounded-full border border-transparent hover:border-border-color hover:bg-white/5",
            children: (0, n.jsx)(i.Z, { type: "close", className: "w-5 h-5" }),
          }),
        });
      }
    },
    7231: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = s(57437),
        i = s(2265),
        a = s(7078),
        r = s(53078),
        l = s(17867),
        o = s(80229);
      function c(e) {
        let t = (0, i.useMemo)(() => e.disabled, [e.disabled]),
          s = (0, i.useMemo)(
            () =>
              (0, a.A)(
                (0, l.ud)(t, !1),
                "w-6 h-6 transition-transform hover:scale-110 flex items-center justify-center !rounded-full"
              ),
            [t]
          );
        return (0, n.jsx)(o.Z, {
          children: (0, n.jsx)("button", {
            className: s,
            children: (0, n.jsx)(r.Z, { type: e.icon, className: "w-3 h-3" }),
          }),
        });
      }
    },
    71292: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = s(57437),
        i = s(87138),
        a = s(53078),
        r = s(2265);
      function l(e) {
        let { href: t, text: s, fontWeigth: l } = e,
          o = (0, r.useMemo)(() => (null != s ? s : "View Details"), [s]),
          c = (0, r.useMemo)(
            () =>
              "text-[11px] ".concat(
                "semibold" === l ? "font-semibold" : "font-medium"
              ),
            [l]
          ),
          d = (0, r.useMemo)(
            () =>
              "flex leading-[14px] transition items-center justify-center gap-0.5 text-white/80 hover:underline hover:text-white",
            []
          ),
          u = (0, r.useMemo)(
            () =>
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("span", { className: c, children: o }),
                  (0, n.jsx)(a.Z, {
                    type: "link-external",
                    className: "w-[10px] relative -top-[1px]",
                  }),
                ],
              }),
            [c, o]
          );
        return t.length
          ? (0, n.jsx)(i.default, {
              href: t,
              target: "_blank",
              className: d,
              children: u,
            })
          : (0, n.jsx)("div", { className: d, children: u });
      }
    },
    15766: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(57437),
        i = s(2265),
        a = s(5880),
        r = s(17867),
        l = s(80229),
        o = s(53078),
        c = s(14375);
      function d(e) {
        let t = (0, i.useMemo)(() => {
            var t;
            return null !== (t = e.width) && void 0 !== t ? t : 62;
          }, [e.width]),
          s = (0, i.useMemo)(() => {
            var t;
            return null !== (t = e.height) && void 0 !== t ? t : 24;
          }, [e.height]),
          d = (0, i.useMemo)(() => {
            var t;
            return null !== (t = e.fontSize) && void 0 !== t ? t : 10;
          }, [e.fontSize]),
          u = (0, i.useMemo)(() => {
            var t;
            return null !== (t = e.expandable) && void 0 !== t && t;
          }, [e.expandable]),
          x = (0, i.useMemo)(() => {
            var t;
            return (
              null !== (t = !!e.expandable && e.isExpanded) && void 0 !== t && t
            );
          }, [e.expandable, e.isExpanded]),
          m = (0, i.useMemo)(() => {
            var t;
            return (
              null !== (t = e.isDisabled || e.isLoading) && void 0 !== t && t
            );
          }, [e.isDisabled, e.isLoading]),
          h = (0, i.useMemo)(() => {
            var t;
            return null !== (t = e.isLoading) && void 0 !== t && t;
          }, [e.isLoading]),
          f = (0, i.useMemo)(() => (0, r.ud)(m, x), [m, x]);
        return (0, n.jsx)(l.Z, {
          children: (0, n.jsx)(a.H, {
            className: "rounded-lg bg-origin-border overflow-hidden",
            onClick: e.onClick,
            children: (0, n.jsx)("button", {
              className: f,
              style: { width: t, height: s, fontSize: d },
              children: h
                ? (0, n.jsx)("div", {
                    className: "flex w-full items-center justify-center",
                    children: (0, n.jsx)(c.Z, {}),
                  })
                : (0, n.jsxs)("span", {
                    className: "".concat(
                      u ? "pl-1" : "",
                      " flex items-center gap-0.5 justify-center relative"
                    ),
                    children: [
                      (0, n.jsx)("span", { children: e.text }),
                      u &&
                        (0, n.jsx)(o.Z, {
                          className: "w-[16px] ".concat(
                            x ? "rotate-180" : "",
                            " transition block h-3 w-3"
                          ),
                          type: "chevron-down",
                        }),
                      e.iconRight &&
                        (0, n.jsx)(o.Z, {
                          className: "w-[10px] h-[10px]",
                          type: "chevron-right",
                        }),
                    ],
                  }),
            }),
          }),
        });
      }
    },
    46426: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = s(57437),
        i = s(2265),
        a = s(7078),
        r = s(5880),
        l = s(17867),
        o = s(80229);
      function c(e) {
        let t = (0, i.useMemo)(() => {
            var t;
            return null !== (t = e.width) && void 0 !== t ? t : 116;
          }, [e.width]),
          s = (0, i.useMemo)(() => {
            var t;
            return null !== (t = e.height) && void 0 !== t ? t : 24;
          }, [e.height]),
          c = (0, i.useMemo)(() => {
            var t;
            return null !== (t = e.fontSize) && void 0 !== t ? t : 10;
          }, [e.fontSize]),
          d = (0, i.useMemo)(() => {
            var t;
            return null !== (t = e.isActive) && void 0 !== t && t;
          }, [e.isActive]),
          u = (0, i.useMemo)(() => (0, a.A)((0, l.ZF)(d)), [d]);
        return (0, n.jsx)(o.Z, {
          children: (0, n.jsx)(r.H, {
            className: "rounded-lg overflow-hidden",
            onClick: e.onClick,
            children: (0, n.jsx)("button", {
              style: { width: t, height: s, fontSize: c },
              className: u,
              children: e.text,
            }),
          }),
        });
      }
    },
    79811: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = s(57437),
        i = s(60339),
        a = s(2265),
        r = s(53739),
        l = s(87726);
      function o(e) {
        let t = (0, a.useMemo)(() => (0, i.E)(e.chainId), [e.chainId]);
        return (0, n.jsx)("div", {
          className: "flex",
          children: (0, n.jsxs)("div", {
            className:
              "inline-flex px-[6px] py-0.5 gap-1 bg-white-opacity-03 rounded",
            children: [
              (0, n.jsx)(l.Z, { size: "sm", text: "On" }),
              (0, n.jsx)(r.Z, { chainId: t.id, width: 12 }),
              (0, n.jsx)(l.Z, { size: "sm", text: t.name }),
            ],
          }),
        });
      }
    },
    53739: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = s(57437),
        i = s(2265),
        a = s(66648),
        r = s(60339);
      function l(e) {
        let t = (0, i.useMemo)(() => (0, r.E)(e.chainId), [e.chainId]),
          s = e.width || 16,
          l = e.height || 16,
          o = (0, i.useMemo)(
            () => "/images/chain/".concat(t.name.toLowerCase(), ".svg"),
            [t]
          );
        return (0, n.jsx)(a.default, {
          src: o,
          alt: t.name,
          width: s,
          height: l,
        });
      }
    },
    60394: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = s(57437),
        i = s(77155),
        a = s(2265);
      function r(e) {
        let t = (0, a.useMemo)(
          () => "flex gap-3 ".concat(e.className),
          [e.className]
        );
        return (0, n.jsx)(i.E.nav, {
          className: t,
          initial: { opacity: 0, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.25 },
          children: e.children,
        });
      }
    },
    99234: function (e, t, s) {
      "use strict";
      s.d(t, {
        N: function () {
          return i;
        },
      });
      var n = s(57570);
      let i = () => ({
        [n.t.TermsAndConditions]: { maxWidth: "484px", zIndex: "40" },
        [n.t.ClaimRewards]: { maxWidth: "484px", zIndex: "40" },
        [n.t.AssetManager]: { maxWidth: "424px", zIndex: "40" },
      });
    },
    67035: function (e, t, s) {
      "use strict";
      s.d(t, {
        H: function () {
          return a;
        },
        _: function () {
          return r;
        },
      });
      var n = s(78336),
        i = s(37650);
      let a = (e, t) => {
          var s;
          let a = null !== (s = e.originId) && void 0 !== s ? s : e.chainId,
            r = e.symbol.toLowerCase() === i.W.ETH.toLowerCase(),
            l = e.symbol.toLowerCase() === i.W.WETH.toLowerCase(),
            o = r ? i.W.WETH.toLowerCase() : e.symbol.toLowerCase(),
            c = n.gh.Token.replace(
              ":symbol",
              encodeURIComponent(o.replace(" ", ""))
            )
              .replace(":type", encodeURIComponent(t))
              .replace(":chainId", encodeURIComponent(a.toString()));
          return r || l
            ? "".concat(c, "&isNative=").concat(l ? "false" : "true")
            : c;
        },
        r = (e, t, s) => {
          var n;
          let a = null !== (n = t.originId) && void 0 !== n ? n : t.chainId,
            r = t.symbol.toLowerCase() === i.W.ETH.toLowerCase(),
            l = t.symbol.toLowerCase() === i.W.WETH.toLowerCase(),
            o = r ? i.W.WETH.toLowerCase() : t.symbol.toLowerCase(),
            [c, d] = e.split("?"),
            u = new URLSearchParams(d || "");
          return (
            u.set("symbol", encodeURIComponent(o.replace(" ", ""))),
            u.set("type", encodeURIComponent(s)),
            u.set("chainId", encodeURIComponent(a.toString())),
            (r || l) && u.set("isNative", l ? "false" : "true"),
            "".concat(c, "?").concat(u.toString())
          );
        };
    },
    19621: function (e, t, s) {
      "use strict";
      s.d(t, {
        o: function () {
          return l;
        },
      });
      var n = s(2265),
        i = s(36864),
        a = s(60339),
        r = s(35273);
      let l = (e) => {
        let { chainId: t, switchChain: s } = (0, r.Z)(),
          l = (0, a.E)(null != e ? e : i.eG.hubChainId),
          o = (0, n.useMemo)(() => t === l.id, [t, l]),
          [c, d] = (0, n.useState)(!1);
        return {
          isSwitchingChain: c,
          handleSwitchNetwork: async () => {
            if (l)
              try {
                d(!0), await s(l.config);
              } catch (e) {
                console.error("Error switching chain", e);
              } finally {
                d(!1);
              }
          },
          isProperChain: o,
        };
      };
    },
    57570: function (e, t, s) {
      "use strict";
      var n, i;
      s.d(t, {
        t: function () {
          return n;
        },
      }),
        ((i = n || (n = {})).TermsAndConditions = "TermsAndConditions"),
        (i.ClaimRewards = "ClaimRewards"),
        (i.AssetManager = "AssetManager");
    },
    63046: function (e, t, s) {
      "use strict";
      var n, i, a, r;
      s.d(t, {
        BS: function () {
          return i;
        },
        Ry: function () {
          return l;
        },
        eA: function () {
          return n;
        },
      }),
        ((a = n || (n = {}))[(a.Fast = 0)] = "Fast"),
        (a[(a.Standard = 1)] = "Standard"),
        ((r = i || (i = {}))[(r.Deposit = 0)] = "Deposit"),
        (r[(r.Borrow = 1)] = "Borrow"),
        (r[(r.Withdraw = 2)] = "Withdraw"),
        (r[(r.Repay = 3)] = "Repay"),
        (r[(r.DepositNative = 4)] = "DepositNative"),
        (r[(r.RepayNative = 5)] = "RepayNative"),
        (r[(r.WithdrawNative = 6)] = "WithdrawNative"),
        (r[(r.BorrowNative = 7)] = "BorrowNative");
      let l = (e) => {
        switch (e.toLowerCase()) {
          case "deposit":
          default:
            return 0;
          case "borrow":
            return 1;
          case "withdraw":
            return 2;
          case "repay":
            return 3;
          case "depositNative":
            return 4;
          case "repayNative":
            return 5;
          case "borrowNative":
            return 7;
          case "withdrawNative":
            return 6;
        }
      };
    },
    73467: function (e, t, s) {
      "use strict";
      s.d(t, {
        q: function () {
          return i;
        },
      });
      var n = s(83556);
      class i {
        getInterestRateModelFromAddress(e) {
          return (
            this.interestRateModels.find((t) =>
              t.tokens.some((t) => t.address.toLowerCase() === e.toLowerCase())
            ) || {
              kinks: [],
              rates: [],
              reserveFactor: 0,
              address: "unknown",
              tokens: [],
            }
          );
        }
        getInterestRateFromPoolUtilization(e, t, s) {
          let n;
          let i = this.getInterestRateModelFromAddress(e),
            a = { deposit: 0, borrow: 0 };
          if (t === BigInt(0) || s === BigInt(0)) return a;
          if (t <= s)
            return (
              (a.borrow = i.rates[i.rates.length - 1]),
              (a.deposit = a.borrow * (1 - i.reserveFactor)),
              a
            );
          let r = BigInt(1e6);
          for (
            n = 1;
            n < i.kinks.length &&
            !(s * r <= t * BigInt(Math.floor(1e6 * i.kinks[n])));
            n++
          );
          let l = Number(s * r) / Number(t * r),
            o = (l - i.kinks[n - 1]) / (i.kinks[n] - i.kinks[n - 1]);
          return (
            (a.borrow = (i.rates[n] - i.rates[n - 1]) * o + i.rates[n - 1]),
            (a.deposit = a.borrow * (1 - i.reserveFactor) * l),
            a
          );
        }
        getApyFromPoolUtilization(e, t, s) {
          let i = this.getInterestRateFromPoolUtilization(e, t, s);
          return {
            apr: { deposit: 100 * i.deposit, borrow: 100 * i.borrow },
            apy: { deposit: (0, n.OB)(i.deposit), borrow: (0, n.OB)(i.borrow) },
          };
        }
        constructor(e) {
          this.interestRateModels = e;
        }
      }
    },
    81153: function (e, t, s) {
      "use strict";
      var n = s(39099),
        i = s(57570),
        a = s(99234);
      let r = () =>
          [
            { name: i.t.TermsAndConditions },
            { name: i.t.ClaimRewards },
            { name: i.t.AssetManager },
          ].map((e) => ({ ...e, isOpen: !1, config: (0, a.N)()[e.name] })),
        l = (0, n.Ue)((e) => ({
          items: r(),
          changeModalState: (t, s, n) =>
            e((e) => ({
              items: e.items.map((e) =>
                e.name === t ? { ...e, data: s ? n : void 0, isOpen: s } : e
              ),
            })),
          closeAll: () =>
            e((e) => ({
              items: e.items.map((e) => ({ ...e, isOpen: !1, data: void 0 })),
            })),
          getModalItem: (e) => l.getState().items.find((t) => t.name === e),
        }));
      t.Z = l;
    },
    61195: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(38472),
        i = s(39099),
        a = s(38446),
        r = s(61602),
        l = s(73467);
      class o {
        build() {
          let e = new l.q(this.interestRateModels);
          return (
            this.market.capacity.deposit &&
              this.market.capacity.borrow &&
              (this.interestRate = e.getApyFromPoolUtilization(
                this.hubToken.address,
                BigInt(this.market.capacity.deposit),
                BigInt(this.market.capacity.borrow)
              )),
            this.interestRate
          );
        }
        constructor(e, t, s) {
          (this.interestRate = {
            apy: { deposit: 0, borrow: 0 },
            apr: { deposit: 0, borrow: 0 },
          }),
            (this.hubToken = e),
            (this.interestRateModels = t),
            (this.market = s);
        }
      }
      let c = (0, i.Ue)((e) => ({
        all: [],
        interestRateModels: [],
        setAll: (t, s) => {
          if (!t.length || !s.length) return;
          let n = (0, a.HX)()
            .map((e, n) => {
              let i = t[n];
              if (!i) return null;
              let a = new o(e, s, i).build();
              return { ...e, market: i, interestRate: a };
            })
            .filter((e) => null !== e);
          e({ interestRateModels: s }), e({ all: n });
        },
        fetchMoneyMarketData: async () => {
          try {
            let [e, t] = await Promise.all([
              n.Z.get(r.b.MoneyMarket.Markets),
              n.Z.get(r.b.MoneyMarket.InterestRateModels),
            ]).then((e) => {
              let [t, s] = e;
              return [t.data, s.data];
            });
            c.getState().setAll(e, t);
          } catch (e) {
            console.error("Failed to fetch money market data:", e);
          }
        },
      }));
      var d = c;
    },
    65845: function (e, t, s) {
      "use strict";
      let n = (0, s(39099).Ue)((e) => ({
        all: [],
        addNotification: (t) => {
          let s = (n.getState().all.length ? n.getState().all : []).reduce(
              (e, t) => (e.id > t.id ? e : t),
              { id: 0 }
            ).id,
            i = { ...t, id: s + 1, read: !1 };
          return (
            i.closeAfter &&
              setTimeout(() => {
                n.getState().removeNotification(i.id);
              }, i.closeAfter),
            e((e) => ({ all: [...e.all, i] })),
            i.id
          );
        },
        changeNotificationState: (t, s, i) => {
          let a = n.getState().all,
            r = a.findIndex((e) => e.id === t);
          -1 !== r &&
            ((a[r].state = s),
            i && (a[r].data = i),
            ("error" === s || "success" === s) &&
              setTimeout(() => {
                n.getState().removeNotification(t);
              }, 5e3),
            e({ all: a }));
        },
        removeNotification: (t) => {
          let s = n.getState().all,
            i = s.findIndex((e) => e.id === t);
          -1 !== i && (s.splice(i, 1), e({ all: s }));
        },
      }));
      t.Z = n;
    },
    53054: function () {},
  },
  function (e) {
    e.O(
      0,
      [225, 764, 99, 885, 114, 524, 19, 263, 666, 495, 341, 920, 971, 23, 744],
      function () {
        return e((e.s = 78914));
      }
    ),
      (_N_E = e.O());
  },
]);
