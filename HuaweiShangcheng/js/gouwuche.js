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
	
	_denglu.onclick=function(){
		_denglu.href="denglu.html?id=1";
		var _url=document.cookie="id=1";
	}
	_zhuce.onclick=function(){
		_zhuce.href="zhuce.html?id=2";
		var _url=document.cookie="id=2";
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


function Main(){
	var p=this;
	var yuan0=0;
	var yuan1=0;
	var _yuan=$(".yuan")[0].innerHTML.match(/\d+/g)[0];
	var _input=$(".main input");
	var zong=$(".main ul .lian03 span");
	var zonghe=$(".main_2")[0].children[1]
	var zong1=0;
	for(var i=0;i<_input.length;i++){							
		_input[i].checked=true;
	}
	for(var e=0;e<zong.length;e++){
	zong1+=parseInt(zong[e].innerHTML.match(/\d+/g)[0]);
	}
	$(".yuan")[0].innerHTML="¥"+zong1+".00";
	zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
	$(".main .main1 input").on("click",function(){
		if(this.checked==true){
			zong1=0;
			for(var e=0;e<zong.length;e++){
			zong1+=parseInt(zong[e].innerHTML.match(/\d+/g)[0]);
			}
			$(".yuan")[0].innerHTML="¥"+zong1+".00";
			zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
			for(var i=0;i<_input.length;i++){							
				_input[i].checked=true;
			}
		}else{			
			for(var n=0;n<_input.length;n++){
				_input[n].checked=false;
			}
			zong1=0;
			$(".yuan")[0].innerHTML="¥"+0+".00";
			zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
		}
	});
	$(".main .main_1 label").on("click",function(){
		if($(".main .main_1 input")[0].checked==false){
			for(var i=0;i<_input.length;i++){
				zong1=0;
				for(var e=0;e<zong.length;e++){
				zong1+=parseInt(zong[e].innerHTML.match(/\d+/g)[0]);
				}
				$(".yuan")[0].innerHTML="¥"+zong1+".00";
				zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
				_input[i].checked=true;
			}
		}else{
			for(var n=0;n<_input.length;n++){
				_input[n].checked=false;
			}
			zong1=0;
			$(".yuan")[0].innerHTML="¥"+0+".00";
			zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
		}	
	});
	$(".main .main_1 input").on("click",function(){
		if($(".main .main_1 input")[0].checked==false){
			for(var i=0;i<_input.length;i++){
				zong1=0;
				for(var e=0;e<zong.length;e++){
				zong1+=parseInt(zong[e].innerHTML.match(/\d+/g)[0]);
				}
				$(".yuan")[0].innerHTML="¥"+zong1+".00";
				zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
				_input[i].checked=true;
			}
		}else{
			for(var n=0;n<_input.length;n++){
				_input[n].checked=false;
			}
			zong1=0;
			$(".yuan")[0].innerHTML="¥"+0+".00";
			zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
		}
	});
	_input.on("click",function(){
		if(this.checked==false){
			$(".main .main1 input")[0].checked=false;
			$(".main .main_1 label input")[0].checked=false;
		}
	});
	
	
	
	$("#lian ul .jian").click(function(){
		var Parent1=$(this).parents(".lian1")[0];
		var yuan=parseInt($(Parent1).children(".lian01")[0].children[0].children[3].innerHTML.match(/\d+/g)[0]);
		var Parent=$(this).parents(".lian02")[0].children[0].children[0];
		var Parent2=$(Parent1).children(".lian03")[0].children[0];
		var x=parseInt(Parent.innerHTML);
		var zongji=parseInt($(".yuan")[0].innerHTML.match(/\d+/g)[0]);		
		if(x!==1){
			x-=1;
			Parent.innerHTML=x;							
			Parent2.innerHTML="¥"+x*yuan+".00";
			if(Parent1.children[0].children[0].checked==true){
				$(".yuan")[0].innerHTML="¥"+(zongji-yuan)+".00";
				zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
			}
		}else{
			Parent.innerHTML=1;
		}		
	});
	$(".jian").mousedown(function(){
		$(this).css({"background":"#f2f2f2","borderColor":"#b2b2b2","opacity":"1"});
	});
	$(".jian").mouseup(function(){
		$(this).css({"background":"#fff","borderColor":"#b2b2b2","opacity":"0.5","filter":"alpha(opacity:50)"});
	});
	$(".jian").mouseenter(function(){
		$(this).css({"opacity":"0.5","filter":"alpha(opacity:50)"});
	});
	$(".jian").mouseleave(function(){
		$(this).css({"opacity":"1","filter":"alpha(opacity:100)"});
	});
	
	
	
	$("#lian ul .jia").click(function(){		
		var Parent=$(this).parents(".lian02")[0].children[0].children[0];
		var Parent1=$(this).parents(".lian1")[0];
		var Parent2=$(Parent1).children(".lian03")[0].children[0];
		var yuan=parseInt($(Parent1).children(".lian01")[0].children[0].children[3].innerHTML.match(/\d+/g)[0]);
		var x=parseInt(Parent.innerHTML);
		var zongji=parseInt($(".yuan")[0].innerHTML.match(/\d+/g)[0]);
		x+=1;
		Parent.innerHTML=x;
		Parent2.innerHTML="¥"+x*yuan+".00";
		if(Parent1.children[0].children[0].checked==true){
			$(".yuan")[0].innerHTML="¥"+(zongji+yuan)+".00";
			zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
		}
	});
	$(".jia").mousedown(function(){
		$(this).css({"background":"#f2f2f2","borderColor":"#b2b2b2","opacity":"1"});
	});
	$(".jia").mouseup(function(){
		$(this).css({"background":"#fff","borderColor":"#b2b2b2","opacity":"0.5","filter":"alpha(opacity:50)"});
	});
	$(".jia").mouseenter(function(){
		$(this).css({"opacity":"0.5","filter":"alpha(opacity:50)"});
	});
	$(".jia").mouseleave(function(){
		$(this).css({"opacity":"1","filter":"alpha(opacity:100)"});
	});
	
	
	
	var y=$(".lian1");	
	for(var p=0;p<y.length;p++){
		var y1=y[p].children[1].children;
		var y2=0;
		for(var a=0;a<y1.length;a++){
			y2+=y1[a].clientHeight;
		}
		$(y[p]).css({"height":y2+"px"});
		
		var _x=Math.ceil(y2/2);
		var _x1=$(y[p]).children(".lian02")[0].children[0];
		var _x2=$(y[p]).children(".lian03")[0].children[0];
		var _x3=$(y[p]).children(".lian04")[0].children[0];
		var t1=_x1.clientHeight/2;
		var t2=_x2.clientHeight/2;
		var t3=_x3.clientHeight/2;
		$(_x1).css({"top":_x-t1+"px"});
		$(_x2).css({"top":_x-t2+"px"});
		$(_x3).css({"top":_x-t3+"px"});
	}
	
	
	
	$(".shanchu").click(function(){
		var zongji=parseInt($(".yuan")[0].innerHTML.match(/\d+/g)[0]);
		var Parent1=$(this).parents(".lian1")[0];
		var Parent2=parseInt($(Parent1).children(".lian03")[0].children[0].innerHTML.match(/\d+/g)[0]);
		$(".yuan")[0].innerHTML="¥"+(zongji-Parent2)+".00";
		zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
		$(this.parentNode.parentNode).css({"display":"none"});		
		if(parseInt($("#lian").css("height"))<20){
			$("#lian .xiao").css({"display":"block","borderBottom":"1px #c8c8c8 solid","marginBottom":"6px"});
			$(".main .main_1").css({"display":"none"});
			$(".main .main1 input")[0].checked=false;
		}
	});
	
	
	
	$(".shanpin").click(function(){		
		for(var i=0;i<_input.length;i++){
			if(_input[i].checked==true){				
				$(_input[i]).parents("ul").remove();
				var bian=$(".main ul .lian03 span");
				var bian1=0;
				for(var e=0;e<bian.length;e++){
					bian1+=parseInt(bian[e].innerHTML.match(/\d+/g)[0]);
				}
				$(".yuan")[0].innerHTML="¥"+bian1+".00";
				zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
				if(parseInt($("#lian").css("height"))<20){
					$("#lian .xiao").css({"display":"block","borderBottom":"1px #c8c8c8 solid","marginBottom":"6px"});
					$(".main .main_1").css({"display":"none"});
					$(".main .main_1 input")[0].checked=false;
					$(".main .main1 input")[0].checked=false;
				}
			}
		}				
	});
	
	
	
	var _input1=$("#lian ul input");
	$(_input1).click(function(){
		var zongji=parseInt($(".yuan")[0].innerHTML.match(/\d+/g)[0]);
		if(this.checked==true){
			var Parent1=$(this).parents(".lian1")[0];
			var Parent2=parseInt($(Parent1).children(".lian03")[0].children[0].innerHTML.match(/\d+/g)[0]);
			$(".yuan")[0].innerHTML="¥"+(zongji+Parent2)+".00";
			zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
		}else{
			var Parent1=$(this).parents(".lian1")[0];
			var Parent2=parseInt($(Parent1).children(".lian03")[0].children[0].innerHTML.match(/\d+/g)[0]);
			$(".yuan")[0].innerHTML="¥"+(zongji-Parent2)+".00";
			zonghe.innerHTML="总计："+$(".yuan")[0].innerHTML;
		}
		for(var i=0;i<_input1.length;i++){
			if(_input1[i].checked==true){
				$(".main .main_1 input")[0].checked=true;
				$(".main .main1 input")[0].checked=true;
			}else{
				$(".main .main_1 input")[0].checked=false;
				$(".main .main1 input")[0].checked=false;
				return;
			}
		}
	});
	
	
	
}





function Tu0(){
	var a=this;
	this.main=document.getElementsByClassName("main4");
	for(var i=0;i<a.main.length;i++){
		a.main[i].index=i;
		a.main[i].onmouseover=function(){
			new Tu(this.index);
		}
	}
	$(".aa1").mouseenter(function(){
	  $(".z1")[0].style.display="block"
	  this.children[0].src="img/images/02.png";
	});
	$(".aa1").mouseleave(function(){
	  $(".z1")[0].style.display="none";
	  this.children[0].src="img/images/01.png";
	});
	$(".aa2").mouseenter(function(){
	  $(".z2")[0].style.display="block"
	  this.children[0].src="img/images/06.png";
	});
	$(".aa2").mouseleave(function(){
	  $(".z2")[0].style.display="none";
	  this.children[0].src="img/images/05.png";
	});
	
	
	$(".aa0").mouseenter(function(){
	  this.children[0].src="img/images/04.png";
	});
	$(".aa0").mouseleave(function(){
	  this.children[0].src="img/images/03.png";
	});
	
	
	window.onscroll=function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var _tu4=document.getElementsByClassName("tu4")[0];
		if(_scrollTop>800){
			_tu4.style.display="block";
		}else{
			_tu4.style.display="none";
		}
	}
	
//	if(parseInt($(".main0").css("height"))<20){
//		$("#lian span").css({"display":"none"});
//	}else{
//		$("#lian span").css({"display":"block"});
//	}
}
window.onload=function(){
	_footer();
	_footer1();
	new Main();
	new Tu0();
}