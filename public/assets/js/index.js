$.get("https://api.github.com/users/AndresF97")
    .then((res)=>{
      $("#headShot").attr("src",res.avatar_url)
      
    })

    $(document).ready(function(){
      $('.parallax').parallax();
    });
    $(document).ready(function(){
      $('.carousel').carousel();
    });
$(document).on("click","#githubBtn",function(event){
  event.preventDefault()
  $.get("https://api.github.com/users/"+$("#input_text").val().trim())
  .then((res)=>{
    console.log(res)
    const carousel = $(".carousel");
    const mainCarousel = $("<div>")
    mainCarousel.addClass("carousel-item")
    const carouselItem = $("<div>");
    carouselItem.addClass("carousel-item")
    carouselItem.html(`
    <div class="row valign-wrapper">
      <div class="col s2">
        <img src=${res.avatar_url} alt="" class="circle responsive-img">
      </div>
      <div class="col s10">
        <span class="black-text">
            ${res.bio}
        </span>
      </div>
    </div>
  `)
  carousel.append(carouselItem)
  })
})  