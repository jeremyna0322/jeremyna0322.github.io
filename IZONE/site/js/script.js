// JavaScript 

$(function(){
console.log('hello world')
//Devツールのコンソールにメッセージを表示

//商品情報のスタイルを変更（非表示に）
$('.iteminfo').css('display','none')



$('.item').click(function(){
console.log('商品がクリックされました。');

//クリックされた対象の属性値を取得し、変数（url）を格納
var url = $(this).attr('href');
console.log(url);

//<クリックされた商品の開閉チェック（閉じてたら処理を行う）
if($(url).css('display') == 'none'){

//全ての商品情報を閉じる
$('.iteminfo').slideUp(100);

$(url).slideDown(500);

}

//処理を中断する、アドレスバーのurl変更防止
return false;
//$('.iteminfo').slideToggle(300);



});

});