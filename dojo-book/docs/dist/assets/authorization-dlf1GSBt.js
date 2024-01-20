import{u as r,j as e}from"./index-m6NaWekR.js";const o=void 0;function n(i){const t={a:"a",blockquote:"blockquote",code:"code",div:"div",figure:"figure",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",span:"span",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h2,{id:"authorization",children:["Authorization",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authorization",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Authorization is crucial to a world, just like how authorization is crucial to any smart contract."}),`
`]}),`
`,e.jsxs(t.p,{children:["As discussed in the ",e.jsx(t.a,{href:"/world",children:"World"})," chapter, Autonomous Worlds (AWs) function as sovereign chains nested within a public blockchain. These Worlds are also open to the public. This structure allows anyone to enhance a World by deploying models or systems. However, this openness also introduces security considerations. Similar to Ethereum, interacting with a model's state within a System requires the appropriate authorization from the model owner."]}),`
`,e.jsxs(t.h3,{id:"auth-architecture",children:["Auth Architecture",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#auth-architecture",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Every time a ",e.jsx(t.code,{children:"set!"})," is called in a ",e.jsx(t.code,{children:"System"}),", the world checks if the ",e.jsx(t.code,{children:"System"})," has authorization to update the model state. Only when the ",e.jsx(t.code,{children:"System"})," possesses the necessary authorization, the ",e.jsx(t.code,{children:"set!"})," is executed. The following diagram illustrates the authorization architecture."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/dojo-auth.png",alt:"Authorization Architecture"})}),`
`,e.jsxs(t.h3,{id:"providing-authorization",children:["Providing Authorization",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#providing-authorization",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["The deployer of the model is its initial owner. A model owner is able to grant the ",e.jsx(t.code,{children:"owner"})," and ",e.jsx(t.code,{children:"writer"})," roles. Only owners can grant a System the ",e.jsx(t.code,{children:"writer"})," role which allows it to update the model."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"sozo"})," offers a convenient tool to authorize systems."]}),`
`,e.jsx(t.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(t.pre,{tabIndex:"0","data-language":"shell","data-theme":"github-dark-dimmed github-light",children:e.jsx(t.code,{"data-language":"shell","data-theme":"github-dark-dimmed github-light",style:{display:"grid"},children:e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#F69D50","--shiki-light":"#6F42C1"},children:"sozo"}),e.jsx(t.span,{style:{"--shiki-dark":"#96D0FF","--shiki-light":"#032F62"},children:" auth writer Moves spawn"})]})})})}),`
`,e.jsxs(t.p,{children:["This command will generate a ",e.jsx(t.code,{children:"writer"})," authorization for the ",e.jsx(t.code,{children:"spawn"})," system to update the ",e.jsx(t.code,{children:"Moves"})," model."]})]})}function a(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{a as default,o as frontmatter};
