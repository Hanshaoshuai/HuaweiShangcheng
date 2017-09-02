



function Zhuce(){
	var _id="a0";
	var z=this;
	$("._span4").click(function(){
		this.children[1].href="zhuce.html?id=3";
		console.log(this.children[1])
	});
	
	this._in=$(".input_1");
	this._img=$("._img0");
	for(var i=0;i<z._in.length;i++){
		z._in[i].index=i;
		this._in[i].onblur=function(){
			if(this.value==""){
				var t=this;
				z._img[this.index].style.display="block";
				window.setTimeout(function(){
					z._img[t.index].style.display="none";
				},3000)
			}
		}
//		this._in[i].onchange=function(){
//			var t=this;
//			z._img[this.index].style.display="block";
//			window.setTimeout(function(){
//				z._img[t.index].style.display="none";
//			},3000)
//		}
	}
	
	this.mg=$("._shuma");
	var x=0;
	var y=0;
	$("._img0").click(function(){
		x+=1;
		if(x==8){
			x=0;
		}
		z.mg[y].style.display="none";
		z.mg[x].style.display="block";
		_id="a"+x;
		y+=1;
		if(y==8){
			y=0;
		}
		
	});
	
	
	$("._input2").click(function(){
		var _reg={
            "a0":"5u52",
            "a1":"w4jv",
            "a2":"dvw4",
            "a3":"wzks",
            "a4":"mynn",
            "a5":"kxtd",
            "a6":"6dt2",
            "a7":"ntwm"
        }
		var p=_reg[_id];	
		for(var i=0;i<z._in.length;i++){			
			z._img[i].index=i;
			if(z._in[i].value==""){
				z._img[i].style.display="block";
				window.setTimeout(function(){
					z._img[0].style.display="none";
					z._img[1].style.display="none";
					z._img[2].style.display="none";
				},3000);
			}else{
				var a=z._in[0].value.split("");
				if(a.length<5){
					$("._img5")[0].style.display="block";
					window.setTimeout(function(){
						$("._img5")[0].style.display="none";
					},3000);
				}else{
					z._img[i].style.display="none";
				}				
			}			
		}
				
		var _g=z._in[2].value;
		var zhengze=new RegExp(p,"i");
		if(zhengze.test(_g)==true){
			z._img[2].style.display="none";					
		}else{
			$("._img5")[1].style.display="block";
			window.setTimeout(function(){
				$("._img5")[1].style.display="none";
			},3000);
		}
		
		
		

        var user=$(".input_1").val();
        var pwd_f = $(".input_2").val();
        var _params = {
            "user": user,
            "password": pwd_f
        };
        if(user!==""&&pwd_f!==""&&zhengze.test(_g)==true){
	        $.post("api/login.php", _params, function (data,textStatus) {
	        	console.log(data)
	            try{
					if(data=="0"){
						$("._img1").css({"display":"block"});
					}else{
						alert("欢迎:"+data+" 光顾!!");
						window.location.href="index0.html";
					}
	            }catch (e){
	                alert("用户名或密码错误");
	            }
	    	});
		}
		
		
		
	});
	

	$("._span input").click(function(){
		$("._span img")[0].style.display="block";
		window.setTimeout(function(){
			$("._span img")[0].style.display="none";
		},3000)
	});
	
}



window.onload=function(){
	new Zhuce();
}
























