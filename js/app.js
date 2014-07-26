$(document).ready(function() {

	$.getJSON('data/questions.json', function(data) { 
		var entry = data[Math.floor(Math.random()*data.length)];
		// console.log(entry);

		// output the result to html
		var output = JSON.stringify(entry.Title);
	    $('#question').html(output);
	});

	// big'ify
	$("#question, #prompt").fitText();

});
