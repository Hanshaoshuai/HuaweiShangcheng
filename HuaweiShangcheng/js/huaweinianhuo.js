

function Scroll(){
	window.onscroll=function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(_scrollTop>618){		
			$("#nav span").css({"position":"fixed","top":"0"});
		}else{
			$("#nav span").css({"position":"absolute","left":"0","top":"0"});
		}
		if(_scrollTop>4400){
			$("._a").css("color","#e6acdc");
			$("._a1").css("color","#fee7aa");
		}else{
			if(_scrollTop<4400){
				$("._a").css("color","#fee7aa");
				$("._a1").css("color","#e6acdc");
			}
		}
		if(_scrollTop>6200){
			$("._a0").css("color","#e6acdc");
			$("._a").css("color","#fee7aa");
		}else{
			if(_scrollTop<6200){
				$("._a0").css("color","#fee7aa");
			}
		}
	}
	
}


window.onload=function(){
	new Scroll();
}


