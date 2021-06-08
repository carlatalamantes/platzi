const fetchData = require("../utils/fetchData")
let API = "https://rickandmortyapi.com/api/character/";

fetchData(API).then(res => {
    return fetchData(API+res.results[0].id)
}).then(res2 => {
    return fetchData(res2.origin.url)
}).then(res3 => {
    console.log(res3)
}
).catch(e => {
    console.log("Error",e)
})