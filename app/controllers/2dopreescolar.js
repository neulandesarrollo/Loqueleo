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