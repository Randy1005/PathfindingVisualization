(this["webpackJsonpreact-pathfinder"]=this["webpackJsonpreact-pathfinder"]||[]).push([[0],{10:function(e,t,s){e.exports=s(23)},15:function(e,t,s){},16:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var r=s(0),i=s.n(r),l=s(7),n=s.n(l),o=(s(15),s(1)),a=s(2),c=s(4),u=s(3),h=(s(16),s(8)),d=s(5),p=(s(17),s(9)),f=function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.a)(this,s),t.call(this,e)}return Object(a.a)(s,[{key:"setProperties",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.assign(this.props,e)}},{key:"getProperty",value:function(e){return this.props[e]}},{key:"removeProperty",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=Object(p.a)(t);try{for(s.s();!(e=s.n()).done;){var r=e.value;delete this.props[r]}}catch(i){s.e(i)}finally{s.f()}}},{key:"render",value:function(){var e=this;return i.a.createElement("svg",{cellidx:this.props.cellidx,onMouseUp:this.props.onMouseUp,onMouseOver:this.props.onMouseOver,onMouseDown:this.props.onMouseDown,style:{verticalAlign:"top"},width:this.props.rect.w,height:this.props.rect.h,ref:function(t){return e.svg=t}},i.a.createElement("rect",{x:"0",y:"0",width:this.props.rect.w,height:this.props.rect.h,stroke:"black",fill:this.props.cellColorFill,strokeWidth:"1",ref:function(t){return e.svgRectEle=t}}))}}]),s}(r.Component),g=function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(e){var r;Object(o.a)(this,s),(r=t.call(this,e)).liftStateToApp=function(){r.props.liftstate(r.state)},r.rowIndices=Array.from(Array(r.props.rows).keys()),r.colIndices=Array.from(Array(r.props.cols).keys());var i=r.props.rows*r.props.cols;r.cells=Array(i);for(var l=0;l<i;l++)r.cells[l]=new f;return r.mouseAction=null,r.state={cells:r.cells,grid:Object(d.a)(r)},r.cells[0].setProperties({startPosition:!0}),r.cells[945].setProperties({destination:!0}),r.handleDataUpdate=r.handleDataUpdate.bind(Object(d.a)(r)),r.liftStateToApp(),r}return Object(a.a)(s,[{key:"handleDataUpdate",value:function(){this.setState({cells:this.cells,grid:this}),this.liftStateToApp()}},{key:"getCellIdx",value:function(e){for(var t in this.cells)if(this.cells[t].getProperty(e))return parseInt(t,10)}},{key:"removeFromCells",value:function(e){for(var t in this.cells)this.cells[t].props[e]&&this.cells[t].removeProperty([e])}},{key:"mouseEvent",value:function(e,t){var s=this;if("mouseup"===t.type)return this.mouseAction=null,void this.cells[e].removeProperty(["active"]);1===t.buttons||"click"===t.type?(null==this.mouseAction&&(this.cells[e].getProperty("startPosition")?this.mouseAction=function(e){s.removeFromCells("startPosition"),s.cells[e].setProperties({startPosition:!0})}:this.cells[e].getProperty("destination")?this.mouseAction=function(e){s.removeFromCells("destination"),s.cells[e].setProperties({destination:!0})}:this.cells[e].getProperty("wall")?this.mouseAction=function(e){s.cells[e].removeProperty(["wall"])}:this.mouseAction=function(e){s.cells[e].setProperties({wall:!0})}),this.handleDataUpdate(),this.cells[e].setProperties({active:!0}),this.mouseAction(e)):this.mouseAction=null}},{key:"getNeighborCellIdx",value:function(e,t){var s;switch(t){case"LEFT":if(((s=e-1)+1)%this.colIndices.length===0)return null;break;case"UP":s=e-this.colIndices.length;break;case"RIGHT":if((s=e+1)%this.colIndices.length===0)return null;break;case"DOWN":s=e+this.colIndices.length;break;default:s=null}return s<0||s>=this.props.rows*this.props.cols?null:s}},{key:"heuristicDistance",value:function(e,t){return Math.abs(Math.floor(e/this.colIndices.length)-Math.floor(t/this.colIndices.length))+Math.abs(e%this.colIndices.length-t%this.colIndices.length)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"grid"},this.rowIndices.map((function(t){return i.a.createElement("div",{key:t,className:"gridRow"},e.colIndices.map((function(s){var r=t*e.colIndices.length+s,l=e.cells[r].getProperty("startPosition")?"blue":e.cells[r].getProperty("destination")?"red":e.cells[r].getProperty("wall")?"black":e.cells[r].getProperty("path")?"grey":"none";return i.a.createElement(f,{cellColorFill:l,onMouseDown:e.mouseEvent.bind(e,r),onMouseOver:e.mouseEvent.bind(e,r),onMouseUp:e.mouseEvent.bind(e,r),key:"#cellIdx".concat(r),cellidx:t*e.colIndices.length+s,rect:{w:30,h:30}})})))})))}}]),s}(r.Component),v=function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(a.a)(s,[{key:"reset",value:function(){this.currCellIdx=null,this.destinationCellIdx=null,this.openList=[],this.closedList=[],this.cellFGHValues={},this.props.gridstate.grid.removeFromCells(["path"]),this.props.gridstate.grid.removeFromCells(["wall"]),this.props.gridstate.grid.handleDataUpdate(),this.unReachable=!1}},{key:"init",value:function(){this.currCellIdx=this.props.gridstate.grid.getCellIdx("startPosition"),this.destinationCellIdx=this.props.gridstate.grid.getCellIdx("destination"),this.closedList=[this.currCellIdx],this.cellFGHValues=Object(h.a)({},this.currCellIdx,{g:0,f:this.props.gridstate.grid.heuristicDistance(this.currCellIdx,this.destinationCellIdx)}),this.path=[],this.openList=[],this.unReachable=!1}},{key:"run",value:function(){for(this.init();this.currCellIdx!==this.destinationCellIdx;){if(this.unReachable){alert("Destination Not Reachable.");break}this.step()}if(null!=this.currCellIdx)for(var e=this.currCellIdx;this.cellFGHValues[e].from;)e=this.cellFGHValues[e].from,this.path.push(e),this.props.gridstate.grid.cells[e].setProperties({path:!0});this.props.gridstate.grid.handleDataUpdate()}},{key:"step",value:function(){var e=this;["LEFT","UP","RIGHT","DOWN"].forEach((function(t){var s=e.props.gridstate.grid.getNeighborCellIdx(e.currCellIdx,t);if(null!=s&&!e.props.gridstate.cells[s].getProperty("wall")&&-1===e.closedList.indexOf(s)){-1===e.openList.indexOf(s)&&e.openList.push(s);var r=e.cellFGHValues[e.currCellIdx].g+1,i=e.props.gridstate.grid.heuristicDistance(s,e.destinationCellIdx)+r;(void 0===e.cellFGHValues[s]||r<e.cellFGHValues[s].g)&&(e.cellFGHValues[s]={g:r,f:i,from:e.currCellIdx})}}));var t=null;for(var s in this.openList){var r=this.openList[s];(null==t||this.cellFGHValues[r].f<this.cellFGHValues[t].f)&&(t=r)}this.currCellIdx=t,this.closedList.push(this.currCellIdx);var i=this.openList.indexOf(this.currCellIdx);this.openList.splice(i,1),0===this.openList.length&&(this.unReachable=!0)}},{key:"render",value:function(){return null}}]),s}(r.Component),m=function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).getStateFromGrid=function(e){r.setState({grid:e})},r.runAstar=function(){r.refs.manager.run()},r.resetAstar=function(){r.refs.manager.reset()},r.GRID=function(){return i.a.createElement(g,{rows:20,cols:50,liftstate:r.getStateFromGrid})},r.MANAGER=function(){return i.a.createElement(v,{gridstate:r.state.grid})},r.state={grid:null},r}return Object(a.a)(s,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement(g,{rows:20,cols:50,liftstate:this.getStateFromGrid})),i.a.createElement("button",{onClick:this.runAstar},"RUN"),i.a.createElement("button",{onClick:this.resetAstar},"RESET"),i.a.createElement("div",null," ",i.a.createElement(v,{gridstate:this.state.grid,ref:"manager"})," ")))}}]),s}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.565f7b12.chunk.js.map