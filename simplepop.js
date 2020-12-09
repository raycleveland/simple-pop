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
	 */
	start: function(delay) {
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
    		event.stopPropagation() = true;
    		return false;	
    	}
	},
	/**
	 * Simple pop close function
	 */
	close: function() {
		var container = document.getElementById("simple-pop-wrap");
  		container.classList.add("hidden");
	}
	
};