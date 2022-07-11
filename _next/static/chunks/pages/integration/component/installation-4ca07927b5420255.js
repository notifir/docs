(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{1921:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/integration/component/installation",function(){return n(5169)}])},7845:function(e,t,n){"use strict";var a=n(5893);t.Z={github:"https://github.com/notifir",docsRepositoryBase:"https://github.com/notifir/docs",titleSuffix:" \u2013 Notifir",logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"Notifir"}),(0,a.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"In-app notifications made easy"})]}),head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,a.jsx)("meta",{name:"description",content:"Nextra: the Next.js site builder"}),(0,a.jsx)("meta",{name:"og:description",content:"Nextra: the Next.js site builder"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://nextra.vercel.app/og.png"}),(0,a.jsx)("meta",{name:"twitter:site:domain",content:"nextra.vercel.app"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://nextra.vercel.app"}),(0,a.jsx)("meta",{name:"og:title",content:"Nextra: Next.js static site generator"}),(0,a.jsx)("meta",{name:"og:image",content:"https://nextra.vercel.app/og.png"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Nextra"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,a.jsxs)(a.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 Notifir"]}),unstable_faviconGlyph:"\ud83d\udd14"}},5169:function(e,t,n){"use strict";n.r(t);n(7294);var a=n(3905),i=n(7829),o=n.n(i),r=n(3805),m=n(7845);n(5675);function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=function(e){return(0,r.withSSG)(o()({filename:"installation.mdx",route:"/integration/component/installation",meta:{},pageMap:[{name:"advanced",children:[{name:"meta.json",meta:{}}],route:"/advanced"},{name:"get-started",route:"/get-started"},{name:"index",route:"/"},{name:"integration",children:[{name:"api",children:[{name:"authentication",route:"/integration/api/authentication"},{name:"creating-notifications",route:"/integration/api/creating-notifications"},{name:"data-model",route:"/integration/api/data-model"},{name:"meta.json",meta:{authentication:"Authentication","data-model":"Data Model","creating-notifications":"Creating Notifications"}}],route:"/integration/api"},{name:"component",children:[{name:"customization",route:"/integration/component/customization"},{name:"installation",route:"/integration/component/installation"},{name:"meta.json",meta:{installation:"Installation",customization:"Customization"}}],route:"/integration/component"},{name:"meta.json",meta:{api:"API",component:"Web Component"}}],route:"/integration"},{name:"meta.json",meta:{index:"Introduction","get-started":"Get Started",integration:"Integration",component:"Web Component",advanced:"Advanced"}}]},m.Z))(e)};function p(e){var t=e.components,n=l(e,["components"]);return(0,a.mdx)(s,Object.assign({components:t},n),(0,a.mdx)("h1",null,"Installation"),(0,a.mdx)("p",null,"You can install ",(0,a.mdx)("inlineCode",{parentName:"p"},"wc-notification-bell")," component in different ways depending on your technology stack."),(0,a.mdx)("h2",null,"Using ",(0,a.mdx)("inlineCode",{parentName:"h2"},"script")," tag"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-html",parentName:"pre"},'<script\n  type="module"\n  src="https://cdn.jsdelivr.net/npm/wc-notification-bell@latest"\n/>\n\n...\n\n<notification-bell\n  apiUrl="https://t-notifications-api.herokuapp.com/api/graphql"\n  userKey="723d42f66c080b02ce346ba59bd5b9ef"\n/>\n')),(0,a.mdx)("h2",null,"Using ",(0,a.mdx)("inlineCode",{parentName:"h2"},"npm")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-shell",parentName:"pre"},"npm install wc-notification-bell --save\n")),(0,a.mdx)("p",null,"And then you need to import the module before you can use it in your html/jsx/template/whatever:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-js",parentName:"pre"},'import "wc-menu-button";\n\n...\n\n<notification-bell mock />\n')),(0,a.mdx)("h2",null,"Configuration Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{align:"left",parentName:"tr"},"Parameter"),(0,a.mdx)("th",{align:"center",parentName:"tr"},"Type"),(0,a.mdx)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{align:"left",parentName:"tr"},"mock"),(0,a.mdx)("td",{align:"center",parentName:"tr"},"boolean"),(0,a.mdx)("td",{align:"left",parentName:"tr"},"Allows to play with widget without having API run (default: ",(0,a.mdx)("inlineCode",{parentName:"td"},"false"),")")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{align:"left",parentName:"tr"},"apiUrl"),(0,a.mdx)("td",{align:"center",parentName:"tr"},"string"),(0,a.mdx)("td",{align:"left",parentName:"tr"},"The URL of the Notifications API (GraphQL) to fetch notifications")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{align:"left",parentName:"tr"},"userKey"),(0,a.mdx)("td",{align:"center",parentName:"tr"},"string"),(0,a.mdx)("td",{align:"left",parentName:"tr"},"The user token, which is generated using the API secret")))),(0,a.mdx)("h2",null,"Browser Support"),(0,a.mdx)("p",null,"This web component uses ",(0,a.mdx)("a",{href:"https://caniuse.com/#feat=template",parentName:"p"},"HTML templates"),", ",(0,a.mdx)("a",{href:"https://caniuse.com/#feat=shadowdomv1",parentName:"p"},"the shadow DOM")," and ",(0,a.mdx)("a",{href:"https://caniuse.com/#feat=custom-elementsv1",parentName:"p"},"custom elements"),". If you need to polyfill for any of these standards then take a look at the ",(0,a.mdx)("a",{href:"https://www.webcomponents.org/polyfills",parentName:"p"},"web components polyfill"),"."))}p.isMDXComponent=!0,t.default=p}},function(e){e.O(0,[58,774,888,179],(function(){return t=1921,e(e.s=t);var t}));var t=e.O();_N_E=t}]);