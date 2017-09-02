function Scroll(){
	window.onscroll=function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(_scrollTop>1129){		
			$(".main2_1 img").css({"position":"fixed","top":"0","right":"230px"});
		}else{
			if(_scrollTop<1129){
				$(".main2_1 img").css({"position":"absolute","right":"-176px","top":"0"});
			}
		}
	}
	
}


window.onload=function(){
	new Scroll();
}