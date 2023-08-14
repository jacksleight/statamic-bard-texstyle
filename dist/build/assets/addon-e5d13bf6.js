const{Mark:w}=Statamic.$bard.tiptap.core,$=w.create({name:"btsSpan",parseHTML(){return[{tag:"span[data-bts-style]"}]},renderHTML({HTMLAttributes:s}){return["span",s,0]},addCommands(){return{btsToggleSpan:s=>({commands:t})=>t.toggleMark(this.name,s)}}}),{Node:L}=Statamic.$bard.tiptap.core,S=L.create({name:"btsDiv",content:"block+",group:"root",defining:!1,parseHTML(){return[{tag:"div[data-bts-style]"}]},renderHTML({HTMLAttributes:s}){return["div",{class:"bard-content",...s},0]},addCommands(){return{btsToggleDiv:s=>({editor:t,commands:e})=>t.isActive(this.name,s)?e.lift(this.name):t.isActive(this.name)?e.updateAttributes(this.name,s):e.wrapIn(this.name,s)}}});function u(s,t,e,r,i,n,a,l){var o=typeof s=="function"?s.options:s;t&&(o.render=t,o.staticRenderFns=e,o._compiled=!0),r&&(o.functional=!0),n&&(o._scopeId="data-v-"+n);var c;if(a?(c=function(d){d=d||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!d&&typeof __VUE_SSR_CONTEXT__<"u"&&(d=__VUE_SSR_CONTEXT__),i&&i.call(this,d),d&&d._registeredComponents&&d._registeredComponents.add(a)},o._ssrRegister=c):i&&(c=l?function(){i.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(o.functional){o._injectStyles=c;var p=o.render;o.render=function(y,m){return c.call(m),p(y,m)}}else{var f=o.beforeCreate;o.beforeCreate=f?[].concat(f,c):[c]}return{exports:s,options:o}}const k={props:{storeName:{type:String}},provide(){return{storeName:this.storeName}}};var O=function(){var t=this,e=t._self._c;return e("div",[t._t("default")],2)},A=[],M=u(k,O,A,!1,null,null,null,null);const P=M.exports,T={methods:{updateSpotMeta(s,t){this.bard.updateMeta({...this.bard.meta,btsSpots:{...this.bard.meta.btsSpots,existing:{...this.bard.meta.btsSpots.existing,[s]:t}}})}}},B=null,E=null;var I=u(T,B,E,!1,null,null,null,null);const C=I.exports,{NodeViewWrapper:N}=Statamic.$bard.tiptap.vue2,{ValidatesFieldConditions:j}=FieldConditions,Z={props:["editor","node","decorations","selected","extension","getPos","updateAttributes","deleteNode"],components:{NodeViewWrapper:N,ProvideStoreName:P},mixins:[j,C],computed:{store(){return this.$store.state.publish[this.storeName]},fields(){return Object.values(this.config.fields||{})},display(){return this.config.display||this.values.type},icon(){return this.config.icon},id(){return this.node.attrs.id},values(){return this.node.attrs.values},meta(){return this.bard.meta.btsSpots.existing[this.id]},parentName(){return this.bard.name},index(){const s=this.editor.view.state.doc.resolve(this.getPos());return Array(s.depth+1).fill(null).map((t,e)=>s.index(e))},path(){const s=this.index.length-1;return this.index.map((t,e)=>e===s?`${t}.attrs.values`:`${t}.content`).join(".")},fullPath(){return`${this.bard.fieldPathPrefix||this.bard.handle}.${this.path}`},hasError(){return Object.keys(this.store.errors).some(s=>s.startsWith(this.fullPath))},bard(){return this.extension.options.bard},config(){return _.findWhere(this.spotConfigs,{handle:this.values.type})||{}},spotConfigs(){return Object.values(this.extension.options.spots)},isReadOnly(){return this.bard.isReadOnly}},methods:{updated(s,t){const e={...this.values,[s]:t};this.updateAttributes({values:e})},metaUpdated(s,t){this.updateSpotMeta(this.id,{...this.meta,[s]:t})},fieldPath(s){return`${this.fullPath}.${s.handle}`}}};var H=function(){var t=this,e=t._self._c;return e("node-view-wrapper",{staticClass:"bts-spot shadow-md",class:{"border-blue-400":t.selected,"text-red-500":t.hasError}},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.display,expression:"display"}],staticClass:"bts-spot-icon",attrs:{"data-drag-handle":""}},[t.icon.svg?e("svg-icon",{staticClass:"text-gray-80",attrs:{name:t.icon.svg}}):t._e(),t.icon.html?e("div",{staticClass:"text-gray-80",domProps:{innerHTML:t._s(t.icon.html)}}):t._e()],1),e("popover",{attrs:{placement:"bottom-start"},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("div",{staticClass:"bts-spot-edit"},[e("svg",{staticClass:"fill-current",attrs:{width:"12",viewBox:"0 0 24 24"}},[e("circle",{attrs:{cx:"3",cy:"12",r:"3"}}),e("circle",{attrs:{cx:"12",cy:"12",r:"3"}}),e("circle",{attrs:{cx:"21",cy:"12",r:"3"}})])])]},proxy:!0},{key:"default",fn:function(){return[e("provide-store-name",{attrs:{"store-name":t.storeName}},[e("div",{staticClass:"flex-1 publish-fields @container bts-spot-fields"},t._l(t.fields,function(r){return e("set-field",{directives:[{name:"show",rawName:"v-show",value:t.showField(r.field,t.fieldPath(r)),expression:"showField(field.field, fieldPath(field))"}],key:r.handle,attrs:{field:r.field,value:t.values[r.handle],meta:t.meta[r.handle],"parent-name":t.parentName,"set-index":t.index.join("]["),"field-path":t.fieldPath(r),"read-only":t.isReadOnly},on:{updated:function(i){return t.updated(r.handle,i)},"meta-updated":function(i){return t.metaUpdated(r.handle,i)}}})}),1)])]},proxy:!0}])})],1)},R=[],V=u(Z,H,R,!1,null,null,null,null);const D=V.exports,{VueNodeViewRenderer:F}=Statamic.$bard.tiptap.vue2,{Node:z}=Statamic.$bard.tiptap.core,U=z.create({name:"btsSpot",group:"inline",inline:!0,selectable:!0,draggable:!0,defining:!1,addOptions(){return{bard:{}}},addAttributes(){return{id:{default:null},values:{default:null}}},addNodeView(){return F(D)},parseHTML(){return[{tag:"bts-spot"}]},renderHTML({HTMLAttributes:s}){return["bts-spot",s]},addCommands(){return{btsInsertSpot:s=>({chain:t})=>t().focus().insertContent({type:"btsSpot",attrs:s}).run()}}}),{Extension:q}=Statamic.$bard.tiptap.core,W=q.create({name:"btsCore",addOptions(){return{bard:{},attr:null,stylesExts:[]}},addGlobalAttributes(){const{attr:s,stylesExts:t}=this.options;return[{types:t,attributes:{[s]:{parseHTML:e=>e.getAttribute("data-bts-style"),renderHTML:e=>({["data-bts-style"]:e[s]})}}}]},addCommands(){return{btsToggleHeading:s=>({commands:t})=>t.toggleNode("heading","paragraph",s),btsToggleParagraph:s=>({commands:t})=>t.toggleNode("paragraph","paragraph",s),btsToggleLink:s=>({commands:t,editor:e})=>e.isActive("link",s)?t.resetAttributes("link","class"):t.updateAttributes("link",s),btsToggleList:(s,t)=>({commands:e,editor:r,chain:i})=>r.isActive(t,s)?e.toggleList(t,"listItem"):r.isActive(t)?e.updateAttributes(t,s):i().toggleList(t,"listItem").updateAttributes(t,s).run(),btsToggleBulletList:s=>({commands:t})=>t.btsToggleList(s,"bulletList"),btsToggleOrderedList:s=>({commands:t})=>t.btsToggleList(s,"orderedList")}},onUpdate(){this.options.bard.$emit("bts-update")},onSelectionUpdate(){this.options.bard.$emit("bts-update")}}),{Extension:G}=Statamic.$bard.tiptap.core,J=G.create({name:"btsOverrides",addOptions(){return{bard:{},stylesExts:[],stylesMenuOptions:{}}},onCreate(){const{bard:s,stylesExts:t,stylesMenuOptions:e}=this.options,r=[...t.includes("heading")?["h1","h2","h3","h4","h5","h6"]:[],...t.includes("bulletList")?["unorderedlist"]:[],...t.includes("orderedList")?["orderedlist"]:[]];if(s.buttons.forEach(i=>{r.includes(i.name)&&(i.args={...i.args||{},class:null}),i.name==="unorderedlist"&&t.includes("bulletList")&&(i.command=(n,a)=>n.chain().focus().btsToggleBulletList(a).run()),i.name==="orderedlist"&&t.includes("orderedList")&&(i.command=(n,a)=>n.chain().focus().btsToggleOrderedList(a).run())}),s.buttons.find(i=>i.name==="bts_styles")){const i=(s.config.bts_styles||[]).filter(n=>Object.keys(e).includes(n));s.buttons.forEach(n=>{i.includes(n.name)&&(n.visible=()=>!1)})}}}),{Plugin:K,PluginKey:X}=Statamic.$bard.tiptap.pm.state,{Decoration:Q,DecorationSet:Y}=Statamic.$bard.tiptap.pm.view,{Extension:tt}=Statamic.$bard.tiptap.core,et=tt.create({name:"btsDefaults",addOptions(){return{bard:{},store:null,defaultsCpExts:{}}},addProseMirrorPlugins(){const{bard:s,defaultsCpExts:t}=this.options,e=s.config.bts_defaults||"standard",r=t[e];return r===void 0||!r.length?[]:[new K({key:new X("btsDefaults"),props:{attributes:{"data-bts-defaults":e},decorations(i){const n=[];return i.doc.descendants((a,l)=>{a.type.name==="btsDiv"&&n.push(Q.node(l,l+a.nodeSize,{"data-bts-defaults":e}))}),Y.create(i.doc,n)}}})]}}),h=s=>s.replaceAll("_","-").replaceAll(/(.)(?=[A-Z])/g,"$1-").toLowerCase(),{Extension:st,getNodeAttributes:Gt}=Statamic.$bard.tiptap.core,rt=st.create({name:"btsAttributes",addOptions(){return{attributesExts:{},attributes:{}}},addGlobalAttributes(){const{attributes:s}=this.options,t={true:(r,i)=>({rendered:!0}),false:(r,i)=>({rendered:!1}),class:(r,i)=>({parseHTML:n=>n.getAttribute(`data-bts-attribute-${h(r)}`),renderHTML:n=>({[`data-bts-attribute-${h(r)}`]:n[r]})}),style:(r,i)=>({parseHTML:n=>n.style[h(r)],renderHTML:n=>n[r]!==void 0&&n[r]!==null?{style:`${h(r)}: ${n[r]}`}:null})},e=Object.entries(s).reduce((r,[i,n])=>{const a=n.ext;return r[a]={...r[a]||{},...n.attrs},r},{});return Object.entries(e).map(([r,i])=>({types:[r],attributes:Object.fromEntries(Object.entries(i).filter(([n,a])=>a.extra).map(([n,a])=>[n,{default:typeof a.default<"u"?a.default:null,...typeof a.rendered<"u"?t[a.rendered.toString()](n,a):t.true()}]))}))},addCommands(){const{attributesExts:s}=this.options;return{btsAttributesFetch:()=>({state:t})=>{const{from:e,to:r}=t.selection,i=[];return t.doc.nodesBetween(e,e+1,n=>{s.includes(n.type.name)?i.push({kind:"node",type:n.type.name,attrs:{...n.attrs}}):n.type.name==="text"&&n.marks.forEach(a=>{s.includes(a.type.name)&&i.push({kind:"mark",type:a.type.name,attrs:{...a.attrs}})})}),{info:{from:e,to:r},items:i.reverse()}},btsAttributesApply:({info:t,items:e})=>({state:r,chain:i})=>{const{from:n,to:a}=r.selection;if(n!==t.from||a!==t.to)return;let l=i().focus();return e.forEach(o=>{o.kind==="mark"&&(l=l.extendMarkRange(o.type)),l=l.updateAttributes(o.type,o.attrs)}),l.setTextSelection({from:n,to:a}).run()}}}}),nt={props:{item:Object,config:{},bard:{},editor:{},btsOptions:{}},computed:{active(){if(this.item.hasOwnProperty("active"))return this.item.active(this.editor,this.item.args);const s=this.item.hasOwnProperty("activeName")?"activeName":"name",t=this.item[s];return this.editor.isActive(t,this.item.args)},visible(){return this.item.hasOwnProperty("btsMenuVisible")?this.item.btsMenuVisible(this.editor,this.item.args):!0},previewType(){var s;return((s=this.item.btsStyle)==null?void 0:s.type)||Object.values(this.btsOptions.types).find(t=>t.button===this.item.name).name},previewStyle(){var s;return(s=this.item.btsStyle)==null?void 0:s[this.btsOptions.store]}},methods:{click(){this.item.command(this.editor,this.item.args),this.$emit("picked")}}};var it=function(){var t=this,e=t._self._c;return t.visible?e("button",{staticClass:"bts-styles-item",class:{active:t.active},on:{click:t.click}},[e(t.previewType==="ordered_list"?"ol":"div",{tag:"component"},[e("div",{staticClass:"bts-preview",attrs:{"data-bts-type":t.previewType,"data-bts-style":t.previewStyle}},[t._v(" "+t._s(t.item.text)+" ")])])],1):t._e()},at=[],ot=u(nt,it,at,!1,null,null,null,null);const lt=ot.exports,ct={components:{StylesItem:lt},props:{config:{},bard:{},editor:{},btsOptions:{},items:[]},created(){this.bard.$on("bts-update",this.close)},beforeDestroy(){this.bard.$off("bts-update",this.close)},methods:{close(){this.$emit("close")}},computed:{previewDefaults(){return this.bard.config.bts_defaults||"standard"}}};var dt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bts-styles",attrs:{"data-bts-defaults":t.previewDefaults}},[t.items.length?e("div",{staticClass:"bts-styles-items"},t._l(t.items,function(r){return e("StylesItem",{key:r.name,attrs:{item:r,config:t.config,bard:t.bard,editor:t.editor,btsOptions:t.btsOptions},on:{picked:function(i){return t.$emit("picked")}}})}),1):e("div",{staticClass:"p-8 w-40 text-center text-gray-400"},[e("svg",{staticClass:"w-12 h-12",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticStyle:{fill:"none","fill-rule":"nonzero","stroke-width":"1.5px"},attrs:{d:"M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z",stroke:"currentColor"}})])])])},ut=[],pt=u(ct,dt,ut,!1,null,null,null,null);const ft=pt.exports,ht={mixins:[BardToolbarButton],components:{StylesMenu:ft},data(){return{panelActive:!1,activeItem:null}},created(){this.type==="text"&&(this.updateActiveItem(),this.bard.$on("bts-update",this.updateActiveItem))},beforeDestroy(){this.type==="text"&&this.bard.$off("bts-update",this.updateActiveItem)},computed:{items(){const s=this.bard.buttons,t=(this.config.bts_styles||[]).filter(e=>Object.keys(this.button.btsOptions.stylesMenuOptions).includes(e));return s.filter(e=>typeof e=="object"&&t.includes(e.name))},type(){return this.config.bts_styles_button}},methods:{togglePanel(){this.panelActive=!this.panelActive,this.panelActive||this.editor.commands.focus()},closePanel(){this.panelActive&&(this.togglePanel(),this.$refs.popover.close())},updateActiveItem(){this.activeItem=this.items.find(s=>{if(s.hasOwnProperty("active"))return s.active(this.editor,s.args);const t=s.hasOwnProperty("activeName")?"activeName":"name",e=s[t];return this.editor.isActive(e,s.args)})}}};var bt=function(){var t=this,e=t._self._c;return e("popover",{ref:"popover",attrs:{placement:"bottom-start",clickaway:!0},on:{closed:t.closePanel},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.type==="icon"?t.button.text:void 0,expression:"type === 'icon' ? button.text : undefined"}],staticClass:"bard-toolbar-button",class:{"bts-styles-button-icon":t.type==="icon","bts-styles-button-text":t.type==="text"},attrs:{"aria-label":t.button.text},on:{click:t.togglePanel}},[t.type==="icon"?e("div",{staticClass:"flex items-center",domProps:{innerHTML:t._s(t.button.html)}}):t._e(),t.type==="text"?e("span",[t._v(t._s(t.activeItem?t.activeItem.text:t.button.text))]):t._e()])]},proxy:!0},{key:"default",fn:function(){return[t.panelActive?e("StylesMenu",{attrs:{config:t.config,bard:t.bard,editor:t.editor,btsOptions:t.button.btsOptions,items:t.items},on:{close:t.closePanel,picked:t.closePanel}}):t._e()]},proxy:!0}])})},mt=[],vt=u(ht,bt,mt,!1,null,null,null,null);const gt=vt.exports,Ct={props:{value:null}};var _t=function(){var t=this,e=t._self._c;return e("input",{attrs:{type:"text"},domProps:{value:t.value},on:{input:function(r){return t.$emit("input",r.target.value!==""?r.target.value:null)}}})},xt=[],yt=u(Ct,_t,xt,!1,null,null,null,null);const wt=yt.exports,$t={components:{TextInput:wt},props:{config:{},bard:{},editor:{},btsOptions:{}},data(){const{info:s,items:t}=this.editor.commands.btsAttributesFetch();return{activeItem:0,info:s,items:t}},created(){this.bard.$on("bts-update",this.close)},beforeDestroy(){this.bard.$off("bts-update",this.close)},methods:{display(s){return this.btsOptions.types.getByItem(s).display},attrs(s){return this.btsOptions.attributes[this.btsOptions.types.getByItem(s).name].attrs},apply(){this.editor.commands.btsAttributesApply({info:this.info,items:this.items}),this.$emit("applied")},close(){this.$emit("close")},trueValue(s){var t;return((t=s.values)==null?void 0:t.true)!==void 0?s.values.true:!0},falseValue(s){var t;return((t=s.values)==null?void 0:t.false)!==void 0?s.values.false:s.rendered?null:!1}}};var Lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bts-attributes"},[t.items.length?e("div",[t._l(t.items,function(r,i){return e("div",[e("div",{staticClass:"px-4 py-3 title-case border-b flex items-center cursor-pointer",class:{"text-gray-700":t.activeItem!==i},on:{click:function(n){t.activeItem=i}}},[e("svg",{staticClass:"w-4 h-4 bts-attributes-arrow text-gray-700",class:{"rotate-90":t.activeItem===i},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}})]),t._v(" "+t._s(t.__(t.display(r)))+" ")]),t.activeItem===i?e("div",{staticClass:"p-4 pt-1 border-b"},t._l(t.attrs(r),function(n,a){return e("div",{staticClass:"mt-3"},[n.field==="select"?e("label",{staticClass:"font-normal"},[e("div",{staticClass:"text-sm leading-none"},[t._v(t._s(n.display||a))]),e("select",{directives:[{name:"model",rawName:"v-model",value:r.attrs[a],expression:"item.attrs[name]"}],staticClass:"mt-2 h-8 px-1 border rounded shadow-inner bg-gray-100 text-gray-800 w-full text-sm bts-border-gray-450",on:{change:function(l){var o=Array.prototype.filter.call(l.target.options,function(c){return c.selected}).map(function(c){var p="_value"in c?c._value:c.value;return p});t.$set(r.attrs,a,l.target.multiple?o:o[0])}}},[n.clearable?e("option",{domProps:{value:null}}):t._e(),t._l(n.options,function(l,o){return e("option",{domProps:{value:o}},[t._v(t._s(l))])})],2)]):n.field==="toggle"?e("label",{staticClass:"flex items-baseline font-normal"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.attrs[a],expression:"item.attrs[name]"}],attrs:{type:"checkbox","true-value":t.trueValue(n),"false-value":t.falseValue(n)},domProps:{checked:Array.isArray(r.attrs[a])?t._i(r.attrs[a],null)>-1:t._q(r.attrs[a],t.trueValue(n))},on:{change:function(l){var o=r.attrs[a],c=l.target,p=c.checked?t.trueValue(n):t.falseValue(n);if(Array.isArray(o)){var f=null,d=t._i(o,f);c.checked?d<0&&t.$set(r.attrs,a,o.concat([f])):d>-1&&t.$set(r.attrs,a,o.slice(0,d).concat(o.slice(d+1)))}else t.$set(r.attrs,a,p)}}}),e("div",{staticClass:"text-sm ml-1"},[t._v(t._s(n.display||a))])]):e("label",{staticClass:"font-normal"},[e("div",{staticClass:"text-sm leading-none"},[t._v(t._s(n.display||a))]),e("TextInput",{staticClass:"mt-2 h-8 p-2 bg-gray-100 text-gray-800 w-full border bts-border-gray-450 rounded shadow-inner text-sm",attrs:{type:"text"},model:{value:r.attrs[a],callback:function(l){t.$set(r.attrs,a,l)},expression:"item.attrs[name]"}})],1)])}),0):t._e()])}),e("div",{staticClass:"bg-gray-100 rounded-b-md flex items-center justify-end space-x-3 font-normal p-2"},[e("button",{staticClass:"text-xs text-gray-600 hover:text-gray-800",on:{click:t.close}},[t._v(" "+t._s(t.__("Cancel"))+" ")]),e("button",{staticClass:"btn btn-sm",on:{click:t.apply}},[t._v(" "+t._s(t.__("Apply"))+" ")])])],2):e("div",{staticClass:"p-8 text-center text-gray-400"},[e("svg",{staticClass:"w-12 h-12",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticStyle:{fill:"none","fill-rule":"nonzero","stroke-width":"1.5px"},attrs:{d:"M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z",stroke:"currentColor"}})])])])},St=[],kt=u($t,Lt,St,!1,null,null,null,null);const Ot=kt.exports,At={mixins:[BardToolbarButton],components:{AttributesPanel:Ot},data(){return{panelActive:!1}},methods:{togglePanel(){this.panelActive=!this.panelActive,this.panelActive||this.editor.commands.focus()},closePanel(){this.panelActive&&(this.togglePanel(),this.$refs.popover.close())}}};var Mt=function(){var t=this,e=t._self._c;return e("popover",{ref:"popover",attrs:{placement:"bottom-start",clickaway:!0},on:{closed:t.closePanel},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.button.text,expression:"button.text"}],staticClass:"bard-toolbar-button",attrs:{"aria-label":t.button.text},domProps:{innerHTML:t._s(t.button.html)},on:{click:t.togglePanel}})]},proxy:!0},{key:"default",fn:function(){return[t.panelActive?e("AttributesPanel",{attrs:{config:t.config,bard:t.bard,editor:t.editor,btsOptions:t.button.btsOptions},on:{applied:t.closePanel,close:t.closePanel}}):t._e()]},proxy:!0}])})},Pt=[],Tt=u(At,Mt,Pt,!1,null,null,null,null);const Bt=Tt.exports,Et={mixins:[C],props:{config:{},bard:{},editor:{},btsOptions:{},items:[]},data(){return{selectionIndex:0}},created(){this.bard.$on("bts-update",this.close)},beforeDestroy(){this.bard.$off("bts-update",this.close)},methods:{addSpot(s){console.log(this.updateSpotMeta);const t=uniqid(),e={...this.bard.meta.btsSpots.defaults[s],type:s},r=this.bard.meta.btsSpots.new[s];this.updateSpotMeta(t,r),this.$nextTick(()=>{this.editor.commands.btsInsertSpot({id:t,values:e})})},close(){this.$emit("close")}},computed:{}};var It=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bts-spots"},[t.items.length?e("div",{staticClass:"bts-spots-items"},t._l(t.items,function(r,i){return e("div",{staticClass:"cursor-pointer rounded",class:{"bg-gray-200":t.selectionIndex===i},on:{mouseover:function(n){t.selectionIndex=i}}},[e("div",{staticClass:"flex items-center group px-2 py-1.5 rounded-md",on:{click:function(n){return t.addSpot(r.handle)}}},[e("div",{staticClass:"h-9 w-9 rounded bg-white border border-gray-600 mr-2 p-2"},[r.icon.svg?e("svg-icon",{staticClass:"text-gray-80",attrs:{name:r.icon.svg}}):t._e(),r.icon.html?e("div",{staticClass:"text-gray-80",domProps:{innerHTML:t._s(r.icon.html)}}):t._e()],1),e("div",{staticClass:"flex-1"},[e("div",{staticClass:"text-md font-medium text-gray-800 truncate w-52"},[t._v(t._s(r.display||r.handle))]),r.instructions?e("div",{staticClass:"text-2xs text-gray-700 truncate w-52"},[t._v(t._s(r.instructions))]):t._e()])])])}),0):e("div",{staticClass:"p-8 w-40 text-center text-gray-400"},[e("svg",{staticClass:"w-12 h-12",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticStyle:{fill:"none","fill-rule":"nonzero","stroke-width":"1.5px"},attrs:{d:"M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z",stroke:"currentColor"}})])])])},Nt=[],jt=u(Et,It,Nt,!1,null,null,null,null);const Zt=jt.exports,Ht={components:{SpotsMenu:Zt},mixins:[BardToolbarButton],data(){return{panelActive:!1}},computed:{items(){const s=Object.values(this.button.btsOptions.spots),t=(this.config.bts_spots||[]).filter(e=>Object.keys(this.button.btsOptions.spotsMenuOptions).includes(e));return s.filter(e=>t.includes(e.handle))}},methods:{togglePanel(){this.panelActive=!this.panelActive,this.panelActive||this.editor.commands.focus()},closePicker(){this.panelActive&&(this.togglePicker(),this.$refs.popover.close())},closePanel(){this.panelActive&&(this.togglePanel(),this.$refs.popover.close())}}};var Rt=function(){var t=this,e=t._self._c;return e("popover",{ref:"popover",attrs:{placement:"bottom-start",clickaway:!0},on:{closed:t.closePanel},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.button.text,expression:"button.text"}],staticClass:"bard-toolbar-button",attrs:{"aria-label":t.button.text},on:{click:t.togglePanel}},[e("div",{staticClass:"flex items-center",domProps:{innerHTML:t._s(t.button.html)}})])]},proxy:!0},{key:"default",fn:function(){return[t.panelActive?e("SpotsMenu",{attrs:{config:t.config,bard:t.bard,editor:t.editor,btsOptions:t.button.btsOptions,items:t.items},on:{close:t.closePanel,picked:t.closePanel}}):t._e()]},proxy:!0}])})},Vt=[],Dt=u(Ht,Rt,Vt,!1,null,null,null,null);const Ft=Dt.exports;let v=0;const g={letter:(s,t)=>{const e={heading:"H",paragraph:"P",btsSpan:"T"}[t]??"S";return`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="bts-icon-letter">
                ${{H:'<path d="M2,6.594L6.857,6.594L6.857,1.429C6.857,0.956 7.241,0.571 7.714,0.571C8.187,0.571 8.571,0.956 8.571,1.429L8.571,14.571C8.571,15.044 8.187,15.429 7.714,15.429C7.241,15.429 6.857,15.044 6.857,14.571L6.857,8.309L2,8.309L2,14.571C2,15.044 1.616,15.429 1.143,15.429C0.67,15.429 0.286,15.044 0.286,14.571L0.286,1.429C0.286,0.956 0.67,0.571 1.143,0.571C1.616,0.571 2,0.956 2,1.429L2,6.594Z" />',P:'<path d="M1.153,0.666C0.672,0.666 0.275,1.063 0.275,1.544L0.275,14.565C0.275,15.045 0.672,15.443 1.174,15.443C1.654,15.443 2.052,15.045 2.052,14.565L2.052,9.674C2.699,9.737 3.078,9.764 3.894,9.764C5.586,9.764 6.489,9.325 7.409,8.427C8.308,7.528 8.768,6.441 8.768,5.166C8.768,3.85 8.35,2.763 7.514,1.906C6.657,1.049 5.67,0.631 3.747,0.631C3.058,0.631 2.428,0.645 1.153,0.666ZM2.052,2.338C2.971,2.317 3.35,2.303 3.914,2.303C6.172,2.303 6.887,3.369 6.887,5.145C6.887,6.985 5.984,8.092 3.831,8.092C3.204,8.092 2.846,8.044 2.052,7.981L2.052,2.338Z" />',T:'<path d="M9.492,2.338C9.931,2.338 10.307,1.941 10.307,1.502C10.307,1.063 9.931,0.666 9.492,0.666L1.104,0.666C0.665,0.666 0.289,1.063 0.289,1.502C0.289,1.941 0.665,2.338 1.104,2.338L4.41,2.338L4.41,14.565C4.41,15.045 4.807,15.443 5.308,15.443C5.789,15.443 6.186,15.045 6.186,14.565L6.186,2.338L9.492,2.338Z" />',S:'<path d="M4.081,15.505C5.274,15.505 6.265,15.129 7.073,14.398C7.862,13.666 8.266,12.726 8.266,11.534C8.266,6.539 1.989,7.898 1.989,4.282C1.989,2.965 2.888,2.129 4.301,2.129C5.017,2.129 5.715,2.359 6.357,2.798C6.522,2.903 6.669,2.944 6.779,2.944C7.018,2.944 7.22,2.819 7.385,2.547C7.477,2.443 7.514,2.296 7.514,2.108C7.514,1.816 7.422,1.586 7.22,1.44C6.321,0.792 5.311,0.457 4.21,0.457C3.017,0.457 2.08,0.813 1.383,1.544C0.685,2.276 0.337,3.195 0.337,4.282C0.337,9.131 6.614,7.981 6.614,11.555C6.614,12.976 5.513,13.833 4.1,13.833C3.347,13.833 2.466,13.415 1.456,12.558C1.328,12.454 1.199,12.412 1.034,12.412C0.796,12.412 0.612,12.517 0.465,12.726C0.355,12.872 0.3,13.06 0.3,13.248C0.3,13.499 0.373,13.687 0.52,13.833C1.677,14.941 2.87,15.505 4.081,15.505Z" />'}[e]}
                <text text-anchor="middle" x="12.75" y="14.5" style="font-size: 10px; stroke-width: 1px; stroke: currentColor">${s}</text>
            </svg>
        `},square:s=>`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect width="15" height="15" x="0.5" y="0.5" rx="3" stroke-width="1" stroke="currentColor" fill="none" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;">${s}</text>
            </svg>
        `,"square-solid":s=>{const t=`bts-mask-${v++}`;return`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <mask id="${t}">
                    <rect width="16" height="16" fill="white" />
                    <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" fill="black">${s}</text>
                </mask>
                <rect width="15" height="15" x="0.5" y="0.5" rx="3" stroke-width="1" stroke="currentColor" mask="url(#${t})" />
            </svg>
        `},circle:s=>`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="currentColor" fill="none" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;">${s}</text>
            </svg>
        `,"circle-solid":s=>{const t=`bts-mask-${v++}`;return`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <mask id="${t}">
                    <rect width="16" height="16" fill="white" />
                    <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" fill="black">${s}</text>
                </mask>
                <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="currentColor" mask="url(#${t})" />
            </svg>
        `},"bullet-list":s=>`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2.333,1C2.882,1 3.333,1.451 3.333,2L3.333,3.333C3.333,3.882 2.882,4.333 2.333,4.333L1,4.333C0.451,4.333 0,3.882 0,3.333L0,2C-0,1.451 0.451,1 1,1L2.333,1ZM2.333,6.333C2.882,6.333 3.333,6.785 3.333,7.333L3.333,8.667C3.333,9.215 2.882,9.667 2.333,9.667L1,9.667C0.451,9.667 0,9.215 0,8.667L0,7.333C-0,6.785 0.451,6.333 1,6.333L2.333,6.333ZM2.333,11.667C2.882,11.667 3.333,12.118 3.333,12.667L3.333,14C3.333,14.549 2.882,15 2.333,15L1,15C0.451,15 0,14.549 0,14L0,12.667C-0,12.118 0.451,11.667 1,11.667L2.333,11.667Z" />
                <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${s}</text>
            </svg>
        `,"ordered-list":s=>`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M1.473,11.5C0.873,11.5 0.343,11.907 0.187,12.487C0.175,12.529 0.169,12.573 0.169,12.617C0.169,12.891 0.395,13.117 0.67,13.117C0.896,13.117 1.095,12.965 1.153,12.747C1.192,12.602 1.324,12.501 1.473,12.5C1.656,12.5 1.807,12.65 1.807,12.833C1.807,13.016 1.656,13.167 1.473,13.167C1.199,13.167 0.973,13.392 0.973,13.667C0.973,13.941 1.199,14.167 1.473,14.167C1.656,14.167 1.807,14.317 1.807,14.5C1.809,14.514 1.809,14.529 1.809,14.543C1.809,14.728 1.658,14.879 1.473,14.879C1.305,14.879 1.162,14.753 1.14,14.587C1.09,14.358 0.886,14.194 0.652,14.194C0.377,14.194 0.152,14.42 0.152,14.694C0.152,14.751 0.161,14.807 0.18,14.86C0.345,15.427 0.869,15.82 1.46,15.82C2.187,15.82 2.786,15.226 2.793,14.5C2.795,14.236 2.716,13.978 2.567,13.76C2.533,13.702 2.533,13.631 2.567,13.573C2.716,13.356 2.795,13.097 2.793,12.833C2.793,12.107 2.2,11.507 1.473,11.5ZM2.833,7.167C2.833,6.435 2.231,5.833 1.5,5.833C0.769,5.833 0.167,6.435 0.167,7.167C0.17,7.44 0.394,7.663 0.667,7.667C0.94,7.663 1.163,7.44 1.167,7.167C1.167,6.984 1.317,6.833 1.5,6.833C1.683,6.833 1.833,6.984 1.833,7.167C1.834,7.322 1.779,7.473 1.68,7.593L0.273,9.333C0.156,9.483 0.133,9.687 0.213,9.86C0.297,10.034 0.474,10.145 0.667,10.147L2.333,10.147C2.608,10.147 2.833,9.921 2.833,9.647C2.833,9.372 2.608,9.147 2.333,9.147L2.053,9.147C1.991,9.146 1.934,9.109 1.907,9.053C1.87,8.999 1.87,8.928 1.907,8.873L2.447,8.207C2.686,7.912 2.822,7.546 2.833,7.167ZM2.667,3.5L2.5,3.5C2.409,3.5 2.333,3.425 2.333,3.333L2.333,1.08C2.33,0.578 1.916,0.167 1.413,0.167L1,0.167C0.726,0.167 0.5,0.392 0.5,0.667C0.5,0.941 0.726,1.167 1,1.167L1.167,1.167C1.258,1.167 1.333,1.242 1.333,1.333L1.333,3.333C1.333,3.425 1.258,3.5 1.167,3.5L1,3.5C0.726,3.5 0.5,3.726 0.5,4C0.5,4.274 0.726,4.5 1,4.5L2.667,4.5C2.941,4.5 3.167,4.274 3.167,4C3.167,3.726 2.941,3.5 2.667,3.5Z" />
                <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${s}</text>
            </svg>
        `,link:s=>`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10.031,7.51C9.534,8.211 9.615,9.178 10.223,9.786L10.562,10.125L10.126,10.562L9.786,10.222C9.178,9.614 8.211,9.533 7.51,10.031L7.3,10.18C6.802,10.534 6.365,10.967 6.007,11.463C5.419,12.28 5.51,13.413 6.222,14.125L7.351,15.254C8.063,15.966 9.196,16.057 10.013,15.469C10.509,15.111 10.943,14.674 11.298,14.175L11.461,13.945C11.951,13.256 11.87,12.305 11.272,11.707L10.915,11.35L11.351,10.914L11.709,11.271C12.306,11.869 13.257,11.949 13.947,11.46L14.177,11.296C14.675,10.942 15.112,10.508 15.47,10.012C16.058,9.195 15.967,8.062 15.255,7.35L14.126,6.221C13.414,5.51 12.281,5.419 11.464,6.007C10.968,6.364 10.534,6.801 10.179,7.3L10.031,7.51L10.031,7.51ZM12.141,10.125L12.499,10.483C12.713,10.696 13.053,10.725 13.3,10.55L13.53,10.386C13.929,10.103 14.278,9.756 14.564,9.359C14.833,8.985 14.791,8.466 14.466,8.141L13.336,7.011C13.01,6.686 12.491,6.644 12.117,6.913C11.721,7.199 11.373,7.548 11.09,7.947L10.941,8.156C10.757,8.415 10.787,8.772 11.012,8.996L11.351,9.335L11.729,8.957C11.835,8.848 11.98,8.787 12.131,8.787C12.438,8.787 12.69,9.039 12.69,9.345C12.69,9.496 12.628,9.641 12.519,9.746L12.141,10.125ZM9.336,11.351L8.964,11.723C8.859,11.828 8.8,11.97 8.8,12.118C8.8,12.424 9.053,12.676 9.359,12.676C9.507,12.676 9.65,12.617 9.754,12.512L10.126,12.141L10.483,12.498C10.697,12.712 10.725,13.053 10.55,13.299L10.386,13.53C10.103,13.929 9.756,14.278 9.36,14.563C8.986,14.833 8.467,14.791 8.141,14.465L7.012,13.336C6.686,13.011 6.644,12.492 6.913,12.118C7.199,11.721 7.548,11.373 7.947,11.09L8.157,10.941C8.415,10.758 8.772,10.788 8.996,11.013L9.336,11.352L9.336,11.351Z" style="fill-rule:evenodd" />
                <text text-anchor="middle" x="5" y="8" style="font-size: 11px;">${s}</text>
            </svg>
        `,symbol:s=>`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <text text-anchor="middle" x="8" y="16" style="font-size: 23px;">${s}</text>
            </svg>
        `},x=s=>s.icon?Object.keys(g).includes(s.icon)?{html:g[s.icon](s.ident,s.ext)}:s.icon.match(/<svg/)?{html:s.icon}:s.icon.match(/\//)?{svg:s.icon}:{svg:`plump/${s.icon}`}:{svg:null},zt=s=>(s.icon||(s.ext==="link"?s.icon="link":s.ext==="bulletList"?s.icon="bullet-list":s.ext==="orderedList"?s.icon="ordered-list":s.ext==="btsDiv"?s.icon="square":s.icon="letter"),x(s)),Ut=s=>x(s),qt={styles:`
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="currentColor" style="width: 22px;">
            <path d="M11.755,14.91C11.924,15.311 12.198,15.5 12.598,15.5C13.125,15.5 13.462,15.079 13.462,14.594C13.462,14.488 13.441,14.363 13.399,14.236L7.774,1.216C7.584,0.732 7.247,0.5 6.762,0.5C6.278,0.5 5.941,0.732 5.73,1.216L0.084,14.299C0.021,14.468 0,14.594 0,14.679C0,15.121 0.316,15.5 0.843,15.5C1.222,15.5 1.496,15.311 1.643,14.91L3.329,10.887L10.049,10.887L11.755,14.91ZM4.045,9.201L6.699,2.902L9.354,9.201L4.045,9.201ZM13.883,12.571C13.883,14.363 15.042,15.5 16.791,15.5C18.076,15.5 19.088,15.037 19.824,14.13L19.824,14.762C19.824,15.162 20.183,15.5 20.625,15.5C21.068,15.5 21.426,15.163 21.426,14.762L21.426,9.538C21.426,6.946 20.393,5.662 17.781,5.662C16.959,5.662 16.074,5.851 15.169,6.23C14.895,6.336 14.747,6.567 14.747,6.904C14.747,7.01 14.768,7.094 14.811,7.199C14.937,7.473 15.147,7.621 15.463,7.621C15.572,7.621 15.679,7.599 15.779,7.557C16.432,7.304 17.064,7.179 17.676,7.179C19.424,7.179 19.824,8.147 19.824,10.17C19.255,9.77 18.476,9.559 17.465,9.559C15.358,9.559 13.883,10.696 13.883,12.571ZM19.824,12.762C19.129,13.583 18.329,13.983 17.38,13.983C16.306,13.983 15.674,13.414 15.674,12.488C15.674,11.476 16.58,10.929 17.696,10.929C18.518,10.929 19.235,11.139 19.824,11.561L19.824,12.762Z" />
        </svg>
    `,attributes:`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5.611,14.098L15.267,4.442C15.416,4.29 15.5,4.085 15.5,3.872C15.5,3.664 15.416,3.465 15.267,3.32L12.671,0.733C12.522,0.585 12.321,0.501 12.111,0.501C11.901,0.501 11.7,0.585 11.551,0.733L1.879,10.372C1.421,11.781 0.969,13.193 0.524,14.606C0.508,14.667 0.5,14.73 0.5,14.793C0.5,15.176 0.791,15.499 1.138,15.499C1.563,15.499 1.963,15.341 5.611,14.098ZM2.887,11.314L4.667,13.094L2.027,13.966L2.887,11.314ZM3.683,10.342L12.111,1.943L14.056,3.881L5.641,12.299L3.683,10.342Z" />
        </svg>
    `,spots:`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M14.068 1.932a6.604 6.604 0 0 1 0 9.335l-2.801 2.801a6.604 6.604 0 0 1-9.335 0 6.604 6.604 0 0 1 0-9.335l2.801-2.801a6.604 6.604 0 0 1 9.335 0ZM7.39 7.39H4.534a.612.612 0 1 0 0 1.224H7.39v2.855a.612.612 0 1 0 1.224 0V8.614h2.855a.613.613 0 0 0 0-1.224H8.614V4.534a.613.613 0 0 0-1.224 0V7.39Z"/>
        </svg>
    `},b=s=>qt[s];class Wt{constructor(t){t.types=this.bootTypeManager(t.types),t.spots=this.bootSpotsIcons(t.spots),this.bootExtensions(t).bootStyleButtons(t).bootStylesButton(t).bootAttributesButton(t).bootSpotsButton(t).bootCss(t)}bootTypeManager(t){return t.getByItem=function(e){return Object.values(this).find(function(r){const i=Array.isArray(r.parameters)?{}:r.parameters,n=Object.fromEntries(Object.entries(e.attrs).filter(([a])=>i.hasOwnProperty(a)));return r.extension===e.type&&JSON.stringify(n)===JSON.stringify(i)})},t}bootSpotsIcons(t){return Object.fromEntries(Object.entries(t).map(([e,r])=>[e,{...r,icon:Ut(r)}]))}bootExtensions(t){return Statamic.$bard.addExtension(({bard:e})=>W.configure({...t,bard:e})),Statamic.$bard.addExtension(({bard:e})=>et.configure({...t,bard:e})),Statamic.$bard.addExtension(({bard:e})=>J.configure({...t,bard:e})),Statamic.$bard.addExtension(()=>$),t.pro&&(Statamic.$bard.addExtension(()=>rt.configure(t)),Statamic.$bard.addExtension(()=>S),Statamic.$bard.addExtension(({bard:e})=>U.configure({...t,bard:e}))),this}bootStyleButtons(t){return Statamic.$bard.buttons((e,r)=>{Object.entries(t.styles).forEach(([i,n])=>{const a=t.types[n.type],l={name:i,text:n.name,args:{[t.attr]:n[t.store],...a.parameters},active:(o,c)=>o.isActive(a.extension,c),visible:a.active_visible?o=>o.isActive(a.extension):()=>!0,btsMenuVisible:a.active_visible?o=>o.isActive(a.extension):()=>!0,command:(o,c)=>o.chain().focus()[a.command](c).run(),btsStyle:n,...zt(n)};e.splice(e.indexOf(i),0,r(l))})}),this}bootStylesButton(t){return t.pro?(Statamic.$bard.buttons((e,r)=>{e.splice(e.indexOf("bts_styles"),0,r({name:"bts_styles",text:__("Style"),component:gt,html:b("styles"),btsOptions:t}))}),this):this}bootAttributesButton(t){return t.pro?(Statamic.$bard.buttons((e,r)=>{e.splice(e.indexOf("bts_attributes"),0,r({name:"bts_attributes",text:__("Attributes"),component:Bt,html:b("attributes"),btsOptions:t}))}),this):this}bootSpotsButton(t){return t.pro?(Statamic.$bard.buttons((e,r)=>{e.splice(e.indexOf("bts_spots"),0,r({name:"bts_spots",text:__("Add Spot"),component:Ft,html:b("spots"),btsOptions:t}))}),this):this}bootCss(t){const e=[...this.gatherDefaultsCss(t),...this.gatherStylesCss(t)],r=document.createElement("style");return r.appendChild(document.createTextNode(e.join(" "))),document.body.appendChild(r),this}gatherDefaultsCss(t){const e=[],r=".bard-fieldtype-wrapper .bard-content";return Object.entries(t.defaults).forEach(([i,n])=>{Object.entries(n.dflts).forEach(([a,l])=>{const o=t.types[l.type].selector;l.cp_css&&e.push(...this.parseCss([`.bts-styles[data-bts-defaults="${i}"] .bts-preview[data-bts-type="${l.type}"]:not([data-bts-style])`,`${r}[data-bts-defaults="${i}"] > ${o}:not([data-bts-style]):not(.is-editor-empty)`],l.cp_css)),l.cp_badge&&e.push(...this.parseCss([`${r}[data-bts-defaults="${i}"] > ${o}:not([data-bts-style]):not(.is-editor-empty)::before`],{"&":{content:`"${__(t.types[l.type].display)}"`}}))})}),e}gatherStylesCss(t){const e=[],r=".bard-fieldtype-wrapper .bard-content";return Object.entries(t.styles).forEach(([i,n])=>{const a=t.types[n.type].selector;n.cp_css&&e.push(...this.parseCss([`.bts-preview[data-bts-style="${n[t.store]}"]`,`${r} ${a}[data-bts-style="${n[t.store]}"]`],n.cp_css)),n.cp_badge&&e.push(...this.parseCss([`${r} ${a}[data-bts-style="${n[t.store]}"]::before`],{"&":{content:`"${n.name}"`}}))}),e}parseCss(t,e){return e===void 0?[]:(typeof e=="string"&&(e={"&":e}),Object.entries(e).map(([r,i])=>{const n=t.map(l=>r.includes("&")?r.replace("&",l):`${l} ${r}`).join(", "),a=typeof i=="object"?Object.entries(i).map(([l,o])=>`${l}: ${o};`).join(""):i;return`${n} { ${a} }`}))}}Statamic.booting(()=>{new Wt(Statamic.$config.get("bardTexstyle"))});
