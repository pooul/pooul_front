;( function ( win, doc ) {
	var resetFontSize = function () {
		var _html,
			max = 1920,
			_width;

		_html = doc.querySelector( "html" );
		_width = (doc.documentElement.clientWidth > max) ? max : doc.documentElement.clientWidth;
		_html.style.fontSize = 100 * _width / max + 'px';
		_html.style.minHeight = win.innerHeight + 'px';
	};
	win.onresize = function ( ) {
		resetFontSize();
	};
	resetFontSize();
})( window, document )
