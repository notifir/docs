(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{386:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/integration/api/data-model",function(){return n(4857)}])},7845:function(e,t,n){"use strict";var i=n(5893);t.Z={github:"https://github.com/notifir",docsRepositoryBase:"https://github.com/notifir/docs",titleSuffix:" \u2013 Notifir",logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"Notifir"}),(0,i.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"In-app notifications made easy"})]}),head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,i.jsx)("meta",{name:"description",content:"Notifir: In-app notifications made easy"}),(0,i.jsx)("meta",{name:"og:description",content:"Notifir: In-app notifications made easy"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://notifir.github.io/docs/og.png"}),(0,i.jsx)("meta",{name:"twitter:site:domain",content:"https://notifir.github.io/docs"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://notifir.github.io/docs"}),(0,i.jsx)("meta",{name:"og:title",content:"Notifir: In-app notifications made easy"}),(0,i.jsx)("meta",{name:"og:image",content:"https://notifir.github.io/docs/og.png"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Notifir"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,i.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,i.jsxs)(i.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 Notifir"]}),unstable_faviconGlyph:"\ud83d\udd14"}},4857:function(e,t,n){"use strict";n.r(t);n(7294);var i=n(3905),a=n(7829),o=n.n(a),r=n(3805),s=n(7845);n(1127);function m(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=function(e){return(0,r.withSSG)(o()({filename:"data-model.mdx",route:"/integration/api/data-model",meta:{},pageMap:[{name:"advanced",children:[{name:"meta.json",meta:{}}],route:"/advanced"},{name:"deployment",route:"/deployment"},{name:"get-started",route:"/get-started"},{name:"index",route:"/"},{name:"integration",children:[{name:"api",children:[{name:"creating-notifications",route:"/integration/api/creating-notifications"},{name:"data-model",route:"/integration/api/data-model"},{name:"meta.json",meta:{"data-model":"Data Model","creating-notifications":"Creating Notifications"}}],route:"/integration/api"},{name:"authentication",route:"/integration/authentication"},{name:"component",children:[{name:"customization",route:"/integration/component/customization"},{name:"installation",route:"/integration/component/installation"},{name:"meta.json",meta:{installation:"Installation",customization:"Customization"}}],route:"/integration/component"},{name:"meta.json",meta:{authentication:"Authentication",api:"API",component:"Web Component"}}],route:"/integration"},{name:"meta.json",meta:{index:"Introduction","get-started":"Get Started",integration:"Integration",deployment:"Deployment",advanced:"Advanced"}}]},s.Z))(e)};function l(e){var t=e.components,n=m(e,["components"]);return(0,i.mdx)(c,Object.assign({components:t},n),(0,i.mdx)("h1",null,"Data Model"),(0,i.mdx)("p",null,"The core entity of Notifir is ",(0,i.mdx)("inlineCode",{parentName:"p"},"Notification"),". Notifications are sent to the users and shown in the widget. Users have access only to read their own notifications. Only ",(0,i.mdx)("inlineCode",{parentName:"p"},"system")," user can publish notification."),(0,i.mdx)("p",null,"In order to have possibility to separate notifications data into groups and introduce a kind of multi-tenancy, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Project")," concept has been introduced. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Project")," is a top-level abstraction, which encapsulates the access control keys."),(0,i.mdx)("p",null,"Notification itself is just a set of metadata. In the widget users can see the notification metadata mapped to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Template"),". ",(0,i.mdx)("inlineCode",{parentName:"p"},"Templates")," are stored in the DB next to the notifications and are linked to one of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Projects"),"."),(0,i.mdx)("img",{src:"/docs/03_data_model.png"}))}l.isMDXComponent=!0,t.default=l},1127:function(e,t,n){e.exports=n(3952)},3952:function(e,t,n){var i,a=(i=n(7294))&&"object"===typeof i&&"default"in i?i.default:i;const o={default:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"};e.exports=({children:e,type:t="default",emoji:n="\ud83d\udca1"})=>a.createElement("div",{className:`${o[t]} flex rounded-lg callout mt-6`},a.createElement("div",{className:"pl-3 pr-2 py-2 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},n),a.createElement("div",{className:"pr-4 py-2"},e))}},function(e){e.O(0,[511,774,888,179],(function(){return t=386,e(e.s=t);var t}));var t=e.O();_N_E=t}]);