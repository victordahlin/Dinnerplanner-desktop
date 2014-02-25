//ExampleView Object constructor
var OverviewView = function (container,model) {
	var dinnerRow = $(container.find("#myDinner_row"));
	this.goBackButton = container.find("#goBack");
	this.nextPageButton = container.find("#nextPage");
	this.myDinner = container.find("#myDinner_choices");
	this.dinnerPrep = container.find("#dinnerPrep");
	
	//model.addDishToMenu(2);
	//model.addDishToMenu(100);
	//model.addDishToMenu(200);
	var array = model.getFullMenu();
	for( var i = 0; i < array.length; i++ ) {
		var div = $("<div>");
		if (i==0){
			div.addClass("col-md-2 col-md-offset-1");
		}
		else {
			div.addClass("col-md-2");
		}
		
		div.attr("id", "dish");
		var pictureBox = $("<img>");
		var file = "images/" + array[i].image;

		pictureBox.attr("src",file);
		pictureBox.attr("width", "120");
		pictureBox.attr("height", "120");
		div.append(pictureBox);

		var name = array[i].name;
		var textTitle = $("<p>");
		textTitle.html(name);
		div.append(textTitle);

		var ingredients = array[i].ingredients;
		var price = 0.00;
		for (var j = 0; j < ingredients.length; j++) {
			price += ingredients[j].price;
		}
		
		price = price*model.getNumberOfGuests();
		var dishPrice = $("<b>");
		dishPrice.html(price + " SEK");
		div.append(dishPrice);

		console.log(div);
		dinnerRow.append(div);
	}
	var div = $("<div>");
	div.html("Total menu price:");
	div.addClass("col-md-2");
	//div.css("border-left", "3px solid black");
	div.attr("id","thePriceisRight");
	div.attr("width", "120");
	div.attr("height", "120");
	this.br = $("<br>");
	this.totalPrice = $("<b>");
	this.totalPrice.attr("id","totalPrice");
	div.append(this.br);
	div.append(this.totalPrice);
	//finally we add the div to the view container
	dinnerRow.append(div);
	
	//Set the inital values of the components
	//this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalPrice.html(model.getTotalMenuPrice() + " SEK");
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalPrice.html(model.getTotalMenuPrice());
	}
}
 
