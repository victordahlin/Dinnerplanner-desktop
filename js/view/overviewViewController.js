//ExampleViewController Object constructor
var OverviewViewController = function(view, model ) {

	$("#dinnerPrep").hide();
	var page = "myDinner";
	view.goBackButton.click(
		function(){
			if (page == "myDinner"){
				console.log("goback");
			}
			else{
				$("#dinnerPrep").hide();
				$("#myDinner_choices").show();
				page = "myDinner";
			}			
		}
	);
		
	view.nextPageButton.click(
		function(){
			$("#myDinner_choices").hide();
			$("#dinnerPrep").show();
			page = "dinnerPrep";
		}
	);
}