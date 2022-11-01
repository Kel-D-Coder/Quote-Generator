const quote = document.querySelector('.quote');
const quoteBtn = document.querySelector('#new-quote');
const personName = document.querySelector('.person');

const quotes = [{quote: "Tough times never last but tough people do.", person: 'Robert H. Schuller'
},
{
   quote: 'Get busy living or get busy dying.', person: 'Stephen King'
},
{
   quote: "Whether you think you can or you think you can't, you're right.", person: "Henry Ford"
},
{
   quote: "Tis better to have loved and lost than to have never loved at all.", person: "Alrded Lord Tennyson"
},
{
   quote: 'A man is but what he knows.', person: "Sir Francis Bacon"
},
{
   quote: 'Be the best in everything you do, it goes a long way', person: "Okolo Chibundu"
},
{
   quote: 'You miss 100 percent of the shots you never take.', person: "Chidera Kennedy"
},
{
   quote: 'Strive not to be a success, but rather to be of value.', person: "Albert Einstein"
},
{
   quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.', person: "Animashaun Ibraheem"
},
{
   quote: 'Those who dare to fail miserably can achieve greatly.', person: "Daniel Abidemi"
},
{
   quote: 'No one can make you feel inferior without your consent.', person: "Olamide Ijaoribe"
},
]

quoteBtn.addEventListener("click", () => {
   let random = Math.floor(Math.random() * quotes.length);
   
   quote.textContent = quotes[random].quote;
   personName.textContent = quotes[random].person;
})