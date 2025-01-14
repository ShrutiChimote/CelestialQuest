let url = "https://apod.nasa.gov/apod/";

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((img))