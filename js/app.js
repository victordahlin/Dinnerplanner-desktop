$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();
	
	// Views
	var exampleView = new ExampleView($("#exampleView"),model);
    var selectDish = new SelectDish($("#selectDish"),model);
	var dinnerPrep = new DinnerPrep($("#dinnerPrep"),model);
	var overviewView = new OverviewView($("#overviewView"),model);

	// Controllers
   	var exampleViewController = new ExampleViewController(exampleView,model);
   	var selectDishController = new SelectDishController(selectDish,model);
	var overviewViewController = new OverviewViewController(overviewView,model);
});