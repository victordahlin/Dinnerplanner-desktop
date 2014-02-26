//ExampleViewController Object constructor
var OverviewViewController = function(view, model ) {
	view.nextPageButton.click(
		function(){
			$("#overviewView").hide();
			$("#dinnerPrep").show();
		}
	);
}