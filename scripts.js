
$(document).ready(function(){
	var name = prompt("Please enter your name", "Your name");
    localStorage.setItem('firstresult' , 0);
    $("#myButton").click(function(){
	 
	 var score = 0;
	 var high = 5;
	 var answer = ["a","d","a","c","b"];
	 var q1 = document.forms["JSQuiz"]["q1"].value;
	 var q2 = document.forms["JSQuiz"]["q2"].value;
	 var q3 = document.forms["JSQuiz"]["q3"].value;
	 var q4 = document.forms["JSQuiz"]["q4"].value;
	 var q5 = document.forms["JSQuiz"]["q5"].value;
	 
	 for (let i = 1; i <= high; i++ ) {
		 
		if (eval('q'+i) == null || eval('q'+i) == '') {
			
		        alert("Please attempt question " + i);
		        return false;
			
		}
	}
	 
	 for (let i = 1; i <= high; i++) {
	
		if ( eval('q'+i) == answer[i - 1]) {
			
			score++;
				
		}
	 }
		 
	 var result = document.getElementById('firstresult');
	 result.innerHTML = "<h3>You scored <span>"+ score + "</span> out of   <span>" + high + "</span></h3>";
	 $('#firstresult').fadeOut(0);
	 $('#firstresult').fadeIn(3000);

	 var results = document.getElementById('secondresult');
	 results.innerHTML = '<h3> You scored <span>'+ score +'</span> out of <span>' + high + '</span></h3>'; 
	 $('#secondresult').fadeOut(0);
	 $('#secondresult').fadeIn(3000);

	 if (score > localStorage.getItem('firstresult')){
		
		localStorage.setItem('firstresult', score);
		var hscore = document.getElementById('highscore');
		hscore.innerHTML = '<h3> Your score of <span>'+ score +'</span> was the highest score out of <span>' + high + '</span></h3>';
		$('#highscore').fadeOut(0);
		$('#highscore').fadeIn(2000);
		$('#highscore').fadeOut(3000);

	}

	 return false;
	 
	 });

});
        