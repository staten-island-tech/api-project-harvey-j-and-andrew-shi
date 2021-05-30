import { DOMSelectors } from "./DOM";

const key = "RGAPI-360739c5-1a96-46f6-b942-bcf95baa916c";

//captize word
const capitalizeWord = async function (word) {
  try {
    const lower = word.toLowerCase();
    const finallWord = word.charAt(0).toUpperCase() + lower.slice(1);
    return finallWord;
  } catch (error) {
    console.log(error);
    alert("err capitalizeWord fun not working");
  }
};
//funtion to display the chapion
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
    alert("err dsp champ fun not working");
  }
};

//display all champions with the api key
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

// search for champ
const searchForm = async function () {
  try {
    DOMSelectors.searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const searchParams = DOMSelectors.searchArea.value;

      const searchQuery = async function () {
        try {
          const champName = await capitalizeWord(searchParams);
          const champResponse = await fetch(
            `http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${champName}.json?api_key=${key}`
          );
          const champInfo = await champResponse.json();
          dspChamps(champInfo.data);
        } catch (error) {
          console.log(error);
          alert("err invaild champion");
        }
      };
      searchQuery();
    });
  } catch (error) {
    console.log(error);
    alert("err searchForm fun not working");
  }
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
searchForm();
home();
