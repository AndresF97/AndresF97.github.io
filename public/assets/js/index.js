$.get("https://api.github.com/users/AndresF97")
    .then((res)=>{
      console.log(res)
      console.log(res.name)
      console.log(res.avatar_url)
      $("#headShot").attr("src",res.avatar_url)
      
    })
$.get("https://api.github.com/repos/AndresF97/The_WatchList")
.then((res)=>{
  console.log(res)
  //setting the first row to hold the first project
  const rowOne = $("<div>")
  rowOne.addClass("row")
  //this colomn will hold the name of the project and the a gif of the example
  const colOne = $("<div>")
  colOne.addClass("col m5")
  colOne.html($(`<h4> ${res.name} </h4>`))
  const Image =$("<img>")
  Image.attr("src","./assets/img/working.gif")
  colOne.append(Image)
  //this col will get the description from the API 
  const colTwo  = $("<div>")
  colTwo.addClass("col m5 descript")
  //coltTwo.attr("id","descript")

  colTwo.html(`<h5>Description:</h5>
  <p> ${res.description}</p>`)
  //appending information to the row 
  rowOne.append(colOne)
  rowOne.append(colTwo)
  $(".projectBoxes").prepend(rowOne)
  


})
$.get("https://api.github.com/repos/AndresF97/Random-Password-Generator")
.then((res)=>{
  console.log(res)
  //setting the first row to hold the first project
  const rowOne = $("<div>")
  rowOne.addClass("row")
  //this colomn will hold the name of the project and the a gif of the example
  const colOne = $("<div>")
  colOne.addClass("col m5")
  colOne.html($(`<h4> ${res.name} </h4>`))
  const Image =$("<img>")
  Image.attr("src","./assets/img/working.gif")
  colOne.append(Image)
  //this col will get the description from the API 
  const colTwo  = $("<div>")
  colTwo.addClass("col m5 descript")
  //coltTwo.attr("id","descript")

  colTwo.html(`<h5>Description:</h5>
  <p> ${res.description}</p>`)
  //appending information to the row 
  rowOne.append(colOne)
  rowOne.append(colTwo)
  $(".projectBoxes").prepend(rowOne)
})
$.get("https://api.github.com/repos/AndresF97/google-book-search")
.then((res)=>{
  console.log(res)
  //setting the first row to hold the first project
  const rowOne = $("<div>")
  rowOne.addClass("row")
  //this colomn will hold the name of the project and the a gif of the example
  const colOne = $("<div>")
  colOne.addClass("col m5")
  colOne.html($(`<h4> ${res.name} </h4>`))
  const Image =$("<img>")
  Image.attr("src","./assets/img/working.gif")
  colOne.append(Image)
  //this col will get the description from the API 
  const colTwo  = $("<div>")
  colTwo.addClass("col m5 descript")
  //coltTwo.attr("id","descript")

  colTwo.html(`<h5>Description:</h5>
  <p> ${res.description}</p>`)
  //appending information to the row 
  rowOne.append(colOne)
  rowOne.append(colTwo)
  $(".projectBoxes").prepend(rowOne)
})
$.get("https://api.github.com/repos/AndresF97/monopoly_tracker")
.then((res)=>{
  console.log(res)
  //setting the first row to hold the first project
  const rowOne = $("<div>")
  rowOne.addClass("row")
  //this colomn will hold the name of the project and the a gif of the example
  const colOne = $("<div>")
  colOne.addClass("col m5")
  colOne.html($(`<h4> ${res.name} </h4>`))
  const Image =$("<img>")
  Image.attr("src","./assets/img/working.gif")
  colOne.append(Image)
  //this col will get the description from the API 
  const colTwo  = $("<div>")
  colTwo.addClass("col m5 descript")
  //coltTwo.attr("id","descript")

  colTwo.html(`<h5>Description:</h5>
  <p> ${res.description}</p>`)
  //appending information to the row 
  rowOne.append(colOne)
  rowOne.append(colTwo)
  $(".projectBoxes").prepend(rowOne)
})

    $(document).ready(function(){
      $('.parallax').parallax();
    });
       