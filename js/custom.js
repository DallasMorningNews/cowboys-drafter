$(document).ready(function() {


	//our pool of players to pick from
	var playerPool=[{"playerID":"jameiswinston","firstname":"Jameis","lastname":"Winston","position":"qb","round":1,"school":"Florida State","playerHeight":"6'3\"","playerWeight":231,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com","machota":"machota"},{"playerID":"marcusmariota","firstname":"Marcus","lastname":"Mariota","position":"qb","round":1,"school":"Oregon","playerHeight":"6'3\"","playerWeight":222,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.cnn.com"},{"playerID":"quarterbackthree","firstname":"Quarterback","lastname":"Three","position":"qb","round":1,"school":"Texas","playerHeight":"6'2\"","playerWeight":225,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.utexas.edu"},{"playerID":"amaricooper","firstname":"Amari","lastname":"Cooper","position":"wr","round":2,"school":"Alabma","playerHeight":"6'0\"","playerWeight":211,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"playerID":"kevinwhite","firstname":"Kevin","lastname":"White","position":"wr","round":2,"school":"West Virginia","playerHeight":"6'2\"","playerWeight":215,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com","machota":"machota"},{"playerID":"devanteparker","firstname":"DeVante","lastname":"Parker","position":"wr","round":2,"school":"Louisville","playerHeight":"6'2\"","playerWeight":209,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"playerID":"leonardwilliams","firstname":"Leonard","lastname":"Williams","position":"de","round":2,"school":"USC","playerHeight":"6'4\"","playerWeight":302,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"playerID":"arikarmstead","firstname":"Arik","lastname":"Armstead","position":"de","round":2,"school":"Nebraska","playerHeight":"6'7\"","playerWeight":292,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com","machota":"machota"},{"playerID":"dantefowler","firstname":"Dante","lastname":"Fowler Jr.","position":"de","round":2,"school":"Florida State","playerHeight":"6'2\"","playerWeight":261,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"playerID":"brandonscherff","firstname":"Brandon","lastname":"Scherff","position":"ol","round":2,"school":"Iowa","playerHeight":"6'4\"","playerWeight":319,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"playerID":"andruspeat","firstname":"Andrus","lastname":"Peat","position":"ol","round":2,"school":"Stanford","playerHeight":"6'6\"","playerWeight":313,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"playerID":"cameronerving","firstname":"Cameron","lastname":"Erving","position":"ol","round":2,"school":"Florida State","playerHeight":"6'5\"","playerWeight":313,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com","machota":"machota"},{"playerID":"shaneray","firstname":"Shane","lastname":"Ray","position":"lb","round":3,"school":"Missouri","playerHeight":"6'2\"","playerWeight":245,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"playerID":"vicbeasley","firstname":"Vic","lastname":"Beasley","position":"lb","round":3,"school":"Clemson","playerHeight":"6'3\"","playerWeight":246,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com"},{"playerID":"eliharold","firstname":"Eli","lastname":"Harold","position":"lb","round":3,"school":"Virginia","playerHeight":"6'3\"","playerWeight":247,"sturmsays":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sodales sem. Etiam suscipit justo eu ultrices facilisis. Quisque mollis faucibus turpis. Pellentesque a quam eget libero maximus auctor. Nulla pulvinar at tellus suscipit fringilla. Sed non lorem sed nunc aliquet suscipit. Integer arcu mauris, placerat id elementum vitae, lobortis vel est. Pellentesque blandit nisl pretium sodales luctus. Maecenas tempor magna a vulputate porta.","sturmlink":"http://www.dallasnews.com","machota":"machota"}]
	

	//controls behavior of player div when selected
	function selectPlayer(roundDiv) {
		$('.player').click(function() {
			roundDiv.find('.player').removeClass('selectedPlayer'); //remove selectedPlayer class from any player that may already have it 
			$(this).addClass('selectedPlayer'); //add it to the player that was selected
			roundDiv.children('.roundSubmitter').removeClass('noShow'); //show the make pick button
		})
	}


	//builds the list of available players and appends it to the document
	function positionSelection(round, position, roundDiv) {
		var targetRound = parseInt(round); //change the round parameter into an integer for use below ...
		var players = "";
		//run through the player pool, and pick out the players that match the position selected for the particular round. Then build out the player divs for each of those players
		$.each(playerPool, function(key, value) {
			if ( playerPool[key].round === targetRound && playerPool[key].position === position ) {
				players += "<div class='player' data-playerID='" + playerPool[key].playerID +"'>";
				players += "<h5>" + playerPool[key].firstname + " <span class='lastname'>" + playerPool[key].lastname +"</span></h5>";
				players += "<p><strong>College: </strong>" + playerPool[key].school + "</p>";
				players += "<p><strong>Height: </strong>" + playerPool[key].playerHeight + " <strong>Weight: </strong>" + playerPool[key].playerWeight + "</p>";
				players += "<p>" + playerPool[key].sturmsays + " <a href='" + playerPool[key].sturmlink + "' target='blank'> Read more</a></p>";
				players += "</div>";
			}
		})

		roundDiv.children('.players').removeClass('noShow'); //display the players div where the available players will go
		roundDiv.find('.availablePlayers').html(players); // then append those players
		selectPlayer(roundDiv); //run the function that controls selecting a player
	}


	//once a pick is made, we need to pass that id in to variables that the database can read
	function makePick(round, playerID, nextRound) {
		console.log(round, playerID, nextRound);
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
			if (round === "round3") {
				$('#playersPicked').html('');
				$('.selectedPlayer').clone().appendTo('#playersPicked');
				$('#yourPicks .player').removeClass('selectedPlayer');
			}

		$('html,body').animate({scrollTop: $(nextRound).offset().top}, 1000);
	}

	$('.roundSubmitter').click(function(e) {
		e.preventDefault(); //prevent the default behavior so we can scroll it
		var roundSubmitted = $(this).data('round'); //grabs the round we're making a pick in
		var playerSelected = $('#' + roundSubmitted).find('.selectedPlayer').data('playerid'); //gets the id of the player selected
		var nextRound = $(this).attr('href'); //grabs the next round id, so we know where to scroll to

		//pass those variables to the makePick function
		makePick(roundSubmitted, playerSelected, nextRound);
	})

	//when a position is clicked ...
	$('li').click(function(){

		var roundClicked = $(this).data('round'); // ... grab the round that position belongs to
		var positionClicked = $(this).data('position'); //.. grab the position that was clicked
		var roundDiv = $('#round' + roundClicked); //.. grab the round div that that position was clicked in

		positionSelection(roundClicked, positionClicked, roundDiv); // run the function that displays the players for that position in that round
	})




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

