// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function openGrade1secondary(e) 
{
	var op = Alloy.createController('grade1secondary').getView();
	op.open();
}	

function openGrade2secondary(e) 
{
	var op = Alloy.createController('grade2secondary').getView();
	op.open();
}

function openGrade3secondary(e) 
{
	var op = Alloy.createController('grade3secondary').getView();
	op.open();
}


function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}
	