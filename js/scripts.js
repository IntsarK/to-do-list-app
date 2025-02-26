$(document).ready(function () {

  $("#button").on("click", function () {
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);

    if (inputValue === "") {
      alert("You must write something!");
    } else {
      $("#list").append(li);
    }

    li.on("dblclick", function () {
      li.toggleClass("strike");
    });

    let crossOutButton = $('<button class="crossOutButton"></button>');
    crossOutButton.text("X");
    li.append(crossOutButton);

    crossOutButton.on("click", function () {
      li.remove();
    });

    $("#input").val("");
  });

  $("#list").sortable();
});
