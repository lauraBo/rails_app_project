

$( document ).on('turbolinks:load', function() {

	listenForStockistClick()
  listenForFormSubmit()

	Stockist.templateSource = $('#stockist-template').html()
	console.log("Stockist.templateSource", Stockist.templateSource )
	Stockist.template = Handlebars.compile(Stockist.templateSource);
});

//clearOutStockistsDiv
function clearOutStockistsDiv() {
	document.getElementById('stockist-detail').innerHTML = ''
}

//listenForStockistClick
function listenForStockistClick(e) {
		$('div#stockists-index a').on('click', function (e) {
		e.preventDefault()
		let id = this.attributes[0].textContent
		getStockistDetails(id)
	})
}

//getStockistDetails
function getStockistDetails(id) {
		$.ajax({
		type: "get",
		url: '/stockists/' + id,
		dataType: 'json',
		success: function (response) {
		console.log("response: ", response)

		loadStockistDetails(response)
		   }
		 })
		}

//loadStockistDetails
function loadStockistDetails(data) {
	   	clearOutStockistsDiv()

	     let dataHTML = (`
						<fieldset>
						<p>${data.name}</p>
						<p>${data.address}</p>
						</fieldset>
						`)

			document.getElementById('stockist-detail').innerHTML += dataHTML
		}

//CONSTRUCTOR
  function Stockist(attributes){
			this.name = attributes.name;
			this.id = attributes.id;
			this.address = attributes.address;
     }

// renderLI
Stockist.prototype.renderLI = function(){
		return Stockist.template(this)
     }

// listenForFormSubmit
function listenForFormSubmit(e) {
		$('form#new_stockist').on("submit", function(e){
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
	});
// clear form
	$("#new_stockist")[0].reset();
	})
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
