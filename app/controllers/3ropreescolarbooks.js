// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var book = Ti.App.Properties.getInt('book');

function openOne(e) {
	$.scrollView.visible = true;
	$.webview.visible = false;
	$.btnficha.backgroundImage = "/images/pestana-hover-ficha-tecnica.jpg";
	$.btnmuestra.backgroundImage = "/images/pestana-ficha-tecnica.jpg";
}

function openTwo(e) {
	$.scrollView.visible = false;
	$.webview.visible = true;
	$.btnficha.backgroundImage = "/images/pestana-ficha-tecnica.jpg";
	$.btnmuestra.backgroundImage = "/images/pestana-hover-ficha-tecnica.jpg";
}

var osname = Ti.Platform.osname;
// Booleans identifying the platforms are handy too
var isAndroid = (osname=='android') ? true : false;

if(book == 1){
	$.imagePortada.image = '/images/antesdemi.jpg';
	$.nameLbl.text = 'Antes de mí';
	$.autorLbl.text = 'Flor Aguilera';
	$.ilustradorLbl.text = 'Leonor Pérez';
	$.pagesBlkLbl.text = '40 páginas';
	$.countryBlkLbl.text = 'México';
	$.typeBlkLbl.text = 'Cuentos de la vida cotidiana';
	$.textField.text = 'RESEÑA\n\nUn niño encuentra un álbum de fotos en un viejo armario. Es muy bonito, pero a él le provoca un poco de temor. ¿Por qué él no sale en ninguna foto? ¿Dónde estaba?'+ 
	' Su mamá le explica que todo lo que ve en esas fotos sucedió antes de que él naciera. Pero el niño no logra imaginar un mundo sin su presencia. ¿A caso los días antes de él era más divertidos para sus'+
	'papás? Los temores se disipan cuando su padre le confirma que todo es mejor desde que él llegó a sus vidas.'+
	'\n\nARGUMENTO\n\Después de ser el centro del universo, darse cuenta de que había vida antes de uno existiera, puede ser un muy brusco despertar. Sin embargo, llevados de la mano de la voz'+
	' gentil de Flor Aguilera, este nuevo mundo va acompañado de poesía, humor y, sobre todo, complicidad.'+
	'\n\nPALABRAS CLAVE\n\n#historiasdefamilia #padresehijos #historiasdelpasado #recuerdos #relatosintimistas'+
	'#descubrimientos #crecimientoymaduración #amorfilial';
	
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/1.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/1.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/1.pdf';
	}
	
}else if(book == 2){
	$.imagePortada.image = '/images/unlibro.jpg';
	$.nameLbl.text = '¡Un libro!';
	$.autorLbl.text = 'Libby Gleeson';
	$.ilustradorLbl.text = 'Freya Blackwood';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'Australia';
	$.typeBlkLbl.text = 'Cuentos de la vida cotidiana';
	$.textField.text = 'RESEÑA\n\nDos niños encuentran un libro tirado en el suelo. Intrigados, lo recogen, lo revisan, lo manipulan. ¿Qué esconderán sus páginas? ¿Praderas desoladas, persecuciones,'+ 
	' tazas gigantes que hacen las veces de barcos? Por suerte, pronto aparece la dueña del libro, quien desentrañará, a través de la lectura, los mundos maravillosos que en él se describen.'+
	'\n\nARGUMENTO\nA través de las delicadas ilustraciones de Freya Blackwood y un texto brevísimo, ¡Un libro! muestra que en algunos contextos, cuando la lectura se comparte,'+
	' un buen libro puede ser un pequeño milagro.\n\nPALABRAS CLAVE\n#elvalordeunlibro #elpoderdeunahistoria #mundosliterarios #analfabetismo #leerencomunidad'+
	'Lorem';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/2.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/2.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/2.pdf';
	}
	
}else if(book == 3){
	$.imagePortada.image = '/images/fiesta.jpg';
	$.nameLbl.text = 'La fiesta sorpresa';
	$.autorLbl.text = 'Gabriela Fleiss';
	$.ilustradorLbl.text = 'Elissambura';
	$.pagesBlkLbl.text = '28 páginas';
	$.countryBlkLbl.text = 'Uruguay';
	$.typeBlkLbl.text = 'Cuentos de misterio';
	$.textField.text = 'RESEÑA\n\nEl cumpleaños del camaleón se acerca y sus amigos deciden celebrarlo con una fiesta sorpresa. En secreto, los animales acuerdan '+ 
	'  qué cosas llevarán a la reunión y esto da origen a una serie de confusiones que concluyen en un festejo muy original.'+
	'\n\nARGUMENTO\n\nLa fiesta sorpresa es una historia de humor sobre la importancia de la amistad y de una buena comunicación.'+
	'\n\nPALABRAS CLAVE\n\n#malosentendidos #comunicación #amistad #animales #altruismo #generosidad #humor';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/3.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/3.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/3.pdf';
	}
	
}else if(book == 4){
	$.imagePortada.image = '/images/lagoness.jpg';
	$.nameLbl.text = 'Anabel y el Monstruo del lago Ness';
	$.autorLbl.text = 'Adam Hochschild';
	$.ilustradorLbl.text = 'Rafael Barajas, “El Fisgón”';
	$.pagesBlkLbl.text = '40 páginas';
	$.countryBlkLbl.text = 'EUA / México';
	$.typeBlkLbl.text = 'Mitos, fábulas y leyendas';
	$.textField.text = 'RESEÑA\n\nTodo el mundo sabe que el Monstruo del Lago Ness, en Escocia, es muy feroz, muy feo y muy '+ 
	' grande. Por años, la gente ha intentado cazarlo con los métodos más inverosímiles. Aun así, nunca lo han logrado. Anabel es una niña pequeña, no tiene computadoras ni radares, pero no los '+
	' necesita, pues ha tenido una idea brillante…\n\nARGUMENTO\n\nUna historia de amistad, ingenio y buen humor, enriquecida con imágenes de gran calidad.'+
	'\n\nPALABRAS CLAVE\n\n#respetoporlanaturaleza #inocencia #leyendasadaptadas #amistadesinusuales #respeto #aceptación';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/4.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/4.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/4.pdf';
	}
	
}else if(book == 5){
	$.imagePortada.image = '/images/lobos.jpg';
	$.nameLbl.text = 'Donde viven los lobos feroces';
	$.autorLbl.text = 'Lola Núñez y Rocío Antón';
	$.ilustradorLbl.text = 'Roser Rius';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'España';
	$.typeBlkLbl.text = 'Pictocuento';
	$.textField.text = 'RESEÑA\n\nRodeada por los niños, la abuela narra la historia de la primera vez que el circo llegó al pueblo y de cómo los lobos impidieron que se diera la función. Los pequeños'+ 
	' descubrirán que los lobos se fueron a vivir a otros cuentos, como “Los siete cabritos” o “Los tres cochinitos”.'+
    '\n\nARGUMENTO\n\nUna divertida historia que con certeza dirigirá a los lectores a la lectura de los cuentos de hadas a los que huyeron estos personajes tras haber sido exiliados..'+
	'\n\nPALABRAS CLAVE\n\n#tradiciónoral #humor #castigomerecido #pictocuentos #significanteysignificado';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/5.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/5.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/5.pdf';
	}
	
}else if(book == 6){
	$.imagePortada.image = '/images/yanka.jpg';
	$.nameLbl.text = 'Yanka, yanka';
	$.autorLbl.text = 'Francisco Hinojosa';
	$.ilustradorLbl.text = 'Rafael Barajas “El Fisgón”';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'México';
	$.typeBlkLbl.text = 'Cuentos de aventuras';
	$.textField.text = 'RESEÑA\n\nUna familia de pingüinos del Polo Sur va de vacaciones a las playas cercanas al Ecuador. En su viaje se encontrarán con'+ 
	' que, en esa zona, el mar es caliente y colorido, y muchas otras diferencias. Aún así, tratarán de divertirse a pesar de todo. Uno de los pequeños hace un descubrimiento singular, con lo que logra'+
	' que la familia pase feliz el resto de sus vacaciones.\n\nARGUMENTO\n\nUn libro clásico de Francisco Hinojosa sobre la importancia del humor y la buena actitud en la convivencia familiar.'+
	'\n\nPALABRAS CLAVE\n\n#viajes #vacacionesenfamilia #aceptación';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/7.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/7.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/7.pdf';
	}
	}
	else if(book == 7){
	$.imagePortada.image = '/images/verduras.jpg';
	$.nameLbl.text = 'Ya me llené de verduras';
	$.autorLbl.text = 'Anita Heald';
	$.ilustradorLbl.text = 'Isabel Arnaud';
	$.pagesBlkLbl.text = '40 páginas';
	$.countryBlkLbl.text = 'México';
	$.typeBlkLbl.text = 'Cuentos de la vida cotidiana';
	$.textField.text = 'RESEÑA\n\nEsta obra narra las peripecias de Sofía, quien se niega a ingerir un plato de vegetales. Mientras su mamá la insta a comérselo, ella '+ 
	' hace de todo para escapar. Pero la pequeña descubre, gracias a un elote tierno, que prefiere éstos a las galletas de chocolate.'+
	'\n\nARGUMENTO\n\nEl tema es común en la vida cotidiana de muchos niños a quienesno les gusta comer verduras.'+
	'\n\nPALABRAS CLAVE\n\n#alimentaciónsana #equilibrio #cuidadodelcuerpo #niñoscaprichosos #obediencia #vidaenfamilia';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/6.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/6.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/6.pdf';
	}
	}
	else if(book == 8){
	$.imagePortada.image = '/images/saposepo.jpg';
	$.nameLbl.text = 'Días con Sapo y Sepo';
	$.autorLbl.text = 'Arnold Lobel';
	$.ilustradorLbl.text = 'Arnold Lobel';
	$.pagesBlkLbl.text = '72 páginas';
	$.countryBlkLbl.text = 'EUA';
	$.typeBlkLbl.text = 'Cuentos de la vida cotidiana';
	$.textField.text = 'RESEÑA\n\nCinco cuentos narran las divertidas peripecias de dos amigos: Sapo y Sepo. Con la ternura que caracteriza los cuentos de Lobel, los dos amigos inseparables '+ 
	' elevan una cometa con el impulso de las palabras, comprenden que es deseable ser ordenados, disfrutan de la soledad y tiemblan de miedo por un cuento de terror.'+
	'\n\nARGUMENTO\n\nHistorias llenas de humor que resaltan la amistad inquebrantable entre estos ya legendarios sapos. Los episodios cortos son ideales para que los primeros lectores se'+
	' aventuren a leer textos más largos.\n\nPALABRAS CLAVE\n\n#padresehijos #crecimiento #cambiosfísicos #cuandoseagrande #vidaenfamilia';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/8.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/8.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado3/8.pdf';
	}
	
	
	function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}
	
}
