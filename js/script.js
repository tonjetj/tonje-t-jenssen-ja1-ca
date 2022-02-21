const resultsContainer = document.querySelector(".results");

const API_URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks";

var rapApiKey = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "3030d0a399msh3dbee496a88de2dp1e522djsn497db0569a61",
  },
};

async function fetchCards() {
  try {
    const response = await fetch(API_URL, rapApiKey);
    const cards = await response.json();
    console.log(cards);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < cards.length; i++) {
      if (!cards[i].img === true) {
        cards[i].name = "";
      }

      resultsContainer.innerHTML += ` <a href="details.html?id=" class="card"><img src="${cards[i].img}" alt="${cards[i].name}"/>
      <h2>${cards[i].name}<h2></div></a>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchCards();
