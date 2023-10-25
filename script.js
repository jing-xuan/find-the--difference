function generateSets()
{
    var numSymbolsPerCard = 8;
    var symbolsMinusOne = numSymbolsPerCard - 1;
    var symbolTypes = (numSymbolsPerCard * numSymbolsPerCard) - numSymbolsPerCard + 1; 
    var numCards = symbolTypes;

    var cards = new Array(numCards);

    for (var i = 0; i < numCards; i++)
    {
        cards[i] = new Array();
    }

    for (var symbol = 0; symbol < symbolsMinusOne * symbolsMinusOne; symbol++)
    {
        var startingCard = (symbol % symbolsMinusOne);
        for (var card = 0; card < symbolsMinusOne; card++)
        {
            var cardId = (startingCard + (card * (symbolsMinusOne + Math.floor(symbol / symbolsMinusOne))));
            while (cardId >= (card + 1) * symbolsMinusOne)
            {
                cardId = cardId % (((card + 1) * symbolsMinusOne)) + (card * symbolsMinusOne);   
            }
            cards[cardId].push(symbol);
        }
        cards[Math.floor(symbol / symbolsMinusOne) + (symbolsMinusOne * symbolsMinusOne)].push(symbol);
    }

    for (var symbol = (symbolsMinusOne * symbolsMinusOne); symbol < (symbolsMinusOne * (symbolsMinusOne + 1)); symbol++)
    {
        var startingCard = (symbol % (symbolsMinusOne * symbolsMinusOne)) * symbolsMinusOne;
        for (var i = 0; i < symbolsMinusOne; i++)
        {
            var cardId = startingCard + i;
            cards[cardId].push(symbol);
        }
        cards[numCards - 1].push(symbol);
    }

    for (var i = (symbolsMinusOne * symbolsMinusOne); i < numCards; i++)
    {
        cards[i].push(symbolTypes - 1);
    }

    //console.log(symbol);
    

    console.log(cards);
    
}


generateSets();
console.log("test");