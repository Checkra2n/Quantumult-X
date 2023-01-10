hostname=mp.weixin.qq.com,wx.mygolbs.com,www.benbenfx.xyz,qj.bpojie.com,hkj178.com,-redirector*.googlevideo.com,*.googlevideo.com,www.youtube.com,s.youtube.com,youtubei.googleapis.com,app.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, *.bilibili.com, *.bilibili.*, grpc.biliapi.net,api.biliapi.net, -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net,*kuwo*,*lrts*,*.xiuxiu.meitu.com,claritywallpaper.com,app-api.smzdm.com,homepage-api.smzdm.com,haojia-api.smzdm.com,haojia.m.smzdm.com,baike-api.smzdm.com,s-api.smzdm.com,zhiyou.m.smzdm.com,passport.beva.com
  
# > 01 公眾號文章去廣告（2022-03-01）@ddgksf2013
^(http|https):\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url response-body "advertisement_num":\d,"advertisement_info":\[.+\], response-body "advertisement_num":0,"advertisement_info":[],

# > 02 掌上公交（2022-03-01）@ddgksf2013
https?:\/\/wx\.mygolbs\.com\/WxBusServer\/ApiData\.do url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/zhangshanggongjiao.js

# > 03 科技窝（2020-12-28）@ddgksf2013
https://www.benbenfx.xyz/wp-json/wp/v2/posts url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/xcx.js

# > 04 黑科技软件源（2020-12-15）@ddgksf2013
https://qj.bpojie.com/wp-json/wp/v2/posts url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/xcx.js

# > 05 黑科技软件（2020-09-01）@ddgksf2013
^https:\/\/hkj178.com/wp-json/mp/v2/posts url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/xcx.js
# > 辅助去除页面嵌入式式卡片广告（20201214）
https://hkj178.com/wp-json/mp/v2/advert/wechat url reject-200

# > 06 Youtube去广告-（-redirector*.googlevideo.com,*.googlevideo.com,www.youtube.com,s.youtube.com,youtubei.googleapis.com）
# ======= 视频广告请求 ======= #
(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) url 302 $1$2$3
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad url reject-200
# ======= 瀑布流|搜索|播放页|短视频|贴片 广告 ======= #
^https:\/\/youtubei\.googleapis\.com\/youtubei\/v\d\/(browse|search|next|player|reel\/reel_watch_sequence|guide) url script-response-body https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/youtube.js
# ======= 通用广告请求 ======= #
^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads url reject-200
^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) url reject-200
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext url reject-200
 
# > 07 BiliBili_AdBlock_DIY-(app.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, *.bilibili.com, *.bilibili.*, grpc.biliapi.net,api.biliapi.net, -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net)
# ～ BiliBili_哔哩哔哩_屏蔽直播间商品广告浮窗@ddgksf2013
^https?:\/\/api\.live\.bilibili\.com\/xlive\/e-commerce-interface\/v\d\/ecommerce-user\/get_shopping_info\? url reject-dict
# ～ BiliBili_哔哩哔哩_屏蔽广告浮窗@ddgksf2013
^https?:\/\/api\.bilibili\.com\/pgc\/activity\/deliver\/material\/receive url reject-dict
# ～ BiliBili_哔哩哔哩_屏蔽IP请求@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/ip url reject
# ～ BiliBili_哔哩哔哩_屏蔽DefaultWord@ddgksf2013
^https?:\/\/app\.bilibili\.com\/bilibili\.app\.interface\.v1\.Search\/Default url reject
# ～ BiliBili_哔哩哔哩_屏蔽首页右上活动@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_观影页面去广告@ddgksf2013
^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/cinema\/tab\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_应用开屏去广告@bm7
^https://app.bilibili.com/x/v2/splash/show url reject-dict
# ～ BiliBili_哔哩哔哩_应用开屏广告预加载@yjqiang
^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_1080P高码率+4K画质(番剧和影视除外)@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_热搜发现@ddgksf2013
^https://app.bilibili.com/x/v2/search/square url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_Defaultword@ddgksf2013
^https://app.bilibili.com/x/v2/search/defaultwords url reject-dict
# ～ BiliBili_哔哩哔哩_Material_Ad@ddgksf2013
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report url reject-dict
# ～ BiliBili_哔哩哔哩_小卡片广告@ddgksf2013
^https://api.bilibili.com/pgc/season/player/cards url reject-dict
# ～ BiliBili_哔哩哔哩_漫画去广告@ddgksf2013
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/(Flash|ListFlash|GetActivityTab) url reject-dict
# ～ BiliBili_哔哩哔哩_推荐去广告@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_追番去广告@ddgksf2013
^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/bangumi url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_直播去广告@bm7
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_标签页处理@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_我的页面处理@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_Proto去广告@app2smile
^https:\/\/app\.bilibili\.com\/bilibili\.app\.(view\.v1\.View\/View|dynamic\.v2\.Dynamic\/DynAll)$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto.js
# ～ BiliBili_哔哩哔哩_启动时开启直连模式[自行启用]@ddgksf2013
;^https?:\/\/app\.bilibili\.com\/x\/resource\/domain url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_startup_direct.js
# ～ BiliBili_哔哩哔哩_繁体CC字幕转中文简体[自行启用]@ddgksf2013
;^https?:\/\/i.\.hdslb\.com\/bfs\/subtitle\/.+\.json$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_cc.js
# ～ BiliBili_哔哩哔哩_去除统一设置的皮肤@ddgksf2013
;^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js

# > 08 酷我音乐(会员共享)[vip至2023-05-07] -(*kuwo*,*lrts*)
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ne|\/a\.p|v\d\/api\/(user\/in|pay\/vi)|\w{3}\/v\d\/user\/vi|\w{3}\/spi\/ms|\w{3}\/v\d\/the|\w{3}\/enc\/use) url script-response-body https://github.com/ddgksf2013/dev/raw/main/KuWoMusicProCrack.js
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ui) url script-request-header https://github.com/ddgksf2013/dev/raw/main/KuWoMusicProCrack.js

# > 09 美图秀秀(need登录)-(*.xiuxiu.meitu.com)
^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/v\d\/(h\d\/vip|vip|user)\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/MeiTuXiuXiu.js

# > 10 克拉壁纸-(claritywallpaper.com)
^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll|picture\/search|catalog\/listAll|top\/list|picture\/date\?date) url script-response-body https://github.com/ddgksf2013/dev/raw/main/ClarityProCrack.js

# > 11 什么值得买去广告-(app-api.smzdm.com,homepage-api.smzdm.com,haojia-api.smzdm.com,haojia.m.smzdm.com,baike-api.smzdm.com,s-api.smzdm.com,zhiyou.m.smzdm.com)
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

# > 12 贝瓦儿歌 - (passport.beva.com)
http:\/\/passport\.beva\.com\/passport\/v1\/sdk\/getuserinfo url script-response-body https://raw.githubusercontent.com/Game-2020/Scripts/main/bweg.js

