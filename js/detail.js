$(function(){
			$.ajax({
				url:"data/list1.json",
				type:"get",
				success:function(res){
					var arr = res;
					var html = "";
					for(var i= 0;i<16;i++){
					html+='<div class = "red"><img src="'+arr[i].imgSrc+'"/><div class = "p2"><a href="#">'+arr[i].p1+'</a></div><div class = "p1"><span style = "color:#e4004b">'+arr[i].txt[0]+'</span><span>'+arr[i].txt[0]+'</span></div></div>';
					}
					$(".rate-r").html(html);
				}

			})
			$(".detA").mouseover(function(){
			$(".mark").css("display","block");
			$(".b-box").css("display","block");
		})
		$(".detA").mouseout(function(){
			$(".mark").css("display","none");
			$(".b-box").css("display","none");
		})
		$(".detA").mousemove(function(e){
		var left = e.pageX - $(".mark").width()/2 -200;
		var top = e.pageY- $(".mark").height()/2 -300;
		if(left<=0){
			left = 0;
		}else{
			if (left > $(".detA").width()- $(".mark").width()) {
				left = $(".detA").width()- $(".mark").width();
			}
		}
		if(top<=0){
			top = 0;
		}else{
			if (top > $(".detA").height()- $(".mark").height()) {
				top = $(".detA").height()- $(".mark").height();
			}
		}
		$(".mark").css("left",left).css("top",top);
		$(".rel-box").css("left",-3*left).css("top",-3*top);
	})
	$(function(){
	$(".car-r").click(function(e){
		var first = $.cookie("daling") == null ? true : false;
		if(first){
			$.cookie("daling","[{id:"+$(this).attr("id")+",num:1}]",{expirse:7});
		}else{
			var cookieStr = $.cookie("daling");
			var arr = eval(cookieStr);
			var istrue = false
			for(var i in arr){
				if(arr[i].id == $(this).attr("id")){
					(arr[i].num)++;
					istrue = true;
				}
			}
			if(!istrue){
				var obj = {id:$(this).attr("id"),num:1}
				arr.push(obj)
			}
			var str = JSON.stringify(arr);
			$.cookie("daling",str,{expirse:7})
		}
		sc_car();
		shopCar();
	})
	sc_car();
	shopCar();
	
	

$(".shopping").mouseover(
	function(){	
		$(".del").click(function(){
		alert(2)
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
function sc_car(){
		var cookieStr = $.cookie("daling");
		var arr = eval(cookieStr);
		var sum = 0; //用于累加的和
		for(var i in arr){
			sum += Number(arr[i].num)
		}

		$(".count").html(sum);
	}

		})
