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

	
	
	//commented since it is removing searchbox and not working... :	
	//view.imageBox.click(function(event) { 
	//	$(this).hide();

	//	var array = model.getAllIngredients();
	//	var all = "";
	//	for(key in array) {
	//		all += array[key].name + " ";
	//	}
	//	$("#showDish").html(all);
//	});
}
