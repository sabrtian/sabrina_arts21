$(function() {
	let count = 0; 

	$(".button").click(function() {
		count++;
    
    	if(count % 12 == 1) {
	    	$(".dog1").show();
	    	$(".dog2").hide();
	    	$(".dog3").hide();
	    	$(".dog4").hide();
	    	$(".dog5").hide();
	    	$(".dog6").hide();
	    	$(".dog7").hide();
	    	$(".dog8").hide();
	    	$(".dog9").hide();
	    	$(".dog10").hide();
	    	$(".dog11").hide();
	    	$(".dog12").hide();
	    } else if (count % 12 == 2) {
	    	$(".dog1").hide();
	    	$(".dog2").show();
	    	$(".dog3").hide();
	    	$(".dog4").hide();
	    	$(".dog5").hide();
	    	$(".dog6").hide();
	    	$(".dog7").hide();
	    	$(".dog8").hide();
	    	$(".dog9").hide();
	    	$(".dog10").hide();
	    	$(".dog11").hide();
	    	$(".dog12").hide();
	    } else if (count % 12 == 3) {
	    	$(".dog1").hide();
	    	$(".dog2").hide();
	    	$(".dog3").show();
	    	$(".dog4").hide();
	    	$(".dog5").hide();
	    	$(".dog6").hide();
	    	$(".dog7").hide();
	    	$(".dog8").hide();
	    	$(".dog9").hide();
	    	$(".dog10").hide();
	    	$(".dog11").hide();
	    	$(".dog12").hide();
	    } else if (count % 12 == 4) {
	    	$(".dog1").hide();
	    	$(".dog2").hide();
	    	$(".dog3").hide();
	    	$(".dog4").show();
	    	$(".dog5").hide();
	    	$(".dog6").hide();
	    	$(".dog7").hide();
	    	$(".dog8").hide();
	    	$(".dog9").hide();
	    	$(".dog10").hide();
	    	$(".dog11").hide();
	    	$(".dog12").hide();
	    } else if (count % 12 == 5) {
	    	$(".dog1").hide();
	    	$(".dog2").hide();
	    	$(".dog3").hide();
	    	$(".dog4").hide();
	    	$(".dog5").show();
	    	$(".dog6").hide();
	    	$(".dog7").hide();
	    	$(".dog8").hide();
	    	$(".dog9").hide();
	    	$(".dog10").hide();
	    	$(".dog11").hide();
	    	$(".dog12").hide();
	    } else if (count % 12 == 6) {
	    	$(".dog1").hide();
	    	$(".dog2").hide();
	    	$(".dog3").hide();
	    	$(".dog4").hide();
	    	$(".dog5").hide();
	    	$(".dog6").show();
	    	$(".dog7").hide();
	    	$(".dog8").hide();
	    	$(".dog9").hide();
	    	$(".dog10").hide();
	    	$(".dog11").hide();
	    	$(".dog12").hide();
	    } else if (count % 12 == 7) {
	    	$(".dog1").hide();
	    	$(".dog2").hide();
	    	$(".dog3").hide();
	    	$(".dog4").hide();
	    	$(".dog5").hide();
	    	$(".dog6").hide();
	    	$(".dog7").show();
	    	$(".dog8").hide();
	    	$(".dog9").hide();
	    	$(".dog10").hide();
	    	$(".dog11").hide();
	    	$(".dog12").hide();
	    } else if (count % 12 == 8) {
	    	$(".dog1").hide();
	    	$(".dog2").hide();
	    	$(".dog3").hide();
	    	$(".dog4").hide();
	    	$(".dog5").hide();
	    	$(".dog6").hide();
	    	$(".dog7").hide();
	    	$(".dog8").show();
	    	$(".dog9").hide();
	    	$(".dog10").hide();
	    	$(".dog11").hide();
	    	$(".dog12").hide();
	    } else if (count % 12 == 9) {
	    	$(".dog1").hide();
	    	$(".dog2").hide();
	    	$(".dog3").hide();
	    	$(".dog4").hide();
	    	$(".dog5").hide();
	    	$(".dog6").hide();
	    	$(".dog7").hide();
	    	$(".dog8").hide();
	    	$(".dog9").show();
	    	$(".dog10").hide();
	    	$(".dog11").hide();
	    	$(".dog12").hide();
	    } else if (count % 12 == 10) {
	    	$(".dog1").hide();
	    	$(".dog2").hide();
	    	$(".dog3").hide();
	    	$(".dog4").hide();
	    	$(".dog5").hide();
	    	$(".dog6").hide();
	    	$(".dog7").hide();
	    	$(".dog8").hide();
	    	$(".dog9").hide();
	    	$(".dog10").show();
	    	$(".dog11").hide();
	    	$(".dog12").hide();
	    } else if (count % 12 == 11) {
	    	$(".dog1").hide();
	    	$(".dog2").hide();
	    	$(".dog3").hide();
	    	$(".dog4").hide();
	    	$(".dog5").hide();
	    	$(".dog6").hide();
	    	$(".dog7").hide();
	    	$(".dog8").hide();
	    	$(".dog9").hide();
	    	$(".dog10").hide();
	    	$(".dog11").show();
	    	$(".dog12").hide();
	    } else {
	    	$(".dog1").hide();
	    	$(".dog2").hide();
	    	$(".dog3").hide();
	    	$(".dog4").hide();
	    	$(".dog5").hide();
	    	$(".dog6").hide();
	    	$(".dog7").hide();
	    	$(".dog8").hide();
	    	$(".dog9").hide();
	    	$(".dog10").hide();
	    	$(".dog11").hide();
	    	$(".dog12").show();
	    }
  });
});