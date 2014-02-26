var TopView = function(container,model){
	
	this.goBackButton = container.find("#goBack");
	this.header = container.find("#myDinner_Header");
	
	this.h1 = $("<h2>");
	this.header.append(this.h1);
	this.h1.html("My dinner: " + model.getNumberOfGuests() + " people");
}