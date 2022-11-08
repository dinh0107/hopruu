﻿$(document).ready(function () {
    $.toctoc({
        target: '.content',
        headText: "Mục lục bài viết",
        headLinkText: ['Hiện', 'Ẩn'],
        headBackgroundColor: '#edf6ff',
        borderColor: '#edf6ff',
        bodyBackgroundColor: '#edf6ff',
        headTextColor: '#000',
        smooth: true,
        opened: false,
    });
    $('.banner').slick({
        arrows: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2000,
        prevArrow: '<ion-icon name="chevron-back-outline"></ion-icon>',
        nextArrow: '<ion-icon class="nextbtn" name="chevron-forward-outline"></ion-icon>'
    });
    $('.sale-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        arrows:true,
        autoplaySpeed: 2000,
        prevArrow: '<ion-icon name="chevron-back-outline"></ion-icon>',
        nextArrow: '<ion-icon class="nextbtn" name="chevron-forward-outline"></ion-icon>'
      });
      
      $(document).ready(function(){
    
        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.scrollToTopback-to-top').fadeOut();
            }
        });
        
        //Click event to scroll to top
        $('.back-to-top').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });

          $(".order_btn > a").click(function (event) {
              event.preventDefault()
          })
    });
    $(function() {
        var zoom = function(elm) {
          elm
            .on('mouseover', function() {
              $(this).children('.img').css({'transform': 'scale(2)'});
            })
            .on('mouseout', function() {
              $(this).children('.img').css({'transform': 'scale(1)'});
            })
            .on('mousemove', function(e) {
              $(this).children('.img').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
            })
        }
      
        $('.item').each(function() {
          $(this)
            .append('<div class="img"></div>')
            .children('.img').css({'background-image': 'url('+ $(this).data('image') +')'});
          zoom($(this));
        })
      })
})
    const listMenu = document.querySelector('.menu-nav')
    const menu = document.querySelectorAll('.icon-item')
    const itemMenu = document.querySelector('.menu-item')
    function changeMenu() {
        for( i = 0; i < menu.length; i++ ) {
        menu[i].classList.toggle('active')
        }
    }

  function showMenu() {
    itemMenu.classList.toggle('active');
  }

  listMenu.addEventListener('click' , showMenu)
  listMenu.addEventListener('click' , changeMenu)
const orderBtn = document.querySelector('.order_btn')
const ShowOrder = document.querySelector('.order')
const closeOrder = document.querySelector('.btn-close')
function showForm() {
    ShowOrder.classList.add("active");
}
function closeForm() {
    ShowOrder.classList.remove("active");
}
orderBtn.addEventListener('click', showForm)