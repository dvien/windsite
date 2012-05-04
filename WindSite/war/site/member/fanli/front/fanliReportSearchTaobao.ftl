<#if reports??&&(reports?size>0)>
	<#list reports as r>
		<TR class="report-row <#if r_index%2==0>odd<#else>even</#if>"><TD>${r.trade_id}</TD><TD style="text-align:left;"><a href="/titem/${r.num_iid}.html" target="_blank" style="color:#0166FF;">${r.item_title}</a></TD><TD>${r.pay_price}</TD><TD>${r.item_num}</TD><TD style="color:red;">${r.buyCommission}</TD><TD>${r.pay_time?datetime}</TD></TR>
	</#list>
	<#if reports?size==5><tr><td colspan="6" align=left><a href="/router/fanlimember/report/tao">查看更多</a></td></tr></#if>
<#else>
	<tr><td colspan=6 align="center"><h3>未找到符合的返利交易记录</h3></td></tr>
</#if>