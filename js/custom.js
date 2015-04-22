$(document).ready(function () {


	//The variables that will have the names of your picks and will be passed into the database.
	var firstRoundPick;
	var secondRoundPick;
	var thirdRoundPick;

	var data1 = [];
	var data2 = [];
	var data3 = [];

	var playersDrafted = []; // an array of the playerid's of players picked. This array's values will be checked against to see which players in subsequent rounds should be displayed, so that a player picked in an earlier round is displayed in a later round.


	/*
	----------------------------------
	PICKING A PLAYER
	----------------------------------
	*/

	function selectPlayer() {
		$('.roundSubmitter').click(function (e) {
			var round = $(this).parent().data('round'); //grab the round of the player selected
			var playerSelected = $(this).parent().data('playerid');

			$("#" + round).find('.playerView').removeClass('selectedPlayer'); //remove the selectedPlayer class from all players in this round. This is to accommodate changing selected players
			$(this).parent().addClass('selectedPlayer'); //add the selected player class to the selected player
			$('#' + round).find('.player').removeClass('picked'); //remove the check mark from the player button of any player already selected
			$.each($('.player'), function (key, value) {
				if ($(this).data('playerid') === playerSelected && $(this).data('round') === round) { //find the matching player from the player list and add a check mark to the selected player
					$(this).addClass('picked');
				}
			});
			e.preventDefault(); //prevent the default behavior so we can scroll it
			var roundSubmitted = $(this).data('round'); //grabs the round we're making a pick in
			var playerSelected = $('#' + roundSubmitted).find('.selectedPlayer').data('playerid'); //gets the id of the player selected
			var nextRound = $(this).attr('href'); //grabs the next round id, so we know where to scroll to
			var roundInt = $(this).data('roundint');
			makePick(roundSubmitted, playerSelected, nextRound, roundInt);
			//positionSelection(roundInt, "qb", $(nextRound));
			//$(nextRound).find("li:first-of-type").addClass("activePosition");
			$(nextRound).find(".positions li:first-of-type").trigger("click");

		})
	}


	/*
	----------------------------------
	DISPLAYING THE PLAYER MODULES
	----------------------------------
	*/

	function displayPlayer() {
		$('.player').click(function () { //when a player is clicked in the list ...
			var playerSelected = $(this).data('playerid'); //grab that player's id
			var round = $(this).data('round'); // and his round

			$("#" + round).find('.player').removeClass('viewing') // turn the background color off any player already being viewed
			$(this).addClass('viewing'); // turn on the background color for the player being viewed
			$("#" + round).find('.playerView').removeClass('viewable'); //find all player Modules within that round and hide them, in case one is being displayed
			$.each($('.playerView'), function (key, value) {
				if ($(this).data('playerid') === playerSelected && $(this).data('round') === round) { //find the matching player module to the player clicked, and make that module viewable
					$(this).addClass('viewable');
				}
			});
		})

		selectPlayer(); //run the function that controls selecting a player
	}

	/*
	----------------------------------
	BUILDING THE LIST OF PLAYERS
	----------------------------------
	*/

	function positionSelection(round, position, roundDiv) {
		//console.log(round, position, roundDiv);
		var targetRound = parseInt(round); //change the round parameter into an integer for use below ...
		var players = "";
		var playerModules = ""

		//run through the player pool, and pick out the players that match the position selected for the particular round. Then build out the player list and the playerModule divs for each of those players

		$.each(playerPool, function (key, value) {
			if (playerPool[key].round === targetRound && playerPool[key].position === position) {

				players += "<li class='player' data-playerid='" + value.playerid + "' data-round='round" + value.round + "'>" + value.firstname + " " + value.lastname + "</li>";

				playerModules += "<div class='playerView clearFix' data-playerid='" + value.playerid + "' data-round='round" + value.round + "'>";
				if (value.playermug) { //if there's a value for mug use it
					playerModules += "<img src='" + value.playermug + "' alt='" + value.firstname + " " + value.lastname + "' />"
				} else { //else if there is no value for mug replace with testmug
					playerModules += "<img src='images/testMug.jpg' alt='" + value.firstname + " " + value.lastname + "' />"
				}
				playerModules += "<header class='playerHead'>";
				playerModules += "<h1 class='playerPos'>" + position + "</h1>";
				playerModules += "<h3 class='playerName'>" + value.firstname + " <span class='lastName'>" + value.lastname + "</span></h3>";
				if (value.machota === "X") {
					playerModules += "<p class='machotaPick'>Machota's pick</p>";
				}
				playerModules += "</header>"
				playerModules += "<div class='stats clearFix'>"
				playerModules += "<p class='playerStat'><span class='label'>School</span> " + value.school + "</p>";
				playerModules += "<p class='playerStat'><span class='label'>Height</span> " + value.playerheight + "</p>";
				playerModules += "<p class='playerStat lastStat'><span class='label'>Weight</span> " + value.playerweight + "</p>";
				playerModules += "</div>";
				if (playerPool[key].sturmsays) {
					playerModules += "<p class='blurb'><strong>BOB STURM SAYS: </strong>" + value.sturmsays + " <a target='_blank' href='" + value.sturmlink + "'>Read More.</a></p>";
				}
				playerModules += "<a href='#round" + (round + 1) + "' class='roundSubmitter' data-round='round" + round + "' data-roundInt='" + round + "'>Draft " + value.firstname + " " + value.lastname + "</a>"
				playerModules += "</div>";
			}
		})
		roundDiv.children('.players').removeClass('noShow'); //display the players div where the available players will go
		roundDiv.find('.playerList').html(players); // then append those players

		//check if a player in the player list has been selected before, and if so, remove him from the list in following rounds
		roundDiv.find('.player').each(function (k, v) {
			var playerID = $(this).data('playerid')
			if ($.inArray(playerID, playersDrafted) >= 0) {
				$(this).remove();
			}
		})
		roundDiv.find('.playerList li:first-of-type').addClass('viewing'); //mark the first player in the list with the "viewing" class
		roundDiv.find('.playerModule').html(playerModules); //append all the player Modules, though they will be hidden initially.
		//check if a player has been picked before, and if so, remove that player's playerview from the player modules
		roundDiv.find('.playerView').each(function (k, v) {
			var playerID = $(this).data('playerid')
			if ($.inArray(playerID, playersDrafted) >= 0) {
				$(this).remove();
			}
		})
		roundDiv.find('.playerModule .playerView:first-of-type').addClass('viewable');
		displayPlayer(); //run the function that controls display a player
	}

	positionSelection(1, "qb", $("#round1"))

	/*
	----------------------------------
	SUBMITTING A PICK FOR EACH ROUND
	----------------------------------
	*/
	var pickThree = false;

	function makePick(round, playerID, nextRound, roundInt) {
		//console.log(round, playerID, nextRound);


		// check if we already have three players selected. If someone changes their pick, remove the old player from that array, and insert the new. If we don't have a three players, just push the playerid of the player selected
		playersDrafted.splice((roundInt - 1), 1, playerID);

		// if we're clicking the last round, make sure we go to the #yourpicks div
		if (nextRound === "#round4") {
			nextRound = "#yourPicks";
		}

		//console.log(pickThree);
		//setting variables to the players picked for each round
		switch (round) {
		case "round1":
			firstRoundPick = playerID;
			break;
		case "round2":
			secondRoundPick = playerID;
			break;
		case "round3":
			thirdRoundPick = playerID;
			break;
		default:
			alert("Problem picking round");
		}

		$(nextRound).removeClass('noShow'); //display the next round


		//if this is the last round, we're going to populate a final div with the user's picks with the selectedPlayer divs
		if (round === "round3") {
			pickThree = true;
			//console.log("test:" + pickThree);
		}

		if (pickThree === true) {
			//console.log('three');
			
			$('#finalizeDraft').show();
			//building the divs of the players picked to populate the #yourpicks div
			var draftOutput = "";

			for (i = 0; i < playersDrafted.length; i++) {
				var currentPlayer = playersDrafted[i];
				//console.log(currentPlayer);
				var roundPicked = i + 1;
				$.each(playerPool, function (k, v) {
					if (v.playerid === currentPlayer) {
						draftOutput += "<div class='playerDrafted' id='drafted" + roundPicked + "'>";
						draftOutput += "	<h4>Round " + roundPicked + "</h4>";
						draftOutput += "	<h2>" + v.firstname + " " + v.lastname + "</h2>";
						draftOutput += "	<p><strong>" + v.position + ", " + v.school + "</strong></p>";
						draftOutput += "	<p>Height: " + v.playerheight + " Weight: " + v.playerweight + "</p>";
						draftOutput += "	<div class='chartHead'>Draft comparison</div>";
						draftOutput += "	<div class='chartChatter'>The number in blue indicates the number of people who made the same selection this round:</div>";
						draftOutput += "	<div class='draftResults' id='round" + (k + 1) + "results'></div>";
						draftOutput += "</div>";
						return false;
					}
				});

			}

			$('#playersPicked').html(draftOutput);

			$('#yourPicks .player').removeClass('selectedPlayer'); // remove any selectedPlayer styling from those picks
			$('html,body').animate({
				scrollTop: $('#yourPicks').offset().top - 50
			}, 500);
		} else {
			$('html,body').animate({
				scrollTop: $(nextRound).offset().top - 50
			}, 500); //scroll the window to the next div
		}
	}


	/*
	----------------------------------
	CLICKING THE MAKE PICK BUTTON
	----------------------------------
	*/

	$('.roundSubmitter').click(function (e) {
		e.preventDefault(); //prevent the default behavior so we can scroll it
		var roundSubmitted = $(this).data('round'); //grabs the round we're making a pick in
		var playerSelected = $('#' + roundSubmitted).find('.selectedPlayer').data('playerid'); //gets the id of the player selected
		var nextRound = $(this).attr('href'); //grabs the next round id, so we know where to scroll to

		//pass those variables to the makePick function
		makePick(roundSubmitted, playerSelected, nextRound);
	})


	/*
	----------------------------------
	CLICKING A POSITION BUTTON
	----------------------------------
	*/

	$('.positions li').click(function () {

		var roundClicked = $(this).data('round'); // ... grab the round that position belongs to
		var positionClicked = $(this).data('position'); //.. grab the position that was clicked
		var roundDiv = $('#round' + roundClicked); //.. grab the round div that that position was clicked in
		$(roundDiv).find('.positions li').removeClass('activePosition'); //removing the styling of a selected position
		$(this).addClass('activePosition'); //adding the selected position styling to the position clicked

		var p; //setting an empty variable that will hold the proper name of the position clicked
		//determining which position clicked, and setting that variable
		switch (positionClicked) {
		case "qb":
			p = "quarterbacks";
			break;
		case "rb":
			p = "running backs";
			break;
		case "wr":
			p = "wide receivers";
			break;
		case "te":
			p = "tight ends";
			break;
		case "ol":
			p = "offensive linemen";
			break;
		case "dl":
			p = "defensive linemen";
			break;
		case "lb":
			p = "linebackers";
			break;
		case "db":
			p = "defensive backs";
			break;
		default:
			//console.log("There was a problem with the position picked.");
		}

		$(roundDiv).find('.position').html(p); //assigning the proper position name to the positions span

		positionSelection(roundClicked, positionClicked, roundDiv); // run the function that displays the players for that position in that round
	})



	/*
	----------------------------------
	SUBMIT DRAFT TO DATABASE
	----------------------------------
	*/


	//#finalizeDraft is the button you click to post the data
	$("#finalizeDraft").click(function () {
		//console.log("Submitting draft choices: " + firstRoundPick + ", " + secondRoundPick + ", " + thirdRoundPick);

		//Post the stuff to the PHP script
		$.post("http://www.jlsmith.net/work/cowboysdrafter/update.php", {

			//assign variables to their corresponding PHP variables
			firstRoundPick: firstRoundPick,
			secondRoundPick: secondRoundPick,
			thirdRoundPick: thirdRoundPick

		}, function (data) {

			//"data" is what PHP returns to the page
			//.log("Data returned: " + data);
			var returnedDataArray = data.split('|');

			//First number is number who picked just like you, second number is total
			data1 = [parseInt(returnedDataArray[0]), parseInt(returnedDataArray[1])];
			data2 = [parseInt(returnedDataArray[2]), parseInt(returnedDataArray[3])];
			data3 = [parseInt(returnedDataArray[4]), parseInt(returnedDataArray[5])];

			//console.log("First round: " + data1);
			//console.log("Second round: " + data2);
			//console.log("Third round: " + data3);

			//For each div with class .draftResults (These are the divs where the results with donuts will be displayed)
			$(".playerDrafted").each(function (i) {
				//Get the specific id, example "#firstRoundResults"
				var thisID = $(this).attr("id");
				$("#" + thisID).show();

				switch (thisID) {
				case "drafted1":
					var thisData = data1;
					break;
				case "drafted2":
					var thisData = data2;
					break;
				case "drafted3":
					var thisData = data3;
					break;
				default:
					alert("There was an error determining which data to use.")
				}

				//Call drawcharts function with data and target div
				//console.log("\nPreparing to drawCharts with (" + thisData + ", " + thisID + ")");

				dynamicSizing();
				$(window).resize(function () {
					setTimeout(function () {
						//console.log("resizing");
						dynamicSizing();
						for (var i = 1; i <= 3; i++) {
							//console.log(i);
							switch (i) {
							case 1:
								drawCharts(data1, "drafted1");
								break;
							case 2:
								drawCharts(data2, "drafted2");
								break;
							case 3:
								drawCharts(data3, "drafted3");
								break;
							default:
								alert("oops.");
							}

						};
					}, 500);
				});

				drawCharts(thisData, thisID);

			});

			firstRoundName = $("#drafted1 h2").text();
			secondRoundName = $("#drafted2 h2").text();
			thirdRoundName = $("#drafted3 h2").text();

			//CHANGE THIS //CHANGE THIS //CHANGE THIS //CHANGE THIS //CHANGE THIS //CHANGE THIS //CHANGE THIS //CHANGE THIS
			var uriLink="http%3A%2F%2Fbit.ly%2F1IImn1N";  //CHANGE THIS
			//CHANGE THIS //CHANGE THIS //CHANGE THIS //CHANGE THIS //CHANGE THIS //CHANGE THIS //CHANGE THIS //CHANGE THIS

			var leadText = "My Dallas Cowboys draft: " + firstRoundName + ", " + secondRoundName + ", " + thirdRoundName + ". Who would you pick?";

			$("#facebookButton").click(function () {
				//Facebook share
				//console.log("Share to Facebook");
				FB.ui({
					method: 'feed',
					name: storyTitle,
					link: storyURL,
					caption: '',
					picture: storyIMG,
					description: leadText
				});
			});

			$("#twitterButton").click(function () {
				//console.log("Share to Twitter:\nstoryURL: " + storyURL + "\nstoryTitle: " + storyTitle + "\nleadText: " + leadText + "\nstoryIMG: " + storyIMG);
				//Twitter share quizShare
				window.open("https://www.twitter.com/intent/tweet?&hashtags=" + "&text=" + leadText + "&via=dallasnews&url=" + uriLink + "&image=" + storyIMG, "top=200, left=200,width=550,height=420");
			});


		});
	});
});

/*
----------------------------------
FUNCTION TO DRAW CHARTS
----------------------------------
*/

//colors
var red = "#f15b40",
	orange = "#faa54a",
	blue = "#4caacd",
	gold = "#ffcc4e",
	green = "#8fa955",
	purple = "#968fa3",
	brown = "#d37854",
	brightpurple = "#ae83ba",
	brightgreen = "a9d37b";
	white = "#ffffff";
	darkgray = "#CECDC6";
	cowboyBlue = "#002244";

//Margin and sizes
var margin = {
		top: 5,
		right: 0,
		bottom: 5,
		left: 0
	},
	width = 240, //set width of charts...
	height = 240;


var radius = width / 2;



/* testing out dynamic sizing */
function dynamicSizing() {
	var $windowWidth = $(".playerDrafted").width();
	width = $windowWidth * .95;
	if (width > 300) {
		width = 280;
	}
	height = width;
	radius = width / 2;
}



var numberFormatter = d3.format("0,000");

var color = d3.scale.ordinal()
	.range([cowboyBlue, darkgray]);

function drawCharts(data, target) {
	//console.log("in drawCharts with " + data + " and " + target);

	$("#" + target + " svg").remove();

	//Create myChart instance
	var myChart = d3.select("#" + target).append("svg") //get the target div and write an svg tag in it
		.attr("width", width + margin.left + margin.right) //set attributes...
		.attr("height", height + margin.top + margin.bottom);

	var group = myChart.append("g") //add a group tag to the svg
		.attr("transform", "translate(" + width / 2 + ", " + height / 2 + ") "); //set the group's attributes

	//Set the radius for inner and outer arc
	var arc = d3.svg.arc()
		.innerRadius(radius/2) //
		.outerRadius(radius)

	//Tell D3 we're gonna do some pie
	var pie = d3.layout.pie()
		.value(function (d) {
			return d;
		});

	var arcs = group.selectAll(".arc")
		.data(pie(data)) //Send the data through the pie function first
		.enter()
		.append("g")
		.attr("class", "arc");

	arcs.append("path")
		.attr("d", arc)
		.attr("fill", function (d, i) {
			return color(i);
		});

	arcs.append("text")
		.attr("transform", function (d) {
			return "translate(" + arc.centroid(d) + ")";
		})
		.attr("text-anchor", "middle")
		.attr("class", "label")
		.text(function (d) {
			return numberFormatter(d.data);
		});
	$("#finalizeDraft").hide();
	$(".chartHead").show();
	$(".chartChatter").show();
	$(".shareBar").show();
}
