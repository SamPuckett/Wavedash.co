function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i<arr.length; i++) {
        
      var merchName = arr[i].name.toString();
      var merchTitle = arr[i].title.toString();
      var merchPhoto = arr[i].photo.toString();
      var merchLink = arr[i].teespring.toString();
      var merchGame = arr[i].game.toString();
      var merchDescription = arr[i].description.toString();
      var merchPrice = arr[i].price.toString();
    //   var merchOrder = tempCo2[1] + ', ' + tempCo2[0];
      //console.log(tempCo3);

      if(merchGame == 'ultimate') {
        out += '<div class="col-lg-4 col-md-6 mb-4" data-aos="fade-in"> <div class="card h-100"> <a href="' + merchLink + '"><img class="card-img-top" src="' + merchPhoto + '" alt=""></a> <div class="card-body"> <h4 class="card-title"> <a href="' + merchLink + '">' + merchTitle + '</a> </h4> <h5>' + merchPrice + '</h5> <p class="card-text">' + merchDescription + '</p> </div> <div class="card-footer"> <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small> </div> </div></div>';
      }

    }
    document.getElementById("items").innerHTML = out;
  }

  myFunction(myArray);