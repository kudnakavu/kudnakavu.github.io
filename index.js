function ShowIndexPage(datacontrol, searchValue){
	var tmpHtml = "";
	var fac = datacontrol.GetFacilities();
	
	if(searchValue != undefined && searchValue != null && searchValue.length > 0){
		fac = $.grep(fac, function(x) { 
		
		//if(searchValue.indexOf(" ") > -1){
		//	return $.grep(searchValue.split(" "), function(y){
		//		return x.Name.toLowerCase().indexOf(y.toLowerCase()) > -1 || x.Description.toLowerCase().indexOf(y.toLowerCase()) > -1; 
		//	}).length > 0; 
		//}else{
			return x.Name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || x.Description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1; 
		//}
		});
	}
	
	tmpHtml = "<div class='row'>";
	for(var i = 0; i < fac.length; i++){
		tmpHtml += getIndexHtml(fac[i]);
		if(i%2 == 1){
			tmpHtml+="</div><div class='row'>";
		}
	}
	tmpHtml += "</div>";
	
	$("#mainContent").html(tmpHtml);
}

function getIndexHtml(facility){
	var retVal = '<div class="col-lg-6" style="padding: 15px; cursor: pointer;" onclick="mainProg.GoToPage(\'objekt\', \'' + facility.ID + '\');">';
	retVal += '<div class="card">';
	retVal += '<div class="card-header">';
	retVal += '<h5>' + facility.Name + '</h5>';
	retVal += '</div>';
	retVal += '<div class="card-block">';
	retVal += '<img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">';
				
	retVal += '<p style="max-height: 150px; overflow-y: hidden;">' + facility.Description + '</p>';
	retVal += '</div>';
	retVal += '</div>';
	retVal += '</div>';
	
	return retVal;
}