"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[3464],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return c},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),m=function(e){return function(t){var a=d(t.components);return n.createElement(e,i({},t,{components:a}))}},d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=o,p=m["".concat(r,".").concat(u)]||m[u]||h[u]||i;return a?n.createElement(p,l(l({ref:t},c),{},{components:a})):n.createElement(p,l({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},45576:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],l={id:"pool_rebalance_strategy",title:"Pool rebalance strategy"},s=void 0,c={unversionedId:"Cache_Library_User_Guides/pool_rebalance_strategy",id:"Cache_Library_User_Guides/pool_rebalance_strategy",isDocsHomePage:!1,title:"Pool rebalance strategy",description:"When do you need pool rebalancing?",source:"@site/docs/Cache_Library_User_Guides/pool_rebalance_strategy.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/pool_rebalance_strategy",permalink:"/docs/Cache_Library_User_Guides/pool_rebalance_strategy",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/pool_rebalance_strategy.md",tags:[],version:"current",frontMatter:{id:"pool_rebalance_strategy",title:"Pool rebalance strategy"},sidebar:"userguideSidebar",previous:{title:"Oom protection",permalink:"/docs/Cache_Library_User_Guides/oom_protection"},next:{title:"Automatic pool resizing",permalink:"/docs/Cache_Library_User_Guides/automatic_pool_resizing"}},m=[{value:"When do you need pool rebalancing?",id:"when-do-you-need-pool-rebalancing",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Enabling pool rebalancing",id:"enabling-pool-rebalancing",children:[{value:"Picking a strategy",id:"picking-a-strategy",children:[]},{value:"Writing your own strategy",id:"writing-your-own-strategy",children:[]}]}],d={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.mdx)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"when-do-you-need-pool-rebalancing"},"When do you need pool rebalancing?"),(0,i.mdx)("p",null,"If your cachelib use case always allocates objects of a single size, then\nrebalancing is almost always not required for you. Rebalancing of cache\nbecomes ",(0,i.mdx)("em",{parentName:"p"},"important only when you store variable sized objects")," in cache and\nyour workload's footprint of access across these objects can potentially\nchange over time. Often when you cache objects of variable size, the\ndistribution of ",(0,i.mdx)("inlineCode",{parentName:"p"},"find()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"allocate()")," across object sizes would vary over\ntime. This leads to poor fragmentation in the cache memory footprint. For\nexample, imagine you had a cache of 30 GB and store objects of size 100 bytes,\n500 bytes, and 1,000 bytes, each occupying 10 GB when warmed up. When your\napplication workload changes over time, the optimal sizes for these objects\ncould vary as well requiring more memory for one vs. other. With pool\nrebalancing, this kind of workload change would usually result in metrics like\neviction age and hit ratios being sub-optimal over time."),(0,i.mdx)("p",null,"Cachelib offers several rebalancing strategies to offset this behavior by\nasking the cache to restructure the underlying memory allocated among objects\nof different sizes."),(0,i.mdx)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.mdx)("p",null,"Internally, cachelib divides up memory into slabs and allocates slabs across\nobjects of various sizes. When pool rebalancing is enabled, cachelib evicts\nobjects of one size in favor of other and moves the backing slabs to the other\nobjects to enable caching more of them. Cachelib can do this automatically and\nperiodically. However, you will have to pick a strategy that matters to you\nand configure how often the rebalancing happens."),(0,i.mdx)("p",null,"Rebalancing is an asynchronous operation and does not impact the latencies of\nother cachelib operations like ",(0,i.mdx)("inlineCode",{parentName:"p"},"find()"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"insertOrReplace()"),", or ",(0,i.mdx)("inlineCode",{parentName:"p"},"allocate()"),".\nRebalancing moves memory at the rate of 4 MB for every interval that you\nconfigure if you would like to estimate a good rate."),(0,i.mdx)("h2",{id:"enabling-pool-rebalancing"},"Enabling pool rebalancing"),(0,i.mdx)("p",null,"To enable pool rebalancing, specify these two parameters:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("strong",{parentName:"li"},"Strategy")," for re-evaluating metrics about your cache and figuring out a rebalancing action"),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("strong",{parentName:"li"},"Interval")," of executing the rebalancing")),(0,i.mdx)("p",null,"For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-cpp"},"auto rebalanceStrategy =\n  std::make_shared<cachelib::LruTailAgeStrategy>(rebalanceConfig);\n\nconfig.enablePoolRebalancing(\n  rebalanceStrategy,\n  std::chrono::seconds(kRebalanceIntervalSecs)\n);\n")),(0,i.mdx)("h3",{id:"picking-a-strategy"},"Picking a strategy"),(0,i.mdx)("p",null,"Cachelib offers a few pre-package strategies for rebalancing that you can pick\nfrom. They differ by what they try to optimize for based on traditional wisdom\nof large scale caches like social graph caches and general purpose look-aside\nkey value caches. These are good defaults to start with, but you can also come\nup with your own implementation if you have other goals."),(0,i.mdx)("h4",{id:"lru-tailage"},"Lru TailAge"),(0,i.mdx)("p",null,"LruTailAge is a fair policy that ensures that objects of different sizes get the same eviction age in cache.  For example, in steady state for your cache, you could have 100 byte objects getting 1 hr lifetime vs 1000 byte objects getting 30 min lifetime. This strategy tries to make the eviction age for various sizes similar. You can configure the following parameters(LruTailAgeStrategy::Config) (whose default values are pretty good to begin with):"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"tailAgeDiffRatio"),"\nThis defines how tight the tail age of various object sizes you want them to be. Setting it to 0.1 means that you don't want the min and max age to differ by more than 10%.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"minTailAgeDifference"),"\nThis specifies a threshold of how big the actual diff ratio should be to warrant a rebalancing. For example, your min and max might be more than 10% off, but the real difference is insignificant.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"minSlabs"),"\nThis specifies the minimum amount of memory in slabs that specific object size can not go below while rebalancing. Keep in mind that this is specified in slabs and not in bytes.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"numSlabsFreeMem"),"\nWhen you specify rebalancing under this mode, cachlib aggressively moves memory from object sizes that have a lot of free memory. This specifies the threshold for triggering that behavior.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"slabProjectionLength"),"\nThis lets you estimate the min and max by picking a projected eviction age instead of the real eviction age. This can sometimes let you get better results."))),(0,i.mdx)("p",null,"For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-cpp"},"cachelib::LruTailAgeStrategy::Config cfg(ratio, kLruTailAgeStrategyMinSlabs);\ncfg.slabProjectionLength = 0; // dont project or estimate tail age\ncfg.numSlabsFreeMem = 10;     // ok to have ~40 MB free memory in unused allocations\nauto rebalanceStrategy = std::make_shared<cachelib::LruTailAgeStrategy>(cfg);\n\n// every 5 seconds, re-evaluate the eviction ages and rebalance the cache.\nconfig.enablePoolRebalancing(std::move(rebalanceStrategy), std::chrono::seconds(5));\n")),(0,i.mdx)("h4",{id:"hit-based"},"Hit based"),(0,i.mdx)("p",null,"HitBased approach tries to optimize the overall hit ratio rather than ensuring a fairness in the cache eviction age. This should result in a relatively higher hit ratio. However, it might potentially make your cache contain more of objects that give hits vs. objects that are expensive to recompute. For example, the cost of miss on objects is not uniform. To control the downsides of such implications, cachelib offers these parameters(HitsPerSlabStrategy::Config). Most of these are similar to the LruTailAge parameters, however, their semantics could slightly differ in the following ways:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"minDiff"),"\nLike tailAgeDiffRatio, this controls the minimum improvement that should trigger a rebalancing."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"minLruTailAge"),"\nWhen using hit based rebalancing, if you want to ensure some level of fairness by guaranteeing some eviction age, you can configure it through this parameter.")),(0,i.mdx)("h4",{id:"marginal-hits"},"Marginal hits"),(0,i.mdx)("p",null,"This strategy ensures that the marginal hits (estimated by the hits in the tail part of LRU) across different object sizes are similar. Unlike hit based strategy which counts for historical count of hits across the entire cache, this tracks which objects could marginally benefit from getting more memory. To enable this,  you need to use the MM2Q eviction policy and enable tail hits tracking (",(0,i.mdx)("inlineCode",{parentName:"p"},"Allocator::Config::enableTailHitsTracking()"),")."),(0,i.mdx)("h3",{id:"writing-your-own-strategy"},"Writing your own strategy"),(0,i.mdx)("p",null,"In addition, if you have some application specific context on how you can improve your cache, you can implement your own strategy and pass it to cachelib for rebalancing. Your rebalancing strategy will have to extend the type ",(0,i.mdx)("inlineCode",{parentName:"p"},"RebalanceStrategy")," and implement the following two methods that define where to take memory from and where to give more memory to:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-cpp"},"virtual RebalanceContext pickVictimAndReceiverImpl(\n  const CacheBase& /*cache*/,\n  PoolId /*pid*/\n) {\n  return {};\n}\n\nvirtual ClassId pickVictimImpl(\n  const CacheBase& /*cache*/,\n  PoolId /*pid*/\n) {\n  return Slab::kInvalidClassId;\n}\n")))}u.isMDXComponent=!0}}]);