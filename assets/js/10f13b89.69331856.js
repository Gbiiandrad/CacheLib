"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[7103],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return m},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return s}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),s=function(e){return function(t){var n=c(t.components);return a.createElement(e,r({},t,{components:n}))}},c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),p=i,h=s["".concat(o,".").concat(p)]||s[p]||u[p]||r;return n?a.createElement(h,d(d({ref:t},m),{},{components:n})):a.createElement(h,d({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94674:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return s}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],d={id:"Item_and_Handle",title:"Item and Handle"},l=void 0,m={unversionedId:"Cache_Library_User_Guides/Item_and_Handle",id:"Cache_Library_User_Guides/Item_and_Handle",isDocsHomePage:!1,title:"Item and Handle",description:"An item is the fundamental memory allocation backing an object in cache. Throughout this guide, we sometimes use item and allocation interchangeably. We use allocation when we discuss memory allocation or footprint. And we use item when we want to emphasize cached objects. An item is associated with a key and a byte array allocated by the allocate() method. We use the key to look up the item.",source:"@site/docs/Cache_Library_User_Guides/Item_and_Handle.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Item_and_Handle",permalink:"/docs/Cache_Library_User_Guides/Item_and_Handle",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Item_and_Handle.md",tags:[],version:"current",frontMatter:{id:"Item_and_Handle",title:"Item and Handle"},sidebar:"userguideSidebar",previous:{title:"FAQ",permalink:"/docs/Cache_Library_User_Guides/faq"},next:{title:"Eviction policy",permalink:"/docs/Cache_Library_User_Guides/eviction_policy"}},s=[{value:"Item memory overhead",id:"item-memory-overhead",children:[]},{value:"Handle lifetime",id:"handle-lifetime",children:[]},{value:"Item lifetime",id:"item-lifetime",children:[]}],c={toc:s};function p(e){var t=e.components,d=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,a.Z)({},c,d,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"An ",(0,r.mdx)("em",{parentName:"p"},"item")," is the fundamental memory allocation backing an object in cache. Throughout this guide, we sometimes use item and allocation interchangeably. We use ",(0,r.mdx)("em",{parentName:"p"},"allocation")," when we discuss memory allocation or footprint. And we use ",(0,r.mdx)("em",{parentName:"p"},"item")," when we want to emphasize cached objects. An item is associated with a key and a byte array allocated by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"allocate()")," method. We use the key to look up the item."),(0,r.mdx)("p",null,"There are 2 types of ",(0,r.mdx)("em",{parentName:"p"},"Handle"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"ReadHandle")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle"),"."),(0,r.mdx)("p",null,"A ",(0,r.mdx)("inlineCode",{parentName:"p"},"ReadHandle")," is similar to a ",(0,r.mdx)("inlineCode",{parentName:"p"},"std::shared_ptr<const Item>"),". Cachelib APIs like ",(0,r.mdx)("inlineCode",{parentName:"p"},"find()")," returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ReadHandle"),"."),(0,r.mdx)("p",null,"A ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle")," is similar to a ",(0,r.mdx)("inlineCode",{parentName:"p"},"std::shared_ptr<Item>"),". Cachelib APIs like ",(0,r.mdx)("inlineCode",{parentName:"p"},"allocate()"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"findToWrite()"),"and ",(0,r.mdx)("inlineCode",{parentName:"p"},"insertOrReplace()")," return a ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"ItemHandle")," is the old name of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle"),", which will be deprecated in the future."),(0,r.mdx)("p",null,"Because an item may be accessed concurrently, to ensure that the underlying memory backing the item is valid, use its ",(0,r.mdx)("inlineCode",{parentName:"p"},"ReadHandle")," to access it for read-only purpose and use ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle")," to access it for read & write purpose. This guarantees that during the lifetime of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ReadHandle")," / ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle"),", its item will never be evicted or reclaimed by any other thread."),(0,r.mdx)("p",null,"However, ",(0,r.mdx)("inlineCode",{parentName:"p"},"ReadHandle")," / ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle")," does NOT synchronize between read and write access to the item's memory. They're only used to indicate to CacheLib if an access is intended to be read-only or read/write. To properly synchronize between concurrent reads and writes to ",(0,r.mdx)("inlineCode",{parentName:"p"},"Item::getMemory()"),", user must implement their own synchronization on top. (e.g. use a SharedMutex to synchronize reads and writes)."),(0,r.mdx)("p",null,"To ensure consistency of data across HybridCache (Ram & NVM), we need to know whether user is performing a read or a write. For example, requesting a ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle")," via ",(0,r.mdx)("inlineCode",{parentName:"p"},"findToWrite()")," API is more expensive than requesting a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ReadHandle")," via ",(0,r.mdx)("inlineCode",{parentName:"p"},"find()")," API in the context of NvmCache as it incurs an invalidation call to this item's copy in NvmCache."),(0,r.mdx)("p",null,"An item's handle also provides future semantics offered in HybridCache. Calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"toSemiFuture()")," via a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ReadHandle")," or a ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle")," will return ",(0,r.mdx)("inlineCode",{parentName:"p"},"folly::SemiFuture<ReadHandleImpl>"),". For more information, see ",(0,r.mdx)("a",{parentName:"p",href:"HybridCache"},"Hybrid Cache"),"."),(0,r.mdx)("p",null,"For more details about ",(0,r.mdx)("inlineCode",{parentName:"p"},"ReadHandle")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle"),", see allocator/Handle.h."),(0,r.mdx)("h2",{id:"item-memory-overhead"},"Item memory overhead"),(0,r.mdx)("p",null,"When you call the ",(0,r.mdx)("inlineCode",{parentName:"p"},"allocate()")," method to allocate memory from cache for an item, cachelib allocates extra 31 bytes (overhead) for the item's metadata, which is used to manage the item's lifetime and other aspects. For example, cachelib stores a refcount, pointer hooks to the intrusive data structures for cache like hash table, LRU, creation time, and expiration time. Some of these are for internal book keeping; and others are accessible through the item's public API. For details, see allocator/CacheItem.h."),(0,r.mdx)("h2",{id:"handle-lifetime"},"Handle lifetime"),(0,r.mdx)("p",null,"Like a ",(0,r.mdx)("inlineCode",{parentName:"p"},"std::shared_ptr"),', a "handle" (i.e. ',(0,r.mdx)("inlineCode",{parentName:"p"},"ReadHandle")," / ",(0,r.mdx)("inlineCode",{parentName:"p"},"WriteHandle"),')\'s lifetime is independent from the other instances of "handle" that points to the same item. Holding a "handle" guarantees that the item it points to is alive at least as long as this "handle" instance is alive. The next section describes what ',(0,r.mdx)("em",{parentName:"p"},"at least"),' means. A "handle" is only ',(0,r.mdx)("em",{parentName:"p"},"movable"),"."),(0,r.mdx)("h2",{id:"item-lifetime"},"Item lifetime"),(0,r.mdx)("p",null,'Items in cache can be evicted to make space for other new items. For any item, having its outstanding "handle" prevents us from evicting the item or release its memory due to slab release.'),(0,r.mdx)("p",null,"An item ",(0,r.mdx)("inlineCode",{parentName:"p"},"x")," without outstanding handles is destroyed immediately when you explicitly call ",(0,r.mdx)("inlineCode",{parentName:"p"},"remove()")," to remove it or call ",(0,r.mdx)("inlineCode",{parentName:"p"},"insertOrReplace()")," to replace it with another item having the same key as ",(0,r.mdx)("inlineCode",{parentName:"p"},"x"),"'s. With outstanding handles, the item's memory is guaranteed to not be reclaimed until the last outstanding handle is dropped. It is similar to use a ",(0,r.mdx)("inlineCode",{parentName:"p"},"shared_ptr")," to ensure that the underlying object is not destroyed until the last reference goes out of scope."),(0,r.mdx)("p",null,"See the following state diagram for the state of a cachelib item when we're using the HybridCache setup (ram + flash).\n",(0,r.mdx)("img",{src:n(21885).Z})))}p.isMDXComponent=!0},21885:function(e,t,n){t.Z=n.p+"assets/images/item_state-5488f8e93bf662ba55fd6899a1b34414.png"}}]);