const quotes = [
    {
        quote: '"Learn as if you will live forever, live like you will die tomorrow."',
        author: "Mahatma Gandhi",
    },
    {
        quote: '"Time is money."',
        author: "Benjamin Franklin",
    },
    {
        quote: '"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
        author: "Mother Teresa",
    },
    {
        quote: '"The only thing worse than being blind is having sight but no vision."',
        author: "Helen Keller",
    },
    {
        quote: '"Strive not to be a success, but rather to be of value."',
        author: "Albert Einstein",
    },
    {
        quote: '"Love asks me no questions, and gives me endless support."',
        author: "William Shakespeare",
    },
    {
        quote: '"Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies."',
        author: "Alexander Pope",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;