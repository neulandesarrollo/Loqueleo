// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var tbl_data = [
    {title:'Lorem ipsum', leftImage: '/images/portada1.jpg'}
];

var data = [
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Lorem ipsum'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Lorem'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/portada1.jpg',
		title:'Lorem'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Lorem'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Lorem'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Lorem'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'lorem'
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