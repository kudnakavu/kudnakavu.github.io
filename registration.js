function ShowRegistrationPage(){
	var tmpHtml = "";
	
	tmpHtml += '<div class="row">';
	tmpHtml += '<div class="col-lg-12 text-center" style="padding: 15px;">';
	
	tmpHtml += '<div class="form-group">';
	tmpHtml += '<label for="registration_firstname">Ime:</label>';
	tmpHtml += '<input id="registration_firstname" type="text" class="form-control text-center">';
	tmpHtml += '</div>';
	tmpHtml += '<div class="form-group">';
	tmpHtml += '<label for="registration_lastname">Prezime:</label>';
	tmpHtml += '<input id="registration_lastname" type="text" class="form-control text-center">';
	tmpHtml += '</div>';
	tmpHtml += '<div class="form-group">';
	tmpHtml += '<label for="registration_email">E-Mail:</label>';
	tmpHtml += '<input id="registration_email" type="text" class="form-control text-center">';
	tmpHtml += '</div>';
	tmpHtml += '<div class="form-group">';
	tmpHtml += '<label for="registration_password">Lozinka:</label>';
	tmpHtml += '<input id="registration_password" type="password" class="form-control text-center">';
	tmpHtml += '</div>';
	tmpHtml += '<div class="form-group">';
	tmpHtml += '<label for="registration_confirmpass">Potvrda lozinke:</label>';
	tmpHtml += '<input id="registration_confirmpass" type="password" class="form-control text-center">';
	tmpHtml += '</div>';
	//tmpHtml += '<button type="button" class="btn btn-secondary" onclick="ShowLoginPage();" style="margin-right: 15px;">Prijava</button>';
	tmpHtml += '<button type="button" class="btn btn-secondary" onclick="RegisterUser();">Registriraj se</button>';
	
	tmpHtml += '</div>';
    tmpHtml += '</div>';
	
	$("#mainContent").html(tmpHtml);
}

function ShowLoginPage(){
	var tmpHtml = "";
	
	tmpHtml += '<div class="row">';
	tmpHtml += '<div class="col-lg-12 text-center" style="padding: 15px;">';
	tmpHtml += '<div class="form-group">';
	tmpHtml += '<label for="login_email">E-Mail:</label>';
	tmpHtml += '<input id="login_email" type="text" class="form-control text-center">';
	tmpHtml += '</div>';
	tmpHtml += '<div class="form-group">';
	tmpHtml += '<label for="login_password">Lozinka:</label>';
	tmpHtml += '<input id="login_password" type="password" class="form-control text-center">';
	tmpHtml += '</div>';
	tmpHtml += '<button type="button" class="btn btn-secondary" onclick="LoginUser();">Prijava</button>';
	tmpHtml += '</div>';
    tmpHtml += '</div>';
	
	$("#mainContent").html(tmpHtml);
}

function RegisterUser(){
	var tmpUser = new UserModel();
	tmpUser.ID = guid();
	tmpUser.Login = $("#registration_email").val().trim();
	tmpUser.Password = $("#registration_password").val() == $("#registration_confirmpass").val() ? $("#registration_password").val() : $("#registration_password").val();
	tmpUser.EMail = $("#registration_email").val();
	tmpUser.Name = $("#registration_firstname").val();
	tmpUser.LastName = $("#registration_lastname").val();
	tmpUser.Tags = [];
	tmpUser.Status = "user";
	tmpUser.Description = "";
	
	if(tmpUser.Login.length > 0 && tmpUser.Password.length > 0){
		if(mainProg.Datacontrol.GetUser(tmpUser.Login) != null){
			alert("Korisnik je već registriran!");
		}else{
			mainProg.Datacontrol.RegisterUser(tmpUser);
			
			mainProg.Datacontrol.LogIn(tmpUser.Login, tmpUser.Password);
			mainProg.GoToPage("profil");
		}
	}else{
		alert("E-Mail i lozinka moraju biti ispunjeni!");
	}
}

function LoginUser(){
	var user = $("#login_email").val();
	var pass = $("#login_password").val();
	
	mainProg.Datacontrol.LogIn(user, pass);
	
	if(mainProg.Datacontrol.IsLoggedIn()){
		mainProg.GoToPage("index");
	}else{
		alert("E-Mail ili lozinka nisu ispravni!");
	}
}