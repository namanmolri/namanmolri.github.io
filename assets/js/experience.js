//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Back End Developer",
    cardImage: "assets/images/sph.png",
    place: "School of Public Health @ UMD",
    time: "(June, 2021 - Present)",
    desp: "<li> Managing the server and all backend endpoints for the HealthyMe application.</li> <li> Used express.js to build and libraries like passport.js and surpise to enhance functionalities.</li> <li>Uses AWS EC@ to host the server instance and SNS and other facilities for communication.</li>"
  },
  {
    title: "Data Scientist",
    cardImage: "assets/images/dsintern.jpeg",
    place: "School of Architecture, Planning & Preservation",
    time: "(Feburary, 2021 - Present)",
    desp: "<li>Researching, extracting and using data scraped regarding Urban Planning and related projects.</li><li>Building, graphs, predictive models and linear regressions to aid the research project.</li><li>Using Python, Pandas, NumPy, SckiKit Learn and other relevant technologies.</li>",
  },
  {
    title: "Technical Support Intern",
    cardImage: "assets/images/capri.png",
    place: "Capri Global Ltd",
    time: "(June, 2017 - September, 2017)",
    desp: "<li>  Provided technical support via calls and email for Customer relationship management (CRM) software called CUBE.</li> <li> Used Excel and in-house software to process and document employee data and provide IT support.</li> "
  }
];

const showCards = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Teaching rescued girls",
    cardImage: "assets/images/save_sis.png",
    place: "Save our sisters",
    time: "(2017-2018)",
    description:
      "<li>Responsible for teaching 10th grade English, Mathematics and Chemistry to girls at the center.</li><li>Managed homeworks, assignments and exams to fully help prepare the girls for the future.</li>",
  },
  {
    title: "Donation drive and Air pollution awareness",
    cardImage: "assets/images/goonj.png",
    place: "GOONJ",
    time: "(2012-2017)",
    description:
      "<li>Conducted donation drives in my area for the elderly and to spread awareness regarding air pollution during the firecracker filled festive seasons.</li><li>Managed a team of 12+ people to conduct survey, donations and door-to-door awareness campaigns.</li><li>The campign still runs to this day, managed by others.</li>",
  }
];

const showCards2 = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, time, place, description }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${description}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
