// Request all anime
let all_animes = await fetch('/get-animes', {method: "GET"});
all_animes = await all_animes.json();

// Creating two arrays. The first is an array of "currently airing"; The second is an array of recommended anime
let now_on_screen_animes = [];
let recommended_animes = [];
all_animes.forEach(anime => {
    if(anime["EPISODES_COMING_OUT"] < anime["EPISODES_RELEASED"]) {
        now_on_screen_animes.push(anime);
    } 
    if (anime["RECOMMENDED"] == true){
        recommended_animes.push(anime);
    }
});

// Request a list of anime genres
let genres = await fetch('/get-genres', {method: "GET"});
genres = await genres.json();


// Creating the first recommended anime on the page
let recommended_i = 0;
const info__video = document.getElementById("info__video");
info__video.src = recommended_animes[recommended_i]["NAME_ENG"] + ".mp4";
const details__hover = document.getElementById("details__hover");
details__hover.href = "/animes/" + recommended_animes[recommended_i]["NAME_ENG"].replace(/ /ig, "_");
const details__name = document.getElementById("details__name");
details__name.innerText = recommended_animes[recommended_i]["NAME_ENG"];
const details__img = document.getElementById("details__img");
details__img.src = recommended_animes[recommended_i]["NAME_ENG"] + ".jpeg";
show_genres(recommended_animes[recommended_i]["ID"]);

// Sorting all anime by NAME_ENG
all_animes.sort((a,b) => a.NAME_ENG > b.NAME_ENG ? 1 : -1);

// Creation of "currently airing" animes on the page
now_on_screen_animes.forEach(anime => {
    const now_on_screen_animes = document.getElementById("now-on-screen-animes");

    const now_on_screen_animes__item = document.createElement("div");
    now_on_screen_animes__item.className = "animes__item";

    const a = document.createElement("a");
    a.className = "animes__hover";
    a.href  = "/animes/" + anime["NAME_ENG"].replace(/ /ig, "_");

    const now_on_screen_animes__img = document.createElement("img");
    now_on_screen_animes__img.className = "animes__img";
    now_on_screen_animes__img.src = anime["NAME_ENG"].replace(/!|:/g, '') + ".jpeg";
    a.append(now_on_screen_animes__img);

    const now_on_screen_animes__name  = document.createElement("span");
    now_on_screen_animes__name.className = "animes__name";
    if (anime["NAME_ENG"].length > 20) {
        now_on_screen_animes__name.innerText = anime["NAME_ENG"].slice(0,16).trim() + "...";
    } else {
        now_on_screen_animes__name.innerText = anime["NAME_ENG"];
    }
    a.append(now_on_screen_animes__name);

    now_on_screen_animes__item.append(a);
    now_on_screen_animes.append(now_on_screen_animes__item);
});

// Creation of all anime on the page
all_animes.forEach(anime => {
    if (anime["TYPE"] == "TV Series" || anime["TYPE"] == "Movie") {

    const all_anime = document.getElementById("all-animes");

    const one_anime = document.createElement('div');
    one_anime.className = "animes__item";

    const a = document.createElement('a');
    a.className = "animes__hover";
    a.href = "/animes/" + anime["NAME_ENG"].replace(/ /ig, "_");

    const one_anime_poster = document.createElement('img');
    one_anime_poster.className = "animes__img";
    one_anime_poster.src = anime["NAME_ENG"].replace(/!|:/g, '') + ".jpeg";
    a.append(one_anime_poster);

    const one_anime_name = document.createElement('span');
    if (anime["NAME_ENG"].length > 20) {
        one_anime_name.innerText = anime["NAME_ENG"].slice(0,16).trim() + "...";
    } else {
        one_anime_name.innerText = anime["NAME_ENG"];
    }
    one_anime_name.className = "animes__name";
    a.append(one_anime_name);

    one_anime.append(a);
    all_anime.append(one_anime);
    }
}
);

window.onresize = () => {
    info__video.style.minWidth = null;
    info__video.style.minHeight = null;
}

// PREVIOUS RECOMMENDED ANIME
document.getElementById("recommended-anime__prev-btn").onclick = () => {
    recommended_i = (recommended_i == 0) ? recommended_animes.length-1 : recommended_i-1; 
    details__name.innerText = recommended_animes[recommended_i]["NAME_ENG"];
    info__video.style.minWidth = info__video.clientWidth + "px";
    info__video.style.minHeight = info__video.clientHeight + "px";
    info__video.src = recommended_animes[recommended_i]["NAME_ENG"] + ".mp4";
    details__img.src = recommended_animes[recommended_i]["NAME_ENG"] + ".jpeg"
    details__hover.href = "/animes/" + recommended_animes[recommended_i]["NAME_ENG"].replace(/ /ig, "_");
    show_genres(recommended_animes[recommended_i]["ID"]);
}

// NEXT RECOMMENDED ANIME 
document.getElementById("recommended-anime__next-btn").onclick = () => {
    next_recommended_anime();
}

info__video.onended = () => {
    next_recommended_anime();
}

function next_recommended_anime(){
    recommended_i = (recommended_i + 1) % recommended_animes.length;
    details__name.innerText = recommended_animes[recommended_i]["NAME_ENG"];
    info__video.style.minWidth = info__video.clientWidth + "px";
    info__video.style.minHeight = info__video.clientHeight + "px";
    info__video.src = recommended_animes[recommended_i]["NAME_ENG"] + ".mp4";
    details__img.src = recommended_animes[recommended_i]["NAME_ENG"] + ".jpeg"
    details__hover.href = "/animes/" + recommended_animes[recommended_i]["NAME_ENG"].replace(/ /ig, "_");
    show_genres(recommended_animes[recommended_i]["ID"]);
}


function show_genres(i) {
    const ul = document.getElementById("details__genres");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    genres.forEach(genre => {
        if (genre["ANIME_ID"] == i) {
            const li = document.createElement("li");
            li.className = "genres__item";
            const a = document.createElement("a");
            a.innerText = genre.GENRE.toString();
            a.href = "/genres/"+ genre.GENRE.toString();
            li.append(a);
            ul.append(li);
        }
    })
}
