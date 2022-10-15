


$('.suncare').hide()
let plusicon=document.getElementById('plus1')

$('.suncareclick').click(function(){
    if(plusicon.className=='fa-solid fa-plus'){
        plusicon.className='fa-solid fa-minus'
    }
    else{
        plusicon.className='fa-solid fa-plus'

    }
  $('.suncare').slideToggle()
})
$('.unisex').hide()
let plusicon2=document.getElementById('plus2')

$('.unisexclick').click(function(){
    if(plusicon2.className=='fa-solid fa-plus'){
        plusicon2.className='fa-solid fa-minus'
    }
    else{
        plusicon2.className='fa-solid fa-plus'

    }
  $('.unisex').slideToggle()
})
let plusicon3=document.getElementById('plus3')
$('.colormenu').hide()
$('.coloclick').click(function(){
    if(plusicon3.className=='fa-solid fa-plus'){
        plusicon3.className='fa-solid fa-minus'
    }
    else{
        plusicon3.className='fa-solid fa-plus'

    }
  $('.colormenu').slideToggle()
})
let plusicon4=document.getElementById('plus4')
$('.sizemenu').hide()
$('.sizeclick').click(function(){
    if(plusicon4.className=='fa-solid fa-plus'){
        plusicon4.className='fa-solid fa-minus'
    }
    else{
        plusicon4.className='fa-solid fa-plus'

    }
  $('.sizemenu').slideToggle()
})
let plusicon6=document.getElementById('plus6')
$('.container2').hide()
$('.categoryboxpriceclick').click(function(){
    if(plusicon6.className=='fa-solid fa-plus'){
        plusicon6.className='fa-solid fa-minus'
    }
    else{
        plusicon6.className='fa-solid fa-plus'

    }
  $('.container2').slideToggle()
})

let usdbtn=document.getElementById('usdbtn')
let btnlang=document.getElementById('enbtn')
let btcontext=document.getElementById('btnprice')
let btlangcontext=document.getElementById('btnlang')
usdbtn.addEventListener('click',function(){
btcontext.classList.toggle('active')
})

btnlang.addEventListener('click',function(){
    btlangcontext.classList.toggle('active')
    });
$("#usdbtn").blur(function(){
        btcontext.classList.remove('active')
      });
      $("#enbtn").blur(function(){
        btlangcontext.classList.remove('active')
      });

      $('.user-side-bar').hide()

      $('#userfont').click(function(){
        $('.user-side-bar').slideToggle()
      })
      $('#shop').hide(500)
      $('#shopa').mouseover(function(){
        $('#shop').show()
        $('#shop').mouseover(function(){
          $('#shop').show()
        })
        
        $('#shop').mouseleave(function(){
          $('#shop').hide(500)
        })
        })
        $('#home').hide()
        $('#homeborder').mouseover(function(){
          $('#home').show()
        })
        
        $('#home').mouseleave(function(){
          $('#home').hide(500)
        })
        $('#home').mouseover(function(){
          $('#home').show()
        })        