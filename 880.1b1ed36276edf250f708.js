(self.webpackChunkredmedical_dashboard=self.webpackChunkredmedical_dashboard||[]).push([[880],{8880:(t,i,e)=>{"use strict";e.r(i),e.d(i,{DashboardModule:()=>St});var a=e(1116),s=e(7368),n=e(7064),l=e(9861),r=e(4720);const o=["*"],m=".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n";class d{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const t=Math.max(...this.tracker);return t>1?this.rowCount+t-1:this.rowCount}update(t,i){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=i.map(t=>this._trackTile(t))}_trackTile(t){const i=this._findMatchingGap(t.colspan);return this._markTilePosition(i,t),this.columnIndex=i+t.colspan,new c(this.rowIndex,i)}_findMatchingGap(t){let i=-1,e=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),i=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(i)):(i=this.tracker.indexOf(0,this.columnIndex),-1!=i?(e=this._findGapEndIndex(i),this.columnIndex=i+1):(this._nextRow(),i=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(i)))}while(e-i<t||0==e);return Math.max(i,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}_findGapEndIndex(t){for(let i=t+1;i<this.tracker.length;i++)if(0!=this.tracker[i])return i;return this.tracker.length}_markTilePosition(t,i){for(let e=0;e<i.colspan;e++)this.tracker[t+e]=i.rowspan}}class c{constructor(t,i){this.row=t,this.col=i}}const p=new s.OlP("MAT_GRID_LIST");let h=(()=>{class t{constructor(t,i){this._element=t,this._gridList=i,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round((0,l.su)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round((0,l.su)(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(s.SBq),s.Y36(p,8))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,i){2&t&&s.uIk("rowspan",i.rowspan)("colspan",i.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:o,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(t,i){1&t&&(s.F$t(),s.TgZ(0,"div",0),s.Hsn(1),s.qZA())},styles:[m],encapsulation:2,changeDetection:0}),t})();const g=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class u{constructor(){this._rows=0,this._rowspan=0}init(t,i,e,a){this._gutterSize=w(t),this._rows=i.rowCount,this._rowspan=i.rowspan,this._cols=e,this._direction=a}getBaseTileSize(t,i){return`(${t}% - (${this._gutterSize} * ${i}))`}getTilePosition(t,i){return 0===i?"0":v(`(${t} + ${this._gutterSize}) * ${i}`)}getTileSize(t,i){return`(${t} * ${i}) + (${i-1} * ${this._gutterSize})`}setStyle(t,i,e){let a=100/this._cols,s=(this._cols-1)/this._cols;this.setColStyles(t,e,a,s),this.setRowStyles(t,i,a,s)}setColStyles(t,i,e,a){let s=this.getBaseTileSize(e,a);t._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(s,i)),t._setStyle("width",v(this.getTileSize(s,t.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(t){return`${this._rowspan} * ${this.getTileSize(t,1)}`}getComputedHeight(){return null}}class x extends u{constructor(t){super(),this.fixedRowHeight=t}init(t,i,e,a){super.init(t,i,e,a),this.fixedRowHeight=w(this.fixedRowHeight),g.test(this.fixedRowHeight)}setRowStyles(t,i){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,i)),t._setStyle("height",v(this.getTileSize(this.fixedRowHeight,t.rowspan)))}getComputedHeight(){return["height",v(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class b extends u{constructor(t){super(),this._parseRatio(t)}setRowStyles(t,i,e,a){this.baseTileHeight=this.getBaseTileSize(e/this.rowHeightRatio,a),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,i)),t._setStyle("paddingTop",v(this.getTileSize(this.baseTileHeight,t.rowspan)))}getComputedHeight(){return["paddingBottom",v(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(t){const i=t.split(":");this.rowHeightRatio=parseFloat(i[0])/parseFloat(i[1])}}class f extends u{setRowStyles(t,i){let e=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);t._setStyle("top",this.getTilePosition(e,i)),t._setStyle("height",v(this.getTileSize(e,t.rowspan)))}reset(t){t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function v(t){return`calc(${t})`}function w(t){return t.match(/([A-Za-z%]+)$/)?t:`${t}px`}let _=(()=>{class t{constructor(t,i){this._element=t,this._dir=i,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round((0,l.su)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${null==t?"":t}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const i=`${null==t?"":t}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new f:t&&t.indexOf(":")>-1?new b(t):new x(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new d);const t=this._tileCoordinator,i=this._tiles.filter(t=>!t._gridList||t._gridList===this),e=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,e),i.forEach((i,e)=>{const a=t.positions[e];this._tileStyler.setStyle(i,a.row,a.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(s.SBq),s.Y36(r.Is,8))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-grid-list"]],contentQueries:function(t,i,e){if(1&t&&s.Suo(e,h,5),2&t){let t;s.iGM(t=s.CRH())&&(i._tiles=t)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,i){2&t&&s.uIk("cols",i.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[s._Bn([{provide:p,useExisting:t}])],ngContentSelectors:o,decls:2,vars:0,template:function(t,i){1&t&&(s.F$t(),s.TgZ(0,"div"),s.Hsn(1),s.qZA())},styles:[m],encapsulation:2,changeDetection:0}),t})(),y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.uc,n.BQ],n.uc,n.BQ]}),t})();var S=e(6136);const T=["*",[["mat-card-footer"]]],k=["*","mat-card-footer"],A=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Z=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=s.lG2({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t})(),z=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=s.lG2({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),H=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(S.Qb,8))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,i){2&t&&s.ekj("_mat-animation-noopable","NoopAnimations"===i._animationMode)},exportAs:["matCard"],ngContentSelectors:k,decls:2,vars:0,template:function(t,i){1&t&&(s.F$t(T),s.Hsn(0),s.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:Z,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(t,i){1&t&&(s.F$t(A),s.Hsn(0),s.TgZ(1,"div",0),s.Hsn(2,1),s.qZA(),s.Hsn(3,2))},encapsulation:2,changeDetection:0}),t})(),I=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.BQ],n.BQ]}),t})();var R=e(5959),O=e(5416),D=(e(6238),e(6510),e(8378),e(9235),e(9764)),L=e(8318),B=e(8470),M=e(9996),$=e(2056);function j(t,i){return new L.y(e=>{const a=t.length;if(0===a)return void e.complete();const s=new Array(a);let n=0,l=0;for(let r=0;r<a;r++){const o=(0,D.D)(t[r]);let m=!1;e.add(o.subscribe({next:t=>{m||(m=!0,l++),s[r]=t},error:t=>e.error(t),complete:()=>{n++,n!==a&&m||(l===a&&e.next(i?i.reduce((t,i,e)=>(t[i]=s[e],t),{}):s),e.complete())}}))}})}let G=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.BQ],n.BQ]}),t})();const E=["*"],U=[[["","mat-list-avatar",""],["","mat-list-icon",""],["","matListAvatar",""],["","matListIcon",""]],[["","mat-line",""],["","matLine",""]],"*"],Y=["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]","[mat-line], [matLine]","*"];class P{}const Q=(0,n.Id)((0,n.Kr)(P));class F{}const J=(0,n.Kr)(F),N=new s.OlP("MatList"),X=new s.OlP("MatNavList");let W=(()=>{class t extends Q{constructor(t){super(),this._elementRef=t,this._stateChanges=new R.xQ,"action-list"===this._getListType()&&t.nativeElement.classList.add("mat-action-list")}_getListType(){const t=this._elementRef.nativeElement.nodeName.toLowerCase();return"mat-list"===t?"list":"mat-action-list"===t?"action-list":null}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(s.SBq))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-list"],["mat-action-list"]],hostAttrs:[1,"mat-list","mat-list-base"],inputs:{disableRipple:"disableRipple",disabled:"disabled"},exportAs:["matList"],features:[s._Bn([{provide:N,useExisting:t}]),s.qOj,s.TTD],ngContentSelectors:E,decls:1,vars:0,template:function(t,i){1&t&&(s.F$t(),s.Hsn(0))},styles:['.mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n'],encapsulation:2,changeDetection:0}),t})(),K=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=s.lG2({type:t,selectors:[["","mat-list-avatar",""],["","matListAvatar",""]],hostAttrs:[1,"mat-list-avatar"]}),t})(),V=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=s.lG2({type:t,selectors:[["","mat-list-icon",""],["","matListIcon",""]],hostAttrs:[1,"mat-list-icon"]}),t})(),tt=(()=>{class t extends J{constructor(t,i,e,a){super(),this._element=t,this._isInteractiveList=!1,this._destroyed=new R.xQ,this._disabled=!1,this._isInteractiveList=!!(e||a&&"action-list"===a._getListType()),this._list=e||a;const s=this._getHostElement();"button"!==s.nodeName.toLowerCase()||s.hasAttribute("type")||s.setAttribute("type","button"),this._list&&this._list._stateChanges.pipe((0,O.R)(this._destroyed)).subscribe(()=>{i.markForCheck()})}get disabled(){return this._disabled||!(!this._list||!this._list.disabled)}set disabled(t){this._disabled=(0,l.Ig)(t)}ngAfterContentInit(){(0,n.E0)(this._lines,this._element)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_isRippleDisabled(){return!this._isInteractiveList||this.disableRipple||!(!this._list||!this._list.disableRipple)}_getHostElement(){return this._element.nativeElement}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(s.SBq),s.Y36(s.sBO),s.Y36(X,8),s.Y36(N,8))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,i,e){if(1&t&&(s.Suo(e,K,5),s.Suo(e,V,5),s.Suo(e,n.X2,5)),2&t){let t;s.iGM(t=s.CRH())&&(i._avatar=t.first),s.iGM(t=s.CRH())&&(i._icon=t.first),s.iGM(t=s.CRH())&&(i._lines=t)}},hostAttrs:[1,"mat-list-item","mat-focus-indicator"],hostVars:6,hostBindings:function(t,i){2&t&&s.ekj("mat-list-item-disabled",i.disabled)("mat-list-item-avatar",i._avatar||i._icon)("mat-list-item-with-avatar",i._avatar||i._icon)},inputs:{disableRipple:"disableRipple",disabled:"disabled"},exportAs:["matListItem"],features:[s.qOj],ngContentSelectors:Y,decls:6,vars:2,consts:[[1,"mat-list-item-content"],["mat-ripple","",1,"mat-list-item-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-list-text"]],template:function(t,i){1&t&&(s.F$t(U),s.TgZ(0,"div",0),s._UZ(1,"div",1),s.Hsn(2),s.TgZ(3,"div",2),s.Hsn(4,1),s.qZA(),s.Hsn(5,2),s.qZA()),2&t&&(s.xp6(1),s.Q6J("matRippleTrigger",i._getHostElement())("matRippleDisabled",i._isRippleDisabled()))},directives:[n.wG],encapsulation:2,changeDetection:0}),t})(),it=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.uc,n.si,n.BQ,n.us,a.ez],n.uc,n.BQ,n.us,G]}),t})(),et=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.ez,I,it]]}),t})();var at=e(2066);let st=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-stack-overflow-content"]],inputs:{data:"data"},decls:13,vars:3,consts:[["role","listitem",1,"mat-elevation-z3"],["matLine",""]],template:function(t,i){1&t&&(s.TgZ(0,"mat-list-item",0),s.TgZ(1,"h3",1),s._uU(2),s.qZA(),s.TgZ(3,"p",1),s.TgZ(4,"span"),s._uU(5," Answerers "),s.qZA(),s.TgZ(6,"strong"),s._uU(7),s.qZA(),s.qZA(),s.TgZ(8,"p",1),s.TgZ(9,"span"),s._uU(10," Answered? "),s.qZA(),s.TgZ(11,"strong"),s._uU(12),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(2),s.Oqu(i.data.title),s.xp6(5),s.hij(" ",i.data.answer_count," "),s.xp6(5),s.hij(" ",i.data.is_answered?"Yes":"No"," "))},directives:[tt,n.X2],styles:["mat-list-item[_ngcontent-%COMP%]{text-align:start;border:.2px solid #f48024;margin-bottom:5px}"]}),t})(),nt=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-weather-content"]],inputs:{data:"data"},decls:21,vars:5,consts:[["role","listitem",1,"mat-elevation-z3"],["matLine",""]],template:function(t,i){1&t&&(s.TgZ(0,"mat-list-item",0),s.TgZ(1,"h3",1),s._uU(2,"Weather Forecast"),s.qZA(),s.TgZ(3,"p",1),s.TgZ(4,"span"),s._uU(5),s.qZA(),s.qZA(),s.TgZ(6,"p",1),s.TgZ(7,"span"),s._uU(8," Current Temperature "),s.qZA(),s.TgZ(9,"strong"),s._uU(10),s.qZA(),s.qZA(),s.TgZ(11,"p",1),s.TgZ(12,"span"),s._uU(13," Air Pressure "),s.qZA(),s.TgZ(14,"strong"),s._uU(15),s.qZA(),s.qZA(),s.TgZ(16,"p",1),s.TgZ(17,"span"),s._uU(18," Probability of rain "),s.qZA(),s.TgZ(19,"strong"),s._uU(20),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(5),s.AsE(" ",i.data.Datum," - ",i.data.Zeit,""),s.xp6(5),s.hij(" ",i.data["Temp. A."],"\xb0C "),s.xp6(5),s.hij(" ",i.data.Luftdruck,"hPa "),s.xp6(5),s.hij(" ",i.data.Regen,"% "))},directives:[tt,n.X2],styles:["mat-list-item[_ngcontent-%COMP%]{text-align:start;border:.2px solid #8fe0ff;margin-bottom:5px}"]}),t})();var lt=e(2693),rt=e(529);let ot=(()=>{class t{constructor(t){this.http=t,this.endpoint=rt.N.stackOverflowEndpoint}searchByKeyword(t){const i=`${this.endpoint}/search`,e=new lt.LE({fromObject:{pagesize:20,order:"desc",sort:"activity",site:"stackoverflow",intitle:t}});return this.http.get(i,{params:e}).pipe((0,M.U)(t=>t.items))}}return t.\u0275fac=function(i){return new(i||t)(s.LFG(lt.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),mt=(()=>{class t{constructor(t){this.http=t,this.endpoint=rt.N.weatherEndpoint}weatherData(){return this.http.get(this.endpoint)}}return t.\u0275fac=function(i){return new(i||t)(s.LFG(lt.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();class dt{constructor(t,i){this.component=t,this.data=i}}let ct=(()=>{class t{mapDataToWidget(t,i){return i.pipe((0,M.U)(i=>i.map(i=>this.createWidgetItem(t,i))))}createWidgetItem(t,i){return new dt(t,i)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),pt=(()=>{class t{constructor(){this.title=""}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=s.lG2({type:t,selectors:[["","appWidgetBase",""]],inputs:{title:"title"}}),t})(),ht=(()=>{class t{constructor(t){this.viewContainerRef=t}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(s.s_b))},t.\u0275dir=s.lG2({type:t,selectors:[["","appWidgetContentHost",""]]}),t})();function gt(t,i){}let ut=(()=>{class t{constructor(t){this.cfr=t}ngAfterContentInit(){this.loadComponent()}loadComponent(){const t=this.cfr.resolveComponentFactory(this.item.component),i=this.contentHost.viewContainerRef;i.clear(),i.createComponent(t).instance.data=this.item.data}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(s._Vd))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-widget-content-item"]],viewQuery:function(t,i){if(1&t&&s.Gf(ht,7),2&t){let t;s.iGM(t=s.CRH())&&(i.contentHost=t.first)}},inputs:{item:"item"},decls:1,vars:0,consts:[["appWidgetContentHost",""]],template:function(t,i){1&t&&s.YNc(0,gt,0,0,"ng-template",0)},directives:[ht],styles:[""]}),t})();function xt(t,i){1&t&&s._UZ(0,"app-widget-content-item",6),2&t&&s.Q6J("item",i.$implicit)}function bt(t,i){if(1&t&&(s.ynx(0),s.TgZ(1,"mat-list",4),s.YNc(2,xt,1,1,"app-widget-content-item",5),s.qZA(),s.BQk()),2&t){const t=s.oxw();s.xp6(2),s.Q6J("ngForOf",t.items)}}function ft(t,i){1&t&&(s.TgZ(0,"p"),s._uU(1,"No Data Available"),s.qZA())}let vt=(()=>{class t extends pt{constructor(){super(...arguments),this.items=[]}}return t.\u0275fac=function(){let i;return function(e){return(i||(i=s.n5z(t)))(e||t)}}(),t.\u0275cmp=s.Xpm({type:t,selectors:[["app-widget"]],inputs:{items:"items"},features:[s.qOj],decls:8,vars:3,consts:[[1,"widget-card"],[1,"widget-card-content"],[4,"ngIf","ngIfElse"],["noData",""],["role","list"],[3,"item",4,"ngFor","ngForOf"],[3,"item"]],template:function(t,i){if(1&t&&(s.TgZ(0,"mat-card",0),s.TgZ(1,"mat-card-header"),s.TgZ(2,"mat-card-title"),s._uU(3),s.qZA(),s.qZA(),s.TgZ(4,"mat-card-content",1),s.YNc(5,bt,3,1,"ng-container",2),s.qZA(),s.qZA(),s.YNc(6,ft,2,0,"ng-template",null,3,s.W1O)),2&t){const t=s.MAs(7);s.xp6(3),s.hij(" ",i.title," "),s.xp6(2),s.Q6J("ngIf",i.items.length>0)("ngIfElse",t)}},directives:[H,q,z,C,a.O5,W,a.sg,ut],styles:[".widget-card[_ngcontent-%COMP%]{position:absolute;top:15px;left:15px;right:15px;bottom:15px;display:flex;flex-direction:column}.widget-card-content[_ngcontent-%COMP%]{text-align:center;flex-grow:1;overflow:auto}"]}),t})();const wt=function(){return[]},_t=[{path:"",component:(()=>{class t{constructor(t,i,e){this.stackOverflowService=t,this.weatherService=i,this.widgetService=e}ngOnInit(){this.angularData=this.loadStackOverflowData("angular"),this.typeScriptData=this.loadStackOverflowData("typescript"),this.weatherData=this.loadWeatherData()}loadStackOverflowData(t){const i=this.stackOverflowService.searchByKeyword(t);return this.widgetService.mapDataToWidget(st,i)}loadWeatherData(){const t=this.weatherService.weatherData(),i=this.widgetService.mapDataToWidget(nt,t);return function(...t){if(1===t.length){const i=t[0];if((0,B.k)(i))return j(i,null);if((0,$.K)(i)&&Object.getPrototypeOf(i)===Object.prototype){const t=Object.keys(i);return j(t.map(t=>i[t]),t)}}if("function"==typeof t[t.length-1]){const i=t.pop();return j(t=1===t.length&&(0,B.k)(t[0])?t[0]:t,null).pipe((0,M.U)(t=>i(...t)))}return j(t,null)}([this.loadStackOverflowData("weather"),i]).pipe((0,M.U)(t=>((t,i)=>{const e=t.length,a=i.length;return e>a?[t.splice(0,a),i]:a>e?[t,i.splice(0,e)]:[t,i]})(t[0],t[1])),(0,M.U)(t=>((t,i)=>{const e=[];let a,s=Math.min(t.length,i.length);for(a=0;a<s;a++)e.push(t[a],i[a]);return e.push(...t.slice(s),...i.slice(s)),e})(t[0],t[1])))}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(ot),s.Y36(mt),s.Y36(ct))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-dashboard"]],decls:11,vars:15,consts:[[1,"grid-container"],["cols","2","rowHeight","350px"],["colspan","1","rowspan","1"],[3,"title","items"],["colspan","1","rowspan","2"]],template:function(t,i){if(1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"mat-grid-list",1),s.TgZ(2,"mat-grid-tile",2),s._UZ(3,"app-widget",3),s.ALo(4,"async"),s.qZA(),s.TgZ(5,"mat-grid-tile",4),s._UZ(6,"app-widget",3),s.ALo(7,"async"),s.qZA(),s.TgZ(8,"mat-grid-tile",2),s._UZ(9,"app-widget",3),s.ALo(10,"async"),s.qZA(),s.qZA(),s.qZA()),2&t){let t,e,a;s.xp6(3),s.Q6J("title","Angular")("items",null!==(t=s.lcZ(4,6,i.angularData))&&void 0!==t?t:s.DdM(12,wt)),s.xp6(3),s.Q6J("title","Weather")("items",null!==(e=s.lcZ(7,8,i.weatherData))&&void 0!==e?e:s.DdM(13,wt)),s.xp6(3),s.Q6J("title","TypeScript")("items",null!==(a=s.lcZ(10,10,i.typeScriptData))&&void 0!==a?a:s.DdM(14,wt))}},directives:[_,h,vt],pipes:[a.Ov],styles:[".grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;top:15px;left:15px;right:15px;bottom:15px}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center}"]}),t})()}];let yt=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[at.Bz.forChild(_t)],at.Bz]}),t})(),St=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.ez,et,yt,y]]}),t})()}}]);