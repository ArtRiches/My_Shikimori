import express from "express";
import {asyncGetAnimes} from "./getters/asyncGetAnimes.mjs";
import {asyncGetAnimeByEngName} from "./getters/asyncGetAnimeByEngName.mjs";
import {asyncGetAnimesByMainHeroName} from "./getters/asyncGetAnimesByMainHeroName.mjs";
import {asyncGetGenres} from "./getters/asyncGetGenres.mjs";
import {asyncGetGenresByAnimeID} from "./getters/asyncGetGenresByAnimeID.mjs";
import {asyncGetMainHeroes} from "./getters/asyncGetMainHeroes.mjs";
import {asyncGetMainHeroNameByID} from "./getters/asyncGetMainHeroNameByID.mjs";
import {asyncGetFranchisesByID} from "./getters/asyncGetFranchisesByID.mjs";
import {asyncSetStarRating} from "./setters/asyncSetStarRating.mjs";

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("css"), express.static("js"), express.static("assets"));

// Tracking url
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/genres/:genre', (req, res) => {
    res.render('Genres', { genre: req.params.genre });
});

app.get('/animes/:name', (req, res) => {
    res.render("Animes");
});

app.get('/heroes/:name/:id', (req, res) => {
    res.render("Heroes");
});


// Client GET requests
app.get('/get-animes', async (req, res) => {
    res.json(await asyncGetAnimes());
});

app.get('/get-genres', async (req, res) => {
    res.json(await asyncGetGenres());
});


// Client POST requests
app.post('/get-anime-by-eng-name', async (req, res) => {
    let anime_eng = req.body.ANIME_ENG;
    res.json(await asyncGetAnimeByEngName(anime_eng));
});

app.post('/get-animes-by-main-hero-name', async (req, res) => {
    let mainHeroName = req.body.mainHeroName;
    res.json(await asyncGetAnimesByMainHeroName(mainHeroName));
});

app.post('/get-genres-by-anime-id', async (req, res) => {
    let anime_id = req.body.anime_id;
    res.json(await asyncGetGenresByAnimeID(anime_id));
});

app.post('/get-main-heroes', async (req, res) => {
    let anime_id = req.body.anime_id;
    res.json(await asyncGetMainHeroes(anime_id));
});

app.post('/get-main-hero-name', async (req, res) => {
    let ID = req.body.ID;
    res.json(await asyncGetMainHeroNameByID(ID));
});

app.post('/get-franchises-by-id', async (req, res) => {
    let FRANCHISE_ID = req.body.FRANCHISE_ID;
    let NAME_ENG = req.body.NAME_ENG;
    res.json(await asyncGetFranchisesByID(FRANCHISE_ID, NAME_ENG));
});

app.post('/set-star-rating', async (req, res) => {
    let number_of_stars = req.body.number_of_stars;
    let anime_id = req.body.anime_id;
    res.json(await asyncSetStarRating(number_of_stars, anime_id));
});



app.listen(8000, () => {
    console.log("Server is working!");
});