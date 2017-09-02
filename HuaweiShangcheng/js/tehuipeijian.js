function Scroll(){
	window.onscroll=function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(_scrollTop>620){		
			$(".tu1").css({"position":"fixed","top":"0","right":"283px"});
		}else{
			if(_scrollTop<620){
				$(".tu1").css({"position":"absolute","right":"300px","top":"0"});
			}
		}
	}
	
}


window.onload=function(){
	new Scroll();
}