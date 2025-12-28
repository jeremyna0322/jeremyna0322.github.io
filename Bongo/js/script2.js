// JavaScript Document

//HTMLが読み込み終わったら実行
$(function(){

	var speed = 1500;
	var easing = 'swing';


	console.log('HTMLの読み込み完了！');

	// SPナビがクリックされた時の処理
	$('a[href^="#"]').click(function(){

//		console.log('SPナビがクリックされました');

		//	属性（href）の値を取得して変数に格納
		var link = $(this).attr('href');

		// リンク先が#だったら処理を行う
		// {}を指定しなかった時は次の処理だけ行う。
		if( link == '#' )
			link = $('html,body');

		// 変数と文字列は + でくっつけることができる。
		console.log('SPナビ：' + link);

		// リンク先の位置（Y座標）を取得して変数に格納
		var positionY = $(link).offset().top;
		console.log('リンク先のY座標：' + positionY);

		$('html,body').animate({scrollTop:positionY}, speed, easing);

	});

});
