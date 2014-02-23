var DinnerPrep = function (container,model) {
	
	var menuArray = model.getDishes(); //ska vara getFullMenu
	console.log(menuArray);
	
	this.dinnerPrep = container.find("#dinnerPrep");
	
	for( var i = 0; i < menuArray.length; i++ ) {
		
		var row = $("<div>");
		row.addClass("row");

		
		var firstColumn = $("<div>");
		firstColumn.addClass("col-md-3");
		
		var pictureBox = $("<img>");
		var file = "images/" + menuArray[i].image;
		
		pictureBox.attr("src",file);
		pictureBox.attr("width", "120");
		pictureBox.attr("height", "120");
		firstColumn.append(pictureBox);
		
		var secondColumn = $("<div>");
		secondColumn.addClass("col-md-4");
		
		var name = menuArray[i].name;
		var titleText = $("<h3>");
		titleText.html(name);
		secondColumn.append(titleText);
		
		var ingredients = "ingredients?"; //ska va lista med ingredienser?
		var tmp = $("<p>");
		tmp.html(ingredients)
		secondColumn.append(tmp);
		
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