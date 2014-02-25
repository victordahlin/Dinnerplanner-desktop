var SelectDishController = function(view, model ) {

	var pickDish = function() {
	//set click handlers to all recently filtered dishes.
		$(".col-md-3").click(function(event) { 
		$("#searchDish").hide();
		$("#picture-box").hide();
		
		var clickedID = $(this).attr('id');
		var dish = model.getDish(clickedID);
		var dishID = dish.id; 
		var dishName = dish.name;
		var dishImage = dish.image;
		var dishDesc = dish.description;
		var dishIngredients = dish.ingredients; // array

		view.test(dishID, dishName, dishImage, dishDesc, dishIngredients);
		updateConfirmButton();

		// Show dishes and set #showDish div tag empty
			$(".backButton").click(function(event) {
				$("#searchDish").show();
				$("#picture-box").show();
				$("#showDish").html("");
			});
		});
	}
	
	var filterFn = function(){
	var searchtext = $("#searchBox").val();
		if(searchtext == "Enter key words" || searchtext == ""){		
			view.fillDishContainer(view.filterDD.val());
		}else{
			view.fillDishContainer(view.filterDD.val(),$("#searchBox").val());
		}
	}
	
	view.filterDD.change(function(){
		filterFn();
		pickDish();
		});
		
	view.searchBtn.click(function(){ 
		filterFn();
		pickDish();
	});
	
	//confirm dish button click handler
	var updateConfirmButton = function(){
	view.rightConfirmButton.click(function(event){
		var clickedID = $(this).attr('id');
		model.addDishToMenu(clickedID); //add to selected dishes
		$("#searchDish").show();
		$("#picture-box").show();
		$("#showDish").html("");		
	});
	}


	pickDish();

}
