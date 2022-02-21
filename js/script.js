const resultsContainer = document.querySelector(".results");

async function getNews() {
  const API_URL =
    "https://content.guardianapis.com/search?api-key=67323820-8840-4c99-88d1-fb0be4429732";

  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json.response.results);
    resultsContainer.innerHTML = "";
    const news = json.response.results;

    for (let i = 0; i < news.length; i++) {
      console.log(news[i].webTitle);
      console.log(news[i].sectionName);
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = err("error", error);
  }
}
getNews();
