	function PrefixZero(num, n) {  //补前面的0
	    return (Array(n).join(0) + num).slice(-n);
	}
	
	const showToast = (title='加载中...', duration=2000, align='center', verticalAlign='bottom') => {
	    plus.nativeUI.toast('<font color="#ffffff">'+title+'</font>', {
	        type: 'richtext',
	        background: 'rgba(0, 0, 0, .8)',
	        duration: duration,
	        align: align,
	        verticalAlign: verticalAlign,
 	    });
	}
	
	function formatExactValue  (fraction, exponent) {
	    return "(1." + (fraction.replace(/0+$/, "") || "0") + ")<sub>2</sub>" +
	        " &times; 2<sup>" + exponent + "</sup>";
	}
	
	function hexToDec (hexString, charLoc) {
	    return "0123456789ABCDEF".indexOf(hexString.charAt(charLoc));
	}
	
	
   function postHex(reqCode,ip,port){
		try {
			console.log("enter posthex:::::::::::");
			var Socket = plus.android.importClass("java.net.Socket");
			var PrintWriter = plus.android.importClass("java.io.PrintWriter");
			var BufferedWriter = plus.android.importClass("java.io.BufferedWriter");
			var OutputStreamWriter = plus.android.importClass("java.io.OutputStreamWriter");
			var BufferedReader = plus.android.importClass("java.io.BufferedReader");
			var InputStreamReader = plus.android.importClass("java.io.InputStreamReader");
			var DataInputStream = plus.android.importClass("java.io.DataInputStream");
			var DataOutputStream= plus.android.importClass("java.io.DataOutputStream");
			var StrictMode = plus.android.importClass("android.os.StrictMode");
			var Build = plus.android.importClass("android.os.Build");
			if (Build.VERSION.SDK_INT > 9) {
				var policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
				StrictMode.setThreadPolicy(policy);
			}
			let socket = getApp().globalData.socket;
			if (getApp().globalData.socket == null){
				console.log("the socket will reconnect ,_ip is::"+ ip +"lllllllport is "+ port);
				getApp().globalData.socket = new Socket(ip,port);
				getApp().globalData.socket.setSoTimeout(4000);
			}else {
				console.log("socket connected,<<<<<<<<<<<"+socket.getSoTimeout());
			}
			var inputStreamReader = new InputStreamReader(socket.getInputStream());
			var socketReader = new BufferedReader(inputStreamReader);
			//01 04 00 01 00 02 20 0B
			var dos = new DataOutputStream(socket.getOutputStream());
			
			dos.write(reqCode);
			dos.flush();
			
			var dis = new DataInputStream(getApp().globalData.socket.getInputStream());
			var ret=[];var f=0;var i=0
			while ((f=dis.read())!= null ){
				// 
				if(f!= -1){
					console.log("f("+ i++ +")== "+f);
					var _hexCode = f.toString(16);
					ret.push(PrefixZero(_hexCode,2));
				}
			}
			var _crc = "";
			
			if (ret.length!=9 && ret.length != 13){
				console.log("get 0000000000000000000:ret 长度：："+ret.length)
				return 0;
			}
			//高低位翻转))
			var actualFlow="";
			if(ret[2]==4){   			//实时流量
				actualFlow=ret[5]+"" +ret[6] +""+ret[3]+"" +ret[4];
			}else if(ret[2]==8){        //总流量
				actualFlow=ret[9]+"" +ret[10] +""+ret[7]+"" +ret[8] +""+ ret[5]+"" +ret[6] +""+ret[3]+"" +ret[4];
			}
			console.log("actualFlow is::::::::::::::::"+actualFlow);
			//校验码是否正确
			return actualFlow;
			
		}catch (e) {			 
			 showToast(e);
		     // console.log("run error : " + e)  
		 } 	
	}
	
	export {
		PrefixZero,
		showToast,
		// decodeAndUpdate,
		 postHex,
		 hexToDec,
		 formatExactValue
	}