$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();
	
	// Views
	var leftView = new LeftView($("#leftView"),model);
    var selectDish = new SelectDish($("#selectDish"),model);
	var dinnerPrep = new DinnerPrep($("#dinnerPrep"),model);
	var overviewView = new OverviewView($("#overviewView"),model);
	var homeView = new HomeView($("#homeView"),model);
	var topView = new TopView($("#topView"),model);
	

	// Controllers
   	var leftViewController = new LeftViewController(leftView,model);
   	var selectDishController = new SelectDishController(selectDish,model);
	var overviewViewController = new OverviewViewController(overviewView,model);
	var dinnerPrepController = new DinnerPrepController(dinnerPrep,model);
	var homeViewController = new HomeViewController(homeView,model);
	var topViewController = new TopViewController(topView,model);
	
	
});