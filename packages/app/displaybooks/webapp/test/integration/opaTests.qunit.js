sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/demo/fe/appfe1/test/integration/FirstJourney',
		'com/demo/fe/appfe1/test/integration/pages/BooksList',
		'com/demo/fe/appfe1/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/demo/fe/appfe1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);