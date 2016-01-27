$(function() {
    // jquery

    var $qAuthor = $('#quote-author');
    var $qYear = $('#quote-year');
    var $qFrom = $('#quote-from');
    var $qText = $('#quote-text');

    // returns a random quote
    function randomQuote() {
        var random = Math.floor((Math.random() * quotesDB.length) + 1);
        var randomQuote = quotesDB[random]

        return randomQuote

    }
    // clears the current quote
    function clearQuote() {
        $qAuthor.text("");
        $qYear.text("");
        $qFrom.text("");
        $qText.text("");
    }

    function setQuoteText() {
        var quote = randomQuote()

        $qAuthor.text(quote.author);
        $qText.text(quote.text);
       
        if (quote.year) {
            $qYear.text(quote.year);
        }
        if (quote.in) {
            $qFrom.text(quote.in);
        }
    }

    $('#clear-quote').click(clearQuote);

    $('#quoter').click(function() {

        clearQuote();
        setQuoteText();
    });












})