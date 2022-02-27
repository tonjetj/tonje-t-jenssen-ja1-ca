const detailContainer = document.querySelector(".container");

const url = "https://covid-19-statistics.p.rapidapi.com/reports?";
console.log(url);

const rapApiKey = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    "x-rapidapi-key": "3030d0a399msh3dbee496a88de2dp1e522djsn497db0569a61",
  },
};

async function fetchDetails() {
  try {
    const response = await fetch(url, rapApiKey);
    const info = await response.json();

    // I only get undefined shown as value if I don't pass in [] with a random number inside it. Don't knwo how to make the [i] dynamic and show the results on whatever country and province i click on at the index.html page...

    console.log(info.data[100]);
    let country = info.data[100];

    detailContainer.innerHTML = `<div class="detail">
          <h2>${country.region.name}, ${country.region.iso}</h2>
          <p>Province: ${country.region.province}</p>
          <p>Last updated: ${country.last_update}</p>
          <p>Deaths registered: ${country.deaths}</p>
      </div>
      `;
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchDetails();
