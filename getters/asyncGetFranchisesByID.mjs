import {connection} from "../DB.mjs";

export async function asyncGetFranchisesByID(FRANCHISE_ID, NAME_ENG) {
    let result = await connection.query("SELECT * FROM animes");
    let animes = [];
    for(let i = 0; i < result[0].length; i++) {
        if (result[0][i].FRANCHISE_ID == FRANCHISE_ID && result[0][i].NAME_ENG != NAME_ENG) {
            animes.push(result[0][i]);
        }
    }
    return animes;
}
