
$(function(){
	sc_car();
	shopCar();
	var first= $.cookie("daling") == "[]" ? true : false;
	var first1 = $.cookie("daling") == null? true : false;
		if(first||first1){
			$(".sbox").css("display","block");
			$(".bigbox").css("display","none");
		}else{
			$(".bigbox").css("display","block");
			$(".sbox").css("display","none");
		}
	
$(".gbox").delegate(".del","click",function(){
		del_car($(this).attr("name"));
		sc_car();
		shopCar();
	})
	$("body").delegate(".add" ,"click",function(){
		var cookieStr = $.cookie("daling");
		var arr = eval(cookieStr);
		for(var i in arr){
			if(arr[i].id == $(this).attr("name")){
				(arr[i].num)++;
			}
		}
		var str = JSON.stringify(arr);
		$.cookie("daling",str,{expirse:7});
		shopCar();
	})
	$(".gbox").delegate(".cel" ,"click",function(){
		var cookieStr = $.cookie("daling");
		var arr = eval(cookieStr);
		for(var i in arr){
				if(arr[i].id == $(this).attr("name")){
					if(arr[i].num == 1){
						return;
					}
		(arr[i].num)--;
		}
	}
	var str = JSON.stringify(arr);
	$.cookie("daling",str,{expirse:7});
	shopCar();
	})
})
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
					html = html + '<div class = "d-th"><div class = "th-q"></div><img src="'+arr[string[i].id].imgSrc+'"/ ><div style = "width:345px;height:62px;"><p style = "width:323px;height:32px;font-size: 12px;color:#666;margin:0;"><a href = "#" style = "font-size: 12px;color:#666">【自营】MAX MARA WEEKEND沙色纯棉袖口编织装饰女士短袖T恤, BOREL 01 SAND WOMEN TSHIRT XS</a></p><p style = "font-size: 12px;color:#666;width:328px;height:22px;margin-top:15px;">颜色：沙色尺码：xs</p></div><p style = "width:130px;font-size: 12px;color: #e8004f;font-weight:bold;display: flex;align-items: center;margin-right:30px;"">￥'+arr[string[i].id].txt[0]+'</p><div  class= "plus"><button class = "add" name = "'+string[i].id+'">+</button><input type="text" value = "'+string[i].num+'"/ ><button class = "cel" name = "'+string[i].id+'">-</button></div><p style = "width:130px;font-size:12px;color:#666;"" >'+arr[string[i].id].txt[0]*string[i].num+'</p><div class = "oprator"><div class = "pl"><p></p>移入收藏</div><div class = "mi del" name = "'+string[i].id+'"><p></p >删除商品</div></div></div>'

					sum += (arr[string[i].id].txt[0])*(string[i].num)
				}   
				$(".gbox").html(html);
				sum = "￥"+sum;
				$(".sum").html(sum);
			}
		})
	}
	function sc_car(){
		var cookieStr = $.cookie("daling");
		var arr = eval(cookieStr);
		var sum = 0; //用于累加的和
		for(var i in arr){
			sum += Number(arr[i].num)
		}

		$(".count").html(sum);
	}
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