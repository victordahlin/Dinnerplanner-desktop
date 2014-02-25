//LeftViewController Object constructor
var LeftViewController = function(view, model ) {
	
	view.numberOfGuests.change(function(){
		model.setNumberOfGuests(view.numberOfGuests.val());
	});
	
	
	view.finConfirmBtn.click(function(){		
		if(model.getFullMenu().length == 0){
			alert("You have no selected dishes");
			}else{
		//todo -> open overview page
		}
	});
	
	
	
	
}
