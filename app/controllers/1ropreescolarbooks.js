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
	$.imagePortada.image = '/images/hombrecillolluvia.jpg';
	$.nameLbl.text = 'El hombrecillo de la lluvia';
	$.autorLbl.text = 'Gianni RodariI';
	$.ilustradorLbl.text = 'Nicoletta Costa';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'Italia';
	$.typeBlkLbl.text = 'Cuentos fantásticos';
	$.textField.text = 'RESEÑA\n\nEl hombrecillo de la lluvia tiene un trabajo muy importante: abrir y cerrar los grifos de las nubes para que'+ 
	' llueva o deje de llover. Brinca de nube en nube suavemente y hace muy bien su trabajo, aunque a veces se queda dormido de tanto cansancio.'+
	'\n\nARGUMENTO\n\nUn cuento sencillo escrito con gran ingenio por Rodari, uno de los autores infantiles más'+
	 ' importantes del siglo XX.'+
	'\n\nPALABRAS CLAVE\n\n#cuentosdeporqué #naturaleza #ciclodelagua #elclima #clásicosinfantilesdelsigloXX';
	
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/1.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/1.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/1.pdf';
	}
	
}else if(book == 2){
	$.imagePortada.image = '/images/papamagico.jpg';
	$.nameLbl.text = 'Mi papá es mágico';
	$.autorLbl.text = 'Celso Román';
	$.ilustradorLbl.text = 'Alekos';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'Colombia';
	$.typeBlkLbl.text = 'Poesía y juegos de palabras';
	$.textField.text = 'RESEÑA\n\nCon rimas sencillas, este libro es un canto de amor alpadre: ese héroe grande y benevolente que salva de '+ 
	' los peligros y juega en el parque. “Es balancín de vuelo, que me sube hasta el cielo”, y “es el mejor domador de los perros del sector”. El autor y Alekos '+
	'han creado un libro alegre y entrañable que se deleita en el amor del hijo y el cariño del padre.\n\nARGUMENTO\n\nUn libro alegre que celebra la devoción '+
	'absoluta que un hijo puede sentir por su padre, llegando a creer incluso que es todopoderoso, casi superhéroe ¡y hasta mágico!.\n\nPALABRAS CLAVE\n\n#padresehijos'+
	' #vidaenfamilia #héroesdelavidareal #losfavoritos';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/2.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/2.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/2.pdf';
	}
	
}else if(book == 3){
	$.imagePortada.image = '/images/quecofusion.jpg';
	$.nameLbl.text = '¡Qué confusión!';
	$.autorLbl.text = 'Ana Maria MachadoI';
	$.ilustradorLbl.text = 'Françesc Rovira';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'Brasil';
	$.typeBlkLbl.text = 'Cuentos de la vida cotidiana';
	$.textField.text = 'RESEÑA\n\nIsabel y Enrique van a casa de su abuela después de la escuela.'+ 
	'  Allí siempre encuentran cómo divertirse: pintan, cuidan las plantas, se mojan y terminan llenos de lodo; cualquiera podría confundirlos con unos cochinitos.'+
	'La abuela es muy feliz de tenerlos en  casa y no imagina cómo sería la vida sin ellos.'+
	'\n\nARGUMENTO\n\nEscrito en verso, este cuento recuerda el amor de los abuelos por sus nietos y lo amenas'+
	' que pueden resultar las relaciones entre diferentes generaciones.\n\nPALABRAS CLAVE\n\n#abuelosynietos #creatividad #juegos #vidaenfamilia #cuentosenverso';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/3.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/3.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/3.pdf';
	}
	
}else if(book == 4){
	$.imagePortada.image = '/images/lechucitas.jpg';
	$.nameLbl.text = 'Las lechucitas';
	$.autorLbl.text = 'Martin Waddell';
	$.ilustradorLbl.text = 'Patrick Benson';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'Reino Unido';
	$.typeBlkLbl.text = 'Cuentos de la vida cotidiana';
	$.textField.text = 'RESEÑA\n\nTres lechucitas despiertan una noche y descubren que su mamá no está. Una tiene miedo de que'+ 
	'no regrese, pero otra está segura de que lo hará. Con el paso del tiempo, las lechucitas revelan sus inquietudes mientras se preguntan dónde estará mamá.'+
	' ¿Qué estará haciendo? ¿Y cuándo regresará?\n\nARGUMENTO\n\nMás de dos millones de ejemplares vendidos alrededor del mundo confirman lo que los'+
	' pequeños lectores siempre han sabido: que la delicadeza de las imágenes y el impacto de la historia hacen de éste un libro que atesorarán por siempre.'+
	'\n\nPALABRAS CLAVE\n\n#miedoalabandono #padresehijos #vidaenfamilia #relaciónentrehermanos#manejodelasemociones #losfavoritos';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/4.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/4.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/4.pdf';
	}
	
}else if(book == 5){
	$.imagePortada.image = '/images/novoyaleer.jpg';
	$.nameLbl.text = 'No voy a leer este libro';
	$.autorLbl.text = 'Cece Meng';
	$.ilustradorLbl.text = 'Joy Ang';
	$.pagesBlkLbl.text = '36 páginas';
	$.countryBlkLbl.text = 'EUA';
	$.typeBlkLbl.text = 'Poesía y juegos de palabras';
	$.textField.text = 'RESEÑA\n\nEste niño pequeño tiene muchas excusas para no leer este libro. Porque si hay algo que realmente no quiere hacer,'+ 
	' es leer este libro. No lo leerá  aunque lo cuelguen de cabeza, amarrado del dedo gordo sobre un precipicio con relámpagos encima y tiburones abajo.'+
	' Definitivamente no lo leerá. Aunque quizá pase algo que lo convenza: que alguien a quien ame lo lea con él.'+
    '\n\nARGUMENTO\n\nComo la cabrita que no quería salir de ahí, este juego de palabras acumulativo deleitará a  los lectores por su propuesta lúdica y, desde luego, por su infaltable final feliz.'+
	'\n\nPALABRAS CLAVE\n\n#lectoresreticentes #historiasacumulativas #hipérbole #gustoporlalectura'+
	'#lecturacompartida #paraleerenvozalta #losfavoritos';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/5.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/5.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/5.pdf';
	}
	
}else if(book == 6){
	$.imagePortada.image = '/images/tintodonte.jpg';
	$.nameLbl.text = 'El tintodonte (un domingo sin desayuno)';
	$.autorLbl.text = 'Juan Gedovius';
	$.ilustradorLbl.text = 'Juan Gedovius';
	$.pagesBlkLbl.text = '36 páginas';
	$.countryBlkLbl.text = 'México';
	$.typeBlkLbl.text = 'Cuentos de humor';
	$.textField.text = 'RESEÑA\n\nLas apariencias engañan y la del  Tintodonte lo hace bastante bien. Serio, a la defensiva y listo para cazar a su presa y desayunar, el'+ 
	' monstruo pierde su sabrosa comida al toparse con una “monstrua” de su especie. El'+
	' valor de esa nueva amistad le depara una gran sorpresa al malhumorado. ¿Cuántas veces las cosas no son como se perciben en una primera impresión?'+
	'\n\nARGUMENTO\n\nUna inesperada (y monstruosa) historia de amor que conmoverá al gruñón más aguerrido, aunque ese día no haya podido desayunar.'+
	'\n\nPALABRAS CLAVE\n\n#álbumsinpalabras #amor #malhumor #librosparareír';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/6.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/6.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado1/6.pdf';
	}
	
	function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}
	
}
