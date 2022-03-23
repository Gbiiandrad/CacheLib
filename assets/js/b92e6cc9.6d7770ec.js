"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[3177],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return s},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return d}});var i=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},r.apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function m(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=i.createContext({}),d=function(e){return function(n){var a=p(n.components);return i.createElement(e,r({},n,{components:a}))}},p=function(e){var n=i.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=p(a),c=t,h=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return a?i.createElement(h,l(l({ref:n},s),{},{components:a})):i.createElement(h,l({ref:n},s))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},83729:function(e,n,a){a.r(n),a.d(n,{contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var i=a(87462),t=a(63366),r=(a(67294),a(3905)),o=["components"],l={id:"Configure_HybridCache",title:"Configure HybridCache"},m=void 0,s={unversionedId:"Cache_Library_User_Guides/Configure_HybridCache",id:"Cache_Library_User_Guides/Configure_HybridCache",isDocsHomePage:!1,title:"Configure HybridCache",description:"Enabling hybrid cache",source:"@site/docs/Cache_Library_User_Guides/Configure_HybridCache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Configure_HybridCache",permalink:"/docs/Cache_Library_User_Guides/Configure_HybridCache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Configure_HybridCache.md",tags:[],version:"current",frontMatter:{id:"Configure_HybridCache",title:"Configure HybridCache"},sidebar:"userguideSidebar",previous:{title:"HybridCache",permalink:"/docs/Cache_Library_User_Guides/HybridCache"},next:{title:"Chained items",permalink:"/docs/Cache_Library_User_Guides/chained_items"}},d=[{value:"Enabling hybrid cache",id:"enabling-hybrid-cache",children:[]},{value:"How to set Navy settings",id:"how-to-set-navy-settings",children:[{value:"1. Common Settings - Device",id:"1-common-settings---device",children:[]},{value:"2. Common Settings - Job Scheduler",id:"2-common-settings---job-scheduler",children:[]},{value:"3. Common Settings - Other",id:"3-common-settings---other",children:[]},{value:"4. Admission Policy Settings",id:"4-admission-policy-settings",children:[]},{value:"5. Engine Settings - Block Cache",id:"5-engine-settings---block-cache",children:[]},{value:"6. Engine Settings - BigHash",id:"6-engine-settings---bighash",children:[]}]},{value:"NavyConfig Data Output",id:"navyconfig-data-output",children:[]},{value:"Admission",id:"admission",children:[{value:"Random reject",id:"random-reject",children:[]},{value:"Reject first",id:"reject-first",children:[]},{value:"Dynamic reject (or rate throttle)",id:"dynamic-reject-or-rate-throttle",children:[]},{value:"ML-based admission policy",id:"ml-based-admission-policy",children:[]}]}],p={toc:d};function c(e){var n=e.components,a=(0,t.Z)(e,o);return(0,r.mdx)("wrapper",(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"enabling-hybrid-cache"},"Enabling hybrid cache"),(0,r.mdx)("p",null,"You can configure the Navy engine (flash cache engine when running in the HybridCache mode) through the ",(0,r.mdx)("inlineCode",{parentName:"p"},"NvmCache::Config::navyConfig")," in the Cache config by using APIs provided in ",(0,r.mdx)("inlineCode",{parentName:"p"},"navy::NavyConfig"),", for example:"),(0,r.mdx)("details",null," ",(0,r.mdx)("summary",null," Simple hybrid cache setup "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include "cachelib/allocator/CacheAllocator.h"\nLruAllocator::Config lruConfig;\n\nLruAllocator::NvmCacheConfig nvmConfig;\nnvmConfig.navyConfig.setBlockSize(4096);\nnvmConfig.navyConfig.setSimpleFile(FLAGS_navy_file_name,\n                                   FLAGS_dipper_device_size_mb * 1024 *1024 /*fileSize*/,\n                                   false /*truncateFile*/);\nnvmConfig.navyConfig.blockCache().setRegionSize(16 * 1024 * 1024);\n\nlruConfig.enableNvmCache(nvmConfig);\n'))),(0,r.mdx)("p",null,"All settings are optional, unless marked as ",(0,r.mdx)("strong",{parentName:"p"},'"Required"'),"."),(0,r.mdx)("h2",{id:"how-to-set-navy-settings"},"How to set Navy settings"),(0,r.mdx)("h3",{id:"1-common-settings---device"},"1. Common Settings - Device"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"}," navyConfig.setSimpleFile(fileName, fileSize, truncateFile /*optional*/);\n navyConfig.setBlockSize(blockSize);\n navyConfig.setDeviceMetadataSize(deviceMetadataSize);\n navyConfig.setDeviceMaxWriteSize(deviceMaxWriteSize);\n")),(0,r.mdx)("p",null," ",(0,r.mdx)("strong",{parentName:"p"},"OR")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.setRaidFiles(raidPaths, fileSize, truncateFile /*optional*/);\nnavyConfig.setBlockSize(blockSize);\nnavyConfig.setDeviceMetadataSize(deviceMetadataSize);\nnavyConfig.setDeviceMaxWriteSize(deviceMaxWriteSize);\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"(",(0,r.mdx)("strong",{parentName:"p"},"Required"),") ",(0,r.mdx)("inlineCode",{parentName:"p"},"file name"),"/ ",(0,r.mdx)("inlineCode",{parentName:"p"},"RAID paths")),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"file name")," (for simple file): File/device path with cache."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"RAID paths")," (for RAID files): Multiple files/devices to be used as a single cache. Note they must be identical in size."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"(",(0,r.mdx)("strong",{parentName:"p"},"Required"),") ",(0,r.mdx)("inlineCode",{parentName:"p"},"file size")),(0,r.mdx)("p",{parentName:"li"},"  Size (in bytes) of a single file/device with cache.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"truncate file")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"false")," (default)"),(0,r.mdx)("p",{parentName:"li"}," Default is ",(0,r.mdx)("inlineCode",{parentName:"p"},"false"),". If it is ",(0,r.mdx)("inlineCode",{parentName:"p"},"true"),", do ",(0,r.mdx)("inlineCode",{parentName:"p"},"ftruncate")," on the file to the requested size.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"block size")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"4096")," (default)"),(0,r.mdx)("p",{parentName:"li"},"Device block size in bytes (minimum IO granularity).")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"device metadata size")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"0")," (default)"),(0,r.mdx)("p",{parentName:"li"},"The size of the metadata partition on the Navy device.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"device max write size")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"1024 * 1024")," (default)"),(0,r.mdx)("p",{parentName:"li"},"This controls what\u2019s the biggest IO we can write to a device. After it is configured, any IO size above it will be split and issued sequentially."))),(0,r.mdx)("h3",{id:"2-common-settings---job-scheduler"},"2. Common Settings - Job Scheduler"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.setReaderAndWriterThreads(readerThreads, writerThreads);\nnavyConfig.setNavyReqOrderingShards(navyReqOrderingShards);\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"(",(0,r.mdx)("strong",{parentName:"p"},"Required"),") ",(0,r.mdx)("inlineCode",{parentName:"p"},"reader threads")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"32")," (default)"),(0,r.mdx)("p",{parentName:"li"},"Number of threads available for processing ",(0,r.mdx)("em",{parentName:"p"},"read")," requests.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"(",(0,r.mdx)("strong",{parentName:"p"},"Required"),") ",(0,r.mdx)("inlineCode",{parentName:"p"},"writer threads")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"32")," (default)"),(0,r.mdx)("p",{parentName:"li"},"Number of threads available for processing ",(0,r.mdx)("em",{parentName:"p"},"write")," requests and navy-internal operations."))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"request ordering shards")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"20")," (default)"),(0,r.mdx)("p",{parentName:"li"},"If it is non-zero, we will enable request ordering where we put requests into 2",(0,r.mdx)("sup",null,"N")," shards and ensure each shard executes requests in order."))),(0,r.mdx)("h3",{id:"3-common-settings---other"},"3. Common Settings - Other"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.setMaxConcurrentInserts(maxConcurrentInserts);\nnavyConfig.setMaxParcelMemoryMB(maxParcelMemoryMB);\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"max concurrent inserts")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"1'000'000")," (default)"),(0,r.mdx)("p",{parentName:"li"},"This controls how many insertions can happen in parallel. This is an effective way to avoid too many insertions backing up that drives  up the write latency (it can happen if the use case is too heavy on writes)."))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"max parcel memory")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"256(MB)")," (default)"),(0,r.mdx)("p",{parentName:"li"},"Total memory limit for in-flight parcels. Once this is reached, requests will be rejected until the parcel memory usage gets under the limit."))),(0,r.mdx)("h3",{id:"4-admission-policy-settings"},"4. Admission Policy Settings"),(0,r.mdx)("p",null,"There are 2 types of admission policy: ",(0,r.mdx)("strong",{parentName:"p"},'"random"')," and ",(0,r.mdx)("strong",{parentName:"p"},'"dynamic_random"'),". Users can choose one of them to enable."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},'"random" policy'),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.enableRandomAdmPolicy()\n         .setAdmProbability(admissionProbability);\n")),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"(",(0,r.mdx)("strong",{parentName:"p"},"Required"),") ",(0,r.mdx)("inlineCode",{parentName:"p"},"admission probability")),(0,r.mdx)("p",{parentName:"li"},"Acceptance probability. The value has to be in the range of ","[0, 1]",".")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},'"dynamic_random" policy'),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.enableDynamicRandomAdmPolicy()\n          .setAdmissionWriteRate(admissionWriteRate)\n          .setMaxWriteRate(maxWriteRate)\n          .setAdmissionSuffixLength(admissionSuffixLen)\n          .setAdmissionProbBaseSize(admissionProbBaseSize);\n")),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"(",(0,r.mdx)("strong",{parentName:"p"},"Required"),") ",(0,r.mdx)("inlineCode",{parentName:"p"},"admission write rate")," (bytes/s)"),(0,r.mdx)("p",{parentName:"li"},"Average ",(0,r.mdx)("strong",{parentName:"p"},"per day")," write rate to target. Default to be 0 if not being  explicitly set, meaning no rate limiting.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"max write rate"),"  = ",(0,r.mdx)("inlineCode",{parentName:"p"},"0 (bytes/s)")," (default)"),(0,r.mdx)("p",{parentName:"li"},"The max write rate to device in bytes/s to stay within the device limit of saturation to avoid latency increase. This ensures writing at any given second doesn't exceed this limit despite a possibility of writing more to stay within the target rate above.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"admission suffix length")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"0")," (default)"),(0,r.mdx)("p",{parentName:"li"},"Length of suffix in key to be ignored when hashing for probability.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"admission base size")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"0")," (default)"),(0,r.mdx)("p",{parentName:"li"},"Navy item base size of baseProbability calculation. Set this closer to the mean size of objects. The probability is scaled for other sizes by using this size as the pivot."))))),(0,r.mdx)("h3",{id:"5-engine-settings---block-cache"},"5. Engine Settings - Block Cache"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.blockCache()\n          .enableSegmentedFifo(sFifoSegmentRatio)\n          .enableHitsBasedReinsertion(hitsThreshold)\n          .setCleanRegions(cleanRegions)\n          .setRegionSize(regionSize)\n          .setDataChecksum(false);\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"eviction policy (choose one of the followings):"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"LRU: default policy")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"FIFO: once enabled, LRU will be disabled."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"}," navyConfig.blockCache().enableFifo();\n"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"segmented FIFO: once enabled, LRU and FIFO will be disabled."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"// sFifoSegmentRatio maps to segments in the order from least-important to most-important.\n//  e.g. {1, 1, 1} gives equal share in each of the 3 segments;\n//       {1, 2, 3} gives the 1/6th of the items in the first segment (P0 least important),\n//                 2/6th of the items in the second segment(P1),\n//                 and finally 3/6th of the items in the third segment (P2).\nnavyConfig.blockCache().enableSegmentedFifo(sFifoSegmentRatio);\n"))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"reinsertion policy (choose one of the followings but not both):"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"hits based"),(0,r.mdx)("p",{parentName:"li"},"If this is enabled, we will reinsert item that had been accessed more than the threshold since the last time it was written into block cache. This can better approximate a LRU than the region-based LRU. Typically users configure this with a region-granularity FIFO policy, or SFIFO policy.  It cannot be enabled when percentage based reinsertion policy has been enabled."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.blockCache().enableHitsBasedReinsertion(hitsThreshold);\n"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"percentage based"),(0,r.mdx)("p",{parentName:"li"},"This is used for testing where a certain fraction of evicted items(governed by the percentage) are always reinserted.The percentage value is between 0 and 100 for reinsertion. It cannot be enabled when hits based reinsertion policy has been enabled."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.blockCache().enablePctBasedReinsertion(pctThreshold);\n"))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"clean regions")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"in-memory buffer")),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"clean regions")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"1")," (default)"),(0,r.mdx)("p",{parentName:"li"},"How many regions do we reserve for future writes. Set this to be equivalent to your per-second write rate. It should ensure your writes will not have to retry to wait for a region reclamation to finish.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"in-memory buffer")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"2 * clean regions")," (default)"),(0,r.mdx)("p",{parentName:"li"},"All writes will first go into a region-sized buffer. Once the buffer is full, we will flush the region to the device. This allows BlockCache to internally pack items closer to each other (saves space) and also improves device read latency (regular sized write IOs means better read performance)."))),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"}," navyConfig.blockCache().setCleanRegions(cleanRegions);\n"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"region size")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"16777216 (16 Mb)")," (default)"),(0,r.mdx)("p",{parentName:"li"},"Region size in bytes.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"data checksum")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"true")," (default)"),(0,r.mdx)("p",{parentName:"li"},"This controls whether or not BlockCache will verify the item\u2019s value is correct (equivalent to its checksum). This should always be enabled, unless you\u2019re doing your own checksum logic at a higher layer."))),(0,r.mdx)("h3",{id:"6-engine-settings---bighash"},"6. Engine Settings - BigHash"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.bigHash()\n      .setSizePctAndMaxItemSize(bigHashSizePct, bigHashSmallItemMaxSize)\n      .setBucketSize(bigHashBucketSize)\n      .setBucketBfSize(bigHashBucketBfSize);\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"(",(0,r.mdx)("strong",{parentName:"p"},"Required"),") ",(0,r.mdx)("inlineCode",{parentName:"p"},"size percentage")),(0,r.mdx)("p",{parentName:"li"},"Percentage of space to reserve for BigHash. Set the percentage > 0 to enable BigHash. The remaining part is for BlockCache. The value has to be in the range of ","[0, 100]",". Default value is 0.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"(",(0,r.mdx)("strong",{parentName:"p"},"Required"),") ",(0,r.mdx)("inlineCode",{parentName:"p"},"small item max size")," (bytes)"),(0,r.mdx)("p",{parentName:"li"},"Maximum size of a small item to be stored in BigHash. Must be less than the bucket size.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"bucket size")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"4096 (bytes)")," (default)"),(0,r.mdx)("p",{parentName:"li"},"Bucket size in bytes.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"bucket bloom filter size")," = ",(0,r.mdx)("inlineCode",{parentName:"p"},"8")," (default)"),(0,r.mdx)("p",{parentName:"li"},"Bloom filter, bytes per bucket. Must be power of two. 0 means bloom filter will not be applied"))),(0,r.mdx)("h2",{id:"navyconfig-data-output"},"NavyConfig Data Output"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"NavyConfig")," provides a public function ",(0,r.mdx)("inlineCode",{parentName:"p"},"serialize()")," so that users can call to print out the configured Navy settings, e.g."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},'XLOG(INFO) << "Using the following navy config"\n          << folly::toPrettyJson(\n                       folly::toDynamic(navyConfig.serialize()));\n')),(0,r.mdx)("h2",{id:"admission"},"Admission"),(0,r.mdx)("p",null,"HybridCache can leverage an admission policy to control burn rate of the underlying nvm devices (e.g. SSD drives). Using a suitable admission policy for your workloads can often not only improve device longevitiy but also improve the cache hit rate. You can configure an admission policy like the following example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"auto policy = std::make_shared<cachelib::RejectFirstAP<LruAllocator>>(/* ... */);\n\ncacheConfig.setNvmCacheAdmissionPolicy(std::move(policy));\n")),(0,r.mdx)("h3",{id:"random-reject"},"Random reject"),(0,r.mdx)("p",null,"This policy just rejects ",(0,r.mdx)("inlineCode",{parentName:"p"},"P%")," of inserts, picking victims randomly. It lets user to reduce IOPS (and so increase flash life time)."),(0,r.mdx)("h3",{id:"reject-first"},"Reject first"),(0,r.mdx)("p",null,"This policy helps if flash cache contains lots of inserted and never accessed items. It maintains a running window (sketch) of keys that were accessed. If a key is inserted for the first time, the policy rejects it. Second inserts get into the cache. A sketch consists of several splits. As times goes, old splits are discarded. With larger split, rejection gets more accurate (less false accepts)."),(0,r.mdx)("h3",{id:"dynamic-reject-or-rate-throttle"},"Dynamic reject (or rate throttle)"),(0,r.mdx)("p",null,"This is a smart random reject policy. Users specify the maximum size of data that can be written to the device per day. Policy monitors ",(0,r.mdx)("em",{parentName:"p"},"write")," traffic and as it grows beyond the target (how much can be written up to this time of the day) it starts randomly reject inserts. It prefers to reject larger items to make hit ratio better. This behavior is tunable to allow users to control flash's wearing out."),(0,r.mdx)("h3",{id:"ml-based-admission-policy"},"ML-based admission policy"),(0,r.mdx)("p",null,"CacheLib also supports using ML based admission policy to make intelligent decision on what to admit into nvm devices. However, the use of ML policy requires careful analysis of cache workloads, and set up a training pipeline to train the model on a conintuous basis. Please try out the other admission policies first, and if you're not satisfied with them, then reach out directly to the CacheLib team to discuss using a ML-based policy."))}c.isMDXComponent=!0}}]);