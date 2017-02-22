$(function(){
//		address
		$(".bj").click(function(){
				$(".mask").show();
				$(".readd").show();
		});
		$(".del").click(function(){
				$(".delmask").fadeIn();
				$(".dqx").click(function(){
					$(".delmask").fadeOut();
				});
				var bb= $(this).parents(".addlist")
				$(".dqr").click(function(){
					$(".delmask").fadeOut();
					bb.remove();
				});
		});
		$(".bc input").click(function(){
				var aa=$(".bc input").val();
				if(aa=="保存"){
						$(".readd").hide();
						$(".mask").hide();
				}else{
						$(".readd").hide();
						$(".mask").hide();
				}
		})
})

