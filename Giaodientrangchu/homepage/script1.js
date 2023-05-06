// var currentPosition = 0;
// var maxPosition = 10;
// updateContent();
// document.getElementById("previous").addEventListener("click",function(){
//     if(currentPosition > 0){
//         currentPosition--;
//         updateContent();
//     }
// });
// document.getElementById("next").addEventListener("click",function(){
//     if(currentPosition < maxPosition){
//         currentPosition++;
//         updateContent();
//     }
// });

// function updateContent(){
//     var content = document.getElementById("img");
//     content.innerHTML = currentPosition;
// }

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n);{
//     showDivs(slideIndex += n);
// }

// function showDivs(n){
//     var i;
//     var x = document.getElementById("img");
//     if(n > x.length){
//         slideIndex = 1;
//     }
//     if(n < 1){
//         slideIndex = x.length;
//     }
//     for(i = 0; i < x.length; i++){
//         x[i].style.display = "none";
//     }
//     x[slideIndex - 1].style.display = "block";
// }

// $(document).ready(function() {

//     $('.owl-wrapper').slick({
//         // dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 8,
//         slidesToScroll: 1,
//         owlwrapper: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 6,
//                 slidesToScroll: 1,
//                 // centerMode: true,

//             }

//         }, {
//             breakpoint: 800,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 2,
//                 dots: true,
//                 infinite: true,

//             }


//         }, {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 dots: true,
//                 infinite: true,
                
//             }
//         }, {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 dots: true,
//                 infinite: true,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//             }
//         }]
//     });


// });

// $(document).ready(function(){
//     var owl = $('.owl-wrapper');
//     owl.owlCarousel({
//         items:10,
//         itemsDesktop:[1000, 4],
//         itemsTablet:[900, 4],
//         itemsMobile:[600,2],
//     })
// });

// $(".next").click(function(){
//     owl.trigger('owl.next');
// })
// $(".prev").click(function(){
//     owl.trigger('owl.prev');
// });

// var slides = document.querySelectorAll('#img');
// var currentSlide = 0;

// function showSlide(n){
//     slides[currentSlide].classList.remove('active');
//     slides[n].classList.add('active');
//     currentSlide = n;
// }

// function nextSlide(){
//     var next = currentSlide + 1;
//     if (next >= slides.length){
//         next = 0;
//     }
//     showSlide(next);
// }

// function prevSlide(){
//     var prev = currentSlide - 1;
//     if(prev < 0){
//         prev = slides.length - 1;
//     }
//     showSlide(prev);
// }

// document.querySelector('#next').addEventListener('click',nextSlide);
// document.querySelector('#prev').addEventListener('click',prevSlide);

// showSlide(0);


