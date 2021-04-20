const h1 = document.querySelector("h1")
const score1 = document.querySelector("#score1")
const score2 = document.querySelector("#score2")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const reset = document.querySelector("#reset")
const upto = document.querySelector("select")

let max = 2;
upto.addEventListener("change", function (e) {

    max = parseInt(upto.value);
    console.log(max);


})


let count1 = 0;
player1.addEventListener("click", function (e) {
    count1++;
    score1.innerText = `${count1}`;
    if (count1 === max) {
        document.querySelector("#player1").disabled = true;
        document.querySelector("#player2").disabled = true;
        score1.style.color = "green";
        score2.style.color = "red";

    }

})

let count2 = 0;
player2.addEventListener("click", function (e) {
    count2++;
    score2.innerText = `${count2}`;
    if (count2 === max) {
        document.querySelector("#player2").disabled = true;
        document.querySelector("#player1").disabled = true;
        score2.style.color = "green";
        score1.style.color = "red";

    }


})

reset.addEventListener("click", function () {
    count1 = 0;
    count2 = 0;
    score1.innerText = `${count1}`;
    score2.innerText = `${count2}`;
    document.querySelector("#player1").disabled = false;
    document.querySelector("#player2").disabled = false;
    score1.style.color = "black";
    score2.style.color = "black";
})


