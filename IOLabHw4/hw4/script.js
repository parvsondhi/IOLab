$(document).ready(
  $("#add-button").on('click', function(){
    var userInput = $("#item").val();
    addNewItem(userInput);

    $("#to-do-list").on('click', 'button', function(){
      completeItem($(this).parent());
    })

    $("#completed-items").on('click', 'button', function(){
      removeItem($(this).parent());
    })
  })
);

function addNewItem(x){
  $("#to-do-list").prepend("<li class = 'list-item'><button class = 'button'><span>Complete</span></button>" + x +"</li>");
  $("#item").val("");
}
function completeItem(x){
  x.children('.button').html("<span>Remove</span>");
  $("#completed-items").prepend(x);
  console.log(x);
}
function removeItem(x){
  x.children('.button').html("<span>Complete</span>");
  $("#to-do-list").prepend(x);
}
