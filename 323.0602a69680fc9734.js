"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[323],{323:(w,r,n)=>{n.r(r),n.d(r,{ion_segment_view:()=>u});var d=n(467),o=n(4261);const u=(()=>{let a=class{constructor(e){(0,o.r)(this,e),this.ionSegmentViewScroll=(0,o.d)(this,"ionSegmentViewScroll",7),this.scrollEndTimeout=null,this.isTouching=!1,this.disabled=!1,this.isManualScroll=void 0}handleScroll(e){var s;const{scrollLeft:t,scrollWidth:c,clientWidth:l}=e.target;this.ionSegmentViewScroll.emit({scrollRatio:t/(c-l),isManualScroll:null===(s=this.isManualScroll)||void 0===s||s}),this.resetScrollEndTimeout()}handleScrollStart(){this.scrollEndTimeout&&(clearTimeout(this.scrollEndTimeout),this.scrollEndTimeout=null),this.isTouching=!0}handleTouchEnd(){this.isTouching=!1}resetScrollEndTimeout(){this.scrollEndTimeout&&(clearTimeout(this.scrollEndTimeout),this.scrollEndTimeout=null),this.scrollEndTimeout=setTimeout(()=>{this.checkForScrollEnd()},100)}checkForScrollEnd(){this.isTouching||(this.isManualScroll=void 0)}setContent(e,s=!0){var t=this;return(0,d.A)(function*(){const l=t.getSegmentContents().findIndex(f=>f.id===e);-1!==l&&(t.isManualScroll=!1,t.resetScrollEndTimeout(),t.el.scrollTo({top:0,left:l*t.el.offsetWidth,behavior:s?"smooth":"instant"}))})()}getSegmentContents(){return Array.from(this.el.querySelectorAll("ion-segment-content"))}render(){const{disabled:e,isManualScroll:s}=this;return(0,o.h)(o.f,{key:"9f4f11d31c4db776f077e59ae895b35dd4454717",class:{"segment-view-disabled":e,"segment-view-scroll-disabled":!1===s}},(0,o.h)("slot",{key:"ea58b21f031cee2ab2b70580f336deaefa364538"}))}get el(){return(0,o.i)(this)}};return a.style={ios:":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}",md:":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}"},a})()}}]);