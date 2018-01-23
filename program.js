var Program = function(){
	var dummyMain = this;
	this.Datacontrol = new DataControl();
	
	this.GoToPage = function(page, id){
		switch(page){
			case "registracija":
				if(dummyMain.Datacontrol.IsLoggedIn()){
					ShowUserProfile();
				}else{
					ShowRegistrationPage();
				}
				break;
			case "login":	
				if(dummyMain.Datacontrol.IsLoggedIn()){
					ShowUserProfile();
				}else{
					ShowLoginPage();
				}
				break;
			case "profil":
				ShowUserProfile();
				break;
			case "objekt":
				ShowDetailsPage(dummyMain.Datacontrol, id);
				break;
			case "profil objekta":
				ShowFacilityPage(dummyMain.Datacontrol, id);
				break;
			default:
				ShowIndexPage(dummyMain.Datacontrol, id);
				break;
		}
		
		window.history.pushState({page: page, id: id}, "", "");
	}
	
	
	FillDummyData(dummyMain.Datacontrol);
	this.GoToPage("index");
	
	window.onpopstate = function(x){
		if(x != null && x.state != null){
			switch(x.state.page){
			case "registracija":
				if(dummyMain.Datacontrol.IsLoggedIn()){
					ShowUserProfile();
				}else{
					ShowRegistrationPage();
				}
				break;
			case "login":	
				if(dummyMain.Datacontrol.IsLoggedIn()){
					ShowUserProfile();
				}else{
					ShowLoginPage();
				}
				break;
			case "profil":
				ShowUserProfile();
				break;
			case "objekt":
				ShowDetailsPage(dummyMain.Datacontrol, x.state.id);
				break;
			case "profil objekta":
			
				break;
			default:
				ShowIndexPage(dummyMain.Datacontrol);
				break;
		}
		}
	}
}