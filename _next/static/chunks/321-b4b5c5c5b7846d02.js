"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[321,446],{56032:function(e,t,r){r.d(t,{Z:function(){return c}});var o=r(57437),n=r(41015),a=r(93083),i=r(62056),s=r(67035),l=r(87138),d=r(2265);function c(e){let{showNative:t,isNotALink:r}=e,{token:c}=e;t&&(c={...e.token,...(0,i.F)(c)});let u=(0,d.useMemo)(()=>(0,s.H)(c,a.i.Supply),[c]),p=(null==e?void 0:e.size)||36;return r?(0,o.jsxs)("div",{className:"flex gap-2 relative",children:[(0,o.jsx)(n.Z,{symbol:c.symbol,width:p,height:p}),(0,o.jsxs)("div",{children:[" ",e.children]})]}):(0,o.jsxs)(l.default,{href:u,className:"flex gap-2 relative",children:[(0,o.jsx)(n.Z,{symbol:c.symbol,width:p,height:p}),(0,o.jsxs)("div",{children:[" ",e.children]})]})}},53739:function(e,t,r){r.d(t,{Z:function(){return s}});var o=r(57437),n=r(2265),a=r(66648),i=r(60339);function s(e){let t=(0,n.useMemo)(()=>(0,i.E)(e.chainId),[e.chainId]),r=e.width||16,s=e.height||16,l=(0,n.useMemo)(()=>"/images/chain/".concat(t.name.toLowerCase(),".svg"),[t]);return(0,o.jsx)(a.default,{src:l,alt:t.name,width:r,height:s})}},82621:function(e,t,r){r.d(t,{Z:function(){return a}});var o=r(57437),n=r(77155);function a(e){return(0,o.jsx)(n.E.div,{className:"box",initial:{opacity:0,scaleY:.95},animate:{opacity:1,scaleY:1},transition:{duration:.13,ease:[0,.71,.2,1.01],scale:{type:"spring",damping:10,stiffness:20,restDelta:.005}},children:e.children})}},52456:function(e,t,r){r.d(t,{Z:function(){return n}});var o=r(57437);function n(e){return(0,o.jsx)("div",{className:"xl:border-t border-b border-border-color xl:h-[90px] py-6 xl:py-0 flex flex-col gap-5 xl:flex-row xl:items-center justify-between ",children:e.children})}},93599:function(e,t,r){r.d(t,{Z:function(){return i}});var o=r(57437),n=r(7078),a=r(2265);function i(e){let t=(0,a.useMemo)(()=>({3:"grid-cols-3",4:"grid-cols-2 gap-3 lg:grid-cols-4"}),[]),r=(0,a.useMemo)(()=>t[e.gridItems]||"grid-cols-1",[t,e.gridItems]),i=(0,a.useMemo)(()=>(0,n.A)("grid ",r,"xl:gap-5 h-full items-center w-full xl:w-auto"),[r]);return(0,o.jsx)("section",{className:i,children:e.children})}},99399:function(e,t,r){r.d(t,{Z:function(){return i}});var o=r(57437),n=r(7078),a=r(2265);function i(e){let t=(0,a.useMemo)(()=>e.border&&!e.hideBorderOnMobile?"border-l border-border-color px-0 pl-2 md:pl-4 xl:px-6":e.hideBorderOnMobile?"xl:border-l xl:border-border-color px-0 xl:px-6":"px-0 xl:px-6",[e.border,e.hideBorderOnMobile]),r=(0,a.useMemo)(()=>{var r;return(0,n.A)(t,"flex h-full items-center",null!==(r=e.className)&&void 0!==r?r:"")},[t,e.className]);return(0,o.jsx)("div",{className:r,children:e.children})}},96446:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var o=r(57437),n=r(2265),a=r(53078),i=r(62167),s=r(57818),l=r(14375);let d=(0,s.default)(()=>Promise.all([r.e(400),r.e(649)]).then(r.t.bind(r,59522,23)),{loadableGenerated:{webpack:()=>[59522]},ssr:!1});function c(e){var t,r;let s=(0,n.useMemo)(()=>{var t;return null!==(t=e.iconType)&&void 0!==t?t:"info"},[e.iconType]);return(0,o.jsxs)("a",{className:"cursor-pointer",children:["spinning-loader"!==s&&(0,o.jsx)(d,{content:(0,o.jsx)(i.Z,{type:null!==(t=e.content)&&void 0!==t?t:"net-value"}),children:(0,o.jsx)(a.Z,{type:s})}),"spinning-loader"===s&&(0,o.jsx)(d,{content:(0,o.jsx)(i.Z,{type:null!==(r=e.content)&&void 0!==r?r:"net-value"}),children:(0,o.jsx)(l.Z,{size:"medium"})})]})}},62167:function(e,t,r){r.d(t,{Z:function(){return l}});var o=r(57437),n=r(2265),a=r(73399),i=r(49261);function s(e){let{}=e,{open:t}=(0,i.Z)(),r=(0,n.useMemo)(()=>"Preview Progress",[]);return(0,o.jsxs)("a",{onClick:t,className:"flex gap-0.5 justify-center items-center opacity-80 hover:opacity-100 hover:underline transition relative -top-1",children:[(0,o.jsx)(a.Z,{text:r,color:"light-blue",size:"sm"}),(0,o.jsx)("svg",{className:"relative -top-[1px]",width:"11",height:"10",viewBox:"0 0 11 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M4.25 7.5L6.75 5L4.25 2.5",stroke:"#8EBFDB",strokeWidth:"1.25",strokeLinecap:"round"})})]})}function l(e){let t="";return"net-value"===e.type?t=(0,o.jsx)("div",{className:"max-w-[260px]",children:"This value is calculated by taking all Supplied asset values and subtracting the Borrowed asset values."}):"cctp"===e.type?t=(0,o.jsx)("div",{className:"max-w-[340px]",children:"All USDC liquidity is unified on Arbitrum and is available on all networks that support CCTP"}):"health-factor"===e.type?t=(0,o.jsx)("div",{className:"max-w-[330px]",children:"The Health Factor is calculated by dividing the (Supplied Assets * Supply Factor) and (Borrowed Assets * Borrow Factor). A higher ratio suggests more collateral backing the loan, indicating a safer lending position."}):"base-rewards"===e.type?t=(0,o.jsxs)("div",{className:"max-w-[280px]",children:[(0,o.jsx)("div",{children:"Net Base APY on Supplied and Borrowed assets."}),(0,o.jsx)("div",{children:"The net amount is compounded back into your position."})]}):"claim-and-lock"===e.type?t=(0,o.jsx)("div",{className:"max-w-[240px]",children:"Note: vlSYNO is an 80:20 Balancer Pool pair. Creating this vlSYNO lock will require locking 20% in ETH."}):"params-update-time"===e.type?t=(0,o.jsx)("div",{className:"max-w-[240px]",children:"This parameter is updated every 15 minutes to ensure the information remains current."}):"vlsyno-apy"===e.type?t=(0,o.jsxs)("div",{className:"max-w-[250px]",children:[(0,o.jsx)("div",{className:"mb-3",children:"This is the average APY, calculated based on all locks and their multipliers. Longer lock durations have higher multipliers, resulting in increased APY."}),"This parameter is updated every 15 minutes to ensure the information remains current."]}):"pending-health-factor"===e.type?t=(0,o.jsx)("div",{className:"max-w-[240px]",children:"Your health factor is currently being updated due to a pending transaction. It reflects the risk level of your position, with higher values indicating lower risk. Please wait for the transaction to finalize for an accurate value."}):"pending-to-supply"===e.type?t=(0,o.jsxs)("div",{className:"max-w-[240px]",children:["Tokens are on their way to your wallet! ",(0,o.jsx)("br",{}),"Sit back, relax, and let the magic happen!",(0,o.jsx)("footer",{className:"mt-4 flex justify-start",children:(0,o.jsx)(s,{})})]}):"pending-to-borrow"===e.type&&(t=(0,o.jsxs)("div",{className:"max-w-[280px]",children:["Your pending transaction might affect the available to borrow tokens value. Don't worry—it will update automatically once the transaction finalizes.",(0,o.jsx)("br",{}),"Sit tight, and let the blockchain do its thing!",(0,o.jsx)("footer",{className:"mt-4 flex justify-start",children:(0,o.jsx)(s,{})})]})),(0,o.jsx)("div",{children:t})}},45292:function(e,t,r){r.d(t,{Z:function(){return s}});var o=r(57437);r(2265);var n=r(87726),a=r(73399),i=r(96446);function s(e){var t;return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"flex flex-col justify-start items-start gap-1 text-xl",children:[e.header&&!e.hasPopover?(0,o.jsx)(n.Z,{text:e.header,wrap:e.wrapHeader}):null,e.header&&e.hasPopover?(0,o.jsxs)("div",{className:"flex gap-1 items-center justify-center flex-nowrap",children:[(0,o.jsx)(n.Z,{text:e.header,wrap:e.wrapHeader}),e.popoverContent&&(0,o.jsx)(i.default,{content:e.popoverContent})]}):null,e.body&&!e.bodyLoading?(0,o.jsxs)("div",{className:"flex gap-1 items-end",children:[(0,o.jsxs)("div",{className:"flex gap-2 items-center",children:[e.bodyShadow?(0,o.jsx)("span",{className:"[text-shadow:_0_0_4px_#FFEAB6]",children:(0,o.jsx)(a.Z,{size:"xl",text:e.body,color:"yellow"})}):(0,o.jsx)(a.Z,{size:"xl",text:e.body,color:null!==(t=e.bodyColor)&&void 0!==t?t:"default"}),e.loaderAnimation?(0,o.jsx)("span",{className:"relative -top-[1px]",children:(0,o.jsx)(i.default,{iconType:"spinning-loader",content:"pending-health-factor"})}):null]}),e.footer?(0,o.jsx)(n.Z,{size:"sm",text:e.footer}):null]}):null,e.bodyLoading?(0,o.jsx)("div",{className:"skeleton-box w-14 h-6 my-0.5"}):null]})})}},74361:function(e,t,r){r.d(t,{p:function(){return n}});var o=r(71581);let n=(e,t,r)=>{let n=(null==r?void 0:r.deposit)?r.deposit:e.market.capacity.deposit,a=(null==r?void 0:r.borrow)?r.borrow:e.market.capacity.borrow;return{deposit:Number(o.bM(BigInt(n),e.decimals))*t.usdValue,borrow:Number(o.bM(BigInt(a),e.decimals))*t.usdValue}}},40277:function(e,t,r){r.d(t,{T:function(){return n}});var o=r(84889);let n=e=>(0,o.u)(e,{maxDecimals:2,decimals:2,showZeroApproximation:!0})+"%"},81983:function(e,t,r){r.d(t,{O:function(){return i},Q:function(){return a}});var o=r(35202),n=r(63046);let a=(e,t,r,a)=>{let i=t.find(t=>t.address.toLowerCase()===e.address.toLowerCase()),s={deposit:0,borrow:0};if(i){let e=(0,o.CD)(i,r,n.BS.Deposit,!0),t=(0,o.CD)(i,r,n.BS.Borrow,!0);s={deposit:e/a.deposit*100,borrow:t/a.borrow*100}}return s},i=(e,t)=>({...t,apy:{deposit:t.apy.deposit+e.deposit,borrow:e.borrow-t.apy.borrow}})},67035:function(e,t,r){r.d(t,{H:function(){return a},_:function(){return i}});var o=r(78336),n=r(37650);let a=(e,t)=>{var r;let a=null!==(r=e.originId)&&void 0!==r?r:e.chainId,i=e.symbol.toLowerCase()===n.W.ETH.toLowerCase(),s=e.symbol.toLowerCase()===n.W.WETH.toLowerCase(),l=i?n.W.WETH.toLowerCase():e.symbol.toLowerCase(),d=o.gh.Token.replace(":symbol",encodeURIComponent(l.replace(" ",""))).replace(":type",encodeURIComponent(t)).replace(":chainId",encodeURIComponent(a.toString()));return i||s?"".concat(d,"&isNative=").concat(s?"false":"true"):d},i=(e,t,r)=>{var o;let a=null!==(o=t.originId)&&void 0!==o?o:t.chainId,i=t.symbol.toLowerCase()===n.W.ETH.toLowerCase(),s=t.symbol.toLowerCase()===n.W.WETH.toLowerCase(),l=i?n.W.WETH.toLowerCase():t.symbol.toLowerCase(),[d,c]=e.split("?"),u=new URLSearchParams(c||"");return u.set("symbol",encodeURIComponent(l.replace(" ",""))),u.set("type",encodeURIComponent(r)),u.set("chainId",encodeURIComponent(a.toString())),(i||s)&&u.set("isNative",s?"false":"true"),"".concat(d,"?").concat(u.toString())}},63046:function(e,t,r){var o,n,a,i;r.d(t,{BS:function(){return n},Ry:function(){return s},eA:function(){return o}}),(a=o||(o={}))[a.Fast=0]="Fast",a[a.Standard=1]="Standard",(i=n||(n={}))[i.Deposit=0]="Deposit",i[i.Borrow=1]="Borrow",i[i.Withdraw=2]="Withdraw",i[i.Repay=3]="Repay",i[i.DepositNative=4]="DepositNative",i[i.RepayNative=5]="RepayNative",i[i.WithdrawNative=6]="WithdrawNative",i[i.BorrowNative=7]="BorrowNative";let s=e=>{switch(e.toLowerCase()){case"deposit":default:return 0;case"borrow":return 1;case"withdraw":return 2;case"repay":return 3;case"depositNative":return 4;case"repayNative":return 5;case"borrowNative":return 7;case"withdrawNative":return 6}}},73467:function(e,t,r){r.d(t,{q:function(){return n}});var o=r(83556);class n{getInterestRateModelFromAddress(e){return this.interestRateModels.find(t=>t.tokens.some(t=>t.address.toLowerCase()===e.toLowerCase()))||{kinks:[],rates:[],reserveFactor:0,address:"unknown",tokens:[]}}getInterestRateFromPoolUtilization(e,t,r){let o;let n=this.getInterestRateModelFromAddress(e),a={deposit:0,borrow:0};if(t===BigInt(0)||r===BigInt(0))return a;if(t<=r)return a.borrow=n.rates[n.rates.length-1],a.deposit=a.borrow*(1-n.reserveFactor),a;let i=BigInt(1e6);for(o=1;o<n.kinks.length&&!(r*i<=t*BigInt(Math.floor(1e6*n.kinks[o])));o++);let s=Number(r*i)/Number(t*i),l=(s-n.kinks[o-1])/(n.kinks[o]-n.kinks[o-1]);return a.borrow=(n.rates[o]-n.rates[o-1])*l+n.rates[o-1],a.deposit=a.borrow*(1-n.reserveFactor)*s,a}getApyFromPoolUtilization(e,t,r){let n=this.getInterestRateFromPoolUtilization(e,t,r);return{apr:{deposit:100*n.deposit,borrow:100*n.borrow},apy:{deposit:(0,o.OB)(n.deposit),borrow:(0,o.OB)(n.borrow)}}}constructor(e){this.interestRateModels=e}}},61195:function(e,t,r){r.d(t,{Z:function(){return c}});var o=r(38472),n=r(39099),a=r(38446),i=r(61602),s=r(73467);class l{build(){let e=new s.q(this.interestRateModels);return this.market.capacity.deposit&&this.market.capacity.borrow&&(this.interestRate=e.getApyFromPoolUtilization(this.hubToken.address,BigInt(this.market.capacity.deposit),BigInt(this.market.capacity.borrow))),this.interestRate}constructor(e,t,r){this.interestRate={apy:{deposit:0,borrow:0},apr:{deposit:0,borrow:0}},this.hubToken=e,this.interestRateModels=t,this.market=r}}let d=(0,n.Ue)(e=>({all:[],interestRateModels:[],setAll:(t,r)=>{if(!t.length||!r.length)return;let o=(0,a.HX)().map((e,o)=>{let n=t[o];if(!n)return null;let a=new l(e,r,n).build();return{...e,market:n,interestRate:a}}).filter(e=>null!==e);e({interestRateModels:r}),e({all:o})},fetchMoneyMarketData:async()=>{try{let[e,t]=await Promise.all([o.Z.get(i.b.MoneyMarket.Markets),o.Z.get(i.b.MoneyMarket.InterestRateModels)]).then(e=>{let[t,r]=e;return[t.data,r.data]});d.getState().setAll(e,t)}catch(e){console.error("Failed to fetch money market data:",e)}}}));var c=d}}]);