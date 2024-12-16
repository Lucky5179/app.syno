"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[920],{9139:function(e,t,n){n.d(t,{Z:function(){return B}});var i=n(57437),o=n(2265),a=n(7078),r=n(73399),s=n(87726),l=n(56032),c=n(62056);function d(e){let{showNative:t}=e,{token:n}=e;return t&&(n={...e.token,...(0,c.F)(n)}),(0,i.jsxs)(l.Z,{token:n,isNotALink:!0,children:[(0,i.jsx)(r.Z,{text:n.symbol}),(0,i.jsx)("div",{className:"flex flex-col",children:(0,i.jsx)(s.Z,{size:"sm",text:n.name})})]})}var u=n(43794),h=n(32129),m=n(30570),v=n(80229);function p(e){return(0,i.jsx)(v.Z,{fullWidth:!0,children:(0,i.jsx)("div",{className:"inline-flex gap-1 w-full justify-between items-center p-2 rounded cursor-pointer",onClick:()=>{e.onClick()},children:e.children})})}var f=n(38446),g=n(55360),x=n(77155);let w={open:{opacity:1,height:"auto",transition:{type:"spring",stiffness:400,damping:34}},closed:{opacity:0,height:0,transition:{duration:.35}}};var y=n(72664);function b(e){let[t,n]=(0,o.useState)(!1),{token:a,setToken:r}=(0,g.Q)(),l=(0,o.useMemo)(()=>(0,f.HX)().filter(e=>!e.offboarding).filter((e,t,n)=>n.findIndex(t=>t.symbol===e.symbol)===t),[]),v=(0,y.o)(),b=()=>n(!t),S=e=>{r(e),n(!1)};return(0,i.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,i.jsx)(s.Z,{text:"ASSET",size:"sm"}),(0,i.jsx)("div",{className:"relative inline-block text-left min-w-[180px] xl:min-w-[180px] z-10",children:"xl"===v||"2xl"===v?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(p,{onClick:b,children:[a&&(0,i.jsx)(d,{showNative:!0,token:a}),(0,i.jsx)(m.C,{open:t})]}),(0,i.jsx)(x.E.div,{initial:!1,animate:t?"open":"closed",variants:w,style:{pointerEvents:t?"auto":"none"},className:"overflow-hidden z-10",children:t&&(0,i.jsx)(u.Z,{onClose:()=>n(!1),children:l.map(e=>(0,i.jsx)(h.Z,{active:e.symbol===(null==a?void 0:a.symbol),onClick:()=>S(e),children:(0,i.jsx)(d,{showNative:!0,token:e})},"token_".concat(e.name,"_").concat(e.originId||e.chainId)))})})]}):(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"absolute left-0 top-0 w-full pr-2",children:(0,i.jsxs)(p,{onClick:b,children:[a&&(0,i.jsx)(d,{showNative:!0,token:a}),(0,i.jsx)(m.C,{open:t})]})}),(0,i.jsxs)("select",{value:(null==a?void 0:a.symbol)||"",onChange:e=>{let t=l.find(t=>t.symbol===e.target.value);t&&S(t)},className:"block opacity-0 w-full h-14 border-transparent px-4 py-2 mt-1 text-sm border rounded-lg bg-background focus:outline-none focus:ring focus:ring-opacity-50",children:[(0,i.jsx)("option",{value:"",disabled:!0,children:"Select a token"}),l.map(e=>(0,i.jsx)("option",{value:e.symbol,children:(0,c.F)(e).name},"token_".concat(e.name,"_").concat(e.originId||e.chainId)))]})]})})]})}var S=n(60339),k=n(53739);function I(e){let t=(0,o.useMemo)(()=>(0,S.E)(e.chainId),[e.chainId]);return(0,i.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,i.jsx)(k.Z,{chainId:t.id,width:20,height:20}),(0,i.jsxs)("div",{className:"text-font-basic-white font-medium text-base normal-case",children:[" ",t.displayName]})]})}var N=n(72123);function j(e){let[t,n]=(0,o.useState)(!1),{token:a,chain:r,setChain:l}=(0,g.Q)(),c=(0,y.o)(),d=(0,o.useMemo)(()=>(null==a?void 0:a.crossChain)?(0,f.TU)().filter(e=>(0,N.F)(e.symbol,null==a?void 0:a.symbol)):(0,f.HX)().filter(e=>(0,N.F)(e.symbol,(null==a?void 0:a.symbol)||"")),[a]),v=()=>n(e=>!e),b=e=>{l(e),n(!1)};return(0,i.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,i.jsx)(s.Z,{text:"CHAIN",size:"sm"}),(0,i.jsx)("div",{className:"relative text-left xl:min-w-[180px] min-h-[52px] flex items-center z-10",children:"xl"===c||"2xl"===c?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(p,{onClick:v,children:[r&&(0,i.jsx)(I,{chainId:r.id}),d.length>1&&(0,i.jsx)(m.C,{open:t})]}),(0,i.jsx)(x.E.div,{initial:!1,animate:t?"open":"closed",variants:w,className:"overflow-hidden z-10",children:t&&d.length>1&&(0,i.jsx)(u.Z,{onClose:()=>n(!1),children:d.map(e=>(0,i.jsx)(h.Z,{active:(null==r?void 0:r.id)===(e.originId||e.chainId),onClick:()=>b((e.originId||e.chainId).toString()),children:(0,i.jsx)(I,{chainId:e.originId||e.chainId})},"chain_"+e.name+"_"+(e.originId||e.chainId)))})})]}):(0,i.jsxs)("div",{className:"relative w-full",children:[(0,i.jsx)("div",{className:"absolute left-0 top-2 w-full flex gap-1",children:(0,i.jsxs)(p,{onClick:v,children:[r&&(0,i.jsx)(I,{chainId:r.id}),d.length>1&&(0,i.jsx)(m.C,{open:t})]})}),(0,i.jsxs)("select",{value:(null==r?void 0:r.id)||"",onChange:e=>{b(e.target.value)},className:"block opacity-0 w-full h-14 border-transparent px-4 py-2 mt-1 text-sm border rounded-lg bg-background focus:outline-none focus:ring focus:ring-opacity-50",children:[(0,i.jsx)("option",{value:"",disabled:!0,children:"Select a chain"}),d.map(e=>{var t;return(0,i.jsx)("option",{value:(e.originId||e.chainId).toString(),children:null===(t=(0,S.E)((e.originId||e.chainId).toString()))||void 0===t?void 0:t.name},"chain_"+e.name+"_"+(e.originId||e.chainId))})]})]})})]})}function B(e){let{border:t}=e,n=(0,o.useMemo)(()=>"flex items-center h-full w-full",[]),r=(0,o.useMemo)(()=>"xl:border-r border-border-color",[]),s=(0,a.A)(n,t?r:"","xl:px-2");return(0,i.jsxs)("div",{className:n,children:[(0,i.jsx)("div",{className:s,children:(0,i.jsx)(b,{})}),(0,i.jsx)("div",{className:s,children:(0,i.jsx)(j,{})})]})}},43794:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(57437),o=n(2265);function a(e){let t=(0,o.useRef)(null),n=(0,o.useMemo)(()=>"sm"===e.size?"w-36":"w-56",[e.size]),a=(0,o.useMemo)(()=>"absolute -top-1/2 -right-4 mt-2 ".concat(n," bg-background-connect-wallet rounded shadow-lg z-[100] overflow-hidden max-h-[400px] overflow-y-auto"),[n]);return(0,o.useEffect)(()=>{function n(n){t.current&&!t.current.contains(n.target)&&e.onClose()}return document.addEventListener("mousedown",n,{passive:!0}),document.addEventListener("touchstart",n,{passive:!0}),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e]),(0,i.jsx)("div",{ref:t,className:a,children:(0,i.jsx)("div",{className:"bg-background-dropdown",children:e.children})})}},32129:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(57437),o=n(2265),a=n(7078);function r(e){let t=(0,o.useMemo)(()=>e.active?"bg-background-active-dropdown text-white/80 ":"bg-background-connect-wallet text-white/60",[e.active]),n=(0,a.A)("block transition uppercase px-4 py-2 text-xs cursor-pointer hover:bg-background-active-dropdown hover:text-white/80",t);return(0,i.jsx)("div",{className:n,onClick:e.onClick,children:e.children})}},30570:function(e,t,n){var i=n(57437),o=n(53078);t.C=e=>e.open?(0,i.jsx)(o.Z,{type:"chevron-up"}):(0,i.jsx)(o.Z,{type:"chevron-down"})},43075:function(e,t,n){n.d(t,{MG:function(){return s}});var i=n(57437),o=n(2265),a=n(36864);let r=(0,o.createContext)({...a.eG,isHubChain:()=>!1});function s(){return(0,o.useContext)(r)}t.default=function(e){let{children:t}=e,n=(0,o.useCallback)(e=>a.eG.hubChainId===e,[]);return(0,i.jsx)(r.Provider,{value:{...a.eG,isHubChain:n},children:t})}},44731:function(e,t,n){n.d(t,{T:function(){return p},TokenPageProvider:function(){return f}});var i=n(57437),o=n(2265),a=n(61195),r=n(28857),s=n(16463),l=n(94254),c=n(36864),d=n(62056),u=n(89404),h=n(43075),m=n(38923);let v=(0,o.createContext)(void 0),p=()=>{let e=(0,o.useContext)(v);if(!e)throw Error("useTokenPageContext must be used within a TokenPageProvider");return e},f=e=>{let{children:t}=e,{isHubChain:n}=(0,h.MG)(),{getSinglePrice:p,all:f}=(0,r.Z)(),[g,x]=(0,o.useState)(0),{all:w}=(0,a.Z)(),[y,b]=(0,o.useState)(void 0),S=(0,s.useSearchParams)(),k=(0,s.useRouter)(),I=(0,o.useCallback)(e=>(null==S?void 0:S.get(e))||"",[S]),N=(0,o.useMemo)(()=>I("symbol")||"",[I]),j=I("chainId"),B=I("to"),C=(0,o.useMemo)(()=>{var e;return null!==(e=(0,u.f)().find(e=>e.id===Number(j)))&&void 0!==e?e:(0,u.f)()[0]},[j]),E=(0,o.useMemo)(()=>{var e,t;return null!==(t=null===(e=f.find(e=>e.symbol.toLowerCase()==="W".concat(null==C?void 0:C.currency).toLowerCase()))||void 0===e?void 0:e.usdValue)&&void 0!==t?t:0},[f,C]),[L,M]=(0,o.useState)(()=>{let e=I("isNative");return!e||"true"===e}),R=(0,o.useMemo)(()=>(null==C?void 0:C.id)!==void 0&&n(C.id),[C,n]),[F,Z]=(0,o.useState)("0"),G=(0,o.useMemo)(()=>{var e;return(0,l.ik)(null!==(e=null==y?void 0:y.decimals)&&void 0!==e?e:c.hS,I("value"),F)},[I,y,F]),T=I("type"),A=(e,t,n)=>{let i=new URLSearchParams((null==S?void 0:S.toString())||"");i.set(e,t),n&&i.set("symbol",n);let o="/token";o=window.location.pathname.startsWith("/portfolio")?"/portfolio":"/token";let a="".concat(o,"?").concat(i.toString());a!==window.location.pathname+window.location.search&&k.push(a,{scroll:!1})},z=(0,o.useCallback)(()=>{let e=new URLSearchParams((null==S?void 0:S.toString())||"");if((0,d.I)(N)){var t;let n="true"===(null!==(t=e.get("isNative"))&&void 0!==t?t:"true");e.set("isNative",n?"true":"false"),M(n)}else e.delete("isNative"),M(!1);let n="/token";n=window.location.pathname.startsWith("/portfolio")?"/portfolio":"/token";let i="".concat(n,"?").concat(e.toString());i!==window.location.pathname+window.location.search&&k.push(i,{scroll:!1})},[N,S,k]),P=(0,o.useCallback)(()=>{let e=new URLSearchParams((null==S?void 0:S.toString())||""),t="true"===e.get("isNative");e.set("isNative",(!t).toString()),M(!t);let n="/token";n=window.location.pathname.startsWith("/portfolio")?"/portfolio":"/token";let i="".concat(n,"?").concat(e.toString());i!==window.location.pathname+window.location.search&&k.push(i,{scroll:!1})},[S,k]);return(0,o.useEffect)(()=>{z()},[N,z]),(0,o.useEffect)(()=>{N&&f.length>0&&x(p(N).usdValue)},[p,N,f]),(0,o.useEffect)(()=>{N&&j&&w.length>0&&b((0,m.G)(w,N,Number(j)))},[N,j,w]),(0,i.jsx)(v.Provider,{value:{token:y,price:g,nativeTokenPrice:E,setSymbol:e=>{let t=new URLSearchParams((null==S?void 0:S.toString())||"");t.set("symbol",e);let n="/token";n=window.location.pathname.startsWith("/portfolio")?"/portfolio":"/token";let i="".concat(n,"?").concat(t.toString());i!==window.location.pathname+window.location.search&&k.push(i,{scroll:!1})},chain:C,setChainId:(e,t)=>A("chainId",e,t),to:B,setTo:e=>A("to",e),value:G,setValue:e=>{var t;let n=(0,l.ik)(null!==(t=null==y?void 0:y.decimals)&&void 0!==t?t:c.hS,e,F);A("value",n),Z(n)},type:T,setType:e=>A("type",e),isNative:L,isAnHubChainAsset:R,toggleIsNative:P},children:t})}},53430:function(e,t,n){n.d(t,{Bg:function(){return w},Ik:function(){return S},Lv:function(){return F},Mg:function(){return M},SH:function(){return E},Uo:function(){return b},Yd:function(){return j},ag:function(){return R},gI:function(){return x},qX:function(){return B},yj:function(){return y},yk:function(){return g}});var i=n(2968),o=n(71581),a=n(98959),r=n(36864),s=n(10200),l=n(63046),c=n(93083),d=n(20892),u=n(49110),h=n(61602),m=n(60339),v=n(38923),p=n(54422),f=n(83556);let g=async(e,t,n,r,c,d,u,h)=>{var m,g;let{signer:x}=await (0,p.z)(e),w=a.T[n.id.toString()],y=s.Fc.connect(w,x),b=s.qG.connect(w,x),S=L(c,u),k=[l.BS.RepayNative,l.BS.DepositNative,l.BS.BorrowNative,l.BS.WithdrawNative].includes(S),I=[l.BS.RepayNative,l.BS.DepositNative].includes(S),j=null!==(g=t.originId)&&void 0!==g?g:t.chainId,B=k?i.N:null===(m=(0,v.p)(j,t))||void 0===m?void 0:m.address,E=o.vz(r.toString(),t.decimals),M=I?0:E,R=I?E:BigInt(0);if(d){let e=await y.userActions.estimateGas(S,B,M,{value:R});return y.userActions(S,B,M,{value:R,gasLimit:(0,f.AX)(e)})}if(h===l.eA.Standard){let e=S===l.BS.Repay||S===l.BS.RepayNative||(S===l.BS.Deposit||S===l.BS.DepositNative)&&(BigInt(t.market.limit.deposit)-BigInt(t.market.capacity.deposit)-E)*BigInt(100)>BigInt(98)*BigInt(t.market.limit.deposit),{deliveryCostRoundtrip:i,forwardCost:o}=await C(e,n),a=await b.userActions.estimateGas(S,B,M,o,{value:i+R});return b.userActions(S,B,M,o,{value:i+R,gasLimit:(0,f.AX)(a)})}{let e=await N(n.name,S,n.wormholeId),t=e.total+R,i=[...e.returnCosts];return b.instantActions(S,B,M,i,{value:t})}},x=(e,t,n,i,o,a)=>e&&t?Number(null==t?void 0:t.hubActions[o].gasFormatted):t&&a?Number(t["fast"===i?"spokeInstant":"spoke"][null==a?void 0:a.name][o].gasFormatted)+n:0,w=async(e,t)=>{let n=0,i=0,a=(0,l.Ry)(t),r=a===l.BS.Repay||a===l.BS.RepayNative||a===l.BS.Deposit||a===l.BS.DepositNative;try{let t=await C(r,e);i=Number(o.dF(t.deliveryCostRoundtrip));let s=await N(null==e?void 0:e.name,a,null==e?void 0:e.wormholeId);return{instant:n=Number(o.dF(s.total)),standard:i}}catch(e){return console.error("Failed to fetch instant action delivery cost:",e),{instant:n,standard:i}}},y=async()=>{try{return await (0,u.Y)(h.b.Syno.GasEstimations)}catch(e){throw console.error("Failed to fetch gas estimations:",e),Error("Failed to fetch gas estimations")}},b=(e,t,n)=>{if(!t||!e||!n)return 0;let i=[c.i.Supply,c.i.Repay].includes(e.toLowerCase())?n.creditLimit-n.creditGiven:n.deposits;return Number(o.bM(i,t.decimals))},S=(e,t)=>e&&t?Number(o.bM(t.transactionLimit,e.decimals)):0,k=async e=>await (0,u.Y)(h.b.Syno.Blockchain.GetCostForReturnDelivery,{wormholeId:e}),I=async(e,t)=>await (0,u.Y)(h.b.Syno.Blockchain.GetDeliveryCostRoundtrip,{chainName:e,forwardCost:t}),N=async(e,t,n)=>await (0,u.Y)(h.b.Syno.Blockchain.GetInstantActionDeliveryCosts,{chainName:e,action:t,wormholeId:n}),j=async(e,t)=>await (0,u.Y)(h.b.Syno.Blockchain.GetInstantMessageFee,{chainName:e,direction:t}),B=async(e,t)=>{let n=(0,v.p)(e,t).address,i=(0,m.E)(e);if(!t)throw Error("Token not found");try{return await (0,u.Y)(h.b.Syno.Blockchain.GetSpokeBalances.replace("{chainName}",i.name).replace("{tokenAddress}",n))}catch(e){return console.error("Failed to fetch SpokeBalances:",e),{creditGiven:BigInt(0),creditLimit:BigInt(0),creditLost:BigInt(0),custodyLimit:BigInt(0),deposits:BigInt(0),lastUpdated:BigInt(0),transactionLimit:BigInt(0),unlocksPending:BigInt(0)}}},C=async(e,t)=>{let n,i;let o=BigInt(1);return e?(n=o.toString(),i=o.toString()):i=((n=await k(t.wormholeId))*r.IZ/r.b2).toString(),i=Math.trunc(Number(i)).toString(),{getCostForReturnDelivery:n,deliveryCostRoundtrip:await I(t.name,i),forwardCost:i}},E=function(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"short",o=t.toLowerCase(),a="short"===i;return"hub"===e||"fast"===e?a?"~1min":"~1 minute":o===c.i.Withdraw||o===c.i.Borrow?(null==n?void 0:n.name)===d.GK.Scroll?a?"~20min":"~20 minutes":a?"~40min":"~40 minutes":(null==n?void 0:n.name)===d.GK.Scroll?a?"~60min":"~60 minutes":a?"~20min":"~20 minutes"},L=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.toLowerCase();return n===c.i.Supply?t?l.BS.DepositNative:l.BS.Deposit:n===c.i.Borrow?t?l.BS.BorrowNative:l.BS.Borrow:n===c.i.Repay?t?l.BS.RepayNative:l.BS.Repay:n===c.i.Withdraw?t?l.BS.WithdrawNative:l.BS.Withdraw:l.BS.Deposit},M=e=>{let t=e.toLowerCase();return t===c.i.Supply||t===c.i.Repay?0:1},R=async e=>(0,u.Y)(h.b.Syno.Blockchain.TransactionReceipt,{txHash:e}),F=async(e,t)=>(0,u.Y)(h.b.Syno.TransactionStatus.replace("{chainName}",e).replace("{txHash}",t))},55360:function(e,t,n){n.d(t,{Q:function(){return r}});var i=n(38446),o=n(72123),a=n(44731);let r=()=>{let{token:e,price:t,nativeTokenPrice:n,setSymbol:r,chain:s,setChainId:l,value:c,setValue:d,type:u,isAnHubChainAsset:h,isNative:m,toggleIsNative:v,setType:p}=(0,a.T)();return{token:e,price:t,nativeTokenPrice:n,chain:s,value:c,type:u,isAnHubChainAsset:h,isNative:null!=m&&m,toggleIsNative:v,setToken:e=>{var t;let n=null!==(t=(0,i.HX)().filter(t=>!e.originId||t.chainId===e.originId||t.originId===e.originId).filter(t=>(0,o.F)(t.symbol,e.symbol)).find(e=>e.originId===s.id||e.chainId===s.id))&&void 0!==t?t:e;(null==n?void 0:n.originId)===s.id?r(n.symbol):l(((null==n?void 0:n.originId)||(null==n?void 0:n.chainId)).toString(),n.symbol)},setChain:e=>{l(e)},setTransactionValue:e=>{d(e)},setActiveTab:e=>{p(e)}}}},29112:function(e,t,n){n.d(t,{Y:function(){return a}});var i=n(22428),o=n(2265);let a=()=>{let{all:e}=(0,i.Z)(),t=(0,o.useRef)(new Map),n=(0,o.useRef)(new Map),{pendingTransactionsUpdated:a,updatedTypes:r}=(0,o.useMemo)(()=>{let n=[],i=!1;return e.forEach(e=>{t.current.get(e.txHash)||(i=!0,n.push(e.type))}),e.length!==t.current.size&&(i=!0),{pendingTransactionsUpdated:i,updatedTypes:n}},[e]),s=(0,o.useMemo)(()=>e.some(e=>{if("hub"!==e.speed){let t=n.current.get(e.txHash)||!1;return e.onChainFinality&&!t}return!1}),[e]);return(0,o.useEffect)(()=>{let i=new Map;e.forEach(e=>{i.set(e.txHash,e)}),t.current=i,e.forEach(e=>{n.current.set(e.txHash,e.onChainFinality||!1)})},[e]),{pendingTransactionsUpdated:a,updatedTypes:r,onChainFinalityChanged:s}}},72664:function(e,t,n){n.d(t,{o:function(){return r}});var i=n(83556),o=n(2265);let a=e=>e>=i.eq["2xl"]?"2xl":e>=i.eq.xl?"xl":e>=i.eq.lg?"lg":e>=i.eq.md?"md":e>=i.eq.sm?"sm":"xs",r=()=>{let[e,t]=(0,o.useState)(()=>a(window.innerWidth));return(0,o.useEffect)(()=>{{let e=()=>{t(a(window.innerWidth))};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[]),e}}}]);