//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Technical Support Intern",
    cardImage: "assets/images/capri.png",
    place: "Capri Global Ltd",
    time: "(June, 2017 - September, 2017)",
    desp: "<li>  Provided technical support via calls and email for Customer relationship management (CRM) software called CUBE.</li> <li> Used Excel and in-house software to process and document employee data and provide IT support.</li> "
  },
  {
    title: "Student Librarian",
    cardImage: "assets/images/umd_2.png",
    place: "University of Maryland",
    time: "(August, 2018 - November, 2018)",
    desp: "<li>Worked in the library managing students, technology and the book area.</li><li>Used library software to manage outgoing/incoming books and student data.</li><li>Helped with daily tasks, such as, opening and closing the library, reshelving books and helping with library software and technology.</li>",
  },
  {
    title: "Office Assistant",
    cardImage: "assets/images/pace.png",
    place: "Pace Jr. College",
    time: "(Feburary, 2016 - March, 2017)",
    desp: "<li> Managed the social marketing for the college events such as cultural festivals and sport clubs.</li><li>Worked on and handled many event and main websites for the school.</li> "
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
