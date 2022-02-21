const resultsContainer = document.querySelector(".results");

const API_URL = "https://free-epic-games.p.rapidapi.com/free";

var rapApiKey = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-epic-games.p.rapidapi.com",
    "x-rapidapi-key": "3030d0a399msh3dbee496a88de2dp1e522djsn497db0569a61",
  },
};

async function fetchEpicGames() {
  try {
    const response = await fetch(API_URL, rapApiKey);
    const json = await response.json();

    console.log(json.freeGames.current);

    resultsContainer.innerHTML = "";

    games = json.freeGames.current;

    games.forEach(function (game) {
      resultsContainer.innerHTML += `<a href="details.html?id=${game.id}" class="card">
                                            <div class="image" style="background-image: url(${game.keyImages});"></div>
                                            <div class="details">
                                                <h4 class="name">${game.title}</h3>
                                            </div>
                                        </a>`;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchEpicGames();
