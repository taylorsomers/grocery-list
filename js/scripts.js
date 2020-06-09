// Business Logic:

function transformGroceryList(arrayParameter) {
  let newArray = [];
  arrayParameter.forEach(function(groceryItem) {
    groceryItem = groceryItem.charAt(0).toUpperCase() + groceryItem.slice(1);
    newArray.push(groceryItem);
  });
  return newArray.sort();
}

// End Business Logic

// UI Logic

$(document).ready(function() {
  $("button#add-input").click(function() {
    $("div#form-inputs").append("<input type='text'>");
  });

  $("form#grocery-items").submit(function() {
    $("#result").empty();
    event.preventDefault();
    let groceryList = [];
    $("div#form-inputs > input").each(function() {
      if ($(this).val()) {
        groceryList.push($(this).val());
      }
    });

    let transformedList = transformGroceryList(groceryList);

    transformedList.forEach(function(item) {
      $("#result").append("<li>" + item + "</li>");
    });
  });
});

// End UI Logic