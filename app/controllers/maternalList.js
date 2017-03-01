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

$.table.addEventListener('click', function(e) {
	if(e.rowData.title=="¿Quien soy yo?"){
		Ti.App.Properties.setInt('book', 1);
		var Profile = Alloy.createController('maternalbooks').getView();
		Profile.open();
		//alert("per");
	}else if(e.rowData.title=="Yo grande, tú pequeño"){
		Ti.App.Properties.setInt('book', 2);
		var Profile = Alloy.createController('maternalbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Un circo un poco raro"){
		Ti.App.Properties.setInt('book', 3);
		var Profile = Alloy.createController('maternalbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="¿De qué color es la cebra?"){
		Ti.App.Properties.setInt('book', 4);
		var Profile = Alloy.createController('maternalbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Había una vez una nube"){
		Ti.App.Properties.setInt('book', 5);
		var Profile = Alloy.createController('maternalbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="¿Dónde está la estrella de mar?"){
		Ti.App.Properties.setInt('book', 6);
		var Profile = Alloy.createController('maternalbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="El libro que canta"){
		Ti.App.Properties.setInt('book', 7);
		var Profile = Alloy.createController('maternalbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="El señor cosquillas"){
		Ti.App.Properties.setInt('book', 8);
		var Profile = Alloy.createController('maternalbooks').getView();
		Profile.open();
	}
});