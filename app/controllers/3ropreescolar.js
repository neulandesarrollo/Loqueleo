// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var tbl_data = [
    {title:'Antes de mí', leftImage: '/images/portada1.jpg'}
];

var data = [
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/antesdemi.jpg',
		title:'Antes de mí'
	},
	{
		height:15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/unlibro.jpg',
		title:'Un libro'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},  
		leftImage: '/images/fiesta.jpg',
		title:'La fiesta sorpresa'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/lagoness.jpg',
		title:'Anabel y el monstruo del lago Ness'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/lobos.jpg',
		title:'Donde viven los lobos feroces'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/yanka.jpg',
		title:'Yanka, yanka'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/verduras.jpg',
		title:'Ya me llené de verduras'
	},
	{
		height: 15
	},
	{
		color: "#424242",
		font:{fontSize:14},
		leftImage: '/images/saposepo.jpg',
		title:'Días con sapo y sepo'
	}
];

function doClick(e)
{
	var home = Alloy.createController('index').getView();
    home.open();
}

$.table.setData(data);

$.table.addEventListener('click', function(e) {
	if(e.rowData.title=="Antes de mí"){
		Ti.App.Properties.setInt('book', 1);
		var Profile = Alloy.createController('3ropreescolarbooks').getView();
		Profile.open();
		//alert("per");
	}else if(e.rowData.title=="Un libro"){
		Ti.App.Properties.setInt('book', 2);
		var Profile = Alloy.createController('3ropreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="La fiesta sorpresa"){
		Ti.App.Properties.setInt('book', 3);
		var Profile = Alloy.createController('3ropreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Anabel y el monstruo del lago Ness"){
		Ti.App.Properties.setInt('book', 4);
		var Profile = Alloy.createController('3ropreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Donde viven los lobos feroces"){
		Ti.App.Properties.setInt('book', 5);
		var Profile = Alloy.createController('3ropreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Yanka, yanka"){
		Ti.App.Properties.setInt('book', 6);
		var Profile = Alloy.createController('3ropreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Ya me llené de verduras"){
		Ti.App.Properties.setInt('book', 7);
		var Profile = Alloy.createController('3ropreescolarbooks').getView();
		Profile.open();
	}else if(e.rowData.title=="Días con sapo y sepo"){
		Ti.App.Properties.setInt('book', 8);
		var Profile = Alloy.createController('3ropreescolarbooks').getView();
		Profile.open();
	}
});
