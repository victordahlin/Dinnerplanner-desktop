//ExampleView Object constructor
var OverviewView = function (container,model) {
	console.log("bajsabjajsba");
	var dinnerRow = $(container.find("#myDinner_row"));

	model.addDishToMenu(2);
	model.addDishToMenu(100);
	var array = model.getFullMenu();
	console.log(array);
	for( var i = 0; i < array.length; i++ ) {
		var div = $("<div>");
		if (i==0){
			div.addClass("col-md-1 col-md-offset-1");
		}
		else {
			div.addClass("col-md-1");
		}
		
		div.css("margin:20px;");

		var pictureBox = $("<img>");
		var file = "images/" + array[i].image;

		pictureBox.attr("src",file);
		pictureBox.attr("width", "120");
		pictureBox.attr("height", "120");
		div.append(pictureBox);

		var name = array[i].name;
		var textTitle = $("<b>");
		textTitle.html(name);
		div.append(textTitle);

		console.log(div);
		dinnerRow.append(div);
	}
	var div = $("<div>");
	div.html("Total menu price:");
	div.addClass("col-md-1 col-md-offset-1");
	div.css("border-left", "3px solid black");
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
	this.totalPrice.html(model.getTotalMenuPrice());
	
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
 
