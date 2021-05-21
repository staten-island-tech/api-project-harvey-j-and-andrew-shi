import { DOMSelectors } from "./DOM";

const key = "RGAPI-360739c5-1a96-46f6-b942-bcf95baa916c";
//  DOMselectors.startBtn.addEventListener("click", () => {
//DOMselectors.displayContainer.classList.remove("d-none");
//DOMselectors.startPage.classList.add("d-none");
//displayQues();
//});
//function fetch(key) {
//return new Promise((resolve, reject) => {});
//}
//return data
const query = async function () {
  try {
    const response = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json?api_key=${key}`
    );
    const info = await response.json();
    console.log(info.data);
    const champData = info.data;

    Object.values(champData).forEach((champion) => {
      console.log(champion);

      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        ` <div class="movie-card">
        <div class="movie-card-front">
          <img
            src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg"
            alt=""
            class="poster"
          />
        </div>
        <div class="movie-card-back">
          <h3 class="movie-card-header">${champion.id}</h3>
          <div class="score-box">

            <p class="user-score">${champion.title}</p>
          </div>
          <div class="release-box">
            <p class="release-date">about</p>
            <p class="release-date">${champion.blurb}</p>
          </div>
          <div class="movie-genres">
Click to learn more
          </div>
        </div>
      </div> `
      );
    });
  } catch (error) {
    console.log(error);
    alert("jp");
  }
};
query();
