var iOS = /(iPad|iPhone|iPod)/g.test(window.navigator.userAgent);
var Android = /Android/i.test(window.navigator.userAgent);

var __cordovaJs;

if (iOS) {
    __cordovaJs="../../libs/js/ios/cordova.js";
}else if(Android){
    __cordovaJs="../../libs/js/android/cordova.js";
}

if(__cordovaJs){
    document.write("<script src=\""+__cordovaJs+"\"></script>");
}

//fuApp需要在deviceready事件之后调用
//示例
//document.addEventListener('deviceready',function(){
//  fuApp.xxxx();
//},false);
//
//$.getScript(__cordovaJs,function(){})
var isDebug = false;
if(window.location.hostname == "192.168.42.33"){
	isDebug = true;
}
if(isDebug){
	var fuApp = {
		pay:function(success, failed){
			var obj = {rspCode:"0000",rspDesc:"成功",orderNo:"001",ssn:"002"};
			success(obj);
		},
		//rspCode,rspDesc,provName,cityName,countyName,detailAddr,lnt,lat
		getLocation:function(success, failed){
			//var obj = {rspCode:"0000",rspDesc:"成功",provCd:"021",provName:"上海",cityCd:"0002",cityName:"上海市",countyCd:"",countyName:"浦东新区",detailAddr:"东明路383号",zipcode:"600025",communityName:"东明苑",memo:"",lnt:"121.517863",lat:"31.18897"};
			//var obj ={rspCode:"0000",rspDesc:"成功",provCd:"021",provName:"上海",cityCd:"0001",cityName:"上海市",countyCd:"",countyName:"浦东新区",detailAddr:"三林苑",communityName:"三林体育中心",lnt:"121.111111",lat:"31.111111"};
			//var obj = {rspCode:"0000",rspDesc:"成功",provCd:"021",provName:"上海",cityCd:"0001",cityName:"上海市",countyCd:"",countyName:"浦东新区",detailAddr:"民生路1399号",communityName:"太平人寿大厦",lnt:"121.557105",lat:"31.230356"};
			success(obj);
		},
		checkApkExist:function(success, failed){
			var obj = {rspCode:"0000",rspDesc:"成功"};
			success(obj);
		},
		userInfo:function(success, failed){
			var obj = {"avatar":"https://static.fuiou.com/sys/fly/avatar/fly_1707171718158516.jpg","cellCd":"A100000837","cellNm":"都市庭院","loginId":"15316117950","mobile":"15316117950","networkType":"0","ticket":"c5a7fe4b-deaf-4569-b277-c45b1b49dc45","token":"c5a7fe4b-deaf-4569-b277-c45b1b49dc45","rspCode":"0000","rspDesc":"成功"}
//			var obj = {rspCode:"0000",rspDesc:"成功",loginId:"13816000171",mobile:"13816000171",userName:"jane",ticket:"001"};
//			var obj = {rspCode:"0000",rspDesc:"成功",loginId:"18817360039",mobile:"18817360039",userName:"jane",ticket:"001"};
//			var obj = {rspCode:"0000",rspDesc:"成功",loginId:"18623784978",mobile:"18623784978",userName:"jane",ticket:"001"};
//			var obj = {rspCode:"0000",rspDesc:"成功",loginId:"17721019239",mobile:"17721019239",userName:"jane",ticket:"001"};
//			var obj = {rspCode:"0000",rspDesc:"成功",loginId:"13100725808",mobile:"13100725808",userName:"jane",ticket:"001"};
//			var obj = {rspCode:"0000",rspDesc:"成功",loginId:"15900688940",mobile:"15900688940",userName:"jane",ticket:"e7d914a1e21fa0d3c884f16b21261552"};
			//var obj = {"rspCode":"0000","rspDesc":"成功","loginId":"15316117950","mobile":"15316117950",userName:"jane","avatar":"https://static.fuiou.com/sys/fly/avatar/fly_1707261058326593.jpg","cellCd":"A100000837","cellNm":"都市庭院","networkType":"0","ticket":"e99b1029-502d-4e64-bd04-8d380d770a33","token":"e99b1029-502d-4e64-bd04-8d380d770a33"};
//			var obj = {rspCode:"0000",rspDesc:"成功",loginId:"17721019239",mobile:"17721019239",userName:"jane",ticket:"001"};
//			var obj = {rspCode:"0000",rspDesc:"成功",loginId:'13032107227',mobile:"13032107227",userName:"jane",ticket:"be498b7f-8117-4bec-acc5-afa9e3d73b4d"};
//			var obj = {rspCode:"0000",rspDesc:"成功",loginId:"18205625447",mobile:"18205625447",userName:"jane",ticket:"4548beb8-a924-4d17-9822-82bc2ff0d91d"};

			success(obj);
		},
		userHome:function(success, failed){
			var obj = {"cityCd":"2900","communityCode":"A100000837","communityName":"都市庭院","lat":"31.186794002455","lnt":"121.51274384513","cityName":"上海市","countyName":"浦东新区","detailAddr":"齐河路428弄","memo":"","provName":"上海市","zipcode":"200120","rspCode":"0000","rspDesc":"成功"};
			//var obj = {rspCode:"0000",rspDesc:"成功",provCd:"021",provName:"上海",cityCd:"2900",cityName:"上海市",countyCd:"",countyName:"浦东新区",detailAddr:"民生路1399号",communityName:"太平人寿大厦",lnt:"121.517863",lat:"31.18897",communityCode:'A100000003'};
			//var obj = {"rspCode":"0000","rspDesc":"成功","cityCd":"2900","communityCode":"A100000837","communityName":"都市庭院","lat":"31.186794002455","lnt":"121.51274384513","cityName":"上海市","countyName":"浦东新区","detailAddr":"齐河路428弄","memo":"","provName":"上海市","zipcode":"200120"};
			//var obj = {rspCode:"0000",rspDesc:"成功",provCd:"021",provName:"上海",cityCd:"2900",cityName:"上海市",countyCd:"",countyName:"浦东新区",detailAddr:"民生路1399号",communityName:"太平人寿大厦",lnt:"121.517863",lat:"31.18897",communityCode:'A100002662'};//测试无现金红包情况
			//var obj = {rspCode:"0000",rspDesc:"成功",provCd:"021",provName:"上海",cityCd:"0002",cityName:"上海市",countyCd:"",countyName:"浦东新区",detailAddr:"东明路383号",zipcode:"600025",communityName:"东明苑",memo:"",lnt:"121.517863",lat:"31.18897"};
			success(obj);
		},
		defaultAddress:function(success, failed){
			var obj = {rspCode:"0000",rspDesc:"成功",provName:"上海",cityCd:"",cityName:"上海市",countyCd:"",countyName:"浦东新区",detailAddr:"民生路1399号",
			zipcode:"600025",receiverName:"wangyujie",receiverMobile:"13032107227",receiverPhone:"13032107227",receiverEmail:"2291678173@qq.com",memo:""};
			success(obj);
		},
		selectAddress:function(success, failed){
			var obj = {rspCode:"0000",rspDesc:"成功",provName:"上海",cityCd:"",cityName:"上海市",countyCd:"",countyName:"浦东新区",detailAddr:"民生路1399号",
			zipcode:"600025",receiverName:"liuhui",receiverMobile:"18621762052",receiverPhone:"18621762052",receiverEmail:"2291678173@qq.com",memo:""};
			success(obj);
		},
		deviceInfo:function(success, failed){
			var obj = {rspCode:"0000",rspDesc:"成功",os:'android',osVer:"4.4.4",appVer:'3.02.0'};
			success(obj);
		},
		exitWebView:function(success, failed){
			var obj = {rspCode:"0000",rspDesc:"成功"};
			success(obj);
		},
		//给o2o的本地html传递参
		send020Params:function(success, failed){
			//var obj = {proId:"DJQ20150814093828061iwoawb6s3y",proType:""};//测试优惠券
			//var obj = {shopId:"O2SP20150701144400402rzf2xpmr4k",shopName:"广告店铺名称"};//测试店铺
			//var obj = {proId:"324503181153233",proType:"0"};//团购商品
			//var obj = {proId:"O2GD201505282100248761mhhjnzgx5",shopId:"shop20140603113148383126",proType:"1"};//普通商品
			//var obj = {proId:"DJQ201506041623201593z36zd7wgo",shopId:"O2SP20150528205734138h7gc1os9hu",proType:"2"};//电子券
			var obj = {couponId:"C88014783518623",proType:""};//营销页面
			success(obj);
		},
		//orderNo,busiCd
		getOrderDetail:function(success, failed){
			var obj = {rspCode:"0000",rspDesc:"成功",orderNo:"15081716222319274603",busiCd:"GP02"};//GP02：团购
			//var obj = {rspCode:"0000",rspDesc:"成功",orderNo:"15061010485689146743",busiCd:"PY30"};//PY30：周边
			//var obj = {rspCode:"0000",rspDesc:"成功",orderNo:"201505141859392593862",busiCd:"GP30"};//GP30：电子券
			success(obj);
		},
		setBackTag:function(success, failed){
			var obj = {rspCode:"0000",rspDesc:"成功"};
			success(obj);
		},
		//分享第三方 
		//参数参数： shareContent，shareUrl
		//比如： {"shareContent":"这里是分享的内容","shareUrl":"https://www.fuiou.com"}
		shareToThird: function (success, failed ) {
			var obj = {rspCode:"0000",rspDesc:"成功"};
			success(obj);
		},
		receiveParams: function (success, failed , dataInfo) {
			var obj = {rspCode:"0000",rspDesc:"成功"};
			success(obj);
		}, 
		//开启原生的页面
		toNative: function (success, failed , dataInfo) {
	       	if(success){
	       		success();
	       	}
	    },
		openNewPage:function(success,failed,dataInfo){
			if(dataInfo.url){
				window.location.href = dataInfo.url;
			}
		}
	};
}else{
	var fuApp = {

		//调用支付网关接口
		//rspCode,rspDesc,orderNo,ssn
		pay:function(success, failed,orderInfo) {
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "pay", [orderInfo]);
		},

		//获取地理位置信息
		//rspCode,rspDesc,provName,cityName,countyName,detailAddr,lnt,lat
		getLocation:function(success, failed) {
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "location", []);
		},

		//检测某应用是否安装
		//rspCode,rspDesc,install
		checkApkExist:function(success, failed,packageName) {
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "checkApkExist", [packageName]);
		},

		//用户信息
		//rspCode,rspDesc,loginId,mobile,userName,ticket
		userInfo: function (success, failed) {
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "getUserInfo", []);
		},

		//小区信息
		//rspCode,rspDesc,provName,cityName,countyName,detailAddr,zipcode,communityName,memo
		userHome: function (success, failed) {
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "getUserHome", []);
		},

		//默认收货地址
		//rspCode,rspDesc,provName,cityName,countyName,detailAddr,zipcode,receiverName,receiverMobile,receiverPhone,receiverEmail,memo
		defaultAddress: function (success, failed) {
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "getDefaultAddress", []);
		},
		
		//选择收货地址
		//rspCode,rspDesc,provName,cityName,countyName,detailAddr,zipcode,receiverName,receiverMobile,receiverPhone,receiverEmail,memo
		selectAddress: function (success, failed) {
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "selectAddress", []);
		},
		//系统信息
		//rspCode,rspDesc,os,osVer,appVer
		deviceInfo:function(success, failed){
			cordova.exec(function(data){
				//alert(data);
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "getDeviceInfo", []);
		},
		//发送数据确认是否返回
		setBackTag: function (success, failed) {
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "setBackTag", []);
		},
		//退出
		exitWebView:function(){
			if(Android){
				//alert("Android");
				navigator.app.exitApp();
			}else{
				//alert("ios");
				window.open("fuiou-mgr-ios://cordova/back");
			}
		},
		//给o2o的本地html传递参数 
		// 根据业务定义传递的参数
		send020Params: function (success, failed) {
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "send020Params", []);
		},
		//获取订单信息
		getOrderDetail:function (success,failed){
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "getOrderDetail", []);
		},
		
		//开箱取件,新增的方法
		openPackBox: function (success, failed , dataInfo) {
	        cordova.exec(function(data){
	            if(Android){
	                success(JSON.parse(data));
	            }else if(iOS){
	                success(JSON.parse(JSON.stringify(data)));
	            }
	        }, failed, "FuApp", "openPackBox", [dataInfo]);
		},

		//开启原生的页面
		toNative: function (success, failed , dataInfo) {
	        cordova.exec(function(data){
	            if(Android){
	                success(JSON.parse(data));
	            }else if(iOS){
	                success(JSON.parse(JSON.stringify(data)));
	            }
	        }, failed, "FuApp", "toNative", [dataInfo]);
	    },


		//分享第三方 
		//参数参数： shareContent，shareUrl
		//比如： {"shareContent":"这里是分享的内容","shareUrl":"https://www.fuiou.com"}
		shareToThird: function (success, failed ,shareInfo) {
			cordova.exec(function(data){
				if(Android){
					success(JSON.parse(data));
				}else if(iOS){
					success(JSON.parse(JSON.stringify(data)));
				}
			}, failed, "FuApp", "shareToThird", [shareInfo]);
		}
	};
}


