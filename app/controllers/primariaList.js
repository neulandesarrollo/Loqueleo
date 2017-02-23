// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function openGrade1(e) 
{
	var op = Alloy.createController('grade1').getView();
	op.open();
}	

function openGrade2(e) 
{
	var op = Alloy.createController('grade2').getView();
	op.open();
}

function openGrade3(e) 
{
	var op = Alloy.createController('grade3').getView();
	op.open();
}

function openGrade4(e) 
{
	var op = Alloy.createController('grade4').getView();
	op.open();
}

function openGrade5(e) 
{
	var op = Alloy.createController('grade5').getView();
	op.open();
}

function openGrade6(e) 
{
	var op = Alloy.createController('grade6').getView();
	op.open();
}

function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}
	