// API des tau de changes de diverses devises
const lienApi = "https://api.exchangerate-api.com/v4/latest/USD";

async function file_get_contents(uri, callback) {
    let res = await fetch(uri),
        ret = await res.text(); 
    return callback ? callback(ret) : ret; // a Promise() actually.
}

let contenuApi = file_get_contents(lienApi, console.log);
console.log(contenuApi);