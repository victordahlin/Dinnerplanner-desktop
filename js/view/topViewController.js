var TopViewController = function(view, model ) {
	var page = "myDinner";
	
	view.goBackButton.click(
		function(){
			if ($("#dinnerPrep").is(":visible")){
				$("#overviewView").show();				
				$("#dinnerPrep").hide();				
			}
			else if ($("#overviewView").is(":visible")){
				$("#topView").hide();				
				$("#overviewView").hide();
				//$("#selectDish").show();				
			}
		}
	);
}