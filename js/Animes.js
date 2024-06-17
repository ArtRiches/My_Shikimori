const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.from(ratingItemsList);
const anime_rating_value = document.getElementById("anime-name__rating-value");
const ul = document.getElementById("genres__items");
const anime_description = document.getElementById("anime-description");
const franchise__div = document.getElementById("franchise-div");


let anime_eng = window.location.href.split("/").pop().replace(/_/g, " ");
// Request for anime name
let anime = await fetch('/get-anime-by-eng-name', {method: "POST", body: JSON.stringify({"ANIME_ENG": anime_eng}), headers: {"Content-Type": "application/json"}});
anime = await anime.json();
// Create poster, title and number of episodes
document.getElementById("anime-poster").src = "/" +  anime["NAME_ENG"].replace(/!|:/g, '') + ".jpeg";
document.getElementById("anime-name").innerText = anime["NAME_ENG"];
document.getElementById("anime-type").innerText = anime["TYPE"];
if (anime["EPISODES_COMING_OUT"] == null) {

    if(anime["EPISODES_RELEASED"] == null){
        document.getElementById("anime-name__episodes-number").innerText = "? / ?";
    } else {
        document.getElementById("anime-name__episodes-number").innerText = anime["EPISODES_RELEASED"] + " / ?";
    }

} else {
    document.getElementById("anime-name__episodes-number").innerText = anime["EPISODES_RELEASED"] + " / " + anime["EPISODES_COMING_OUT"];
}
anime_rating_value.innerText = anime["STAR_RATING"];


// Anime description
const span = document.getElementById("anime-description-description");
if (anime["DESCRIPTION"] == null) {
    span.innerText = "No description yet...";
    span.className = "No-description-yet";
}
else{
    span.innerText = anime["DESCRIPTION"];
}
anime_description.append(span);

// Star rating
ratingItemsArray.forEach((item) => {
    item.parentNode.dataset.totalValue = anime["STAR_RATING"];
});
ratingItemsArray.forEach((item) =>
    item.addEventListener('click', async () => {
        item.parentNode.dataset.totalValue = item.dataset.itemValue;
        anime_rating_value.innerText = item.dataset.itemValue;
        await fetch('/set-star-rating', {method: "POST", body: JSON.stringify({"number_of_stars": item.dataset.itemValue, "anime_id": anime["ID"]}), headers: {"Content-Type": "application/json"}});
    })
); 


// Details
let details = ["?", "?", "?", "?", "?", "?"];
document.getElementById("details__year").innerText = anime["YEAR"];
document.getElementById("details__rating").innerText = anime["AGE_RATING"];

if(anime["EPISODES_RELEASED"] == null) {
    document.getElementById("details__status").innerText = "Not yet aired";
} else {
    if (anime["EPISODES_RELEASED"] == anime["EPISODES_COMING_OUT"]) {
        document.getElementById("details__status").innerText = "Finished Airing";
    } else {
        document.getElementById("details__status").innerText = "Currently Airing";
    }
}
document.getElementById("details__author").innerText = details[0];
if (details[1] == "?") {
    document.getElementById("details__director").parentElement.style.display = "none";
} else {
    document.getElementById("details__director").innerText = details[1];
}
document.getElementById("details__screenwriter").innerText = details[2];
document.getElementById("details__producer").innerText = details[3];
document.getElementById("details__studio").innerText = details[4];
document.getElementById("details__adaptation").innerText = details[5];


// Request a list of anime genres
let genres = await fetch('/get-genres-by-anime-id', {method: "POST", body: JSON.stringify({"anime_id": anime["ID"]}), headers: {"Content-Type": "application/json"}});
genres = await genres.json();
// Create genres on the page
genres.forEach(genre => {
    const li = document.createElement("li");
    li.className = "genres__item";
    const a = document.createElement("a");
    a.innerText = genre.toString();
    a.href ="/" + "genres/" + genre.toString();
    li.append(a);
    ul.append(li);  
});


// Request for a list of main characters
let mainHeroes = await fetch('/get-main-heroes', {method: "POST", body: JSON.stringify({"anime_id": anime["ID"]}), headers: {"Content-Type": "application/json"}});
mainHeroes = await mainHeroes.json();
const main_heroes__items = document.getElementById("main-heroes__items");
// Create main characters on the page
mainHeroes.forEach(hero => {
    const a = document.createElement("a");
    a.className = "main-heroes__a";
    a.href ="/" + "heroes/" + hero["NAME"].toString().replace(',','').replace(/ /ig, "_") + "/" + hero["ID"].toString();
    const main_heroes__item = document.createElement("div");
    main_heroes__item.className = "main-heroes__item";

    const main_hero__img = document.createElement("img");
    main_hero__img.className = "main-hero__img";
    main_hero__img.src = "/" + hero["NAME"].toString()+".jpg";
    a.append(main_hero__img);

    const main_hero__name = document.createElement("span");
    main_hero__name.className = "main-hero__name";
    if (hero["NAME"].length > 12) {
        main_hero__name.innerText = hero["NAME"].toString().slice(0,9) + "...";
    } else {
        main_hero__name.innerText = hero["NAME"].toString();
    }
    a.append(main_hero__name);
    main_heroes__item.append(a)
    main_heroes__items.append(main_heroes__item);
});


// Request for a list of franchises
let animes = await fetch('/get-franchises-by-id', {method: "POST", body: JSON.stringify({"FRANCHISE_ID": anime["FRANCHISE_ID"], "NAME_ENG": anime["NAME_ENG"]}), headers: {"Content-Type": "application/json"}});
animes = await animes.json();


const franchise_button_div = document.createElement("div");
franchise_button_div.className = "franchise hidden";
const franchise__items = document.createElement("div");
franchise__items.className = "franchise__items hidden";
// Create a franchise on the page
if (animes.length > 0) {
    franchise_button_div.className = "franchise";
    franchise__items.className = "franchise__items";
    const franchise__title = document.createElement("span");
    franchise__title.className = "titles franchise-title";
    franchise__title.innerText = "Franchises";
    franchise__div.append(franchise__title);

    let counter = 1;
    animes.forEach(franchise => {
        const franchise__item = document.createElement("div");
        if(counter > 5) {
            franchise__item.className = "franchise__item hidden";
        } else {
            franchise__item.className = "franchise__item";
        }

        const a = document.createElement("a");
        a.href = franchise["NAME_ENG"].replace(/ /ig, "_");
        a.className = "franchise__item__hover";

        const item_franchise__img = document.createElement("img");
        item_franchise__img.className = "item-franchise__img";
        item_franchise__img.src = "/" + franchise["NAME_ENG"].replace(/!|:/g, '')+".jpeg";
        a.append(item_franchise__img);

        const item_franchise__info = document.createElement("div");
        item_franchise__info.className = "item-franchise__info";

        const item_franchise__type = document.createElement("span");
        item_franchise__type.className = "item-franchise__type";
        item_franchise__type.innerText = franchise["TYPE"];
        item_franchise__info.append(item_franchise__type);

        const item_franchise__year = document.createElement("span");
        item_franchise__year.className = "item-franchise__year";
        if (franchise["YEAR"] == null) {
            item_franchise__year.innerText = "?";
        } else {
            item_franchise__year.innerText = franchise["YEAR"];
        }
        item_franchise__info.append(item_franchise__year);

        a.append(item_franchise__info);

        const item_franchise__name = document.createElement("span");
        item_franchise__name.className = "item-franchise__name";
        if (franchise["NAME_ENG"].length > 22) {
            item_franchise__name.innerText = franchise["NAME_ENG"].slice(0,21).trim() + "...";
        } else {
            item_franchise__name.innerText = franchise["NAME_ENG"];
        }
        a.append(item_franchise__name);

        franchise__item.append(a);
        franchise__items.append(franchise__item);
        franchise_button_div.append(franchise__items);
        franchise__div.append(franchise_button_div);
        counter++;
    });
};


// Show all franchises button 
const button_show_all = document.createElement("button");
if (animes.length > 5) {
    button_show_all.className = "franchise__button";
} else {
    button_show_all.className = "franchise__button hidden";
}
button_show_all.innerText = "show all";
franchise_button_div.append(button_show_all);

let all__franchise__item = franchise__items.querySelectorAll('.franchise__item')
button_show_all.onclick = () => {
    for (let i = 6; i <= all__franchise__item.length; i++) {
        all__franchise__item[i-1].className = "franchise__item";
    }
    button_show_all.className = "franchise__button hidden";
    button_hide_all.className = "franchise__button";
}


// Hide all franchises button 
const button_hide_all = document.createElement("button");
button_hide_all.className = "franchise__button hidden";
button_hide_all.innerText = "hide all";
franchise_button_div.append(button_hide_all);

button_hide_all.onclick = () => {
    for (let i = 6; i <= all__franchise__item.length; i++) {
        all__franchise__item[i-1].className = "franchise__item hidden";
    }
    button_show_all.className = "franchise__button";
    button_hide_all.className = "franchise__button hidden";
}