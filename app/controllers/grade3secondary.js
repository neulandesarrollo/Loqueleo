// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var tbl_data = [
    {title:'El diablo en la botella', leftImage: '/images/portada1.jpg'}
];

var data = [ 
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/diablobotella.jpg',
		title:'El diablo en la botella'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/ponleplay.jpg',
		title:'Ponle play'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/alambre.jpg',
		title:'Las chicas de alambre'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/rebeldes.jpg',
		title:'Rebeldes'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/ojosnoche.jpg',
		title:'Los ojos de la noche'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/garrajaguar.jpg',
		title:'Garra de jaguar'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/vueltacasa.jpg',
		title:'Vuelta a casa'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/tepozteco.jpg',
		title:'La panza del Tepozteco'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/hamlet.jpg',
		title:'Hamlet'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/roald.jpg',
		title:'Los mejores relatos de Roald Dahl'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/familias.jpg',
		title:'Familias'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/pesadilla.jpg',
		title:'Noches de pesadilla'
	}
];


function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}

$.table.setData(data);