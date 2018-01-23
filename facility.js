function ShowFacilityPage(datacontrol, id){
	$("#mainContent").html(getFacilityHtml(datacontrol.GetFacility(id)));
}

function getFacilityHtml(facility){
	var retVal = "";
	retVal += '<div class="row">';
	retVal += '<div class="col-lg-12" style="padding: 15px;">';
	
	retVal += '<div class="form-group">';
	retVal += '<label for="facility_name">Ime:</label>';
	retVal += '<input id="facility_name" type="text" class="form-control">';
	retVal += '</div>';
	
	retVal += '<div class="form-group">';
	retVal += '<label for="facility_decription">Opis:</label>';
	retVal += '<textarea id="facility_decription" rows="10" class="form-control"></textarea>';
	retVal += '</div>';
	
	retVal += '</div>';
    retVal += '</div>';
	
	return retVal;
}