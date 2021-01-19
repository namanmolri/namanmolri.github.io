

//Footer and Navbar

let header = $(`
<nav class="fixed-top black">
<div class="nav-wrapper">
    <a href="index.html" class="brand-logo"><img src="assets/images/logo_3.png"></a>
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>
        <li><a class="white-text" href="projects.html">Projects</a></li>
        <li><a class="white-text" href="education.html">Education</a></li>
        <li><a class="white-text" href="experience.html">Experience</a></li>
        
        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
          <label for="switch-1" class="theme-switch">
            <input class="toggle-checkbox" type="checkbox" id="switch-1" name="theme" />
            <div class='toggle-slot'>
              <div class='sun-icon-wrapper'>
                <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
              </div>
              <div class='toggle-button-1 toggle-button'></div>
              <div class='moon-icon-wrapper'>
                <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
              </div>
            </div>
          </label>
        </li>
    </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li><a class="sidenav-close" href="#!"><i class="material-icons">close</i></a></li>
<li><a href="index.html">Home</a></li>
<li><a href="experience.html">Experience & Volunteering</a></li>
<li><a href="projects.html">Projects</a></li>
<li><a href="education.html">Education</a></li>


<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch-2" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch-2" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button-2 toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
</ul>`);


let bodyElement = $(`body`);
bodyElement.prepend(header);


/*JavaScript for toggle for light/dark mode*/

// selecting toggler dynamically as their are two separate code sections for the toggler to support both mobile screen and desktop screens
if(window.innerWidth <= 992) {
  var checkbox = document.querySelector("#switch-2");
  var toggler = document.querySelector('.toggle-button-2');
} else {
  var checkbox = document.querySelector("#switch-1");
  var toggler = document.querySelector('.toggle-button-1');
}

if (checkbox) {
  let a = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", a); // setting the initial theme to light

  if (localStorage.getItem("theme") === "dark") {
    checkbox.checked = true;
  }

  // selecting the footer icons
  const footerIcons = document.querySelectorAll('.sub-footer-icon');

  // listening for click on toggler
  toggler.addEventListener("click", () => {
    if (checkbox.checked) {
      // if theme is dark then on the toggler click we have to make it light
      trans();
      // changing the color
      toggleDarkColor();

      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else { 
      /*
      if there is click on toggler and if theme is light (initially it will be light) then the theme should convert to dark
      */
      trans();
      // changing the color
      toggleLightColor();

      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 500);
  };

  // function for changing color when dark theme is on.
  let toggleDarkColor = () => {

    footerIcons.forEach(icon => {
        icon.style.backgroundColor = 'transparent';

        // hover effect
        icon.addEventListener('mouseover',  () => {
          icon.style.backgroundColor = 'transparent';
        });

        icon.addEventListener('mouseleave',  () => {
          icon.style.backgroundColor = 'transparent';
        });
    });
  }

  // function for changing color when the light theme is on.
  let toggleLightColor = () => {

    footerIcons.forEach(icon => {
        icon.style.backgroundColor='transparent';
        // hover effect
        icon.addEventListener('mouseover',  () => {
          icon.style.backgroundColor = 'transparent';
         
        });

        icon.addEventListener('mouseleave',  () => {
          icon.style.backgroundColor = 'transparent';
        });
    });
  } 
}