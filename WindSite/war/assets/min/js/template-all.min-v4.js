(function(a){a.fn.widgetLazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};b&&a.extend(c,b);var d=this;"scroll"==c.event&&a(c.container).bind("scroll",function(){var f=0;d.each(function(){if(!(a.abovethetop(this,c)||a.leftofbegin(this,c)))if(!a.belowthefold(this,c)&&!a.rightoffold(this,c))a(this).trigger("appear");else if(f++>c.failurelimit)return false});var e=a.grep(d,function(g){return!g.loaded});d=a(e)});this.each(function(){var f=this;if("scroll"!=
c.event||a.abovethetop(f,c)||a.leftofbegin(f,c)||a.belowthefold(f,c)||a.rightoffold(f,c))f.loaded=false;else a.widgetLoad(f);a(f).one("appear",function(){this.loaded||a.widgetLoad(f)});"scroll"!=c.event&&a(f).bind(c.event,function(){f.loaded||a(f).trigger("appear")})});a(c.container).trigger(c.event);return this};a.widgetLoad=function(b){switch(a(b).attr("name")){case "flashView":a(".widget-flashview",a(b)).each(function(){WidgetUtils.flashView_init(a(this).show())});break;case "itemsSmartAdsFlashView":a(".widget-itemssmartadsflashview-items",
a(b)).each(function(){WidgetUtils.itemsSmartAdsFlashView_init(a(this).show())});break;case "itemsFixedSmartAdsFlashView":a(".widget-itemsfixedsmartadsflashview-items",a(b)).each(function(){WidgetUtils.itemsFixedSmartAdsFlashView_init(a(this).show())});break;case "itemsShopWindowView":a(".widget-itemsshopwindowview-items",a(b)).each(function(){WidgetUtils.itemsShopWindowView_init(a(this).show())});break;case "channelView":a(".widget-channelview",a(b)).each(function(){WidgetUtils.channelView_init(a(this).show())});
break}a(b).fadeIn();b.loaded=true};a.belowthefold=function(b,c){return(c.container===undefined||c.container===window?a(window).height()+a(window).scrollTop():a(c.container).offset().top+a(c.container).height())<=a(b).offset().top-c.threshold};a.rightoffold=function(b,c){return(c.container===undefined||c.container===window?a(window).width()+a(window).scrollLeft():a(c.container).offset().left+a(c.container).width())<=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){return(c.container===undefined||
c.container===window?a(window).scrollTop():a(c.container).offset().top)>=a(b).offset().top+c.threshold+a(b).height()};a.leftofbegin=function(b,c){return(c.container===undefined||c.container===window?a(window).scrollLeft():a(c.container).offset().left)>=a(b).offset().left+c.threshold+a(b).width()};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})",
"left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);var noPicture="/assets/min/images/nopicture.gif",isDesigner=false,DEBUG=true,pageTracker;
$(document).ready(function(){try{$(window).resize(function(){$(".widget-channelview").each(function(){WidgetUtils.channelView_init($(this).show())})});$.ajax({url:"/router/site/siteFooter?v"+Math.random(),type:"GET",data:{},dataType:"html",beforeSend:function(e){e.setRequestHeader("WindType","AJAX");e.setRequestHeader("WindDataType","HTML")},error:function(){},success:function(e){$("#footer").empty().append(e)}});initLog();$("#main .ui-designer-content").length==0&&$("#main").empty().append('<div class="ui-designer-content"><div class="ui-designer-container middle-1" style="margin-right:0px"><div class="ui-designer-widget"  name="channelView" style="display:block;width:948px;height:2742px;" metadata=\'{disabled:false,align:"center",version:"1.0",name:"\u7efc\u5408\u9891\u9053",value:"channelcode",pic:"channelcode.png",height:2432,resizable:"false",minWidth:"900",data_type:"none",handles:"s"}\' align="center"><div class="widget-channelview"></div></div></div></div>');
$(".item-commission").remove();var a=$(".header-flash"),b=$(".header-image");if(a.length>0)a.attr("src")!=""?WidgetUtils.addHeaderFlash(a):WidgetUtils.addHeaderSmartAdsFlash(a);else b.length>0&&WidgetUtils.addHeaderImage(b);try{$("body").css("background","white url(/assets/min/images/body.png) repeat-x 0px -74px !important")}catch(c){}$("#wrap").prepend($("#xintaoBar"));$.ajax({url:"/router/site/siteHeader?v="+Math.random(),type:"GET",data:{},dataType:"html",beforeSend:function(e){e.setRequestHeader("WindType",
"AJAX");e.setRequestHeader("WindDataType","HTML")},error:function(){},success:function(e){$("#xintaoBar").empty().append(e)}});if($.browser.msie&&$.browser.version=="6.0"){$("#main .ui-designer-widget").css({"float":"none",display:"inline","overflow-x":"hidden"});$("img").error(function(){$(this).removeAttr("alt")})}$("#rssDialog").load("/designer/assets/toolbar/rss.html",function(){$("#rssUl li a").each(function(){$(this).attr("href",$(this).attr("href")+document.location.href.split("?")[0]+"rss")})});
if(document.location.href.indexOf("/pages/")!=-1){var d=$("#ui-designer-header .ui-designer-header-tabs ul");d.children().length>0&&d.prepend('<li><a href="/"><h2>\u9996\u9875</h2></a></li>')}$("#rss").parent().hover(function(){$("#rssDialog").show()},function(){$("#rssDialog").hide()});$("#main .ui-designer-content").each(function(){$.browser.msie&&$.browser.version=="6.0"?$(this).find(".ui-designer-container:last").css("margin-right",0).siblings().css("margin-right",2):$(this).find(".ui-designer-container:last").css("margin-right",
0).siblings().css("margin-right",5)});$("#poster-detail").length==1&&initHuabao();$(".widget-searchbox").each(function(){WidgetUtils.searchBox_init($(this).show())});$(".widget-itemsrotatorview-items").each(function(){WidgetUtils.itemsRotatorView_init($(this).show())});$(".widget-itemszoomview-items").each(function(){WidgetUtils.itemsZoomView_init($(this).show())});$(".widget-itemsappleview-items").each(function(){WidgetUtils.itemsAppleView_init($(this).show())});$(".widget-itemscycleview-items").each(function(){WidgetUtils.itemsCycleView_init($(this).show())});
$(".widget-flashview").each(function(){WidgetUtils.flashView_init($(this).show())});$(".widget-itemsscrollableview-items").each(function(){WidgetUtils.itemsScrollableView_init($(this).show())});$(".widget-itemssmartadsflashview-items").each(function(){WidgetUtils.itemsSmartAdsFlashView_init($(this).show())});$(".widget-itemsfixedsmartadsflashview-items").each(function(){WidgetUtils.itemsFixedSmartAdsFlashView_init($(this).show())});$(".widget-itemsshopwindowview-items").each(function(){WidgetUtils.itemsShopWindowView_init($(this).show())});
$(".widget-channelview").each(function(){WidgetUtils.channelView_init($(this).show())})}catch(f){$.log(f)}});function initLog(){$('.ui-designer-widget a[xt="i"]').click(function(){trackDirectItem($(this))});$('.ui-designer-widget a[xt="s"]').click(function(){trackDirectShop($(this))})}
function initHuabao(a,b,c){function d(l,u){$("dd",z).remove();$(".related-goods-marker",s).remove();if(j!=null){for(var q,o=0;o<j.length;o++){var v=j[o];if(l==v.picId){q=v;g=o;break}}if(!(q==null||!q)){h=parseInt(g/5)*5;true==u&&g>5&&t.animate({top:-1*h*r},500);w.animate({top:r*(g-h)},500);D.unbind("load").load(function(){A.text(g+1);G.empty().append(q.picDesc);var m=$(this).height()<=502?508:$(this).height()+6,p;p=parseInt(s.height());if(isNaN(p))p=0;p=Math.abs(p-m);s.animate({height:m},(p>15?0.5:
0.1)>15?500:1E3);m=q.markedItem;if(!(m==null||!m||m.length==0)){p=$(this).width()>660?660:$(this).width();$(this).height();for(var x=0;x<m.length;x++){var k=m[x],B=$('<dd style="display:none" data-tipid="'+x+'">'+k.itemTitle+"</dd>");z.append(B);B=$('<div class="related-goods-marker" style="left:'+((654-p)/2+k.x)+"px;top:"+k.y+'px" data-tipid="'+x+'"></div>');for(var C=$('<span class="marked-area" style="width:'+(k.width+8)+"px;height:"+(k.height+8)+'px;"></span>'),n=1;n<4;n++)C.append('<b class="shadow-'+
n+'" style="width:'+(k.width+(4-n)*2)+"px;height:"+(k.height+(4-n)*2)+'px;"></b>');n=$('<b class="inner-border" style="width:'+k.width+"px;height:"+k.height+'px;opacity: 1; filter:Alpha(Opacity=100);"></b>');C.append(n);n=-1*(k.height+8)/2;var y=(k.width+8)/2;n=n+k.y+270>$(this).height()?n-123:n;y=y+(654-p)/2+k.x+254>$(this).width()?y-270:y;k=$('<div class="tip-wrap" href="/titem/'+k.itemId+".html?"+k.P4PKeyword+'" style="margin-left:'+y+"px;margin-top:"+n+'px;display:none;"><b class="corner"></b><div class="goods-tip clearfix"><div class="pic goods-image"><a href="/titem/'+
k.itemId+".html?"+k.P4PKeyword+'" target="_blank"><img src="'+k.itemPic+'" /></a></div><dl class="goods-detail"><dt class="goods-name">\u5546\u54c1\u540d\u79f0:</dt><dd><a href="/titem/'+k.itemId+".html?"+k.P4PKeyword+'" target="_blank">'+k.itemTitle+'</a></dd><dt class="overwritten">\u4e00\u53e3\u4ef7:</dt><dd class="goods-price overwritten">\uffe5'+k.itemPrice+"</dd><dt>\u7b80\u8ff0:</dt><dd>"+k.itemDesc+'</dd></dl><div style="clear:both;"></div></div><div class="p4p-goods-tip"></div><b class="corner"></b></div>');
s.append(B.append(C).append(k))}$(".marked-area",s).animate({opacity:0},2E3);$(".inner-border",s).hover(function(){f($(this).parent())},function(E){var F=$(this).parent();if(E.relatedTarget)if($.contains(F.parent().find(".tip-wrap")[0],E.relatedTarget))return;e(F)});$("dd",z).fadeIn("slow").unbind("hover").hover(function(){$(this).addClass("current").siblings().removeClass("current");f($(".related-goods-marker[data-tipid="+$(this).attr("data-tipid")+"] .marked-area",s))},function(){$(this).removeClass("current");
e($(".related-goods-marker[data-tipid="+$(this).attr("data-tipid")+"] .marked-area",s))})}}).attr("src",q.picSrc)}}}function f(l){l.animate({opacity:1},500);l.parent().find(".tip-wrap").animate({opacity:1},500).css("z-Index",1).show()}function e(l){l.animate({opacity:0},1E3);l.parent().find(".tip-wrap").animate({opacity:0},1E3).css("z-Index",0).show()}a||(a=HID);b||(b=PICID);c||(c=HOTTYPE);var g,h,i,j,t=$("#J_thumbList ul"),A=$("#currentNum"),w=$("#thumbCurrent"),s=$("#J_posterOriginalImage"),D=$("#J_Image"),
G=$("#J_PosterDesc"),z=$("#related-goods"),r=parseInt($("#J_thumbList").height()/5);$.getJSON("/router/huabao/data/"+a+"?v="+Math.random(),function(l){j=l;$("body").data("hbs",j);i=j.length;b!=0?d(b,true):d($("#J_thumbList ul li div img:first").attr("data-picid"));$("#J_thumbList li").click(function(){d($("div img:first",$(this)).attr("data-picid"));return false});$("#J_prevThumb").click(function(){h=h>5?h-5:0;t.animate({top:-1*h*r},500);w.animate({top:-1*(h-g)*r},500);return false});$("#J_nextThumb").click(function(){if(!(i-
h<=5)){h+=5;t.animate({top:-1*h*r},500);w.animate({top:-1*(h-g)*r},500);return false}});D.click(function(){if(g<i-1){g-h>=4&&t.animate({top:-1*(h+5)*r},500);d(j[g+1].picId)}return false});$("#J_prevPage").click(function(){if(g>0){g-h==0&&t.animate({top:-1*(h-5)*r},500);d(j[g-1].picId)}return false});$("#J_nextPage").click(function(){if(g<i-1){g-h>=4&&t.animate({top:-1*(h+5)*r},500);d(j[g+1].picId)}return false})});if($("#poster-recommended li").length==0){$("#poster-recommended").append('<div id="loading" align="left" style="color:white;">\u6b63\u5728\u52a0\u8f7d...</div>');
$.getJSON("/router/huabao/data/hot/"+a+"/"+c+"/?v="+Math.random(),function(l){var u="";if(l&&l.length>0)for(var q=0;q<l.length;q++){var o=l[q];u+='<li><div class="poster-pic-box thumb-wrap"><a href="/huabao/'+o.id+'.html" target="_blank" hid="'+o.id+'"><img alt="'+o.name+'" src="'+o.cover.replace("_250x250","_120x120")+'"></a></div><span><a href="/huabao/'+o.id+'.html" target="_blank" hid="'+o.id+'">'+o.shortName+"</a></span></li>"}else u+="\u65e0\u63a8\u8350\u753b\u62a5";$("#loading").remove();$("#poster-recommended").append(u);
$("#poster-recommended li a").click(function(){var v=$(this).attr("hid");$("#col-main").empty();$("#col-main").append("<div id='loading' align='left' style='color:white;'>\u6b63\u5728\u52a0\u8f7d\u6570\u636e,\u8bf7\u7a0d\u5019...</div>");$.ajax({url:"/router/huabao/html/album/"+v+"?v="+Math.random(),type:"GET",data:{nick:USERNICK},dataType:"html",beforeSend:function(m){m.setRequestHeader("WindType","AJAX");m.setRequestHeader("WindDataType","HTML")},error:function(m,p){$("#loading").remove();alert(p)},
success:function(m){$("#loading").remove();$("#col-main").empty().append(m);initHuabao(v)}});return false})})}};noPicture="/assets/min/images/nopicture.gif";
function checkPID(a){a||(a=PID);$("body").append('<div id="checkPID" align="center"><div id="checkPID-desc"><h2>PID\u6b63\u5728\u68c0\u6d4b\u4e2d...</h2></div><button class="close" style="padding:2px;cursor:pointer;">\u5173\u95ed</button></div>');$("#checkPID").overlay({top:200,mask:{color:"lightSlateGray",opacity:1},closeOnClick:false,load:true});var b=[],c=[],d=$("a"),f=$("iframe");d.each(function(){var e=$(this).attr("href");if(e&&typeof e=="string"&&""!=e){e=e.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/gi);
if(e!=null)for(var g=0;g<e.length;g++){var h=e[g];h!=a&&b.push({n:$(this),v:h})}}});f.each(function(){var e=$(this).attr("src");if(e&&typeof e=="string"&&""!=e){e=e.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/gi);if(e!=null)for(var g=0;g<e.length;g++){var h=e[g];h!=a&&c.push({n:$(this),v:h})}}});if(b.length>0)for(f=0;f<b.length;f++)b[f].n.attr("title","\u5f53\u524d\u94fe\u63a5\u542b\u9519\u8befPID\u3010"+b[f].v+"\u3011").css("border","2px solid red");$("#checkPID-desc").empty().append('<h2>PID\u68c0\u6d4b\u7ed3\u679c:</h2><p style="font-size:14px;padding-top:10px;">\u672c\u6b21\u5171\u68c0\u6d4b\u3010<strong>'+
d.length+"</strong>\u3011\u4e2a\u94fe\u63a5,\u5176\u4e2d\u6709\u3010<strong>"+b.length+"</strong>\u3011\u4e2a\u9519\u8bef\u94fe\u63a5\uff0c\u542b\u9519\u8befPID\u7684\u94fe\u63a5\u5df2\u7ecf\u6807\u8bc6\u5728\u5f53\u524d\u9875\u9762</p>")}
function toggleIframe(a,b){document.getElementById("ew-tab-item0").className="ew-tab-item-0";document.getElementById("ew-tab-item1").className="ew-tab-item-1";document.getElementById("ew-tab-item2").className="ew-tab-item-2";document.getElementById("tabPanel0").style.display="none";document.getElementById("tabPanel1").style.display="none";document.getElementById("tabPanel2").style.display="none";document.getElementById(a).className+=" selected";document.getElementById(b).style.display="block"}
function convertTitle(a){if(a&&a.indexOf("span")!=-1)return a.replace("<span class=H>","").replace("</span>","");return a}function restoreTitle(a){if(a&&a.indexOf("\u5305\u90ae")!=-1)return a.replace("\u5305\u90ae","<span class=H>\u5305\u90ae</span>");return a}
function addWidgetA(){var a=$('<div class="add-widget-a">\u6dfb\u52a0\u65b0\u7ec4\u4ef6</div>');a.click(function(){try{$("#designer-widgets-dialog .add-widget-button").each(function(){var c=$(this).attr("minWidth");if(c){c=parseInt(c);c>a.parent().width()?$(this).button("disable"):$(this).button("enable")}else $(this).button("enable")});editingWidget=a.parent();$("#designer-widgets-dialog").dialog("open")}catch(b){}return false}).hover(function(){$(this).css("background","white")},function(){$(this).css("background",
" #E8EAEA")});return a}
var WidgetUtils={widgetLiLayout:function(a){var b=a.width();if(b)if(!isNaN(b)){var c=a.find("li:first").width(),d=Math.floor(b/c);if(d==1)a.find("li").css("margin-left",Math.floor((b-c)/2));else{var f=Math.floor((b%c-30)/(d-1)),e=1;a.find("li").each(function(){switch(e%d){case 0:$(this).css({"margin-left":f+"px","margin-right":"10px"});break;case 1:$(this).css({"margin-left":"10px","margin-right":"0px"});break;default:$(this).css({"margin-left":f+"px","margin-right":"0px"})}e++})}}},addHeaderFlash:function(a){try{var b=
a.attr("src");if(!(!b||b=="")){a.show().empty();var c=b.split(".swf")[0].split("_"),d=c[c.length-1].split("x"),f={src:b,wmode:"opaque",width:parseInt(a.parent().width()-2),height:parseInt(d[1])-2};a.width(a.parent().width());a.height(parseInt(d[1]));a.parent().height(parseInt(d[1]));a.flashembed(f);this.flashWidget_preLoader(a)}}catch(e){$.log(e)}},addHeaderImage:function(a){try{var b=a.attr("src"),c=a.attr("href");if(!(!b||b=="")){if(c&&c.indexOf("http://")==-1)c="http://"+c;var d=new Image;d.onload=
function(){a.parent().height(d.height)};d.src=b;a.show().empty().append('<a href="'+c+'" target="_blank"><img src="'+b+'"/></a>')}}catch(f){$.log(f)}},addHeaderSmartAdsFlash:function(a){try{a.show().empty();var b={catid:"",count:"20",sz:"15",type:"2",i:PID};a.height(90);a.parent().height(90);a.flashembed({src:"http://a.alimama.cn/widget/yr1/yr1fixed_950_90.swf",wmode:"opaque",width:950,height:90},b);this.flashWidget_preLoader(a);$("#ui-designer-header .ui-designer-header-tabs").position().top>65&&
$(".ui-designer-header-tabs").css("top",65)}catch(c){$.log(c)}},searchBox_init:function(a){var b=$(".preview_content",a);if(b.length==1){var c=a.parent();a={};a=isDesigner?c.searchBox("option"):eval("("+c.attr("metadata")+")");var d=a.line,f=a.cat;d==0?$("ul.words,br",b).remove():$.getScript("/assets/min/js/keywords.min.js",function(){var e=[],g=parseInt((c.width()-10)/40);if(f!="0")for(var h in keywords[f].sub)e.push([keywords[f].sub[h].w,keywords[f].sub[h].c]);else for(var i in keywords)for(h in keywords[i].sub)e.push([keywords[i].sub[h].w,
keywords[i].sub[h].c]);e.sort(function(){return Math.random()>0.5?-1:1});if(e.length<d*g){var j=[];for(i in keywords)for(h in keywords[i].sub){if(e.length+j.length>d*g)break;j.push([keywords[i].sub[h].w,keywords[i].sub[h].c])}j.sort(function(){return Math.random()>0.5?-1:1});e=e.concat(j)}$("ul.words,br",b).remove();for(i=0;i<d;i++){j=$('<ul class="words" style="width:'+(c.width()-10)+'px;font-size:12px;"></ul>');for(h=0;h<g;h++)j.append('<li><a target="_blank" href="/search?q='+encodeURIComponent(e[h+
i*g][0])+"&cid="+e[h+i*g][1]+'">'+e[h+i*g][0]+"</a></li>");b.append(j)}b.append('<br style="clear:both;">')})}},itemsThumbView_init:function(a){isDesigner&&WidgetUtils.widgetLiLayout(a.show())},topicView_init:function(a){a.css("margin-left","0px").show();if(isDesigner){$("li a",a).each(function(){var b=$(this).attr("href").replace("%7Bpid%7D",PID);$(this).attr("href",b)});WidgetUtils.widgetLiLayout(a)}return a},catsListView_init:function(a){a.width(a.parent().width());isDesigner&&$("li a",a).each(function(){var b=
$(this).attr("href").replace("%7Bpid%7D",PID).replace("%7Bpid%7D",PID);$(this).attr("href",b)})},designerHeaderTabs_init:function(a){isDesigner&&$("ul li",a).each(function(){var b=$("a",$(this)),c=b.attr("href").replace("%7Bpid%7D",PID).replace("%7Bpid%7D",PID);b.attr("href",c)})},itemsLinkView_init:function(a){$("li:first",a.show()).css("border-top","1px solid 1px solid #EBEBEB")},itemsRotatorView_init:function(a){a.show();$(".main_image .desc",a).show();var b=$(".image_thumb ul li:first",a);if(b.length!=
0){WidgetUtils.itemsRotatorView_showMain(a,b);$(".image_thumb ul li",a).click(function(){var c=$(this);$(".main_image",a);if(c.is(".active"))return false;else WidgetUtils.itemsRotatorView_animateMain(a,c);c.addClass("active").siblings().removeClass("active");return false}).hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")})}},itemsRotatorView_showMain:function(a,b){var c=a.find(".main_image"),d=b.find("img").attr("alt");a=restoreTitle(d);var f=b.find("a").attr("href");
if(f!=noPicture)f=f.replace("bao/uploaded","imgextra")+"_310x310.jpg";var e=b.find(".title");e.attr("commission");var g=e.attr("price");e=e.attr("href");$(".desc .title",c).empty().append('<a href="'+e+'" target="_blank" title="'+d+'">'+a+"</a>");$(".desc .price",c).text(g+"\u5143");$("img",c).fadeTo("medium",0.5).attr("alt",d).attr("title",d);d=$("img",c).parent();d.attr("href",e);if(!isDesigner)if(b.attr("nid")){d.attr("onClick","_gaq.push(['_trackEvent', 'xt-"+PID+"', 'item-d-"+b.attr("nk")+"-"+
b.attr("nid")+"', '"+a+"']);");$(".desc .title a",c).attr("onClick","_gaq.push(['_trackEvent', 'xt-"+PID+"', 'item-d-"+b.attr("nk")+"-"+b.attr("nid")+"', '"+a+"']);")}b=new Image;b.onload=function(){$("img",c).fadeTo("fast",1).attr({src:f})};b.src=f},itemsRotatorView_animateMain:function(a,b){var c=this,d=a.find(".main_image"),f=d.find(".title").height();$(".title",d).animate({marginBottom:-f},250,function(){$(".title",d).animate({marginBottom:"0"},250);c.itemsRotatorView_showMain(a,b)}).show()},
itemsZoomView_init:function(a){var b=this;a.show();b.itemsZoomView_init_func(a,$(".thumb li a:first",a));$.browser.msie&&$.browser.version=="6.0"||$(".thumb li .div-cell",a).hover(function(){$(this).css({"z-index":"10"});$("img",$(this));$(this).find(".a-cell").addClass("hover").stop().animate({marginTop:"-100px",marginLeft:"-100px",top:"50%",left:"50%",width:"160px",height:"160px",padding:"20px"},200)},function(){$(this).css({"z-index":"0"});$(this).find(".a-cell").removeClass("hover").stop().animate({marginTop:"0",
marginLeft:"0",top:"0",left:"0",width:"100px",height:"100px",padding:"0px"},400)});$(".thumb li a",a).click(function(){b.itemsZoomView_init_func(a,$(this));return false})},itemsZoomView_init_func:function(a,b){var c=b.attr("href");$(".main-view img",a).fadeTo("medium",0.5);var d=new Image,f=b.attr("title"),e=restoreTitle(f);d.onload=function(){$(".main-view img",a).fadeTo("fast",1).attr({src:c,alt:f,title:f});var g=$(".main-view a:first",a).attr("href",b.attr("click")),h=$(".main-view .title a",a).empty().append(e).attr("href",
b.attr("click"));if(!isDesigner)if(b.attr("nid")){g.attr("onClick","_gaq.push(['_trackEvent', 'xt-"+PID+"', 'item-d-"+b.attr("nk")+"-"+b.attr("nid")+"', '"+e+"']);");h.attr("onClick","_gaq.push(['_trackEvent', 'xt-"+PID+"', 'item-d-"+b.attr("nk")+"-"+b.attr("nid")+"', '"+e+"']);")}$(".main-view .price",a).text(b.attr("price")+"\u5143")};d.src=c},itemsAppleView_init:function(a){$(".slides .slide",a).width(a.width()-2);a.show();$(".menu table tr td img",a).click(function(b){$("td.menuItem",a).removeClass("act").addClass("inact");
var c=$(this).parents("td");c.addClass("act");c=c.prevAll($(".menuItem",a)).length;$(".slides",a).stop().animate({marginLeft:-c*a.width()+"px"},450);b.preventDefault()});$(".menu table tr td.menuItem:first",a).addClass("act").siblings().addClass("inact")},itemsCycleView_init:function(a){a.show()},flashView_init:function(a){try{var b=a.attr("src");if(!b||b=="")a.height(200).parent().height(200);else{a.show().empty();var c=b.split(".swf")[0].split("_"),d=c[c.length-1].split("x"),f=a.parent().width();
a.width(f);var e=parseInt(d[1])+10;a.height(e-5);a.parent().height(e);a.flashembed({src:b,wmode:"opaque",width:f,height:e-10});this.flashWidget_preLoader(a)}}catch(g){$.log(g)}},itemsScrollableView_init:function(a){var b=a.parent();$(".navi",b).length==0&&$(".ui-designer-widget-header",b).append('<div class="navi"></div>');a.show();b=a.width(a.width()-2).height(200);if($(".item",b).width(a.width()-2).length>0){b.scrollable({circular:true});b.navigator({navi:a.parent().find(".navi").empty()});isDesigner||
b.autoscroll({interval:5E3})}},itemsSmartAdsFlashView_init:function(a){try{var b=a.show().parent(),c="http://a.alimama.cn/widget/yr1/yr1any.swf?r="+Math.random(),d={};d=isDesigner?b.itemsSmartAdsFlashView("option"):eval("("+b.attr("metadata")+")");d.h_h=b.height()-5;d.h_w=b.width()-5;a.empty();var f={src:c,wmode:"transparent",width:d.h_w+"",height:d.h_h+""},e={count:d.count+"",catid:d.catid+"",h_h:d.h_h+"",h_w:d.h_w+"",sz:d.sz+"",type:d.type+"",i:PID,st_tc:d.st_tc+"",st_bgc:d.st_bgc+"",st_bdc:d.st_bdc+
"",st_pc:d.st_pc+"",st_lg:d.st_lg+"",st_pb:d.st_pb+""};a.width(d.h_w);a.height(d.h_h);a.flashembed(f,e);this.flashWidget_preLoader(a)}catch(g){$.log(g)}},itemsFixedSmartAdsFlashView_init:function(a){try{var b=a.show().parent(),c={};c=isDesigner?b.itemsFixedSmartAdsFlashView("option"):eval("("+b.attr("metadata")+")");a.empty();var d=parseInt(c.height),f=parseInt(c.width),e=c.sz,g=parseInt(c.type),h=b.width();if(d=="0"||f=="0"||f>h){for(var i=null,j=0;j<fixedSmartAdsSz.length;j++)if(fixedSmartAdsSz[j].width<
h)if(i==null)i=fixedSmartAdsSz[j];else if(fixedSmartAdsSz[j].width>i.width)i=fixedSmartAdsSz[j];else if(fixedSmartAdsSz[j].width==i.width)if(fixedSmartAdsSz[j].height>i.height)i=fixedSmartAdsSz[j];if(i!=null){f=i.width;d=i.height;e=i.sz;g=i.type;isDesigner&&b.itemsFixedSmartAdsFlashView("option","type",g)}if(isDesigner){b.itemsFixedSmartAdsFlashView("option","height",d);b.itemsFixedSmartAdsFlashView("option","width",f);b.itemsFixedSmartAdsFlashView("option","sz",e)}}var t={src:"http://a.alimama.cn/widget/yr1/yr1fixed_"+
f+"_"+d+".swf?version"+Math.random(),wmode:"transparent",width:f+"",height:d+""},A={count:c.count+"",catid:c.catid+"",sz:e+"",type:g+"",i:PID};a.width(f);a.height(d+10);b.height(d+10);a.flashembed(t,A);this.flashWidget_preLoader(a)}catch(w){$.log(w)}},itemsShopWindowView_init:function(a){try{a.show().empty();var b=a.parent(),c={};c=isDesigner?b.itemsShopWindowView("option"):eval("("+b.attr("metadata")+")");var d={src:"http://bm.alimama.cn/bcv1.swf?v="+c.revision,wmode:"opaque",width:c.bannerWidth,
height:c.bannerHeight},f={bannerWidth:c.bannerWidth,bannerHeight:c.bannerHeight,bannerSID:c.bannerSID,bannerPID:PID,dataSource:c.dataSource,bid:c.bid,pid:PID,ass_rep:"pid%3D"+PID+"%26unid=%3D",appSource:c.appSource};a.height(c.bannerHeight);b.height(c.bannerHeight+10);a.flashembed(d,f);this.flashWidget_preLoader(a)}catch(e){$.log(e)}},channelView_init:function(a){a.show().empty();var b=a.parent(),c={};c=isDesigner?b.channelView("option"):eval("("+b.attr("metadata")+")");c=channels[c.value];var d=
$('<iframe frameborder="0" marginheight="0" marginwidth="0" border="0" id="alimamaifrm" name="alimamaifrm" scrolling="no" height="100%" width="100%"></iframe>'),f=c.clickUrl.replace("mm_10011550_0_0",PID).replace("mm_13667242_0_0",PID);d.attr("src",f).height(parseInt(c.height));a.height(c.height+5);b.height(c.height+5);a.append(d)},flashWidget_preLoader:function(a){var b=a.parent();b.find(".ui-designer-loading").remove();b.prepend('<div align="center" class="ui-designer-loading">\u6b63\u5728\u8f7d\u5165<span class="flash_p">0%</span>...</div>');
isDesigner&&b.resizable("disable");var c=a.children().first(),d=b.find(".flash_p");b.find(".ui-designer-loading").everyTime(1E3,"flash",function(){try{var f=c[0].PercentLoaded();d.text(f+"%");if(f==100){$(this).stopTime("flash");isDesigner?$(this).oneTime(3E3,"showflash",function(){b.find(".ui-designer-loading").remove();b.resizable("enable")}):b.find(".ui-designer-loading").remove()}}catch(e){$(this).stopTime("flash");isDesigner?$(this).oneTime(3E3,"showflash",function(){b.find(".ui-designer-loading").remove();
b.resizable("enable")}):b.find(".ui-designer-loading").remove()}})}};$(function(){initSearchWidget()});
function initSearchWidget(a){a||(a=$("body"));$(".prop-item .more",a).click(function(){if($(this).hasClass("close")){$(this).parent().find(".moreValue").show();$(this).text("\u6536\u8d77").removeClass("close").addClass("open")}else{$(this).parent().find(".moreValue").hide();$(this).text("\u66f4\u591a").removeClass("open").addClass("close")}return false});$(".J_PropToggler",a).click(function(){var b=$("a",$(this));if(b.hasClass("close")){$(".prop-item:gt(3)",$(this).parent()).show();$("span",b).text("\u6536\u8d77");
b.removeClass("close").addClass("open")}else{$(".prop-item:gt(3)",$(this).parent()).hide();$("span",b).text("\u66f4\u591a");b.removeClass("open").addClass("close")}return false});$(".prop-item li a",a).click(function(){var b=$(this).parents(".widget-customer:first");if($(this).hasClass("selected")){$(this).removeClass("selected");$('.selected-attr a[value="'+$(this).attr("value")+'"]',b).parent().remove();$(".selected-attr dd",b).length==0&&$(".selected-attr",b).hide()}else{$(".selected-attr",b).show();
$("a",$(this).parents("dd:first")).removeClass("selected");$(this).addClass("selected");var c=$(this).attr("value").split(":")[0];$('.selected-attr a[value*="'+c+':"]',b).parent().remove();c=$(this).parents(".prop-item").find("dt.search-prop");c=$('<dd><a value="'+$(this).attr("value")+'"><h5>'+c.text()+"</h5>"+$(this).text()+'<span class="close-icon"></span></a></dd>');$(".selected-attr dl",b).append(c);c.click(function(){$(this).remove();$('.prop-item a[value="'+$("a",this).attr("value")+'"]',b).removeClass("selected");
$(".selected-attr dd",b).length==0&&$(".selected-attr",b).hide()})}return false});$(".searchwidget-btn,.answer",a).click(function(){var b=$(this).parents(".widget-customer:first"),c="";$(".selected-attr dd a",b).each(function(){c+=$(this).attr("value")+";"});$('.searchCustome input[name="props"]',b).val(c);$(".searchCustome",b).submit()})};var channels={brand_lib:{name:"\u54c1\u724c\u5e93",value:"brand_lib",pic:"/assets/min/images/channel/brand_lib.jpg",bigPic:"/assets/min/images/channel/brand_lib_big.jpg",height:4120,clickUrl:"http://pindao.huoban.taobao.com/channel/brand_lib.htm?pid=mm_10011550_0_0&mode=86"},shop_street:{name:"\u5e97\u94fa\u8857",value:"huangguan",pic:"http://img.alimama.cn/cms/images/1287996980716.gif",bigPic:"http://img.alimama.cn/cms/images/1287997005529.gif",height:1290,clickUrl:"http://taoke.alimama.com/tms/channel/huangguan.htm?pid=mm_10011550_0_0&eventid=101858"},
jipiao:{name:"\u673a\u7968\u9891\u9053",value:"jipiao",pic:"http://img.alimama.cn/cms/images/1283924634215.jpg",bigPic:"http://img.alimama.cn/cms/images/1283924617885.jpg",height:1570,clickUrl:"http://taoke.alimama.com/tms/channel/jipiao.htm?pid=mm_10011550_0_0&eventid=101829"},channelcode:{name:"\u7efc\u5408\u9891\u9053",value:"channelcode",pic:"http://img.alimama.cn/cms/images/1286869492993.jpg",bigPic:"http://img.alimama.cn/cms/images/1286869476677.jpg",height:1890,clickUrl:"http://taoke.alimama.com/tms/channel/channelcode.htm?pid=mm_10011550_0_0&eventid=101329"},
channelmall:{name:"\u5546\u57ce\u9891\u9053",value:"channelmall",pic:"http://img.alimama.cn/cms/images/1286515480276.jpg",bigPic:"http://img.alimama.cn/cms/images/1286515433553.jpg",height:2593,clickUrl:"http://taoke.alimama.com/tms/channel/channelmall.htm?pid=mm_10011550_0_0&eventid=101334"},onsale:{name:"\u7279\u5356\u9891\u9053",value:"onsale",pic:"http://img.alimama.cn/cms/images/1283505145077.jpg",bigPic:"http://img.alimama.cn/cms/images/1283505042320.jpg",height:2240,clickUrl:"http://taoke.alimama.com/tms/channel/onsale.htm?pid=mm_10011550_0_0&eventid=101586"},
lady:{name:"\u5973\u4eba\u9891\u9053",value:"lady",pic:"http://img.alimama.cn/cms/images/1274591445606.png",bigPic:"http://img.alimama.cn/cms/images/1274587581948.jpg",height:2960,clickUrl:"http://taoke.alimama.com/tms/channel/lady.htm?pid=mm_10011550_0_0&eventid=101345"},man:{name:"\u7537\u4eba\u9891\u9053",value:"man",pic:"http://img.alimama.cn/cms/images/1274591489428.png",bigPic:"http://img.alimama.cn/cms/images/1274586523965.jpg",height:1920,clickUrl:"http://taoke.alimama.com/tms/channel/man.htm?pid=mm_10011550_0_0&eventid=101330"},
beauty:{name:"\u7f8e\u5bb9\u9891\u9053",value:"beauty",pic:"http://img.alimama.cn/cms/images/1274591393756.png",bigPic:"http://img.alimama.cn/cms/images/1274586574475.jpg",height:2760,clickUrl:"http://taoke.alimama.com/tms/channel/beauty.htm?pid=mm_10011550_0_0&eventid=101328"},jewelry:{name:"\u9970\u54c1\u978b\u5305",value:"jewelry",pic:"http://img.alimama.cn/cms/images/1274591478278.png",bigPic:"http://img.alimama.cn/cms/images/1274586536179.jpg",height:2620,clickUrl:"http://taoke.alimama.com/tms/channel/jewelry.htm?pid=mm_10011550_0_0&eventid=101331"},
taobrandchannel:{name:"\u6dd8\u54c1\u724c",value:"taobrandchannel",pic:"http://img.alimama.cn/cms/images/1277794914356.jpg",bigPic:"http://img.alimama.cn/cms/images/1277794893044.jpg",height:3040,clickUrl:"http://taoke.alimama.com/tms/channel/taobrandchannel.htm?pid=mm_10011550_0_0&eventid=101605"},taiwan:{name:"\u53f0\u6e7e\u9986\u9891\u9053",value:"taiwan",pic:"http://img.alimama.cn/cms/images/1274591455855.png",bigPic:"http://img.alimama.cn/cms/images/1274586544922.jpg",height:2950,clickUrl:"http://taoke.alimama.com/tms/channel/taiwan.htm?pid=mm_10011550_0_0&eventid=101350"},
channelfy:{name:"\u6dd8\u5b9d\u98ce\u4e91\u699c",value:"channelfy",pic:"http://img.alimama.cn/cms/images/1277868564857.png",bigPic:"http://img.alimama.cn/cms/images/1277868503677.jpg",height:2700,clickUrl:"http://pindao.huoban.taobao.com/channel/channelfy.htm?pid=mm_10011550_0_0&eventid=101325"},digital:{name:"\u6570\u7801\u9891\u9053",value:"digital",pic:"http://img.alimama.cn/cms/images/1274591436134.png",bigPic:"http://img.alimama.cn/cms/images/1274586558196.jpg",height:3330,clickUrl:"http://taoke.alimama.com/tms/channel/digital.htm?pid=mm_10011550_0_0&eventid=101332"},
baby:{name:"\u5c45\u5bb6\u73a9\u5177",value:"baby",pic:"http://img.alimama.cn/cms/images/1274591505097.png",bigPic:"http://img.alimama.cn/cms/images/1274586499786.jpg",height:2382,clickUrl:"http://taoke.alimama.com/tms/channel/baby.htm?pid=mm_10011550_0_0&eventid=101326"},mallhouse:{name:"\u5bb6\u88c5\u9891\u9053",value:"mallhouse",pic:"http://img.alimama.cn/cms/images/1276132646307.gif",bigPic:"http://img.alimama.cn/cms/images/1276132754545.jpg",height:1260,clickUrl:"http://taoke.alimama.com/tms/channel/mallhouse.htm?pid=mm_10011550_0_0&eventid=101546"},
huodong69:{name:"69\u5143\u673a\u7968",value:"huodong69",pic:"http://img.alimama.cn/cms/images/1284086806505.jpg",bigPic:"http://img.alimama.cn/cms/images/1284086793421.jpg",height:2870,clickUrl:"http://taoke.alimama.com/tms/channel/huodong69.htm?pid=mm_10011550_0_0&eventid=101830"},channelmankill:{name:"\u79d2\u6740\u53ca\u6ee1\u7acb\u51cf\u5e7f\u544a\u6a21\u5757",value:"channelmankill",pic:"http://img01.taobaocdn.com/tps/i1/T1Gb8PXc0AXXXXXXXX-700-278.jpg",bigPic:"http://img04.taobaocdn.com/tps/i4/T1jsXPXhBzXXXXXXXX-97-93.jpg",
height:380,clickUrl:"http://taoke.alimama.com/tms/channel/channelmankill.htm?pid=mm_10011550_0_0&eventid=101985"},huangguan:{name:"\u6dd8\u5b9d\u7687\u51a0\u5e97\u94fa\u7cbe\u9009",value:"huangguan",pic:"http://img.alimama.cn/cms/images/1287996980716.gif",bigPic:"http://img.alimama.cn/cms/images/1287997005529.gif",height:1290,clickUrl:"http://taoke.alimama.com/tms/channel/huangguan.htm?pid=mm_10011550_0_0&eventid=101858"},food1:{name:"\u98df\u54c1\u9891\u9053",value:"food1",pic:"http://img.alimama.cn/cms/images/1274591369018.png",
bigPic:"http://img.alimama.cn/cms/images/1274586591574.jpg",height:2030,clickUrl:"http://taoke.alimama.com/tms/channel/food1.htm?pid=mm_10011550_0_0&eventid=101865"},electric:{name:"\u7535\u5668\u57ce\u9891\u9053",value:"electric",pic:"http://img.alimama.cn/cms/images/1274591426271.png",bigPic:"http://img.alimama.cn/cms/images/1274586729133.jpg",height:1320,clickUrl:"http://taoke.alimama.com/tms/channel/electric.htm?pid=mm_10011550_0_0&eventid=101333"}};