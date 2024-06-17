import {connection} from "../DB.mjs";

export async function asyncGetAnimesByMainHeroName(mainHeroName) {
    let animes_id = (await connection.query(`SELECT ANIME_ID FROM main_heroes WHERE NAME = "${mainHeroName}"`))[0];

    return  Promise.all(animes_id.map(async (element)=>(await connection.query(`SELECT * FROM animes WHERE ID = "${element.ANIME_ID}"`))[0])); 
}