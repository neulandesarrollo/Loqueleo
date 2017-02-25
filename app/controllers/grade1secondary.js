// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var tbl_data = [
    {title:'Mañanas de escuela', leftImage: '/images/portada1.jpg'}
];

var data = [ 
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/mananas.jpg',
		title:'Mañanas de escuela'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/todobien.jpg',
		title:'Todo bien, todo bien'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/chimpances.jpg',
		title:'Los chimpancés miran a los ojos'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/exploto.jpg',
		title:'El día que explotó la abuela'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/danny.jpg',
		title:'Danny, el campeón del mundo'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/momo.jpg',
		title:'Momo'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/cero.jpg',
		title:'El señor del Cero'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/bermejo.jpg',
		title:'A sangre y fuego. La historia del pirata Bermejo'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/mitos.jpg',
		title:'Mitos y recuerdos'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/panteon.jpg',
		title:'El caso del cerro Panteón'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/burros.jpg',
		title:'Los secuestradores de burros'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/ciencia.jpg',
		title:'Mujeres de ciencia'
	}
];


function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}

$.table.setData(data);