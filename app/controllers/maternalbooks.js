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
	$.autorLbl.text = 'Ana María Shua';
	$.ilustradorLbl.text = 'Luciana Feito';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'Argentina';
	$.typeBlkLbl.text = 'Poesía y juegos de palabras';
	$.textField.text = 'RESEÑA\n\nEn este cuento parece que todo está al revés. Quienes participan en la función de '+ 
	'circo realizan actividades que nunca hubiéramos imaginado: los elefantes caminan por la cuerda floja, los caballos '+
	'amenizan con música, las focas son felices espectadoras que ovacionan al valiente león que mete la cabeza en la boca '+
	'del domador.\n\nARGUMENTO\n\nLos primeros lectores descubrirán que la imaginación no tiene límites y que, cambiando'+
	'un par de cosas de sitio, se pueden crear situaciones muy divertidas.\n\nPALABRAS CLAVE\n\n#cuentosabsurdos #fantasía'+
	' #lenguajelúdico #imaginación #creatividad #mundodecabeza #surrealismo #losfavoritos';
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
	'un par de cosas de sitio, se pueden crear situaciones muy divertidas.\n\nPALABRAS CLAVE\n\n#cuentosabsurdos #fantasía'+
	' #lenguajelúdico #imaginación #creatividad #mundodecabeza #surrealismo #losfavoritos';
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
	'un par de cosas de sitio, se pueden crear situaciones muy divertidas.\n\nPALABRAS CLAVE\n\n#cuentosabsurdos #fantasía'+
	' #lenguajelúdico #imaginación #creatividad #mundodecabeza #surrealismo #losfavoritos';
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
	
}else if(book == 4){
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
	'un par de cosas de sitio, se pueden crear situaciones muy divertidas.\n\nPALABRAS CLAVE\n\n#cuentosabsurdos #fantasía'+
	' #lenguajelúdico #imaginación #creatividad #mundodecabeza #surrealismo #losfavoritos';
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
	
}else if(book == 5){
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
	'un par de cosas de sitio, se pueden crear situaciones muy divertidas.\n\nPALABRAS CLAVE\n\n#cuentosabsurdos #fantasía'+
	' #lenguajelúdico #imaginación #creatividad #mundodecabeza #surrealismo #losfavoritos';
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
	
}else if(book == 6){
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
	'un par de cosas de sitio, se pueden crear situaciones muy divertidas.\n\nPALABRAS CLAVE\n\n#cuentosabsurdos #fantasía'+
	' #lenguajelúdico #imaginación #creatividad #mundodecabeza #surrealismo #losfavoritos';
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
	
}else if(book == 7){
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
	'un par de cosas de sitio, se pueden crear situaciones muy divertidas.\n\nPALABRAS CLAVE\n\n#cuentosabsurdos #fantasía'+
	' #lenguajelúdico #imaginación #creatividad #mundodecabeza #surrealismo #losfavoritos';
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
	
}else if(book == 8){
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
	'un par de cosas de sitio, se pueden crear situaciones muy divertidas.\n\nPALABRAS CLAVE\n\n#cuentosabsurdos #fantasía'+
	' #lenguajelúdico #imaginación #creatividad #mundodecabeza #surrealismo #losfavoritos';
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
	
}
