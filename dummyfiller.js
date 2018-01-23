function FillDummyData(datacontrol){
	fillFacilites(datacontrol);
}

function fillFacilites(datacontrol){
	var tmpFac = null;
	
	tmpFac = new FacilityModel();
	
	tmpFac.ID = "f1";
	tmpFac.Name = "Kafić 'U zdravlje'";
	tmpFac.Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.";
	tmpFac.OIB = "";
	tmpFac.Tags = [];
	tmpFac.GaleryID = null;
	
	datacontrol.RegisterFacility(tmpFac);
	
	tmpFac = new FacilityModel();
	
	tmpFac.ID = "f2";
	tmpFac.Name = "Kafić";
	tmpFac.Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.";
	tmpFac.OIB = "";
	tmpFac.Tags = [];
	tmpFac.GaleryID = null;
	
	datacontrol.RegisterFacility(tmpFac);
	
	tmpFac = new FacilityModel();
	
	tmpFac.ID = "f3";
	tmpFac.Name = "Kafić 'Birc'";
	tmpFac.Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.";
	tmpFac.OIB = "";
	tmpFac.Tags = [];
	tmpFac.GaleryID = null;
	
	datacontrol.RegisterFacility(tmpFac);
	
	tmpFac = new FacilityModel();
	
	tmpFac.ID = "f4";
	tmpFac.Name = "Restoran";
	tmpFac.Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.";
	tmpFac.OIB = "";
	tmpFac.Tags = [];
	tmpFac.GaleryID = null;
	
	datacontrol.RegisterFacility(tmpFac);
	tmpFac = new FacilityModel();
	
	tmpFac.ID = "f5";
	tmpFac.Name = "Slastičarna";
	tmpFac.Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.";
	tmpFac.OIB = "";
	tmpFac.Tags = [];
	tmpFac.GaleryID = null;
	
	datacontrol.RegisterFacility(tmpFac);
	
	tmpFac = new FacilityModel();
	
	tmpFac.ID = "f6";
	tmpFac.Name = "Kafić";
	tmpFac.Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.";
	tmpFac.OIB = "";
	tmpFac.Tags = [];
	tmpFac.GaleryID = null;
	
	datacontrol.RegisterFacility(tmpFac);
}

