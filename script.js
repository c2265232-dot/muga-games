const games = [
  // POPULAR
  { name: "Slope", url: "https://ubg100.github.io/slope/", img: "https://ubg100.github.io/slope/slope.jpg" },
  { name: "Run 3", url: "https://ubg100.github.io/run-3/", img: "https://ubg100.github.io/run-3/run3.png" },
  { name: "Tunnel Rush", url: "https://ubg100.github.io/tunnel-rush/", img: "https://ubg100.github.io/tunnel-rush/tunnel-rush.png" },
  { name: "Retro Bowl", url: "https://ubg100.github.io/retro-bowl/", img: "https://ubg100.github.io/retro-bowl/retro-bowl.png" },

  // ACTION
  { name: "1v1.LOL", url: "https://sz-games.github.io/games/1v1lol/", img: "https://sz-games.github.io/assets/images/1v1lol.png" },
  { name: "Krunker", url: "https://browserfps.com/", img: "https://browserfps.com/img/krunker.png" },

  // SKILL
  { name: "OvO", url: "https://ubg100.github.io/ovo/", img: "https://ubg100.github.io/ovo/ovo.png" },
  { name: "Fireboy & Watergirl", url: "https://ubg100.github.io/fireboy-and-watergirl/", img: "https://ubg100.github.io/fireboy-and-watergirl/fireboy.png" },

  // FUN
  { name: "Subway Surfers", url: "https://sz-games.github.io/games/subway-surfers/", img: "https://sz-games.github.io/assets/images/subway-surfers.png" },
  { name: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/", img: "https://orteil.dashnet.org/cookieclicker/img/perfectCookie.png" },

  // CLASSIC
  { name: "Tetris", url: "https://ubg100.github.io/tetris/", img: "https://ubg100.github.io/tetris/tetris.png" },
  { name: "Pacman", url: "https://ubg100.github.io/pacman/", img: "https://ubg100.github.io/pacman/pacman.png" },

  // EXTRA
  { name: "Snow Rider 3D", url: "https://ubg100.github.io/snow-rider-3d/", img: "https://ubg100.github.io/snow-rider-3d/snow.png" },
  { name: "Drift Hunters", url: "https://ubg100.github.io/drift-hunters/", img: "https://ubg100.github.io/drift-hunters/drift.png" }
];

const container = document.getElementById("gamesContainer");
const frame = document.getElementById("gameFrame");
const player = document.getElementById("player");

function loadGames(list) {
  container.innerHTML = "";
  list.forEach(game => {
    const div = document.createElement("div");
    div.className = "game";

    div.innerHTML = `
      <img src="${game.img}">
      <p>${game.name}</p>
    `;

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
