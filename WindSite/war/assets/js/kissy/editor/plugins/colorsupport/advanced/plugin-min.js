KISSY.Editor.add("colorsupport/advanced",function(u){var m=KISSY,k=m.Editor;k.ColorSupport.ColorPicker||function(){function l(a){if(m.isArray(a))return a;var c=RegExp;if(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.test(a))return j([c.$1,c.$2,c.$3],function(d){return parseInt(d,16)});else if(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return j([c.$1,c.$2,c.$3],function(d){return parseInt(d+d,16)});else if(/^rgb\((.*),(.*),(.*)\)$/i.test(a))return j([c.$1,c.$2,c.$3],function(d){return d.indexOf("%")>
0?parseFloat(d,10)*2.55:d|0})}function n(a){a="0"+a;var c=a.length;return a.slice(c-2,c)}function o(a){a=l(a);return"#"+n(a[0].toString(16))+n(a[1].toString(16))+n(a[2].toString(16))}function r(){this._init()}var j=k.Utils.map,p=m.DOM;p.addStyleSheet(".ke-color-advanced-picker-left {float:left;display:inline;margin-left:10px;}.ke-color-advanced-picker-right {float:right;width:50px;display:inline;margin:13px 10px 0 0;cursor:crosshair;}.ke-color-advanced-picker-right a {height:2px;line-height:0;font-size:0;display:block;}.ke-color-advanced-picker-left ul{float:left;}.ke-color-advanced-picker-left li,.ke-color-advanced-picker-left a{overflow:hidden;width:15px;height:16px;line-height:0;font-size:0;display:block;}.ke-color-advanced-picker-left a:hover{width:13px;height:13px;border:1px solid white;}.ke-color-advanced-indicator {margin-left:10px;padding:2px 34px;}",
"ke-color-advanced");var q=function(){function a(b,e,g){var h=[];b=c(b);e=c(e);stepR=(e[0]-b[0])/g;stepG=(e[1]-b[1])/g;stepB=(e[2]-b[2])/g;var f=0,i=b[0],s=b[1];for(b=b[2];f<g;f++){h[f]=[i,s,b];i+=stepR;s+=stepG;b+=stepB}h[f]=e;return j(h,function(v){return j(v,function(w){return Math.min(Math.max(0,Math.floor(w)),255)})})}function c(b){var e=l(b);if(e===undefined){if(!d){d=document.createElement("textarea");d.style.display="none";document.body.insertBefore(d,document.body.childNodes[0])}try{d.style.color=
b}catch(g){return[0,0,0]}if(document.defaultView)e=l(document.defaultView.getComputedStyle(d,null).color);else{b=d.createTextRange().queryCommandValue("ForeColor");e=[b&255,(b&65280)>>>8,(b&16711680)>>>16]}}return e}var d;return function(b,e){var g=[],h=b.length;if(e===undefined)e=20;if(h==1)g=a(b[0],b[0],e);else if(h>1){var f=0;for(h=h-1;f<h;f++){var i=a(b[f],b[f+1],e[f]||e);f<h-1&&i.pop();g=g.concat(i)}}return g}}(),x="<div class='ke-color-advanced-picker'><div class='ks-clear'><div class='ke-color-advanced-picker-left'>"+
("<ul>"+j(q(["red","orange","yellow","green","cyan","blue","purple"],5),function(a){return j(q(["white","rgb("+a.join(",")+")","black"],5),function(c){return"<li><a style='background-color:"+o(c)+"' href='#'></a></li>"}).join("")}).join("</ul><ul>")+"</ul>")+"</div><div class='ke-color-advanced-picker-right'></div></div><div style='padding:10px;'><label>\u989c\u8272\u503c\uff1a <input style='width:100px' class='ke-color-advanced-value'/></label><span class='ke-color-advanced-indicator'></span></div></div>";m.augment(r,
{_init:function(){var a=this;a.win=new k.SimpleOverlay({mask:true,title:"\u989c\u8272\u62fe\u53d6\u5668",width:"550px"});var c=a.win,d=c.body,b=c.foot;d.html(x);b.html("<a class='ke-button ke-color-advanced-ok'>\u786e\u5b9a</a>&nbsp;&nbsp;&nbsp;<a class='ke-button  ke-color-advanced-cancel'>\u53d6\u6d88</a>");var e=d.one(".ke-color-advanced-indicator"),g=d.one(".ke-color-advanced-value"),h=d.one(".ke-color-advanced-picker-left");d.one(".ke-color-advanced-picker-right");c=b.one(".ke-color-advanced-ok");b=b.one(".ke-color-advanced-cancel");c.on("click",
function(){a.hide();a.cmd._applyColor(g.val())});b.on("click",function(){a.hide()});d.on("click",function(f){f.halt();f=f.target;if(p._4e_name(f)=="a"){var i=o(p.css(f,"background-color"));h._4e_contains(f)&&a._detailColor(i);g.val(i);e.css("background-color",i)}});a._detailColor("#FF9900");g.val("#FF9900");e.css("background-color","#FF9900")},_detailColor:function(a){this.win.body.one(".ke-color-advanced-picker-right").html(j(q(["#ffffff",a,"#000000"],40),function(c){return"<a style='background-color:"+
o(c)+"'></a>"}).join(""))},show:function(a){this.cmd=a;this.win.show()},hide:function(){this.win.hide()}});k.ColorSupport.ColorPicker=r}();var t=new k.ColorSupport.ColorPicker;u.addDialog("colorsupport/advanced",{show:function(l){t.show(l)},hide:function(){t.hide()}})});
