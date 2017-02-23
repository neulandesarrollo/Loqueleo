// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function openGrade1highschool(e) 
{
	var op = Alloy.createController('grade1highschool').getView();
	op.open();
}	

function openGrade2highschool(e) 
{
	var op = Alloy.createController('grade2highschool').getView();
	op.open();
}	
function openGrade3highschool(e) 
{
	var op = Alloy.createController('grade3highschool').getView();
	op.open();
}	

function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}