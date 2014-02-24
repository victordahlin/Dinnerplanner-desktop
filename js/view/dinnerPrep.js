var DinnerPrep = function (container,model) {
	
	var menuArray = model.getDishes(); //ska vara getFullMenu
	
	this.dinnerPrep = container.find("#dinnerPrep");
	
	for( var i = 0; i < menuArray.length; i++ ) {
		
		var row = $("<div>");
		row.addClass("row");
		
		var firstColumn = $("<div>");
		firstColumn.addClass("col-md-3");
		
		var pictureBox = $("<img>");
		var file = "images/" + menuArray[i].image;
		
		pictureBox.attr("src",file);

		firstColumn.append(pictureBox);
		
		var secondColumn = $("<div>");
		secondColumn.addClass("col-md-4");
		
		var name = menuArray[i].name;
		var titleText = $("<h3>");
		titleText.html(name);
		secondColumn.append(titleText);
		
		var ingredients = menuArray[i].ingredients;		
		console.log(ingredients);
		
		var list = $("<ul>");
		for ( var j = 0; j < ingredients.length; j++ ){
			var listRow = $("<li>");
			listRow.html(ingredients[j].name + "  " + ingredients[j].quantity + " " + ingredients[j].unit );
			list.append(listRow);
		}
		secondColumn.append(list);
		
		
		var thirdColumn = $("<div>");
		thirdColumn.addClass("col-md-5");
		
		var desc = menuArray[i].description;
		var descText = $("<p>");
		descText.html(desc);
		thirdColumn.append(descText);
		
		row.append(firstColumn);
		row.append(secondColumn);
		row.append(thirdColumn);
		
		container.append(row);
		
	}
	

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