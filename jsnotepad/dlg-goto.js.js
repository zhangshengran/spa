var model = document.querySelector('.notepad-dlg-goto');
var tan = document.querySelector('.test').children[0];
tan.onclick = function(){
    model.style.display = 'block';
    console.log('OK')
    

    var $dlg = $('.notepad-dlg-goto');
    $('.dialogbox').draggable({handle: $dlg.find('.titlebar')});
}

$('.btn-cancel').click(function(){
    model.style.display = 'none';
})
$('.close-btn').click(function(){
    model.style.display = 'none';
})