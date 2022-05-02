hostname=book.haitunwallet.com,api.shayujizhang.com,i0.hdslb.com, app.biliintl.com, app.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, api.bilibili.com, manga.bilibili.com, grpc.biliapi.net,rich.kuwo.cn,*.kwcdn.kuwo.cn,mobilead.kuwo.cn, musicpay.kuwo.cn, vip1.kuwo.cn, audiobookpay.kuwo.cn, tingshu.kuwo.cn,omp-audiobookpay.lrts.me,weixin110.qq.com, security.wechat.com,api*.smoot.apple.com, api*.smoot.apple.cn,ap?.bilibili.com, ap?.biliapi.net,api.m.jd.com,ms.jr.jd.com, trade-acs.m.taobao.com,ios-*.prod.ftl.netflix.com,ios.prod.ftl.netflix.com,app-api.smzdm.com,homepage-api.smzdm.com,haojia-api.smzdm.com,haojia.m.smzdm.com,baike-api.smzdm.com,s-api.smzdm.com,zhiyou.m.smzdm.com,afd.baidu.com,-redirector*.googlevideo.com,*.googlevideo.com,www.youtube.com,s.youtube.com,youtubei.googleapis.com,api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, new.vip.weibo.cn,

# > 01 海豚记账 -(book.haitunwallet.com)
https:\/\/book\.haitunwallet\.com\/app\/vip\/status url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/HTJZ.js

# > 02 鲨鱼记账 需要登录 解锁会员记账权限 -(api.shayujizhang.com)
https://api.shayujizhang.com/account/detail/info/ url script-response-body https://raw.githubusercontent.com/zalmanwen/oooooo/master/xxx/xxxx/CNSPCrack.js

# > 03 酷我音乐vip-（rich.kuwo.cn,*.kwcdn.kuwo.cn,mobilead.kuwo.cn, musicpay.kuwo.cn, vip1.kuwo.cn, audiobookpay.kuwo.cn, tingshu.kuwo.cn,omp-audiobookpay.lrts.me）
# ～ KWYY_酷我音樂Ad_Block@DivineEngine
^https?:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/.+ url reject
# ～ KWYY_酷我音樂Ad_Block@DivineEngine
^https?:\/\/.+\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
# ～ KWYY_酷我音樂Ad_Block@DivineEngine
^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/Ad url reject
# ～ KWYY_酷我聽書Block_ad@ddgksf2013
https?:\/\/audiobookpay\.kuwo\.cn/a\.p\?op=get_advertright url reject-dict
# ～ KWYY_酷我聽書PayInfo@ddgksf2013
https?:\/\/omp-audiobookpay\.lrts\.me\/a\.p url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# ～ KWYY_酷我聽書PayInfo@ddgksf2013
^https?:\/\/audiobookpay\.kuwo\.cn/a\.p url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# ～ KWYY_酷我聽書UserInfo@ddgksf2013
https://tingshu.kuwo.cn/v2/api/user/info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# ～ KWYY_酷我聽書UserInfo@ddgksf2013
https?:\/\/audiobooks\.kuwo\.cn\/v2\/api\/user\/info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# ～ KWYY_酷我聽書UserStatus@ddgksf2013
https?:\/\/tingshu\.kuwo\.cn\/v2\/api\/pay\/vip\/extraVipStatus url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# ～ KWYY_酷我解鎖Vip皮膚設置@ddgksf2013
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/theme  url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# ～ KWYY_酷我解鎖無損下載（先選聽無損，再下載無損）@ddgksf2013
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?newver=\d url script-request-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# ～ KWYY_酷我音樂會員@ddgksf2013
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js

# > 04 哔哩哔哩去广告-（i0.hdslb.com, app.biliintl.com, app.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, api.bilibili.com, manga.bilibili.com, grpc.biliapi.net）
# ～ BiliBili_嗶哩嗶哩_繁體CC字幕轉中文簡體@ddgksf2013
^https?:\/\/i.\.hdslb\.com\/bfs\/subtitle\/.+\.json$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_cc.js
# ～ BiliBili_嗶哩嗶哩_觀影頁面去廣告@ddgksf2013
^https?:\/\/api\.bilibili\.com\/pgc\/page\/cinema\/tab\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_應用開屏去廣告@bm7
^https://app.bilibili.com/x/v2/splash/show url reject-dict
# ～ BiliBili_嗶哩嗶哩_應用開屏廣告预加载@yjqiang
^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_去除統一設置的皮膚@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_1080P高码率+4K畫質(番劇和影視除外)@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_热搜发现@ddgksf2013
^https://app.bilibili.com/x/v2/search/square url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_Defaultword@ddgksf2013
^https://app.bilibili.com/x/v2/search/defaultwords url reject-dict
# ～ BiliBili_嗶哩嗶哩_Material_Ad@ddgksf2013
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report url reject-dict
# ～ BiliBili_嗶哩嗶哩_收藏前10
;^https:\/\/app\.bilibili\.com\/x\/v2\/space\?access_key url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_space_10.js
# ～ BiliBili_嗶哩嗶哩_小卡片廣告@ddgksf2013
^https://api.bilibili.com/pgc/season/player/cards url reject-dict
# ～ BiliBili_嗶哩嗶哩_解除SIM卡地區限制
(^https?:\/\/app\.biliintl.com\/intl\/.+)(&sim_code=\d+)(.+) url 302 $1$3
# ～ BiliBili_嗶哩嗶哩_去除搜索中的大家都在搜@bm7
^https?:\/\/api\.vc\.bilibili\.com\/search_svr\/v\d\/Search\/recommend_words url reject
# ～ BiliBili_嗶哩嗶哩_去除動態中的話題@bm7
^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr url reject-dict
# ～ BiliBili_嗶哩嗶哩_去除動態中的最常訪問@bm7
;^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/mix_uplist url reject-dict
# ～ BiliBili_嗶哩嗶哩_可能的一些推廣(beta)@bm7
^https?:\/\/api\.bilibili\.com\/pgc\/season\/app\/related\/recommend\? url reject-dict
# ～ BiliBili_嗶哩嗶哩_漫畫去廣告@ddgksf2013
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/(Flash|ListFlash) url reject-dict
# ～ BiliBili_嗶哩嗶哩_推薦去廣告@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_追番去廣告@ddgksf2013
^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_直播去廣告@bm7
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_動態去廣告@bm7
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_(history|new)\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_標籤頁處理@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_我的頁面處理@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# ～ BiliBili_嗶哩嗶哩_Proto去广告@app2smile
^https:\/\/app\.bilibili\.com\/bilibili\.app\.(view\.v1\.View\/View|dynamic\.v2\.Dynamic\/DynAll)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/bilibili-proto.js
# ～ BiliBili_嗶哩嗶哩_動態廣告@yjqiang
;^https://app\.bilibili\.com/bilibili\.app\.dynamic\.v2\.Dynamic/DynAll$ url script-response-body https://raw.githubusercontent.com/yjqiang/surge_scripts/main/scripts/bilibili/bilibili_dynamic.js

# > 05 B612咔叽 (2022-01-25) by ddgksf2013
https://user-kaji-api.b612kaji.com/v1/purchase/subscription/subscriber/status url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/612.js

# > 06 京东取消店铺会员（2021-05-16） by ddgksf2013
https://api\.m\.jd\.com\/client\.action\?appid=jd_shop_member&functionId=getShopMemberCardDetail&.+ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/unbind.js

# > 07 微信解锁被屏蔽的URL-（weixin110.qq.com, security.wechat.com）
^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\? url script-response-body https://raw.githubusercontent.com/zZPiglet/Task/master/asset/UnblockURLinWeChat.js

# > 08 Siri与搜索2.0-（api*.smoot.apple.com, api*.smoot.apple.cn）
# Redirect Siri Suggestions Service 
# Bag (iOS/macOS)
^https?:\/\/api.*\.smoot\.apple\.(com|cn)\/bag\?(.*) url script-request-header https://raw.githubusercontent.com/VirgilClyne/iRingo/main/js/Siri.request.js
^https?:\/\/api.*\.smoot\.apple\.(com|cn)\/bag\?(.*) url script-response-body https://raw.githubusercontent.com/VirgilClyne/iRingo/main/js/Siri.response.js
# Spotlight & Look Up Search (iOS/macOS)
^https?:\/\/api.*\.smoot\.apple\.(com|cn)\/search\?(.*) url script-request-header https://raw.githubusercontent.com/VirgilClyne/iRingo/main/js/Siri.request.js
^https?:\/\/api.*\.smoot\.apple\.(com|cn)\/search\?(.*) url script-response-body https://raw.githubusercontent.com/VirgilClyne/iRingo/main/js/Siri.response.js
# Siri Infomation Card (macOS)
^https?:\/\/api.*\.smoot\.apple\.(com|cn)\/card\?(.*) url script-request-header https://raw.githubusercontent.com/VirgilClyne/iRingo/main/js/Siri.request.js
^https?:\/\/api.*\.smoot\.apple\.(com|cn)\/card\?(.*) url script-response-body https://raw.githubusercontent.com/VirgilClyne/iRingo/main/js/Siri.response.js

# > 09 Bilibili换区-（ap?.bilibili.com, ap?.biliapi.net）
# > Policy自动切换
^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/(pgc\/view\/v\d\/app\/season|x\/v\d\/search\/defaultwords)\?access_key url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js
#可选, 适用于搜索指定地区的番剧
^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/x\/v\d\/search(\/type)?\?.+?%20(%E6%B8%AF|%E5%8F%B0|%E4%B8%AD)& url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js

# > 10 京东淘宝比价-（api.m.jd.com, trade-acs.m.taobao.com）
# 京东比价
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js
# 淘宝比价
^http://.+/amdc/mobileDispatch url script-request-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js

# > 11 Netflix评分-（ios-*.prod.ftl.netflix.com,ios.prod.ftl.netflix.com）
^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js

# > 12 京东系开屏广告
#京东开屏广告
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start url reject
#京东金融开屏广告
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/(new)?na\/m\/getLoadingPicture url reject
#京东极速版开屏广告
https://api.m.jd.com/client.action\?functionId=lite_advertising url reject

# > 13 什么值得买去广告-（app-api.smzdm.com,homepage-api.smzdm.com,haojia-api.smzdm.com,haojia.m.smzdm.com,baike-api.smzdm.com,s-api.smzdm.com,zhiyou.m.smzdm.com）
# 好价详情页去广告
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/other_modul url reject
# 好价详情页红包小助手
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/user_related_modul url reject
# Wiki(618晒物活动推广，将来可能不是广告)
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/wiki_related_modul url reject
# 开屏去广告
^https?:\/\/app-api\.smzdm\.com\/util\/loading url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 首页去广告
^https?:\/\/homepage-api\.smzdm\.com\/v3\/home url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 好价去广告
^https?:\/\/haojia-api\.smzdm\.com\/home\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 好价详情页去广告
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/article_releated_modul url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 百科去广告
^https?:\/\/baike-api\.smzdm\.com\/home_v3\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 搜索结果去广告
^https?:\/\/s-api\.smzdm\.com\/sou\/list_v10 url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 搜索标签去广告
^https?:\/\/s-api\.smzdm\.com\/sou\/filter\/tags\/hot_tags url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 值会员权益中心banner广告
^https?:\/\/zhiyou\.m\.smzdm\.com\/user\/vip\/ajax_get_banner url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js

# > 14 百度贴吧超级去广告-（afd.baidu.com）
^(http\:\/\/c\.tieba\.baidu\.com\/(tiebaads\/commonbatch|c\/s\/sync)|https\:\/\/afd\.baidu\.com\/afd\/entry) url script-response-body https://raw.githubusercontent.com/Nick-workflow/script-test/main/bdtb/tb-json.js
^http\:\/\/c\.tieba\.baidu\.com\/c\/f\/((frs|pb)\/page|excellent\/personalized) url script-response-body https://raw.githubusercontent.com/Nick-workflow/script-test/main/bdtb/tb-proto.js

# > 15 油管去广告-（-redirector*.googlevideo.com,*.googlevideo.com,www.youtube.com,s.youtube.com,youtubei.googleapis.com）
(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) url 302 $1$2$3
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad url reject
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/v\d\/player\/ad_break url reject
^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads url reject
^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) url reject
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext url reject
  
# > 16 微博去广告以及去除各部分推广-（api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, new.vip.weibo.cn）
# ④ weibo adblock - cherish
^https?://m?api\.weibo\.c(n|om)/2/(cardlist|searchall|page|statuses/(unread_)?friends(/|_)timeline|groups/timeline|statuses/(unread_hot_timeline|extend|video_mixtimeline)|profile/(me|statuses)|video/(community_tab|remind_info|tiny_stream_video_list)|checkin/show|\!/live/media_homelist|comments/build_comments|container/get_item) url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js
# ③ 删除微博开屏广告 - cherish
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_launch.js
# ② 自定义tab皮肤 - cherish
^https://api.weibo.cn/2/!/client/light_skin url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js
# ① 非会员设置tab皮肤 - cherish
^https://new.vip.weibo.cn/littleskin/preview url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js
  
# > 17 
