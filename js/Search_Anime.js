// Request all anime
let all_animes = await fetch('/get-animes', {method: "GET"});
all_animes = await all_animes.json();

const header__search_input = document.getElementById("header__search-input");
const header__list = document.getElementById("header__list");

// Creating a list of anime under the search
all_animes.forEach(anime => {
    const header_list__item = document.createElement('li');
    header_list__item.className = "header-list__item";
    header_list__item.innerText = anime["NAME_ENG"];
    const a_li = document.createElement('a');
    a_li.href = "/animes/" + anime["NAME_ENG"].replace(/ /ig, "_");
    a_li.append(header_list__item);
    header__list.append(a_li);
});

// Show found anime
header__search_input.oninput = function () {
    if (!(header__list.classList.contains("_active"))) {
        header__list.classList.add("_active");
    }
    let val = this.value.trim();
    let items = document.querySelectorAll(".header__list a");
    if (val != '') {
        items.forEach(function(item){
            if(item.innerText.search(RegExp(val,"gi")) == -1){
                item.classList.add("hide");
            } else {
                item.classList.remove("hide");
            }
        });
    } else {
        header__list.classList.remove("_active");
    }
}

// Hide the list of found anime when you click on main
document.getElementById("main").onclick = function () {
    header__search_input.value = null;
    header__list.classList.remove("_active");
}
