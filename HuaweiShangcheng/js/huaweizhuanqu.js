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


function Banner(){
	var _a=$(".banner2 a");
	var x=0;
	for(var i=0;i<_a.length;i++){
		$(_a[i]).css({"right":x});
		x+=28;
	}
	
	var br=this;
	var t=0;
	this.banner=document.getElementsByClassName("banner0")[0].children;
	this.aa=br.banner[1].children;
	this._img=br.banner[0].children;
	br.aa[4].style.background="#d1112c";
	this._time=0;
	this._timer=0;
	this._opacity=1;
	this._t=4;
	this._y=4;
	this._z=1;
	window.setTimeout(function(){
		br.play();
	},3000);
	this.play=function(){
		window.clearTimeout(br._time);
		br._opacity-=0.02;				
		if(br._opacity>=0){
			br._img[br._t].style.opacity=br._opacity;
			br._time=window.setTimeout(br.play,1);				
		}
		if(br._opacity<=0){
			br._img[br._t].style.opacity=1;
			br._opacity=1;
			br._img[br._t].style.zIndex=br._z;
			br._t--;
			if(br._t<0){
				for(var i=0;i<5;i++){
					br._img[i].style.zIndex=2;
				}
			}
			if(br._t<0){
				br._t=4;
			}
			if(br._y<0){
				br._y=4;
			}			
			br._img[br._y--].style.opacity=1;				
		}
		this.dong=function(){
			for(var i=0;i<br.aa.length;i++){
				br.i=i;
				if(br._t==i){
					br.aa[br._t].style.background="#d1112c";
				}else{
					br.aa[i].style.background="#363535";
				}				
			}				
		}
		br.dong();		
	}
	br._timer=window.setInterval(br.play,3000);
	br.banner[0].onmouseover=function(){
		clearInterval(br._timer);
	}
	br.banner[0].onmouseout=function(){
		br._timer=window.setInterval(br.play,3000);
	}
	
	for(var n=0;n<br.aa.length;n++){
		t=br.aa;
		t[n].index=n;
		br.aa[n].onmouseover=function(){
			if(this.index>br._t){
				for(var t=4;t>=0;t--){
					br._img[t].style.zIndex=2;
				}				
			}
			br._t=this.index;
			for(var p=4;p>br._t;p--){
				br._img[p].style.zIndex=1;
			}
			clearInterval(br._timer);
			for(var e=0;e<br.aa.length;e++){
				br.e=e;
				if(br.e==this.index){
					this.style.background="#d1112c";
				}else{
					br.aa[br.e].style.background="#363535";
					br.aa[4].style.background="#363535";
				}			
			}
		}
		br.aa[n].onmouseout=function(){
			br._timer=window.setInterval(br.play,3000);
		}
	}
}










function Main(){
	$("._main4 ul li").mouseenter(function(){
		$(".bian0").css({
			"display":"block",
			"opacity":"0",
		});
		$(".bian0").animate({
			opacity:"1",
		},300)
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
	
}



window.onload=function(){
	_footer();
	_footer1();
	new Banner();
	new Main();
	new Nav();
	new Footer1()
	new Tu0();
}





