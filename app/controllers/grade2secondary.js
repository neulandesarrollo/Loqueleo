// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var tbl_data = [
    {title:'El hombre invisible', leftImage: '/images/portada1.jpg'}
];

var data = [ 
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/invisible.jpg',
		title:'El hombre invisible'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/cientifico.jpg',
		title:'El viajero cientifico'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/cuentas.jpg',
		title:'Ajustemos cuentas'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/nomfuego.jpg',
		title:'Los nombres de fuego'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/paloma.jpg',
		title:'Paloma'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/pluton.jpg',
		title:'Cuando plutón era un planeta'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/leycalle.jpg',
		title:'La ley de la calle'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/skogland.jpg',
		title:'Skogland'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/terror.jpg',
		title:'Los mejores relatos de terror'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/escarabajo.jpg',
		title:'El escarabajo de oro'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/cartasrey.jpg',
		title:'Cartas al rey de la cabina'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/fosalobo.jpg',
		title:'La fosa del lobo'
	}
];


function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}

$.table.setData(data);