<@p.pageMemberHeader>
<meta name="keywords" content="会员中心">
<meta name="description" content="会员中心">
<title>找回商城订单- ${sitetitle}</title>
</@p.pageMemberHeader>
<script>$(function(){initFanliSiteOrderMall();});</script>
<div class="layout grid-m0 ks-clear"><div class="col-main"><div class="main-wrap J_TRegion"><dl id="position"><dt>找回订单</dt><dd> &gt; <span id="UserMap">找回商城订单</span></dd></dl></div></div></div>
<div class="layout grid-s5m0 ks-clear">
	<div class="col-main">
		<div class="main-wrap J_TRegion">
			<div class="box J_TBox ks-clear">
				<div class="shop-custome fanli-member-info">
					<div class="fanli-member-info-bd">
						<ol class="step step-four"><li><span>1.登录返利网站</span></li><li><span>2.商城交易</span></li><li class="current"><span>3.确认收货</span></li><li class="last"><span>返利</span></li></ol>
						<table>
						<tr><td colspan=3><strong style="color:#AB4400;font-size:14px;">等待找回并确认的交易记录</strong></td></tr>
							<tr>
							<td>查询时间：</td><td><input type="text" name="startDate" id="startDate" value="${startDate}" />&nbsp;&nbsp;至&nbsp;&nbsp;<input type="text" name="endDate" id="endDate" value="${endDate}"/></td>
							<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="btn btn-ok" id="searchOrderButton"><input type="button" value="查询"></span></td>
							</tr>
						</table>
						<TABLE class="wTable" width=100%>
							<THEAD><TR><TH width=180px>商城活动</TH><TH width=100px>商品编号</TH><TH width=60px>单价</TH><TH width=40px>数量</TH><TH width=100px>状态</TH><TH width=150px>下单时间</TH><TH>操作</TH></TR></THEAD>
							<TBODY id="orderMallSearchResult">
							</TBODY>
						</TABLE>
						<@ws.help>
						<h3>1.什么情况下需要使用找回订单功能？</h3>
						<p>当您以非正常的返利流程【如非登录状态下购买】在本站完成购物，并且确认收货后，发现在自己的交易记录中查找不到该条交易，则可以尝试使用找回订单功能，找到后，点击确认该订单，填写正确的订单编号，即可找回该交易，同时生成您的返利记录</p>
						</@ws.help>
					</div>
				</div>
			</div>			
		</div>
	</div>
	<div class="col-sub J_TRegion">
		<@p.pageMemberSideMenu></@p.pageMemberSideMenu>
	</div>
</div>
<@p.pageFooter>
</@p.pageFooter>
			