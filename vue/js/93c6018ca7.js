"use strict";(self.webpackChunkwebpack_web=self.webpackChunkwebpack_web||[]).push([[93],{6093:(it,Z,g)=>{g.d(Z,{H:()=>I,U:()=>w});var p=g(2923),z=g(3994),L=g(555),a=g(5222),k=g(2715),_=g(4909),u=g(6014),G="Stage",J="string",x="px",Q="mouseout",B="mouseleave",U="mouseover",N="mouseenter",W="mousemove",j="mousedown",H="mouseup",b="pointermove",y="pointerdown",f="pointerup",C="pointercancel",$="lostpointercapture",T="pointerout",O="pointerleave",m="pointerover",D="pointerenter",A="contextmenu",X="touchstart",V="touchend",Y="touchmove",F="touchcancel",M="wheel",q=5,tt=[[N,"_pointerenter"],[j,"_pointerdown"],[W,"_pointermove"],[H,"_pointerup"],[B,"_pointerleave"],[X,"_pointerdown"],[Y,"_pointermove"],[V,"_pointerup"],[F,"_pointercancel"],[U,"_pointerover"],[M,"_wheel"],[A,"_contextmenu"],[y,"_pointerdown"],[b,"_pointermove"],[f,"_pointerup"],[C,"_pointercancel"],[$,"_lostpointercapture"]];const R={mouse:{[T]:Q,[O]:B,[m]:U,[D]:N,[b]:W,[y]:j,[f]:H,[C]:"mousecancel",pointerclick:"click",pointerdblclick:"dblclick"},touch:{[T]:"touchout",[O]:"touchleave",[m]:"touchover",[D]:"touchenter",[b]:Y,[y]:X,[f]:V,[C]:F,pointerclick:"tap",pointerdblclick:"dbltap"},pointer:{[T]:T,[O]:O,[m]:m,[D]:D,[b]:b,[y]:y,[f]:f,[C]:C,pointerclick:"pointerclick",pointerdblclick:"pointerdblclick"}},S=c=>c.indexOf("pointer")>=0?"pointer":c.indexOf("touch")>=0?"touch":"mouse",P=c=>{const t=S(c);if(t==="pointer")return a.So.pointerEventsEnabled&&R.pointer;if(t==="touch")return R.touch;if(t==="mouse")return R.mouse};function K(c={}){return(c.clipFunc||c.clipWidth||c.clipHeight)&&p.Z.warn("Stage does not support clipping. Please use clip for Layers or Groups."),c}const et="Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);",w=[];class I extends L.W{constructor(t){super(K(t)),this._pointerPositions=[],this._changedPointerPositions=[],this._buildDOM(),this._bindContentEvents(),w.push(this),this.on("widthChange.konva heightChange.konva",this._resizeDOM),this.on("visibleChange.konva",this._checkVisibility),this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva",()=>{K(this.attrs)}),this._checkVisibility()}_validateAdd(t){const e=t.getType()==="Layer",i=t.getType()==="FastLayer";e||i||p.Z.throw("You may only add layers to the stage.")}_checkVisibility(){if(!this.content)return;const t=this.visible()?"":"none";this.content.style.display=t}setContainer(t){if(typeof t===J){if(t.charAt(0)==="."){var e=t.slice(1);t=document.getElementsByClassName(e)[0]}else{var i;t.charAt(0)!=="#"?i=t:i=t.slice(1),t=document.getElementById(i)}if(!t)throw"Can not find container in document with id "+i}return this._setAttr("container",t),this.content&&(this.content.parentElement&&this.content.parentElement.removeChild(this.content),t.appendChild(this.content)),this}shouldDrawHit(){return!0}clear(){var t=this.children,e=t.length,i;for(i=0;i<e;i++)t[i].clear();return this}clone(t){return t||(t={}),t.container=typeof document!="undefined"&&document.createElement("div"),L.W.prototype.clone.call(this,t)}destroy(){super.destroy();var t=this.content;t&&p.Z._isInDocument(t)&&this.container().removeChild(t);var e=w.indexOf(this);return e>-1&&w.splice(e,1),this}getPointerPosition(){const t=this._pointerPositions[0]||this._changedPointerPositions[0];return t?{x:t.x,y:t.y}:(p.Z.warn(et),null)}_getPointerById(t){return this._pointerPositions.find(e=>e.id===t)}getPointersPositions(){return this._pointerPositions}getStage(){return this}getContent(){return this.content}_toKonvaCanvas(t){t=t||{},t.x=t.x||0,t.y=t.y||0,t.width=t.width||this.width(),t.height=t.height||this.height();var e=new k.RF({width:t.width,height:t.height,pixelRatio:t.pixelRatio||1}),i=e.getContext()._context,r=this.children;return(t.x||t.y)&&i.translate(-1*t.x,-1*t.y),r.forEach(function(n){if(!!n.isVisible()){var o=n._toKonvaCanvas(t);i.drawImage(o._canvas,t.x,t.y,o.getWidth()/o.getPixelRatio(),o.getHeight()/o.getPixelRatio())}}),e}getIntersection(t){if(!t)return null;var e=this.children,i=e.length,r=i-1,n;for(n=r;n>=0;n--){const o=e[n].getIntersection(t);if(o)return o}return null}_resizeDOM(){var t=this.width(),e=this.height();this.content&&(this.content.style.width=t+x,this.content.style.height=e+x),this.bufferCanvas.setSize(t,e),this.bufferHitCanvas.setSize(t,e),this.children.forEach(i=>{i.setSize({width:t,height:e}),i.draw()})}add(t,...e){if(arguments.length>1){for(var i=0;i<arguments.length;i++)this.add(arguments[i]);return this}super.add(t);var r=this.children.length;return r>q&&p.Z.warn("The stage has "+r+" layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."),t.setSize({width:this.width(),height:this.height()}),t.draw(),a.So.isBrowser&&this.content.appendChild(t.canvas._canvas),this}getParent(){return null}getLayer(){return null}hasPointerCapture(t){return u.q0(t,this)}setPointerCapture(t){u.I5(t,this)}releaseCapture(t){u.Xg(t,this)}getLayers(){return this.children}_bindContentEvents(){!a.So.isBrowser||tt.forEach(([t,e])=>{this.content.addEventListener(t,i=>{this[e](i)})})}_pointerenter(t){this.setPointersPositions(t);const e=P(t.type);this._fire(e.pointerenter,{evt:t,target:this,currentTarget:this})}_pointerover(t){this.setPointersPositions(t);const e=P(t.type);this._fire(e.pointerover,{evt:t,target:this,currentTarget:this})}_getTargetShape(t){let e=this[t+"targetShape"];return e&&!e.getStage()&&(e=null),e}_pointerleave(t){const e=P(t.type),i=S(t.type);if(!!e){this.setPointersPositions(t);var r=this._getTargetShape(i),n=!_.DD.isDragging||a.So.hitOnDragEnabled;r&&n?(r._fireAndBubble(e.pointerout,{evt:t}),r._fireAndBubble(e.pointerleave,{evt:t}),this._fire(e.pointerleave,{evt:t,target:this,currentTarget:this}),this[i+"targetShape"]=null):n&&(this._fire(e.pointerleave,{evt:t,target:this,currentTarget:this}),this._fire(e.pointerout,{evt:t,target:this,currentTarget:this})),this.pointerPos=void 0,this._pointerPositions=[]}}_pointerdown(t){const e=P(t.type),i=S(t.type);if(!!e){this.setPointersPositions(t);var r=!1;this._changedPointerPositions.forEach(n=>{var o=this.getIntersection(n);if(_.DD.justDragged=!1,a.So["_"+i+"ListenClick"]=!0,!(o&&o.isListening()))return;a.So.capturePointerEventsEnabled&&o.setPointerCapture(n.id),this[i+"ClickStartShape"]=o,o._fireAndBubble(e.pointerdown,{evt:t,pointerId:n.id}),r=!0;const l=t.type.indexOf("touch")>=0;o.preventDefault()&&t.cancelable&&l&&t.preventDefault()}),r||this._fire(e.pointerdown,{evt:t,target:this,currentTarget:this,pointerId:this._pointerPositions[0].id})}}_pointermove(t){const e=P(t.type),i=S(t.type);if(!e)return;_.DD.isDragging&&_.DD.node.preventDefault()&&t.cancelable&&t.preventDefault(),this.setPointersPositions(t);var r=!_.DD.isDragging||a.So.hitOnDragEnabled;if(!r)return;var n={};let o=!1;var h=this._getTargetShape(i);this._changedPointerPositions.forEach(l=>{const s=u.rl(l.id)||this.getIntersection(l),E=l.id,d={evt:t,pointerId:E};var v=h!==s;if(v&&h&&(h._fireAndBubble(e.pointerout,Object.assign({},d),s),h._fireAndBubble(e.pointerleave,Object.assign({},d),s)),s){if(n[s._id])return;n[s._id]=!0}s&&s.isListening()?(o=!0,v&&(s._fireAndBubble(e.pointerover,Object.assign({},d),h),s._fireAndBubble(e.pointerenter,Object.assign({},d),h),this[i+"targetShape"]=s),s._fireAndBubble(e.pointermove,Object.assign({},d))):h&&(this._fire(e.pointerover,{evt:t,target:this,currentTarget:this,pointerId:E}),this[i+"targetShape"]=null)}),o||this._fire(e.pointermove,{evt:t,target:this,currentTarget:this,pointerId:this._changedPointerPositions[0].id})}_pointerup(t){const e=P(t.type),i=S(t.type);if(!e)return;this.setPointersPositions(t);const r=this[i+"ClickStartShape"],n=this[i+"ClickEndShape"];var o={};let h=!1;this._changedPointerPositions.forEach(l=>{const s=u.rl(l.id)||this.getIntersection(l);if(s){if(s.releaseCapture(l.id),o[s._id])return;o[s._id]=!0}const E=l.id,d={evt:t,pointerId:E};let v=!1;a.So["_"+i+"InDblClickWindow"]?(v=!0,clearTimeout(this[i+"DblTimeout"])):_.DD.justDragged||(a.So["_"+i+"InDblClickWindow"]=!0,clearTimeout(this[i+"DblTimeout"])),this[i+"DblTimeout"]=setTimeout(function(){a.So["_"+i+"InDblClickWindow"]=!1},a.So.dblClickWindow),s&&s.isListening()?(h=!0,this[i+"ClickEndShape"]=s,s._fireAndBubble(e.pointerup,Object.assign({},d)),a.So["_"+i+"ListenClick"]&&r&&r===s&&(s._fireAndBubble(e.pointerclick,Object.assign({},d)),v&&n&&n===s&&s._fireAndBubble(e.pointerdblclick,Object.assign({},d)))):(this[i+"ClickEndShape"]=null,a.So["_"+i+"ListenClick"]&&this._fire(e.pointerclick,{evt:t,target:this,currentTarget:this,pointerId:E}),v&&this._fire(e.pointerdblclick,{evt:t,target:this,currentTarget:this,pointerId:E}))}),h||this._fire(e.pointerup,{evt:t,target:this,currentTarget:this,pointerId:this._changedPointerPositions[0].id}),a.So["_"+i+"ListenClick"]=!1,t.cancelable&&t.preventDefault()}_contextmenu(t){this.setPointersPositions(t);var e=this.getIntersection(this.getPointerPosition());e&&e.isListening()?e._fireAndBubble(A,{evt:t}):this._fire(A,{evt:t,target:this,currentTarget:this})}_wheel(t){this.setPointersPositions(t);var e=this.getIntersection(this.getPointerPosition());e&&e.isListening()?e._fireAndBubble(M,{evt:t}):this._fire(M,{evt:t,target:this,currentTarget:this})}_pointercancel(t){this.setPointersPositions(t);const e=u.rl(t.pointerId)||this.getIntersection(this.getPointerPosition());e&&e._fireAndBubble(f,u.yM(t)),u.Xg(t.pointerId)}_lostpointercapture(t){u.Xg(t.pointerId)}setPointersPositions(t){var e=this._getContentPosition(),i=null,r=null;t=t||window.event,t.touches!==void 0?(this._pointerPositions=[],this._changedPointerPositions=[],Array.prototype.forEach.call(t.touches,n=>{this._pointerPositions.push({id:n.identifier,x:(n.clientX-e.left)/e.scaleX,y:(n.clientY-e.top)/e.scaleY})}),Array.prototype.forEach.call(t.changedTouches||t.touches,n=>{this._changedPointerPositions.push({id:n.identifier,x:(n.clientX-e.left)/e.scaleX,y:(n.clientY-e.top)/e.scaleY})})):(i=(t.clientX-e.left)/e.scaleX,r=(t.clientY-e.top)/e.scaleY,this.pointerPos={x:i,y:r},this._pointerPositions=[{x:i,y:r,id:p.Z._getFirstPointerId(t)}],this._changedPointerPositions=[{x:i,y:r,id:p.Z._getFirstPointerId(t)}])}_setPointerPosition(t){p.Z.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'),this.setPointersPositions(t)}_getContentPosition(){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var t=this.content.getBoundingClientRect();return{top:t.top,left:t.left,scaleX:t.width/this.content.clientWidth||1,scaleY:t.height/this.content.clientHeight||1}}_buildDOM(){if(this.bufferCanvas=new k.RF({width:this.width(),height:this.height()}),this.bufferHitCanvas=new k.hh({pixelRatio:1,width:this.width(),height:this.height()}),!!a.So.isBrowser){var t=this.container();if(!t)throw"Stage has no container. A container is required.";t.innerHTML="",this.content=document.createElement("div"),this.content.style.position="relative",this.content.style.userSelect="none",this.content.className="konvajs-content",this.content.setAttribute("role","presentation"),t.appendChild(this.content),this._resizeDOM()}}cache(){return p.Z.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."),this}clearCache(){return this}batchDraw(){return this.getChildren().forEach(function(t){t.batchDraw()}),this}}I.prototype.nodeType=G,(0,a.DA)(I),z.F.addGetterSetter(I,"container")}}]);

//# sourceMappingURL=93c6018ca7.js.map