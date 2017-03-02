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
	$.imagePortada.image = '/images/quiensoy.jpg';
	$.nameLbl.text = '¿Quien soy yo?';
	$.autorLbl.text = 'Paula Vásquez';
	$.ilustradorLbl.text = 'Paula Vásquez';
	$.pagesBlkLbl.text = '48 páginas';
	$.countryBlkLbl.text = 'Chile';
	$.typeBlkLbl.text = 'Cuentos de humor';
	$.textField.text = 'RESEÑA\n\nAlguien dejó un dibujo sin terminar y a un triste bicho preguntándose: “¿Quién soy yo?”.'+ 
	' Para encontrar la respuesta a esta interrogante, se necesita la ayuda de un talentoso dibujante. Pero éste, además de'+
	' su destreza, requerirá de mucha paciencia, ya que para descubrir la verdadera identidad del misterioso protagonista tendrá que hacer más de un intento.'+
	'\n\nARGUMENTO\n\nIncorporándose de lleno en la nueva tendencia de los libros interactivos, ¿Quién soy yo?'+
	 ' es una divertida historia que invita a ejercitar el músculo de la imaginación y a conocer a una serie de nuevos (y excéntricos) miembros del reino animal.'+
	'\n\nPALABRAS CLAVE\n\n#creatividad #juegosdepalabras #adivinanzas #anticipación #juegos'+
	' #deduccióneinferencia #palabrasinventadas #paralosmáspequeños #librosinteractivos #librosparareír #librosparacompartir';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/1.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/1.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/1.pdf';
	}
	
}else if(book == 2){
	$.imagePortada.image = '/images/grandepeque.jpg';
	$.nameLbl.text = 'Yo grande, tú pequeño';
	$.autorLbl.text = 'Lilli L’Arronge';
	$.ilustradorLbl.text = 'Lilli L’Arronge';
	$.pagesBlkLbl.text = '52 páginas';
	$.countryBlkLbl.text = 'Alemania';
	$.typeBlkLbl.text = 'Cuentos de humor';
	$.textField.text = 'RESEÑA\n\n“Yo grande, tú pequeño; yo rayo, tú sol; yo chorro, tu chorrito. “A través de una serie '+ 
	' de opuestos y comparativos, este libro muestra algunos de los momentos más entrañables que padres e hijos comparten día con día. guien a quien ame lo lea con él. '+
	'\n\nARGUMENTO\n\nPocos libros de conceptos trascienden con tanto éxito la línea que los separa del libro álbum. Hilarante, conmovedor y de una estética impecable, este libro está destinado a ser'+
	'un favorito tanto de los chicos como de sus padres.\n\nPALABRAS CLAVE\n\n#padresehijos #opuestos #comparativos #primerainfancia #superlativos'+
	' #diferenciasentreniñosyadultos #amorfilial';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/2.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/2.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/2.pdf';
	}
	
}else if(book == 3){
	$.imagePortada.image = '/images/circoraro.jpg';
	$.nameLbl.text = 'Un circo un poco raro';
	$.autorLbl.text = 'Ana María Shua';
	$.ilustradorLbl.text = 'Luciana Feito';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'Argentina';
	$.typeBlkLbl.text = 'Poesía y juegos de palabras';
	$.textField.text = 'RESEÑA\n\nEn este cuento parece que todo está al revés. Quienes participan en la función de '+ 
	'circo realizan actividades que nunca hubiéramos imaginado: los elefantes caminan por la cuerda floja, los caballos '+
	'amenizan con música, las focas son felices espectadoras que ovacionan al valiente león que mete la cabeza en la boca '+
	'del domador.\n\nARGUMENTO\n\nLos primeros lectores descubrirán que la imaginación no tiene límites y que, cambiando'+
	' un par de cosas de sitio, se pueden crear situaciones muy divertidas.\n\nPALABRAS CLAVE\n\n#cuentosabsurdos #fantasía'+
	' #lenguajelúdico #imaginación #creatividad #mundodecabeza #surrealismo #losfavoritos';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/3.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/3.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/3.pdf';
	}
	
}else if(book == 4){
	$.imagePortada.image = '/images/cebra.jpg';
	$.nameLbl.text = '¿De qué color es la cebra?';
	$.autorLbl.text = 'Teresa Novoa';
	$.ilustradorLbl.text = 'Teresa Novoa';
	$.pagesBlkLbl.text = '24 páginas';
	$.countryBlkLbl.text = 'España';
	$.typeBlkLbl.text = 'Conceptos';
	$.textField.text = 'RESEÑA\n\n24 páginas quiere saber de qué color es, para lo cual, se compara con otros animales: ¿será de color rojo como la catarina?, '+ 
	' ¿amarilla como el león?, ¿verde como la rana? Pero la cebra no es roja, ni amarilla, ni verde, ni azul, ni violeta… ¿De qué color será? '+
	'\n\nARGUMENTO\n\nA partir de la pregunta de la cebra y de las divertidas ilustraciones, los niños identificarán los colores y sus nombres mientras reconocen el color de distintos animales.'+
	'\n\nPALABRAS CLAVE\n\n#loscolores #animales #comparativos';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/4.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/4.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/4.pdf';
	}
	
}else if(book == 5){
	$.imagePortada.image = '/images/habianube.jpg';
	$.nameLbl.text = 'Había una vez una nube';
	$.autorLbl.text = 'Graciela Montes';
	$.ilustradorLbl.text = 'Claudia Legnazzi';
	$.pagesBlkLbl.text = '24 páginas';
	$.countryBlkLbl.text = 'Argentina';
	$.typeBlkLbl.text = 'Pictocuento';
	$.textField.text = 'RESEÑA\n\nLa nube paseandera sufre muchos cambios, se convierte en tormenta, cae sobre la tierra, los paraguas y los edificios.'+ 
	' Finalmente, encuentra la manera de volver a subir al cielo para seguir paseando.'+
	'\n\nARGUMENTO\n\nCon la prosa cómica y lírica que caracteriza los textos de Graciela Montes, este breve'+
	' libro acerca el tema de los fenómenos meteorológicos a los lectores más jóvenes mientras se divierte dando vida y forma antropomorfa a las nubes.\n\nPALABRAS CLAVE\n\n#ciclodelagua#fenómenosmeteorológicos'+
	'#pictocuentos#significanteysignificado#aventuras';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/5.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/5.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/5.pdf';
	}
	
}else if(book == 6){
	$.imagePortada.image = '/images/estrellamar.jpg';
	$.nameLbl.text = '¿Dónde está la estrella de mar?';
	$.autorLbl.text = 'Barroux';
	$.ilustradorLbl.text = 'Barroux';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'Reino Unido';
	$.typeBlkLbl.text = 'Cuidado de la naturaleza';
	$.textField.text = 'RESEÑA\n\nA primera vista, este libro parece proponer un simple juego de “busca y encuentra” a la medusa, al pez payaso y,'+ 
	' desde luego, a la estrella de mar entre una multitud de peces. Sin embargo, conforme avanzan las páginas, el lector'+
	' notará que algo extraño sucede en el mar. ¿Qué hace ahí una llanta? ¿Y esa televisión? ¡¿Quién arrojó un refrigerador al océano?'+
	'\n\nARGUMENTO\n\nCon apenas unas cuantas palabras, éste es un ingenioso libro ideal para introducir'+
	'a los lectores más pequeños al tema de la contaminación ambiental.\n\nPALABRAS CLAVE\n\n#lecturadeimágenes #contaminaciónambiental'+
	' #faunamarina #cuidadodelosocéanos#reciclaje #efectosdelacontaminación #librosparacompartir #librosparajugar';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/1.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/6.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/6.pdf';
	}
	
}else if(book == 7){
	$.imagePortada.image = '/images/librocanta.jpg';
	$.nameLbl.text = 'El libro que canta';
	$.autorLbl.text = 'Lorem Ipsum';
	$.ilustradorLbl.text = 'Lorem Ipsum';
	$.pagesBlkLbl.text = 'Lorem Ipsum';
	$.countryBlkLbl.text = 'Lorem Ipsum';
	$.typeBlkLbl.text = 'Lorem Ipsum';
	$.textField.text = 'RESEÑA\n\nLorem Ipsum'+ 
	'Lorem Ipsum '+
	'Lorem Ipsum '+
	'Lorem Ipsum.\n\nARGUMENTO\n\nLorem Ipsum'+
	'Lorem Ipsum.\n\nPALABRAS CLAVE\n\nLorem Ipsum'+
	' Lorem Ipsum';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/7.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/7.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/7.pdf';
	}
	
}else if(book == 8){
	$.imagePortada.image = '/images/cosquillas.jpg';
	$.nameLbl.text = 'El señor Cosquillas';
	$.autorLbl.text = 'Rosalía Chavelas';
	$.ilustradorLbl.text = 'Gabriel Pacheco';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'México';
	$.typeBlkLbl.text = 'Poesía y juegos de palabras';
	$.textField.text = 'RESEÑA\n\n“Todas las noches, cuando ya estoy acostado, listo para dormir, el señor Cosquillas viene a visitarme.” Una'+ 
	'historia sobre la ilusión de los niños de ser abrazados y acariciados por papá y mamá antes de ir a la cama; de esa espera diaria para recibir '+
	' muestras de cariño al finalizar la jornada después de todo lo sucedido durante el día.'+
	'\n\nARGUMENTO\n\nÉste es un libro perfecto para que padres e hijos inauguren un nuevo ritual que preceda la hora de ir a la cama.'+
	'\n\nPALABRAS CLAVE\n\n#paradormir #tradiciónoral #padresehijos #personajesfantásticos #rituales';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/8.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/8.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/maternal/8.pdf';
	}
	
	function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}
	
}
