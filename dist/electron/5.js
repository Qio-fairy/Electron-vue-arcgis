webpackJsonp([5],{164:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(171),e=c(200),f=c(2),g=f(d.a,e.a,!1,null,null,null);b["default"]=g.exports},171:function(a,b){"use strict";b.a={watch:{filterText:function(a){this.$refs.tree2.filter(a)}},methods:{filterNode:function(a,b){return!a||-1!==b.label.indexOf(a)}},data:function(){return{filterText:"",data2:[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],defaultProps:{children:"children",label:"label"}}}}},200:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"app-container"},[c("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"Filter keyword"},model:{value:a.filterText,callback:function(b){a.filterText=b},expression:"filterText"}}),a._v(" "),c("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:a.data2,props:a.defaultProps,"default-expand-all":"","filter-node-method":a.filterNode}})],1)},staticRenderFns:[]}}});