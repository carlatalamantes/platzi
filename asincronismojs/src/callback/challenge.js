let XMLHttpRquest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url, callback) {
  let xhttp = new XMLHttpRquest();
  xhttp.open("GET", url, true); //Last value activates asynchronism
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      //Request is ready
      if (xhttp.status === 200) {
        //Request was successful
        callback(null, JSON.parse(xhttp.responseText)); //Error, result
      } else {
        const error = new Error("Error " + url);
        return callback(error, null); //Error, result
      }
    }
  };
  xhttp.send();
}

//Lo ideal es tener no más de 3 llamadas
fetchData(API, function (error1, res1) {
  if (error1) return console.log("Error1", error1);
  fetchData(API + res1.results[0].id, function (error2, res2) {
    if (error2) return console.log("Error2", error2);
    fetchData(res2.origin.url, function (error3, res3) {
      if (error3) return console.log("Error3", error3);
      console.log(res1.info);
      console.log(res2.name);
      console.log(res3.dimension);
    });
  });
});
