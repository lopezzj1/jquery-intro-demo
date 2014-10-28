/* app.js
* main script file for our little application
* */

"use strict";


//select all navigation links
var allNavLinks = $('nav a');

//select all imgs
var allImgs = $('img');

//select all sections
var allSections = $('section');

function onReady() {

	//add attribute of target with value blank to each nav link
	//allNavLinks.attr('target', '_blank');
	//allNavLinks.addClass('awesomesauce');

	//animations
	//$('nav').slideUp(2000);
	//$('nav').slideDown();
	allSections.hide();

}

allImgs.hover(function() {
	//console.log($(this));
	$(this).addClass('awesomesauce');

});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

allNavLinks.click(function() {
	//'this' is a plain element. you can't do a jquery on just a plain element
	console.log(this);

	//the cooler jQuery this - it's totally money
	console.log($(this).attr('href'));

	//acts on the jQuery object containing this element
	$(this).addClass('awesomesauce');

	//$($(this).attr('href')).fadeIn(1000);

	//acts on the jQuery object containing this element
	allSections.hide();
	$($(this).attr('href')).fadeToggle(1000);
});

$(onReady);