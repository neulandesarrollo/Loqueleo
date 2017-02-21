// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var tbl_data = [
    {title:'Un circo un poco raro', leftImage: '/images/portada1.jpg'}
];

var data = [
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Un circo un poco raro'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'El hombresillo de la lluvia'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/portada1.jpg',
		title:'¿Dónde está la estrella de mar?'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'¿Quién soy yo?'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'No voy a leer este libro'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'Mi papá es mágico'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/portada1.jpg',
		title:'El Libro que canta'
	}
];

$.table.setData(data);