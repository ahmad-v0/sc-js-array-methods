// let str = "abcdefghijklmnopqrstuvwxyz";
// // let newStr = [];
// let newStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
// // for (let i = 0; i < str.length; i++) {
//     if (i %2 === 1){
//         // console.log(i);
//         // console.log(str[i].toUpperCase());
//         // newStr.unshift(str[i].toUpperCase());
//         newStr = newStr.concat(str[i].toUpperCase());
//     }
// }
//  console.log(newStr);


// reverse the string where alternate characterized are capitalized
let str = "abcdefghijklmnopqrstuvwxyz";
let newStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    if (i % 2 === 1) {
        char = char.toUpperCase();
    }
    newStr = newStr.concat(char);
}

console.log(newStr);

// output :  ZyXwVuTsRqPoNmLkJiHgFeDcBa