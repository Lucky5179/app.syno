(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{35883:function(){},46601:function(){},89214:function(){},52361:function(){},94616:function(){},75800:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(57437),r=a(7078),i=a(2265);function l(e){let t=(0,i.useMemo)(()=>{var t;return(0,r.A)("rounded-xl shadow-lg bg-background-card border border-border-card",null!==(t=e.className)&&void 0!==t?t:"")},[e.className]);return(0,n.jsx)("div",{className:t,children:e.children})}},12430:function(e,t,a){"use strict";a.d(t,{_:function(){return n}});let n={referral:"referral",cookieConsent:"cookieConsent",pendingItems:"pendingTransactions-{walletAddress}"}},35273:function(e,t,a){"use strict";a.d(t,{Web3Context:function(){return C},Z:function(){return B}});var n=a(2265),r=a(36864),i=a(89404),l=a(90057),o=a(78336),s=a(12730),c=a(61874),d=a(49699),u=a(72559),b=a(28109),f=a(78243),h=a(60209),m=a(77063),g=a(22428);let w=r.eG.walletConnect.projectId,y=(0,i.f)().map(e=>e.config),p={name:r.eG.name,description:r.eG.description,url:r.eG.url,icons:r.eG.icons},S=new l.w6,v=(0,c.cz)({adapters:[S],defaultNetwork:s.yXc,networks:y,enableInjected:!0,projectId:w,metadata:p,features:{analytics:!0,history:!1,email:!1,socials:!1},allowUnsupportedChain:!0,chainImages:{534352:"/images/chain/scroll.svg"},themeMode:"dark",themeVariables:{"--w3m-accent":"rgb(65, 188, 228)"},privacyPolicyUrl:o.gh[o.T3.PrivacyPolicy],termsConditionsUrl:o.gh[o.T3.TermsOfUse]});function C(e){let{children:t}=e,{isConnected:a,address:r}=B(),i=(0,m.Z)(e=>e.fetchUserData),l=(0,b.Z)(e=>e.fetchRewards),o=(0,u.Z)(e=>e.fetchUserWalletBalances),s=(0,f.Z)(e=>e.fetchHistoryData),c=(0,d.Z)(e=>e.fetchUserLocks),w=(0,d.Z)(e=>e.fetchUserStakes),y=(0,g.Z)(e=>e.fetchPendingTransactions),{getTermsAndConditions:p}=(0,h.Z)();return(0,n.useEffect)(()=>{a&&(null==r?void 0:r.length)&&(i(r),o(r),p(r),y(r),s(r),c(r,"all"),w(r,"all"),l(r))},[a,r,i,o,p,y,l,s,c,w]),t}let B=()=>{let{isConnected:e,address:t}=(0,c.Tj)(),{walletProvider:a}=(0,c.cB)("eip155"),{chainId:n}=(0,c.U_)(),{open:r,close:i}=(0,c.Ig)(),{disconnect:l}=(0,c.qL)(),o=async e=>{await v.switchNetwork({id:e.id,chainNamespace:"eip155",caipNetworkId:"eip155:"+e.id.toString(),rpcUrls:e.rpcUrls,name:null==e?void 0:e.name,nativeCurrency:e.nativeCurrency})};return{modal:v,openModal:r,close:i,disconnect:async()=>{await l()},switchChain:o,isConnected:e,walletProvider:a,chainId:n,address:t}}},7008:function(e,t,a){"use strict";a.d(t,{IT:function(){return h},id:function(){return g},oA:function(){return b},t1:function(){return f},uH:function(){return u},vV:function(){return m}});var n=a(38472),r=a(61602),i=a(71581),l=a(36864),o=a(89404),s=a(38446),c=a(93083),d=a(49110);let u=async function(e,t,a){var l;let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"number",d=(0,o.f)().find(e=>e.id===t),u=e.originId||e.crossChain?null===(l=(0,s.TU)().filter(e=>e.chainId===d.id).find(t=>t.symbol.toLowerCase()===e.symbol.toLowerCase()))||void 0===l?void 0:l.address:e.address,b=(await n.Z.get(r.b.Syno.Blockchain.GetErcBalance.replace("{chainName}",d.name).replace("{owner}",a).replace("{tokenAddress}",u))).data;return"number"===c?i.bM(b.$bigint,e.decimals):b.$bigint},b=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"number",l=(0,o.f)().find(t=>t.id===(e.originId||e.chainId)),s=(await n.Z.get(r.b.Syno.Blockchain.GetNativeBalance.replace("{chainName}",l.name).replace("{owner}",t))).data;return"number"===a?i.dF(s.$bigint):s.$bigint},f=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"number",o=(await n.Z.get(r.b.Syno.Blockchain.GetMaxWithdrawableAmount.replace("{vaultOwner}",t).replace("{addresses}",e.address).replace("{minHealth}",l.ii.toString()).replace("{minHealthPrecision}",l.Wb.toString()))).data;return"number"===a?i.bM(o[0].$bigint,e.decimals):o[0].$bigint},h=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"number",o=(await n.Z.get(r.b.Syno.Blockchain.GetMaxBorrowableAmount.replace("{vaultOwner}",t).replace("{addresses}",e.address).replace("{minHealth}",l.ii.toString()).replace("{minHealthPrecision}",l.Wb.toString()))).data;return"number"===a?i.bM(o[0].$bigint,e.decimals):o[0].$bigint},m=async(e,t)=>(0,d.Y)(r.b.Syno.Blockchain.GetBorrowableAmounts,{vaultOwner:e,addresses:t,minHealth:l.ii.toString(),minHealthPrecision:l.Wb.toString()}),g=e=>{let t=e.toLowerCase();return t===c.i.Supply.toLowerCase()||t===c.i.Repay.toLowerCase()?"Wallet balance:":t===c.i.Withdraw.toLowerCase()?"Withdrawable:":t===c.i.Borrow.toLowerCase()?"Borrowable:":""}},38923:function(e,t,a){"use strict";a.d(t,{G:function(){return o},p:function(){return l}});var n=a(38446),r=a(72123),i=a(36864);let l=(e,t)=>(0,n.TU)().filter(t=>t.chainId===e).find(e=>e.symbol.toLowerCase()===t.symbol.toLowerCase()),o=(e,t,a)=>{let n=e.filter(e=>(0,r.F)(e.symbol,t)).find(e=>e.crossChain?e.chainId===i.eG.hubChainId:(e.originId||e.chainId)===Number(a));if(!n)throw Error("Token with symbol ".concat(t," not found"));return n}},22259:function(e,t,a){"use strict";a.d(t,{T:function(){return c},n:function(){return d}});var n=a(38472),r=a(61602),i=a(71519),l=a.n(i),o=a(36864),s=a(12430);let c=async e=>{let t=e,a=u();return a.length&&(t={...t,referral:a}),(await n.Z.post(r.b.Syno.TermsAndConditions.Post,t)).data},d=async e=>(await n.Z.post(r.b.Syno.TermsAndConditions.Get,{address:e,rawMessage:o.eG.termsAndConditions})).data,u=()=>{let e=localStorage.getItem(s._.referral);return e&&l()(e)?e:""}},78243:function(e,t,a){"use strict";var n=a(39099),r=a(61602),i=a(49110);let l=(0,n.Ue)(e=>({all:[],fetchHistoryData:async t=>{try{let a=await (0,i.Y)(r.b.Subgraph.History.replace("{address}",t));e({all:a})}catch(e){console.error("Failed to fetch money market data:",e)}}}));t.Z=l},22428:function(e,t,a){"use strict";var n=a(12430);let r=(0,a(39099).Ue)(e=>({all:[],modify:(t,a)=>{e(e=>{let n=e.all.map(e=>e.txHash===t.txHash?t:e);return localStorage.setItem(i(a),JSON.stringify(n)),{all:n}})},fetchPendingTransactions:t=>{let a=i(t),n=localStorage.getItem(a);e({all:(n?JSON.parse(n):[]).filter(e=>Date.now()-new Date(e.timestamp).getTime()<72e5)})},add:(t,a)=>{e(e=>{let n=[...e.all,t];return localStorage.setItem(i(a),JSON.stringify(n)),{all:n}})},remove:(t,a)=>{e(e=>{let n=e.all.filter(e=>e.txHash!==t);return localStorage.setItem(i(a),JSON.stringify(n)),{all:n}})}}));t.Z=r;let i=e=>n._.pendingItems.replace("{walletAddress}",e.toLowerCase())},49699:function(e,t,a){"use strict";var n=a(39099),r=a(61602),i=a(49110),l=a(7008),o=a(38446),s=a(60339),c=a(36864);let d=(0,n.Ue)(e=>({userLocks:[],userSSynoBalance:{unstakeAvailableAt:0,lockedBalance:0,balance:0},userVlSynoBalance:0,userBptBalance:0,userSynoBalance:0,fetchUserLocks:async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";try{let n=await (0,i.Y)(r.b.Subgraph.UserLocks.replace("{address}",t)),d=(0,s.E)(c.eG.hubChainId);if("all"===a||"syno"===a){let a=await (0,l.uH)(o.jT,d.id,t,"number");e({userSynoBalance:a})}if("all"===a||"vlsyno"===a){let a=await (0,l.uH)(o.Bq,d.id,t,"number");e({userVlSynoBalance:a})}if("all"===a||"bpt"===a){let a=await (0,l.uH)(o._H,d.id,t,"number");e({userBptBalance:a})}e({userLocks:n})}catch(e){console.error("Failed to fetch API.Subgraph.UserLocks data:",e)}},fetchUserStakes:async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";try{let n=(0,s.E)(c.eG.hubChainId);if("all"===a||"syno"===a){let a=await (0,l.uH)(o.jT,n.id,t,"number");e({userSynoBalance:a})}if("all"===a||"ssyno"===a){let a=await (0,i.Y)(r.b.Subgraph.UserStakes.replace("{address}",t));e({userSSynoBalance:a})}}catch(e){console.error("Failed to fetch API.Subgraph.UserStakes data:",e)}}}));t.Z=d},60209:function(e,t,a){"use strict";var n=a(22259);let r=(0,a(39099).Ue)(e=>({hasSignedTermsAndConditions:!1,isLoading:!1,getTermsAndConditions:async t=>{e({isLoading:!0});try{await (0,n.n)(t),e({hasSignedTermsAndConditions:!0})}catch(t){e({hasSignedTermsAndConditions:!1})}e({isLoading:!1})}}));t.Z=r},77063:function(e,t,a){"use strict";var n=a(71581),r=a(38472),i=a(39099),l=a(61602),o=a(38446),s=a(36864),c=a(28857);let d=(0,i.Ue)(e=>({all:[],totalCollaterized:{deposit:BigInt(0),borrow:BigInt(0)},setAll:t=>{if(!t.length)return;let{getSinglePrice:a}=c.Z.getState();e({all:(0,o.HX)().map(e=>{let r=t.find(t=>t.address.toLowerCase()===e.address.toLowerCase());if(!r)return{...e,balance:{deposit:"0",borrow:"0"}};let i=a(e.symbol).usdValue*Number(n.bM(null==r?void 0:r.balance.deposit,e.decimals)),l=a(e.symbol).usdValue*Number(n.bM(null==r?void 0:r.balance.borrow,e.decimals));return{...e,balance:{deposit:i>s.bU?r.balance.deposit:"0",borrow:l>s.bU?r.balance.borrow:"0"}}})})},fetchUserData:async t=>{try{let a=await r.Z.get(l.b.MoneyMarket.VaultBalances.replace("{address}",t)).then(e=>e.data);d.getState().setAll(a);let{deposited:n,borrowed:i}=(await r.Z.get(l.b.Syno.Blockchain.GetVaultEffectiveNotionals.replace("{address}",t))).data,o={deposit:BigInt(n.$bigint),borrow:BigInt(i.$bigint)};e({totalCollaterized:o})}catch(e){console.error("Failed to fetch money market data:",e)}}}));t.Z=d},72559:function(e,t,a){"use strict";var n=a(38472),r=a(71581),i=a(39099),l=a(61602),o=a(38446),s=a(7008);let c=(0,i.Ue)(e=>({all:[],borrowableAmounts:[],setAll:t=>{t.length&&e({all:t})},fetchUserWalletBalances:async t=>{try{let a=await n.Z.get(l.b.Wallet.Balances.replace("{address}",t)).then(e=>e.data);c.getState().setAll(a);let r=await (0,s.vV)(t,(0,o.HX)().map(e=>e.address));e({borrowableAmounts:r})}catch(e){console.error("Failed to fetch wallet balances:",e)}},updateSingleBalance(t,a,n){let i=!1,l=c.getState().all.map(e=>{var l;let o=null!==(l=t.originId)&&void 0!==l?l:t.chainId;if(Number(e.chainId)!==Number(o))return e;let s=e.balances.map(e=>{if(n?!e.address:e.symbol.toLowerCase()===t.symbol.toLowerCase()){let n=r.vz(a,t.decimals).toString();e.balance!==n&&(e.balance=n,i=!0)}return e});return{...e,balances:s}});i&&e({all:l})}}));t.Z=c}}]);