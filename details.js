var _details_currentFacilityID = "";

function ShowDetailsPage(datacontrol, id){
	_details_currentFacilityID = id;
	
	$("#mainContent").html(
		getDetailsHtml(datacontrol.GetFacility(id)) +
		getDetailUserOptionsHtml(datacontrol) +
		getDetailsReviewsHtml(datacontrol.GetReviews(id))
	);
}

function getDetailsHtml(facility){
	var retVal = "";
	retVal += '<div class="row">';
	retVal += '<div class="col-lg-12" style="padding: 15px;">';
	retVal += '<div class="card">';
	retVal += '<div class="card-header text-center">';
	retVal += '<h5>' + facility.Name + '</h5>';
	retVal += '</div>';
	retVal += '<div class="card-block">';
	retVal += '<div class="text-center">';
	retVal += '<img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">';
	retVal += '</div>';

	retVal += '<hr>';
				
	retVal += '<p>' + facility.Description + '</p>';
	retVal += '</div>';
	retVal += '</div>';
	retVal += '</div>';
    retVal += '</div>';
	
	return retVal;
}

function getDetailUserOptionsHtml(datacontrol){
	var retVal = "";
	
	if(datacontrol.IsLoggedIn()){
		retVal += '<div class="row">';
		retVal += '<div class="col-lg-12" style="padding: 15px;">';
		
		retVal += '<div id="addCommentButton">';
		retVal += '<button type="button" class="btn btn-secondary btn-sm" onclick="detailsShowComment()">Napiši komentar</button>';
		retVal += '</div>';
		
		retVal += '<div id="addCommentTextArea" style="display:none;">';
		retVal += '<div style="display: inline-block;">';
		retVal += '<button type="button" class="btn btn-secondary btn-sm" onclick="detailsHideComment();" style="margin: 0px 5px 5px 0px;">Odustani</button>';
		retVal += '<button type="button" class="btn btn-secondary btn-sm" onclick="detailsSaveComment();" style="margin: 0px 5px 5px 0px;">Pošalji</button>';
		retVal += '</div>';
		retVal += '<textarea id="commentText" row="10" style="width: 100%;"></textarea>';
		retVal += '</div>';
		
		retVal += '</div>';
		retVal += '</div>';
	}
	
	return retVal;
}

function getDetailsReviewsHtml(revs){
	var retVal = "";
	var tmpUser = null;
	var userName = "";
	
	if(revs != null){
		for(var i = 0; i < revs.length; i++){
			userName = revs[i].User;
			
			if(userName != null){
				tmpUser = mainProg.Datacontrol.GetUser(userName);
				
				userName = (tmpUser.Name == null ? "" : tmpUser.Name + " ") + (tmpUser.LastName == null ? "" : tmpUser.LastName);
				
				if(userName.length == 0){
					userName = revs[i].User;
				}
			}else{
				userName = "";
			}
			
			retVal += "<hr/>";
			retVal += '<div class="row" style="padding: 15px;">';
			
			retVal += '<div class="col-lg-3">';
			retVal += '<img class="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="">';
			retVal += '<h5>' + userName + '</h5>';
			retVal += '</div>';
	
			retVal += '<div class="col-lg-9">';
			retVal += '<p>' + revs[i].Text.replace("\r\n", "<br/>").replace("\n", "<br/>") + '</p>';
			retVal += '</div>';
			
			retVal += '</div>';
		}
	}
	
	return retVal;
}

function detailsShowComment(){
	$("#commentText").val("");
	$("#addCommentTextArea").show();
	$("#addCommentButton").hide();
}

function detailsHideComment(){
	$("#addCommentButton").show();
	$("#addCommentTextArea").hide();
}

function detailsSaveComment(){
	var tmpComm = $("#commentText").val();
	var rev = null;
	
	if(tmpComm.length > 0){
		if(mainProg.Datacontrol.IsLoggedIn()){
			rev = new ReviewModel();
			
			rev.ID = guid();
			rev.User = mainProg.Datacontrol.GetLoggedInUser().Login;
			rev.FacilityID = _details_currentFacilityID;
			rev.Text = tmpComm;
			rev.Score = 0;
			
			mainProg.Datacontrol.AddReview(rev);
			ShowDetailsPage(mainProg.Datacontrol, _details_currentFacilityID);
		}
	}
}