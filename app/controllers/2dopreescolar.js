// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var tbl_data = [
    {title:'¡Date una vuelta en bici!', leftImage: '/images/portada1.jpg'}
];

var data = [
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/vueltabici.jpg',
		title:'¡Date una vuelta en bici!'
	},
	{
		height:15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/alarota.jpg',
		title:'¿Como sanar un ala rota?'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/sueno.jpg',
		title:'Canciones para llamar el sueño'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/tomasito.jpg',
		title:'Tomasito y las palabras'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/brujas.jpg',
		title:'¿Porqué hay brujas en las veletas?'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/rico.jpg',
		title:'Mmm, ¡qué rico esta!'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/harold.jpg',
		title:'El cuento de hadas de Harold'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/pelos.jpg',
		title:'Yo contra los mil y un pelos'
	}
];

function doClick(e)
{
	var home = Alloy.createController('index').getView();
    home.open();
}

$.table.setData(data);

$.table.addEventListener('click', function(e) {
	if(e.rowData.title=="¡Date una vuelta en bici!"){
		Ti.App.Properties.setInt('book', 1);
		var Profile = Alloy.createController('2dopreescolarbooks').getView();
		Profile.open();
		//alert("per");
	}else if(e.rowData.title=="¿Como sanar un ala rota?"){
		Ti.App.Properties.setInt('book', 2);
		var Profile = Alloy.createController('2dopreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Canciones para llamar el sueño"){
		Ti.App.Properties.setInt('book', 3);
		var Profile = Alloy.createController('2dopreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Tomasito y las palabras"){
		Ti.App.Properties.setInt('book', 4);
		var Profile = Alloy.createController('2dopreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="¿Porqué hay brujas en las veletas?"){
		Ti.App.Properties.setInt('book', 5);
		var Profile = Alloy.createController('2dopreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Mmm, ¡qué rico esta!"){
		Ti.App.Properties.setInt('book', 6);
		var Profile = Alloy.createController('2dopreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="El cuento de hadas de Harold"){
		Ti.App.Properties.setInt('book', 7);
		var Profile = Alloy.createController('2dopreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Yo contra los mil y un pelos"){
		Ti.App.Properties.setInt('book', 8);
		var Profile = Alloy.createController('2dopreescolarbooks').getView();
		Profile.open();
	}
});

