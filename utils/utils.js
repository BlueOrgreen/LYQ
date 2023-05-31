import { isNil } from "lodash";
export const isEqualColor = (color1, color2) => {
    if (isNil(color1) || isNil(color2)) return;
    const arr1 = color1.split(',');
    const arr2 = color2.split(',');
    for (let i = 0; i < 3; i++) {
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}

export const translateDate = (e) => {
    const d = new Date(e);
    let Y = d.getFullYear();
    let M = d.getMonth() + 1;
    let D = d.getDate(); 
    if(D < 10) {
        D = '0' + D;
    }
    if(M < 10) {
        M = '0' + M;
    }
    let dates = Y + '.' + M + '.' + D;
    return dates;
}