'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function projectClick(e) { 
	 // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
   
    jumbotronHeader.text(projectTitle);
   var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    var id = $(containingProject).attr("id").substring(7);
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>You are now reading the description for Project "+id+": <i>"+$(containingProject).find("p").text()+"</i>. <br> You can only see this if you hide the project picture by clicking on it </p></div>");
    } else {
       description.fadeToggle();
    }
    $(containingProject).find("img").fadeToggle();
}	
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("The best way is just to observe the noise of the world.");
		$(".jumbotron p").toggleClass("active");
	});
	$("#submitBtn").click(function(e) {
		var proj = $("#project").val();
		$(proj).animate({ width: $("#width").val() });
		
       		$(proj + " .project-description").text($("#description").val());
    	
	});
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}