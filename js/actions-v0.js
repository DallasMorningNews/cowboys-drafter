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
});

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
