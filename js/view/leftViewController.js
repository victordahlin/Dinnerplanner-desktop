//LeftViewController Object constructor
var LeftViewController = function(view, model ) {
	
	view.numberOfGuests.change(function(){
		model.setNumberOfGuests(view.numberOfGuests.val());
	});
	
	this.updateRemoveBtn = function(){	
	$("#rmBtn").click(function(){
		var clickedID = $(this).val();
		model.removeDishFromMenu(clickedID);
	});	
	}
	
	
	view.finConfirmBtn.click(function(){		
		if(model.getFullMenu().length == 0){
			alert("You have no selected dishes");
			}else{
		$("#leftView.col-md-2").hide();
		$("#selectDish").hide();		
		//todo -> open overview page
		}
	});	
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.updateRemoveBtn();
		
		
	}
	
}
