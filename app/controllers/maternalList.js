// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var tbl_data = [{
	title : 'Un circo un poco raro',
	leftImage : '/images/portada1.jpg'
}];

var data = [{
	color : "#424242",
	font : {
		fontSize : 14
	},
	leftImage : '/images/quiensoy.jpg',
	title : '¿Quien soy yo?'
}, {
	height : 15
}, {
	color : "#424242",
	font : {
		fontSize : 14
	},
	leftImage : '/images/grandepeque.jpg',
	title : 'Yo grande, tú pequeño'
}, {
	height : 15
}, {
	color : "#424242",
	font : {
		fontSize : 14
	},
	leftImage : '/images/circoraro.jpg',
	title : 'Un circo un poco raro'
}, {
	height : 15
}, {
	color : "#424242",
	font : {
		fontSize : 14
	},
	leftImage : '/images/cebra.jpg',
	title : '¿De qué color es la cebra?'
}, {
	height : 15
}, {
	color : "#424242",
	font : {
		fontSize : 14
	},
	leftImage : '/images/habianube.jpg',
	title : 'Había una vez una nube'
}, {
	height : 15
}, {
	color : "#424242",
	font : {
		fontSize : 14
	},
	leftImage : '/images/estrellamar.jpg',
	title : '¿Dónde está la estrella de mar?'
}, {
	height : 15
}, {
	color : "#424242",
	font : {
		fontSize : 14
	},
	leftImage : '/images/librocanta.jpg',
	title : 'El libro que canta'
}, {
	height : 15
}, {
	color : "#424242",
	font : {
		fontSize : 14
	},
	leftImage : '/images/cosquillas.jpg',
	title : 'El señor cosquillas'
}];

function doClick(e) {
	var home = Alloy.createController('index').getView();
	home.open();
}

$.table.setData(data); 