/* ==================================================
   FREEGAMEHUB GAME DATABASE
   ================================================== */

const games = [

  {
    id: "supertuxkart",

    name: "SuperTuxkart",

    category: "Racing",

    icon: "🏎️",

    description:
      "A free and open world kart racing game.",

    version: "1.5",

    size: "184 MB",

    android: "Android 7.0+",

    download:
      "https://supertuxkart.net/Download"
      

  },


  {
    id: "open-adventure",

    name: "Open Adventure",

    category: "Adventure",

    icon: "🗺️",

    description:
      "Explore a small world, complete quests and discover hidden areas.",

    version: "1.2.0",

    size: "95 MB",

    android: "Android 8.0+",

    download:
      "https://example.com/authorized-download"
  },


  {
    id: "puzzle-lab",

    name: "Puzzle Lab",

    category: "Puzzle",

    icon: "🧩",

    description:
      "Relaxing logic puzzles with increasingly difficult challenges.",

    version: "2.1.0",

    size: "32 MB",

    android: "Android 6.0+",

    download:
      "https://example.com/authorized-download"
  },


  {
    id: "shadow-action",

    name: "Shadow Action",

    category: "Action",

    icon: "⚔️",

    description:
      "A lightweight action game designed for quick mobile sessions.",

    version: "1.0.3",

    size: "72 MB",

    android: "Android 8.0+",

    download:
      "https://example.com/authorized-download"
  },


  {
    id: "street-racer",

    name: "Street Racer",

    category: "Racing",

    icon: "🏎️",

    description:
      "Race through exciting tracks and compete for the fastest time.",

    version: "1.4.0",

    size: "110 MB",

    android: "Android 8.0+",

    download:
      "https://example.com/authorized-download"
  },


  {
    id: "space-runner",

    name: "Space Runner",

    category: "Arcade",

    icon: "🌌",

    description:
      "Dodge obstacles and race through a colorful space track.",

    version: "1.4.0",

    size: "41 MB",

    android: "Android 7.0+",

    download:
      "https://example.com/authorized-download"
  }

];


/* ==================================================
   CREATE GAME CARD
   ================================================== */

function createGameCard(game) {

  return `

    <article class="game-card">

      <div class="game-cover">

        ${game.icon}

      </div>


      <div class="game-info">

        <div class="game-category">

          ${game.category}

        </div>


        <h3>

          ${game.name}

        </h3>


        <p>

          ${game.description}

        </p>


        <a
          class="view-button"
          href="game.html?id=${game.id}"
        >

          View Game

        </a>

      </div>

    </article>

  `;
}


/* ==================================================
   DISPLAY GAMES
   ================================================== */

function displayGames(list) {

  const grid =
    document.getElementById("gameGrid");

  const noResults =
    document.getElementById("noResults");

  const count =
    document.getElementById("gameCount");


  grid.innerHTML = "";


  if (list.length === 0) {

    noResults.style.display = "block";

    count.textContent =
      "No games found";

    return;

  }


  noResults.style.display = "none";


  list.forEach(game => {

    grid.innerHTML +=
      createGameCard(game);

  });


  count.textContent =
    `Showing ${list.length} game${list.length === 1 ? "" : "s"}`;

}


/* ==================================================
   SEARCH
   ================================================== */

function searchGames() {

  const search =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();


  const results =
    games.filter(game => {

      return (

        game.name
          .toLowerCase()
          .includes(search)

        ||

        game.category
          .toLowerCase()
          .includes(search)

        ||

        game.description
          .toLowerCase()
          .includes(search)

      );

    });


  displayGames(results);

}


/* ==================================================
   CATEGORY FILTER
   ================================================== */

function filterCategory(category) {

  document
    .querySelectorAll(".category")
    .forEach(button => {

      button.classList.remove("active");

    });


  event.target.classList.add("active");


  if (category === "All") {

    displayGames(games);

    return;

  }


  const results =
    games.filter(game =>

      game.category === category

    );


  displayGames(results);

}


/* ==================================================
   MOBILE MENU
   ================================================== */

function toggleMenu() {

  const menu =
    document.getElementById("mobileMenu");

  menu.style.display =
    menu.style.display === "block"
      ? "none"
      : "block";

}


function closeMenu() {

  document
    .getElementById("mobileMenu")
    .style.display = "none";

}


/* ==================================================
   INITIAL LOAD
   ================================================== */

displayGames(games);
