//LeftViewController Object constructor
var LeftViewController = function(view, model ) {
	
	view.numberOfGuests.change(function(){
		model.setNumberOfGuests(view.numberOfGuests.val());
	});
	
		
	$("#selectedDishes").on("click","button",function(){
		var clickedID = $(this).val();
		model.removeDishFromMenu(clickedID);
	});	
	
	view.finConfirmBtn.click(function(){		
		if(model.getFullMenu().length == 0){
			alert("You have no selected dishes");
			}else{
		$("#leftView.col-md-2").hide();
		$("#selectDish").hide();
		$("#topView").show();
		$("#overviewView").show();	
		
				
		
		}
	});	
		
}
