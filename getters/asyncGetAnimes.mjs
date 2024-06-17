import {connection} from "../DB.mjs";

export async function asyncGetAnimes() {
    let result = await connection.query("SELECT * FROM animes");
    let animes = [];
    for(let i = 0; i < result[0].length; i++) {
        animes.push(result[0][i]);
    }
    return animes;
}

