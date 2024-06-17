import {connection} from "../DB.mjs";

export async function asyncGetMainHeroes(anime_id) {
    let result = await connection.query(`SELECT * FROM main_heroes where anime_id = ${anime_id}`);
    let mainHeroes = [];
    for(let i = 0; i < result[0].length; i++) {
        mainHeroes.push(result[0][i]);
    }
    return mainHeroes;
}
