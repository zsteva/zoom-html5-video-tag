
(function () {

	var x_pos = 0;
	var y_pos = 0;
	var zoom = 1.0;

	document.onkeydown = function(event) {
	     if (!event) event = window.event;

	     var code = event.keyCode;
	     if (event.charCode && code == 0)
		  code = event.charCode;

	     switch(code) {
		  case 37: // Key left.
			x_pos -= 5;
			update_css();
		      break;
		  case 38: // Key up.
		      y_pos -= 5;
			update_css();
		      break;
		  case 39: // Key right.
			x_pos += 5;
			update_css();
		      break;
		  case 40: // Key down.
		      y_pos += 5;
			update_css();
		      break;
		  case 189: // -
		      zoom -= 0.1;
			update_css();
		      break;
		  case 187: // +
		      zoom += 0.1;
			update_css();
		      break;
	     }

	     event.preventDefault();
	};


	function update_css() {
		var code = '(function (){ '
			 // + '   console.log("zoom: ' + zoom + ' x_pos: ' + x_pos + ' y_pos ' + y_pos + '"); '
			 + '   var n = document.getElementsByTagName("video"); '
			 + '   for (var i = 0; i < n.length; i++) { '
			 + '     console.log(n[i]); '
			 + '     n[i].style.zoom = ' + zoom + '; '
			 + '     n[i].style.left = "' + x_pos + 'px"; '
			 + '     n[i].style.top = "' + y_pos + 'px"; '
			 + '   } '
			 + '})();';

		chrome.tabs.executeScript({ code: code });
	}

})();

