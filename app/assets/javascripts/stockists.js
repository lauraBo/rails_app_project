
  function Stockist(attributes){
this.name = attributes.name;
this.id = attributes.id;
this.address = attributes.address;
}

$(function(){
Stockist.templateSource = $('#stockist-template').html()
Stockist.template = Handlebars.compile(Stockist.templateSource);
})


Stockist.prototype.renderLI = function(){
return Stockist.template(this)
}

$(document).ready(function(){
$('form#new_stockist').on("submit", function(e){
  alert("You clicked SUBMIT!!")
  e.preventDefault()
  var $form = $(this);
  var action = $form.attr('action');
  var params = $form.serialize();

  console.log("params: ", params);
  $.ajax({
    type: 'POST',
    url: action,
    data: params,
    dataType: 'json'
  })

  .success(function (json) {

    console.log('json: ', json);
    var newstockist = new Stockist(json);
    var stockistLi = newstockist.renderLI()

$('ul.new-stockist').append(stockistLi)
})
.error(function(response){
console.log('you broke it?', response)
})

})
})




$("button").on("click", function() {
  const username = $("#user-input").val();

  $.ajax({
    url: `https://api.github.com/users/${username}`,
    type: "GET"
  }).done(data => userSuccess(data));

  fetch(`https://api.github.com/users/${username}/followers`)
    .then(response => response.json())
    .then(addFollowersToDom);
});

function userSuccess(data) {
  $("#name")
    .empty()
    .append("Name: " + data.name);
}

function addFollowersToDom(followersArray) {
  const followersList = $(".followers")
  followersList.empty();
  followersArray.forEach(follower => {
    followersList.append(`<li>${follower.login}</li>`);
  });
}



  //url = this.action


 //$.ajax({
   //type: ($("input[name='_method']").val() || this.method),
   //url: this.action,
   //data: $(this).serialize(),
   //success: function(response){
  // $("#stockists").val("");
   //var $ol = $("div.stockists ol")
   //$ol.append(response);

  // }
 //});

//  e.preventDefault();
//})
//});


//$('#form').submit(function(){

   //some code here

   //return false;
//});
