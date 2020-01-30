 $(function(){
 	//xu ly cho nut .nut click vao
 	$(".nut").click(function(event) {
 		
 		//xu ly class cho noi dung
 		$(".noidung").addClass('noidunghienra');

 		//xu ly class cho .momo
 		$(".momo").addClass('momodira');
 	});

 	//Jquery cho nut close
 	$(".nutdong, .momo").click(function(event) {
 		
 		//xu ly class cho noi dung
 		$(".noidung").removeClass('noidunghienra');

 		//xu ly class cho .momo
 		$(".momo").removeClass('momodira');
 	});
})  
 