// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var tbl_data = [
    {title:'Mi casa fueron mis palabras', leftImage: '/images/portada1.jpg'}
];

var data = [
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/casapalabras.jpg',
		title:'Mi casa fueron mis palabras'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/herida.jpg',
		title:'Es herida que duele y no se siente'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/vidasueno.jpg',
		title:'La vida es sueño'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/diariosadan.jpg',
		title:'Diarios de Adán y Eva'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/drjekyll.jpg',
		title:'El extraño caso del Dr.Jekyll y Mr.Hyde'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/invisiblebachillerato.jpg',
		title:'El hombre invisible'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/nubescielo.jpg',
		title:'Nubes en el cielo mexicano'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/donquijote.jpg',
		title:'Don Quijote de la mancha'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/nave.jpg',
		title:'Después apareció una nave'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/romeoyjulieta.jpg',
		title:'Romeo y Julieta'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/garrabachillerato.jpg',
		title:'Garra de jaguar'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/macbeth.jpg',
		title:'Macbeth'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/comoguste.jpg',
		title:'Como les guste'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/juliocesar.jpg',
		title:'Julio Cesar'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/cleopatra.jpg',
		title:'Antonio y Cleopatra'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/trasnoche.jpg',
		title:'Trasnoche'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/dog.jpg',
		title:'Perro Dog'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/miszapatos.jpg',
		title:'El ciudadano en mis zapatos'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/pasionfutbol.jpg',
		title:'Pasión futbol'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/tunelpajaros.jpg',
		title:'El túnel de los pájaros muertos'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/lobocimarron.jpg',
		title:'Lobo cimarrón'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/monarisa.jpg',
		title:'La mona risa'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/roaldbachillerato.jpg',
		title:'Roald Dahl'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/ojosnoche.jpg',
		title:'Los ojos de la noche'
	}
];


function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}

$.table.setData(data);