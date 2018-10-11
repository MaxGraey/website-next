(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docs/langs/en-US/development/roadmap.mdx":function(e,a,t){"use strict";t.r(a);var n=t("./node_modules/react/index.js"),m=t.n(n),o=t("./node_modules/@mdx-js/tag/dist/index.js");function p(e,a){if(null==e)return{};var t,n,m=function(e,a){if(null==e)return{};var t,n,m={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(m[t]=e[t]);return m}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}a.default=function(e){var a=e.components;p(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:a},m.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"status--roadmap"}},"Status / Roadmap"),m.a.createElement(o.MDXTag,{name:"p",components:a},"Current state of development is tracked in ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/AssemblyScript/assemblyscript/projects"}},"GitHub projects"),"."),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"high-level-status"}},"High level status"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Most of TypeScript's AOT-compatible syntax is supported"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Manual memory management is in but GC remains to do"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Classes are still wonky when it comes to the details"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Standard library is very basic and needs a lot of work"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"No exception support yet, waiting for ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/WebAssembly/exception-handling"}},"WebAssembly/exception-handling")," to land"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"We need more tests (pretty sure this will remain here)")),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"high-level-goals"}},"High level goals"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul",props:{className:"task-list-item"}},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"input",components:a,parentName:"p",props:{type:"checkbox",checked:!1,disabled:!0}})," ","Get a memory manager and GC combo up and running"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul",props:{className:"task-list-item"}},m.a.createElement(o.MDXTag,{name:"input",components:a,parentName:"li",props:{type:"checkbox",checked:!0,disabled:!0}})," ","Memory manager"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul",props:{className:"task-list-item"}},m.a.createElement(o.MDXTag,{name:"input",components:a,parentName:"li",props:{type:"checkbox",checked:!1,disabled:!0}})," ","GC"))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul",props:{className:"task-list-item"}},m.a.createElement(o.MDXTag,{name:"input",components:a,parentName:"li",props:{type:"checkbox",checked:!1,disabled:!0}})," ",'Get a standard library up that "just works" (where AOT-compatible)'),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul",props:{className:"task-list-item"}},m.a.createElement(o.MDXTag,{name:"input",components:a,parentName:"li",props:{type:"checkbox",checked:!1,disabled:!0}})," ","Improve linking, e.g. with C, based on what's supported by common tools"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul",props:{className:"task-list-item"}},m.a.createElement(o.MDXTag,{name:"input",components:a,parentName:"li",props:{type:"checkbox",checked:!1,disabled:!0}})," ","Compile the AssemblyScript compiler to WebAssembly using itself"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul",props:{className:"task-list-item"}},m.a.createElement(o.MDXTag,{name:"input",components:a,parentName:"li",props:{type:"checkbox",checked:!1,disabled:!0}})," ","Provide tools to automatically generate glue code and definitions")),m.a.createElement(o.MDXTag,{name:"p",components:a},"And, of course, keep up with the state of WebAssembly, most notably at this point:"),m.a.createElement(o.MDXTag,{name:"table",components:a},m.a.createElement(o.MDXTag,{name:"thead",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Proposal"),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Phase"),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Status"))),m.a.createElement(o.MDXTag,{name:"tbody",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/WebAssembly/sign-extension-ops"}},"Sign Extension Operations")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"implementation"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"--feature sign-extension")),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/WebAssembly/mutable-global"}},"Mutable Globals")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"implementation"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"--feature mutable-global")),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/WebAssembly/nontrapping-float-to-int-conversions"}},"Non-trapping float-to-int Conversions")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"implementation"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/WebAssembly/reference-types"}},"Reference Types")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"implementation"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/WebAssembly/multi-value"}},"Multi-value")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"implementation"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/WebAssembly/bulk-memory-operations"}},"Bulk Memory Operations")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"proposal"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/WebAssembly/exception-handling"}},"Exception handling")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"proposal"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/WebAssembly/host-bindings"}},"Host Bindings")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"proposal"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/WebAssembly/threads"}},"Threads")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"proposal"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/WebAssembly/gc"}},"GC")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"proposal"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}})))))}}}]);