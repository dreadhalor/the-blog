"use strict";(self.webpackChunkthe_blog=self.webpackChunkthe_blog||[]).push([[3063],{5562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=t(3274),i=t(9128);const l={},r=void 0,a={permalink:"/the-blog/fallcrate",source:"@site/blog/fallcrate/index.md",title:"fallcrate",description:"1. Set up Next.js (v14 at time of writing)",date:"2024-04-14T03:41:29.000Z",tags:[],readingTime:37.535,hasTruncateMarker:!0,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Sidebar File Browser",permalink:"/the-blog/fallcrate-sidebar-browser"}},c={authorsImageUrls:[]},o=[{value:"1. Set up Next.js (v14 at time of writing)",id:"1-set-up-nextjs-v14-at-time-of-writing",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1-set-up-nextjs-v14-at-time-of-writing",children:"1. Set up Next.js (v14 at time of writing)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pnpm dlx create-next-app@latest"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"we use pnpm because I like it, but this can all be done with npm as well"}),"\n",(0,s.jsx)(n.li,{children:"app name: fallcrate-tutorial"}),"\n",(0,s.jsx)(n.li,{children:"use Typescript (because type-safety ftw)"}),"\n",(0,s.jsx)(n.li,{children:"use eslint (just because)"}),"\n",(0,s.jsx)(n.li,{children:"use TailwindCSS (because it's amazing)"}),"\n",(0,s.jsx)(n.li,{children:"use /src (because it nicely separates configs from code)"}),"\n",(0,s.jsx)(n.li,{children:"use app router (because it's cool)"}),"\n",(0,s.jsx)(n.li,{children:"use default alias (because I don't have a good reason to the contrary)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"sanity check"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pnpm dev"})}),"\n",(0,s.jsxs)(n.li,{children:["check ",(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})]}),"\n",(0,s.jsx)(n.li,{children:"it runs, yay!"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"replace homepage with, like, anything"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// src/app/page.tsx\nexport default function Home() {\n  return (\n    <main className='flex min-h-screen flex-col items-center justify-between p-24'>\n      If you can&apos;t tell the difference between a spoon and a ladle, then\n      you&apos;re fat\n    </main>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["side note: we use ",(0,s.jsx)(n.code,{children:"&apos;"})," for apostrophes because of sanitized inputs or something"]}),"\n",(0,s.jsx)(n.li,{children:"check that the changes are reflected - yay, they are"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9128:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(9474);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);