var SelectDishController = function(view, model ) {

	view.imageBox.click(function(event) { 
		$(this).hide();

		var array = model.getAllIngredients();
		var all = "";
		for(key in array) {
			all += array[key].name + " ";
		}
		$("#showDish").html(all);
	});
}
