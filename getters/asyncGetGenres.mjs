import {connection} from "../DB.mjs";

export async function asyncGetGenres() {
    let result = await connection.query(`SELECT * FROM genres`);
    let genres = [];
    for(let i = 0; i < result[0].length; i++) {
        genres.push(result[0][i]);
    }
    return genres;
}


