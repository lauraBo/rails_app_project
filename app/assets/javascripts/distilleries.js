
document.addEventListener("turbolinks:load", function() {

$(document).ready(function(){

    $("a.load_bourbons").on("click", function(e) {


    $.get(this.href).success(function(json){

  //clear the ol html in case
    var $ol = $("div.bourbons ol");
    $ol.innerHTML = ""; //emptied

    json.forEach(function(bourbon){
        $ol.append("<li>" + bourbon.name + "</li>");
      })
    })
    e.preventDefault();
    })
  })
})
