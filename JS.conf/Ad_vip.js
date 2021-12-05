hostname=*.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,api.bilibili.com,account.wps.*,book.haitunwallet.com,api.shayujizhang.com,musicpay.kuwo.cn,vip1.kuwo.cn,*.my10api.com,*.woailuojingdong.com,*.dayuxiangqian.com,homepage-api.smzdm.com,haojia-api.smzdm.com,article-api.smzdm.com,haojia.m.smzdm.com,app-api.smzdm.com,s-api.smzdm.com,api1000.gdqeb.club,jk.5apk.cn,api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, -*.weibo.com, mp.weixin.qq.com, security.wechat.com, weixin110.qq.com,duckduckgo.com, testflight.apple.com, boxer.baidu.com, pan.baidu.com
# WPS -(account.wps.*)
^https://account.wps.*/api/users/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

# 哔哩哔哩(api.bilibili.com)
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

#鲨鱼记账 需要登录 解锁会员记账权限 -(api.shayujizhang.com)
https://api.shayujizhang.com/account/detail/info/ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/syjz.js

#酷我音乐vip-（musicpay.kuwo.cn,vip1.kuwo.cn）
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=2
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/kuwo.js

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

# 微博去广告
^https?://(sdk|wb)app.uve.weibo.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

# 微信公众号去广告
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

# 解除微信链接限制
^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\? url script-response-body https://raw.githubusercontent.com/zZPiglet/Task/master/asset/UnblockURLinWeChat.js

# Safari全能搜索
# > 以下为Safari全能搜索、需要把Safari的搜索引擎设置为：DuckDuckGo

#gm   (Google图片)
^https:\/\/duckduckgo.com\/\?q=gm\+([^&]+).+ url 302 https://www.google.com/search?&tbm=isch&q=$1

# gh   (GitHub)
^https:\/\/duckduckgo.com\/\?q=gh\+([^&]+).+ url 302 https://github.com/search?q=$1

# tf  (Google 搜索 TestFlight)
^https:\/\/duckduckgo.com\/\?q=tf(\+|%20)([^&]+).+ url 302 https://www.google.com/search?as_q=$2&as_sitesearch=testflight.apple.com

# wb: 微博
^https:\/\/duckduckgo.com\/\?q=wb\+([^&]+).+ url 302 https://s.weibo.com/weibo/$1

# wx: 微信
^https:\/\/duckduckgo.com\/\?q=wx\+([^&]+).+ url 302 https://weixin.sogou.com/weixinwap?query=$1

# jd : 京东
^https:\/\/duckduckgo.com\/\?q=jd\+([^&]+).+ url 302 https://so.m.jd.com/ware/search.action?keyword=$1

# tb: 淘宝
^https:\/\/duckduckgo.com\/\?q=tb\+([^&]+).+ url 302 https://s.m.taobao.com/h5?q=$1

# tm: 天猫
^https:\/\/duckduckgo.com\/\?q=tm\+([^&]+).+ url 302 https://s.m.tmall.com/m/search.htm?q=$1

# ytb  (YouTube)
^https:\/\/duckduckgo.com\/\?q=ytb\+([^&]+).+ url 302 https://www.youtube.com/results?search_query=$1

# ph  (PornHub) 
^https:\/\/duckduckgo.com\/\?q=ph\+([^&]+).+ url 302 https://cn.pornhub.com/video/search?search=$1

# bi: 必应
^https:\/\/duckduckgo.com\/\?q=bi\+([^&]+).+ url 302 https://cn.bing.com/search?q=$1

# bd: 百度
^https:\/\/duckduckgo.com\/\?q=bd\+([^&]+).+ url 302 https://www.baidu.com/s?wd=$1

# ccn (App Store 临时换至中国区)
^https:\/\/duckduckgo.com\/\?q=ccn&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143465&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=cn&urlDesc

# uus (App Store 临时换至美国区) 
^https:\/\/duckduckgo.com\/\?q=uus&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143441&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=us&urlDesc=

# ddg: DuckDuckGo 
^https:\/\/duckduckgo.com\/\?q=ddg\+([^&]+).+ url 302 https://duckduckgo.com/?ia=about&q=$1

# 无指令: 谷歌
^https:\/\/duckduckgo.com\/\?q=([^&]+).+ url 302 https://www.google.com/search?q=$1

# 阻止google.com 跳转到google.com.hk
^https?:\/\/(www\.)?g\.cn url 302 https://www.google.com
^https?:\/\/(www\.)?google\.cn url 302 https://www.google.com

# TestFlight下载修正
^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$ url script-request-body https://gist.githubusercontent.com/NobyDa/9be418b93afc5e9c8a8f4d28ae403cf2/raw/TF_Download.js

# 百度搜索防跳转
^https?\:\/\/boxer\.baidu\.com\/scheme\?scheme url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/baidu-no-redirect.js

#91短视频解锁VIP和金币- (*.i91porn.*)
^https?:\/\/.+\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5})?\/api.php$ url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/91.js

#精东无限购买- (*.woailuojingdong.com,*.dayuxiangqian.com)
^https?:\/\/.+\.((.*woailuojingdong.*)|(.*dayuxiangqian.*))\.(com|cn)(:\d{2,5})?\/cxapi/.+$ url script-response-body https://raw.githubusercontent.com/paynexss/Scripts/main/Scripts/jd.js

 #黄瓜视频完美解锁-（api1000.gdqeb.club）
^https:\/\/api1000\.gdqeb\.club\/(user\/info|mov\/browse2*) url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/hgsp.js
 
#辣椒视频解锁会员——（jk.5apk.cn）
^http:\/\/jk\.5apk\.cn\/api(\/reg|\/play) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/lajiao/sngxljsp.js
 
