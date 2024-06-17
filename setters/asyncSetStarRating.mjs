import {connection} from "../DB.mjs";

export async function asyncSetStarRating(number_of_stars, anime_id) {
    await connection.query(`UPDATE mydb.animes SET STAR_RATING = "${number_of_stars}" WHERE (ID = "${anime_id}")`);
}