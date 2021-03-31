$(function() {
	let count = 0; 

	$(".button").click(function() {
		count++;
    
    	if(count % 3 == 1) {
	    	$(".dog1").hide();
	    	$(".dog2").show();
	    	$(".dog3").show();
	    } else if (count % 3 == 2) {
	    	$(".dog1").show();
	    	$(".dog2").hide();
	    	$(".dog3").show();
	    } else {
	    	$(".dog1").show();
	    	$(".dog2").show();
	    	$(".dog3").hide();
	    }
  });
});