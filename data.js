var Dataset = function(){
	this.UsersTable = [];
	this.FacilityTable = [];
	this.PostsTable = [];
	this.EventsTable = [];
	this.ReseravtionsTable = []
	this.ReviewsTable = [];
	this.GaleryTable = [];
	this.ImageTabel = [];
};

var DataControl = function(){
	var mainDS = new Dataset();
	
	this.GetAllTables = function(){
		return mainDS;
	};
	
	this.RegisterUser = function(user){
		mainDS.UsersTable.push(user);
	};
	
	this.LogIn = function(user, pass){
		if($.grep(mainDS.UsersTable, function(x) { return x.Login == user && x.Password == pass}).length > 0){
			document.cookie = "user=" + user;
		}
		
		SetDropDownMenu();
	};
	
	this.LogOut = function(){
		document.cookie = "user=";
		
		SetDropDownMenu();
	};
	
	this.IsLoggedIn = function(){
		var user = document.cookie.split(";");
		
		user = $.grep(user, function(x) { return x.trim().indexOf("user=") == 0; });
		if(user.length > 0){
			user = user[0].split("=")[1];
		}else{
			user = "";
		}
		
		if(mainDS.UsersTable.length > 0){
			user = mainDS.UsersTable[0].Login;
		}
		
		return $.grep(mainDS.UsersTable, function(x) { return x.Login == user}).length > 0;
	};
	
	this.GetLoggedInUser = function(){
		var user = document.cookie.split(";");
		
		user = $.grep(user, function(x) { return x.trim().indexOf("user=") == 0; });
		if(user.length > 0){
			user = user[0].split("=")[1];
		}else{
			user = "";
		}
		
		if(mainDS.UsersTable.length > 0){
			user = mainDS.UsersTable[0].Login;
		}
		
		return $.grep(mainDS.UsersTable, function(x) { return x.Login == user}).length > 0 ? $.grep(mainDS.UsersTable, function(x) { return x.Login == user})[0] : null;
	};
	
	this.GetUser = function(login){
		return $.grep(mainDS.UsersTable, function(x) { return x.Login == login}).length > 0 ? $.grep(mainDS.UsersTable, function(x) { return x.Login == login})[0] : null;
	};
	
	this.GetFacilities = function(){
		return mainDS.FacilityTable;
	};
	
	this.GetFacility = function(id){
		if(id != null && id != undefined && $.grep(mainDS.FacilityTable, function(x) { return x.ID == id; }).length > 0){
			return $.grep(mainDS.FacilityTable, function(x) { return x.ID == id; })[0];
		}else{
			return null;
		}
	};
	
	this.RegisterFacility = function(facility){
		mainDS.FacilityTable.push(facility);
	};
	
	this.AddReview = function(review){
		mainDS.ReviewsTable.push(review);
	};
	
	this.GetReviews = function(facilityID){
		if($.grep(mainDS.ReviewsTable, function(x) { return x.FacilityID == facilityID; }).length > 0){
			return $.grep(mainDS.ReviewsTable, function(x) { return x.FacilityID == facilityID; });
		}else{
			return null;
		}
	}
}