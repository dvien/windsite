<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>代理帐号设置 - 用户管理</title>
<link href="<?php echo W_BASE_URL;?>css/admin/admin.css" rel="stylesheet" type="text/css" />
<script src="<?php echo W_BASE_URL;?>js/jquery.min.js"></script>
<script src="<?php echo W_BASE_URL;?>js/admin-all.js"></script>
<script type="text/javascript">
var authWin;
function openAuthorityWin() {
    var url = '<?php echo URL('mgr/proxy_account.addAccount');?>';
    authWin = window.open(url, 'authWin', "resizable=1,location=0,status=0,scrollbars=0,width=570,height=360");
}
function authoritySuccess() {
    if (authWin && !authWin.closed) {
        authWin.close();
        window.location.reload();
    }
}
</script>
</head>
<body class="main-body">
	<div class="path"><span class="pos"></span>当前位置：系统设置<span>&gt;</span>代理帐号设置</div>
    <div class="main-cont">
        <h3 class="title">代理帐号设置(<strong style="color:red">请添加3个以上代理帐号，使得搜索引擎或非登录会员可以正常访问微博内容</strong>)</h3>
		<div class="set-area">			
			<p class="approve-tips" style="color:red">
				
       			我们建议代理帐号为3个以上新的平时不会做过什么操作的帐号。如果不设置，当站点流量过大，可能会出现新浪微博API调用受限的情况，导致非登录用户无法正常查看网站微博内容。<br/>
       			系统将自动删除那些授权过期或已被新浪封掉的微博代理帐号或后台绑定帐号，请站长隔一段时间检查一下自己的微博绑定或代理帐号配置情况
			</p>
        </div>
		
		<div class="set-area">
			<table cellpadding="0" cellspacing="0" class="table">
            	<colgroup>
					<col/>
                    <col class="w120" />
    			</colgroup>
                <!--<thead class="tb-tit-bg">
  					<tr>
    					<th colspan="2"><div class="th-gap">代理帐号</div></th>
    					
                        
  					</tr>
                </thead>-->
                <tfoot  class="tb-tit-bg"></tfoot>
                <tbody>
					<tr class="add-rows"><td colspan="2"><a href="javascript:openAuthorityWin();" class="btn-general"><span>添加帐号</span></a></td></tr>
					<?php if (isset($list) && is_array($list) && !empty($list)) {foreach ($list as $row) {?>
                	<tr>
    					<td><?php echo $row['screen_name'];?></td>
    					<td><a href="<?php echo URL('mgr/proxy_account.delAcount','id='.$row['id']);?>" class="icon-del">删除</a></td>
                        
  					</tr>
                    <?php }}?>
                </tbody>
			</table>
		</div>
    </div>
</body>
</html>
