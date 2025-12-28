$(function(){
	console.log('script.jsが読みこまれました。');

	// グローバルヘッダーのY座標と高さを取得して変数に格納
	var ghTop = $('#gheader').offset().top,
				ghHeight = $('#gheader').height();

	// スクロールされた時の処理
	$(window).scroll(function(){

		// スクロールされた距離をログに書き出す（+で文字列と変数などを連携できる）
		console.log( 'スクロール距離：' + $(window).scrollTop() );

		// スクロール距離を変数に格納
		var scrollDis = $(window).scrollTop();


		// #gheaderのY座標をスクロール距離が超えたら
		if( ghTop < scrollDis ){
			// #gheaderを固定配置にする
			$('#gheader').css({'position':'fixed', 'top':'0' });
			$('#topimage').css('margin-top', ghHeight);
		}else{
			$('#gheader').css({'position':'relative', 'top':'auto'});
			$('#topimage').css('margin-top', 0);
		}

	});
});
