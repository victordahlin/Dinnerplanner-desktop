var SelectDish = function (container,model) {	

	var pictureBoxTag = container.find("#picture-box");
	this.imageBox = container.find(".col-md-3");
	
	console.log(this.imageBox);

	var array = model.getAllDishes().end();
	//console.log(array);
	
	for( var i = 0; i < array.length; i++ ) {
			var div = $("<div>");
			div.addClass("col-md-3");
			div.css("margin:20px;");

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

			var desc = array[i].description;

			if (desc.length > 20) {
				desc = desc.substr(0, 17) + "...";
			}
			var textDesc = $("<p>");
			textDesc.html(desc);
			div.append(textDesc);

			pictureBoxTag.append(div);
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