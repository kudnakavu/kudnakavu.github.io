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
	
	retVal += '<div class="row" style="margin-top: 15px;">';
	
	retVal += '<div class="col-lg-3">';
	retVal += '<label>';
	retVal += '<img class="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="">';
	retVal += '<input type="file" style="display:none;" />';
	retVal += '</label>';
	retVal += '</div>';
	
	retVal += '<div class="col-lg-9">';
	
	retVal += '<div class="form-group">';
	retVal += '<label for="profile_firstname">Ime:</label>';
	retVal += '<input id="profile_firstname" type="text" class="form-control" value="' + user.Name + '">';
	retVal += '</div>';
	retVal += '<div class="form-group">';
	retVal += '<label for="profile_lastname">Prezime:</label>';
	retVal += '<input id="profile_lastname" type="text" class="form-control" value="' + user.LastName + '">';
	retVal += '</div>';
	retVal += '<div class="form-group">';
	retVal += '<label for="profile_password">Lozinka:</label>';
	retVal += '<input id="profile_password" type="text" class="form-control">';
	retVal += '</div>';
	retVal += '<div class="form-group">';
	retVal += '<label for="profile_confirmpass">Potvrda lozinke:</label>';
	retVal += '<input id="profile_confirmpass" type="text" class="form-control">';
	retVal += '</div>';
	retVal += '<button type="button" class="btn btn-secondary" onclick="SaveProfile();" style="margin-right: 15px;">Spremi</button>';
	
	retVal += '</div>';
	retVal += '';
	retVal += '';
	retVal += '';
	
	retVal += '</div>';
	
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