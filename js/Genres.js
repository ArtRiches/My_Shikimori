let anime_genre = window.location.href.split("/").pop();
// Request a list of anime genres
let genres = await fetch('/get-genres', {method: "GET"});
genres = await genres.json();

// Creating a list of anime IDs with a given genre
let anime_id = [];
genres.forEach(genre => {
    if (genre["GENRE"] == anime_genre) {
        anime_id.push(genre["ANIME_ID"])
    }
});

// Request all anime
let all_animes = await fetch('/get-animes', {method: "GET"});
all_animes = await all_animes.json();

// Creating anime with a given genre on the page
const animes_div = document.getElementById("animes-div");
anime_id.forEach(id => {
    const anime = document.createElement('div');
    anime.className = "anime";

    const a = document.createElement('a');
    a.className = "anime__hover";
    a.href = "/animes/" + all_animes[id-1]["NAME_ENG"].replace(/ /ig, "_");

    const anime_poster = document.createElement('img');
    anime_poster.className = "anime__img";
    anime_poster.src = "/" + all_animes[id-1]["NAME_ENG"].replace(/!|:/g, '') + ".jpeg";
    a.append(anime_poster);

    const anime_name = document.createElement('span');
    if (all_animes[id-1]["NAME_ENG"].length > 20) {
        anime_name.innerText = all_animes[id-1]["NAME_ENG"].slice(0,16).trim() + "...";
    } else {
        anime_name.innerText = all_animes[id-1]["NAME_ENG"];
    }
    anime_name.className = "anime__name";
    a.append(anime_name);

    anime.append(a);
    animes_div.append(anime);
});