// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function openMaternal(e) {
	var ne = Alloy.createController('maternalList').getView();
	ne.open();
}