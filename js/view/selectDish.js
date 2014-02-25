var SelectDish = function (container,model) {	

	// Get picture box to apply new dishes
	var pictureBoxTag = container.find("#picture-box");
	// Get image box to set click handler
	this.imageBox = container.find("div");
	this.filterDD = container.find("#courseSel");
	this.searchBtn = container.find("#searchBtn");
	//console.log(this.imageBox); debug
	
	this.fillDishContainer = function(type, filter){
		pictureBoxTag.empty();
	// Temp for getting dishes 
		var array = model.getAllDishes(type, filter);
		//console.log(array);	
	
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
	}
	
	this.fillDishContainer("starter");

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