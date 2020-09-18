$(".plus").click(function () {
  var num=parseInt($(".count").text())+1
  $(".count").text(num)
  if(num == 10){
    $('.plus').attr('disabled', true);
    $(".count").addClass('disable')
  }else{
    $(".count").removeClass('disable')
    $('.minus').attr('disabled', false)
  }
})

$(".minus").click(function () {
  var num=parseInt($(".count").text())-1
  $(".count").text(num)
  if(num == 0){
    $('.minus').attr('disabled', true);
    $('.count').addClass('disable')
  }else{
    $(".count").removeClass('disable')
    $('.plus').attr('disabled', false)
  }
})