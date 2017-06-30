	$(function(){
		$(".passport").click(function(){
			$(".passport").css("border-bottom","3px solid #e5004f");
			$(".account").css("border-bottom","none");
			$(".app").css("border-bottom","none")	
			$(".log1").css("display","block");
			$(".log2").css("display","none");
			$("#tele").attr("placeholder","请输入银泰护照号（手机号）");
		})
		$(".account").click(function(){
			$(".account").css("border-bottom","3px solid #e5004f");
			$("#tele").attr("placeholder","请输入手机/邮箱");
			$(".passport").css("border-bottom","none");
			$(".app").css("border-bottom","none")
			$(".log2").css("display","none");
			$(".log1").css("display","block");
		})
		$(".app").click(function(){
			$(".app").css("border-bottom","3px solid #e5004f")
			$(".passport").css("border-bottom","none")
			$(".account").css("border-bottom","none");
			$(".log1").css("display","none");
			$(".log2").css("display","block");
		})
		$(".codeId").hover(function(){
				$(".codeId").css("background-position", "80px center");
				$(".codeImg").fadeTo(1000, 1);
			}, function(){
				$(".codeId").css("background-position", " center");

				$(".codeImg").fadeTo(2000, 0);
			})
		$("button").click(function(){
			location.href("sign.html");
		})


	})