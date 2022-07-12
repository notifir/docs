(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{5227:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/get-started",function(){return n(603)}])},7845:function(e,t,n){"use strict";var a=n(5893);t.Z={github:"https://github.com/notifir",docsRepositoryBase:"https://github.com/notifir/docs",titleSuffix:" \u2013 Notifir",logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"Notifir"}),(0,a.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"In-app notifications made easy"})]}),head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,a.jsx)("meta",{name:"description",content:"Notifir: In-app notifications made easy"}),(0,a.jsx)("meta",{name:"og:description",content:"Notifir: In-app notifications made easy"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://notifir.github.io/docs/og.png"}),(0,a.jsx)("meta",{name:"twitter:site:domain",content:"https://notifir.github.io/docs"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://notifir.github.io/docs"}),(0,a.jsx)("meta",{name:"og:title",content:"Notifir: In-app notifications made easy"}),(0,a.jsx)("meta",{name:"og:image",content:"https://notifir.github.io/docs/og.png"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Notifir"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,a.jsxs)(a.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 Notifir"]}),unstable_faviconGlyph:"\ud83d\udd14"}},603:function(e,t,n){"use strict";n.r(t);n(7294);var a=n(3905),o=n(7829),i=n.n(o),r=n(3805),l=n(7845),m=n(1127),p=n.n(m),s=n(1132),c=n.n(s);function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=function(e){return(0,r.withSSG)(i()({filename:"get-started.mdx",route:"/get-started",meta:{},pageMap:[{name:"advanced",children:[{name:"meta.json",meta:{}}],route:"/advanced"},{name:"get-started",route:"/get-started"},{name:"index",route:"/"},{name:"integration",children:[{name:"api",children:[{name:"authentication",route:"/integration/api/authentication"},{name:"creating-notifications",route:"/integration/api/creating-notifications"},{name:"data-model",route:"/integration/api/data-model"},{name:"meta.json",meta:{authentication:"Authentication","data-model":"Data Model","creating-notifications":"Creating Notifications"}}],route:"/integration/api"},{name:"component",children:[{name:"customization",route:"/integration/component/customization"},{name:"installation",route:"/integration/component/installation"},{name:"meta.json",meta:{installation:"Installation",customization:"Customization"}}],route:"/integration/component"},{name:"meta.json",meta:{api:"API",component:"Web Component"}}],route:"/integration"},{name:"meta.json",meta:{index:"Introduction","get-started":"Get Started",integration:"Integration",component:"Web Component",advanced:"Advanced"}}]},l.Z))(e)};function g(e){var t=e.components,n=d(e,["components"]);return(0,a.mdx)(u,Object.assign({components:t},n),(0,a.mdx)("h1",null,"Get Started"),(0,a.mdx)("h2",null,"Quick Start"),(0,a.mdx)("p",null,"Notifir has two main components:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"API (",(0,a.mdx)("a",{href:"https://github.com/notifir/notifications-api",parentName:"li"},"notifications-api"),")"),(0,a.mdx)("li",{parentName:"ul"},"Web component (",(0,a.mdx)("a",{href:"https://github.com/notifir/wc-notification-bell",parentName:"li"},"wc-notification-bell"),")")),(0,a.mdx)("p",null,"You can see how do they map together on the diagram below:"),(0,a.mdx)("p",null,(0,a.mdx)(c(),{parentName:"p",mdxType:"Bleed"},(0,a.mdx)("img",{src:"/docs/01_architecture.png",alt:"Architecture",parentName:"Bleed"}))),(0,a.mdx)("h2",null,"API"),(0,a.mdx)("p",null,"Notifications API provides ",(0,a.mdx)("a",{href:"https://graphql.org/",parentName:"p"},"GraphQL APIs")," for publishing and reading notifications. Service is written in NodeJS and uses ",(0,a.mdx)("a",{href:"https://www.graphile.org/postgraphile/",parentName:"p"},"Postgraphile"),", which automatically generates GraphQL API for the Postgresql database. The access rights for the notifications data are enforced on the DB level. Read more here."),(0,a.mdx)("p",null,"Setting up ",(0,a.mdx)("a",{href:"https://github.com/notifir/notifications-api",parentName:"p"},"notifications-api"),"."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Clone (or fork) ",(0,a.mdx)("a",{href:"https://github.com/notifir/notifications-api",parentName:"p"},"repository"),".")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"You need to run Postgres to store your notifications and make API work. For example, you can run it in a docker container:"))),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-shell",parentName:"pre"},"docker pull postgres\ndocker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres\n")),(0,a.mdx)(p(),{mdxType:"Callout"},(0,a.mdx)("p",{parentName:"Callout"},"You can connect to the existing database or run Postgres in another way, but please ensure that ",(0,a.mdx)("inlineCode",{parentName:"p"},"DB_*")," environment variables are correct in the ",(0,a.mdx)("inlineCode",{parentName:"p"},".env")," file.")),(0,a.mdx)("ol",{start:"3"},(0,a.mdx)("li",{parentName:"ol"},"Once you have Postgres running you need to apply DB-patches to create schema. You can also generate some test data using ",(0,a.mdx)("inlineCode",{parentName:"li"},"npx knex seed:run")," (optional).")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-shell",parentName:"pre"},"npx knex migrate:latest\nnpx knex seed:run\n")),(0,a.mdx)("p",null,"You can connect to the Postgres and check that the schema (and data) is there."),(0,a.mdx)("ol",{start:"4"},(0,a.mdx)("li",{parentName:"ol"},"You are good to go! Run ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn start")," to start or you can use ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn watch")," while developing locally.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-shell",parentName:"pre"},"yarn\nyarn watch\n")),(0,a.mdx)(p(),{mdxType:"Callout"},(0,a.mdx)("p",{parentName:"Callout"},"Once you have the API running, you can explore the GraphQL APIs using ",(0,a.mdx)("inlineCode",{parentName:"p"},"graphiql"),", which is enabled by default and served at ",(0,a.mdx)("a",{href:"https://localhost:3001/api/graphiql",parentName:"p"},"https://localhost:3001/api/graphiql"))),(0,a.mdx)("h2",null,"Web Component"),(0,a.mdx)("p",null,"Notification bell is a simple web component created using ",(0,a.mdx)("a",{href:"https://lit.dev",parentName:"p"},"Lit"),", which can be consumed by vanilla JS or any front-end framework. Read more here."),(0,a.mdx)("p",null,"Setting up ",(0,a.mdx)("a",{href:"https://github.com/notifir/wc-notification-bell",parentName:"p"},"wc-notification-bell"),"."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"(optional) Clone (or fork) ",(0,a.mdx)("a",{href:"https://github.com/notifir/wc-notification-bell",parentName:"p"},"repository"),".")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"(optional) Run ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn dev")," to start the demo page locally."))),(0,a.mdx)(p(),{mdxType:"Callout"},(0,a.mdx)("p",{parentName:"Callout"},"If you haven't changed the port configuration for API, demo page widget should automatically connect to the API.")),(0,a.mdx)("ol",{start:"3"},(0,a.mdx)("li",{parentName:"ol"},"Integrate widget into your web application.")),(0,a.mdx)("p",null,"You can install notification web component to your project using NPM:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-bash",parentName:"pre"},"npm i wc-notification-bell\n")),(0,a.mdx)("p",null,"You can integrate it either into your HTML page or some component based on the framework you use."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-html",parentName:"pre"},'\x3c!-- cdn --\x3e\n<script\n  type="module"\n  src="https://cdn.jsdelivr.net/npm/wc-notification-bell@latest"\n><\/script>\n\n<notification-bell mock></notification-bell>\n')),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-ts",parentName:"pre"},"import 'wc-notification-bell'\n\n...\n\n<notification-bell mock></notification-bell>\n")),(0,a.mdx)(p(),{mdxType:"Callout"},(0,a.mdx)("p",{parentName:"Callout"},"You can find the available configuration arguments in the Web Component section.")),(0,a.mdx)("hr",null),(0,a.mdx)("span",{id:"sidebar-and-anchor-links"}))}g.isMDXComponent=!0,t.default=g},1132:function(e,t,n){e.exports=n(3045)},1127:function(e,t,n){e.exports=n(3952)},3045:function(e,t,n){function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var o=a(n(7294)),i=a(n(4184));e.exports=({full:e,children:t})=>o.createElement("div",{className:i("bleed relative mt-6 -mx-6 md:-mx-8 2xl:-mx-24",{full:e})},t)},3952:function(e,t,n){var a,o=(a=n(7294))&&"object"===typeof a&&"default"in a?a.default:a;const i={default:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"};e.exports=({children:e,type:t="default",emoji:n="\ud83d\udca1"})=>o.createElement("div",{className:`${i[t]} flex rounded-lg callout mt-6`},o.createElement("div",{className:"pl-3 pr-2 py-2 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},n),o.createElement("div",{className:"pr-4 py-2"},e))}},function(e){e.O(0,[511,774,888,179],(function(){return t=5227,e(e.s=t);var t}));var t=e.O();_N_E=t}]);