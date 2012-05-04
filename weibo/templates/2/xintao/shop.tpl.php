<?php
if (!defined('IN_APPLICATION')) {
	exit ('ACCESS DENIED!');
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php


if ($shop) {
	$site = F('escape',V('-:sysConfig/site_name'));
	$title = $shop['title'];
	$sellerNick = $shop['nick'];
?>
<title><?php echo $title.'-'.$site?></title>
<meta name="title" content="<?php echo $title.'-'.$site?>">
<meta name="keywords" content="<?php echo $site.','.$title.','.$sellerNick?>">
<meta name="description" content="<?php echo $title.','.$site.'为您提供淘宝网优质店铺：'.$title.',商家:'.$sellerNick.'的产品,评价信息。'?>">

<?php }?>

<?php TPL::plugin('include/css_link');?>
<?php TPL::plugin('include/js_link');?>
<link href="<?php echo W_BASE_URL;?>css/default/pub.css" rel="stylesheet" type="text/css" />
<link href="<?php echo W_BASE_URL;?>css/default/xintao/shopInfo.css" rel="stylesheet" type="text/css" />
</head>
<body id="items">
	<div id="wrap">
		<div class="wrap-in">
			<?php TPL::plugin('include/header'); ?>
			<div id="container" class="single">
				<div class="extra">
					<!-- 站点导航 开始 -->
					<?php Xpipe::pagelet('common.siteNav'); ?>
					<!-- 站点导航 结束 -->
				</div>
				<div class="content">
					<div class="main-wrap">
						<div class="main">
                        	<div class="main-bd">
                            	<?php

	TPL :: module('xintao/shopInfo', array (
		'shop' => $shop
	));
	if ($isItems) {
		$params = array ();
		$params['fields'] = 'num_iid,title,nick,pic_url,cid,price,type,delist_time,post_fee,location,score,volume,has_discount,num,is_prepay,promoted_service,ww_status,list_time';
		$params['nicks'] = $shop['nick'];
		$params['show_num'] = 40;
		Xpipe :: pagelet('xintao.itemList', $params);
	}
?>
                            </div>
                         </div>
					</div>
				</div>
			</div>
			<!-- 尾部 开始 -->
			<?php TPL::module('footer');?>
			<!-- 尾部 结束 -->
		</div>
	</div>
	<?php TPL::module('gotop');?>
</body>
<script>
(function(X, $) {
		//lazyload($('.shop .pic img'));
		$('.shop a.J_TrackItem').click(function() {
					X.trackItem($(this));
				});
		$('.shop a.J_TrackShop').click(function() {
					X.trackShop($(this));
				});
})(Xwb, $);
</script>
</html>
