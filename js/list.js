
$(function(){
		$(".pink").mouseover(function(){
		 $(this).css("box-shadow","0 0 5px #ddd").css("border","2px solid #e4004b").css("border-bottom","none")
	});
	$(".pink").mouseout(function(){
		 $(this).css("box-shadow","none").css("border","none");
	});
	$(".class-l").mouseover(function(){
			$(".big").css("display","block");
			$(this).css("z-index","9999999")
		});
	$(".class-l").mouseout(function(){
		$(".big").css("display","none")
	});
	/*=========================================ajax加载数据=================================*/
	$.ajax({
		url:"data/list.json",
		type:"get",
		success:function(res){
			var arr = res;
			var html = "";
			for(var i= 0;i<22;i++){
			html+='<div class = "pink"><span class = "bg" style = "background:url('+arr[i].bg+') top left no-repeat">满减</span><img src="'+arr[i].imgSrc+'" id = "'+arr[i].name+'"/><p><span style = "color:#e4004b">￥'+arr[i].txt[0]+'</span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span>￥'+arr[i].txt[1]+'</span></p><div class = "p1"><span style = "background:url('+arr[i].p1[0]+') left bottom no-repeat" ></span><p>'+arr[i].p1[1]+'</p></div><div class = "hover"><p class = "p2" style = "color:#e4004b">'+arr[i].hover[0]+'</p><p class = "p2">'+arr[i].hover[1]+'</p><p class = "p3">'+arr[i].hover[2]+'</p></div></div>';
			}
			$(".list .mini").html(html);
		}
	})
	/*=========================================点击加载购物车===============================*/
	$(".mini").delegate(".pink","click",function(e){
		singleton();
		var first = $.cookie("daling") == null ? true : false;
		if(first){
			$.cookie("daling","[{id:"+$(this).find("img").attr("id")+",num:1}]",{expirse:7});
		}else{
			var cookieStr = $.cookie("daling");
			var arr = eval(cookieStr);
			var istrue = false
			for(var i in arr){
				if(arr[i].id == $(this).find("img").attr("id")){
					(arr[i].num)++;
					istrue = true;
				}
			}

			if(!istrue){
				var obj = {id:$(this).find("img").attr("id"),num:1}
				arr.push(obj)
			}

			var str = JSON.stringify(arr);
			$.cookie("daling",str,{expirse:7})
		}
		sc_car();
		shopCar();
	})

	sc_car();
	$(".shopping").click(function(){
		window.open(shop.html);
	})
	$(".shopping").mouseover(function(){	
		$(".del").click(function(){
			del_car($(this).attr("name"));
			sc_car();
			shopCar();
		})
		var first = $.cookie("daling") == null ? true : false;
		var first1 = $.cookie("daling") == "[]" ? true : false;
		if(first||first1){
			$(".none2").css("display","block");
			$(".none1").css("display","none");
			sc_car();
		}else{
			$(".none1").css("display","block");
			$(".none2").css("display","none");
		}
	})
		$(".shopping").mouseout(function(){
			$(".none2").css("display","none");
			$(".none1").css("display","none");
		})

	})
/*===============================删除购物车和cookie里面的数据===============================*/
	function del_car(id){
		var cookieStr = $.cookie("daling");
		var arr = eval(cookieStr);
		for(var i in arr){
			if(arr[i].id == id){
				arr.splice(i,1);
			}
		}
		var str = JSON.stringify(arr);
		$.cookie("daling",str,{expirse:7})
	}
/*====================================ajax加载购物车详情=====================================*/
	function shopCar(){
		$.ajax({
		type:"GET",
		url:"data/list.json",
		success:function(data){
			var arr = data;
			var sum = 0;
			var string = eval($.cookie("daling"));
				var html ='';
				for(var i = 0; i < string.length; i++){
					html = html + '<div class = "cl"><div class = "pic"><img src="'+arr[string[i].id].imgSrc+'"/ ></div><div class = "A">'+arr[string[i].id].p1[1]+'</div><div style ="font-size:12px;color:#666;margin-left: 30px;"><p style = "margin:0"><span style = "color:#e50048;font-weight:bold;">'+arr[string[i].id].txt[0]+'</span>x<span>'+string[i].num+'</span></p><p style = "margin:0" class = "del" name = "'+string[i].id+'">删除</p></div></div>'

					sum += (arr[string[i].id].txt[0])*(string[i].num)
				}
				$(".add").html(html);
				sum = "￥"+sum;
				$(".sum").html(sum);
			}
		})
	}
	/*=====================================加载购物车里的数量===============================*/
	function sc_car(){
		var cookieStr = $.cookie("daling");
		var arr = eval(cookieStr);
		var sum = 0; //用于累加的和
		for(var i in arr){
			sum += Number(arr[i].num)
		}

		$(".count").html(sum);
	}
	/*=============================================单例=======================================*/
	var singleton = (function(){
		var oDiv = null; 
		
		var createDiv = function(){
			if(!oDiv){
				oDiv = document.createElement("div");
				oDiv.id = "content";
				
				var oP = document.createElement("p");
				oP.innerHTML = "该商品已加入购物车";
				oP.id = "zz";

				var okSpan = document.createElement("button");
				okSpan.innerHTML = "继续购物";
				okSpan.id = "ok";


				oDiv.appendChild(oP);
				oDiv.appendChild(okSpan);
				

				document.body.appendChild(oDiv);
				$("#ok").click(function(){
					$("#content").remove();
					oDiv = null;
				});
			}
		}
		return createDiv;
	})();