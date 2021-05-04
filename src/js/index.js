const key = "RGAPI-360739c5-1a96-46f6-b942-bcf95baa916c";

const query = async function () {
  try {
    const response = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json?api_key=${key}`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("jp");
  }
};
query();
