(self.webpackChunk=self.webpackChunk||[]).push([[9962],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11680:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>d,toc:()=>c,default:()=>p});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s=["components"],i={id:"learn-randomness",title:"Randomness",sidebar_label:"Randomness"},l=void 0,d={unversionedId:"learn-randomness",id:"learn-randomness",isDocsHomePage:!1,title:"Randomness",description:"Randomness in Proof of Stake blockchains is important for a fair and unpredictable distribution of",source:"@site/../docs/learn-randomness.md",sourceDirName:".",slug:"/learn-randomness",permalink:"/zh-CN/docs/learn-randomness",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-randomness.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1626231393,formattedLastUpdatedAt:"2021/7/14",frontMatter:{id:"learn-randomness",title:"Randomness",sidebar_label:"Randomness"},sidebar:"docs",previous:{title:"Availability and Validity",permalink:"/zh-CN/docs/learn-availability"},next:{title:"Cross-chain Message Passing (XCMP)",permalink:"/zh-CN/docs/learn-crosschain"}},c=[{value:"VRF",id:"vrf",children:[]},{value:"RANDAO",id:"randao",children:[{value:"VDFs",id:"vdfs",children:[]}]},{value:"Resources",id:"resources",children:[]}],h={toc:c};function p(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Randomness in Proof of Stake blockchains is important for a fair and unpredictable distribution of\nvalidator responsibilities. Computers are bad at random numbers because they are deterministic\ndevices (the same input always produces the same output). What people usually call random numbers on\na computer, such as in a gaming application, are actually ",(0,o.kt)("em",{parentName:"p"},"pseudo-random")," - that is, they depend on\na sufficiently random ",(0,o.kt)("em",{parentName:"p"},"seed")," provided by the user or another type of ",(0,o.kt)("em",{parentName:"p"},"oracle"),", like a\n",(0,o.kt)("a",{parentName:"p",href:"https://www.random.org/randomness/"},"weather station for atmospheric noise"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://mdpi.altmetric.com/details/47574324"},"your heart rate"),", or even\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lavarand"},"lava lamps"),", from which it can generate a series of\nseemingly-random numbers. But given the same seed, the same sequence will always be generated."),(0,o.kt)("p",null,"These inputs will vary based on time and space, however, and it would be impossible to get the same\nresult into all the nodes of a particular blockchain around the world. If nodes get different inputs\non which to build blocks, forks happen. Obviously, real-world entropy is not suitable for use as a\nseed for blockchain randomness."),(0,o.kt)("p",null,"There are two main approaches to blockchain randomness in production today: RANDAO and VRF. Polkadot\nuses VRF."),(0,o.kt)("h2",{id:"vrf"},"VRF"),(0,o.kt)("p",null,"A verifiable random function is a mathematical operation that takes some input and produces a random\nnumber along with a proof of authenticity that this random number was generated by the submitter.\nThe proof can be verified by any challenger to ensure the random number generation is valid."),(0,o.kt)("p",null,"The VRF used in Polkadot is roughly the same as the one used in Ouroboros Praos. Ouroboros\nrandomness is secure for block production and works well for BABE. Where they differ is that\nPolkadot's VRF does not depend on a central clock (the problem becomes - whose central clock?),\nrather, it depends on its own past results to determine present and future results, and it uses slot\nnumbers as a clock emulator, estimating time."),(0,o.kt)("p",null,"Here's how it works in detail:"),(0,o.kt)("p",null,"Slots are discrete units of time six seconds in length. Each slot can contain a block, but may not.\nSlots make up epochs - on Polkadot, 2400 slots make one epoch, which makes epochs four hours long."),(0,o.kt)("p",null,'In every slot, each validator "rolls a die". They execute a function (the VRF) that takes as input\nthe following:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'The "secret key",')," a key specifically made for these die rolls."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"An epoch randomness value,")," which is the hash of VRF values from the blocks in the epoch before\nlast (N-2), so past randomness has an effect on the current pending randomness (N)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"The slot number."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(17047).Z})),(0,o.kt)("p",null,"The output is two values: a ",(0,o.kt)("inlineCode",{parentName:"p"},"RESULT")," (the random value) and a ",(0,o.kt)("inlineCode",{parentName:"p"},"PROOF")," (a proof that the random value\nwas generated correctly)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RESULT")," is then compared to a ",(0,o.kt)("em",{parentName:"p"},"threshold")," defined in the implementation of the protocol\n(specifically, in the Polkadot Host). If the value is less than the threshold, then the validator\nwho rolled this number is a viable block production candidate for that slot. The validator then\nattempts to create a block and submits this block into the network along with the previously\nobtained ",(0,o.kt)("inlineCode",{parentName:"p"},"PROOF")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RESULT"),"."),(0,o.kt)("p",null,"The fishermen - nodes watching the network for collator and validator wrongdoing - will be verifying\nRelay Chain blocks. Since an illegal roll will generate an illegal block, and since fishermen will\nhave access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RESULT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PROOF")," in every block produced by a validator, it'll be easy for\nthem to automatically report cheating validators."),(0,o.kt)("p",null,"To summarize: under VRF, every validator rolls a number for themselves, checks it against a\nthreshold, and produces a block if the random roll is under that threshold. Fishermen who observe\nthe network and report bad behavior verify the validity of these rolls post hoc, reporting any\ncheaters to the system (e.g. someone pretends to be a block producer despite rolling a number over\nthe threshold)."),(0,o.kt)("p",null,"The astute reader will notice that due to the way this works, some slots may have no validators as\nblock producer candidates because all validator candidates rolled too high and missed the threshold.\nWe clarify how we resolve this issue and make sure that Polkadot block times remain near\nconstant-time in the ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-consensus"},"wiki page on consensus"),"."),(0,o.kt)("h2",{id:"randao"},"RANDAO"),(0,o.kt)("p",null,"An alternative method for getting randomness on chain is the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/randao/randao"},"RANDAO")," method from Ethereum. RANDAO requires each validator to\nprepare by performing many thousands of hashes on some seed. Validators then publish the final hash\nduring a round and the random number is derived from every participant's entry into the game. As\nlong as one honest validator participates, the randomness is considered secure (non-economically\nviable to attack)."),(0,o.kt)("p",null,"RANDAO is optionally augmented with VDF."),(0,o.kt)("h3",{id:"vdfs"},"VDFs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vdfresearch.org/"},"Verifiable Delay Functions")," are computations that take a prescribed\nduration of time to complete, even on parallel computers. They produce unique output that can be\nindependently and efficiently verified in a public setting. By feeding the result of RANDAO into a\nVDF, a delay is introduced that renders any attacker's attempt at influencing the current randomness\nobsolete."),(0,o.kt)("p",null,"VDFs will likely be implemented through ASIC devices that need to be run separately from the other\ntypes of nodes. Although only one is enough to keep the system secure, and they will be open source\nand distributed at nearly no charge, running them is neither cheap nor incentivized, producing\nunneccessary friction for users of the blockchains opting for this method."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://w3f-research.readthedocs.io/en/latest/polkadot/block-production/Babe.html"},"Polkadot's research on blockchain randomness and sortition")," -\ncontains reasoning for choices made along with proofs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/issues/57"},"Discussion on Randomness used in Polkadot")," - W3F\nresearchers discuss the randomness in Polkadot and when it is usable and under which assumptions.")))}p.isMDXComponent=!0},17047:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/VRF_babe-12768d3392ba939b5f4c4955556d12c2.png"}}]);