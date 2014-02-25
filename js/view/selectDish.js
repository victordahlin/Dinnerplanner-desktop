var SelectDish = function (container,model) {	

	// Get picture box to apply new dishes
	var pictureBoxTag = container.find("#picture-box");
	// Get image box to set click handler
	this.imageBox = container.find("div");
	this.filterDD = container.find("#courseSel");
	this.searchBtn = container.find("#searchBtn");
	var array = model.getAllDishes().end();
	console.log(array);
	//console.log(this.imageBox); debug
	
	this.fillDishContainer = function(type, filter){
		pictureBoxTag.empty();
	// Temp for getting dishes 
		if(type){
		array = model.getAllDishes(type, filter);
		}
		console.log(array);	
	
	// Create <div class="col-md-3"<img src="X" width=X height=Y></img>
		for( var i = 0; i < array.length; i++ ) {
			var div = $("<div>");
			var dishID = array[i].id;
			div.addClass("col-md-3");
			div.attr("id", dishID);
			div.css("margin:20px;");

			var imageTag = $("<img>");
			var file = "images/" + array[i].image; 
			imageTag.attr("src",file);
			imageTag.attr("width", "120");
			imageTag.attr("height", "120");
			div.append(imageTag);

			var name = array[i].name;
			var textTitle = $("<p>");
			textTitle.html(name);
			div.append(textTitle);

			// Shrink text to a breif text
			var textDesc = $("<p>");
			var desc = array[i].description;
			if (desc.length > 20) {
				desc = desc.substr(0, 17) + "...";
			}			
			textDesc.html(desc);
			div.append(textDesc);

			// Set all HTML tags to the #picture-box in #selectDish
			pictureBoxTag.append(div);
		}
		//new SelectDishController(this,model);
	}

	this.test = function(dishID, dishName, dishImage, dishDesc, dishIngredients) {
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
		leftBackButton.addClass("backButton");
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
		rightConfirmButton.addClass("confirmButton");
		right.append(rightConfirmButton);
		
		masterDiv.append(right);

		// Set all HTML tags to the #picture-box in #selectDish
		$("#showDish").append(masterDiv);
	}
	
	this.fillDishContainer();
	//this.fillDishContainer("starter");

	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		//this.numberOfGuests.html(model.getNumberOfGuests());
		//this.totalPrice.html(model.getTotalMenuPrice());
	}
}