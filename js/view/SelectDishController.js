var SelectDishController = function(view, model ) {
	
	var filterFn = function(){
	var searchtext = $("#searchBox").val();
		if(searchtext == "Enter key words" || searchtext == ""){		
			view.fillDishContainer(view.filterDD.val());
		}else{
			view.fillDishContainer(view.filterDD.val(),$("#searchBox").val());
		}
	}
	
	view.filterDD.change(function(){
		filterFn();
		});
		
	view.searchBtn.click(function(){ 
		filterFn();
	});


	$(".col-md-3").click(function(event) { 
		$("#picture-box").hide();
		
		var clickedID = $(this).attr('id');
		var dish = model.getDish(clickedID);
		var dishID = dish.id; 
		var dishName = dish.name;
		var dishImage = dish.image;
		var dishDesc = dish.description;
		var dishIngredients = dish.ingredients; // array

		var masterDiv = $("<div>");

		var left = $("<div>");
		left.addClass("col-md-4");

		var title = $("<h2>");
		title.html(dishName);
		left.append(title);

		var imageTag = $("<img>");
		var file = "images/" + dishImage;
		imageTag.attr("src",file);
		imageTag.attr("width", "120");
		imageTag.attr("height", "120");
		left.append(imageTag);

		var dishText = $("<p>");
		dishText.html(dishDesc);
		left.append(dishText);

		var leftBackButton = $("<button>");
		leftBackButton.html("back to Select Dish");
		left.append(leftBackButton);

		// Add first div to master
		masterDiv.append(left);

		var right = $("<div>");
		right.addClass("col-md-6");
		var dishIngrTotal = $("<h3>");
		dishIngrTotal.html("Ingredients for " + model.getNumberOfGuests() + " people<hr>");
		right.append(dishIngrTotal);

		for(key in dishIngredients) {
			var singleIngredient = $("<p>");
			var ingrName = dishIngredients[key].name;
			var ingrQuant = dishIngredients[key].quantity;
			var ingrUnit = dishIngredients[key].unit;
			var ingrPrice = dishIngredients[key].price;

			singleIngredient.html(ingrQuant + " " + ingrUnit + " " + ingrName + " SEK  " + ingrPrice);
			right.append(singleIngredient);
		}

		var breakLine = $("<hr>")
		right.append(breakLine);
		var rightConfirmButton = $("<button>");
		rightConfirmButton.html("Confirm Dish");
		right.append(rightConfirmButton);
		masterDiv.append(right);

		// Set all HTML tags to the #picture-box in #selectDish
		$("#showDish").append(masterDiv);
	});
}
