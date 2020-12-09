/**
 * Simple pop object
 *
 * function start() start the simple popup code
 */

let simplePop = {

	/**
	 * Simple pop start  function
	 *
	 * integer 	delay 			the milisecond delay to display the popup
	 * boolean 	showOnce 		whether or not to show the popup once
	 */
	start: function(delay, showOnce) {

		// show the popup only once if set
		if(showOnce) {
			if(simplePop.getCookie("spshown") == "") {
				document.cookie = "spshown=true";
			}
			else {
				return false;
			}
		}

		if(!delay) {
			simplePop.open();
		}
		setTimeout(function(){simplePop.open();}, delay);
	},
	/**
	 * Simple pop open function
	 */
	open: function() {
		var container = document.getElementById("simple-pop-wrap");
		var contents  = document.getElementById("simple-pop-contents");
  		container.classList.remove("hidden");
  		container.onclick = function() {
        	simplePop.close();
        	return false;
    	};
    	contents.onclick = function(event) {
    		event.stopPropagation();
    		return false;	
    	}
	},
	/**
	 * Simple pop close function
	 */
	close: function() {
		var container = document.getElementById("simple-pop-wrap");
  		container.classList.add("hidden");
	},
	/**
	 * getCookie Utility Function
	 */
	getCookie: function(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
		  var c = ca[i];
		  while (c.charAt(0) == ' ') {
		  c = c.substring(1);
		  }
		  if (c.indexOf(name) == 0) {
		    return c.substring(name.length, c.length);
		  }
		}
		return "";
	}
};