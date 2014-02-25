var SelectDishController = function(view, model ) {
	
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
		});
		
	view.searchBtn.click(function(){ 
		filterFn();
	});


	$(".col-md-3").click(function(event) { 
		$("#picture-box").hide();
		
		var clickedID = $(this).attr('id');
		var dish = model.getDish(clickedID);
		var dishID = dish.id; 
		var dishName = dish.name;
		var dishImage = dish.image;
		var dishDesc = dish.description;
		var dishIngredients = dish.ingredients; // array

		view.test(dishID, dishName, dishImage, dishDesc, dishIngredients);


		// Show dishes and set #showDish div tag empty
		$(".backButton").click(function(event) {
			$("#picture-box").show();
			$("#showDish").html("");
		});
	});


}
