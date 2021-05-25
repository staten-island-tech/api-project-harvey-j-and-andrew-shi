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

function dspChamps(cData) {
  Object.values(cData).forEach((champion) => {
    DOMSelectors.grid.insertAdjacentHTML(
      "beforeend",
      ` <div class="champ-card">
      <div class="champ-card-front">
        <img
          src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg"
          alt=""
          class="poster"
        />
      </div>
      <div class="champ-card-back">
        <h3 class="champ-card-header">${champion.id}</h3>
        <div class="title-box">
          <p class="title">${champion.title}</p>
        </div>
        <div class="about-box">
          <p class="ab">about</p>
          <p class="ab">${champion.blurb}</p>
        </div>
        <div class="lrn-more">
Click to learn more
        </div>
      </div>
    </div> `
    );
  });
}

const query = async function () {
  try {
    const response = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json?api_key=${key}`
    );
    const info = await response.json();
    console.log(info.data);
    const champData = info.data;

    dspChamps(champData);
  } catch (error) {
    console.log(error);
    alert("jp");
  }
};
query();

const listen = function () {
  console.log("uwu");
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
    console.log(searchParams);
    //const searchQuery = async function () {};
  });
};

listen();
