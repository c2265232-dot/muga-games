const games = [
  { name: "Slope", url: "https://ubg100.github.io/slope/" },
  { name: "1v1.LOL", url: "https://1v1lolunblocked.org/" },
  { name: "Run 3", url: "https://ubg100.github.io/run-3/" },
  { name: "Tunnel Rush", url: "https://ubg100.github.io/tunnel-rush/" }
];

const container = document.getElementById("gamesContainer");
const frame = document.getElementById("gameFrame");
const player = document.getElementById("player");

function loadGames(list) {
  container.innerHTML = "";
  list.forEach(game => {
    const div = document.createElement("div");
    div.className = "game";
    div.innerText = game.name;
    div.onclick = () => openGame(game.url);
    container.appendChild(div);
  });
}

function openGame(url) {
  player.style.display = "block";
  frame.src = url;
}

function closeGame() {
  player.style.display = "none";
  frame.src = "";
}

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = games.filter(g => g.name.toLowerCase().includes(value));
  loadGames(filtered);
});

loadGames(games);
