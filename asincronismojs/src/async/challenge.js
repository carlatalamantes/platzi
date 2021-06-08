const fetchData = require("../utils/fetchData");
let API = "https://rickandmortyapi.com/api/character/";

const anotherChallenge = async (API) => {
  try {
    const data1 = await fetchData(API);
    const data2 = await fetchData(`${API}${data1.results[0].id}`);
    const data3 = await fetchData(data2.origin.url);
    console.log(data1);
    console.log(data2);
    console.log(data3);
  } catch (error) {
    console.log(error);
  }
};

console.log("1");
anotherChallenge(API);
console.log("2");
