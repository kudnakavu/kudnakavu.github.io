function ShowUserProfile(){
	if(mainProg.Datacontrol.IsLoggedIn()){
		$("#mainContent").html(getUserProfile());
	}else{
		$("#mainContent").html("");
	}
}

function getUserProfile(){
	var retVal = "";
	var user = mainProg.Datacontrol.GetLoggedInUser();
	var facs = mainProg.Datacontrol.GetFacilitiesForUser(user.Login);
	
	retVal += '<div class="row" style="margin-top: 15px;">';
	
	retVal += '<div class="col-lg-3">';
	retVal += '<label>';
	retVal += '<img class="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="">';
	retVal += '<input type="file" style="display:none;" />';
	retVal += '</label>';
	retVal += '</div>';
	
	retVal += '<div class="col-lg-9">';
	
	retVal += '<div class="form-group row">';
	retVal += '<label for="profile_firstname" class="col-sm-2 col-form-label">Ime:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<input id="profile_firstname" type="text" class="form-control" value="' + user.Name + '">';
	retVal += '</div>';
	retVal += '</div>';
	retVal += '<div class="form-group row">';
	retVal += '<label for="profile_lastname" class="col-sm-2 col-form-label">Prezime:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<input id="profile_lastname" type="text" class="form-control" value="' + user.LastName + '">';
	retVal += '</div>';
	retVal += '</div>';
	retVal += '<div class="form-group row">';
	retVal += '<label for="profile_password" class="col-sm-2 col-form-label">Lozinka:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<input id="profile_password" type="text" class="form-control">';
	retVal += '</div>';
	retVal += '</div>';
	retVal += '<div class="form-group row">';
	retVal += '<label for="profile_confirmpass" class="col-sm-2 col-form-label">Potvrda lozinke:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<input id="profile_confirmpass" type="text" class="form-control">';
	retVal += '</div>';
	retVal += '</div>';
	retVal += '<button type="button" class="btn btn-secondary" onclick="SaveProfile();" style="margin-right: 15px;">Spremi</button>';
	
	retVal += '</div>';
	
	retVal += '</div>';
		
	if(facs != null){
		for(var i = 0; i < facs.length; i++){
			retVal += '<hr />';
	
			retVal += '<div class="row" style="margin-top: 15px; cursor: pointer;" onclick="mainProg.GoToPage(\'profil objekta\', \'' + facs[i].ID + '\');">';
			
			retVal += '<div class="col-lg-3">';
			retVal += '<img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">';
			retVal += '<h5>' + facs[i].Name + '</h5>';
			retVal += '</div>';
			
			retVal += '<div class="col-lg-9">';
			retVal += '<p>' + facs[i].Description + ' </p>';
			retVal += '</div>';
			
			retVal += '</div>';
		}
	}
	
	return retVal;
}

function SaveProfile(){
	var fname = $("#profile_firstname").val().trim();
	var lname = $("#profile_lastname").val().trim();
	var pass = $("#profile_password").val();
	var cpass = $("#profile_confirmpass").val();
	var user = mainProg.Datacontrol.GetLoggedInUser();
	
	user.Name = fname;
	user.LastName = lname;
	
	if(pass.length > 0 && pass == cpass){
		user.Password = pass;
		
		alert("Lozinka promijenjena");
	}else{
		alert("Profil spremljen");
	}
	
	$("#profile_password").val("");
	$("#profile_confirmpass").val("");
}