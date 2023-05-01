var y=Object.defineProperty;var x=(e,t,s)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var C=(e,t,s)=>(x(e,typeof t!="symbol"?t+"":t,s),s);const{Mark:L}=Statamic.$bard.tiptap.core,w=L.create({name:"btsSpan",parseHTML(){return[{tag:"span[data-bts-style]"}]},renderHTML({HTMLAttributes:e}){return["span",e,0]},addCommands(){return{btsToggleSpan:e=>({commands:t})=>t.toggleMark(this.name,e)}}}),{Node:$}=Statamic.$bard.tiptap.core,k=$.create({name:"btsDiv",content:"block+",group:"root",defining:!1,parseHTML(){return[{tag:"div[data-bts-style]"}]},renderHTML({HTMLAttributes:e}){return["div",{class:"bard-content",...e},0]},addCommands(){return{btsToggleDiv:e=>({editor:t,commands:s})=>t.isActive(this.name,e)?s.lift(this.name):t.isActive(this.name)?s.updateAttributes(this.name,e):s.wrapIn(this.name,e)}}}),{Extension:A}=Statamic.$bard.tiptap.core,T=A.create({name:"btsCore",addOptions(){return{bard:{},attr:null,styleTypes:[]}},addGlobalAttributes(){const{attr:e,styleTypes:t}=this.options;return[{types:t,attributes:{[e]:{parseHTML:s=>s.getAttribute("data-bts-style"),renderHTML:s=>({["data-bts-style"]:s[e]})}}}]},addCommands(){return{btsToggleHeading:e=>({commands:t})=>t.toggleNode("heading","paragraph",e),btsToggleParagraph:e=>({commands:t})=>t.toggleNode("paragraph","paragraph",e),btsToggleLink:e=>({commands:t,editor:s})=>s.isActive("link",e)?t.resetAttributes("link","class"):t.updateAttributes("link",e),btsToggleList:(e,t)=>({commands:s,editor:r,chain:a})=>r.isActive(t,e)?s.toggleList(t,"listItem"):r.isActive(t)?s.updateAttributes(t,e):a().toggleList(t,"listItem").updateAttributes(t,e).run(),btsToggleBulletList:e=>({commands:t})=>t.btsToggleList(e,"bulletList"),btsToggleOrderedList:e=>({commands:t})=>t.btsToggleList(e,"orderedList")}},onUpdate(){this.options.bard.$emit("bts-update")},onSelectionUpdate(){this.options.bard.$emit("bts-update")}}),{Extension:S}=Statamic.$bard.tiptap.core,O=S.create({name:"btsOverrides",addOptions(){return{bard:{},styleTypes:[],styleOptions:{}}},onCreate(){const{bard:e,styleTypes:t,styleOptions:s}=this.options,r=[...t.includes("heading")?["h1","h2","h3","h4","h5","h6"]:[],...t.includes("bulletList")?["unorderedlist"]:[],...t.includes("orderedList")?["orderedlist"]:[]];if(e.buttons.forEach(a=>{r.includes(a.name)&&(a.args={...a.args||{},class:null}),a.name==="unorderedlist"&&t.includes("bulletList")&&(a.command=(i,n)=>i.chain().focus().btsToggleBulletList(n).run()),a.name==="orderedlist"&&t.includes("orderedList")&&(a.command=(i,n)=>i.chain().focus().btsToggleOrderedList(n).run())}),e.buttons.find(a=>a.name==="bts_styles")){const a=(e.config.bts_styles||[]).filter(i=>Object.keys(s).includes(i));e.buttons.forEach(i=>{a.includes(i.name)&&(i.visible=()=>!1)})}}}),h=e=>e.replace("_","-").replace(/(.)(?=[A-Z])/,"$1-").toLowerCase(),M=e=>e.replace("-","_").replace(/(.)(?=[A-Z])/,"$1_").toLowerCase(),{Extension:B,getNodeAttributes:ct}=Statamic.$bard.tiptap.core,P=B.create({name:"btsAttributes",addOptions(){return{attributeTypes:{},attributes:{}}},addGlobalAttributes(){const{attributes:e}=this.options,t={true:(r,a)=>({rendered:!0}),false:(r,a)=>({rendered:!1}),class:(r,a)=>({parseHTML:i=>i.getAttribute(`data-bts-attribute-${h(r)}`),renderHTML:i=>({[`data-bts-attribute-${h(r)}`]:i[r]})}),style:(r,a)=>({parseHTML:i=>i.style[r],renderHTML:i=>i[r]!==null?{style:`${h(r)}: ${i[r]}`}:null})},s=Object.entries(e).reduce((r,[a,i])=>{const n=i.type;return r[n]={...r[n]||{},...i.attrs},r},{});return Object.entries(s).map(([r,a])=>({types:[r],attributes:Object.fromEntries(Object.entries(a).filter(([i,n])=>n.extra).map(([i,n])=>[i,{default:typeof n.default<"u"?n.default:null,...typeof n.rendered<"u"?t[n.rendered.toString()](i,n):t.true()}]))}))},addCommands(){const{attributeTypes:e}=this.options;return{btsAttributesFetch:()=>({state:t})=>{const{from:s,to:r}=t.selection,a=[];return t.doc.nodesBetween(s,s+1,i=>{e.includes(i.type.name)?a.push({kind:"node",type:i.type.name,attrs:{...i.attrs}}):i.type.name==="text"&&i.marks.forEach(n=>{e.includes(n.type.name)&&a.push({kind:"mark",type:n.type.name,attrs:{...n.attrs}})})}),{info:{from:s,to:r},items:a.reverse()}},btsAttributesApply:({info:t,items:s})=>({state:r,chain:a})=>{const{from:i,to:n}=r.selection;if(i!==t.from||n!==t.to)return;let c=a().focus();return s.forEach(o=>{o.kind==="mark"&&(c=c.extendMarkRange(o.type)),c=c.updateAttributes(o.type,o.attrs)}),c.setTextSelection({from:i,to:n}).run()}}}});function b(e,t,s,r,a,i,n,c){var o=typeof e=="function"?e.options:e;t&&(o.render=t,o.staticRenderFns=s,o._compiled=!0),r&&(o.functional=!0),i&&(o._scopeId="data-v-"+i);var l;if(n?(l=function(d){d=d||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!d&&typeof __VUE_SSR_CONTEXT__<"u"&&(d=__VUE_SSR_CONTEXT__),a&&a.call(this,d),d&&d._registeredComponents&&d._registeredComponents.add(n)},o._ssrRegister=l):a&&(l=c?function(){a.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(o.functional){o._injectStyles=l;var u=o.render;o.render=function(_,g){return l.call(g),u(_,g)}}else{var p=o.beforeCreate;o.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:o}}const I={props:{item:Object,config:{},bard:{},editor:{},btsOptions:{}},computed:{active(){if(this.item.hasOwnProperty("active"))return this.item.active(this.editor,this.item.args);const e=this.item.hasOwnProperty("activeName")?"activeName":"name",t=this.item[e];return this.editor.isActive(t,this.item.args)},visible(){return this.item.hasOwnProperty("btsMenuVisible")?this.item.btsMenuVisible(this.editor,this.item.args):!0},previewTag(){var s;const e={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",unorderedlist:"ul",orderedlist:"ol"};return{heading_1:"h1",heading_2:"h2",heading_3:"h3",heading_4:"h4",heading_5:"h5",heading_6:"h6",span:"span",unordered_list:"ul",link:"link",ordered_list:"ol",paragraph:"p"}[(s=this.item.btsStyle)==null?void 0:s.kind]||e[this.item.name]},previewStyle(){var e;return(e=this.item.btsStyle)==null?void 0:e[this.btsOptions.store]}},methods:{click(){this.item.command(this.editor,this.item.args),this.$emit("picked")}}};var Z=function(){var t=this,s=t._self._c;return t.visible?s("button",{staticClass:"bts-styles-item",class:{active:t.active},on:{click:t.click}},[s("div",{staticClass:"bts-preview",attrs:{"data-bts-preview":t.previewTag,"data-bts-style":t.previewStyle}},[t._v(" "+t._s(t.item.text)+" ")])]):t._e()},H=[],E=b(I,Z,H,!1,null,null,null,null);const V=E.exports,j={components:{StylesItem:V},props:{config:{},bard:{},editor:{},btsOptions:{},items:[]},created(){this.bard.$on("bts-update",this.close)},beforeDestroy(){this.bard.$off("bts-update",this.close)},methods:{close(){this.$emit("close")}}};var N=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bts-panel bts-styles"},[t.items.length?s("div",{staticClass:"bts-styles-items"},t._l(t.items,function(r){return s("StylesItem",{key:r.name,attrs:{item:r,config:t.config,bard:t.bard,editor:t.editor,btsOptions:t.btsOptions},on:{picked:function(a){return t.$emit("picked")}}})}),1):s("div",{staticClass:"p-8 w-40 text-center text-gray-400"},[s("svg",{staticClass:"w-12 h-12",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticStyle:{fill:"none","fill-rule":"nonzero","stroke-width":"1.5px"},attrs:{d:"M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z",stroke:"currentColor"}})])])])},z=[],R=b(j,N,z,!1,null,null,null,null);const D=R.exports,F={mixins:[BardToolbarButton],components:{StylesMenu:D},data(){return{panelActive:!1,activeItem:null}},created(){this.type==="text"&&(this.updateActiveItem(),this.bard.$on("bts-update",this.updateActiveItem))},beforeDestroy(){this.type==="text"&&this.bard.$off("bts-update",this.updateActiveItem)},computed:{items(){const e=this.bard.buttons,t=(this.config.bts_styles||[]).filter(s=>Object.keys(this.button.btsOptions.styleOptions).includes(s));return e.filter(s=>typeof s=="object"&&t.includes(s.name))},type(){return this.config.bts_styles_button}},methods:{togglePanel(){this.panelActive=!this.panelActive,this.panelActive||this.editor.commands.focus()},closePanel(){this.panelActive&&this.togglePanel()},updateActiveItem(){this.activeItem=this.items.find(e=>{if(e.hasOwnProperty("active"))return e.active(this.editor,e.args);const t=e.hasOwnProperty("activeName")?"activeName":"name",s=e[t];return this.editor.isActive(s,e.args)})}}};var q=function(){var t=this,s=t._self._c;return s("div",{staticClass:"inline-block relative"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.type==="icon"?t.button.text:void 0,expression:"type === 'icon' ? button.text : undefined"}],staticClass:"bard-toolbar-button",class:{"bts-styles-button-icon":t.type==="icon","bts-styles-button-text":t.type==="text"},attrs:{"aria-label":t.button.text},on:{click:t.togglePanel}},[t.type==="icon"?s("div",{staticClass:"flex items-center",domProps:{innerHTML:t._s(t.button.html)}}):t._e(),t.type==="text"?s("span",[t._v(t._s(t.activeItem?t.activeItem.text:t.button.text))]):t._e()]),t.panelActive?s("StylesMenu",{attrs:{config:t.config,bard:t.bard,editor:t.editor,btsOptions:t.button.btsOptions,items:t.items},on:{close:t.closePanel,picked:t.closePanel}}):t._e()],1)},U=[],G=b(F,q,U,!1,null,null,null,null);const X=G.exports,K={props:{config:{},bard:{},editor:{},btsOptions:{}},data(){const{info:e,items:t}=this.editor.commands.btsAttributesFetch();return{activeItem:0,info:e,items:t,titles:{blockquote:__("Blockquote"),bold:__("Bold"),code_block:__("Code Block"),code:__("Code"),heading_1:__("Heading 1"),heading_2:__("Heading 2"),heading_3:__("Heading 3"),heading_4:__("Heading 4"),heading_5:__("Heading 5"),heading_5:__("Heading 6"),horizontal_rule:__("Horizontal Rule"),image:__("Image"),italic:__("Italic"),link:__("Link"),list_item:__("List Item"),ordered_list:__("Ordered List"),paragraph:__("Paragraph"),strike:__("Strike"),subscript:__("Subscript"),superscript:__("Superscript"),table_cell:__("Table Cell"),table_header:__("Table Header"),table_row:__("Table Row"),table:__("Table"),underline:__("Underline"),unordered_list:__("Unordered List")}}},created(){this.bard.$on("bts-update",this.close)},beforeDestroy(){this.bard.$off("bts-update",this.close)},methods:{kind(e){const t={btsSpan:"span",btsDiv:"div",bulletList:"unordered_list"};return e.type==="heading"?`${e.type}_${e.attrs.level}`:t[e.type]||M(e.type)},title(e){return this.titles[this.kind(e)]},fields(e){return this.btsOptions.attributes[this.kind(e)].attrs},apply(){this.editor.commands.btsAttributesApply({info:this.info,items:this.items}),this.$emit("applied")},close(){this.$emit("close")},trueValue(e){var t;return((t=e.values)==null?void 0:t.true)!==void 0?e.values.true:!0},falseValue(e){var t;return((t=e.values)==null?void 0:t.false)!==void 0?e.values.false:e.rendered?null:!1}}};var W=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bts-panel bts-attributes"},[t.items.length?s("div",[t._l(t.items,function(r,a){return s("div",[s("div",{staticClass:"font-bold px-4 bts-py-2.5 bg-gray-100 title-case border-b flex items-center cursor-pointer",on:{click:function(i){t.activeItem=a}}},[s("svg",{staticClass:"w-4 h-4 bts-arrow text-gray-700",class:{"rotate-90":t.activeItem===a},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}})]),t._v(" "+t._s(t.title(r))+" ")]),t.activeItem===a?s("div",{staticClass:"p-4 pt-1 border-b"},t._l(t.fields(r),function(i,n){return s("div",{staticClass:"mt-3"},[i.type==="select"?s("label",{staticClass:"font-normal"},[s("div",{staticClass:"text-sm leading-none"},[t._v(t._s(i.display||n))]),s("select",{directives:[{name:"model",rawName:"v-model",value:r.attrs[n],expression:"item.attrs[name]"}],staticClass:"input h-8 px-1 border text-sm border-gray-500 rounded mt-2 bg-white w-full",on:{change:function(c){var o=Array.prototype.filter.call(c.target.options,function(l){return l.selected}).map(function(l){var u="_value"in l?l._value:l.value;return u});t.$set(r.attrs,n,c.target.multiple?o:o[0])}}},t._l(i.options,function(c,o){return s("option",{domProps:{value:o}},[t._v(t._s(c))])}),0)]):i.type==="toggle"?s("label",{staticClass:"flex items-baseline bts-gap-1 font-normal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:r.attrs[n],expression:"item.attrs[name]"}],attrs:{type:"checkbox","true-value":t.trueValue(i),"false-value":t.falseValue(i)},domProps:{checked:Array.isArray(r.attrs[n])?t._i(r.attrs[n],null)>-1:t._q(r.attrs[n],t.trueValue(i))},on:{change:function(c){var o=r.attrs[n],l=c.target,u=l.checked?t.trueValue(i):t.falseValue(i);if(Array.isArray(o)){var p=null,d=t._i(o,p);l.checked?d<0&&t.$set(r.attrs,n,o.concat([p])):d>-1&&t.$set(r.attrs,n,o.slice(0,d).concat(o.slice(d+1)))}else t.$set(r.attrs,n,u)}}}),s("div",{staticClass:"text-sm"},[t._v(t._s(i.display||n))])]):s("label",{staticClass:"font-normal"},[s("div",{staticClass:"text-sm leading-none"},[t._v(t._s(i.display||n))]),s("input",{directives:[{name:"model",rawName:"v-model",value:r.attrs[n],expression:"item.attrs[name]"}],staticClass:"input h-8 p-2 border text-sm border-gray-500 rounded mt-2 w-full",attrs:{type:"text"},domProps:{value:r.attrs[n]},on:{input:function(c){c.target.composing||t.$set(r.attrs,n,c.target.value)}}})])])}),0):t._e()])}),s("div",{staticClass:"flex items-center justify-end font-normal px-4 py-3"},[s("button",{staticClass:"btn btn-sm",on:{click:t.apply}},[t._v(" "+t._s(t.__("OK"))+" ")])])],2):s("div",{staticClass:"p-8 text-center text-gray-400"},[s("svg",{staticClass:"w-12 h-12",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticStyle:{fill:"none","fill-rule":"nonzero","stroke-width":"1.5px"},attrs:{d:"M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z",stroke:"currentColor"}})])])])},J=[],Q=b(K,W,J,!1,null,null,null,null);const Y=Q.exports,tt={mixins:[BardToolbarButton],components:{AttributesPanel:Y},data(){return{panelActive:!1}},methods:{togglePanel(){this.panelActive=!this.panelActive,this.panelActive||this.editor.commands.focus()},closePanel(){this.panelActive&&this.togglePanel()}}};var et=function(){var t=this,s=t._self._c;return s("div",{staticClass:"inline-block relative"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.button.text,expression:"button.text"}],staticClass:"bard-toolbar-button",attrs:{"aria-label":t.button.text},domProps:{innerHTML:t._s(t.button.html)},on:{click:t.togglePanel}}),t.panelActive?s("AttributesPanel",{attrs:{config:t.config,bard:t.bard,editor:t.editor,btsOptions:t.button.btsOptions},on:{close:t.closePanel,applied:t.closePanel}}):t._e()],1)},st=[],rt=b(tt,et,st,!1,null,null,null,null);const it=rt.exports;let m=0;const f={letter:e=>{const t={heading:"H",paragraph:"P",btsSpan:"T"}[e.type]??"S",s={H:'<path d="M2,6.594L6.857,6.594L6.857,1.429C6.857,0.956 7.241,0.571 7.714,0.571C8.187,0.571 8.571,0.956 8.571,1.429L8.571,14.571C8.571,15.044 8.187,15.429 7.714,15.429C7.241,15.429 6.857,15.044 6.857,14.571L6.857,8.309L2,8.309L2,14.571C2,15.044 1.616,15.429 1.143,15.429C0.67,15.429 0.286,15.044 0.286,14.571L0.286,1.429C0.286,0.956 0.67,0.571 1.143,0.571C1.616,0.571 2,0.956 2,1.429L2,6.594Z" />',P:'<path d="M1.153,0.666C0.672,0.666 0.275,1.063 0.275,1.544L0.275,14.565C0.275,15.045 0.672,15.443 1.174,15.443C1.654,15.443 2.052,15.045 2.052,14.565L2.052,9.674C2.699,9.737 3.078,9.764 3.894,9.764C5.586,9.764 6.489,9.325 7.409,8.427C8.308,7.528 8.768,6.441 8.768,5.166C8.768,3.85 8.35,2.763 7.514,1.906C6.657,1.049 5.67,0.631 3.747,0.631C3.058,0.631 2.428,0.645 1.153,0.666ZM2.052,2.338C2.971,2.317 3.35,2.303 3.914,2.303C6.172,2.303 6.887,3.369 6.887,5.145C6.887,6.985 5.984,8.092 3.831,8.092C3.204,8.092 2.846,8.044 2.052,7.981L2.052,2.338Z" />',T:'<path d="M9.492,2.338C9.931,2.338 10.307,1.941 10.307,1.502C10.307,1.063 9.931,0.666 9.492,0.666L1.104,0.666C0.665,0.666 0.289,1.063 0.289,1.502C0.289,1.941 0.665,2.338 1.104,2.338L4.41,2.338L4.41,14.565C4.41,15.045 4.807,15.443 5.308,15.443C5.789,15.443 6.186,15.045 6.186,14.565L6.186,2.338L9.492,2.338Z" />',S:'<path d="M4.081,15.505C5.274,15.505 6.265,15.129 7.073,14.398C7.862,13.666 8.266,12.726 8.266,11.534C8.266,6.539 1.989,7.898 1.989,4.282C1.989,2.965 2.888,2.129 4.301,2.129C5.017,2.129 5.715,2.359 6.357,2.798C6.522,2.903 6.669,2.944 6.779,2.944C7.018,2.944 7.22,2.819 7.385,2.547C7.477,2.443 7.514,2.296 7.514,2.108C7.514,1.816 7.422,1.586 7.22,1.44C6.321,0.792 5.311,0.457 4.21,0.457C3.017,0.457 2.08,0.813 1.383,1.544C0.685,2.276 0.337,3.195 0.337,4.282C0.337,9.131 6.614,7.981 6.614,11.555C6.614,12.976 5.513,13.833 4.1,13.833C3.347,13.833 2.466,13.415 1.456,12.558C1.328,12.454 1.199,12.412 1.034,12.412C0.796,12.412 0.612,12.517 0.465,12.726C0.355,12.872 0.3,13.06 0.3,13.248C0.3,13.499 0.373,13.687 0.52,13.833C1.677,14.941 2.87,15.505 4.081,15.505Z" />'}[t],r=e.ident;return`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="bts-icon-letter">
                ${s}
                <text text-anchor="middle" x="12.75" y="15" style="font-size: 10px; stroke-width: 1px; stroke: currentColor">${r}</text>
            </svg>
        `},square:e=>`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect width="15" height="15" x="0.5" y="0.5" rx="2" stroke-width="1" stroke="currentColor" fill="none" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;">${e.ident}</text>
            </svg>
        `,"square-solid":e=>{const t=e.ident,s=`bts-mask-${m++}`;return`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <mask id="${s}">
                    <rect width="16" height="16" fill="white" />
                    <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" fill="black">${t}</text>
                </mask>
                <rect width="15" height="15" x="0.5" y="0.5" rx="2" stroke-width="1" stroke="currentColor" mask="url(#${s})" />
            </svg>
        `},circle:e=>`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="currentColor" fill="none" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;">${e.ident}</text>
            </svg>
        `,"circle-solid":e=>{const t=e.ident,s=`bts-mask-${m++}`;return`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <mask id="${s}">
                    <rect width="16" height="16" fill="white" />
                    <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" fill="black">${t}</text>
                </mask>
                <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="currentColor" mask="url(#${s})" />
            </svg>
        `},"bullet-list":e=>`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2.333,1C2.882,1 3.333,1.451 3.333,2L3.333,3.333C3.333,3.882 2.882,4.333 2.333,4.333L1,4.333C0.451,4.333 0,3.882 0,3.333L0,2C-0,1.451 0.451,1 1,1L2.333,1ZM2.333,6.333C2.882,6.333 3.333,6.785 3.333,7.333L3.333,8.667C3.333,9.215 2.882,9.667 2.333,9.667L1,9.667C0.451,9.667 0,9.215 0,8.667L0,7.333C-0,6.785 0.451,6.333 1,6.333L2.333,6.333ZM2.333,11.667C2.882,11.667 3.333,12.118 3.333,12.667L3.333,14C3.333,14.549 2.882,15 2.333,15L1,15C0.451,15 0,14.549 0,14L0,12.667C-0,12.118 0.451,11.667 1,11.667L2.333,11.667Z" />
                <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${e.ident}</text>
            </svg>
        `,"ordered-list":e=>`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M1.473,11.5C0.873,11.5 0.343,11.907 0.187,12.487C0.175,12.529 0.169,12.573 0.169,12.617C0.169,12.891 0.395,13.117 0.67,13.117C0.896,13.117 1.095,12.965 1.153,12.747C1.192,12.602 1.324,12.501 1.473,12.5C1.656,12.5 1.807,12.65 1.807,12.833C1.807,13.016 1.656,13.167 1.473,13.167C1.199,13.167 0.973,13.392 0.973,13.667C0.973,13.941 1.199,14.167 1.473,14.167C1.656,14.167 1.807,14.317 1.807,14.5C1.809,14.514 1.809,14.529 1.809,14.543C1.809,14.728 1.658,14.879 1.473,14.879C1.305,14.879 1.162,14.753 1.14,14.587C1.09,14.358 0.886,14.194 0.652,14.194C0.377,14.194 0.152,14.42 0.152,14.694C0.152,14.751 0.161,14.807 0.18,14.86C0.345,15.427 0.869,15.82 1.46,15.82C2.187,15.82 2.786,15.226 2.793,14.5C2.795,14.236 2.716,13.978 2.567,13.76C2.533,13.702 2.533,13.631 2.567,13.573C2.716,13.356 2.795,13.097 2.793,12.833C2.793,12.107 2.2,11.507 1.473,11.5ZM2.833,7.167C2.833,6.435 2.231,5.833 1.5,5.833C0.769,5.833 0.167,6.435 0.167,7.167C0.17,7.44 0.394,7.663 0.667,7.667C0.94,7.663 1.163,7.44 1.167,7.167C1.167,6.984 1.317,6.833 1.5,6.833C1.683,6.833 1.833,6.984 1.833,7.167C1.834,7.322 1.779,7.473 1.68,7.593L0.273,9.333C0.156,9.483 0.133,9.687 0.213,9.86C0.297,10.034 0.474,10.145 0.667,10.147L2.333,10.147C2.608,10.147 2.833,9.921 2.833,9.647C2.833,9.372 2.608,9.147 2.333,9.147L2.053,9.147C1.991,9.146 1.934,9.109 1.907,9.053C1.87,8.999 1.87,8.928 1.907,8.873L2.447,8.207C2.686,7.912 2.822,7.546 2.833,7.167ZM2.667,3.5L2.5,3.5C2.409,3.5 2.333,3.425 2.333,3.333L2.333,1.08C2.33,0.578 1.916,0.167 1.413,0.167L1,0.167C0.726,0.167 0.5,0.392 0.5,0.667C0.5,0.941 0.726,1.167 1,1.167L1.167,1.167C1.258,1.167 1.333,1.242 1.333,1.333L1.333,3.333C1.333,3.425 1.258,3.5 1.167,3.5L1,3.5C0.726,3.5 0.5,3.726 0.5,4C0.5,4.274 0.726,4.5 1,4.5L2.667,4.5C2.941,4.5 3.167,4.274 3.167,4C3.167,3.726 2.941,3.5 2.667,3.5Z" />
                <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${e.ident}</text>
            </svg>
        `,link:e=>`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10.031,7.51C9.534,8.211 9.615,9.178 10.223,9.786L10.562,10.125L10.126,10.562L9.786,10.222C9.178,9.614 8.211,9.533 7.51,10.031L7.3,10.18C6.802,10.534 6.365,10.967 6.007,11.463C5.419,12.28 5.51,13.413 6.222,14.125L7.351,15.254C8.063,15.966 9.196,16.057 10.013,15.469C10.509,15.111 10.943,14.674 11.298,14.175L11.461,13.945C11.951,13.256 11.87,12.305 11.272,11.707L10.915,11.35L11.351,10.914L11.709,11.271C12.306,11.869 13.257,11.949 13.947,11.46L14.177,11.296C14.675,10.942 15.112,10.508 15.47,10.012C16.058,9.195 15.967,8.062 15.255,7.35L14.126,6.221C13.414,5.51 12.281,5.419 11.464,6.007C10.968,6.364 10.534,6.801 10.179,7.3L10.031,7.51L10.031,7.51ZM12.141,10.125L12.499,10.483C12.713,10.696 13.053,10.725 13.3,10.55L13.53,10.386C13.929,10.103 14.278,9.756 14.564,9.359C14.833,8.985 14.791,8.466 14.466,8.141L13.336,7.011C13.01,6.686 12.491,6.644 12.117,6.913C11.721,7.199 11.373,7.548 11.09,7.947L10.941,8.156C10.757,8.415 10.787,8.772 11.012,8.996L11.351,9.335L11.729,8.957C11.835,8.848 11.98,8.787 12.131,8.787C12.438,8.787 12.69,9.039 12.69,9.345C12.69,9.496 12.628,9.641 12.519,9.746L12.141,10.125ZM9.336,11.351L8.964,11.723C8.859,11.828 8.8,11.97 8.8,12.118C8.8,12.424 9.053,12.676 9.359,12.676C9.507,12.676 9.65,12.617 9.754,12.512L10.126,12.141L10.483,12.498C10.697,12.712 10.725,13.053 10.55,13.299L10.386,13.53C10.103,13.929 9.756,14.278 9.36,14.563C8.986,14.833 8.467,14.791 8.141,14.465L7.012,13.336C6.686,13.011 6.644,12.492 6.913,12.118C7.199,11.721 7.548,11.373 7.947,11.09L8.157,10.941C8.415,10.758 8.772,10.788 8.996,11.013L9.336,11.352L9.336,11.351Z" style="fill-rule:evenodd" />
                <text text-anchor="middle" x="5" y="8" style="font-size: 11px;">${e.ident}</text>
            </svg>
        `,symbol:e=>`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <text text-anchor="middle" x="8" y="16" style="font-size: 23px;">${e.ident}</text>
            </svg>
        `},nt=e=>{let t;return e.icon?t=e.icon:e.type==="link"?t="link":e.type==="bulletList"?t="bullet-list":e.type==="orderedList"?t="ordered-list":e.type==="btsDiv"?t="square":t="letter",f[t]?f[t](e):t},at={styles:`
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="currentColor" style="width: 22px;">
            <path d="M11.755,14.91C11.924,15.311 12.198,15.5 12.598,15.5C13.125,15.5 13.462,15.079 13.462,14.594C13.462,14.488 13.441,14.363 13.399,14.236L7.774,1.216C7.584,0.732 7.247,0.5 6.762,0.5C6.278,0.5 5.941,0.732 5.73,1.216L0.084,14.299C0.021,14.468 0,14.594 0,14.679C0,15.121 0.316,15.5 0.843,15.5C1.222,15.5 1.496,15.311 1.643,14.91L3.329,10.887L10.049,10.887L11.755,14.91ZM4.045,9.201L6.699,2.902L9.354,9.201L4.045,9.201ZM13.883,12.571C13.883,14.363 15.042,15.5 16.791,15.5C18.076,15.5 19.088,15.037 19.824,14.13L19.824,14.762C19.824,15.162 20.183,15.5 20.625,15.5C21.068,15.5 21.426,15.163 21.426,14.762L21.426,9.538C21.426,6.946 20.393,5.662 17.781,5.662C16.959,5.662 16.074,5.851 15.169,6.23C14.895,6.336 14.747,6.567 14.747,6.904C14.747,7.01 14.768,7.094 14.811,7.199C14.937,7.473 15.147,7.621 15.463,7.621C15.572,7.621 15.679,7.599 15.779,7.557C16.432,7.304 17.064,7.179 17.676,7.179C19.424,7.179 19.824,8.147 19.824,10.17C19.255,9.77 18.476,9.559 17.465,9.559C15.358,9.559 13.883,10.696 13.883,12.571ZM19.824,12.762C19.129,13.583 18.329,13.983 17.38,13.983C16.306,13.983 15.674,13.414 15.674,12.488C15.674,11.476 16.58,10.929 17.696,10.929C18.518,10.929 19.235,11.139 19.824,11.561L19.824,12.762Z" />
        </svg>
    `,attributes:`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5.611,14.098L15.267,4.442C15.416,4.29 15.5,4.085 15.5,3.872C15.5,3.664 15.416,3.465 15.267,3.32L12.671,0.733C12.522,0.585 12.321,0.501 12.111,0.501C11.901,0.501 11.7,0.585 11.551,0.733L1.879,10.372C1.421,11.781 0.969,13.193 0.524,14.606C0.508,14.667 0.5,14.73 0.5,14.793C0.5,15.176 0.791,15.499 1.138,15.499C1.563,15.499 1.963,15.341 5.611,14.098ZM2.887,11.314L4.667,13.094L2.027,13.966L2.887,11.314ZM3.683,10.342L12.111,1.943L14.056,3.881L5.641,12.299L3.683,10.342Z" />
        </svg>
    `},v=e=>at[e];class ot{constructor(t){C(this,"types",{heading:{command:"btsToggleHeading",toggleVisibility:!1},paragraph:{command:"btsToggleParagraph",toggleVisibility:!1},btsSpan:{command:"btsToggleSpan",toggleVisibility:!1},link:{command:"btsToggleLink",toggleVisibility:!0},bulletList:{command:"btsToggleBulletList",toggleVisibility:!1},orderedList:{command:"btsToggleOrderedList",toggleVisibility:!1},btsDiv:{command:"btsToggleDiv",toggleVisibility:!1}});t={...t,types:this.mergeTypeData(t.types)},this.bootExtensions(t).bootStyleButtons(t).bootStylesButton(t).bootAttributesButton(t).bootCss(t)}mergeTypeData(t){return Object.fromEntries(Object.entries(t).map(([s,r])=>[s,{...r,...this.types[s]}]))}bootExtensions(t){return Statamic.$bard.addExtension(({bard:s})=>T.configure({...t,bard:s})),Statamic.$bard.addExtension(({bard:s})=>O.configure({...t,bard:s})),Statamic.$bard.addExtension(()=>w),t.pro&&(Statamic.$bard.addExtension(()=>P.configure(t)),Statamic.$bard.addExtension(()=>k)),this}bootStyleButtons(t){return Statamic.$bard.buttons((s,r)=>{Object.entries(t.styles).forEach(([a,i])=>{const n=t.types[i.type],c=nt(i),o={name:a,text:i.name,args:{[t.attr]:i[t.store],...i.args},html:c,active:(l,u)=>l.isActive(n.type,u),visible:n.toggleVisibility?l=>l.isActive(n.type):()=>!0,btsMenuVisible:n.toggleVisibility?l=>l.isActive(n.type):()=>!0,command:(l,u)=>l.chain().focus()[n.command](u).run(),btsStyle:i};s.splice(s.indexOf(a),0,r(o))})}),this}bootStylesButton(t){return t.pro?(Statamic.$bard.buttons((s,r)=>{s.splice(s.indexOf("bts_styles"),0,r({name:"bts_styles",text:__("Style"),component:X,html:v("styles"),btsOptions:t}))}),this):this}bootAttributesButton(t){return t.pro?(Statamic.$bard.buttons((s,r)=>{s.splice(s.indexOf("bts_attributes"),0,r({name:"bts_attributes",text:__("Attributes"),component:it,html:v("attributes"),btsOptions:t}))}),this):this}bootCss(t){const s=[...this.gatherStylesCss(t)],r=document.createElement("style");return r.appendChild(document.createTextNode(s.join(" "))),document.head.appendChild(r),this}gatherStylesCss(t){const s=[];return Object.entries(t.styles).forEach(([r,a])=>{const i=`
                .bard-fieldtype-wrapper .bts-preview[data-bts-style="${a[t.store]}"],
                .bard-fieldtype-wrapper .bard-content [data-bts-style="${a[t.store]}"]
            `,n=`
                .bard-fieldtype-wrapper .bard-content [data-bts-style="${a[t.store]}"]::before
            `;s.push(...this.parseCss(i,a.cp_css||"")),a.cp_badge&&s.push(`${n} { content: "${a.name}"; }`)}),s}parseCss(t,s){return typeof s=="string"&&(s={"&":s}),Object.entries(s).map(([r,a])=>{const i=r.includes("&")?r.replace("&",t):`${t} ${r}`,n=typeof a=="object"?Object.entries(a).map(([c,o])=>`${c}: ${o};`).join(""):a;return`${i} { ${n} }`})}}Statamic.booting(()=>{new ot(Statamic.$config.get("bard-texstyle"))});
