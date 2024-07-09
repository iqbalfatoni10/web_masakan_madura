$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $('nav').toggleClass('active')
    })

    // Filter Buttons
    $('.filter-buttons [data-filter="all"]').click(function(){
      $('div #drinks').fadeIn('fast', 'linear')
      $('div #foods').fadeIn('fast', 'linear')
      $('div #desserts').fadeIn('fast', 'linear')
    })

    $('.filter-buttons [data-filter="foods"]').click(function(){
      $('div #foods').fadeIn('fast', 'linear')
      $('div #drinks').fadeOut('fast', 'linear')
      $('div #desserts').fadeOut('fast', 'linear')
    })

    $('.filter-buttons [data-filter="drinks"]').click(function(){
      $('div #foods').fadeOut('fast', 'linear')
      $('div #drinks').fadeIn('fast', 'linear')
      $('div #desserts').fadeOut('fast', 'linear')
    })

    $('.filter-buttons [data-filter="desserts"]').click(function(){
      $('div #foods').fadeOut('fast', 'linear')
      $('div #drinks').fadeOut('fast', 'linear')
      $('div #desserts').fadeIn('fast', 'linear')
    })
})

// Animasi Typing Pada Slogan di Home
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#typing", {
      strings: ["Nikmati Ragam Kuliner Tradisional dengan Cita Rasa yang Memikat di Setiap Suapan!"],
      speed: 100
    }).go();
});

// Pop Up Detail Masakan
let detailMakanan = document.querySelector('.detail-makanan')
let preview = document.querySelectorAll('.preview')

document.querySelectorAll('.menu .images-card').forEach(detail =>{
  detail.onclick = () =>{
    detailMakanan.style.display = 'flex'
    let nama = detail.getAttribute('data-name')
    preview.forEach(preview =>{
      let target =  preview.getAttribute('data-target')
      if(nama == target){
        preview.classList.add(`active`)
      }
    })
  }
})

// Close Pop Up Detail Masakan
preview.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove(`active`)
    detailMakanan.style.display = 'none'
  }
})
