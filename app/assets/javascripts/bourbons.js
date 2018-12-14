
document.addEventListener("turbolinks:load", function() {
$(function () {
  $(".js-more").on('click', function() {
    var id = $(this).data("id");
    $.get("/bourbons/" + id + "/bourbon_data", function(data) {
      // Replace text of body-id div
      $("#body-" + id).html(data["description"]);
    });
  });
});
})



$(function () {
  $(".js-next").on("click", function() {
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.get("/bourbons/" + nextId + ".json", function(data) {

      $(".bourbonName").text(data["name"]);
      $(".bourbonDescription").text(data["description"]);
      $(".bourbonAge").text(data["age"]);
      $(".bourbonGrain").text(data["grain"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", data["id"]);
    });
    return false;
  });
});
