const gamePoint = document.querySelector("#game")
const reset = document.querySelector("input[type='reset']")
const start = document.querySelector(".start");

const p1 = {
    score: document.querySelector("#playerOne"),
    button: document.querySelector("#playerOneBtn"),
    x: 0
};

const p2 = {
    score: document.querySelector("#playerTwo"),
    button: document.querySelector("#playerTwoBtn"),
    x: 0
};

start.addEventListener("click", (e) => {
    if (gamePoint.value !== "") {
        p1.button.disabled = false;
        p2.button.disabled = false;
    }
    e.preventDefault();
})

function addScore(player, opponent) {
    let points = parseInt(gamePoint.value);
    player.x++;
    player.score.innerText = `${player.x}`;
    if (parseInt(player.score.innerText) === parseInt(opponent.score.innerText) && parseInt(opponent.score.innerText) === (parseInt(gamePoint.value) - 1)) {
        points += 1;
        gamePoint.value = points;
        document.querySelector(".deuce").classList.add("display");
        // if (document.querySelectorAll("h2").length < 2) {
        //     newH2 = document.createElement("h2");
        //     newH2.innerText = "Deuce!";
        //     document.querySelector("section").appendChild(newH2);
        // }
    };
    if (parseInt(player.score.innerText) === parseInt(gamePoint.value)) {
        player.button.disabled = true;
        opponent.button.disabled = true;
        player.score.style.color = "green";
        opponent.score.style.color = "red";
    }
}

// if (document.querySelector("section").children[(document.querySelector("section").children.length - 1)].innerText !== "Deuce") {
//     newH2 = document.createElement("h2");
//     newH2.innerText = "Deuce!";
//     document.querySelector("section").appendChild(newH2);
// }

p1.button.addEventListener("click", (e) => {
    e.preventDefault();
    addScore(p1, p2)
})

p2.button.addEventListener("click", (e) => {
    e.preventDefault();
    addScore(p2, p1)
})

reset.addEventListener("click", () => {
    for (p of [p1, p2]) {
        p.x = 0;
        p.score.innerText = 0;
        p.button.disabled = true;
        p.score.style.color = "black";
    }
    document.querySelector(".deuce").classList.remove("display");
    // if (document.querySelectorAll("h2").length > 1) {
    //     document.querySelectorAll("h2")[1].remove();
    // }
})





