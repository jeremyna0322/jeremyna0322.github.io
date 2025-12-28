$(function(){

	var speed = 1500;
	var easing = 'swing';


	console.log('HTMLの読み込み完了！');

	$('a[href^="#"]').click(function(){

		var link = $(this).attr('href');

		if( link == '#' )
			link = $('html,body');

		console.log('SPナビ：' + link);

		var positionY = $(link).offset().top;
		console.log('リンク先のY座標：' + positionY);

		$('html,body').animate({scrollTop:positionY}, speed, easing);

	});

});
