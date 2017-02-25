function openPreescolar(e) {
	var ne = Alloy.createController('preescolarlist').getView();
	ne.open();
}

function openPrimaria(e) 
{
  var op = Alloy.createController('primariaList').getView();
  op.open();	
}
function openSecundaria(e) 
{
  var op = Alloy.createController('secundariaList').getView();
  op.open();	
}

function openBachillerato(e) 
{
  var op = Alloy.createController('grade1highschool').getView();
  op.open();	
}

$.index.open();