$(document).ready(function(){
    $('.sidenav').sidenav();
    $.get("https://api.github.com/users/AndresF97")
    .then((res)=>{
      console.log(res.name)
      console.log(res.avatar_url)
      $(".circle").attr("src",res.avatar_url)
    })
  });
       