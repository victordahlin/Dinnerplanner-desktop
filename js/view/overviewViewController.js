//ExampleViewController Object constructor
var OverviewViewController = function(view, model ) {

	$("#dinnerPrep").hide();
	
	view.goBackButton.click(
		function(){
			console.log("goback");
		}
	);
		
	view.nextPageButton.click(
		function(){
			$("#myDinner_choices").hide();
			$("#dinnerPrep").show();
			
		}
	);
}
