let nickname = "Artorias";
let xp = 11000;
let nivel;

if (xp < 1000){
    nivel = "Ferro";
} else if (xp >= 1000 && xp <= 2000) {

} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
 } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nickname, "está no nível de " + nivel);