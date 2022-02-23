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
      if (i === 60) {
        break;
      }

      resultsContainer.innerHTML += `<a href="details.html?id=${cards[i].id}" class="card">
                                        <div class="image" style="background-image: url(${cards[i].img});"></div>
                                              <div class="details">
                                                  <h2 class="name">${cards[i].name}</h2>
                                              </div>
                                        </a>
      `;
    }
  } catch (error) {
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchCards();

const nav = document.querySelector("nav");

function handleScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 10) {
    document.body.classList.add("scrolled");
    nav.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
    nav.classList.remove("scrolled");
  }
}

window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);
