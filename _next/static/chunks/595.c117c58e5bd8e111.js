"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[595],{7722:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(57437),r=n(2265),l=n(35273),u=n(7008),s=n(36864),c=n(38446),i=n(78336),f=n(87726),h=n(71292);function o(){let{isConnected:e,address:t}=(0,l.Z)(),[n,o]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{e&&t&&(async()=>{try{let[e,n]=await Promise.all([(0,u.uH)(c.lY,s.eG.hubChainId,t,"number"),(0,u.uH)(c.M0,s.eG.hubChainId,t,"number")]);(e>0||n>0)&&o(!0)}catch(e){console.error("Error fetching balances:",e)}})()},[e,t]),n)?(0,a.jsxs)("div",{className:"flex w-full justify-center items-center gap-1 mt-6 mb-3",children:[(0,a.jsx)(f.Z,{text:"You can view your rCT and tSYNO balance at the following link:"}),(0,a.jsx)(h.Z,{href:i.gh[i.T3.OldDapp],text:"View Balance"})]}):null}}}]);