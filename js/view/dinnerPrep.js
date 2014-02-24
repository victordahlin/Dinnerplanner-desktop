var DinnerPrep = function (container,model) {
	
	var menuArray = model.getDishes(); //ska vara getFullMenu
	
	this.dinnerPrep = container.find("#dinnerPrep");
	
	for( var i = 0; i < menuArray.length; i++ ) {
		
		var row = $("<div>");
		row.addClass("row");
		row.attr("id","rowID");
		
		//first column
		var firstColumn = $("<div>");
		firstColumn.addClass("col-md-3");
		firstColumn.attr("id","firstColumn");
		
		var pictureBox = $("<img>");
		var file = "images/" + menuArray[i].image;
		pictureBox.attr("src",file);
		pictureBox.addClass("col-md-offset-2");

		firstColumn.append(pictureBox);
		
		//second column
		var secondColumn = $("<div>");
		secondColumn.addClass("col-md-4");
		secondColumn.attr("id","secondColumn");
		
		var name = menuArray[i].name;
		var titleText = $("<h3>");
		titleText.html(name);
		
		var ingredients = menuArray[i].ingredients;		
		
		var list = $("<ul>");
		for ( var j = 0; j < ingredients.length; j++ ){
			var listRow = $("<li>");
			listRow.html(ingredients[j].name + ",  " + ingredients[j].quantity + " " + ingredients[j].unit );
			list.append(listRow);
		}		
		
		secondColumn.append(titleText);
		secondColumn.append(list);
		
		//third column
		var thirdColumn = $("<div>");
		thirdColumn.addClass("col-md-5");
		thirdColumn.attr("id","thirdColumn");;
		
		var prepTitle = $("<h4>");
		prepTitle.html("Preparations");
		
		var desc = menuArray[i].description;
		var descText = $("<p>");
		descText.html(desc);
		
		thirdColumn.append(prepTitle);
		thirdColumn.append(descText);
		
		
		//add columns to row
		row.append(firstColumn);
		row.append(secondColumn);
		row.append(thirdColumn);
		
		//add row to container
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