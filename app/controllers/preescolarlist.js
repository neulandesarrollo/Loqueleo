// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function openMaternal(e) 
{
	var ne = Alloy.createController('maternalList').getView();
	ne.open();
}

function open1ropreescolar(e) 
{
	var ne = Alloy.createController('1ropreescolar').getView();
	ne.open();
}

function open2dopreescolar(e) 
{
	var ne = Alloy.createController('2dopreescolar').getView();
	ne.open();
}

function open3ropreescolar(e) 
{
	var ne = Alloy.createController('3ropreescolar').getView();
	ne.open();
}