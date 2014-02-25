//LeftView Object constructor
var LeftView = function (container,model) {

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.finConfirmBtn = container.find("#finConfirmBtn");
	this.totalPrice = container.find("#totalPrice");
	this.selDishDiv = container.find("#selectedDishes");
	
	//Update the selected dishes shown
	this.updateSelectedDishes = function(){
	
		var nrofGuests = model.getNumberOfGuests();
		var selDishes = model.getFullMenu();
		if(selDishes.length == 0){
			var pending=$("<span>");
			pending.addClass("dishname"); 
			pending.html("Pending");
			var pendcost=$("<span>");
			pendcost.addClass("dishcost");
			pendcost.html("0");
			this.selDishDiv.append(pending, pendcost);
		}else{
			this.selDishDiv.html("");
			for (var d in selDishes){
				var dishname=$("<span>");
				dishname.addClass("dishname");				
				dishname.text(selDishes[d].name);
				
				var dishcost=$("<span>");
				dishcost.addClass("dishcost");
				var cost = 0;
				var ingredients = selDishes[d].ingredients;
				for (var i in ingredients){
					cost = cost + ingredients[i].price*nrofGuests;
				}
				dishcost.html(cost);
				var removeBtn= $("<button>");
				removeBtn.attr("id", selDishes[d].id);
				removeBtn.text("x");
				this.selDishDiv.append(dishname,dishcost,removeBtn,"<br>");
			}
		}
	}
	
	this.totalPrice.html("0");
	this.totalPrice.text("0");
	this.updateSelectedDishes();
	
	
	
	
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.updateSelectedDishes();
		this.totalPrice.html(model.getTotalMenuPrice());
		this.totalPrice.html(model.getTotalMenuPrice());
		
	}
}
 
