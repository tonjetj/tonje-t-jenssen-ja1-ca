const searchField = document.querySelector(".search");
const container = document.querySelector(".container");
const resultsContainer = document.querySelector(".results");

const API_URL = "https://covid-19-statistics.p.rapidapi.com/reports";

const rapApiKey = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    "x-rapidapi-key": "3030d0a399msh3dbee496a88de2dp1e522djsn497db0569a61",
  },
};

async function fetchCountry() {
  try {
    const response = await fetch(API_URL, rapApiKey);
    const country = await response.json();
    console.log(country.data);

    const countries = country.data;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < countries.length; i++) {
      if (countries[i].region.province === "Unknown") {
        continue;
      }

      if (
        !countries[i].region.province ||
        countries[i].region.province === "string"
      ) {
        continue;
      }
      resultsContainer.innerHTML += `<a href="details.html?name=${countries[i].region.name}&province=${countries[i].region.province}" class="card">
                                              <div class="details">
                                              <p class="name">${countries[i].region.province}, <b>${countries[i].region.name}</b> </p>
                                              </div>
                                        </a>
      `;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchCountry();

const nav = document.querySelector("nav");

function handleScroll() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 100) {
    document.body.classList.add("scrolled");
    nav.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
    nav.classList.remove("scrolled");
  }
}

window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);

resultsContainer.addEventListener;
