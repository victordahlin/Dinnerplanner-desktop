var TopView = function(container,model){
	
	this.numberOfGuests = model.getNumberOfGuests();
	this.goBackButton = container.find("#goBack");
	this.header = container.find("#myDinner_Header");
	
	this.h1 = $("<h2>");
	this.header.append(this.h1);
	this.h1.html("My dinner: " + this.numberOfGuests + " people");
	
	model.addObserver(this);
	
	this.update = function(arg){
		this.h1.html("My dinner: " + model.getNumberOfGuests() + " people");
	}
}