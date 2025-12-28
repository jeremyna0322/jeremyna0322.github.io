
$(function(){
console.log('hello world')


$('.iteminfo').css('display','none')

$('.item').click(function(){
console.log('商品がクリックされました。');

var url = $(this).attr('href');
console.log(url);

if($(url).css('display') == 'none'){

$('.iteminfo').slideUp(100);

$(url).slideDown(500);

}

return false;

});

});
