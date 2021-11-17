const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const allCities = [];
const searchInput = document.getElementById("searchInput");
const suggestions = document.querySelector(".suggestions");
const initialSuggestionsHtml = suggestions.innerHTML;

fetch(endpoint)
  .then(response => {
      if (!response.ok) {
        document.getElementById("error").innerHTML = `Error ${response.status}`;
        throw new Error(response.status);
      } else {
        return response.json();
    }
    })
  .then(data => {
      allCities.push(...data);
      searchInput.removeAttribute("disabled");
});

searchInput.addEventListener("input", (e) => {
    const text = e.target.value;
    if (!text) {
        suggestions.innerHTML = initialSuggestionsHtml;
    } else {
        const filteredCities = filterCities(text);
        mapCities(filteredCities, text);
    }
});

function filterCities(text) {
    const parsedText = text.toLowerCase();
    return allCities.filter(({ city, state }) => city.toLowerCase().includes(parsedText) || state.toLowerCase().includes(parsedText));
}

function mapCities(array, text) {
    const newHtml = array.map(({ city, state, population }) => {
        const regex = new RegExp(text, "ig");
        const highlightedCity = city.replaceAll(regex, str => `<span class="yellow">${str}</span>`);
        const highlightedState = state.replaceAll(regex, str => `<span class="yellow">${str}</span>`);
        const formattedPopulation = parseInt(population).toLocaleString("en-US");        
        return `
        <li>
            <span class="name">${highlightedCity}, ${highlightedState}</span>
            <span class="population">${formattedPopulation}</span>
        </li>
        `;
    }).join("");
    suggestions.innerHTML = newHtml;
}