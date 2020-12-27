hostname=ssp-x.yoloho.com,

#PriceTag 去首页广告
^https?:\/\/appfan\.im\/api\/v2\/topics\/.*?/posts.* url script-response-body https://raw.githubusercontent.com/alpha87/QuantumultX-Profiles/master/PriceTagAD.js
