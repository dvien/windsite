(function(){tinymce.PluginManager.requireLangPack('items');tinymce.create('tinymce.plugins.itemsPlugin',{init:function(ed,url){ed.addCommand('mceitems',function(){$('#itemsSelect').dialog('open')});ed.addButton('items',{title:'items.desc',cmd:'mceitems',image:url+'/img/items.gif'});ed.onNodeChange.add(function(ed,cm,n){cm.setActive('items',n.nodeName=='IMG')})},createControl:function(n,cm){return null},getInfo:function(){return{longname:'items plugin',author:'冯晓云',authorurl:'http://www.xintaonet.com',infourl:'http://www.xintaonet.com',version:"1.0"}}});tinymce.PluginManager.add('items',tinymce.plugins.itemsPlugin)})();