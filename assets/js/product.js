let usdbtn=document.getElementById('usdbtn')
let btnlang=document.getElementById('enbtn')
let btcontext=document.getElementById('btnprice')
let btlangcontext=document.getElementById('btnlang')
usdbtn.addEventListener('click',function(){
btcontext.classList.toggle('active')
})

$("#usdbtn").blur(function(){
        btcontext.classList.remove('active')
      });

btnlang.addEventListener('click',function(){
    btlangcontext.classList.toggle('active')
    });
    


  $('.user-side-bar').hide()

  $('#userfont').click(function(){
    $('.user-side-bar').slideToggle()
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
$('.filtering').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });
  let right2=document.querySelector('.section3 .slick-next');
     let left2=document.querySelector('.section3 .slick-prev');
     $("#rightBest").click(function(){
        right2.click()
        });
        $("#leftBest").click(function(){
          left2.click()
          });



          var num;

          $('.button-count:first-child').click(function(){
            num = parseInt($('input:text').val());
            if (num > 1) {
              $('input:text').val(num - 1);
            }
            if (num == 2) {
              $('.button-count:first-child').prop('disabled', true);
            }
            if (num == 10) {
              $('.button-count:last-child').prop('disabled', false);
            }
          });
          
          $('.button-count:last-child').click(function(){
            num = parseInt($('input:text').val());
            if (num < 10) {
              $('input:text').val(num + 1);
            }
            if (num > 0) {
              $('.button-count:first-child').prop('disabled', false);
            }
            if (num == 9) {
              $('.button-count:last-child').prop('disabled', true);
            }
          });
          
          
          
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
                   