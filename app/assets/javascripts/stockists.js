
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
$('#new_stockist').on("submit", function(e){
  alert("You clicked SUBMIT!!")
  e.preventDefault()
  var $form = $(this);
  var action = '/stockists';
  var params = $form.serialize();

  $.ajax({
url: action,
data: params,
datatype: 'json',
method: 'POST'
})
.success(function(json){
  var newstockist = new Stockist(json);
  var stockistLi = newstockist.renderLI()
$('ul.new-stockist').append(stockistLi)
})
.error(function(response){
console.log('you broke it?')
})

})
})



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
