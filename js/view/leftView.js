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
			this.selDishDiv.html("");
			var headtr = $("<tr>");
			headtr.addClass("headTR");
			headtr.append("<th>Dish name</th><th>Cost</th><th></th>");
			this.selDishDiv.append(headtr);
			var pendingtr = $("<tr>");				
			var pending=$("<td>");
			pending.html("Pending");
			var pendcost=$("<td>");			
			pendcost.html("0");
			pendingtr.append(pending, pendcost);
			this.selDishDiv.append(pendingtr);
		}else{
			this.selDishDiv.html("");
			var headtr = $("<tr>");
			headtr.addClass("headTR");
			headtr.append("<th>Dish name</th><th>Cost</th><th></th>");
			this.selDishDiv.append(headtr);
			for (var d in selDishes){
				var tr = $("<tr>");
				var dishname=$("<td>");
				dishname.html(selDishes[d].name);
				
				var dishcost=$("<td>");				
				var cost = 0;
				var ingredients = selDishes[d].ingredients;
				for (var i in ingredients){
					cost = cost + ingredients[i].price*nrofGuests;
				}
				dishcost.html(cost);
				var buttontd = $("<td>");	
				var removeBtn= $("<button>");
				removeBtn.attr("id", "rmBtn");
				removeBtn.attr("value", selDishes[d].id);
				removeBtn.addClass("btn btn-danger btn-xs");
				removeBtn.text("x");
				buttontd.append(removeBtn);
				tr.append(dishname,dishcost,buttontd);
				this.selDishDiv.append(tr);
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
 
