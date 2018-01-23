var _facility_facilityID = null;

function ShowFacilityPage(datacontrol, id){
	if(datacontrol.IsLoggedIn()){
		if(id == null || id == undefined){
			_facility_facilityID = null;
			$("#mainContent").html(getNewFacilityHtml());
		}else{
			_facility_facilityID = id;
			$("#mainContent").html(getFacilityHtml(datacontrol.GetFacility(id)));
		}
	}else{
		mainProg.GoToPage("index");
	}
}

function getNewFacilityHtml(){
	var retVal = "";
	retVal += '<div class="row">';
	retVal += '<div class="col-lg-12" style="padding: 15px;">';
	
	retVal += '<div class="form-group row">';
	retVal += '<label for="facility_name" class="col-sm-2 col-form-label">Ime:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<input id="facility_name" type="text" class="form-control">';
	retVal += '</div>';
	retVal += '</div>';
	
	retVal += '<div class="form-group row">';
	retVal += '<label for="facility_decription" class="col-sm-2 col-form-label">Opis:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<textarea id="facility_decription" rows="10" class="form-control"></textarea>';
	retVal += '</div>';
	retVal += '</div>';
	
	retVal += '<div class="form-group row">';
	retVal += '<label for="facility_decription" class="col-sm-2 col-form-label">Galerija:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<label class="btn btn-secondary btn-sm">';
	retVal += 'Odaberi slike...';
	retVal += '<input type="file" style="display:none;" />';
	retVal += '</label>';
	retVal += '</div>';
	retVal += '</div>';
	
	retVal += '<div class="form-group row">';
	retVal += '<label for="facility_decription" class="col-sm-2 col-form-label">Ja sam vlasnik:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<input id="facility_isOwner" type="checkbox" style="margin-top: 12px;"/>';
	retVal += '</div>';
	retVal += '</div>';
	
	retVal += '<button type="button" class="btn btn-secondary" onclick="SaveNewFacility();" style="margin-right: 15px;">Spremi</button>';
	
	retVal += '</div>';
    retVal += '</div>';
	
	return retVal;
}

function getFacilityHtml(facility){
	var retVal = "";
	retVal += '<div class="row">';
	retVal += '<div class="col-lg-12" style="padding: 15px;">';
	
	retVal += '<div class="form-group row">';
	retVal += '<label for="facility_name" class="col-sm-2 col-form-label">Ime:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<input id="facility_name" type="text" class="form-control" value="' + facility.Name + '"/>';
	retVal += '</div>';
	retVal += '</div>';
	
	retVal += '<div class="form-group row">';
	retVal += '<label for="facility_decription" class="col-sm-2 col-form-label">Opis:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<textarea id="facility_decription" rows="10" class="form-control">' + facility.Description + '</textarea>';
	retVal += '</div>';
	retVal += '</div>';
	
	retVal += '<div class="form-group row">';
	retVal += '<label for="facility_decription" class="col-sm-2 col-form-label">Galerija:</label>';
	retVal += '<div class="col-sm-10">';
	retVal += '<label class="btn btn-secondary btn-sm">';
	retVal += 'Odaberi slike...';
	retVal += '<input type="file" style="display:none;" />';
	retVal += '</label>';
	retVal += '</div>';
	retVal += '</div>';
	
	retVal += '<button type="button" class="btn btn-secondary" onclick="SaveFacility();" style="margin-right: 15px;">Spremi</button>';
	
	retVal += '</div>';
    retVal += '</div>';
	
	return retVal;
}

function SaveNewFacility(){
	var newFac = new FacilityModel();
	
	newFac.ID = guid();
	newFac.Name = $("#facility_name").val();
	newFac.Description = $("#facility_decription").val();
	newFac.OIB = "";
	newFac.Tags = [];
	newFac.GaleryID = null;
	newFac.Owner = $("#facility_isOwner").is(":checked") ? mainProg.Datacontrol.GetLoggedInUser().Login : "";
	
	mainProg.Datacontrol.RegisterFacility(newFac);
	
	ShowFacilityPage(mainProg.Datacontrol, newFac.ID);
}

function SaveFacility(){
	var newFac = mainProg.Datacontrol.GetFacilityForUser(mainProg.Datacontrol.GetLoggedInUser().Login, _facility_facilityID);
	
	if(newFac != null){
		newFac.Name = $("#facility_name").val();
		newFac.Description = $("#facility_decription").val();
	}
	
	ShowFacilityPage(mainProg.Datacontrol, newFac.ID);
}