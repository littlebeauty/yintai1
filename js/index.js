
		$(function(){
			// ================================头部=========================================
		$(".r_c").mouseover(function(){
			$(".box1").css("display","block");
			$(".r_c").css("background-color","white").css("width","120px").css("border","1px solid #d8d8d8").css("height","260px").css("margin","-1px").css("color","#e5004f");
		})
		$(".r_c").mouseout(function(){
			$(".box1").css("display","none");
			$(".r_c").css("background-color","transparent").css("width","120px").css("border","none").css("height","40px").css("color","#666").css("margin","0px");
		})	
		$(".r_r").mouseover(function(){
			$(".box2").css("display","block");
			$(".r_r").css("background-color","white").css("width","148px").css("border","1px solid #d8d8d8").css("height","322px").css("margin","-15px").css("color","#e5004f");
		})
		$(".r_r").mouseout(function(){
			 $(".box2").css("display","none");
			$(".r_r").css("background-color","transparent").css("width","120px").css("border","none").css("height","40px").css("color","#666").css("margin","0px");
		})
		/*=========================================轮播图======================================
		
	/***用于放图片的数组*****/
		$(function() {
			var arr = ["img/banner.png", "img/banner2.png", "img/banner3.png", "img/banner4.png","img/banner5.png"];
		/****初始化页面启动显示的图片*****/
		$(".ul_img li img").attr("src", arr[0]);

		var index = 0;
		var timer = null;
		/****当鼠标滑动到列表索引按钮时，显示当前的图片*****/
		$(".ul_text li").hover(function() {
			clearInterval(timer);
			index = $(this).index();
			$(this).addClass("hover").siblings().removeClass("hover");
			$(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({'opacity': 1
				}, 1000);
			}, function() {
				auto();
		});

		auto();
		/*****自动播放图片的定时器****/
		function auto() {
			timer = setInterval(function() {
				index++;
				if (index > 4) {
					index = 0;
				}
			$(".ul_text li").eq(index).addClass("hover").siblings().removeClass("hover");
			$(".ul_img li img").attr("src", arr[index]).css('opacity', 0).animate({'opacity': 1}, 1000);
				}, 4000);
			}
		});

	})
		$(function(){
			$.ajax({
				url:"data/index.json",
				type:"get",
				success:function(res){
					var arr = res;
					var html = "";
					for(var i= 0;i<9;i++){
					html+='<a href="#" class = "lbg" style = "background-position:0 '+i*-45+'px"></a><div class = "un"><div class = "join-l"><div class = "l-t"><a href="#">'+arr[i].title[0]+'</a><a href="#">'+arr[i].title[1]+'</a><a href="#">'+arr[i].title[2]+'</a><a href="#">'+arr[i].title[3]+'</a><a href="#">'+arr[i].title[4]+'</a><a href="#">'+arr[i].title[5]+'</a><a href="#">'+arr[i].title[6]+'</a><a href="#">'+arr[i].title[7]+'</a><a href="#">'+arr[i].title[8]+'</a></div><div class = "l-b"><a href="#" style = "background: url('+arr[i].limgSrc[0]+') center"></a><a href="#" style = "background: url('+arr[i].limgSrc[1]+') center"></a><a href="#" style = "background: url('+arr[i].limgSrc[2]+')center"></a><a href="#" style = "background: url('+arr[i].limgSrc[3]+') center"></a></div></div><div class = "join-c"><a href="#" style = "background: url('+arr[i].cimgSrc+')"><div></div></a></div><div class="join-r"><div class = "box" style="position: relative;"><a href="#"><img src="'+arr[i].rimgSrc[0]+'"/></a><div class="border-bottom"></div><div class="border-right"></div><div class="border-top"></div><div class="border-left"></div></div><div class = "box" style="position: relative";><a href="#"><img src="'+arr[i].rimgSrc[1]+'"/></a><div class="border-bottom"></div><div class="border-right"></div><div class="border-top"></div><div class="border-left"></div></div><div class = "box" style="position: relative";><a href="#"><img src="'+arr[i].rimgSrc[2]+'"/></a><div class="border-bottom"></div><div class="border-right"></div><div class="border-top"></div><div class="border-left"></div></div><div class = "box" style="position: relative";><a href="#"><img src="'+arr[i].rimgSrc[3]+'"/></a><div class="border-bottom"></div><div class="border-right"></div><div class="border-top"></div><div class="border-left"></div></div></div></div>';
					}
					$(".join .join-con").html(html);
				}

			})

		})
	$(function(){
		$(".luxury-r .word .p1").mouseover(function(){
			$(".luxury-b1").css("display","block");
			$(".luxury-b2").css("display","none");
			$(".luxury-r .word .p2").css("border-bottom","3px solid #323232")
			$(".luxury-r .word .p2 span").css("display","none");
			$(".luxury-r .word .p1 span").css("display","block");
			$(".luxury-r .word .p2 span").css("display","none");
		})
		$(".luxury-r .word .p2").mouseover(function(){
			$(".luxury-b2").css("display","block");
			$(".luxury-b1").css("display","none");
			$(".luxury-r .word .p1").css("border-bottom","3px solid #323232");
			$(this).css("border-bottom","3px solid #e50048");
			$(".luxury-r .word .p2 span").css("display","block");
			$(".luxury-r .word .p1 span").css("display","none");
		})
		$(".luxury-r .word .p2").mouseout(function(){
			$(".luxury-r .word .p1 span").css("display","block"); 
			$(".luxury-r .word .p1").css("border-bottom","3px solid #e50048");
			$(".luxury-r .word .p2").css("border-bottom","3px solid #323232")
			$(".luxury-r .word .p2 span").css("display","none");
		})	
	})
		$(function(){
			$(".famous").mouseover(function(){
				$(".famous-con").css("visibility","visible");
				$(".famous").css("background-color","#e50048");
				$(".famous span").css("background-position","0px -128px")
			});

			$(".famous").mouseout(function(){
				$(".famous-con").css("visibility","hidden");
				$(".famous").css("background-color","#2a2a28");
				$(".famous span").css("background-position","0px -111px")
			});
			
			$(".gril").mouseover(function(){
				$(".girl-con").css("visibility","visible");
				$(".gril").css("background-color","#e50048");
				$(".gril span").css("background-position","-17px -128px")
			});
			$(".gril").mouseout(function(){
				$(".girl-con").css("visibility","hidden");
				$(".gril").css("background-color","#2a2a28");
				$(".gril span").css("background-position","-17px -111px")
			});
			$(".boy").mouseover(function(){
				$(".boy-con").css("visibility","visible");
				$(".boy").css("background-color","#e50048");
				$(".boy span").css("background-position","-34px -128px")
			});
			$(".boy").mouseout(function(){
				$(".boy-con").css("visibility","hidden");
				$(".boy").css("background-color","#2a2a28");
				$(".boy span").css("background-position","-34px -111px")
			});
			$(".foot").mouseover(function(){
				$(".foot-con").css("visibility","visible");
				$(".foot").css("background-color","#e50048");
				$(".foot span").css("background-position","-51px -128px")
			});
			$(".foot").mouseout(function(){
				$(".foot-con").css("visibility","hidden");
			$(".foot").css("background-color","#2a2a28");
				$(".foot span").css("background-position","-51px -111px")
			});
			$(".beauty").mouseover(function(){
				$(".beauty-con").css("visibility","visible");
				$(".beauty").css("background-color","#e50048");
				$(".beauty span").css("background-position","-68px -128px")
			});
			$(".beauty").mouseout(function(){
				$(".beauty-con").css("visibility","hidden");
				$(".beauty").css("background-color","#2a2a28");
				$(".beauty span").css("background-position","-68px -111px")
			});
			$(".bag").mouseover(function(){
				$(".bag-con").css("visibility","visible");
				$(".bag").css("background-color","#e50048");
				$(".bag span").css("background-position","-85px -128px")
			});
			$(".bag").mouseout(function(){
				$(".bag-con").css("visibility","hidden");
				$(".bag").css("background-color","#2a2a28");
				$(".bag span").css("background-position","-85px -111px")
			});
			$(".sport").mouseover(function(){
				$(".sport-con").css("visibility","visible");
				$(".sport").css("background-color","#e50048");
				$(".sport span").css("background-position","-102px -128px")
			});
			$(".sport").mouseout(function(){
				$(".sport-con").css("visibility","hidden");
				$(".sport").css("background-color","#2a2a28");
				$(".sport span").css("background-position","-102px -111px")
			});
			$(".acc").mouseover(function(){
				$(".acc-con").css("visibility","visible");
				$(".acc").css("background-color","#e50048");
				$(".acc span").css("background-position","-119px -128px")
			});
			$(".acc").mouseout(function(){
				$(".acc-con").css("visibility","hidden");
				$(".acc").css("background-color","#2a2a28");
				$(".acc span").css("background-position","-119px -111px")
			});
			$(".baby").mouseover(function(){
				$(".baby-con").css("visibility","visible");
				$(".baby").css("background-color","#e50048");
				$(".baby span").css("background-position","-136px -128px")
			});
			$(".baby").mouseout(function(){
				$(".baby-con").css("visibility","hidden");
				$(".baby").css("background-color","#2a2a28");
				$(".baby span").css("background-position","-136px -111px")
			});
			$(".in").mouseover(function(){
				$(".in-con").css("visibility","visible");
				$(".in").css("background-color","#e50048");
				$(".in span").css("background-position","-155px -128px")
			});
			$(".in").mouseout(function(){
				$(".in-con").css("visibility","hidden");
				$(".in").css("background-color","#2a2a28");
				$(".in span").css("background-position","-155px -111px")
			});
			$(".class-l").mouseover(function(){
				$("variety").css("display","block")
			})
			
		})

$(function(){
		$(".tab .p1").mouseover(function(){
			$(".dress1").css("display","block");
			$(".dress2").css("display","none");
			$(".dress3").css("display","none");
			$(".tab .p1").css("border-bottom","3px solid #e50048");
			$(".tab .p1 span").css("display","block")
			$(".tab .p1").mouseout(function(){
				$(".tab .p1").css("border-bottom","3px solid #333");
				$(".tab .p1 span").css("display","none")
			})
		})
		
		$(".tab .p2").mouseover(function(){
			$(".dress2").css("display","block");
			$(".dress1").css("display","none");
			$(".dress3").css("display","none");
			$(".tab .p2").css("border-bottom","3px solid #e50048");
			$(".tab .p2 span").css("display","block")
			$(".tab .p2").mouseout(function(){
				$(".tab .p2").css("border-bottom","3px solid #333");
				$(".tab .p2 span").css("display","none")
			})
		})	
		$(".tab .p3").mouseover(function(){
			$(".dress3").css("display","block");
			$(".dress1").css("display","none");
			$(".dress2").css("display","none");
			$(".tab .p3").css("border-bottom","3px solid #e50048");
			$(".tab .p3 span").css("display","block")
			$(".tab .p3").mouseout(function(){
				$(".tab .p3").css("border-bottom","3px solid #333");
				$(".tab .p3 span").css("display","none")
			})
		})
		$(".dress1").mouseover(function(){
			$(".tab .p1").css("border-bottom","3px solid #e50048");
			$(".tab .p1 span").css("display","block")
		})
		$(".dress1").mouseout(function(){
			$(".tab .p1").css("border-bottom","3px solid #333");
			$(".tab .p1 span").css("display","none")
		})
		
		
		$(".dress2").mouseover(function(){
			$(".tab .p2").css("border-bottom","3px solid #e50048");
			$(".tab .p2 span").css("display","block")
		})
		$(".dress2").mouseout(function(){
			$(".tab .p2").css("border-bottom","3px solid #333");
			$(".tab .p2 span").css("display","none")
		})
		$(".dress3").mouseover(function(){
			$(".tab .p3").css("border-bottom","3px solid #e50048");
			$(".tab .p3 span").css("display","block")
		})
		$(".dress3").mouseout(function(){
			$(".tab .p3").css("border-bottom","3px solid #333");
			$(".tab .p3 span").css("display","none")
		})

	})
