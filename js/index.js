$(function() {
//	ctrl+shift+f
	//	获取屏幕的宽高
	var nowpage = 0;
	//	当前页数
	var width = window.innerWidth;
	var height = window.innerHeight;

	$(".content").width(width);
	$(".content").height(4 * height);

	$(".page").width(width);
	$(".page").height(height);
	//不是jquery自带的，是引入的插件
	//手指触屏滑动的事件

	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
//			滑动分页的功能
			if(direction=="up"){
				nowpage++;
				
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage<0){
				nowpage=0;
			}else if(nowpage>3)
			{
				nowpage=3;
			}
			
			//等第二页出现后在执行新的样式
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				//先让第一个图出现，在让第二个图出现，在css里面将两个图片先隐藏
				if(nowpage == 1){
					$(".page2-farm").fadeIn(2000,function(){
						$(".page2-it").fadeIn(2000)
					})
				}
				if(nowpage == 2){
					$(".page3-et").fadeIn(2000);
					$(".page3-lt").fadeIn(3000);
					$(".page3-bus").animate({left:"-100%"},{duration:2000})
					$(".page3-human").animate({right:"50%"},{duration:3000,complete:function(){
						$(".page3-bus").fadeOut("slow");
						$(".page3-busStation").fadeOut("slow");
						$(".page3-et").fadeOut("slow")
						$(".page3-human").fadeOut("slow");
						$(".page3-lt").fadeOut("slow",function(){
							$(".page3-myTeamWall").fadeIn("slow");
							$(".page3-myTeamAvatar").fadeIn("slow",function(){
								$(".page3-myteamWhereTxt").animate({width:"30%"},{duration:3000,complete:function(){
									$(".page3-myTeamSpace").animate({width:"55%"},{duration:4000})
								}})
							});
							
							
							
						});
						
							
					}})
				}
//				if(nowpage == 3){
//					$
//					
//				}
			}})
		}
	});
	
	$(".page1-Building").fadeIn(400,function(){
		$(".page1-flight").animate({width:"70%"},{duration:2000})
	})
//	animate({要做的动画效果},{duration:动画时长,comlete:动画执行完了要做的事情})
	$(".page4-lightOff").click(function(){
		$(".page4-lightOffBg").fadeOut("slow");
		$(".page4-cornerTitle").fadeOut("slow");
		$(".page4-clickGuide").fadeOut("slow",function(){
			
			$(".page4-lightOnBg").fadeIn("slow");
			$(".page4-lightOn").fadeIn("slow");
		});
		
		
	})
})

/*$(document).ready(function(){
	
})*/

//等文档完成之后再执行js代码