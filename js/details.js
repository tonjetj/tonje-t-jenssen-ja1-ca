const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://free-epic-games.p.rapidapi.com/free" +
  id +
  "?key=3030d0a399msh3dbee496a88de2dp1e522djsn497db0569a61";

console.log(url);

async function fetchGame() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchGame();
