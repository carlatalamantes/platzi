let XMLHttpRquest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRquest();
        xhttp.open("GET", url, true); //Last value activates asynchronism
        xhttp.onreadystatechange =( (event) =>{
            if (xhttp.readyState === 4) {
                //Request is ready
                xhttp.status === 200 ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error("Error", url));
            }
        });
        xhttp.send();
    })

}

module.exports=fetchData;
