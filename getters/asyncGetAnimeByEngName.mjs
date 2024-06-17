import {connection} from "../DB.mjs";

export async function asyncGetAnimeByEngName(anime_eng) {
    let result = await connection.query(`SELECT * FROM animes WHERE NAME_ENG = "${anime_eng}"`);
    return result[0][0];
}

