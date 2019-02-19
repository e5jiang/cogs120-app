$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#options input').click(addProjectDetails);

}

function callBack(result) {
	console.log(result);
	/*var projectHTML = '<h1>' + result['title'] + '</h1>' +
	'<h2>' + result['date'] + '</h2>' +
	'<img src=' + result['image'] + ' class="detailsImage">' +
	result['summary'];
	$(currID + " .details").html(projectHTML);*/
}

function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var optionID = $(this).closest('.input-group').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	$.get(optionID, callBack);
	console.log("User clicked on " + optionID);
}
