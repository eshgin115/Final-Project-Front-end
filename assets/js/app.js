


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


 $("#enbtn").blur(function(){
    btlangcontext.classList.remove('active')
      });
      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
       
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
       
        function updateClock() {
          var t = getTimeRemaining(endtime);
       
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
       
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
       
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
       
      var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
      initializeClock('countdown', deadline);
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
      $('.filtering5').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
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
      var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
      initializeClock('countdown', deadline);
      var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
      initializeClock('countdown2', deadline);
      $('.categories').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        
        ]
      });


      // $('.filtering').slick({
      //   slidesToShow: 4,
      //   slidesToScroll: 4,
      //   autoplay: true,
      //  autoplaySpeed: 2000,
       
      // });
      
      var filtered = false;
      
      $('.js-filter').on('click', function(){
        if (filtered === false) {
          $('.filtering').slick('slickFilter',':even');
          $(this).text('Unfilter Slides');
          filtered = true;
        } else {
          $('.filtering').slick('slickUnfilter');
          $(this).text('Filter Slides');
          filtered = false;
        }
      });








     let right=document.querySelector('.slick-next');
     let left=document.querySelector('.slick-prev');
     let right1=document.querySelector('.categories .slick-next');
     let left1=document.querySelector('.categories .slick-prev');
     let right2=document.querySelector('.section3 .slick-next');
     let left2=document.querySelector('.section3 .slick-prev');
     let right3=document.querySelector('#birinci .slick-next');
     let left3=document.querySelector('#birinci .slick-prev');
     let right4=document.querySelector('#ikinci .slick-next');
     let left4=document.querySelector('#ikinci .slick-prev');
     let right6=document.querySelector('.section6 .slick-next');
     let left6=document.querySelector('.section6 .slick-prev');
     let right7=document.querySelector('.section7 .slick-next');
     let left7=document.querySelector('.section7 .slick-prev');
    $("#rightbuttonforslider").click(function(){
      right.click()
      });
      $("#leftbuttonforslider").click(function(){
       left.click()
        });
        
        $("#rightbuttoncategories").click(function(){
          right1.click()
          });
          $("#leftbuttoncategories").click(function(){
            left1.click()
            });
            
            $("#rightBest").click(function(){
              right2.click()
              });
              $("#leftBest").click(function(){
                left2.click()
                });
                $("#rightbuttonforslider1").click(function(){
                  right3.click()
                  right4.click()
                  });
                  $("#leftbuttonforslider1").click(function(){
                    left3.click()
                    left4.click()
                    });
                    $("#rightbuttonforslider6").click(function(){
                      right6.click()
                      });
                      $("#leftbuttonforslider6").click(function(){
                       left6.click()
                        });
                        $("#rightbuttonforslider7").click(function(){
                          right7.click()
                          });
                          $("#leftbuttonforslider7").click(function(){
                           left7.click()
                            });



                


  let jostikphoto =document.getElementById('jostik');
  jostikphoto.addEventListener('mouseover',function(){
    jostikphoto.src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png'
  })
  jostikphoto.addEventListener('mouseleave',function(){
    jostikphoto.src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png'
  })
  let women =document.getElementById('women');
  women.addEventListener('mouseover',function(){
    women.src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-1.png'
  })
  women.addEventListener('mouseleave',function(){
    women.src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-2.png'

  })
  let altjostik =document.getElementById('altjostik');
  altjostik.addEventListener('mouseover',function(){
    altjostik.src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png'
  })
  altjostik.addEventListener('mouseleave',function(){
    altjostik.src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png'
  })
  
  


  let whitejostik =document.getElementById('whitejostik');
  whitejostik.addEventListener('mouseover',function(){
    whitejostik.src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png'
  })
  whitejostik.addEventListener('mouseleave',function(){
    whitejostik.src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png'
  })
       
 
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
  let buttonss=document.querySelectorAll('.add-btn')

if(localStorage.getItem('basket')===null)
{
localStorage.setItem('basket',JSON.stringify([]))
}
for(let duyme of buttonss){
    duyme.onclick=function(e){
        e.preventDefault()
        let PrId=e.target.parentElement.parentElement.id

        let PrName=e.target.parentElement.parentElement.children[1].children[0].children[0].innerHTML
        let PrPrice=e.target.parentElement.parentElement.children[2].children[1].innerHTML
        let PrImage=e.target.parentElement.parentElement.children[0].children[0].children[0].src

        let basket=JSON.parse(localStorage.getItem('basket'));
      let exist=basket.find(pr=>pr.Id===PrId)
     if(exist==undefined){
        basket.push({
            Id: PrId,
            Name: PrName,
            Price: PrPrice,
            Image: PrImage,
            Count: 1
          })
     }
     else{
        exist.Count +=1
     }
      localStorage.setItem('basket',JSON.stringify(basket));
      CountProduct();
      document.getElementById('toaster').style.opacity='1'
      setTimeout(() => {
        document.getElementById('toaster').style.opacity='0'
      }, 1000);
    }
   
}
function CountProduct(){
    let basket=JSON.parse(localStorage.getItem('basket'));
    document.getElementById('basketcount').innerHTML=basket.length;
}
CountProduct();


  AOS.init();
