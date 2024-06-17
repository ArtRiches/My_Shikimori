import {connection} from "../DB.mjs";

export async function asyncGetMainHeroNameByID(ID) {
    let result = await connection.query(`SELECT * FROM main_heroes where ID = ${ID}`);
    let mainHeroes = [];
    for(let i = 0; i < result[0].length; i++) {
        mainHeroes.push(result[0][i].NAME);
    }
    return mainHeroes;
}