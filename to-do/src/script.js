$(".but").click(function () {
  var inp1= $('.content').val()
  var newinp= $('<input>')
  newinp.val(inp1)
  newinp.addClass('inp')
  var btn1=$('<button>')
  btn1.addClass('delbut')
  btn1.text('delete')
  var newli=$('<li>')
  newli.append(newinp)
  newli.append(btn1)
  $(".u").append(newli)
  $(".content").val("")
})

$('.u').on('click',".delbut",function(){
    $(this).parent().hide()
});