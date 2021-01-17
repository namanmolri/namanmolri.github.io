/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Inventory Manager",
    cardImage: "assets/images/imapp.png",
    description: "An Android app for owners to inventory items, further visible for customer to check their availability.",
    tag: "Kotlin, Android Studio, SQLite",
    use: "Utility",
    Githublink: "https://github.com/namanmolri/Inventory-Manager",
  },
  {
    title: "Labyrinth Marble Game",
    cardImage: "assets/images/labyrinth.png",
    description: "The labyrinth marble game built for Android using Unity and Android Studio.",
    tag: "C#, Kotlin, Java, Game Dev",
    use: "Game Dev",
    Githublink: "https://github.com/namanmolri/Marble-Maze-Game",
  },
  {
    title: "Neat Bot",
    cardImage: "assets/images/discord_bot.png",
    description: "Discord Server bot with greeter function. Will also fetch movie and weather data using Open Source API.",
    tag: "React.js",
    use: "Utility",
    Githublink: "https://github.com/namanmolri/NeatBot",
  },
  {
    title: "Small C-Compiler",
    cardImage: "assets/images/ocaml.png",
    description: "Compiler to identify and compile basic operations and functions written in C.",
    tag: "Ocaml",
    use: "Utility",
    Githublink: "https://github.com/namanmolri/Small-C-parser",
  }
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, tag, use, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          
            <h1 class="title"><strong>${title}</strong></h1>
            
            <div ><p>${description} <br><br> ${tag} <br><br> ${use}</p></div>
            
            <ul class="menu-content"><br>
              <li><a href="${Githublink}" target="_blank" class="social-icon"><img width="30" height="30" src="assets/images/github_2.png"></img></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
