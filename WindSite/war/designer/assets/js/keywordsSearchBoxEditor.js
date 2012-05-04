/**
 * 画报编辑器
 */
(function($) {
	$.widget("ui.keywordsSearchBoxEditor", {
		/**
		 * 参数
		 */
		options : {},
		/**
		 * 创建组件
		 */
		_create : function() {
		},
		/**
		 * 组件初始化
		 */
		_init : function() {
			var self = this;
			o = self.options;
			var keywordsSearchBoxDialog = self.element;// 组件

		},// 关键词更新
		keywords_change : function() {
			var _search_box_position = $('#k_search_box_checked')
					.is(':checked') ? $('#k_search_box_position').val() : '';
			this.keywords_init(); // 关键词初始化设置
			this.preview_size() // 预览尺寸设置
		},
		// 预览尺寸更新
		preview_size : function() {
			preview_width
					.set('innerHTML', ad_content.get('offsetWidth') + 'px');
			preview_height.set('innerHTML', ad_content.get('offsetHeight')
							+ 'px');
		},
		// 关键词初始化设置
		keywords_init : function() {
			if (keywords) {
				if (alimama_tks.sbpos_s == 'l' || alimama_tks.sbpos_s == 'r') {
					alimama_tks.kwdln_i = 2;
				}
				var arr_data = [];
				var data = '';
				var length = parseInt(alimama_tks.w_i / 40);
				if (alimama_tks.kwdcat_s != "all") {
					for (var i in keywords[alimama_tks.kwdcat_s].sub) {
						arr_data.push([keywords[alimama_tks.kwdcat_s].sub[i].w,
								keywords[alimama_tks.kwdcat_s].sub[i].c]);
					}
				} else {
					for (var cat in keywords) {
						for (var i in keywords[cat].sub) {
							arr_data.push([keywords[cat].sub[i].w,
									keywords[cat].sub[i].c]);
						}
					}
				}
				arr_data.sort(randomsort);
				if (arr_data.length < alimama_tks.kwdln_i * length) {
					var newarr_data = [];
					for (var cat in keywords) {
						for (var i in keywords[cat].sub) {
							if ((arr_data.length + newarr_data.length) > alimama_tks.kwdln_i
									* length) {
								break;
							}
							newarr_data.push([keywords[cat].sub[i].w,
									keywords[cat].sub[i].c]);
						}
					}
					newarr_data.sort(randomsort);
					arr_data = arr_data.concat(newarr_data);
				}
				if (ad_content.hasChildNodes()) {
					ad_content.get('childNodes').remove();
				}
				if (alimama_tks.bk_i == 1) {
					ad_content.setStyle('width', alimama_tks.w_i - 2);
					ad_content.setStyle('border', '1px solid #'
									+ alimama_tks.bkc_c);
				} else {
					ad_content.setStyle('border', 'none');
					ad_content.setStyle('width', alimama_tks.w_i);
				}
				var _search_box_html = '<ul><li id="t_search" class="t_search">';
				_search_box_html += '   <form method="get" action="http://search8.taobao.com/browse/search_auction.htm"  target="_blank">';
				_search_box_html += '       <label for="q">';
				_search_box_html += '           <input type="text" class="searchBox" id="q" name="q" /><input type="submit" value="" class="searchBtn" id="searchbtn" />';
				_search_box_html += '       </label>';
				_search_box_html += '       <input type="hidden" value="" />';
				_search_box_html += '   </form>';
				_search_box_html += '</li></ul>';
				var _search_box = ad_content.create(_search_box_html);
				switch (alimama_tks.sbpos_s) {
					case 'lt' :
					case 'l' :
					case 't' :
					case 'r' :
						ad_content.appendChild(_search_box);
						break;
				}
				switch (alimama_tks.sbpos_s) {
					case 'lt' :
					case 'rb' :
					case 't' :
					case 'b' :
					case '' :
						for (var j = 0; j < alimama_tks.kwdln_i; j++) {
							var _keywords_cnt = ad_content
									.create('<ul style="width:'
											+ (ad_content.get('offsetWidth') - 10)
											+ 'px;font-Size:'
											+ alimama_tks.kwdfnt_s
											+ ';" ></ul>');
							for (var i = 0; i < length; i++) {
								var _keywords_list = _keywords_cnt
										.create('<li><a href="http://search8.taobao.com/browse/search_auction.htm?q='
												+ arr_data[i + j * length][0]
												+ '&cat='
												+ arr_data[i + j * length][1]
												+ '&pid=m_0_0_0&commend=all&search_type=auction&user_action=initiative&f=D9_5_1&at_topsearch=1&sort=&spercent=0>&viewIndex=7&style=grid" target="_blank" style="color:#'
												+ alimama_tks.hc_c
												+ '">'
												+ arr_data[i + j * length][0]
												+ '</a></li>');
								_keywords_cnt.appendChild(_keywords_list);
							}
							ad_content.appendChild(_keywords_cnt);
						}
						break
					case 'l' :
					case 'r' :
						var _width = ad_content.get('offsetWidth')
								- _search_box.get('offsetWidth') - 12;
						for (var j = 0; j < alimama_tks.kwdln_i; j++) {
							var _keywords_cnt = ad_content
									.create('<ul style="width:' + _width
											+ 'px;font-Size:'
											+ alimama_tks.kwdfnt_s + ';"></ul>');
							for (var i = 0; i < length; i++) {
								var _keywords_list = _keywords_cnt
										.create('<li><a href="http://search8.taobao.com/browse/search_auction.htm?q='
												+ arr_data[i + j * length][0]
												+ '&cat='
												+ arr_data[i + j * length][1]
												+ '&pid=m_0_0_0&commend=all&search_type=auction&user_action=initiative&f=D9_5_1&at_topsearch=1&sort=&spercent=0>&viewIndex=7&style=grid" target="_blank" style="color:#'
												+ alimama_tks.hc_c
												+ '">'
												+ arr_data[i + j * length][0]
												+ '</a></li>');
								_keywords_cnt.appendChild(_keywords_list);
							}
							ad_content.appendChild(_keywords_cnt);
						}
						break;
				}
			}

			switch (alimama_tks.sbpos_s) {
				case 'rb' :
				case 'b' :
					ad_content.appendChild(_search_box);
					break;
			}
			switch (alimama_tks.sbpos_s) {
				case 'lt' :
					_search_box.next().setStyle(
							'width',
							ad_content.get('offsetWidth')
									- _search_box.get('offsetWidth') - 12
									+ 'px');
					break
				case 'l' :
					_search_box.addClass('l');
					break;
				case 'rb' :
					_search_box.previous().setStyle(
							'width',
							ad_content.get('offsetWidth')
									- _search_box.get('offsetWidth') - 12
									+ 'px');
					break;
				case 'r' :
					_search_box.addClass('r');
					break;
				case 't' :
				case 'b' :
					_search_box.addClass('p_t');
					_input_width = ad_content.get('offsetWidth') > 600
							? 600
							: ad_content.get('offsetWidth');
					_input_width = (_input_width - 120) + 'px';
					ad_content.one('#t_search input').setStyle('width',
							_input_width);
					break;
			}
			switch (alimama_tks.sbpos_s) {
				case 'lt' :
				case 'l' :
				case 'rb' :
				case 'r' :
				case '' :
					alimama_tks.h_i = alimama_tks.kwdln_i * 29;
					break;
				case 't' :
				case 'b' :
					alimama_tks.h_i = alimama_tks.kwdln_i * 29 + 35;
					break;
			}
			ad_content.setStyle('height', alimama_tks.h_i + 'px');
		},
		// 随机排序函数
		randomsort : function(a, b) {
			return Math.random() > 0.5 ? -1 : 1;
		}

	});
	var keywords = {
		"0001" : {
			"name" : "女人",
			"sub" : [{
						w : "ONLY",
						c : "16"
					}, {
						w : "T恤",
						c : "16"
					}, {
						w : "Uniqlo",
						c : "16"
					}, {
						w : "加大",
						c : "16"
					}, {
						w : "包邮",
						c : "16"
					}, {
						w : "卫衣",
						c : "16"
					}, {
						w : "外套",
						c : "16"
					}, {
						w : "大码",
						c : "16"
					}, {
						w : "套装",
						c : "16"
					}, {
						w : "女装",
						c : "16"
					}, {
						w : "女装秋装",
						c : "16"
					}, {
						w : "婚纱",
						c : "16"
					}, {
						w : "小外套",
						c : "16"
					}, {
						w : "小西装",
						c : "16"
					}, {
						w : "开衫",
						c : "16"
					}, {
						w : "情侣装",
						c : "16"
					}, {
						w : "打底",
						c : "16"
					}, {
						w : "打底衫",
						c : "16"
					}, {
						w : "打底裤",
						c : "16"
					}, {
						w : "新款",
						c : "16"
					}, {
						w : "棉衣",
						c : "16"
					}, {
						w : "毛衣",
						c : "16"
					}, {
						w : "牛仔裤",
						c : "16"
					}, {
						w : "皮衣",
						c : "16"
					}, {
						w : "短裙",
						c : "16"
					}, {
						w : "秋冬短裤",
						c : "16"
					}, {
						w : "秋季新品",
						c : "16"
					}, {
						w : "秋装",
						c : "16"
					}, {
						w : "羽绒服",
						c : "16"
					}, {
						w : "背带裤",
						c : "16"
					}, {
						w : "背心",
						c : "16"
					}, {
						w : "衬衫",
						c : "16"
					}, {
						w : "裤子",
						c : "16"
					}, {
						w : "西装",
						c : "16"
					}, {
						w : "连帽卫衣 ",
						c : "16"
					}, {
						w : "连衣裙",
						c : "16"
					}, {
						w : "针织衫",
						c : "16"
					}, {
						w : "铅笔裤",
						c : "16"
					}, {
						w : "长款 毛衣",
						c : "16"
					}, {
						w : "长袖",
						c : "16"
					}, {
						w : "长袖t恤",
						c : "16"
					}, {
						w : "韩版",
						c : "16"
					}, {
						w : "韩版毛衣",
						c : "16"
					}, {
						w : "风衣",
						c : "16"
					}, {
						w : "马甲",
						c : "16"
					}, {
						w : "ck内裤",
						c : "1625"
					}, {
						w : "丝袜",
						c : "1625"
					}, {
						w : "五指袜",
						c : "1625"
					}, {
						w : "保暖内衣",
						c : "1625"
					}, {
						w : "内衣",
						c : "1625"
					}, {
						w : "内裤",
						c : "1625"
					}, {
						w : "内裤女",
						c : "1625"
					}, {
						w : "塑身衣",
						c : "1625"
					}, {
						w : "女内裤",
						c : "1625"
					}, {
						w : "家居服",
						c : "1625"
					}, {
						w : "情侣睡衣",
						c : "1625"
					}, {
						w : "打底袜",
						c : "1625"
					}, {
						w : "文胸",
						c : "1625"
					}, {
						w : "浴袍",
						c : "1625"
					}, {
						w : "爱慕",
						c : "1625"
					}, {
						w : "男士内裤",
						c : "1625"
					}, {
						w : "睡衣",
						c : "1625"
					}, {
						w : "睡袍",
						c : "1625"
					}, {
						w : "秋冬",
						c : "1625"
					}, {
						w : "纯棉袜子",
						c : "1625"
					}, {
						w : "袜",
						c : "1625"
					}, {
						w : "袜套",
						c : "1625"
					}, {
						w : "袜子",
						c : "1625"
					}, {
						w : "袜子批发",
						c : "1625"
					}, {
						w : "袜子男",
						c : "1625"
					}, {
						w : "裤袜",
						c : "1625"
					}, {
						w : "连裤袜",
						c : "1625"
					}, {
						w : "隐形文胸",
						c : "1625"
					}, {
						w : "魔力挺",
						c : "1625"
					}, {
						w : "发圈",
						c : "1705"
					}, {
						w : "发夹",
						c : "1705"
					}, {
						w : "发带",
						c : "1705"
					}, {
						w : "发箍",
						c : "1705"
					}, {
						w : "发饰",
						c : "1705"
					}, {
						w : "头箍",
						c : "1705"
					}, {
						w : "头饰",
						c : "1705"
					}, {
						w : "戒指",
						c : "1705"
					}, {
						w : "手机美容",
						c : "1705"
					}, {
						w : "手机贴钻",
						c : "1705"
					}, {
						w : "毛衣链",
						c : "1705"
					}, {
						w : "盘发",
						c : "1705"
					}, {
						w : "盘发器",
						c : "1705"
					}, {
						w : "盘发棒",
						c : "1705"
					}, {
						w : "耳环",
						c : "1705"
					}, {
						w : "耳环架",
						c : "1705"
					}, {
						w : "耳钉",
						c : "1705"
					}, {
						w : "肩章",
						c : "1705"
					}, {
						w : "肩章流苏",
						c : "1705"
					}, {
						w : "胸针",
						c : "1705"
					}, {
						w : "蝴蝶结",
						c : "1705"
					}, {
						w : "韩国 蝴蝶",
						c : "1705"
					}, {
						w : "韩国饰品",
						c : "1705"
					}, {
						w : "项链",
						c : "1705"
					}, {
						w : "饰品",
						c : "1705"
					}, {
						w : "首饰盒",
						c : "1705"
					}, {
						w : "包",
						c : "50006842"
					}, {
						w : "包包女包",
						c : "50006842"
					}, {
						w : "卡包",
						c : "50006842"
					}, {
						w : "女包",
						c : "50006842"
					}, {
						w : "女士钱包",
						c : "50006842"
					}, {
						w : "拉杆箱",
						c : "50006842"
					}, {
						w : "男包",
						c : "50006842"
					}, {
						w : "腰包",
						c : "50006842"
					}, {
						w : "钥匙包",
						c : "50006842"
					}, {
						w : "钱包",
						c : "50006842"
					}, {
						w : "ugg",
						c : "50006843"
					}, {
						w : "内增高",
						c : "50006843"
					}, {
						w : "单 鞋",
						c : "50006843"
					}, {
						w : "单鞋",
						c : "50006843"
					}, {
						w : "女鞋",
						c : "50006843"
					}, {
						w : "帆布鞋",
						c : "50006843"
					}, {
						w : "新品",
						c : "50006843"
					}, {
						w : "水钻",
						c : "50006843"
					}, {
						w : "流苏靴",
						c : "50006843"
					}, {
						w : "短靴",
						c : "50006843"
					}, {
						w : "秒杀",
						c : "50006843"
					}, {
						w : "雨靴",
						c : "50006843"
					}, {
						w : "雪地靴",
						c : "50006843"
					}, {
						w : "靴",
						c : "50006843"
					}, {
						w : "靴子",
						c : "50006843"
					}, {
						w : "鞋",
						c : "50006843"
					}, {
						w : "韩国",
						c : "50006843"
					}, {
						w : "马丁靴",
						c : "50006843"
					}, {
						w : "高跟鞋",
						c : "50006843"
					}, {
						w : "zara围巾",
						c : "50010404"
					}, {
						w : "丝巾",
						c : "50010404"
					}, {
						w : "围巾",
						c : "50010404"
					}, {
						w : "围巾棉麻",
						c : "50010404"
					}, {
						w : "围脖",
						c : "50010404"
					}, {
						w : "增高鞋垫",
						c : "50010404"
					}, {
						w : "帽子",
						c : "50010404"
					}, {
						w : "手套",
						c : "50010404"
					}, {
						w : "披肩",
						c : "50010404"
					}, {
						w : "皮带",
						c : "50010404"
					}, {
						w : "纽扣",
						c : "50010404"
					}, {
						w : "袖套",
						c : "50010404"
					}, {
						w : "鞋垫",
						c : "50010404"
					}]
		},
		"0002" : {
			"name" : "男人",
			"sub" : [{
						w : "ck内裤",
						c : "1625"
					}, {
						w : "丝袜",
						c : "1625"
					}, {
						w : "五指袜",
						c : "1625"
					}, {
						w : "保暖内衣",
						c : "1625"
					}, {
						w : "内衣",
						c : "1625"
					}, {
						w : "内裤",
						c : "1625"
					}, {
						w : "内裤女",
						c : "1625"
					}, {
						w : "塑身衣",
						c : "1625"
					}, {
						w : "女内裤",
						c : "1625"
					}, {
						w : "家居服",
						c : "1625"
					}, {
						w : "情侣睡衣",
						c : "1625"
					}, {
						w : "打底袜",
						c : "1625"
					}, {
						w : "文胸",
						c : "1625"
					}, {
						w : "浴袍",
						c : "1625"
					}, {
						w : "爱慕",
						c : "1625"
					}, {
						w : "男士内裤",
						c : "1625"
					}, {
						w : "睡衣",
						c : "1625"
					}, {
						w : "睡袍",
						c : "1625"
					}, {
						w : "秋冬",
						c : "1625"
					}, {
						w : "纯棉袜子",
						c : "1625"
					}, {
						w : "袜",
						c : "1625"
					}, {
						w : "袜套",
						c : "1625"
					}, {
						w : "袜子",
						c : "1625"
					}, {
						w : "袜子批发",
						c : "1625"
					}, {
						w : "袜子男",
						c : "1625"
					}, {
						w : "裤袜",
						c : "1625"
					}, {
						w : "连裤袜",
						c : "1625"
					}, {
						w : "隐形文胸",
						c : "1625"
					}, {
						w : "魔力挺",
						c : "1625"
					}, {
						w : "发圈",
						c : "1705"
					}, {
						w : "发夹",
						c : "1705"
					}, {
						w : "发带",
						c : "1705"
					}, {
						w : "发箍",
						c : "1705"
					}, {
						w : "发饰",
						c : "1705"
					}, {
						w : "头箍",
						c : "1705"
					}, {
						w : "头饰",
						c : "1705"
					}, {
						w : "戒指",
						c : "1705"
					}, {
						w : "手机美容",
						c : "1705"
					}, {
						w : "手机贴钻",
						c : "1705"
					}, {
						w : "毛衣链",
						c : "1705"
					}, {
						w : "盘发",
						c : "1705"
					}, {
						w : "盘发器",
						c : "1705"
					}, {
						w : "盘发棒",
						c : "1705"
					}, {
						w : "耳环",
						c : "1705"
					}, {
						w : "耳环架",
						c : "1705"
					}, {
						w : "耳钉",
						c : "1705"
					}, {
						w : "肩章",
						c : "1705"
					}, {
						w : "肩章流苏",
						c : "1705"
					}, {
						w : "胸针",
						c : "1705"
					}, {
						w : "蝴蝶结",
						c : "1705"
					}, {
						w : "韩国 蝴蝶",
						c : "1705"
					}, {
						w : "韩国饰品",
						c : "1705"
					}, {
						w : "项链",
						c : "1705"
					}, {
						w : "饰品",
						c : "1705"
					}, {
						w : "首饰盒",
						c : "1705"
					}, {
						w : "G2000",
						c : "30"
					}, {
						w : "JEEP",
						c : "30"
					}, {
						w : "ck",
						c : "30"
					}, {
						w : "七匹狼",
						c : "30"
					}, {
						w : "休闲裤",
						c : "30"
					}, {
						w : "休闲西服",
						c : "30"
					}, {
						w : "休闲西装",
						c : "30"
					}, {
						w : "优衣库",
						c : "30"
					}, {
						w : "假两件",
						c : "30"
					}, {
						w : "劲霸",
						c : "30"
					}, {
						w : "卫衣男",
						c : "30"
					}, {
						w : "唐狮",
						c : "30"
					}, {
						w : "夹克",
						c : "30"
					}, {
						w : "夹克男",
						c : "30"
					}, {
						w : "杰克琼斯",
						c : "30"
					}, {
						w : "森马",
						c : "30"
					}, {
						w : "牛仔衬衫",
						c : "30"
					}, {
						w : "牛仔裤",
						c : "30"
					}, {
						w : "牛仔裤男",
						c : "30"
					}, {
						w : "男式西装",
						c : "30"
					}, {
						w : "男装",
						c : "30"
					}, {
						w : "男装外套",
						c : "30"
					}, {
						w : "男装秋装",
						c : "30"
					}, {
						w : "男裤",
						c : "30"
					}, {
						w : "红豆",
						c : "30"
					}, {
						w : "衣服",
						c : "30"
					}, {
						w : "西服",
						c : "30"
					}, {
						w : "长袖T恤",
						c : "30"
					}, {
						w : "长袖衬衫",
						c : "30"
					}, {
						w : "韩版男装",
						c : "30"
					}, {
						w : "马克华菲",
						c : "30"
					}, {
						w : "包",
						c : "50006842"
					}, {
						w : "包包女包",
						c : "50006842"
					}, {
						w : "卡包",
						c : "50006842"
					}, {
						w : "女包",
						c : "50006842"
					}, {
						w : "女士钱包",
						c : "50006842"
					}, {
						w : "拉杆箱",
						c : "50006842"
					}, {
						w : "男包",
						c : "50006842"
					}, {
						w : "腰包",
						c : "50006842"
					}, {
						w : "钥匙包",
						c : "50006842"
					}, {
						w : "钱包",
						c : "50006842"
					}, {
						w : "zara围巾",
						c : "50010404"
					}, {
						w : "丝巾",
						c : "50010404"
					}, {
						w : "围巾",
						c : "50010404"
					}, {
						w : "围巾棉麻",
						c : "50010404"
					}, {
						w : "围脖",
						c : "50010404"
					}, {
						w : "增高鞋垫",
						c : "50010404"
					}, {
						w : "帽子",
						c : "50010404"
					}, {
						w : "手套",
						c : "50010404"
					}, {
						w : "披肩",
						c : "50010404"
					}, {
						w : "皮带",
						c : "50010404"
					}, {
						w : "纽扣",
						c : "50010404"
					}, {
						w : "袖套",
						c : "50010404"
					}, {
						w : "鞋垫",
						c : "50010404"
					}]
		},
		"0003" : {
			"name" : "数码",
			"sub" : [{
						w : "MP3",
						c : "1201"
					}, {
						w : "手机",
						c : "1512"
					}, {
						w : "老人手机",
						c : "1512"
					}, {
						w : "诺基亚",
						c : "1512"
					}, {
						w : "360游戏",
						c : "20"
					}, {
						w : "PSP",
						c : "20"
					}, {
						w : "xbox360",
						c : "20"
					}, {
						w : "3d 眼镜",
						c : "50008090"
					}, {
						w : "ipad套",
						c : "50008090"
					}, {
						w : "充电电池",
						c : "50008090"
					}, {
						w : "内胆包",
						c : "50008090"
					}, {
						w : "净水器",
						c : "50018930"
					}, {
						w : "定时器",
						c : "50018930"
					}, {
						w : "手机 挂件",
						c : "50008090"
					}, {
						w : "手机套",
						c : "50008090"
					}, {
						w : "手机座",
						c : "50008090"
					}, {
						w : "手机挂件",
						c : "50008090"
					}, {
						w : "手机挂饰",
						c : "50008090"
					}, {
						w : "手机贴",
						c : "50008090"
					}, {
						w : "手机贴纸",
						c : "50008090"
					}, {
						w : "手机链",
						c : "50008090"
					}, {
						w : "插卡音箱",
						c : "50008090"
					}, {
						w : "散热器",
						c : "50008090"
					}, {
						w : "榨汁机",
						c : "50018930"
					}, {
						w : "煮蛋器",
						c : "50018930"
					}, {
						w : "电水壶",
						c : "50018930"
					}, {
						w : "电热水壶",
						c : "50018930"
					}, {
						w : "电脑包",
						c : "50008090"
					}, {
						w : "电饼铛",
						c : "50018930"
					}, {
						w : "相机包",
						c : "50008090"
					}, {
						w : "网线",
						c : "50008090"
					}, {
						w : "蓝牙耳机",
						c : "50008090"
					}, {
						w : "读卡器",
						c : "50008090"
					}, {
						w : "豆浆机",
						c : "50018930"
					}, {
						w : "酸奶机",
						c : "50018930"
					}, {
						w : "键盘膜",
						c : "50008090"
					}, {
						w : "防辐射贴",
						c : "50008090"
					}]
		},
		"0004" : {
			"name" : "美容",
			"sub" : [{
						w : "bb霜",
						c : "50010788"
					}, {
						w : "skin79",
						c : "50010788"
					}, {
						w : "假发",
						c : "50010788"
					}, {
						w : "假睫毛",
						c : "50010788"
					}, {
						w : "化妆包",
						c : "50010788"
					}, {
						w : "化妆棉",
						c : "50010788"
					}, {
						w : "卡姿兰",
						c : "50010788"
					}, {
						w : "双眼皮贴",
						c : "50010788"
					}, {
						w : "唇膏",
						c : "50010788"
					}, {
						w : "指甲油",
						c : "50010788"
					}, {
						w : "眼影",
						c : "50010788"
					}, {
						w : "睫毛膏",
						c : "50010788"
					}, {
						w : "粉饼",
						c : "50010788"
					}, {
						w : "美甲",
						c : "50010788"
					}]
		},
		"0005" : {
			"name" : "家居",
			"sub" : [{
						w : "储物箱",
						c : "21"
					}, {
						w : "创意 家居",
						c : "21"
					}, {
						w : "包中包",
						c : "21"
					}, {
						w : "压缩袋",
						c : "21"
					}, {
						w : "喜糖盒",
						c : "21"
					}, {
						w : "挂钟",
						c : "21"
					}, {
						w : "收纳",
						c : "21"
					}, {
						w : "收纳凳",
						c : "21"
					}, {
						w : "收纳盒",
						c : "21"
					}, {
						w : "收纳箱",
						c : "21"
					}, {
						w : "收纳袋",
						c : "21"
					}, {
						w : "整理箱",
						c : "21"
					}, {
						w : "暖宝宝",
						c : "21"
					}, {
						w : "毛巾架",
						c : "21"
					}, {
						w : "浴帘",
						c : "21"
					}, {
						w : "牙刷架",
						c : "21"
					}, {
						w : "电子秤",
						c : "21"
					}, {
						w : "电子称",
						c : "21"
					}, {
						w : "相册",
						c : "21"
					}, {
						w : "纸巾盒",
						c : "21"
					}, {
						w : "透明鞋盒",
						c : "21"
					}, {
						w : "钥匙扣",
						c : "21"
					}, {
						w : "闹钟",
						c : "21"
					}, {
						w : "鞋盒",
						c : "21"
					}, {
						w : "马桶垫",
						c : "21"
					}, {
						w : "马桶套",
						c : "21"
					}, {
						w : "十字绣",
						c : "2128"
					}, {
						w : "十字绣架",
						c : "2128"
					}, {
						w : "地垫",
						c : "2128"
					}, {
						w : "地毯",
						c : "2128"
					}, {
						w : "开关贴",
						c : "2128"
					}, {
						w : "窗帘",
						c : "2128"
					}, {
						w : "蜡烛",
						c : "2128"
					}, {
						w : "台灯",
						c : "27"
					}, {
						w : "墙纸",
						c : "27"
					}, {
						w : "墙贴",
						c : "27"
					}, {
						w : "墙贴儿童",
						c : "27"
					}, {
						w : "开关",
						c : "27"
					}, {
						w : "开关插座",
						c : "27"
					}, {
						w : "插座",
						c : "27"
					}, {
						w : "浴室柜",
						c : "27"
					}, {
						w : "灯",
						c : "27"
					}, {
						w : "贴纸",
						c : "27"
					}, {
						w : "马桶",
						c : "27"
					}, {
						w : "周黑鸭",
						c : "50002766"
					}, {
						w : "咖啡",
						c : "50002766"
					}, {
						w : "奶酪",
						c : "50002766"
					}, {
						w : "巧克力",
						c : "50002766"
					}, {
						w : "核桃",
						c : "50002766"
					}, {
						w : "牛肉干",
						c : "50002766"
					}, {
						w : "红枣",
						c : "50002766"
					}, {
						w : "零食",
						c : "50002766"
					}]
		},
		"0006" : {
			"name" : "运动",
			"sub" : [{
						w : "促销",
						c : "50010388"
					}, {
						w : "匡威",
						c : "50010388"
					}, {
						w : "李宁",
						c : "50010388"
					}, {
						w : "耐克",
						c : "50010388"
					}, {
						w : "运动套装",
						c : "50016756"
					}, {
						w : "运动服",
						c : "50016756"
					}, {
						w : "运动裤",
						c : "50016756"
					}, {
						w : "卷发棒",
						c : "50019142"
					}, {
						w : "吹风机",
						c : "50019142"
					}, {
						w : "护膝",
						c : "50019142"
					}, {
						w : "烧烤炉",
						c : "2203"
					}, {
						w : "艾灸盒",
						c : "50019142"
					}, {
						w : "鱼竿",
						c : "2203"
					}]
		},
		"0099" : {
			"name" : "其他",
			"sub" : [{
						w : "摄像头",
						c : "11"
					}, {
						w : "无线鼠标",
						c : "11"
					}, {
						w : "硬盘",
						c : "11"
					}, {
						w : "罗技",
						c : "11"
					}, {
						w : "键盘",
						c : "11"
					}, {
						w : "音箱",
						c : "11"
					}, {
						w : "鸡蛋鼠标",
						c : "11"
					}, {
						w : "鼠标",
						c : "11"
					}, {
						w : "鼠标垫",
						c : "11"
					}, {
						w : "笔记本",
						c : "1101"
					}, {
						w : "丝瓜水",
						c : "1801"
					}, {
						w : "卡尼尔",
						c : "1801"
					}, {
						w : "御泥坊",
						c : "1801"
					}, {
						w : "护手霜",
						c : "1801"
					}, {
						w : "曼秀雷敦",
						c : "1801"
					}, {
						w : "欧莱雅",
						c : "1801"
					}, {
						w : "泊美",
						c : "1801"
					}, {
						w : "洗面奶",
						c : "1801"
					}, {
						w : "牛尔",
						c : "1801"
					}, {
						w : "玉兰油",
						c : "1801"
					}, {
						w : "玫琳凯",
						c : "1801"
					}, {
						w : "相宜本草",
						c : "1801"
					}, {
						w : "美丽日记",
						c : "1801"
					}, {
						w : "美即面膜",
						c : "1801"
					}, {
						w : "自然堂",
						c : "1801"
					}, {
						w : "芳草集",
						c : "1801"
					}, {
						w : "面膜",
						c : "1801"
					}, {
						w : "不织布",
						c : "25"
					}, {
						w : "打地鼠",
						c : "25"
					}, {
						w : "玩具",
						c : "25"
					}, {
						w : "魔术道具",
						c : "25"
					}, {
						w : "汽车坐垫",
						c : "26"
					}, {
						w : "汽车用品",
						c : "26"
					}, {
						w : "汽车香水",
						c : "26"
					}, {
						w : "车贴",
						c : "26"
					}, {
						w : "宠物衣服",
						c : "29"
					}, {
						w : "狗厕所",
						c : "29"
					}, {
						w : "狗窝",
						c : "29"
					}, {
						w : "书",
						c : "33"
					}, {
						w : "漫画",
						c : "33"
					}, {
						w : "儿童玩具",
						c : "50005998"
					}, {
						w : "婴儿床",
						c : "50005998"
					}, {
						w : "学步带",
						c : "50005998"
					}, {
						w : "小布叮",
						c : "50005998"
					}, {
						w : "悠悠球",
						c : "50005998"
					}, {
						w : "拼图",
						c : "50005998"
					}, {
						w : "溜溜球",
						c : "50005998"
					}, {
						w : "益智玩具",
						c : "50005998"
					}, {
						w : "积木",
						c : "50005998"
					}, {
						w : "电脑桌",
						c : "50008164"
					}, {
						w : "简易衣柜",
						c : "50008164"
					}, {
						w : "衣柜",
						c : "50008164"
					}, {
						w : "鞋架",
						c : "50008164"
					}, {
						w : "鞋柜",
						c : "50008164"
					}, {
						w : "亲子装",
						c : "50008165"
					}, {
						w : "儿童内衣",
						c : "50008165"
					}, {
						w : "儿童睡衣",
						c : "50008165"
					}, {
						w : "哈衣",
						c : "50008165"
					}, {
						w : "地板袜",
						c : "50008165"
					}, {
						w : "婴儿",
						c : "50008165"
					}, {
						w : "婴儿服装",
						c : "50008165"
					}, {
						w : "婴儿鞋",
						c : "50008165"
					}, {
						w : "孕妇装",
						c : "50008165"
					}, {
						w : "孕妇裤",
						c : "50008165"
					}, {
						w : "学步鞋",
						c : "50008165"
					}, {
						w : "童装",
						c : "50008165"
					}, {
						w : "童鞋",
						c : "50008165"
					}, {
						w : "休闲鞋",
						c : "50016853"
					}, {
						w : "男鞋",
						c : "50016853"
					}, {
						w : "皮鞋",
						c : "50016853"
					}, {
						w : "DVD",
						c : "50018908"
					}, {
						w : "hdmi",
						c : "50018908"
					}, {
						w : "扩音器",
						c : "50018908"
					}, {
						w : "耳机",
						c : "50018908"
					}, {
						w : "耳麦",
						c : "50018908"
					}, {
						w : "音响",
						c : "50018908"
					}, {
						w : "书包",
						c : "50018627"
					}, {
						w : "书签",
						c : "50018627"
					}, {
						w : "卡通贴纸",
						c : "50018627"
					}, {
						w : "文件夹",
						c : "50018627"
					}, {
						w : "文具",
						c : "50018627"
					}, {
						w : "日记本",
						c : "50018627"
					}, {
						w : "本",
						c : "50018627"
					}, {
						w : "本子",
						c : "50018627"
					}, {
						w : "橡皮",
						c : "50018627"
					}, {
						w : "白板",
						c : "50018627"
					}, {
						w : "笔",
						c : "50018627"
					}, {
						w : "笔筒",
						c : "50018627"
					}, {
						w : "笔袋",
						c : "50018627"
					}, {
						w : "计算器",
						c : "50018627"
					}, {
						w : "订书机",
						c : "50018627"
					}, {
						w : "钢笔",
						c : "50018627"
					}, {
						w : "铅笔",
						c : "50018627"
					}, {
						w : "韩国文具",
						c : "50018627"
					}, {
						w : "马克笔",
						c : "50018627"
					}, {
						w : "黑板",
						c : "50018627"
					}]
		}
	};
})(jQuery);
