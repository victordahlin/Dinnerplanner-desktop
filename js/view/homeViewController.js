var HomeViewController = function(view, model ) {
	$("#overviewView").hide();	
	$("#dinnerPrep").hide();
	$("#topView").hide();
	$("#leftView").hide();
	$("#selectDish").hide();
	
	
	
	view.startButton.click(
		function(){
			$('body').css("background-image", "url()");
			$(".jumbotron").attr("id","");
			$("#homeView").hide();
			$("#selectDish").show();
			$("#leftView").show();
		}
	);
	
}