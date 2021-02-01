/*

QX:
[rewrite_local]
#桃子视频解锁会员
^http:\/\/api\.(.+)\.xyz\/fast-cloud\/user\/info url script-response-body https://raw.githubusercontent.com/anran180224/Quantumult-X/main/tzvip.js

[mitm]
hostname = api.*.xyz,

桃子视频下载地址；
http://69t.co

*/

let obj = JSON.parse($response.body);
obj = {
  "code" : "0000",
  "message" : "",
  "result" : {
    "account" : "吾爱",
    "nickName" : "吾爱",
    "stars" : 0,
    "channelCode" : null,
    "vipValidDate" : 4092579678000,
    "bindStatus" : 1,
    "sex" : null,
    "invitationCode" : "EGFGKHK",
    "vipType" : 1,
    "accessToken" : "QBEJ42HGG6DAP4XX3XXOVDOZ616OHXR9",
    "id" : 2434858,
    "tokenValidDate" : 1608652800000,
    "phone" : "Iphone 20",
    "gold" : 9999,
    "avatar" : null,
    "fans" : 0,
    "createDate" : 1606139671000,
    "newUser" : false,
    "accountLevel" : null,
    "authType" : 1,
    "machineCode" : "iPhone X|14.2"
  },
  "data" : null,
  "total" : null
};

$done({body: JSON.stringify(obj)});
