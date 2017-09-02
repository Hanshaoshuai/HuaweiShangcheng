

function Play(){
	var _span=$("._span0 span");
	for(var i=0;i<_span.length;i++){
//		console.log(_span[i])
		_span[i].index=i;
		$(_span[i]).mouseenter(function(){
			for(var n=0;n<_span.length;n++){
				if(this.index==n){
					$(this).animate({ 
					    width: "625px"
					}, 200 );
				}else{
					$(_span[n]).animate({ 
					    width: "126px"
					}, 200 );
				}
			}
		});
	}
	
//	background:#6699ff;color:#b8b5e2;
	window.onscroll=function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(_scrollTop>1100){		
			$("#nav2 span").css({"position":"fixed","top":"0"});
		}else{
			$("#nav2 span").css({"position":"absolute","left":"0","top":"0"});
		}
		if(_scrollTop>1767){
			$("._a").css({"color":"#b8b5e2","background":"#6699ff"});
			$("._a1").css({"color":"#fff","background":"none"});
		}else{
			if(_scrollTop<1767){
				$("._a").css({"color":"#fff","background":"none"});
				$("._a1").css({"color":"#b8b5e2","background":"#6699ff"});
			}
		}
		if(_scrollTop>2390){
			$("._a0").css({"color":"#b8b5e2","background":"#6699ff"});
			$("._a").css({"color":"#fff","background":"none"});
		}else{
			if(_scrollTop<2390){
				$("._a0").css({"color":"#fff","background":"none"});
			}
		}
	}
}


window.onload=function(){
	new Play();
}



