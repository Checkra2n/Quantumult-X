hostname=*.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,api.bilibili.com,account.wps.*,book.haitunwallet.com,app.xunjiepdf.com,api.shayujizhang.com,musicpay.kuwo.cn,vip1.kuwo.cn,mapi.weibo.com, *.uve.weibo.com,*.my10api.com,*.woailuojingdong.com,*.dayuxiangqian.com, *.googlevideo.com, s.youtube.com, www.youtube.com, youtubei.googleapis.com ,m.baidu.com,homepage-api.smzdm.com,haojia-api.smzdm.com,article-api.smzdm.com,haojia.m.smzdm.com,app-api.smzdm.com,s-api.smzdm.com,api.*.xyz,*.googlevideo.com,*.googleapis.com,api1000.gdqeb.club,
# WPS -(account.wps.*)
^https://account.wps.*/api/users/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

# 哔哩哔哩番剧开启1080P+(api.bilibili.com)
^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilifj.js
# 去除动态中的话题
^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr url reject-dict
# 去除动态中的最常访问
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/mix_uplist url reject-dict
# 可能的一些推广(beta)
^https?:\/\/api\.bilibili\.com\/pgc\/season\/app\/related\/recommend\? url reject-dict
# 推荐去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 追番去广告
^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 直播去广告
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 动态去广告
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_new\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 开屏去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 标签页处理
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 我的页面处理
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 漫画去广告
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/Flash url reject-dict

#海豚记账 -(book.haitunwallet.com)
https:\/\/book\.haitunwallet\.com\/app\/vip\/status url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/HTJZ.js

#智能证件照相机 -(app.xunjiepdf.com)
^https:\/\/app\.xunjiepdf\.com\/api\/v4\/virtualactregister url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/znzj.js

#鲨鱼记账 需要登录 解锁会员记账权限 -(api.shayujizhang.com)
https://api.shayujizhang.com/account/detail/info/ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/syjz.js

# 去微博应用内广告- （mapi.weibo.com, *.uve.weibo.com）
^https?://(sdk|wb)app.uve.weibo.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

# youtube去广告- （*.googlevideo.com, s.youtube.com, www.youtube.com, youtubei.googleapis.com）
^https?:\/\/.+\.googlevideo\.com\/.+&oad url reject-img
^https?:\/\/.+\.googlevideo\.com\/.+ctier url reject-img
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/.+ad_ url reject-img
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/.+log_ url reject-img
^https?:\/\/.+\.youtube\.com\/get_midroll_ url reject-img
^https?:\/\/premiumyva\.appspot\.com\/vmclickstoadvertisersite url reject-img
^https?:\/\/.+\.youtube\.com\/api\/stats\/ads url reject-img
^https?:\/\/.+\.youtube\.com\/api\/stats\/.+adformat url reject-img
^https?:\/\/.+\.youtube\.com\/pagead\/ url reject-img
^https?:\/\/.+\.youtube\.com\/ptracking url reject-img

#酷我音乐vip-（musicpay.kuwo.cn,vip1.kuwo.cn）
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=2
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/kuwo.js

#百度UA设置及优化手机端网页显示-（ m.baidu.com）
^https?:\/\/m\.baidu\.com url request-header (\r\n)User-Agent:.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)$2

# 什么值得买去广告-(homepage-api.smzdm.com,haojia-api.smzdm.com,article-api.smzdm.com,haojia.m.smzdm.com,app-api.smzdm.com,s-api.smzdm.com)
# 详情页去广告
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/banner url reject-dict
# 首页去广告
^https?:\/\/homepage-api\.smzdm\.com\/home url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 好价去广告
^https?:\/\/haojia-api\.smzdm\.com\/home\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 去浮动广告
^https?:\/\/app-api\.smzdm\.com\/util\/update url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 好文去广告
^https?:\/\/article-api\.smzdm\.com\/article\/index_home_page url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 搜索去广告
^https?:\/\/s-api\.smzdm\.com\/sou\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 其他
^https?:\/\/api\.smzdm\.com\/v\d\/util\/(banner|loading) url reject-dict
^https?:\/\/app-api\.smzdm\.com\/util\/loading url reject-dict

#youtube去广告-（*.googlevideo.com,*.googleapis.com）
(^https?:\/\/[\w-]+\.googlevideo\.com\/.+)(ctier=L)(&.+) url 302 $1$3
^https?:\/\/[\w-]+\.googlevideo\.com\/.+&(oad|ctier) url reject
^https?:\/\/.+\.googleapis\.com\/(adsmeasurement|.+ad_break) url reject-img

#桃子解锁会员去广告-（api.*.xyz）
^http:\/\/api\.(.+)\.xyz\/fast-cloud\/ads\/fetch url script-response-body https://raw.githubusercontent.com/anran180224/Quantumult-X/main/tzad.js
^http:\/\/api\.(.+)\.xyz\/fast-cloud\/user\/info url script-response-body https://raw.githubusercontent.com/anran180224/Quantumult-X/main/tzvip.js

#91短视频解锁VIP和金币- (*.i91porn.*)
^https?:\/\/.+\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5})?\/api.php$ url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/91.js

#精东无限购买- (*.woailuojingdong.com,*.dayuxiangqian.com)
^https?:\/\/.+\.((.*woailuojingdong.*)|(.*dayuxiangqian.*))\.(com|cn)(:\d{2,5})?\/cxapi/.+$ url script-response-body https://raw.githubusercontent.com/paynexss/Scripts/main/Scripts/jd.js

#黄瓜视频完美解锁-（api1000.gdqeb.club）
^https:\/\/api1000\.gdqeb\.club\/(user\/info|mov\/browse2*) url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/hgsp.js
 
