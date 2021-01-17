//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Technical Support Intern",
    cardImage: "assets/images/capri.png",
    place: "Capri Global Ltd",
    time: "(June, 2017 - September, 2017)",
    desp: "<li>  Provided technical support via calls and email for customers-relationship management (CRM) software called CUBE.</li> <li> Used Excel and in-house software to process and document employee data and provided IT support.</li> "
  },
  {
    title: "Student Librarian",
    cardImage: "assets/images/umd.png",
    place: "University of Maryland",
    time: "(August, 2018 - November, 2018)",
    desp: "<li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Office Assistant",
    cardImage: "assets/images/capri.png",
    place: "Pace Jr. College",
    time: "(Feburary, 2016 - March, 2017)",
    desp: "<li> Managed the social marketing for the college events such as cultural festivals and sport clubs.</li><li>Managed Social media and webpage for college and various events.</li> "
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
    cardImage: "assets/images/goonj.png",
    place: "Save our sisters",
    time: "(2017-2018)",
    description:
      "<li>Responsible for teaching 10th grade English, Mathematics and Chemistry to girls at the center.</li><li>Managed Homeworks, assignments and exams to fully help prepare the girls for the future.</li>",
  },
  {
    title: "Donation drive and Air pollution awareness",
    cardImage: "assets/images/save_sis.png",
    place: "GOONJ",
    time: "(2012-2017)",
    description:
      "<li>Conducted donation drives in my area for the elderly and to spread awareness regarding air pollution during the firecracker filled festive seasons.</li><li>Managed a team of 12+ people from 3 year and beyond to conduct survey, donations and door-to-door awareness.</li><li>The campign is carried on my others and is running to this day.</li>",
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
