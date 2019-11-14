function typeIt(cssSelector, millis) {
	var txt = $(cssSelector).text();
	$(cssSelector).text("");
	var i = 0;
	function typeWriter() {
		$(cssSelector).text($(cssSelector).text().replace("|",""));
		if (i < txt.length) {
			$(cssSelector).text($(cssSelector).text() + txt.charAt(i) + "|");
			i++;
			setTimeout(typeWriter, millis);
		}
	}
	typeWriter();
}
