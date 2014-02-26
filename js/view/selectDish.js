var SelectDish = function (container,model) {	
	
	// Get picture box to apply new dishes
	var pictureBoxTag = container.find("#picture-box");
	// Get image box to set click handler
	this.imageBox = container.find("div");
	this.filterDD = container.find("#courseSel");
	this.searchBtn = container.find("#searchBtn");
	this.rightConfirmButton = $("<button>");
	var array = model.getAllDishes().end();
	//console.log(this.imageBox); 

	
	this.fillDishContainer = function(type, filter){
		pictureBoxTag.empty();
	// Temp for getting dishes 
		if(type=="all"){
			array = model.getAllDishes().end();
		}else{
			array = model.getAllDishes(type, filter);
		}
		//console.log(array);	
	//Create <div class="col-md-3"<img src="X" width=X height=Y></img>
		for( var i = 0; i < array.length; i++ ) {
			var div = $("<div>");
			var dishID = array[i].id;
			div.addClass("col-md-3");
			div.attr("id", dishID);

			var imageTag = $("<img>");
			var file = "images/" + array[i].image;
			imageTag.attr("src",file);
			imageTag.attr("width", "120");
			imageTag.attr("height", "120");
			div.append(imageTag);

			var name = array[i].name;
			var textTitle = $("<p>");
			textTitle.addClass("singleDishTitle");
			textTitle.html(name);
			div.append(textTitle);

			// Shrink text to a breif text
			var textDesc = $("<p>");
			textDesc.addClass("singleDishDesc");
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

	this.showSingleDish = function(dishID, dishName, dishImage, dishDesc, dishIngredients) {
		var masterDiv = $("<div>");

		var left = $("<div>");
		left.addClass("col-md-4");
		left.attr("id", "singleDishLeftBox");

		var title = $("<h2>");
		title.html(dishName);
		left.append(title);

		var imageTag = $("<img>");
		var file = "images/" + dishImage;
		imageTag.addClass("dishImage");
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
		right.attr("id", "singleDishRightBox");
		var dishIngrTotal = $("<h3>");
		dishIngrTotal.html("Ingredients for " + model.getNumberOfGuests() + " people<hr>");
		right.append(dishIngrTotal);
		var dishPrice = 0;
		var ingrTable = $("<table>");
		ingrTable.addClass("table table-condensed")
		for(key in dishIngredients) {
			var singleIngredient = $("<tr>");
			var ingrName = dishIngredients[key].name;
			var ingrQuant = Math.round(dishIngredients[key].quantity * model.getNumberOfGuests()).toFixed(1);
			var ingrUnit = dishIngredients[key].unit;
			var ingrPrice = parseFloat(dishIngredients[key].price * model.getNumberOfGuests());
			dishPrice += ingrPrice;
			singleIngredient.html("<td>"+ingrQuant+" "+ingrUnit+"</td><td>"+ingrName+"</td><td>SEK</td><td>"+ingrPrice+"</td>");
			ingrTable.append(singleIngredient);			
		}
		right.append(ingrTable);
		var breakLine = $("<hr>")
		right.append(breakLine);
		
		this.rightConfirmButton.html("Confirm Dish");
		this.rightConfirmButton.attr("id", dishID);
		this.rightConfirmButton.addClass("confirmButton");
		right.append(this.rightConfirmButton);
		var dishCostdiv = $("<div>");
		dishCostdiv.attr("id", "dishCostdiv");
		dishCostdiv.html("SEK "+dishPrice);
		right.append(dishCostdiv);
		
		masterDiv.append(right);

		// Set all HTML tags to the #picture-box in #selectDish
		$("#showDish").append(masterDiv);
	}
	
	this.fillDishContainer("all");

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