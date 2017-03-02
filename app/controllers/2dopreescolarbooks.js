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
	$.imagePortada.image = '/images/vueltabici.jpg';
	$.nameLbl.text = '¡Date una vuelta en bici!';
	$.autorLbl.text = 'Joukje Akveld';
	$.ilustradorLbl.text = 'Philip Hopman';
	$.pagesBlkLbl.text = '36 páginas';
	$.countryBlkLbl.text = 'Países Bajos';
	$.typeBlkLbl.text = 'Resolución de conflictos-Manejo de las emociones';
	$.textField.text = 'RESEÑA\n\nBoris y Víctor son muy amigos. Pero no siempre, ya que a veces discuten por esto, por lo otro y se lanzan cosas feas por los aires. Un día'+ 
	' Víctor le grita a Boris: “¡Anda y date una vuelta en bici!”. Y entonces Boris se va en bicicleta y pedalea y pedalea y pedalea...'+
	'\n\nARGUMENTO\n\En holandés, la expresión ga toch fietsen! quiere decir, literalmente, ¡vete a dar una vuelta en bici!, y se utiliza para zanjar una discusión que parece no tener fin.'+
	' Joukje Akveld, autor de esta historia, decidió tomar esa expresión en su sentido más literal y construir una ingeniosa historia en la que Boris '+
	' sale a andar en bicicleta después de una pelea con Víctor. El resultado es un maravilloso viaje por una serie de bellos e improbables paisajes.'+
	'\n\nPALABRAS CLAVE\n\n#expresionesextranjeras #juegosdepalabras #manejodelasemociones #resolucióndeconflictos #familiasdiferentes #inclusión #paciencia #afecto #deportes'+
	'#beneficiosdehacerejercicio #vidaurbana #vidarural #humor #lecturadeimágenes';
	
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/1.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/1.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/1.pdf';
	}
	
}else if(book == 2){
	$.imagePortada.image = '/images/alarota.jpg';
	$.nameLbl.text = 'Cómo sanar un ala rota';
	$.autorLbl.text = 'Lorem';
	$.ilustradorLbl.text = 'Lorem';
	$.pagesBlkLbl.text = 'Lorem';
	$.countryBlkLbl.text = 'Lorem';
	$.typeBlkLbl.text = 'Lorem';
	$.textField.text = 'RESEÑA\n\nLorem '+ 
	' Lorem '+
	'Lorem '+
	'Lorem'+
	'Lorem';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/2.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/2.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/2.pdf';
	}
	
}else if(book == 3){
	$.imagePortada.image = '/images/sueno.jpg';
	$.nameLbl.text = 'Canciones para llamar al sueño';
	$.autorLbl.text = 'Antonio Granados';
	$.ilustradorLbl.text = 'Gerardo Suzán';
	$.pagesBlkLbl.text = '72 páginas';
	$.countryBlkLbl.text = 'México';
	$.typeBlkLbl.text = 'Poesía y juegos de palabras';
	$.textField.text = 'RESEÑA\n\nPara dormir sólo se necesitan unas cuantas palabras que hablen de un trocito de bostezo; de cuando la noche cayó en una taza; de un corazón de mentiras o '+ 
	'  que cuenten la vida de un gallo llorón. Cada una de estas canciones es una pequeña historia contada en verso con un lenguaje rítmico y sonoro que arrullará a los niños a la hora de dormir.'+
	'\n\nARGUMENTO\n\nUna lectura para disfrutar en familia, con ilustraciones estilo naïve que otorgan una carga  artesanal y onírica a los textos.'+
	'\n\nPALABRAS CLAVE\n\n#cancionesdecuna #nanas #tradiciónoral #vidaenfamilia #lenguajelúdico #paraleerenvozalta';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/3.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/3.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/3.pdf';
	}
	
}else if(book == 4){
	$.imagePortada.image = '/images/tomasito.jpg';
	$.nameLbl.text = 'Tomasito y las palabras';
	$.autorLbl.text = 'Graciela Beatriz Cabal';
	$.ilustradorLbl.text = 'Sandra Lavandeira';
	$.pagesBlkLbl.text = '40 páginas';
	$.countryBlkLbl.text = 'Argentina';
	$.typeBlkLbl.text = 'Cuentos de la vida cotidiana';
	$.textField.text = 'RESEÑA\n\nTomasito ha aprendido a caminar, ya sabe tocar el tambor, le gusta escuchar cuentos y comprende casi todo lo que le dicen, pero lo único que sabe decir es “coy”'+ 
	' Para todo usa la misma sílaba y a veces se desespera mucho porque nadie le entiende. Hasta que, un día, las palabras por fin empiezan a girar en su cabeza. Está listo para hacerse escuchar.'+
	'\n\nARGUMENTO\n\nÉste es un cuento hermoso que hace ver el poder de las palabras, la maravilla del lenguaje y el amor que éstas pueden provocar.'+
	'\n\nPALABRAS CLAVE\n\n#padresehijos #primeraspalabras #aprenderahablar #adquisicióndellenguaje #desarrolloevolutivo #primeravez';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/4.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/4.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/4.pdf';
	}
	
}else if(book == 5){
	$.imagePortada.image = '/images/brujas.jpg';
	$.nameLbl.text = '¿Por qué hay brujas en las veletas?';
	$.autorLbl.text = 'Lola Núñez y Rocío Antón';
	$.ilustradorLbl.text = 'Roser Rius';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'España';
	$.typeBlkLbl.text = 'Pictocuento';
	$.textField.text = 'RESEÑA\n\nTodas las tardes, los niños del pueblo se acercan a la plaza para  escuchar a la abuela Candela, quien de su maleta saca un objeto y empieza a contar una historia'+ 
	' llena de imaginación. La que  cuenta en esta ocasión habla de cómo las brujas bondadosas se convirtieron en brujas malas por culpa de un viento helado.'+
    '\n\nARGUMENTO\n\nCon la ayuda de los pictogramas, los niños reconstruirán una posible explicación del origen de las veletas con forma de brujas que giran con el viento en lo alto de algunas casas.'+
	'\n\nPALABRAS CLAVE\n\n#fantasía #brujasbuenas #brujasmalas #leyendas #tradiciónoral #objetoscotidianos'+
	'#cuentosdeorigen #imaginaciónfundacional #pictocuentos #significanteysignificado';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/5.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/5.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/5.pdf';
	}
	
}else if(book == 6){
	$.imagePortada.image = '/images/rico.jpg';
	$.nameLbl.text = 'Mmm, ¡qué rico está!';
	$.autorLbl.text = 'Ana Maria Machado';
	$.ilustradorLbl.text = 'Françesc Rovira';
	$.pagesBlkLbl.text = '32 páginas';
	$.countryBlkLbl.text = 'Brasil';
	$.typeBlkLbl.text = 'Cuentos de la vida cotidiana';
	$.textField.text = 'RESEÑA\n\nEnrique e Isabel disfrutan mucho estar en casa de la abuela. Ella les prepara los postres y platillos más suculentos y los conduce a un recorrido por los'+ 
	' alimentos, el mundo de los cuentos y las canciones infantiles.'+
	'\n\nARGUMENTO\n\nLa autora ha elegido el ámbito cariñoso y relajado de la casa de los abuelos para entrar en la fantasía, territorio seguro donde los niños pueden jugar,'+
	' inventar y disfrutar del sonido de las palabras.\n\nPALABRAS CLAVE\n\n#abuelosynietos #comoencasa #alimentaciónsana #cuidadodelcuerpo #cuentoenverso';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/6.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/6.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/6.pdf';
	}
	}
	else if(book == 7){
	$.imagePortada.image = '/images/harold.jpg';
	$.nameLbl.text = 'El cuento de hadas de Harold';
	$.autorLbl.text = 'Crockett Johnson';
	$.ilustradorLbl.text = 'Crockett Johnson';
	$.pagesBlkLbl.text = '68 páginas';
	$.countryBlkLbl.text = 'EUA';
	$.typeBlkLbl.text = 'Cuentos de aventuras';
	$.textField.text = 'RESEÑA\n\nEn esta entrega, Harold y su crayón morado tendrán que resolver el misterio de un jardín encantado. Durante su travesía, Harold se encontrará con un rey,'+ 
	' un castillo, una bruja y un hada. Vivirá muchas peripecias hasta regresar, en su alfombra mágica, a la silla de su mamá para pedirle que le cuente un cuento antes de volver a la cama.'+
	'\n\nARGUMENTO\n\nDespués del éxito de Harold y el crayón morado, Crockett ohnson (1906-1975) creó más historias protagonizadas por este niño. El cuento de hadas de Harold es el más exitoso.'+
	'\n\nPALABRAS CLAVE\n\n#artesplásticas #dibujo #seresfantásticos #cuentosdehadas #creatividad #aventuras #viajes #supervivencia #clásicosinfantilesdelsigloXX';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/7.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/7.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/7.pdf';
	}
	}
	else if(book == 8){
	$.imagePortada.image = '/images/pelos.jpg';
	$.nameLbl.text = 'Yo contra los mil y un pelos';
	$.autorLbl.text = 'Gabriela Peyron';
	$.ilustradorLbl.text = 'Arno Avilés';
	$.pagesBlkLbl.text = '36 páginas';
	$.countryBlkLbl.text = 'México';
	$.typeBlkLbl.text = 'Cuentos de la vida cotidiana';
	$.textField.text = 'RESEÑA\n\nUn pequeño mira con atención la barba de su padre y pregunta si a él también le crecerá una así. Papá y mamá responden que sí, que el'+ 
	' día menos pensado él también tendrá barba. A partir de entonces, el pequeño espera que, en cualquier momento, al despertar o en el colegio, aparezca en su carauna tupida barba.'+
	'\n\nARGUMENTO\n\nUna divertida historia para hablar del paso del tiempo, del crecimiento y de la confianza entre padres e hijos.'+
	'\n\nPALABRAS CLAVE\n\n#padresehijos #crecimiento #cambiosfísicos #cuandoseagrande #vidaenfamilia';
	if (isAndroid) {
		var url = "https://docs.google.com/gview?embedded=true&url=" +"http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/8.pdf";
		$.webview.url = url;
		Ti.API.info("size "+$.webview.html);
		var content = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
		'<html xmlns="http://www.w3.org/1999/xhtml">' +
		    '<head>' +
				'<meta http-equiv="Content-Type" content="text/html; charset=utf-8 " />' +
		        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		    '</head>' +
		    '<body style="width:100%;height:100%;">' +
		        '<iframe src="http://docs.google.com/gview?url=http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/8.pdf&embedded=true" style="width:100%;height:100%;"></iframe>' +
		    '</body>' +
		'</html>';
		$.webview.setHtml(content);
		Ti.API.info("size "+$.webview.html);
		$.webview.setScalesPageToFit(true);
		$.webview.enableZoomControls = false;
	} else {
		$.webview.url = 'http://yankuserver.com/loqueleo/assets/books/preescolar/grado2/8.pdf';
	}
	
	
	function doClick(e)
{
    var home = Alloy.createController('index').getView();
    home.open();
}
	
}
