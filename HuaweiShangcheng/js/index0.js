

function _footer(){	
	var _a0=document.getElementById("_a0");
	var _a=document.getElementById("_a");
	var _li=_a.parentNode;
	var _p=document.getElementById("_p");
	_li.onmouseover=function(){
		_a.parentNode.style.borderLeft="1px #ededed solid";
		_a.parentNode.style.borderRight="1px #ededed solid";
		_a.parentNode.style.borderBottom="2px #fff solid";
		_a0.style.display="none";
		_a.children[0].style.display="none";
		_a.children[1].style.transform="rotate(225deg)";
		_a.children[1].style.margin="0 0 -1px 10px";
		_p.style.display="block";			
	}
	_li.onmouseout=function(){
		_a.parentNode.style.borderLeft="1px #fff solid";
		_a.parentNode.style.borderRight="1px #fff solid";
		_a.parentNode.style.borderBottom="none";
		_a0.style.display="block";
		_a.children[0].style.display="block";
		_a.children[1].style.transform="rotate(45deg)";
		_a.children[1].style.margin="0 0 3px 10px";
		_p.style.display="none";			
	}
	_p.onmouseout=function(){
		_a.parentNode.style.borderLeft="1px #fff solid";
		_a.parentNode.style.borderRight="1px #fff solid";
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
		_qa.style.zIndex=0;
		_a1.style.transform="rotate(225deg)";
		_a1.style.margin="0 0 -1px 10px";
		_qa.style.borderColor="#fff";
		_p1.style.zIndex=20;
		_p1.style.display="block";
	}
	_li.onmouseout=function(){
		_li.style.borderLeft="1px #fff solid";
		_li.style.borderRight="1px #fff solid";
		_li.style.borderBottom="none";
		_qa.style.zIndex=1;
		_a1.style.transform="rotate(45deg)";
		_a1.style.margin="0 0 3px 10px";
		_qa.style.borderColor="#c8c8c8";
		_p1.style.display="none";
	}
	_p1.onmouseout=function(){
		_li.style.borderLeft="1px #fff solid";
		_li.style.borderRight="1px #fff solid";
		_li.style.borderBottom="none";
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
	
}

function Banner(){
	var br=this;
	var t=0;
	this.banner=document.getElementsByClassName("banner0")[0].children;
	this.aa=br.banner[1].children;
	this._img=br.banner[0].children;
//	var a=300;
	var a=91;
	for(var i=0;i<br.aa.length;i++){		
		br.aa[i].style.right=a+"px";
		a+=27;
	}
	br.aa[7].style.background="#d1112c";
	this._time=0;
	this._timer=0;
	this._opacity=1;
	this._t=7;
	this._y=7;
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
				for(var i=0;i<8;i++){
					br._img[i].style.zIndex=2;
				}
			}
			if(br._t<0){
				br._t=7;
			}
			if(br._y<0){
				br._y=7;
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
				for(var t=7;t>=0;t--){
					br._img[t].style.zIndex=2;
				}				
			}
			br._t=this.index;
			for(var p=7;p>br._t;p--){
				br._img[p].style.zIndex=1;
			}
			clearInterval(br._timer);
			for(var e=0;e<br.aa.length;e++){
				br.e=e;
				if(br.e==this.index){
					this.style.background="#d1112c";
				}else{
					br.aa[br.e].style.background="#363535";
					br.aa[7].style.background="#363535";
				}			
			}
		}
		br.aa[n].onmouseout=function(){
			br._timer=window.setInterval(br.play,3000);
		}
	}
	
}


function Main(){
	var ma=this;
	this.main0=document.getElementsByClassName("main1");
	this.main=this.main0[0].children;
	this.tu=ma.main;
	for(var i=0;i<ma.main.length;i++){
		ma.main[i].index=i;
		this.main[i].onmouseenter=function(){
			for(var n=0;n<ma.main.length;n++){
				
				if(n==this.index){
					$(ma.tu[this.index].children[1].children[0]).animate({
					   width:136,height:161,marginTop:-6,
					}, 300);
				}else{
					$(ma.tu[n].children[1].children[0]).off()
//					console.log(ma.tu[n].children[1].children[0])
				}
			}
		}
		this.main[i].onmouseleave=function(){
			$(ma.tu[this.index].children[1].children[0]).animate({
			   width:110,height:146,marginTop:0,
			}, 300);
		}
	}
	
	$.post("css/gouwuche.json",true, function(data){
		$(ma.main).click(function(){		
			window.location.href="rongyao8.html";		
			ma.b=this;
			var a=$(ma.main).length;		
			ma.data=data;
			var _class=ma.b.getAttribute("class").match(/\d+/g)[0];			
			var img=ma.data[0][_class];
			var img1=ma.data[0][_class].name3;
			var img2=ma.data[1][_class];
			var img3=ma.data[1][_class].name1;
			var id="";
			var id2="";			
			var img0="";
			var xinxi0="";
			for(var key in img){
				id+=img[key]+" ";							
			}
			id=id.split(" ");
			id=id.filter((a,b,c)=>{
				return a!=="[object";
			});
			id=id.filter((a,b,c)=>{
				return a!=="Object]";
			});
			id=id.join(" ");
			id+=",";
			for(var key in img1){
				id+=img1[key]+" ";							
			}
			document.cookie="xinxi="+id;//手机型号信息
//			document.cookie=_class+"="+id;//手机型号信息
			
			
			for(var key in img2){
				id2+=img2[key]+",";					
			}
			id2=id2.split(",")[0];			
			id2+=",";			
			for(var key in img3){
				id2+=img3[key]+" ";					
			}
			document.cookie="img="+id2;//手机图片信息;			
//			document.cookie="a"+_class+"="+id2;//手机图片信息;
			$(".rongyao8").on("click",function(){
				for(var key in ma.data[0][0]){
					img+=ma.data[0][0][key]+" ";							
				}
				console.log(img)
				document.cookie="xinxi="+id;
				document.cookie="img="+id2;
			});
			
			
			
//			console.log(document.cookie);
			
			
			
//			document.cookie="name0="+img;
//			document.cookie="name1="+img1;
			
//		   console.log(img);
//		   console.log(img1);
//		   console.log(parseInt(_class))
		});
	});
	
	
	
	
}


function Tu(_x){
	var s=this;
	this.tu=document.getElementsByClassName("main4")[_x].children;
	for(var i=0;i<s.tu.length-1;i++){
		s.tu[i].index=i;
		this.tu[i].onmouseenter=function(){
			$(s.tu[this.index]).animate({
			   marginTop:"-2",
			 },200);
			s.tu[this.index].style.zIndex=2;
			s.tu[this.index].style.boxShadow="0px 14px 28px #dcdadd";
			if(this.index==0){				
				s.tu[this.index].style.boxShadow="none";
				s.tu[this.index].children[0].style.boxShadow="0px 14px 28px #dcdadd";
			}
		}
		this.tu[i].onmouseleave=function(){
			$(s.tu[this.index]).animate({
			   marginTop: 0,
			 }, 200);
			s.tu[this.index].style.zIndex=0;
			s.tu[this.index].style.boxShadow="none";
			if(this.index==0){
				s.tu[this.index].style.zIndex=2;
				s.tu[this.index].children[0].style.boxShadow="none";
			}
		}
	}
	this.tu2=document.getElementsByClassName("main5")[_x].children;
	for(var i=0;i<s.tu2.length;i++){
		s.tu2[i].index=i;
		this.tu2[i].onmouseenter=function(){
			$(s.tu2[this.index]).animate({
			   marginTop: -2,
			 }, 200);
			s.tu2[this.index].style.zIndex=2;
			s.tu2[this.index].style.boxShadow="0px 14px 28px #dcdadd";
		}
		this.tu2[i].onmouseleave=function(){
			$(s.tu2[this.index]).animate({
			   marginTop: 0,
			 }, 200);
			s.tu2[this.index].style.zIndex=0;
			s.tu2[this.index].style.boxShadow="none";
		}
	}
		
}
function Tu0(){
	var a=this;
	this.main=document.getElementsByClassName("main4");
//	this._aa0=document.getElementsByClassName("aa0");
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
	$(".aa0").click(function(){
		document.body.scrollTop=0;			
	});
	
}


function Lunbo(){	
	var p=this;	
	var _opcity=1;
	var x=0;
	var y=0;
	this._time=0;
	this._time1=0;
	this._m6=$(".main6")[0].children[0];
	this.img=p._m6.children[0].children[0];
	this.span=p._m6.getElementsByTagName("span");
	window.setTimeout(function(){
		p.play();
	},3000);
	p.span[0].style.background="#4c4c4c";
	this.play=function(){
		window.clearTimeout(p._time);	
		_opcity-=0.05;		
		if(_opcity>0){
			p.img.style.opacity=_opcity;
			p._time=window.setTimeout(p.play,10);
		}
		if(_opcity<=0){
			_opcity=1;			
			p.img.src="img/images/00"+x+".png";
			p.img.style.opacity=1;
			x+=1;
			y=x;
			if(y>=3){
				y=0;
			}
			p._m6.style.background="url(img/images/00"+y+".png)"
			
			if(x>=3){
				x=0;
			}			
		}
		
				
//		function zhuan(){
			var f=p.span;		
			for(var n=0;n<p.span.length;n++){
				for(var i=0;i<p.span.length;i++){
					f[i].id=i;
				}
				if(n==x){
					p.span[x].style.background="#4c4c4c";
				}else{
					p.span[n].style.background="#fff";
				}
				p.span[n].index=n;
				p.span[n].onmouseenter=function(){
					for(var e=0;e<p.span.length;e++){
						if(e==this.id){
							p.span[this.id].style.background="#4c4c4c";
						}else{
							p.span[e].style.background="#fff";
						}
					}
//					window.clearTimeout(p._time1);
					if(this.id==0){
						x=2;
						y=x;
					}else{
						x=this.id-1;
						y=x;
					}
//					if(x==0){
//						x=2;
//						p.img.src="img/images/00"+x+".png";
//					}else{
//						x=this.id-1;
//						p.img.src="img/images/00"+x+".png";
//					}
//					y=this.id						
//					p._m6.style.background="url(img/images/00"+(y)+".png)"
//					x=this.index-1;
//					y=this.index-1;
					p.play();
				}
//				p.span[n].onmouseleave=function(){
//					x=this.index;
//					y=this.index;
//				}
			}
			
//		}
//		zhuan();
	}
	_time1=window.setInterval(p.play,3000);
	$(p._m6).mouseenter(function(){
 		 window.clearInterval(_time1);
	});
	$(p._m6).mouseleave(function(){
		_time1=window.setInterval(p.play,3000);
	});
//	p.play();	
//	function zhuan(x){
//		var f=p.span;		
//		for(var n=0;n<p.span.length;n++){
//			for(var i=0;i<p.span.length;i++){
//				f[i].id=i;
//			}
//			if(n==x){
//				p.span[x].style.background="#4c4c4c";
//			}else{
//				p.span[n].style.background="#fff";
//			}
//			p.span[n].onmouseenter=function(){
//				for(var e=0;e<p.span.length;e++){
//					if(e==this.id){
//						p.span[this.id].style.background="#4c4c4c";
//					}else{
//						p.span[e].style.background="#fff";
//					}
//				}
//				window.clearTimeout(p._time);
//				x=this.id;
//				p.img.src="img/images/00"+x+".png";
//				if(x==2){
//					x=0;
//					p._m6.style.background="url(img/images/00"+(x+1)+".png)"
//				}
//			}
//			p.span[n].onmouseleave=function(){
////				p.play(this.id);
////				p._time=window.setInterval(p.play,3000);
//			}
//
//		}
//		$(p._m6).mouseenter(function(){
//		  window.clearTimeout(p._time);
//		});
//		$(p._m6).mouseleave(function(){
//		  p.play();
//		});
//		
//	}
	
}



window.onload=function(){
	_footer();
	_footer1();
	denglu();
	zhuce();
	new Footer1();
	new Nav();
	var b=new Banner();
	new Main();
	new Tu0();
	new Lunbo();
}























