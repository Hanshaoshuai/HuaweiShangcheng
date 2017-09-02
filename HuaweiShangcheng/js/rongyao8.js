function _footer(){
	var _denglu=document.getElementById("deng");
	var _zhuce=document.getElementById("zhuce");
	var _a0=document.getElementById("_a0");
	var _a=document.getElementById("_a");
	var _li=_a.parentNode;
	var _p=document.getElementById("_p");
	_li.onmouseover=function(){
		_a.parentNode.style.borderLeft="1px #ededed solid";
		_a.parentNode.style.borderRight="1px #ededed solid";
		_a.parentNode.style.borderBottom="2px #fafafa solid";
		_a.parentNode.style.background="#fff";
		_a0.style.display="none";
		_a.children[0].style.display="none";
		_a.children[1].style.transform="rotate(225deg)";
		_a.children[1].style.margin="0 0 -1px 10px";
		_p.style.display="block";			
	}
	_li.onmouseout=function(){
		_a.parentNode.style.borderLeft="1px #fafafa solid";
		_a.parentNode.style.borderRight="1px #fafafa solid";
		_a.parentNode.style.borderBottom="none";
		_a.parentNode.style.background="#fafafa";
		_a0.style.display="block";
		_a.children[0].style.display="block";
		_a.children[1].style.transform="rotate(45deg)";
		_a.children[1].style.margin="0 0 3px 10px";
		_p.style.display="none";			
	}
	_p.onmouseout=function(){
		_a.parentNode.style.borderLeft="1px #fafafa solid";
		_a.parentNode.style.borderRight="1px #fafafa solid";
		_a.parentNode.style.borderBottom="none";
		_a0.style.display="block";
		_a.children[0].style.display="block";
		_a.children[1].style.transform="rotate(45deg)";
		_a.children[1].style.margin="0 0 3px 10px";
		_p.style.display="none";			
	}
}	
function _footer1(){
	var _li=document.getElementById("_li");
	var _a1=document.getElementById("_a1").children[0];
	var _p1=document.getElementById("_p1");
	var _qa=document.getElementById("q").children[0];
	_li.onmouseover=function(){
		_li.style.borderLeft="1px #ededed solid";
		_li.style.borderRight="1px #ededed solid";
		_li.style.borderBottom="2px #fff solid";
		_li.style.background="#fff";
		_qa.style.zIndex=0;
		_a1.style.transform="rotate(225deg)";
		_a1.style.margin="0 0 -1px 10px";
		_qa.style.borderColor="#fff";
		_p1.style.zIndex=20;
		_p1.style.display="block";
	}
	_li.onmouseout=function(){
		_li.style.borderLeft="1px #fafafa solid";
		_li.style.borderRight="1px #fafafa solid";
		_li.style.borderBottom="none";
		_li.style.background="#fafafa";
		_qa.style.zIndex=1;
		_a1.style.transform="rotate(45deg)";
		_a1.style.margin="0 0 3px 10px";
		_qa.style.borderColor="#c8c8c8";
		_p1.style.display="none";
	}
	_p1.onmouseout=function(){
		_li.style.borderLeft="1px #fafafa solid";
		_li.style.borderRight="1px #fafafa solid";
		_li.style.borderBottom="none";
		_li.style.background="#fafafa";
		_qa.style.zIndex=1;
		_a1.style.transform="rotate(45deg)";
		_a1.style.margin="0 0 3px 10px";
		_p1.style.display="none";
	}	
}


function denglu(){
	var _denglu=document.getElementById("deng");
	_denglu.onclick=function(){
		_denglu.href="denglu.html?id=1";
		var _url=document.cookie="id=1";
	}
}
function zhuce(){
	var _zhuce=document.getElementById("zhuce");
	_zhuce.onclick=function(){
		_zhuce.href="zhuce.html?id=2";
		var _url=document.cookie="id=2";
	}
}


function Footer1(){
	var _foorer=this;
	this._input=document.getElementById("_input");
	this._font=document.getElementsByClassName("_font")[0];
	this._body=document.getElementsByTagName("body")[0]
	this._p2=document.getElementById("_p2");
	this._span=this._p2.children[1];
	this._p3=document.getElementById("_p3");
	this.zhuan0=document.getElementById("zhuan0");
	this.zhuan1=document.getElementById("zhuan1");
	this._li=document.getElementsByClassName("_li4")[0].children;
	this._input.onfocus=function(){		 
		_foorer._font.style.display="none";
	}
	this._input.onblur=function(){
		if(_foorer._font.style.display="none"){
			_foorer._font.style.display="block";
		}
//		if(_foorer._input.value==/[\u4Eoo-u9FA5]/g){
//			_foorer._font.style.display="block";
//		}
	}
	this._p2.onmouseover=function(){
		_foorer._p2.children[2].style.display="block";
		_foorer._p2.style.borderRight="1px #ededed solid";
		_foorer._p2.style.zIndex=11;
		_foorer.zhuan0.style.transform="rotate(225deg)";
		_foorer.zhuan0.style.marginBottom=-2+"px";
		_foorer._span.style.display="none";
	}
	this._p2.onmouseout=function(){
		_foorer._p2.children[2].style.display="none";
		_foorer._p2.style.borderRight="none";
		_foorer.zhuan0.style.transform="rotate(45deg)";
		_foorer.zhuan0.style.marginBottom=2+"px";
		_foorer._span.style.display="block";
	}
	this._p3.onmouseover=function(){
		_foorer._p3.children[2].style.display="block";
		_foorer._p2.style.borderRight="1px #ededed solid";
		_foorer._p3.style.zIndex=11;
		_foorer.zhuan1.style.transform="rotate(225deg)";
		_foorer.zhuan1.style.marginBottom=-2+"px";
		_foorer._span.style.display="none";
	}
	this._p3.onmouseout=function(){
		_foorer._p3.children[2].style.display="none";
		_foorer._p2.style.borderRight="none";
		_foorer.zhuan1.style.transform="rotate(45deg)";
		_foorer.zhuan1.style.marginBottom=2+"px";
		_foorer._span.style.display="block";
	}
	this._li[2].onmouseover=function(){
		_foorer._li[0].style.display="block";
		_foorer._li[1].style.display="none";
		_foorer._li[2].style.background="#ca141c";
		_foorer._li[3].style.background="#888888";
		_foorer._li[4].style.display="none";
		_foorer._li[5].style.display="block";
	}
	this._li[3].onmouseover=function(){
		_foorer._li[1].style.display="block";
		_foorer._li[0].style.display="none";
		_foorer._li[3].style.background="#ca141c";
		_foorer._li[2].style.background="#888888";
		_foorer._li[4].style.display="block";
		_foorer._li[5].style.display="none";
	}
	var dz=this._p2.children[2].children[0];
	dz.children[0].onclick=function(){
		this.href="denglu.html?id=1";
	}
	dz.children[1].onclick=function(){
		this.href="zhuce.html?id=2";
	}
	this._p3.children[1].onclick=function(){
		this.href="gouwuche.html?id=2";
	}	
}


function Nav(){
	var nav=this;
	this.top=0;
	this._li=document.getElementsByClassName("_huan");
	var li=this._li;
	this._span2=document.getElementsByClassName("_span2");
	for(var i=0;i<nav._span2.length;i++){		
		this._span2[i].style.top=this.top+"px";
		this.top+=-64;
	}
	for(var n=0;n<li.length;n++){
		li[n].index=n;
		this._li[n].onmouseover=function(){
			for(var i=0;i<nav._span2.length;i++){
				if(this.index==i){
					nav._span2[this.index].style.display="block";
				}
				else{
					nav._span2[i].style.display="none";
				}
			}
		}
		this._li[n].onmouseout=function(){
			for(var i=0;i<nav._span2.length;i++){
				if(this.index==i){
					nav._span2[this.index].style.display="none";
				}
			}
		}
	}
	window.onscroll=function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var _tu4=document.getElementsByClassName("tu4")[0];
		if(_scrollTop>800){
			_tu4.style.display="block";
		}else{
			_tu4.style.display="none";
		}
		
		
		if(_scrollTop>1000){
			$(".gouwu font").css({"display":"block"});
			$("#nav0").css({"position":"fixed","top":"0","zIndex":"11","borderTop":"1px #dedede solid"});
		}else{
			$(".gouwu font").css({"display":"none"});
			$("#nav0").css({"borderTop":"none","position":"relative"});
		}
		
		
		
		
	}
	$("._li5").mouseenter(function(){
		var _huan=$("._huan")
		for(var i=0;i<_huan.length;i++){
			_huan[i].style.display="block";
			$("#beijing").css({"opacity":"0.7","filter":"alpha(opacity:70)","z-index":"7"});
			$("#none").css({"z-index":"10"});
		}
		$("#zhuan00").css({"transform":"rotate(225deg)","marginBottom":"-2px"});
	});
	$("#none").mouseleave(function(){
		var _huan=$("._huan")
		for(var i=0;i<_huan.length;i++){
			_huan[i].style.display="none";
			$("#beijing").css({"opacity":"0","filter":"alpha(opacity:0)","z-index":"5"});
		}
		$("#zhuan00").css({"transform":"rotate(45deg)","marginBottom":"2px"});
		$("#none").css({"z-index":"5"});
	});
}


function Fangda(){
	$(".re img").click(function(){
		$("._oul").css({"display":"none"});
	});
	
	
	var _q=$("#hua a img");
	$("#hua a img").mouseenter(function(){
		for(var i=0;i<_q.length;i++){
			$(_q[i]).css({"width":"68px","height":"68px","border":"2px #fff solid","float":"left","margin":"0 0 0 0"});			
		}
			$(this).css({"width":"68px","height":"68px","border":"3px #eb8d91 solid","margin":"-1px 0 0 -1px"});		
	});
	for(var i=0;i<_q.length;i++){
		_q[i].index=i;
		_q[i].onmouseenter=function(){
			$(".tu00")[0].src="imgrongyao8/0"+this.index+".jpg";
			$(".tu1 img")[0].src="imgrongyao8/0"+this.index+".jpg";
		}
	}
	
	
	$(".jiao1").click(function(){
		var y=$("#huan")[0].offsetLeft;
		if(y==-282){
			$("#huan").css({"left":"-282px"});
		}else{
			y-=94;
			if(y!==-282){
				$("#huan").css({"left":y+"px"});
			}else{
				$("#huan").css({"left":"-282px"});
			}
		}
	});
	$(".jiao").click(function(){
		var y=$("#huan")[0].offsetLeft;
		if(y==0){
			$("#huan").css({"left":"0px"});
		}else{
			y+=94;
			if(y!==0){
				$("#huan").css({"left":y+"px"});
			}else{
				$("#huan").css({"left":"0px"});
			}
		}
	});
	
	
	$(".ti").mousemove(function(e){
		$(".tu").css({"display":"block"});
		$(".tu1").css({"display":"block"});
		$(".tu").animate({
			opacity:"0.4",
			filter:"alpha(opacity:40)",
		},1000);
		$(".tu1").animate({
			opacity:"1",
			filter:"alpha(opacity:100)",
		},500);		
		e=e||window.event;
		var _x=e.offsetX;
		var _y=e.offsetY;
		$(".tu")[0].style.position="absolute"
		$(".tu")[0].style.left=_x-120+"px";
		$(".tu")[0].style.top=_y-120+"px";									
		$(".tu1 img")[0].style.left=-($(".tu")[0].offsetLeft)/3*5+"px";
		$(".tu1 img")[0].style.top=-($(".tu")[0].offsetTop)/3*5+"px";		
		if($(".tu")[0].offsetLeft<=0){
			$(".tu")[0].style.left=0+"px";
			$(".tu1 img")[0].style.left=-($(".tu")[0].offsetLeft)/3*5+"px";
		}
		if($(".tu")[0].offsetTop<=0){
			$(".tu")[0].style.top=0+"px";
			$(".tu1 img")[0].style.top=-($(".tu")[0].offsetTop)/3*5+"px";
		}
		if($(".tu")[0].offsetLeft>=240){
			$(".tu")[0].style.left=240+"px";
			$(".tu1 img")[0].style.left=-($(".tu")[0].offsetLeft)/3*5+"px";
		}
		if($(".tu")[0].offsetTop>=240){
			$(".tu")[0].style.top=240+"px";
			$(".tu1 img")[0].style.top=-($(".tu")[0].offsetTop)/3*5+"px";
		}
	});
	$(".ti").mouseleave(function(){
		$(".tu").css({"display":"none"});
		$(".tu1").css({"display":"none"});
		$("#tu").css({
			"opacity":"0",
			"filter":"alpha(opacity:0)"
		});
		$("#tu1").css({
			"opacity":"0",
			"filter":"alpha(opacity:0)"
		});	
	});
}


function Main2(){	
	$(".shu1").click(function(){		
		var x=parseInt($(".shu2")[0].innerHTML);	
		if(x!==1){
			x-=1;
			$(".shu2")[0].innerHTML=x;
		}else{
			$(".shu2")[0].innerHTML=1;
		}		
	});
	$(".shu1").mousedown(function(){
		$(this).css({"background":"#f2f2f2","borderColor":"#b2b2b2","opacity":"1"});
	});
	$(".shu1").mouseup(function(){
		$(this).css({"background":"#fff","borderColor":"#b2b2b2","opacity":"0.5","filter":"alpha(opacity:50)"});
	});
	$(".shu1").mouseenter(function(){
		$(this).css({"opacity":"0.5","filter":"alpha(opacity:50)"});
	});
	$(".shu1").mouseleave(function(){
		$(this).css({"opacity":"1","filter":"alpha(opacity:100)"});
	});
	
	$(".shu3").click(function(){
		var x=parseInt($(".shu2")[0].innerHTML);
		x+=1;
		$(".shu2")[0].innerHTML=x;
	});
	$(".shu3").mousedown(function(){
		$(this).css({"background":"#f2f2f2","borderColor":"#b2b2b2","opacity":"1"});
	});
	$(".shu3").mouseup(function(){
		$(this).css({"background":"#fff","borderColor":"#b2b2b2","opacity":"0.5","filter":"alpha(opacity:50)"});
	});
	$(".shu3").mouseenter(function(){
		$(this).css({"opacity":"0.5","filter":"alpha(opacity:50)"});
	});
	$(".shu3").mouseleave(function(){
		$(this).css({"opacity":"1","filter":"alpha(opacity:100)"});
	});
	
	
	
	
	var dian=$(".xian");
	var _box=$("._box1");
	for(var i=0;i<dian.length;i++){
		dian[i].index=i;
		$(dian[i]).click(function(){
			for(var n=0;n<dian.length;n++){
				if(n==this.index){
					$(dian[this.index]).css({"border-top-color":"#e01d20","border-bottom-color":"#fff"});
					$(_box[this.index]).css({"display":"block"});
				}else{
					$(dian[n]).css({"border-top-color":"#fff","border-bottom-color":"#dedede"});
					$(_box[n]).css({"display":"none"});
				}
			}
		});
	}
	
	
	
	$(".che").click(function(){
		$(".main2_31").css({"display":"block"});				
	});
	$(".jia7").click(function(){
		$(".main2_31").css({"display":"none"});		
	});
	$(".che1").click(function(){
		var x=($("body")[0].clientWidth/2)-210;
		var y=($("body")[0].clientHeight/2)-280;
		$(".headr").css({"display":"block","left":x,"top":y});
		$(".main2_32").css({"display":"block"});				
	});
	$(".headr2_0 span").click(function(){
		$(".main2_32").css({"display":"none"});
		$(".headr").css({"display":"none"});
	});
	
	
	
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
	                alert("忘记密码了吗?");
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
	_footer();
	_footer1();
	new Nav();
	new Footer1();
	new Fangda();
	new Main2();
}




















