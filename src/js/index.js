import { DOMSelectors } from "./DOM";

const key = "RGAPI-360739c5-1a96-46f6-b942-bcf95baa916c";

const dspChamps = async function (cData) {
  try {
    DOMSelectors.grid.innerHTML = "";
    Object.values(cData).forEach((champion) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `  <div tabindex="0" class="champ-card">
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
  } catch (error) {
    console.log(error);
    alert("err dsp champ not working");
  }
};

const query = async function () {
  try {
    const response = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json?api_key=${key}`
    );
    const info = await response.json();
    dspChamps(info.data);
  } catch (error) {
    console.log(error);
    alert("err api fetch does not work");
  }
};

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const champResponse = await fetch(
          `http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${searchParams}.json?api_key=${key}`
        );
        const champInfo = await champResponse.json();
        DOMSelectors.grid.innerHTML = "";
        dspChamps(champInfo.data);
      } catch (error) {
        console.log(error);
        alert("err invaild champion");
      }
    };
    searchQuery();
  });
};

const home = async function () {
  try {
    DOMSelectors.homeButton.addEventListener("click", () => {
      DOMSelectors.grid.innerHTML = "";
      query();
    });
  } catch (error) {
    console.log(error);
    alert("err home btn not working");
  }
};

query();
home();
listen();
