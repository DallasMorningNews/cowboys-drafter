$(document).ready(function() {

	//The variables that will have the names of your picks and will be passed into the database.
	var firstRoundPick;
	var secondRoundPick;
	var thirdRoundPick;

	//How many minutes are each round
	var firstRoundMinutes = 10;
	var secondRoundMinutes = 7;
	var thirdRoundMinutes = 5;

	//Fire the initial countdown timer with firstRoundMinutes from above
	startTimer(firstRoundMinutes);


	/*
	----------------------------------
	PICKING A PLAYER
	----------------------------------
	*/

	function selectPlayer() {
		$('.checkMark').click(function() {
			var round = $(this).parent().data('round'); //grab the round of the player selected
			var playerSelected = $(this).parent().data('playerid');

			$("#" + round).find('.checkMark').attr('src', 'images/uncheck.svg'); //remove the selected checkmark for all players in this round. This is to accommodate changing selected players
			$(this).attr('src', 'images/check.svg'); //add the selected checkmark to the player selected
			$("#" + round).find('.playerView').removeClass('selectedPlayer'); //remove the selectedPlayer class from all players in this round. This is to accommodate changing selected players
			$(this).parent().addClass('selectedPlayer'); //add the selected player class to the selected player
			$("#" + round).children('.roundSubmitter').removeClass('noShow'); //show the make pick button
			$('#' + round).find('.player').removeClass('picked'); //remove the check mark from the player button of any player already selected
			$.each($('.player'), function(key, value) {
				if ($(this).data('playerid') === playerSelected && $(this).data('round') === round) { //find the matching player from the player list and add a check mark to the selected player
					$(this).addClass('picked');
				}
			});
		})
	}


	/*
	----------------------------------
	DISPLAYING THE PLAYER MODULES
	----------------------------------
	*/

	function displayPlayer() {
		$('.player').click(function() { //when a player is clicked in the list ...
			var playerSelected = $(this).data('playerid'); //grab that player's id
			var round = $(this).data('round'); // and his round

			$("#" + round).find('.player').removeClass('viewing') // turn the background color off any player already being viewed
			$(this).addClass('viewing'); // turn on the background color for the player being viewed
			$("#" + round).find('.playerView').removeClass('viewable'); //find all player Modules within that round and hide them, in case one is being displayed
			$.each($('.playerView'), function(key, value) {
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
		var targetRound = parseInt(round); //change the round parameter into an integer for use below ...
		var players = "";
		var playerModules = ""

		//run through the player pool, and pick out the players that match the position selected for the particular round. Then build out the player list and the playerModule divs for each of those players

		$.each(playerPool, function(key, value) {
			if ( playerPool[key].round === targetRound && playerPool[key].position === position ) {
				players += "<li class='player' data-playerid='" + value.playerid + "' data-round='round" + value.round + "'>" + value.firstname + " " + value.lastname +"</li>";

				playerModules += "<div class='playerView clearFix' data-playerid='" + value.playerid + "' data-round='round" + value.round + "'>";
				playerModules += "<img src='" + value.playermug + "' alt='" + value.firstname + " " + value.lastname + "' />"
				playerModules += "<h3 class='playerName'>" + value.firstname + " <span class='lastName'>" + value.lastname + "</span></h3>";
				playerModules += "<div class='stats clearFix'>"
				playerModules += "<p class='playerStat'><span class='label'>School</span> " + value.school + "</p>";
				playerModules += "<p class='playerStat'><span class='label'>Height</span> " + value.playerheight + "</p>";
				playerModules += "<p class='playerStat lastStat'><span class='label'>Weight</span> " + value.playerweight + "</p>";
				playerModules += "</div>";
				if (playerPool[key].sturmsays) {
					playerModules += "<p class='blurb'><strong>STURM SAYS: </strong>" + value.sturmsays + " <a target='_blank' href='" + value.sturmlink + "'>Read More.</a></p>";
				}
				playerModules += "<img class='checkMark' src='images/uncheck.svg' alt='unchecked' />"
				playerModules += "</div>";
			}
		})
		roundDiv.children('.players').removeClass('noShow'); //display the players div where the available players will go
		roundDiv.find('.playerList').html(players); // then append those players
		roundDiv.find('.playerModule').html(playerModules); //append all the player Modules, though they will be hidden initially.
		displayPlayer(); //run the function that controls display a player
	}




	/*
	----------------------------------
	SUBMITTING A PICK FOR EACH ROUND
	----------------------------------
	*/
	var pickThree = false;

	function makePick(round, playerID, nextRound) {
		console.log(round, playerID, nextRound);
		console.log(pickThree);
		switch(round){
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
			$('#playersPicked').html(''); //clear that div in case they're changing a pick
			$('.selectedPlayer').clone().appendTo('#playersPicked'); // clone the selectedPlayer divs, then add them to the playersPicked div
			pickThree = true;
			console.log("test:" + pickThree);

		}

		if ( pickThree === true) {
			console.log('three');
			$('#playersPicked').html(''); //clear that div in case they're changing a pick
			$('.selectedPlayer').clone().appendTo('#playersPicked'); // clone the selectedPlayer divs, then add them to the playersPicked div

			//appending a change pick button to each of the selected players
			$.each($('#playersPicked .player'), function(key, value) {
				var changePick = "<a class='changePick' href='#round" + (key + 1) + "'>Change pick</a>"
				$(this).append(changePick);
			})

			//adding the functionality of the changePick button, so that the window scrolls back to the target round the user wants to change.
			$('.changePick').click(function(e) {
				e.preventDefault();
				var changeRound = $(this).attr('href');
				$('html,body').animate({scrollTop: $(changeRound).offset().top}, 500);
			})

			$('#yourPicks .player').removeClass('selectedPlayer'); // remove any selectedPlayer styling from those picks
			$('html,body').animate({scrollTop: $('#yourPicks').offset().top - 50}, 500);
		} else {
			$('html,body').animate({scrollTop: $(nextRound).offset().top - 50}, 500); //scroll the window to the next div
		}
	}


	/*
	----------------------------------
	CLICKING THE MAKE PICK BUTTON
	----------------------------------
	*/

	$('.roundSubmitter').click(function(e) {
		e.preventDefault(); //prevent the default behavior so we can scroll it
		var roundSubmitted = $(this).data('round'); //grabs the round we're making a pick in
		var playerSelected = $('#' + roundSubmitted).find('.selectedPlayer').data('playerid'); //gets the id of the player selected
		var nextRound = $(this).attr('href'); //grabs the next round id, so we know where to scroll to

		clearInterval(timer); //Dump the old timer object

		switch(roundSubmitted){ //Get current round so I can reset timer for next round
				case "round1":
					startTimer(secondRoundMinutes); //Reset timer to 7 minutes for second round
					break;
				case "round2":
					startTimer(thirdRoundMinutes); //Reset timer to 5 minutes for third round
					break;
				case "round3":
					break; //Do nothing since you are already at last round
				default:
					alert("There was an error determining which round you are in.")
		}

		//pass those variables to the makePick function
		makePick(roundSubmitted, playerSelected, nextRound);
	})


	/*
	----------------------------------
	CLICKING A POSITION BUTTON
	----------------------------------
	*/

	$('li').click(function(){

		var roundClicked = $(this).data('round'); // ... grab the round that position belongs to
		var positionClicked = $(this).data('position'); //.. grab the position that was clicked
		var roundDiv = $('#round' + roundClicked); //.. grab the round div that that position was clicked in
		$(roundDiv).find('li').removeClass('activePosition'); //removing the styling of a selected position
		$(this).addClass('activePosition'); //adding the selected position styling to the position clicked

		var p; //setting an empty variable that will hold the proper name of the position clicked
		//determining which position clicked, and setting that variable
		switch(positionClicked) {
			case "qb": p = "quarterbacks";break;
			case "rb": p = "running backs";break;
			case "wr": p = "wide receivers";break;
			case "te": p = "tight ends";break;
			case "ol": p = "offensive linemen";break;
			case "dl": p = "defensive linemen";break;
			case "lb": p = "linebackers";break;
			case "db": p = "defensive backs";break;
			default: console.log("There was a problem with the position picked.");
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
		console.log("Submitting draft choices: "+firstRoundPick+", "+secondRoundPick+", "+thirdRoundPick);

		//Post the stuff to the PHP script
		$.post("http://www.jlsmith.net/work/cowboysdrafter/update.php", {

			//assign variables to their corresponding PHP variables
			firstRoundPick: firstRoundPick,
			secondRoundPick: secondRoundPick,
			thirdRoundPick: thirdRoundPick

		}, function (data) {

			//"data" is what PHP returns to the page
			console.log("Data returned: " + data);
			var returnedDataArray = data.split('|');

			//First number is number who picked just like you, second number is total
			var firstRoundData = [parseInt(returnedDataArray[0]), parseInt(returnedDataArray[1])];
			var secondRoundData = [parseInt(returnedDataArray[2]), parseInt(returnedDataArray[3])];
			var thirdRoundData = [parseInt(returnedDataArray[4]), parseInt(returnedDataArray[5])];

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

/*
----------------------------------
FUNCTION TO DRAW CHARTS
----------------------------------
*/
function drawCharts(data, target) {
	console.log("in drawCharts with " + data + " and " + target);
}

/*
----------------------------------
FUNCTION FOR TIMER
----------------------------------
*/

var timer = 0; //Create and prime default interval object

function startTimer(duration) {
	console.log("in startTimer with " + duration + " minutes.");

	var secondsRemaining = duration*60; //get time remaining in seconds
	var minutes = duration; //since durstion was entered in minutes we use duration again
	var seconds; //Create seconds variable to hold modulus seconds

	timer = setInterval(function () {
		minutes = Math.floor(secondsRemaining/60);
		seconds = parseInt(secondsRemaining % 60,10);
		if (seconds < 10){
			seconds = "0"+seconds;
		}
		if (secondsRemaining < 60){
			$("#clock").css("color","yellow");
		}
		if (secondsRemaining <30){
			$("#clock").css("color","orange");
		}
		if (secondsRemaining < 10 ){
			$("#clock").css("color","red");
		}
		if (secondsRemaining <= 0){
			alert("Times up!");
			clearInterval(timer); //Dump timer object since we're done.
		}
		$("#clock").text(minutes+":"+seconds);
		secondsRemaining--;
	}, 1000);
}

