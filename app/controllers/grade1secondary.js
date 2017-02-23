// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var tbl_data = [
    {title:'Mujeres de ciencia', leftImage: '/images/portada1.jpg'}
];

var data = [
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Mujeres de ciencia'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Los chimpancés miran a los ojos'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/portada1.jpg',
		title:'El día que explotó la abuela'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Danny, el campeón del mundo'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'El señor del cero'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'A sangre y fuego. La historia del pirata Bermejo'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'El detective Lucas'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Lorem'
	}
];


function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}

$.table.setData(data);