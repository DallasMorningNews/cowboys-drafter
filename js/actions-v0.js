jQuery(document).ready(function ($) {

	var simpleDisplayAction = $('.simple-reveal-action');

	function displayInit() {
		if (simpleDisplayAction.length) {
			$.getScript("/interactives/template/common/js/kason.display.js", function () {
				simpleDisplayAction.kason_display();
			});
		}
	}

	displayInit();

	//The variables that will have the names of your picks and will be passed into the database.
	var firstRoundPick;
	var secondRoundPick;
	var thirdRoundPick;

	//.submitDraft is the button you click to post the data
	$(".submitDraft").click(function () {
		console.log("Submitting draft choices");

		//Post the stuff to the PHP script
		$.post("http://www.jlsmith.net/work/nfldrafter/update.php", {

			//assign variables to their corresponding PHP variables
			firstRoundPick: firstRoundPick,
			secondRoundPick: secondRoundPick,
			thirdRoundPick: thirdRoundPick

		}, function (data) {

			//"data" is what PHP returns to the page
			console.log("Data returned: " + data);
			var returnedDataArray = data.split('|');

			var firstRoundData = [parseInt(resultsArray[0]), parseInt(resultsArray[1])];
			var secondRoundData = [parseInt(resultsArray[2]), parseInt(resultsArray[3])];
			var thirdRoundData = [parseInt(resultsArray[4]), parseInt(resultsArray[5])];

			console.log("First round: " + firstRoundData);
			console.log("Second round: " + secondRoundData);
			console.log("Third round: " + thirdRoundData);

			//For each div with class .draftResults (These are the divs where the results with donuts will be displayed)
			$(".draftResults").each(function (i) {
				//Get the specific id, example "#firstRoundResults"
				var thisID = $(this).attr("id");

				switch (thisID) {
				case "firstRoundResults":
					var thisData = firstRoundData;
					break;
				case "secondRoundResults":
					var thisData = secondRoundData;
					break;
				case "fthirdRoundResults":
					var thisData = thirdRoundData;
					break;
				default:
					alert("There was an error determining which data to use.")
				}

				//Call drawcharts function with data and target div
				drawCharts(thisData, thisID);
			})


		});

	});

});

//THIS IS THE FUNCTION THAT WILL ACTUALLY DRAW THE D3 DONUTS
function drawCharts(data, target) {
	console.log("in drawCharts with " + data + " and " + target);
}



function init() {
	if (storyURL && comments) {
		commentInit(storyURL, storyTitle);
	}
	if (storyURL && leadText && share) {
		shareInit(storyURL, storyTitle, leadText, storyIMG, 'share-bar1');
		shareInit(storyURL, storyTitle, leadText, storyIMG, 'share-bar2');

	}
	// trackingInit(storyURL);

}
init();
