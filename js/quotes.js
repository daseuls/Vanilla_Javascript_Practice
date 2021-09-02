const quotes = [
  {
    quote:
      "There are no great people in this world, only great challenges which ordinary people rise to meet.",
    author: "William Frederick Halsey, Jr.",
  },
  {
    quote:
      "Only passions, great passions, can elevate the soul to great things.",
    author: "Denis Diderot",
  },
  {
    quote: "Convictions are more dangerous enemies of truth than lies.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Well begun is half done.",
    author: "Aristotle",
  },
  {
    quote:
      "If you're never scared or embarrassed or hurt, it means you never take any chances.",
    author: "Julia Sorel",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "There is no pleasure in having nothing to do; the fun is in having lots to do and not doing it.",
    author: "Mary Wilson Little",
  },
  {
    quote:
      "We must be willing to get rid of the life we've planned, so as to have the life that is waiting for us.",
    author: "Joseph Campbell",
  },
  {
    quote: "The future depends on what we do in the present.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "If we all did the things we are capable of doing, we would literally astound ourselves.",
    author: "Thomas A. Edison",
  },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuotes.quote
author.innerText = todaysQuotes.author
