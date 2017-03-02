// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var tbl_data = [
    {title:'Un circo un poco raro', leftImage: '/images/portada1.jpg'}
];

var data = [
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/hombrecillolluvia.jpg',
		title:'El hombresillo de la lluvia'
	},
	{
		height:15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/papamagico.jpg',
		title:'Mi papá es mágico'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/quecofusion.jpg',
		title:'¡Que confusión!'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/lechucitas.jpg',
		title:'Las lechucitas'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/novoyaleer.jpg',
		title:'No voy a leer este libro'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/tintodonte.jpg',
		title:'El tintodonte'
	}
];

function doClick(e)
{
	var home = Alloy.createController('index').getView();
    home.open();
}

$.table.setData(data);

$.table.addEventListener('click', function(e) {
	if(e.rowData.title=="El hombresillo de la lluvia"){
		Ti.App.Properties.setInt('book', 1);
		var Profile = Alloy.createController('1ropreescolarbooks').getView();
		Profile.open();
		//alert("per");
	}else if(e.rowData.title=="Mi papá es mágico"){
		Ti.App.Properties.setInt('book', 2);
		var Profile = Alloy.createController('1ropreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="¡Que confusión!"){
		Ti.App.Properties.setInt('book', 3);
		var Profile = Alloy.createController('1ropreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Las lechucitas"){
		Ti.App.Properties.setInt('book', 4);
		var Profile = Alloy.createController('1ropreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="No voy a leer este libro"){
		Ti.App.Properties.setInt('book', 5);
		var Profile = Alloy.createController('1ropreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="El tintodonte"){
		Ti.App.Properties.setInt('book', 6);
		var Profile = Alloy.createController('1ropreescolarbooks').getView();
		Profile.open();
	}
});

