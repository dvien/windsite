<div class="list"><h3 class="list-title"><span>${title}</span>成交排行榜</h3><ul>
<#list shops as s><#if s_index==0><li class="first"><a class="img floatleft" target="_blank" href="/tshop/${s.sid}.html" title="${s.title}"><img src="<#if ''!=s.picUrl>${s.picUrl}<#else>http://img02.taobaocdn.com/tps/i2/T1nB0EXnBwXXXXXXXX-80-80.png</#if>" <#if s.errorUrl??&&''!=s.errorUrl>onerror="javascript:this.src='${s.errorUrl}'" </#if>alt='${s.title}' width='50' height='50' /></a><a class="num1" target="_blank" href="/tshop/${s.sid}.html" title="${s.title}"></a> <a class="name" target="_blank" href="/tshop/${s.sid}.html" title="${s.title}">${s.title}</a></li>
<#else><li class="normal "><a target="_blank" href="/tshop/${s.sid}.html" title="${s.title}">${s.title}</a></li>
</#if></#list></ul></div>