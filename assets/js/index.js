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