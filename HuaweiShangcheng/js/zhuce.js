



function Denglu(){
	var q=this;
	var verify = $(".verify");
	$("._a").click(function(){
		this.style.background="#eb1c24"
		$("._li2")[0].style.display="block";
		$("._li2_1")[0].style.display="none";
		$("._a1")[0].style.background="#999999"
		$("#shouji")[0].style.display="block";
		$("#youxiang")[0].style.display="none";
		$(".shouji")[0].style.display="block";
		$(".youxiang")[0].style.display="none";
		$(".in1")[0].value="";
		$(".in2")[0].value="";
		$(".in3")[0].value="";
		$(".in4")[0].value="";
		$(".in5")[0].value="";
		$(".ruo").css({"background":"#eeeeee","color":"#666666"});
		
	});
	$("._a1").click(function(){
		this.style.background="#eb1c24"
		$("._li2")[0].style.display="none";
		$("._li2_1")[0].style.display="block";
		$("._a")[0].style.background="#999999"
		$("#youxiang")[0].style.display="block";
		$("#shouji")[0].style.display="none";
		$(".youxiang")[0].style.display="block";
		$(".shouji")[0].style.display="none";
		$(".in1")[0].value="";
		$(".in2")[0].value="";
		$(".in3")[0].value="";
		$(".in4")[0].value="";
		$(".in5")[0].value="";
		$(".ruo").css({"background":"#eeeeee","color":"#666666"});
	});
	
	$("#_a").click(function(){
		this.href="denglu.html?id=3";
		console.log(this.children[1])
	});
	
	
	this._span=$(".main7 span");
	this._in=$(".in");
	this._ss=$(".ss");
	for(var e=0;e<q._in.length;e++){
		q._in[e].index=e;
		$(q._in[e]).blur(function(){
			if(this.value==""){
				q._ss[this.index].style.display="block";
				window.setTimeout(function(){
					q._ss[0].style.display="none";
					q._ss[1].style.display="none";
					q._ss[2].style.display="none";
					q._ss[3].style.display="none";
				},3000);
			}
		})
	}
	$("._in2").blur(function(){
		if(this.value==""){
			$(".sp")[0].style.display="block";
		}
		window.setTimeout(function(){
			$(".sp")[0].style.display="none";
		},3000);
	});
	$("#youxiang").click(function(){
		$(".in1")[0].value="ss";
		window.setTimeout(function(){
			$(".in1").value="";
		},3000);
		if($(".in2")[0].value==""){
			$("._pan0")[0].style.display="none";
		}
	});
	$(this._span).click(function(){
		if($("._in2")[0].value==""){
			$(".sp")[0].style.display="block";
		}
		for(var i=0;i<q._in.length;i++){			
			if(q._in[i].value==""){
				for(var n=0;n<q._ss.length;n++){
					if(n==i&&q._in[i].value==""){
					q._ss[n].style.display="block";					
					}
					window.setTimeout(function(){
						q._ss[0].style.display="none";
						q._ss[1].style.display="none";
						q._ss[2].style.display="none";
						q._ss[3].style.display="none";
						$(".sp")[0].style.display="none";
					},3000);					
				}
				$(".main7 font")[0].style.display="block";
				window.setTimeout(function(){
					$(".main7 font")[0].style.display="none";
				},3000);				
				break;
			}			
		}
	});
	$("#youxiang").click(function(){
		if($(".in2")[0].value==""){
			$("._pan0")[0].style.display="none";
		}
	});
	this._a=$(".header2 ._a");
	this._a1=$(".header2 ._a1");
	$(this._a).click(function(){
		for(var i=0;i<$(".nn").length;i++){
			$(".nn")[i].style.display="none";
		}
		verify.addClass("yan").removeClass("yan1");
		$(".yan")[0].innerHTML="获取验证码";
		clearInterval(q._time);
	});
	$(this._a1).click(function(){
		for(var i=0;i<$(".nn").length;i++){
			$(".nn")[i].style.display="none";
		}
		verify.addClass("yan1").removeClass("yan");
		$(".yan1")[0].innerHTML="获取验证码";
		clearInterval(q._time);
	});
	
	
	
	$("._li3").on("click", ".yan", function(){
		var p=this;
		if(p.innerHTML.indexOf("秒") != -1){
			return;
		}
		q._time=0;
		var x=60;
		function dong(){
			p.innerHTML=x+"秒";
			x--;
			if(x<0){
				clearInterval(q._time);
				p.innerHTML="重新获取验证码";
			}			
		}
		q._time = setInterval(dong, 1000);		
		if($(".in1")[0].value==""){
			clearInterval(q._time);
			p.innerHTML="获取验证码";
			$(".ee")[0].style.display="block";
			$(".ee")[0].children[0].src="images/20.png";
			window.setTimeout(function(){
				$(".ee")[0].style.display="none";
			},3000);
		}else{
			var _value=$(".in1")[0].value;
			var _zhengze=/^1[345678]\d{9}$/g;
			if(_zhengze.test(_value)==false){
				clearInterval(q._time);
				$(".ee")[0].style.display="block";
				$(".ee")[0].children[0].src="images/17.png";				
				window.setTimeout(function(){
					$(".ee")[0].style.display="none";
				},3000);
			}else{
				$.post("api/checkUser.php", {"condition": "user='" + _value + "'"}, function (data,textStatus) {
                	console.log(data)
                    if (textStatus=="success" && parseInt(data) > 0) {
                        $(".ee")[0].children[0].src="images/23.png";
                    }else{
						$(".ee")[0].style.display="block";
						$(".ee")[0].children[0].src="images/15.png";
						$("._ss")[0].style.display="block";				
						$("._ss")[0].innerHTML="验证码已发送<br/>至:"+_value;
						window.setTimeout(function(){
							$(".ee")[0].style.display="none";
							$("._ss")[0].style.display="none";
						},3000);
					}
                });
			}
		}
	});	



	$("._li3").on("click", ".yan1", function(){
		var p=this;
		if(p.innerHTML.indexOf("秒") != -1){
			return;
		}
		q._time=0;
		var x=60;
		function dong(){
			p.innerHTML=x+"秒";
			x--;
			if(x<0){
				clearInterval(q._time);
				p.innerHTML="重新获取验证码";
			}			
		}
		q._time = setInterval(dong, 1000);
		if($(".in2")[0].value==""){
			clearInterval(q._time);
			p.innerHTML="获取验证码";
			$(".oo")[0].style.display="block";			
			window.setTimeout(function(){
				$(".oo")[0].style.display="none";
			},3000);
		}else{
			var _value1=$(".in2")[0].value;
			var _zhengze1=/^\w+@([a-z0-9-]+\.)+[a-z]+$/gi;
			if(_zhengze1.test(_value1)==false){
				$(".oo")[0].style.display="block";
				$(".oo")[0].children[0].src="images/12.png";
				clearInterval(q._time);
				window.setTimeout(function(){
					$(".oo")[0].style.display="none";
				},3000);
			}else{
				$.post("api/checkUser.php", {"condition": "user='" + _value1 + "'"}, function (data,textStatus) {
                	console.log(data)
                	if(textStatus=="success" && parseInt(data) > 0){
                		$(".oo")[0].children[0].src="images/23.png";
	                }else{ 
						$(".oo")[0].style.display="block";
						$(".oo")[0].children[0].src="";
						$("._ss")[0].style.display="block";				
						$("._ss")[0].innerHTML="验证码已发送<br/>至:"+_value1;
						window.setTimeout(function(){
							$(".oo")[0].style.display="none";
							$("._ss")[0].style.display="none";
						},3000);
					}
				})
			}
			
		}
	});
	
	var inputVal = "";
	$(".in4").on("input", function(){
		if(this.value.length<8){
			$("._pan1").css({"display":"block"}).children("img").attr("src", "images/18.png");
		}else{
			$(".ruo").css({"background":"red","color":"#fff"});
		}
		window.setTimeout(function(){
			$("._pan1").css("display","none");
		},2000);		
		if(this.value.length > 32){
			this.value = inputVal; 
		} else {
			inputVal = this.value;
		}
	});
	
	$(".in5").blur(function(){
		if(this.value!=$(".in4").val()){
			$(".tu").attr("src","images/21.png").css("display","block").delay(3000).fadeOut(400);			
		}
	});	
}

function Tijiao(){
	$("#shouji").click(function(){
		var pwd_f=$(".in5").val();
        var pwd_s=$(".in4").val();
        var _value=$(".in1")[0].value;
		var _zhengze=/^1[345678]\d{9}$/g;
		if(pwd_f==pwd_s && _zhengze.test(_value)==true &&  pwd_f.length>=8){
			 var _params={
                "user":document.getElementsByClassName("in1")[0].value,
                "mobile":document.getElementsByClassName("in4")[0].value,
//              "mail":document.getElementById("mail").value,
//              "secret":document.getElementById("password").value,
//              "name":document.getElementById("userName").value
            };
//			_reg.account.lastIndex=0;
//			_reg.mobile.lastIndex=0;
//			_reg.mail.lastIndex=0;
//			_reg.secret.lastIndex=0;
//          if(_reg.account.test(_params.user) 
//          && _reg.mobile.test(_params.mobile) && _reg.mail.test(_params.mail) && _reg.secret.test(_params.secret)
//          ) {
                $.post("api/registerUser.php", _params, function (data,textStatus){
                	console.log(data)
                    if (textStatus=="success" && parseInt(data) > 0) {
                        alert("您已顺利成为会员！！！");
                    } else {
                        alert("尊敬的用户您好，您注册会员操作失败，请重试核对填写的信息，或者联系管理员！！！");
                    }
                });
//          }		
		}else{
			alert("尊敬的用户您好，您注册会员操作失败，请重试，或者联系管理员！！！");
		}
		
		
     
	});
	
	
	$("#youxiang").click(function(){
		var pwd_f=$(".in5").val();
        var pwd_s=$(".in4").val();
        var _value1=$(".in2")[0].value;
		var _zhengze1=/^\w+@([a-z0-9-]+\.)+[a-z]+$/gi;
		if(pwd_f==pwd_s && _zhengze1.test(_value1)==true &&  pwd_f.length>=8){
			 var _params={
                "user":document.getElementsByClassName("in2")[0].value,
                "mobile":document.getElementsByClassName("in4")[0].value,
//              "mail":document.getElementById("mail").value,
//              "secret":document.getElementById("password").value,
//              "name":document.getElementById("userName").value
            };
//			_reg.account.lastIndex=0;
//			_reg.mobile.lastIndex=0;
//			_reg.mail.lastIndex=0;
//			_reg.secret.lastIndex=0;
//          if(_reg.account.test(_params.user) 
//          && _reg.mobile.test(_params.mobile) && _reg.mail.test(_params.mail) && _reg.secret.test(_params.secret)
//          ) {
                $.post("api/registerUser.php", _params, function (data,textStatus){
                    if (textStatus=="success" && parseInt(data) > 0) {
                        alert("您已顺利成为会员！！！");
                    } else {
                        alert("尊敬的用户您好，您注册会员操作失败，请重试核对填写的信息，或者联系管理员！！！");
                    }
                });
//          }		
		}else{
			alert("尊敬的用户您好，您注册会员操作失败，请重试核对填写的信息，或者联系管理员！！！");
		}
	});
}


window.onload=function(){
	new Denglu();
	new Tijiao();
}