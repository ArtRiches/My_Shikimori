import {connection} from "../DB.mjs";

export async function asyncGetGenresByAnimeID(anime_id) {
    let result = await connection.query(`SELECT * FROM genres where anime_id = ${anime_id}`);
    let genres = [];
    for(let i = 0; i < result[0].length; i++) {
        genres.push(result[0][i].GENRE);
    }
    return genres;
}
