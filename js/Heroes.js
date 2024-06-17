let hero_id = window.location.href.split("/").pop();
// Request for the name of the main character
let mainHeroName = await fetch('/get-main-hero-name', {method: "POST", body: JSON.stringify({"ID": hero_id}), headers: {"Content-Type": "application/json"}});
mainHeroName = await mainHeroName.json();

document.getElementById("hero-name").innerText = mainHeroName;
document.getElementById("hero-poster").src = "/"+ mainHeroName + ".jpg";

let animes = await fetch('/get-animes-by-main-hero-name', {method: "POST", body: JSON.stringify({"mainHeroName": mainHeroName}), headers: {"Content-Type": "application/json"}});
animes = await animes.json();



// Create franchises on the page
const anime_button_div = document.createElement("div");
anime_button_div.className = "anime hidden";
const anime__items = document.createElement("div");
anime__items.className = "anime__items hidden";
if (animes.length > 0) {
    anime_button_div.className = "anime";
    anime__items.className = "anime__items";

    const anime__title = document.createElement("span");
    anime__title.className = "titles anime-title";
    anime__title.innerText = "Animes";

    const anime__div = document.getElementById("anime-container");
    anime__div.append(anime__title);

    let counter = 1;
    animes.forEach(anime => {
        anime = anime[0];
        const anime__item = document.createElement("div");
        if(counter > 5) {
            anime__item.className = "anime__item hidden";
        } else {
            anime__item.className = "anime__item";
        }

        const a = document.createElement("a");
        a.href ="/animes/" + anime["NAME_ENG"].replace(/ /ig, "_");
        a.className = "anime__item__hover";

        const item_anime__img = document.createElement("img");
        item_anime__img.className = "anime__img";
        item_anime__img.src = "/" + anime["NAME_ENG"].replace(/!|:/g, '')+".jpeg";
        a.append(item_anime__img);

        const item_anime__info = document.createElement("div");
        item_anime__info.className = "anime__info";

        const item_anime__type = document.createElement("span");
        item_anime__type.className = "anime__type";
        item_anime__type.innerText = anime["TYPE"];
        item_anime__info.append(item_anime__type);

        const item_anime__year = document.createElement("span");
        item_anime__year.className = "anime__year";
        if (anime["YEAR"] == null) {
            item_anime__year.innerText = "?";
        } else {
            item_anime__year.innerText = anime["YEAR"];
        }
        item_anime__info.append(item_anime__year);

        a.append(item_anime__info);

        const item_anime__name = document.createElement("span");
        item_anime__name.className = "anime__name";
        if (anime["NAME_ENG"].length > 22) {
            item_anime__name.innerText = anime["NAME_ENG"].slice(0,21).trim() + "...";
        } else {
            item_anime__name.innerText = anime["NAME_ENG"];
        }
        a.append(item_anime__name);

        anime__item.append(a);
        anime__items.append(anime__item);
        anime_button_div.append(anime__items);
        anime__div.append(anime_button_div);
        counter++;
    });
};

// Show all franchises button 
const button_show_all = document.createElement("button");
if (animes.length > 5) {
    button_show_all.className = "anime__button";
} else {
    button_show_all.className = "anime__button hidden";
}
button_show_all.innerText = "show all";
anime_button_div.append(button_show_all);

let all__anime__item = anime__items.querySelectorAll('.anime__item')
button_show_all.onclick = () => {
    for (let i = 6; i <= all__anime__item.length; i++) {
        all__anime__item[i-1].className = "anime__item";
    }
    button_show_all.className = "anime__button hidden";
    button_hide_all.className = "anime__button";
}


// Hide all franchises button 
const button_hide_all = document.createElement("button");
button_hide_all.className = "anime__button hidden";
button_hide_all.innerText = "hide all";
anime_button_div.append(button_hide_all);

button_hide_all.onclick = () => {
    for (let i = 6; i <= all__anime__item.length; i++) {
        all__anime__item[i-1].className = "anime__item hidden";
    }
    button_show_all.className = "anime__button";
    button_hide_all.className = "anime__button hidden";
}