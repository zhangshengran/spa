
    var $width = $('#rectangle-width'),
        $height = $('#rectangle-height'),
        $calc = $('#rectangle-calc'),
        perimeter = document.querySelector('#rectangle-perimeter'),
        area = document.querySelector('#rectangle-area'),
        blnValid = false;

        $calc.click(function() {
            if(!$width.val()){
                console.log($width)
                alert('宽度不能为空')
                
            }else if(Number.isNaN(Number($width.val()))){
                alert('请输入数字')
            }else if(!$height.val()){
                alert('高度不能为空')
            }else if(Number.isNaN(Number($height.val()))){
                alert('请输入数字')
            }else if($width.val()<0 || $height.val()<0){
                alert('请输入大于0的数')
            }else{
                perimeter.value=$height.val()*2+$width.val()*2;
                area.value=$height.val()*$width.val();
        }
    })


 