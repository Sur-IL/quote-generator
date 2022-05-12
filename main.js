'use strict'

const text = document.querySelector('.text');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');

async function getQuotes() {
    let url = "https://type.fit/api/quotes";

    const response = await fetch(url);
    const quotes = await response.json();
    const idx = Math.floor(Math.random() * quotes.length);
    const quote = quotes[idx].text;
    const auth = quotes[idx].author;

    if (auth === null) {
        author = 'Anonimous';
    }

    text.innerHTML = quote;
    author.innerHTML = '- ' + auth;
}

btn.addEventListener('click', getQuotes);