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
            if(Android){
                success(JSON.parse(data));
            }else if(iOS){
                success(JSON.parse(JSON.stringify(data)));
            }
        }, failed, "FuApp", "getDeviceInfo", []);
    },
    
    //读取订单列表中，o2o的订单详情
    //orderNo,busiCd
    getOrderDetail: function (success, failed) {
        cordova.exec(function(data){
            if(Android){
                success(JSON.parse(data));
            }else if(iOS){
                success(JSON.parse(JSON.stringify(data)));
            }
        }, failed, "FuApp", "getOrderDetail", []);
    },
    
    //分享第三方 
    // 参数参数： shareContent，shareUrl
    //比如： {"shareContent":"这里是分享的内容","shareUrl":"https://www.fuiou.com"}
    shareToThird: function (success, failed ,shareInfo) {
        cordova.exec(function(data){
            if(Android){
                success(JSON.parse(data));
            }else if(iOS){
                success(JSON.parse(JSON.stringify(data)));
            }
        }, failed, "FuApp", "shareToThird", [shareInfo]);
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
    //给本地传递参数
    receiveParams: function (success, failed , dataInfo) {
        cordova.exec(function(data){
            if(Android){
                success(JSON.parse(data));
            }else if(iOS){
                success(JSON.parse(JSON.stringify(data)));
            }
        }, failed, "FuApp", "receiveParams", [dataInfo]);
    },
    
    //调本地众安保险
    startManyInsurance: function (success, failed , dataInfo) {
        cordova.exec(function(data){
            if(Android){
                success(JSON.parse(data));
            }else if(iOS){
                success(JSON.parse(JSON.stringify(data)));
            }
        }, failed, "FuApp", "startManyInsurance", [dataInfo]);
    },

	    //打开新的网页
    openNewPage: function (success, failed , dataInfo) {
        cordova.exec(function(data){
            if(Android){
                success(JSON.parse(data));
            }else if(iOS){
                success(JSON.parse(JSON.stringify(data)));
            }
        }, failed, "FuApp", "openNewPage", [dataInfo]);
    },
    
        //是否是点击首页底部进入h5网页的
    isIndexToWeb: function (success, failed , dataInfo) {
        cordova.exec(function(data){
            if(Android){
                success(JSON.parse(data));
            }else if(iOS){
                success(JSON.parse(JSON.stringify(data)));
            }
        }, failed, "FuApp", "isIndexToWeb", [dataInfo]);
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
    
     //向原生的页面传递错误提示
  showToast: function (success, failed , dataInfo) {
        cordova.exec(function(data){
            if(Android){
                success(JSON.parse(data));
            }else if(iOS){
                success(JSON.parse(JSON.stringify(data)));
            }
        }, failed, "FuApp", "showToast", [dataInfo]);
    },
    
    //tiao yong ben di xiang ji
    fotoImage:function(success ,failed , dataInfo){
    	cordova.exec(function(data){
            if(Android){
                success(JSON.parse(data));
            }else if(iOS){
                success(JSON.parse(JSON.stringify(data)));
            }
        }, failed, "FuApp", "fotoImage", [dataInfo]);
    },
    
    //退出
    exitWebView :function(){
        if(Android){
            navigator.app.exitApp();
        }else{
            //window.open("fuiou-mgr-ios://cordova/back");
            cordova.exec(function(){}, function(){}, "FuApp", "exitWebView", []);
        }
    }

};

