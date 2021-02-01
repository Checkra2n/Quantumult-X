/*  


QX:
[rewrite_local]
#桃子去广告
^http:\/\/api\.(.+)\.xyz\/fast-cloud\/ads\/fetch url script-response-body https://raw.githubusercontent.com/anran180224/Quantumult-X/main/tzad.js

[mitm]
hostname = api.*.xyz,

桃子视频下载地址；
http://69t.co
*/

var obj = JSON.parse($response.body);
obj.data = 0;


$done({body: JSON.stringify(obj)}); 
