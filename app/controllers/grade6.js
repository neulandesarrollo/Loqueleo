// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var tbl_data = [
    {title:'Tú no existes', leftImage: '/images/portada1.jpg'}
];

var data = [ 
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/existes.jpg',
		title:'Tú no existes'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/lugano.jpg',
		title:'Una semana en Lugano'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/griega.jpg',
		title:'Dioses y héroes de la mitología griega'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/peces.jpg',
		title:'Hay palabras que los peces no entienden'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/reyes.jpg',
		title:'Cuentos de navidad y reyes'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/cabeza.jpg',
		title:'El hombre sin cabeza'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/moldavita.jpg',
		title:'Moldavita un visitante agradable'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/computadora.jpg',
		title:'Nunca confíes en una computadora'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/futbolista.jpg',
		title:'El caso del futbolista enmascarado'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/bonachon.jpg',
		title:'El gran gigante bonachon'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/terabitia.jpg',
		title:'Puente a Terabitia'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/currumpaw.jpg',
		title:'Los lobos de currumpaw'
	}
];


function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}

$.table.setData(data);