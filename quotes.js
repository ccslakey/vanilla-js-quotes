$(function() {
    // jquery

    var $qAuthor = $('#quote-author');
    var $qYearIn = $('#quote-year-in');
    var $qFrom = $('#quote-from');
    var $qText = $('#quote-text');
    var $qContainer = $('#quote-container');


    // returns a random quote
    function randomQuote() {
        var random = Math.floor((Math.random() * quotesDB.length) + 1);
        var randomQuote = quotesDB[random]

        return randomQuote

    }
    // clears the current quote
    function clearQuote() {
        $qContainer.empty();
    }

    function outputQuoteHTML(){
        var quote = randomQuote()

        
        $qContainer.append('<div id="quote-text">'+ quote.text + '</div>');
        $qContainer.append('<div id="quote-author">'+ quote.author + '</div>');
        if (quote.year) { $qContainer.append('<div id="quote-year-in">'+ quote.year + '</div>'); }
        if (quote.in) {$qYearIn.append(quote.in) }
    }



    $('#clear-quote').click(clearQuote);

    $('#quoter').click(function() {
        clearQuote();
        outputQuoteHTML();
    });

    $('#quote-5').click(function() {
        clearQuote();
        
        var i = 5;
        while(i > 0){
            outputQuoteHTML();
            i--
        }
    });


});