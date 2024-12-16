(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [890, 446],
  {
    14098: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 14296)),
        Promise.resolve().then(s.bind(s, 67593)),
        Promise.resolve().then(s.bind(s, 5046));
    },
    8089: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return N;
        },
      });
      var a = s(57437),
        n = s(22170),
        l = s.n(n),
        o = s(2265),
        i = s(93083);
      let r = [
        {
          constant: !0,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "_from", type: "address" },
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "_owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "balance", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { name: "_owner", type: "address" },
            { name: "_spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        { payable: !0, stateMutability: "payable", type: "fallback" },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "owner", type: "address" },
            { indexed: !0, name: "spender", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "from", type: "address" },
            { indexed: !0, name: "to", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
      ];
      var c = s(38923),
        d = s(38566),
        u = s(71581),
        x = s(98959),
        m = s(38446),
        h = s(26755),
        p = s(54422),
        f = s(83556);
      let v = async (e, t, s, a) => {
          try {
            var n, l, o;
            let i = null !== (l = t.originId) && void 0 !== l ? l : t.chainId,
              x =
                null !==
                  (o =
                    null === (n = (0, c.p)(i, t)) || void 0 === n
                      ? void 0
                      : n.address) && void 0 !== o
                  ? o
                  : t.address,
              m = y(a, i),
              { signer: h } = await (0, p.z)(e),
              f = new d.CH(x, r, h),
              v = u.vz(s.toString(), t.decimals);
            return (await f.allowance(h.address, m)) >= v;
          } catch (e) {
            return console.log(e), !1;
          }
        },
        j = async (e, t, s, a) => {
          var n, l, o;
          let { signer: i } = await (0, p.z)(e),
            x = null !== (l = t.originId) && void 0 !== l ? l : t.chainId,
            m =
              null !==
                (o =
                  null === (n = (0, c.p)(x, t)) || void 0 === n
                    ? void 0
                    : n.address) && void 0 !== o
                ? o
                : t.address,
            h = y(a, x),
            v = new d.CH(m, r, i),
            j = u.vz(s.toString(), t.decimals),
            b = await v.approve.estimateGas(h, j);
          return v.approve(h, j, { gasLimit: (0, f.AX)(b) });
        },
        y = (e, t) =>
          e === h.QK.Stake
            ? m.IQ.address
            : e === h.eY.Lock || e === h.eY.Extend
            ? m.Bq.address
            : x.T[t.toString()];
      var b = s(68633),
        w = s(35273),
        g = s(97321),
        k = s(65845);
      function N(e) {
        let {
            type: t,
            token: s,
            value: n,
            isNative: r,
            isTokenApproved: c,
          } = e,
          { walletProvider: d } = (0, w.Z)(),
          { addNotification: u, changeNotificationState: x } = (0, k.Z)(),
          m = (0, o.useMemo)(
            () => "Approve ".concat(null == s ? void 0 : s.symbol),
            [s]
          ),
          [p, f] = (0, o.useState)(!1),
          [y, N] = (0, o.useState)(!1),
          Z = (0, o.useCallback)(
            l()(async (e, t, s, a, n) => {
              let l = !0;
              if (!t) return null;
              s.toLowerCase() === i.i.Withdraw ||
                s.toLowerCase() === i.i.Borrow ||
                s.toLowerCase() === h.QK.UnStake ||
                n ||
                (l = await v(e, t, a || "0", s)),
                f(l),
                c(l);
            }, 150),
            [c, r]
          );
        (0, o.useEffect)(
          () => (d && s && t && Z(d, s, t, n, r), () => Z.cancel()),
          [d, s, t, n, r, Z]
        );
        let S = async () => {
          if (!s) return;
          N(!0);
          let e = -1;
          try {
            e = u((0, b.H)());
            let a = await j(d, s, n, t);
            x(e, "inProgress"),
              await a.wait(),
              x(e, "success"),
              Z(d, s, t, n, r);
          } catch (t) {
            x(e, "error"), console.log(t);
          } finally {
            N(!1);
          }
        };
        return p
          ? null
          : (0, a.jsx)(g.Z, { text: m, isLoading: y, onClick: S });
      }
    },
    14296: function (e, t, s) {
      "use strict";
      s.d(t, {
        SynoPageViewSkeleton: function () {
          return e6;
        },
        default: function () {
          return e3;
        },
      });
      var a = s(57437),
        n = s(2265),
        l = s(5046),
        o = s(6675),
        i = s(46426),
        r = s(67593),
        c = s(28857),
        d = s(49699),
        u = s(26755),
        x = s(37650),
        m = s(95120),
        h = s(94254),
        p = s(38446),
        f = s(35273),
        v = s(36864);
      let j = (0, n.createContext)(void 0),
        y = () => {
          let e = (0, n.useContext)(j);
          if (!e)
            throw Error(
              "useStakeSynoContext must be used within a StakeSynoProvider"
            );
          return e;
        },
        b = (e) => {
          let { children: t } = e,
            {
              userSSynoBalance: s,
              userSynoBalance: l,
              fetchUserStakes: o,
            } = (0, d.Z)(),
            i = (0, n.useMemo)(() => u.I$, []),
            [r, y] = (0, n.useState)(u.QK.Stake),
            b = (0, n.useMemo)(() => {
              var e;
              return null !== (e = i.find((e) => e.id === r)) && void 0 !== e
                ? e
                : i[0];
            }, [i, r]),
            [w, g] = (0, n.useState)(""),
            [k, N] = (0, n.useState)(!1),
            { isConnected: Z } = (0, f.Z)(),
            { all: S } = (0, c.Z)(),
            M = (0, n.useMemo)(() => {
              var e, t;
              return null !==
                (t =
                  null === (e = S.find((e) => e.symbol === x.W.SYNO)) ||
                  void 0 === e
                    ? void 0
                    : e.usdValue) && void 0 !== t
                ? t
                : 0;
            }, [S]),
            C = (0, n.useMemo)(() => (0, m.T)(Number(w) * M), [w, M]),
            [T, L] = (0, n.useState)(""),
            Y = (0, n.useMemo)(
              () => ({
                from: { symbol: b.id === u.QK.Stake ? x.W.SYNO : x.W.sSYNO },
                to: { symbol: b.id === u.QK.Stake ? x.W.sSYNO : x.W.SYNO },
              }),
              [b]
            );
          return (0, a.jsx)(j.Provider, {
            value: {
              selectedAction: r,
              setSelectedAction: y,
              selectedActionConfig: b,
              userSSynoBalance: s,
              userSynoBalance: l,
              fetchUserStakes: o,
              activeToken: Y,
              amount: w,
              dollarValue: C,
              handleAmountChange: (e) => {
                g(e);
                let t = r === u.QK.Stake ? p.IQ : p.jT,
                  a = r === u.QK.Stake ? l : s.balance,
                  n = (0, h.dO)(t, e, Z, a, v.uO);
                L(n.isValid ? "" : n.text), N(n.isValid);
              },
              error: T,
              isFormValid: k,
            },
            children: t,
          });
        };
      var w = s(75800),
        g = s(73399),
        k = s(19132);
      function N(e) {
        let t = (0, n.useMemo)(() => u.I$, []),
          { selectedActionConfig: s, setSelectedAction: l } = y();
        return (0, a.jsxs)("header", {
          className: "flex pt-6 px-6 justify-between items-center",
          children: [
            (0, a.jsx)(g.Z, { text: null == s ? void 0 : s.name }),
            (0, a.jsx)(k.Z, {
              tabs: t,
              size: "sm",
              selectedTab: s.id,
              onTabClick: (e) => {
                l(e);
              },
            }),
          ],
        });
      }
      var Z = s(71581),
        S = s(10200),
        M = s(19621),
        C = s(68633),
        T = s(54422),
        L = s(87726),
        Y = s(97321),
        A = s(59846),
        O = s(60339),
        P = s(22428),
        E = s(65845),
        B = s(41015),
        z = s(15766),
        W = s(25392),
        D = s(46006),
        _ = s(84889);
      function H(e) {
        let { value: t, timestamp: s } = e;
        return (0, a.jsxs)("div", {
          className: "flex justify-between items-center w-full",
          children: [
            (0, a.jsx)(g.Z, { text: (0, _.u)(t) }),
            (0, a.jsx)(L.Z, { size: "sm", text: s }),
          ],
        });
      }
      var U = s(58818);
      function F() {
        let { userSSynoBalance: e } = y(),
          { walletProvider: t } = (0, f.Z)();
        (0, O.E)(v.eG.hubChainId);
        let { addNotification: s, changeNotificationState: l } = (0, E.Z)(),
          { add: o } = (0, P.Z)(),
          i = (0, n.useMemo)(
            () =>
              (0, A.WU)(
                new Date(1e3 * Number(e.unstakeAvailableAt)),
                "MMMM d, yyyy h:mm a"
              ),
            [e.unstakeAvailableAt]
          ),
          r = (0, n.useMemo)(
            () => e.lockedBalance.toString(),
            [e.lockedBalance]
          ),
          c = (0, n.useMemo)(
            () => e.unstakeAvailableAt <= Date.now() / 1e3,
            [e.unstakeAvailableAt]
          ),
          d = (0, n.useMemo)(
            () => (c ? e.lockedBalance.toString() : "0"),
            [c, e.lockedBalance]
          ),
          [m, h] = (0, n.useState)(!1),
          j = async () => {
            let a = -1;
            try {
              h(!0);
              let { signer: n, walletAddress: i } = await (0, T.z)(t),
                r = S.y$.connect(p.IQ.address, n),
                c = {
                  ...(0, T.l)(),
                  type: u.QK.UnStake,
                  token: p.IQ,
                  amount: e.lockedBalance.toString(),
                };
              a = s((0, C.h)(c));
              let d = await r.unstake();
              (c.txHash = d.hash), l(a, "inProgress"), await d.wait(), o(c, i);
            } catch (e) {
              l(a, "error"), console.error("Error performing market action", e);
            } finally {
              h(!1);
            }
          };
        return 0 === e.lockedBalance
          ? null
          : (0, a.jsxs)("div", {
              className: "w-full",
              children: [
                (0, a.jsx)("header", {
                  className: "pb-3 pt-2",
                  children: (0, a.jsx)(g.Z, { text: "Claim" }),
                }),
                (0, a.jsxs)(W.Z, {
                  hasError: !1,
                  label: "Ready to Claim",
                  children: [
                    (0, a.jsxs)(D.Z, {
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex gap-3 mt-2",
                          children: [
                            (0, a.jsx)("div", {
                              className: "min-w-16",
                              children: (0, a.jsx)(g.Z, { text: d }),
                            }),
                            (0, a.jsx)(z.Z, {
                              onClick: j,
                              isDisabled: !c || m,
                              text: "Claim",
                            }),
                          ],
                        }),
                        (0, a.jsxs)(U.Z, {
                          children: [
                            (0, a.jsx)(B.Z, {
                              symbol: x.W.sSYNO,
                              width: 24,
                              height: 24,
                            }),
                            (0, a.jsx)(g.Z, { text: x.W.sSYNO }),
                          ],
                        }),
                      ],
                    }),
                    !c &&
                      (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                          className: "flex flex-col mt-3 gap-3",
                          children: [
                            (0, a.jsx)("span", {
                              className: "relative -left-[8px]",
                              children: (0, a.jsx)(L.Z, {
                                size: "sm",
                                text: "Pending",
                              }),
                            }),
                            (0, a.jsx)(H, { value: r, timestamp: i }),
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            });
      }
      var Q = s(8089),
        V = s(48781);
      function K() {
        let {
            selectedActionConfig: e,
            selectedAction: t,
            amount: s,
            isFormValid: l,
            handleAmountChange: o,
            userSSynoBalance: i,
          } = y(),
          {
            isSwitchingChain: r,
            handleSwitchNetwork: c,
            isProperChain: d,
          } = (0, M.o)(),
          { walletProvider: x, openModal: m, isConnected: h } = (0, f.Z)(),
          { addNotification: v, changeNotificationState: j } = (0, E.Z)(),
          { add: b } = (0, P.Z)(),
          { verifyTermsAndConditions: w } = (0, V.U)(),
          [g, k] = (0, n.useState)(!1),
          [N, A] = (0, n.useState)(!0),
          O = (0, n.useMemo)(
            () =>
              "Note: sSYNO will be available to claim 3 days after unstaking.",
            []
          ),
          B = (0, n.useMemo)(
            () =>
              t === u.QK.UnStake && Number(s) > 0 && i.lockedBalance > 0
                ? "Increasing the unstake amount will reset the cooldown period."
                : "",
            [t, s, i.lockedBalance]
          ),
          z = async () => {
            if (!w()) return;
            let e = -1;
            try {
              let a;
              k(!0);
              let { signer: n, walletAddress: l } = await (0, T.z)(x),
                o = S.y$.connect(p.IQ.address, n),
                i = Z.vz(s, p.jT.decimals),
                r = {
                  ...(0, T.l)(),
                  type: t,
                  token: t === u.QK.Stake ? p.IQ : p.jT,
                  amount: s,
                };
              (e = v((0, C.h)(r))),
                (a =
                  t === u.QK.Stake
                    ? await o.stake(i)
                    : await o.requestUnstake(i)),
                (r.txHash = a.hash),
                j(e, "inProgress"),
                await a.wait(),
                b(r, l);
            } catch (t) {
              j(e, "error"), console.error("Error performing market action", t);
            } finally {
              k(!1), o("");
            }
          },
          W = h
            ? d
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    l &&
                      (0, a.jsx)(Q.Z, {
                        token: p.jT,
                        type: t,
                        value: s,
                        isNative: !1,
                        isTokenApproved: (e) => {
                          A(e);
                        },
                      }),
                    (N || !l) &&
                      (0, a.jsx)(Y.Z, {
                        disabled: !l,
                        isLoading: g,
                        onClick: z,
                        text: e.name,
                      }),
                  ],
                })
              : (0, a.jsx)(Y.Z, {
                  text: "Switch Network",
                  isLoading: r,
                  loadingText: "Switching Network",
                  onClick: c,
                })
            : (0, a.jsx)(Y.Z, { onClick: () => m(), text: "Connect Wallet" });
        return (0, a.jsxs)("footer", {
          className: "relative flex flex-col gap-3 px-6 pb-6",
          children: [
            (0, a.jsx)("div", {
              className: "relative w-full flex h-11",
              children: (0, a.jsx)("div", {
                className: "absolute w-full left-0 top-0 h-11 overflow-hidden",
                children: W,
              }),
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col",
              children: [
                (0, a.jsx)(L.Z, { text: O, color: "yellow" }),
                (0, a.jsx)(L.Z, { text: B }),
              ],
            }),
            e.id === u.QK.UnStake && (0, a.jsx)(F, {}),
          ],
        });
      }
      var I = s(63544),
        q = s(95172),
        R = s(90034),
        G = s(22488),
        $ = s(59339);
      function X(e) {
        let { onSetMax: t } = e,
          { isConnected: s, address: l } = (0, f.Z)(),
          {
            selectedAction: o,
            userSSynoBalance: i,
            userSynoBalance: r,
            fetchUserStakes: c,
          } = y(),
          d = (0, n.useMemo)(
            () => (s ? (o === u.QK.Stake ? r : i.balance) : 0),
            [o, i, r, s]
          ),
          x = (0, n.useCallback)(async () => {
            s &&
              l &&
              (o === u.QK.Stake
                ? c(l, "syno")
                : o === u.QK.UnStake && c(l, "ssyno"));
          }, [o, s, l, c]);
        (0, n.useEffect)(() => {
          x();
        }, [o, x]);
        let m = (0, n.useMemo)(
            () =>
              s
                ? o === u.QK.Stake
                  ? (0, h.fB)(d || 0, v.uO)
                  : o === u.QK.UnStake
                  ? (0, h.fB)(d || 0, v.uO)
                  : 0
                : 0,
            [s, o, d]
          ),
          j = (0, n.useMemo)(() => "Wallet balance:", []);
        return s
          ? (0, a.jsx)($.Z, {
              onSetMax: () => {
                t(m);
              },
              walletBalance: d,
              decimals: p.jT.decimals,
              maxDecimals: v.uO,
              label: j,
              hideMaxButton: !1,
              showPercentageButtons: !1,
            })
          : null;
      }
      function J() {
        let {
            selectedActionConfig: e,
            activeToken: t,
            dollarValue: s,
            amount: l,
            handleAmountChange: o,
            error: i,
          } = y(),
          r = (0, n.useMemo)(() => "You ".concat(e.name.toLowerCase()), [e]);
        return (0, a.jsxs)(W.Z, {
          hasError: !!i,
          label: r,
          children: [
            (0, a.jsxs)(D.Z, {
              children: [
                (0, a.jsx)(I.Z, {
                  type: "text",
                  id: "stake_transaction_amount",
                  placeholder: "0.0",
                  focus: !0,
                  value: l,
                  onChange: (e) => {
                    o(e.target.value);
                  },
                  error: !!i,
                }),
                (0, a.jsxs)(U.Z, {
                  children: [
                    (0, a.jsx)(B.Z, {
                      symbol: t.from.symbol,
                      width: 24,
                      height: 24,
                    }),
                    (0, a.jsx)(g.Z, { size: "lg", text: t.from.symbol }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(q.Z, {
              children: [
                (0, a.jsxs)(R.Z, {
                  children: [
                    (0, a.jsx)(L.Z, { text: s }),
                    (0, a.jsx)(X, {
                      onSetMax: (e) => {
                        o(e.toString());
                      },
                    }),
                  ],
                }),
                (0, a.jsx)(G.Z, { error: i }),
              ],
            }),
          ],
        });
      }
      function ee() {
        let { activeToken: e, dollarValue: t, amount: s } = y(),
          l = (0, n.useMemo)(() => "You receive", []);
        return (0, a.jsxs)(W.Z, {
          hasError: !1,
          label: l,
          children: [
            (0, a.jsxs)(D.Z, {
              children: [
                (0, a.jsx)(g.Z, { text: s.length ? s : "0.0" }),
                (0, a.jsxs)(U.Z, {
                  children: [
                    (0, a.jsx)(B.Z, {
                      symbol: e.to.symbol,
                      width: 24,
                      height: 24,
                    }),
                    (0, a.jsx)(g.Z, { size: "lg", text: e.to.symbol }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(q.Z, {
              children: (0, a.jsx)(R.Z, {
                children: (0, a.jsx)(L.Z, { text: t }),
              }),
            }),
          ],
        });
      }
      function et() {
        return (0, a.jsx)("section", {
          className:
            "flex flex-col pt-4 pb-4 px-6 justify-between items-center",
          children: (0, a.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [(0, a.jsx)(J, {}), (0, a.jsx)(ee, {})],
          }),
        });
      }
      var es = s(35601);
      function ea() {
        let { onlyConent: e } =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { onlyConent: !1 },
          { isConnected: t, openModal: s } = (0, f.Z)(),
          n = (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className:
                "flex flex-col justify-center items-center gap-4 min-h-[360px]",
              children: [
                (0, a.jsx)(es.Z, { type: "syno" }),
                (0, a.jsx)(g.Z, { text: "No open positions yet" }),
                !t &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(L.Z, {
                        size: "lg",
                        color: "light-blue",
                        text: "Connect wallet to see an overview of your portfolio",
                      }),
                      (0, a.jsx)(z.Z, {
                        width: 201,
                        height: 40,
                        fontSize: 16,
                        onClick: () => s(),
                        text: "Connect Wallet",
                      }),
                    ],
                  }),
              ],
            }),
          });
        return e ? n : (0, a.jsx)(w.Z, { children: n });
      }
      function en() {
        let { selectedAction: e, userSSynoBalance: t } = y(),
          { isConnected: s } = (0, f.Z)(),
          l = (0, n.useMemo)(() => "unstake" === e, [e]),
          o = (0, n.useMemo)(() => (!s && l) || (l && !t.balance), [s, l, t]);
        return (0, a.jsxs)(w.Z, {
          className: "w-full max-w-[362px]",
          children: [
            (0, a.jsx)(N, {}),
            o
              ? (0, a.jsx)(ea, { onlyConent: !0 })
              : (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(et, {}), (0, a.jsx)(K, {})],
                }),
          ],
        });
      }
      function el() {
        return (0, a.jsx)("div", {
          className: "flex justify-center items-center my-4 flex-col w-full",
          children: (0, a.jsx)(b, { children: (0, a.jsx)(en, {}) }),
        });
      }
      var eo = s(72559),
        ei = s(62056);
      let er = (0, n.createContext)(void 0),
        ec = () => {
          let e = (0, n.useContext)(er);
          if (!e)
            throw Error(
              "useVlSynoContext must be used within a VlSynoProvider"
            );
          return e;
        },
        ed = (e) => {
          let { children: t } = e,
            { userLocks: s } = (0, d.Z)(),
            { all: l } = (0, eo.Z)(),
            [o, i] = (0, n.useState)(void 0),
            r = (0, n.useMemo)(() => {
              var e, t;
              let s = l.find((e) => e.chainId === v.eG.hubChainId);
              return null !==
                (t = Number(
                  null == s
                    ? void 0
                    : null ===
                        (e = s.balances.find((e) => e.symbol === x.W.ETH)) ||
                      void 0 === e
                    ? void 0
                    : e.balance
                )) && void 0 !== t
                ? t
                : 0;
            }, [l]),
            {
              userBptBalance: j,
              userVlSynoBalance: y,
              userSynoBalance: b,
              fetchUserLocks: w,
            } = (0, d.Z)(),
            g = (0, n.useMemo)(() => u.gm, []),
            [k, N] = (0, n.useState)(u.un.TWELVE_MONTHS),
            [Z, S] = (0, n.useState)(u.eY.Lock),
            M = (0, n.useMemo)(() => {
              var e;
              return null !== (e = g.find((e) => e.id === Z)) && void 0 !== e
                ? e
                : g[0];
            }, [g, Z]),
            [C, T] = (0, n.useState)(u.sT.Single),
            [L, Y] = (0, n.useState)(!1),
            { isConnected: A } = (0, f.Z)(),
            { all: O } = (0, c.Z)(),
            [P, E] = (0, n.useState)(""),
            [B, z] = (0, n.useState)(""),
            W = (0, n.useMemo)(() => (C === u.sT.Single ? p._H : p.jT), [C]),
            D = (0, n.useMemo)(
              () => (C === u.sT.Single ? x.W.vlSYNO : p.jT.symbol),
              [C]
            ),
            _ = (0, n.useMemo)(() => {
              var e, t;
              return null !==
                (t =
                  null ===
                    (e = O.find(
                      (e) => e.symbol.toLowerCase() === D.toLowerCase()
                    )) || void 0 === e
                    ? void 0
                    : e.usdValue) && void 0 !== t
                ? t
                : 0;
            }, [O, D]),
            H = (0, n.useMemo)(() => (0, m.T)(Number(B) * _), [B, _]),
            [U, F] = (0, n.useState)(""),
            Q = (0, n.useMemo)(() => {
              var e, t;
              return null !==
                (t =
                  null === (e = O.find((e) => e.symbol === x.W.WETH)) ||
                  void 0 === e
                    ? void 0
                    : e.usdValue) && void 0 !== t
                ? t
                : 0;
            }, [O]),
            V = (0, n.useMemo)(() => {
              let e = (0, p.HX)().find((e) => e.symbol === x.W.WETH),
                t = (0, ei.F)(e);
              return { ...e, ...t };
            }, []),
            K = (0, n.useMemo)(() => (0, m.T)(Number(U) * Q), [U, Q]),
            I = (e, t) => {
              let s = !1,
                a = "";
              if (C === u.sT.Single) {
                let t = (0, h.dO)(W, e, A, j);
                (s = t.isValid), (a = t.text);
              } else if (C === u.sT.Multiple) {
                let n = (0, h.dO)(W, e, A, b),
                  l = (0, h.dO)(V, t, A, r);
                (s = n.isValid && l.isValid), (a = n.isValid ? l.text : n.text);
              }
              E(s ? "" : a), Y(s);
            };
          return (
            (0, n.useEffect)(() => {
              o
                ? (Z === u.eY.RequestWithdrawal
                    ? z(o.value.toString())
                    : (z(""), F("")),
                  N(o.lockPeriod))
                : (z(""), F(""), N(u.un.TWELVE_MONTHS));
            }, [o, Z]),
            (0, a.jsx)(er.Provider, {
              value: {
                userLocks: s,
                selectedAction: Z,
                setSelectedAction: S,
                selectedActionConfig: M,
                selectedLockInputType: C,
                setSelectedLockInputType: T,
                activeToken: W,
                amount: B,
                dollarValue: H,
                activeToken2: V,
                amount2: U,
                dollarValue2: K,
                error: P,
                isFormValid: L,
                userSynoBalance: b,
                userVlSynoBalance: y,
                userNativeTokenBalance: r,
                userBptBalance: j,
                handleAmountChange: (e) => {
                  z(e), I(e, U);
                },
                handleAmountChange2: (e) => {
                  F(e), I(B, e);
                },
                fetchUserLocks: w,
                lockPeriod: k,
                setLockPeriod: N,
                activeLock: o,
                setActiveLock: i,
              },
              children: t,
            })
          );
        };
      var eu = s(46537),
        ex = s(66490),
        em = s(495),
        eh = s(15947),
        ep = s(67170),
        ef = s(54343),
        ev = s(72258),
        ej = s(83556),
        ey = s(16181),
        eb = s(80644);
      function ew(e) {
        let { item: t, config: s, configKey: l } = e,
          { walletProvider: o } = (0, f.Z)(),
          {
            setSelectedLockInputType: i,
            setActiveLock: r,
            setSelectedAction: c,
          } = ec(),
          {
            isSwitchingChain: d,
            handleSwitchNetwork: x,
            isProperChain: m,
          } = (0, M.o)(),
          h = (e) => s.find((t) => t.component === e),
          [v, j] = (0, n.useState)(!1),
          { addNotification: y, changeNotificationState: b } = (0, E.Z)(),
          { add: w } = (0, P.Z)();
        p.jT;
        let k = (0, n.useMemo)(
            () =>
              (0, _.u)(Number(t.value) * (0, ev.v6)(t.lockPeriod), {
                maxDecimals: 2,
                showZeroApproximation: !0,
                abbreviate: !0,
              }),
            [t.value, t.lockPeriod]
          ),
          N = (0, n.useMemo)(
            () =>
              (0, A.WU)(new Date(1e3 * Number(t.unlocksAt)), "MMMM d, yyyy"),
            [t.unlocksAt]
          ),
          Z = (0, n.useMemo)(
            () => (0, ev.RA)(t.unstakeRequestTimestamp, t.unlocksAt),
            [t.unstakeRequestTimestamp, t.unlocksAt]
          ),
          Y = async (e) => {
            if ("Unlock" === e) {
              let e = -1;
              try {
                j(!0);
                let { signer: s, walletAddress: a } = await (0, T.z)(o),
                  n = S.UA.connect(p.Bq.address, s),
                  l = { ...(0, T.l)(), type: "unlock", token: p._H, amount: k };
                e = y((0, C.h)(l));
                let i = await n.unstake.estimateGas(t.index),
                  r = await n.unstake(t.index, { gasLimit: (0, ej.AX)(i) });
                (l.txHash = r.hash),
                  b(e, "inProgress"),
                  await r.wait(),
                  w(l, a);
              } catch (t) {
                b(e, "error"),
                  console.error("Error performing market action", t);
              } finally {
                j(!1);
              }
            }
            "Unlock" !== e && (r(t), i(u.sT.Single), c(e));
          };
        return (0, a.jsxs)(eb.Z, {
          lastChild: !1,
          isParent: !0,
          active: !1,
          height: "h-[72px]",
          children: [
            h("LockAmountCell") &&
              (0, a.jsx)(ey.Z, {
                width: "124",
                minWidth: "124",
                align: "left",
                spacing: "tight",
                children: (0, a.jsxs)("div", {
                  className: "flex gap-2 items-center justify-center",
                  children: [
                    (0, a.jsx)(B.Z, {
                      symbol: p.Bq.symbol,
                      height: 20,
                      width: 20,
                    }),
                    (0, a.jsx)(g.Z, { text: k }),
                  ],
                }),
              }),
            h("UnlockDateCell") &&
              (0, a.jsx)(ey.Z, {
                width: "124",
                minWidth: "124",
                align: "left",
                spacing: "tight",
                children: (0, a.jsx)(L.Z, { text: N }),
              }),
            h("StatusCell") &&
              (0, a.jsx)(ey.Z, {
                minWidth: "104",
                align: "left",
                spacing: "tight",
                children: (0, a.jsx)(L.Z, { text: Z.label }),
              }),
            h("ActionsCell") &&
              (0, a.jsx)(ey.Z, {
                align: "right",
                children: (0, a.jsxs)("div", {
                  className: "flex gap-2 items-center justify-center",
                  children: [
                    ("Unlock" === Z.status || "Unlocking" === Z.status) &&
                      (m || Z.disabled
                        ? (0, a.jsx)(z.Z, {
                            isDisabled: Z.disabled,
                            isLoading: v,
                            text: "Claim",
                            onClick: () => Y("Unlock"),
                          })
                        : (0, a.jsx)(z.Z, {
                            text: "Switch Network",
                            width: 100,
                            isDisabled: d,
                            onClick: x,
                          })),
                    !("Unlock" === Z.status || "Unlocking" === Z.status) &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          1e3 * Number(t.unlocksAt) < Date.now() &&
                            (0, a.jsx)(z.Z, {
                              text: "Withdraw",
                              onClick: () => Y(u.eY.RequestWithdrawal),
                            }),
                          (0, a.jsx)(z.Z, {
                            iconRight: !0,
                            text:
                              1e3 * Number(t.unlocksAt) < Date.now()
                                ? "Extend"
                                : "Manage",
                            onClick: () => Y(u.eY.Extend),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
          ],
        });
      }
      function eg() {
        let e = em.tU,
          [t, s] = (0, n.useState)(e.defaultSortKey),
          [l, o] = (0, n.useState)("asc"),
          { userLocks: i } = ec(),
          r = (0, n.useMemo)(
            () => (t && "none" !== l ? ek(i, t, l) : i),
            [i, t, l]
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(ep.Z, {
              overflow: "auto",
              children: (0, a.jsx)(eh.Z, {
                onClick: (e) => {
                  if (e.key === t)
                    "none" === l
                      ? o("asc")
                      : "asc" === l
                      ? o("desc")
                      : o("asc");
                  else {
                    var a;
                    s(
                      null !== (a = null == e ? void 0 : e.key) && void 0 !== a
                        ? a
                        : null
                    ),
                      o("desc");
                  }
                },
                sortKey: t,
                sortDirection: l,
                configKey: e.key,
                config: e.header,
              }),
            }),
            (0, a.jsx)("div", {
              className: "w-full max-h-[480px] overflow-y-auto",
              children: (0, a.jsx)(ep.Z, {
                overflow: "auto",
                children: (0, a.jsx)(ef.Z, {
                  children: r.map((t, s) => {
                    var n;
                    return (0, a.jsx)(
                      ew,
                      { item: t, config: e.body, configKey: e.key },
                      (null !== (n = e.key) && void 0 !== n ? n : "") +
                        "-" +
                        t.index +
                        "-" +
                        s
                    );
                  }),
                }),
              }),
            }),
          ],
        });
      }
      let ek = (e, t, s) => {
        let a = [...e];
        switch (t) {
          case "lock-amount":
            a.sort((e, t) =>
              e.value > t.value
                ? "asc" === s
                  ? 1
                  : -1
                : e.value < t.value
                ? "asc" === s
                  ? -1
                  : 1
                : 0
            );
            break;
          case "unlock-date":
            a.sort((e, t) =>
              e.unlocksAt > t.unlocksAt
                ? "asc" === s
                  ? 1
                  : -1
                : e.unlocksAt < t.unlocksAt
                ? "asc" === s
                  ? -1
                  : 1
                : 0
            );
        }
        return a;
      };
      function eN() {
        let { userLocks: e } = ec(),
          { isConnected: t } = (0, f.Z)();
        return e.length && t
          ? (0, a.jsxs)(ex.Z, {
              children: [
                (0, a.jsx)(eu.Z, { text: "My Locks" }),
                (0, a.jsx)(eg, {}),
              ],
            })
          : (0, a.jsx)(ea, {});
      }
      var eZ = s(58064);
      function eS(e) {
        let {
            selectedActionConfig: t,
            selectedAction: s,
            setSelectedAction: l,
            setActiveLock: o,
          } = ec(),
          i = (0, n.useMemo)(() => s !== u.eY.Lock, [s]);
        return (0, a.jsxs)("header", {
          className: "flex pt-3 px-3 justify-between items-center",
          children: [
            (0, a.jsx)(g.Z, { text: null == t ? void 0 : t.name, size: "lg" }),
            i &&
              (0, a.jsx)(eZ.Z, {
                text: "Back",
                size: "md",
                onClick: () => {
                  o(void 0), l(u.eY.Lock);
                },
              }),
          ],
        });
      }
      var eM = s(78336),
        eC = s(66648),
        eT = s(71292),
        eL = s(53078),
        eY = s(87138);
      function eA() {
        let {
            userBptBalance: e,
            selectedLockInputType: t,
            lockPeriod: s,
            activeToken: l,
            activeLock: o,
            selectedAction: i,
            amount: r,
            amount2: c,
            isFormValid: d,
            handleAmountChange2: x,
            handleAmountChange: m,
          } = ec(),
          {
            isSwitchingChain: h,
            handleSwitchNetwork: j,
            isProperChain: y,
          } = (0, M.o)(),
          { addNotification: b, changeNotificationState: w } = (0, E.Z)(),
          { walletProvider: g, openModal: k, isConnected: N } = (0, f.Z)(),
          { add: A } = (0, P.Z)(),
          { verifyTermsAndConditions: O } = (0, V.U)(),
          B = (0, n.useMemo)(() => t === u.sT.Multiple, [t]),
          [z, W] = (0, n.useState)(!1),
          [D, _] = (0, n.useState)(!0),
          H = (0, n.useMemo)(
            () => N && i === u.eY.Lock && !Number(e),
            [i, e, N]
          ),
          U = (0, n.useMemo)(
            () =>
              "To obtain vlSYNO and earn boosted yield, lock SYNO:ETH BPT for the lock period specified. Longer locks are rewarded with higher boost rates. A locked position cannot be unlocked until the end of the lock period.",
            []
          ),
          F = (0, n.useMemo)(
            () => "For more information, please refer to our",
            []
          ),
          K = (0, n.useMemo)(() => eM.bz[eM.T3.Documentation].href, []),
          I = (0, n.useMemo)(() => v.eG.balancerPoolUrl, []),
          q = (0, n.useMemo)(
            () => !B && i === u.eY.Extend && ("0" === r || "" === r),
            [i, r, B]
          ),
          R = (0, n.useMemo)(
            () => (i === u.eY.Lock ? "Lock" : q ? "Relock" : "Extend"),
            [i, q]
          ),
          G = async () => {
            if (!O()) return;
            let e = -1;
            try {
              let a;
              W(!0);
              let { signer: n, walletAddress: d } = await (0, T.z)(g),
                x = S.UA.connect(p.Bq.address, n),
                m = r ? Z.vz(r, l.decimals) : BigInt(0),
                h = c ? Z.fi(c) : BigInt(0),
                f = {
                  ...(0, T.l)(),
                  type: q ? "relock" : i,
                  token: l,
                  amount: r,
                };
              if (((e = b((0, C.h)(f))), i === u.eY.Lock)) {
                if (t === u.sT.Single) {
                  let e = await x["stake(uint256,uint8)"].estimateGas(m, s);
                  a = await x["stake(uint256,uint8)"](m, s, {
                    gasLimit: (0, ej.AX)(e),
                  });
                } else
                  a = await x["zapAndStake(uint256,uint8)"](m, s, { value: h });
              } else
                a =
                  t === u.sT.Single
                    ? await x["restake(uint256,uint8,uint256)"](
                        null == o ? void 0 : o.index,
                        s,
                        m
                      )
                    : await x.zapAndRestake(
                        m,
                        null == o ? void 0 : o.index,
                        s,
                        { value: h }
                      );
              (f.txHash = a.hash),
                w(e, "inProgress"),
                await a.wait(),
                setTimeout(() => A(f, d), 3e3);
            } catch (t) {
              w(e, "error"), console.error("Error performing market action", t);
            } finally {
              W(!1), m(""), x("");
            }
          },
          $ = N
            ? H
              ? (0, a.jsx)(eY.default, {
                  href: I,
                  target: "_blank",
                  children: (0, a.jsx)(Y.Z, {
                    isLoading: z,
                    onClick: () => {},
                    text: "",
                    template: (0, a.jsxs)("div", {
                      className:
                        "flex leading-none gap-1 items-center justify-center relative top-[1px]",
                      children: [
                        (0, a.jsx)("span", {
                          children: "Get ".concat(p._H.symbol, " on "),
                        }),
                        (0, a.jsx)(eC.default, {
                          src: "/logo/balancer.svg",
                          width: 80,
                          height: 20,
                          alt: "Balancer logo",
                        }),
                        (0, a.jsx)(eL.Z, {
                          type: "link-external",
                          className: "w-3 relative -top-[1px]",
                        }),
                      ],
                    }),
                  }),
                })
              : y
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    d &&
                      (0, a.jsx)(Q.Z, {
                        token: l,
                        type: i,
                        value: r,
                        isNative: !1,
                        isTokenApproved: (e) => {
                          _(e);
                        },
                      }),
                    (D || !d) &&
                      (0, a.jsx)(Y.Z, {
                        isLoading: z,
                        disabled: !d && !q,
                        onClick: G,
                        text: R,
                      }),
                  ],
                })
              : (0, a.jsx)(Y.Z, {
                  text: "Switch Network",
                  isLoading: h,
                  loadingText: "Switching Network",
                  onClick: j,
                })
            : (0, a.jsx)(Y.Z, { onClick: () => k(), text: "Connect Wallet" });
        return (0, a.jsxs)("footer", {
          className: "relative flex flex-col gap-3 px-2 pb-2",
          children: [
            (0, a.jsx)("div", {
              className: "relative w-full flex h-11",
              children: (0, a.jsx)("div", {
                className:
                  "absolute z-10 w-full left-0 top-0 h-11 overflow-hidden",
                children: $,
              }),
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col",
              children: [
                (0, a.jsx)(L.Z, { text: U, wrap: !0, size: "sm" }),
                (0, a.jsxs)("div", {
                  className: "inline-flex gap-1 mt-4",
                  children: [
                    (0, a.jsx)(L.Z, { text: F, wrap: !0, size: "sm" }),
                    (0, a.jsx)(eT.Z, { text: "Documentation", href: K }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var eO = s(94485);
      function eP(e) {
        let { onSetMax: t } = e,
          { isConnected: s, address: l } = (0, f.Z)(),
          {
            selectedAction: o,
            activeToken: i,
            selectedLockInputType: r,
            userSynoBalance: c,
            userBptBalance: d,
            fetchUserLocks: x,
          } = ec(),
          m = (0, n.useMemo)(
            () => (s ? (r === u.sT.Multiple ? c : d) : 0),
            [s, r, c, d]
          ),
          p = (0, n.useCallback)(async () => {
            s &&
              l &&
              (r === u.sT.Multiple && x(l, "syno"),
              o === u.eY.Lock ? x(l, "bpt") : x(l, "vlsyno"));
          }, [o, s, l, r, x]);
        (0, n.useEffect)(() => {
          p();
        }, [o, p]);
        let v = (0, n.useMemo)(
          () => (s ? (0, h.fB)(m || 0, i.decimals) : 0),
          [s, i, m]
        );
        return (0, a.jsx)($.Z, {
          walletBalance: v,
          decimals: i.decimals,
          onSetMax: () => t(v),
        });
      }
      function eE() {
        let {
            userNativeTokenBalance: e,
            activeToken2: t,
            dollarValue2: s,
            amount2: n,
            handleAmountChange2: l,
            error: o,
          } = ec(),
          i = (e) => {
            l(e.toString());
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(D.Z, {
              children: [
                (0, a.jsx)(I.Z, {
                  type: "text",
                  id: "vlsyno_transaction_amount",
                  placeholder: "0.0",
                  focus: !0,
                  value: n,
                  onChange: (e) => {
                    l(e.target.value);
                  },
                  error: !!o,
                }),
                (0, a.jsxs)(U.Z, {
                  children: [
                    (0, a.jsx)(B.Z, {
                      symbol: t.symbol,
                      width: 24,
                      height: 24,
                    }),
                    (0, a.jsx)(g.Z, { size: "lg", text: t.symbol }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(q.Z, {
              children: [
                (0, a.jsxs)(R.Z, {
                  children: [
                    (0, a.jsx)(L.Z, { text: s }),
                    (0, a.jsx)($.Z, {
                      walletBalance: e,
                      decimals: t.decimals,
                      onSetMax: () => i(e),
                    }),
                  ],
                }),
                (0, a.jsx)(G.Z, { error: o }),
              ],
            }),
          ],
        });
      }
      function eB() {
        let {
            selectedAction: e,
            setSelectedLockInputType: t,
            selectedLockInputType: s,
            activeToken: l,
            dollarValue: o,
            amount: i,
            handleAmountChange: r,
            error: c,
          } = ec(),
          d = (0, n.useMemo)(() => s === u.sT.Multiple, [s]),
          x = (0, n.useMemo)(
            () => (e === u.eY.Extend ? "Step Two" : "Step One"),
            [e]
          ),
          m = (0, n.useMemo)(
            () => (e === u.eY.Lock ? "Enter Amount:" : "Add to Lock:"),
            [e]
          ),
          h = (0, n.useMemo)(
            () => (s === u.sT.Multiple ? p._H.symbol : p.jT.symbol),
            [s]
          );
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(W.Z, {
            hasError: !!c,
            subLabel: x,
            label: m,
            children: [
              (0, a.jsx)("div", {
                className: "relative h-4 bottom-5 -right-1",
                children: (0, a.jsx)(eO.Z, {
                  label: "Switch to",
                  text: h,
                  toggle: () => {
                    s === u.sT.Multiple ? t(u.sT.Single) : t(u.sT.Multiple);
                  },
                }),
              }),
              (0, a.jsxs)(D.Z, {
                children: [
                  (0, a.jsx)(I.Z, {
                    type: "text",
                    id: "vlsyno_transaction_amount",
                    placeholder: "0.0",
                    focus: !0,
                    value: i,
                    onChange: (e) => {
                      r(e.target.value);
                    },
                    error: !!c,
                  }),
                  (0, a.jsxs)(U.Z, {
                    children: [
                      d &&
                        (0, a.jsx)(B.Z, {
                          symbol: l.symbol,
                          width: 24,
                          height: 24,
                        }),
                      (0, a.jsx)(g.Z, { size: "lg", text: l.symbol }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(q.Z, {
                children: [
                  (0, a.jsxs)(R.Z, {
                    children: [
                      (0, a.jsx)(L.Z, { text: o }),
                      (0, a.jsx)(eP, {
                        onSetMax: (e) => {
                          r(e.toString());
                        },
                      }),
                    ],
                  }),
                  !d && (0, a.jsx)(G.Z, { error: c }),
                ],
              }),
              d && (0, a.jsx)(eE, {}),
            ],
          }),
        });
      }
      var ez = s(57233);
      function eW() {
        let {
            selectedAction: e,
            activeLock: t,
            lockPeriod: s,
            setLockPeriod: l,
          } = ec(),
          o = (0, n.useMemo)(() => e === u.eY.Extend, [e]),
          i = (0, n.useMemo)(() => (null == t ? void 0 : t.unlocksAt), [t]),
          r = (0, n.useMemo)(() => {
            let e = (0, u.Kv)();
            return o && i
              ? e.map((e) => ({
                  ...e,
                  isDisabled: Number(1e3 * i) > e.timestamp,
                }))
              : e.map((e) => ({ ...e, isDisabled: !1 }));
          }, [o, i]),
          c = (0, n.useCallback)(
            (e) => {
              l(e);
            },
            [l]
          ),
          d = (0, n.useMemo)(
            () => (e === u.eY.Extend ? "Step One" : "Step Two (Optional)"),
            [e]
          ),
          x = (0, n.useMemo)(
            () =>
              e === u.eY.Extend
                ? "Choose Lock Duration:"
                : "Choose Lock Extension Length:",
            [e]
          );
        return (0, a.jsx)(W.Z, {
          hasError: !1,
          subLabel: d,
          label: x,
          children: (0, a.jsx)(ez.Z, {
            options: r,
            onValueChange: c,
            modelValue: s,
          }),
        });
      }
      var eD = s(22170),
        e_ = s.n(eD),
        eH = s(89755);
      function eU() {
        let {
            selectedAction: e,
            activeLock: t,
            lockPeriod: s,
            selectedLockInputType: l,
            activeToken: o,
            amount: i,
            amount2: r,
            activeToken2: c,
          } = ec(),
          d = (0, n.useMemo)(
            () =>
              e === u.eY.Lock ? "Creating new lock of" : "Extending lock of",
            [e]
          ),
          [x, m] = (0, n.useState)("0"),
          h = (0, n.useMemo)(
            () =>
              e === u.eY.Extend
                ? l === u.sT.Single
                  ? Number(null == t ? void 0 : t.value) + Number(i)
                  : Number(null == t ? void 0 : t.value) + Number(x)
                : l === u.sT.Single
                ? i
                : Number(x),
            [e, l, i, t, x]
          ),
          f = (0, n.useMemo)(() => Number(h) * (0, ev.v6)(s), [h, s]),
          v = (0, n.useMemo)(
            () =>
              ""
                .concat((0, _.u)(h, { maxDecimals: 2 }), " ")
                .concat(p._H.symbol, " (")
                .concat((0, _.u)(f, { maxDecimals: 2 }), " ")
                .concat(p.Bq.symbol, ")"),
            [h, f]
          ),
          j = (0, n.useMemo)(() => "".concat((0, ev.Rr)(s), " months."), [s]),
          y = (0, n.useCallback)(
            e_()(async (e, t) => {
              m(await (0, ev.r5)(e, t));
            }, 300),
            []
          );
        return (
          (0, n.useEffect)(
            () => (
              l === u.sT.Multiple &&
                (Number(i) > 0 || Number(r) > 0) &&
                y(r, i),
              () => {
                y.cancel();
              }
            ),
            [i, l, r, y]
          ),
          (0, a.jsx)(eH.Z, { subText: d, valueText: v, lockPeriodText: j })
        );
      }
      function eF() {
        let { selectedAction: e } = ec(),
          t = (0, n.useMemo)(() => e === u.eY.Extend, [e]),
          s = (0, n.useMemo)(
            () =>
              t
                ? "flex flex-col-reverse gap-3 w-full"
                : "flex flex-col gap-3 w-full",
            [t]
          );
        return (0, a.jsxs)("section", {
          className:
            "flex flex-col pt-1 pb-2 px-2 justify-between items-center",
          children: [
            (0, a.jsxs)("div", {
              className: s,
              children: [(0, a.jsx)(eB, {}), (0, a.jsx)(eW, {})],
            }),
            (0, a.jsx)(eU, {}),
          ],
        });
      }
      function eQ() {
        let { walletProvider: e, openModal: t, isConnected: s } = (0, f.Z)(),
          { addNotification: l, changeNotificationState: o } = (0, E.Z)(),
          {
            isSwitchingChain: i,
            handleSwitchNetwork: r,
            isProperChain: c,
          } = (0, M.o)(),
          [d, x] = (0, n.useState)(!1),
          { add: m } = (0, P.Z)(),
          {
            setActiveLock: h,
            setSelectedAction: v,
            activeToken: j,
            activeLock: y,
            selectedAction: b,
            dollarValue: w,
            amount: k,
            error: N,
          } = ec(),
          Z = (0, n.useMemo)(
            () =>
              (0, A.WU)(new Date(Date.now() + 2592e5), "MMMM d, yyyy h:mm a"),
            [2592e5]
          ),
          O = async () => {
            let t = -1;
            try {
              x(!0);
              let { signer: s, walletAddress: a } = await (0, T.z)(e),
                n = S.UA.connect(p.Bq.address, s),
                i = { ...(0, T.l)(), type: b, token: j, amount: k };
              t = l((0, C.h)(i));
              let r = await n.requestUnstake(null == y ? void 0 : y.index);
              (i.txHash = r.hash),
                o(t, "inProgress"),
                await r.wait(),
                setTimeout(() => m(i, a), 3e3),
                h(void 0),
                v(u.eY.Lock);
            } catch (e) {
              o(t, "error"), console.error("Error performing market action", e);
            } finally {
              x(!1);
            }
          },
          z = s
            ? c
              ? (0, a.jsx)(Y.Z, {
                  isLoading: d,
                  disabled: !1,
                  onClick: O,
                  text: "Withdraw",
                })
              : (0, a.jsx)(Y.Z, {
                  text: "Switch Network",
                  isLoading: i,
                  loadingText: "Switching Network",
                  onClick: r,
                })
            : (0, a.jsx)(Y.Z, { onClick: () => t(), text: "Connect Wallet" });
        return (0, a.jsxs)(ex.Z, {
          children: [
            (0, a.jsx)(eS, {}),
            (0, a.jsx)("div", {
              className: "px-2",
              children: (0, a.jsxs)(W.Z, {
                hasError: !!N,
                children: [
                  (0, a.jsx)("div", {
                    className: "w-full text-center relative -top-3",
                    children: (0, a.jsx)(L.Z, {
                      text: "Confirm Lock to Withdraw:",
                      weight: "semibold",
                    }),
                  }),
                  (0, a.jsxs)(D.Z, {
                    children: [
                      (0, a.jsx)(g.Z, { text: k }),
                      (0, a.jsxs)(U.Z, {
                        children: [
                          (0, a.jsx)(B.Z, {
                            symbol: j.symbol,
                            width: 24,
                            height: 24,
                          }),
                          (0, a.jsx)(g.Z, { size: "lg", text: j.symbol }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(q.Z, {
                    children: (0, a.jsx)(R.Z, {
                      children: (0, a.jsx)(L.Z, { text: w }),
                    }),
                  }),
                  (0, a.jsx)("div", { className: "w-full h-2" }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: "w-full text-center mt-2",
              children: (0, a.jsx)(L.Z, {
                text: "Note: vlSYNO will be available to claim 3 days after withdrawing.",
                color: "yellow",
              }),
            }),
            (0, a.jsxs)("section", {
              className:
                "w-full flex flex-col justify-center items-center mt-2",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex gap-1 items-center justify-center",
                  children: [
                    (0, a.jsx)(L.Z, { text: "Requesting Withdraw of" }),
                    (0, a.jsx)(g.Z, {
                      text: "".concat(k, " ").concat(p._H.symbol),
                      size: "sm",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex gap-1 items-center justify-center",
                  children: [
                    (0, a.jsx)(L.Z, { text: "Claimable On:" }),
                    (0, a.jsx)(L.Z, { color: "light-blue", text: Z }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("footer", {
              className: "relative flex flex-col gap-3 px-2 py-2",
              children: z,
            }),
          ],
        });
      }
      function eV() {
        let { selectedAction: e } = ec();
        return (0, n.useMemo)(() => e === u.eY.RequestWithdrawal, [e])
          ? (0, a.jsx)(eQ, {})
          : (0, a.jsxs)(ex.Z, {
              children: [
                (0, a.jsx)(eS, {}),
                (0, a.jsx)(eF, {}),
                (0, a.jsx)(eA, {}),
              ],
            });
      }
      function eK() {
        return (0, a.jsx)(ed, {
          children: (0, a.jsxs)("div", {
            className:
              "flex flex-col-reverse xl:grid xl:grid-cols-5 gap-4 my-4",
            children: [
              (0, a.jsx)("div", {
                className: "xl:col-span-3",
                children: (0, a.jsx)(eN, {}),
              }),
              (0, a.jsx)("div", {
                className: "xl:col-span-2",
                children: (0, a.jsx)(eV, {}),
              }),
            ],
          }),
        });
      }
      var eI = s(60394),
        eq = s(99399),
        eR = s(45292),
        eG = s(28109),
        e$ = s(35202);
      function eX() {
        let { userLocks: e, userSSynoBalance: t } = (0, d.Z)(),
          { all: s } = (0, c.Z)(),
          { incentives: o } = (0, eG.Z)(),
          [i, r] = (0, n.useState)({
            vlSyno: { totalAmount: 0, totalPower: 0, avgMultiplier: 0 },
            sSyno: { totalAmount: 0 },
          }),
          [u, h] = (0, n.useState)(!1),
          { activeTab: f } = (0, l.o)(),
          v = (0, n.useMemo)(() => "flex justify-center gap-6 ", []),
          j = (0, n.useMemo)(
            () =>
              e
                .filter((e) => e.unlocksAt > Date.now() / 1e3)
                .reduce((e, t) => e + Number(t.value), 0),
            [e]
          ),
          y = (0, n.useMemo)(() => {
            var e;
            return (
              (null ===
                (e = s.find(
                  (e) => e.symbol.toLowerCase() === x.W.vlSYNO.toLowerCase()
                )) || void 0 === e
                ? void 0
                : e.usdValue) || 0
            );
          }, [s]),
          b = (0, n.useMemo)(
            () =>
              e.filter((e) => Number(e.unlocksAt) > Date.now() / 1e3).length
                ? e
                    .filter((e) => Number(e.unlocksAt) > Date.now() / 1e3)
                    .reduce(
                      (e, t) => e + (0, ev.v6)(t.lockPeriod) * Number(t.value),
                      0
                    ) / j
                : 0,
            [e, j]
          ),
          w = (0, n.useMemo)(
            () => (j > 0 ? (0, _.u)(b * j, { abbreviate: !0 }) : "-- --"),
            [b, j]
          ),
          g = (0, n.useMemo)(
            () => (j > 0 ? (0, m.T)(j * y, !0) : "$ -- --"),
            [j, y]
          ),
          k = (0, n.useMemo)(
            () =>
              i.vlSyno.totalAmount
                ? (0, m.T)(i.vlSyno.totalAmount * y, !0)
                : "$ -- --",
            [y, i.vlSyno.totalAmount]
          ),
          N = (0, n.useMemo)(() => {
            var e;
            return (
              (null ===
                (e = s.find(
                  (e) => e.symbol.toLowerCase() === x.W.SYNO.toLowerCase()
                )) || void 0 === e
                ? void 0
                : e.usdValue) || 0
            );
          }, [s]),
          Z = (0, n.useMemo)(
            () =>
              i.sSyno.totalAmount
                ? (0, m.T)(i.sSyno.totalAmount * N, !0)
                : "$ -- --",
            [N, i]
          ),
          S = (0, n.useMemo)(
            () =>
              i.sSyno.totalAmount
                ? "".concat((0, _.u)(i.sSyno.totalAmount, { abbreviate: !0 }))
                : "",
            [i]
          ),
          M = (0, n.useMemo)(
            () => (t.balance ? (0, m.T)(t.balance * N, !0) : "$ -- --"),
            [t, N]
          ),
          C = (0, n.useMemo)(
            () =>
              t.balance
                ? "".concat((0, _.u)(t.balance, { abbreviate: !0 }))
                : "",
            [t]
          ),
          T = (0, n.useCallback)(async () => r(await (0, ev.dr)()), [r]),
          L = (0, n.useMemo)(() => {
            let e = o.find(
              (e) => e.address.toLowerCase() === p.IQ.address.toLowerCase()
            );
            if (!e || !i.sSyno.totalAmount) return "-- -- %";
            let t = ((0, e$.CD)(e, s) / (i.sSyno.totalAmount * N)) * 100;
            return (0, _.u)(t, { maxDecimals: 2 }) + "%";
          }, [o, i, N, s]),
          Y = (0, n.useMemo)(() => {
            let e = o.find(
              (e) => e.address.toLowerCase() === p.Bq.address.toLowerCase()
            );
            if (!e || !i.sSyno.totalAmount) return "-- -- %";
            let t =
              ((0, e$.CD)(e, s) /
                ((i.vlSyno.totalPower / i.vlSyno.avgMultiplier) * y)) *
              100;
            return (0, _.u)(t, { maxDecimals: 2 }) + "%";
          }, [o, i, y, s]);
        return (
          (0, n.useEffect)(() => {
            T();
          }, [T]),
          (0, a.jsxs)("div", {
            className:
              "border-t border-b border-border-color w-full max-w-[756px]",
            children: [
              "sSYNO" === f &&
                (0, a.jsxs)("div", {
                  className: v,
                  children: [
                    (0, a.jsx)(eq.Z, {
                      border: !1,
                      className: "py-4",
                      children: (0, a.jsx)(eR.Z, {
                        header: "Total SYNO Staked",
                        body: Z,
                        bodyLoading: u,
                        popoverContent: "params-update-time",
                        hasPopover: !0,
                        footer: S,
                      }),
                    }),
                    (0, a.jsx)(eq.Z, {
                      border: !0,
                      className: "py-4",
                      children: (0, a.jsx)(eR.Z, {
                        header: "sSYNO APY",
                        body: L,
                        popoverContent: "params-update-time",
                        hasPopover: !0,
                        bodyLoading: u,
                      }),
                    }),
                    (0, a.jsx)(eq.Z, {
                      border: !0,
                      className: "py-4",
                      children: (0, a.jsx)(eR.Z, {
                        header: "Your sSYNO",
                        body: M,
                        bodyLoading: u,
                        footer: C,
                      }),
                    }),
                  ],
                }),
              "vlSYNO" === f &&
                (0, a.jsxs)("div", {
                  className: v,
                  children: [
                    (0, a.jsx)(eq.Z, {
                      border: !1,
                      className: "py-4",
                      children: (0, a.jsx)(eR.Z, {
                        header: "Total vlSYNO Liquidity",
                        wrapHeader: !0,
                        body: k,
                        popoverContent: "params-update-time",
                        hasPopover: !0,
                        bodyLoading: u,
                      }),
                    }),
                    (0, a.jsx)(eq.Z, {
                      border: !0,
                      className: "py-4",
                      children: (0, a.jsx)(eR.Z, {
                        header: "vlSYNO APY",
                        wrapHeader: !0,
                        popoverContent: "vlsyno-apy",
                        hasPopover: !0,
                        body: Y,
                        bodyLoading: u,
                      }),
                    }),
                    (0, a.jsx)(eq.Z, {
                      border: !0,
                      className: "py-4",
                      children: (0, a.jsx)(eR.Z, {
                        header: "Your vlSYNO",
                        wrapHeader: !0,
                        body: g,
                        footer: w,
                        bodyLoading: u,
                      }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var eJ = s(57818),
        e0 = s(67107);
      function e1(e) {
        let { activeTab: t } = e,
          s = (0, n.useMemo)(
            () =>
              "ssyno" === t.toLowerCase()
                ? v.eG.balancerSynoSwap
                : v.eG.balancerPoolUrl,
            [t]
          ),
          l = (0, n.useMemo)(
            () =>
              "ssyno" === t.toLowerCase() ? "Get SYNO" : "Get SYNO:ETH BPT",
            [t]
          );
        return (0, a.jsxs)(eY.default, {
          href: s,
          target: "_blank",
          className:
            "flex gap-0.5 justify-center items-center opacity-80 hover:opacity-100 hover:underline transition relative -top-1",
          children: [
            (0, a.jsx)(g.Z, { text: l, color: "yellow", size: "sm" }),
            (0, a.jsxs)("svg", {
              className: "mb-[3px]",
              width: "10",
              height: "11",
              viewBox: "0 0 10 11",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsxs)("g", {
                  clipPath: "url(#clip0_40848_1300)",
                  children: [
                    (0, a.jsx)("path", {
                      d: "M7.5 6.27604V8.77604C7.5 8.99706 7.4122 9.20902 7.25592 9.3653C7.09964 9.52158 6.88768 9.60937 6.66667 9.60937H2.08333C1.86232 9.60937 1.65036 9.52158 1.49408 9.3653C1.3378 9.20902 1.25 8.99706 1.25 8.77604V4.19271C1.25 3.97169 1.3378 3.75973 1.49408 3.60345C1.65036 3.44717 1.86232 3.35938 2.08333 3.35938H4.58333",
                      stroke: "#FFDE8C",
                      strokeWidth: "1.25",
                      strokeLinecap: "square",
                    }),
                    (0, a.jsx)("path", {
                      d: "M6.25 2.10938H8.75V4.60937",
                      stroke: "#FFDE8C",
                      strokeWidth: "1.25",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    (0, a.jsx)("path", {
                      d: "M4.16602 6.69271L8.74935 2.10938",
                      stroke: "#FFDE8C",
                      strokeWidth: "1.25",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
                (0, a.jsx)("defs", {
                  children: (0, a.jsx)("clipPath", {
                    id: "clip0_40848_1300",
                    children: (0, a.jsx)("rect", {
                      width: "10",
                      height: "10",
                      fill: "white",
                      transform: "translate(0 0.859375)",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function e2(e) {
        let {} = e,
          t = (0, n.useMemo)(
            () => eM.gh[eM.T3.Portfolio] + "?activeTab=rewards",
            []
          ),
          s = (0, n.useMemo)(() => "Go to Rewards", []);
        return (0, a.jsxs)(eY.default, {
          href: t,
          className:
            "flex gap-0.5 justify-center items-center opacity-80 hover:opacity-100 hover:underline transition relative -top-1",
          children: [
            (0, a.jsx)(g.Z, { text: s, color: "light-blue", size: "sm" }),
            (0, a.jsx)("svg", {
              className: "relative -top-[1px]",
              width: "11",
              height: "10",
              viewBox: "0 0 11 10",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                d: "M4.25 7.5L6.75 5L4.25 2.5",
                stroke: "#8EBFDB",
                strokeWidth: "1.25",
                strokeLinecap: "round",
              }),
            }),
          ],
        });
      }
      let e5 = (0, eJ.default)(() => s.e(595).then(s.bind(s, 7722)), {
        loadableGenerated: { webpack: () => [7722] },
      });
      function e3() {
        let { setActiveTab: e, activeTab: t } = (0, l.o)(),
          [s, c] = (0, n.useState)(!1),
          d = (0, n.useMemo)(
            () =>
              "sSYNO" === t
                ? "Stake SYNO for sSYNO to receive a share of Protocol Revenue and Rewards"
                : "Lock SYNO into vlSYNO to receive a larger share of Protocol Revenue and Rewards.",
            [t]
          ),
          u = (0, n.useMemo)(() => ("sSYNO" === t ? p.IQ : p.Bq), [t]),
          x = (0, n.useMemo)(
            () =>
              "sSYNO" === t
                ? eM.bz[eM.T3.LearnMoreSSYNO].href
                : eM.bz[eM.T3.LearnMoreVlSYNO].href,
            [t]
          );
        return ((0, n.useEffect)(() => {
          c(!0);
        }, []),
        s)
          ? (0, a.jsxs)(r.default, {
              type: "page",
              children: [
                (0, a.jsxs)("header", {
                  className:
                    "flex my-4 xl:my-0 flex-col gap-4 items-center justify-center w-full",
                  children: [
                    (0, a.jsx)(o.Z, { title: "SYNO" }),
                    (0, a.jsxs)(eI.Z, {
                      children: [
                        (0, a.jsx)(i.Z, {
                          isActive: "sSYNO" === t,
                          onClick: () => e("sSYNO"),
                          text: "Stake for sSYNO",
                        }),
                        (0, a.jsx)(i.Z, {
                          isActive: "vlSYNO" === t,
                          onClick: () => e("vlSYNO"),
                          text: "Lock for vlSYNO",
                        }),
                      ],
                    }),
                    (0, a.jsx)(e0.Z, {
                      fromToken: p.jT.symbol,
                      toToken: u.symbol,
                    }),
                    (0, a.jsx)(L.Z, { text: d, color: "light-blue", wrap: !0 }),

                    (0, a.jsx)(eX, {}),
                  ],
                }),
                "sSYNO" === t && (0, a.jsx)(el, {}),
                "vlSYNO" === t && (0, a.jsx)(eK, {}),
                (0, a.jsx)(e5, {}),
              ],
            })
          : (0, a.jsx)(e6, {});
      }
      function e6() {
        return (0, a.jsx)(r.default, {
          type: "page",
          children: (0, a.jsxs)("div", {
            className: "flex flex-col gap-3 my-6 opacity-40",
            children: [
              (0, a.jsx)("div", {
                className: "flex justify-center gap-4 opacity-50",
                children: (0, a.jsx)("div", {
                  className: "skeleton-box w-full max-w-[200px] h-6 my-0.5",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "flex justify-center gap-4 opacity-50",
                children: [
                  (0, a.jsx)("div", {
                    className: "skeleton-box w-full max-w-[160px] h-6 my-0.5",
                  }),
                  (0, a.jsx)("div", {
                    className: "skeleton-box w-full max-w-[160px] h-6 my-0.5",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex justify-center gap-4 opacity-50",
                children: (0, a.jsx)("div", {
                  className: "skeleton-box w-full max-w-[280px] h-6 my-0.5",
                }),
              }),
              (0, a.jsx)("div", {
                className: "flex justify-center gap-4 opacity-50",
                children: (0, a.jsx)("div", {
                  className: "skeleton-box w-full max-w-[320px] h-6 my-0.5",
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex justify-center gap-4 opacity-50 border-t border-b border-border-color",
                children: [
                  (0, a.jsx)("div", {
                    className: "skeleton-box w-full h-16 my-0.5",
                  }),
                  (0, a.jsx)("div", {
                    className: "skeleton-box w-full h-16 my-0.5",
                  }),
                  (0, a.jsx)("div", {
                    className: "skeleton-box w-full h-16 my-0.5",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex justify-center gap-4 opacity-50",
                children: (0, a.jsx)("div", {
                  className:
                    "skeleton-box w-full max-w-[360px] rounded-xl h-[400px] my-0.5",
                }),
              }),
            ],
          }),
        });
      }
    },
    89755: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = s(57437),
        n = s(2265),
        l = s(36864),
        o = s(73399),
        i = s(87726),
        r = s(71292);
      function c(e) {
        let {
            subText: t,
            valueText: s,
            valueTextColor: c,
            lockPeriodText: d,
          } = e,
          u = (0, n.useMemo)(() => (null != c ? c : "default"), [c]),
          x = (0, n.useMemo)(() => l.eG.balancerPoolUrl, []);
        return (0, a.jsxs)("div", {
          className:
            "mt-4 flex flex-wrap gap-1 justify-center items-center w-full",
          children: [
            (0, a.jsx)(i.Z, { text: t }),
            (0, a.jsx)(o.Z, { size: "sm", text: s, color: u }),
            (0, a.jsx)(i.Z, { text: "for" }),
            (0, a.jsx)(i.Z, { text: d }),
            (0, a.jsx)(r.Z, { href: x, text: "Link to the Pool" }),
          ],
        });
      }
    },
    57233: function (e, t, s) {
      "use strict";
      var a = s(57437),
        n = s(2265);
      t.Z = (e) => {
        let { modelValue: t, isDisabled: s, onValueChange: l, options: o } = e,
          [i, r] = (0, n.useState)(t),
          c = (0, n.useMemo)(() => 4 === o.length, [o]);
        return (
          (0, n.useEffect)(() => {
            r(t);
          }, [t]),
          (0, n.useEffect)(() => {
            l(i);
          }, [i, l]),
          (0, a.jsx)("div", {
            className: "grid "
              .concat(
                c ? "grid-cols-8 -mx-6" : "grid-cols-6 -mx-14",
                "  relative py-2 mt-2  "
              )
              .concat(
                s ? "pointer-events-none cursor-not-allowed opacity-60" : ""
              ),
            children: o.map((e, t) =>
              (0, a.jsx)(
                "div",
                {
                  className: "flex items-center ".concat(
                    t ? "col-span-2" : "",
                    " justify-end w-full relative"
                  ),
                  children: (0, a.jsxs)("div", {
                    className: "flex flex-col items-end",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "absolute transition-all duration-200 h-1 right-1 top-[5px] "
                            .concat(t ? "w-full" : "w-0 rounded-md", " ")
                            .concat(
                              (c ? t : t + 1) <= i
                                ? "custom-radio"
                                : "custom-radio-not-checked"
                            ),
                      }),
                      (0, a.jsx)("input", {
                        type: "radio",
                        id: "".concat(e.value),
                        value: e.value,
                        checked: i === e.value,
                        onChange: () =>
                          !(null == e ? void 0 : e.isDisabled) && r(e.value),
                        className: ""
                          .concat(
                            (null == e ? void 0 : e.isDisabled)
                              ? "cursor-not-allowed border-transparent bg-transparent"
                              : "cursor-pointer",
                            " "
                          )
                          .concat(
                            i < e.value
                              ? "custom-radio-not-checked"
                              : "custom-radio",
                            " relative z-10 w-4 h-4 border-[3px] rounded-full cursor-pointer appearance-none "
                          ),
                        disabled: (null == e ? void 0 : e.isDisabled) || s,
                      }),
                      (0, a.jsxs)("label", {
                        htmlFor: "".concat(e.value),
                        className:
                          "w-24 text-[11px] relative z-10 flex gap-0.5 text-center left-[54px] pr-4 leading-none mt-2 "
                            .concat(
                              i === e.value
                                ? "text-white font-semibold"
                                : "text-white/60",
                              " "
                            )
                            .concat(e.isDisabled ? "opacity-60" : ""),
                        children: [
                          (0, a.jsx)("span", { children: e.label }),
                          (0, a.jsxs)("span", {
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
    58064: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = s(57437),
        n = s(2265),
        l = s(87138),
        o = s(73399),
        i = s(53078);
      function r(e) {
        let { onClick: t, text: s, size: r, url: c } = e,
          d = (0, n.useMemo)(
            () => "inline-flex items-center gap-2 transition hover:opacity-80",
            []
          ),
          u = (0, n.useMemo)(() => ("md" === r ? "md" : "2xl"), [r]),
          x = (0, n.useMemo)(() => ("md" === r ? "w-4 h-4" : "w-6 h-6"), [r]),
          m = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(i.Z, { type: "arrow-left", className: x }),
              (0, a.jsx)(o.Z, { text: s, size: u }),
            ],
          });
        return c
          ? (0, a.jsx)(l.default, { href: c, className: d, children: m })
          : (0, a.jsx)("button", {
              onClick: () => t && t(),
              className: d,
              children: m,
            });
      }
    },
    71292: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = s(57437),
        n = s(87138),
        l = s(53078),
        o = s(2265);
      function i(e) {
        let { href: t, text: s, fontWeigth: i } = e,
          r = (0, o.useMemo)(() => (null != s ? s : "View Details"), [s]),
          c = (0, o.useMemo)(
            () =>
              "text-[11px] ".concat(
                "semibold" === i ? "font-semibold" : "font-medium"
              ),
            [i]
          ),
          d = (0, o.useMemo)(
            () =>
              "flex leading-[14px] transition items-center justify-center gap-0.5 text-white/80 hover:underline hover:text-white",
            []
          ),
          u = (0, o.useMemo)(
            () =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("span", { className: c, children: r }),
                  (0, a.jsx)(l.Z, {
                    type: "link-external",
                    className: "w-[10px] relative -top-[1px]",
                  }),
                ],
              }),
            [c, r]
          );
        return t.length
          ? (0, a.jsx)(n.default, {
              href: t,
              target: "_blank",
              className: d,
              children: u,
            })
          : (0, a.jsx)("div", { className: d, children: u });
      }
    },
    82621: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = s(57437),
        n = s(77155);
      function l(e) {
        return (0, a.jsx)(n.E.div, {
          className: "box",
          initial: { opacity: 0, scaleY: 0.95 },
          animate: { opacity: 1, scaleY: 1 },
          transition: {
            duration: 0.13,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 20,
              restDelta: 0.005,
            },
          },
          children: e.children,
        });
      }
    },
    99399: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = s(57437),
        n = s(7078),
        l = s(2265);
      function o(e) {
        let t = (0, l.useMemo)(
            () =>
              e.border && !e.hideBorderOnMobile
                ? "border-l border-border-color px-0 pl-2 md:pl-4 xl:px-6"
                : e.hideBorderOnMobile
                ? "xl:border-l xl:border-border-color px-0 xl:px-6"
                : "px-0 xl:px-6",
            [e.border, e.hideBorderOnMobile]
          ),
          s = (0, l.useMemo)(() => {
            var s;
            return (0, n.A)(
              t,
              "flex h-full items-center",
              null !== (s = e.className) && void 0 !== s ? s : ""
            );
          }, [t, e.className]);
        return (0, a.jsx)("div", { className: s, children: e.children });
      }
    },
    96446: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var a = s(57437),
        n = s(2265),
        l = s(53078),
        o = s(62167),
        i = s(57818),
        r = s(14375);
      let c = (0, i.default)(
        () => Promise.all([s.e(400), s.e(649)]).then(s.t.bind(s, 59522, 23)),
        { loadableGenerated: { webpack: () => [59522] }, ssr: !1 }
      );
      function d(e) {
        var t, s;
        let i = (0, n.useMemo)(() => {
          var t;
          return null !== (t = e.iconType) && void 0 !== t ? t : "info";
        }, [e.iconType]);
        return (0, a.jsxs)("a", {
          className: "cursor-pointer",
          children: [
            "spinning-loader" !== i &&
              (0, a.jsx)(c, {
                content: (0, a.jsx)(o.Z, {
                  type:
                    null !== (t = e.content) && void 0 !== t ? t : "net-value",
                }),
                children: (0, a.jsx)(l.Z, { type: i }),
              }),
            "spinning-loader" === i &&
              (0, a.jsx)(c, {
                content: (0, a.jsx)(o.Z, {
                  type:
                    null !== (s = e.content) && void 0 !== s ? s : "net-value",
                }),
                children: (0, a.jsx)(r.Z, { size: "medium" }),
              }),
          ],
        });
      }
    },
    62167: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = s(57437),
        n = s(2265),
        l = s(73399),
        o = s(49261);
      function i(e) {
        let {} = e,
          { open: t } = (0, o.Z)(),
          s = (0, n.useMemo)(() => "Preview Progress", []);
        return (0, a.jsxs)("a", {
          onClick: t,
          className:
            "flex gap-0.5 justify-center items-center opacity-80 hover:opacity-100 hover:underline transition relative -top-1",
          children: [
            (0, a.jsx)(l.Z, { text: s, color: "light-blue", size: "sm" }),
            (0, a.jsx)("svg", {
              className: "relative -top-[1px]",
              width: "11",
              height: "10",
              viewBox: "0 0 11 10",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                d: "M4.25 7.5L6.75 5L4.25 2.5",
                stroke: "#8EBFDB",
                strokeWidth: "1.25",
                strokeLinecap: "round",
              }),
            }),
          ],
        });
      }
      function r(e) {
        let t = "";
        return (
          "net-value" === e.type
            ? (t = (0, a.jsx)("div", {
                className: "max-w-[260px]",
                children:
                  "This value is calculated by taking all Supplied asset values and subtracting the Borrowed asset values.",
              }))
            : "cctp" === e.type
            ? (t = (0, a.jsx)("div", {
                className: "max-w-[340px]",
                children:
                  "All USDC liquidity is unified on Arbitrum and is available on all networks that support CCTP",
              }))
            : "health-factor" === e.type
            ? (t = (0, a.jsx)("div", {
                className: "max-w-[330px]",
                children:
                  "The Health Factor is calculated by dividing the (Supplied Assets * Supply Factor) and (Borrowed Assets * Borrow Factor). A higher ratio suggests more collateral backing the loan, indicating a safer lending position.",
              }))
            : "base-rewards" === e.type
            ? (t = (0, a.jsxs)("div", {
                className: "max-w-[280px]",
                children: [
                  (0, a.jsx)("div", {
                    children: "Net Base APY on Supplied and Borrowed assets.",
                  }),
                  (0, a.jsx)("div", {
                    children:
                      "The net amount is compounded back into your position.",
                  }),
                ],
              }))
            : "claim-and-lock" === e.type
            ? (t = (0, a.jsx)("div", {
                className: "max-w-[240px]",
                children:
                  "Note: vlSYNO is an 80:20 Balancer Pool pair. Creating this vlSYNO lock will require locking 20% in ETH.",
              }))
            : "params-update-time" === e.type
            ? (t = (0, a.jsx)("div", {
                className: "max-w-[240px]",
                children:
                  "This parameter is updated every 15 minutes to ensure the information remains current.",
              }))
            : "vlsyno-apy" === e.type
            ? (t = (0, a.jsxs)("div", {
                className: "max-w-[250px]",
                children: [
                  (0, a.jsx)("div", {
                    className: "mb-3",
                    children:
                      "This is the average APY, calculated based on all locks and their multipliers. Longer lock durations have higher multipliers, resulting in increased APY.",
                  }),
                  "This parameter is updated every 15 minutes to ensure the information remains current.",
                ],
              }))
            : "pending-health-factor" === e.type
            ? (t = (0, a.jsx)("div", {
                className: "max-w-[240px]",
                children:
                  "Your health factor is currently being updated due to a pending transaction. It reflects the risk level of your position, with higher values indicating lower risk. Please wait for the transaction to finalize for an accurate value.",
              }))
            : "pending-to-supply" === e.type
            ? (t = (0, a.jsxs)("div", {
                className: "max-w-[240px]",
                children: [
                  "Tokens are on their way to your wallet! ",
                  (0, a.jsx)("br", {}),
                  "Sit back, relax, and let the magic happen!",
                  (0, a.jsx)("footer", {
                    className: "mt-4 flex justify-start",
                    children: (0, a.jsx)(i, {}),
                  }),
                ],
              }))
            : "pending-to-borrow" === e.type &&
              (t = (0, a.jsxs)("div", {
                className: "max-w-[280px]",
                children: [
                  "Your pending transaction might affect the available to borrow tokens value. Don't worry—it will update automatically once the transaction finalizes.",
                  (0, a.jsx)("br", {}),
                  "Sit tight, and let the blockchain do its thing!",
                  (0, a.jsx)("footer", {
                    className: "mt-4 flex justify-start",
                    children: (0, a.jsx)(i, {}),
                  }),
                ],
              })),
          (0, a.jsx)("div", { children: t })
        );
      }
    },
    45292: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = s(57437);
      s(2265);
      var n = s(87726),
        l = s(73399),
        o = s(96446);
      function i(e) {
        var t;
        return (0, a.jsx)("div", {
          children: (0, a.jsxs)("div", {
            className: "flex flex-col justify-start items-start gap-1 text-xl",
            children: [
              e.header && !e.hasPopover
                ? (0, a.jsx)(n.Z, { text: e.header, wrap: e.wrapHeader })
                : null,
              e.header && e.hasPopover
                ? (0, a.jsxs)("div", {
                    className:
                      "flex gap-1 items-center justify-center flex-nowrap",
                    children: [
                      (0, a.jsx)(n.Z, { text: e.header, wrap: e.wrapHeader }),
                      e.popoverContent &&
                        (0, a.jsx)(o.default, { content: e.popoverContent }),
                    ],
                  })
                : null,
              e.body && !e.bodyLoading
                ? (0, a.jsxs)("div", {
                    className: "flex gap-1 items-end",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex gap-2 items-center",
                        children: [
                          e.bodyShadow
                            ? (0, a.jsx)("span", {
                                className: "[text-shadow:_0_0_4px_#FFEAB6]",
                                children: (0, a.jsx)(l.Z, {
                                  size: "xl",
                                  text: e.body,
                                  color: "yellow",
                                }),
                              })
                            : (0, a.jsx)(l.Z, {
                                size: "xl",
                                text: e.body,
                                color:
                                  null !== (t = e.bodyColor) && void 0 !== t
                                    ? t
                                    : "default",
                              }),
                          e.loaderAnimation
                            ? (0, a.jsx)("span", {
                                className: "relative -top-[1px]",
                                children: (0, a.jsx)(o.default, {
                                  iconType: "spinning-loader",
                                  content: "pending-health-factor",
                                }),
                              })
                            : null,
                        ],
                      }),
                      e.footer
                        ? (0, a.jsx)(n.Z, { size: "sm", text: e.footer })
                        : null,
                    ],
                  })
                : null,
              e.bodyLoading
                ? (0, a.jsx)("div", {
                    className: "skeleton-box w-14 h-6 my-0.5",
                  })
                : null,
            ],
          }),
        });
      }
    },
    94485: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = s(57437),
        n = s(73399),
        l = s(53078),
        o = s(87726);
      function i(e) {
        let { toggle: t, label: s, text: i } = e;
        return (0, a.jsx)("div", {
          className: "w-full flex justify-end pt-1 pb-2",
          children: (0, a.jsxs)("button", {
            onClick: t,
            className:
              "inline-flex py-[1px] px-1 rounded-md gap-1 items-center justify-end cursor-pointer transition-all border border-transparent hover:border-white/5 bg-white-opacity-02 hover:bg-white-opacity-04",
            children: [
              (0, a.jsx)(l.Z, { type: "switch" }),
              (0, a.jsxs)("div", {
                className: "flex gap-1 items-center justify-center",
                children: [
                  (0, a.jsx)(o.Z, { text: s, size: "sm" }),
                  (0, a.jsx)(n.Z, {
                    color: "expensive-cream",
                    text: i,
                    size: "xs",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    19132: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = s(57437),
        n = s(2265),
        l = s(5880),
        o = s(7078);
      function i(e) {
        let { tabs: t, size: s, selectedTab: i, onTabClick: r } = e,
          c = (0, n.useMemo)(
            () => ({ 2: "grid-cols-2", 4: "grid-cols-4" }),
            []
          ),
          d = (0, n.useMemo)(() => ("sm" == s ? "py-1" : "py-2"), [s]),
          u = (0, n.useMemo)(
            () =>
              (0, o.A)(
                d,
                "transition w-full hover:bg-background-widget-tab-active uppercase text-xs text-center px-2 leading-none cursor-pointer"
              ),
            [d]
          ),
          x = (0, n.useMemo)(() => c[t.length] || "grid-cols-1", [c, t]),
          m = (0, n.useMemo)(() => "bg-background-widget-tab-active", []),
          h = (0, n.useMemo)(
            () =>
              (0, o.A)(
                "transition shadow-lg grid rounded-xl border border-border-color overflow-hidden",
                x
              ),
            [x]
          );
        return (0, a.jsx)("div", {
          className: h,
          children: t.map((e) =>
            (0, a.jsx)(
              l.H,
              {
                className:
                  "border-r last-of-type:border-r-0 border-border-color",
                children: (0, a.jsx)("button", {
                  onClick: () => r(e.id),
                  className: ""
                    .concat(u, " ")
                    .concat(i.toLowerCase() === e.id.toLowerCase() ? m : ""),
                  children: e.name,
                }),
              },
              e.id
            )
          ),
        });
      }
    },
    5046: function (e, t, s) {
      "use strict";
      s.d(t, {
        SynoPageProvider: function () {
          return r;
        },
        o: function () {
          return i;
        },
      });
      var a = s(57437),
        n = s(2265),
        l = s(16463);
      let o = (0, n.createContext)(void 0),
        i = () => {
          let e = (0, n.useContext)(o);
          if (!e)
            throw Error(
              "useSynoPageContext must be used within a SynoPageProvider"
            );
          return e;
        },
        r = (e) => {
          let { children: t } = e,
            s = (0, l.useSearchParams)(),
            i = (0, l.useRouter)(),
            r = (0, n.useMemo)(
              () =>
                "vlSYNO" === (null == s ? void 0 : s.get("activeTab"))
                  ? "vlSYNO"
                  : "sSYNO",
              [s]
            );
          return (
            (0, n.useEffect)(() => {
              if (!(null == s ? void 0 : s.get("activeTab"))) {
                let e = new URLSearchParams(null == s ? void 0 : s.toString());
                e.set("activeTab", "sSYNO"),
                  i.replace(
                    ""
                      .concat(window.location.pathname, "?")
                      .concat(e.toString()),
                    { scroll: !1 }
                  );
              }
            }, [s, i]),
            (0, a.jsx)(o.Provider, {
              value: {
                activeTab: r,
                setActiveTab: (e) => {
                  let t = new URLSearchParams(
                    null == s ? void 0 : s.toString()
                  );
                  t.set("activeTab", e);
                  let a = ""
                    .concat(window.location.pathname, "?")
                    .concat(t.toString());
                  i.push(a, { scroll: !1 });
                },
              },
              children: t,
            })
          );
        };
    },
    48781: function (e, t, s) {
      "use strict";
      s.d(t, {
        U: function () {
          return i;
        },
      });
      var a = s(57570),
        n = s(81153),
        l = s(60209),
        o = s(2265);
      let i = () => {
        let { hasSignedTermsAndConditions: e } = (0, l.Z)(),
          { changeModalState: t } = (0, n.Z)();
        return {
          verifyTermsAndConditions: (0, o.useCallback)(
            () => !!e || (t(a.t.TermsAndConditions, !0), !1),
            [e, t]
          ),
        };
      };
    },
  },
  function (e) {
    e.O(
      0,
      [764, 99, 885, 114, 524, 263, 666, 495, 341, 26, 971, 23, 744],
      function () {
        return e((e.s = 14098));
      }
    ),
      (_N_E = e.O());
  },
]);
