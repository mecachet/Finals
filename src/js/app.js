console.log("Js has been linked. YAY.");
function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const sliderWrapper = document.querySelector(".slider-wrapper");
  let activeIndex = 0;
  function renderSlides() {
    slides.forEach((slide, index) => {
      if (activeIndex === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  renderSlides();
  function showNext() {
    if (activeIndex === slides.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    renderSlides();
  }
  let sliderIntervalId = null;

  function startAutoSliderFn() {
    sliderIntervalId = setInterval(showNext, 5000);
  }
  startAutoSliderFn();
}
initSlider();
const serviceContainer = document.getElementById("service-container");

const originalText = {
  text1: `<i class="fas fa-globe service-icon"></i>
    <h3 class="service-h3">Website Design</h3>`,
  text2: `<i class="fas fa-cogs service-icon"></i>
    <h3 class="service-h3">Responsive Design</h3>`,
  text3: `<i class="fab fa-html5 service-icon"></i>
    <h3 class="service-h3">HTML/CSS </h3>`,
  text4: `<i class="fab fa-js service-icon"></i>
    <h3 class="service-h3">JavaScript</h3>`,
  text5: `<i class="fa-solid fa-lightbulb service-icon"></i>
    <h3 class="service-h3">Unique Ideas</h3>`,
  text6: ` <i class="fa-solid fa-fish service-icon"></i>
    <h3 class="service-h3">Fish</h3>`,
  text7: ` <i class="fa-solid fa-list-check service-icon"></i>
    <h3 class="service-h3">Managment</h3>`,
  text8: `<i class="fa-solid fa-palette service-icon"></i>
    <h3 class="service-h3">Design</h3>`,
};

const newText = {
  text1: `Designing the visual layout of websites, aesthetics. Creating mockups, wireframes, and prototypes to plan the website.`,
  text2: `Ensuring that website is responsive, that they adapt and display properly on various devices and screen sizes, such as desktops, tablets, and smartphones.`,
  text3: `Writing HTML and CSS code to structure the content and define the visual presentation of the website.`,
  text4: `Using JavaScript to add interactivity and dynamic elements to websites. This can include animations, interactive forms, pop-up modals, and more.`,
  text5: `Coming up with unique ideas to further excell the projects. Good team player who loves to share ideas.`,
  text6: `He loves fishes, he keeps them as well. He keeps Rasporas, Tetras, Chichlids, Albino Plecos and more.`,
  text7: `Easly managable, but most importantly good at managing.`,
  text8: `Designing is my strong suit, since I've been designing since I was a small person.`,
};

serviceContainer.addEventListener("mouseover", function (event) {
  const target = event.target.closest(".service");
  if (target) {
    const id = target.getAttribute("id");
    target.innerHTML = newText[id];
  }
});

serviceContainer.addEventListener("mouseout", function (event) {
  const target = event.target.closest(".service");
  if (target) {
    const id = target.getAttribute("id");
    target.innerHTML = originalText[id];
    target.querySelector(".service-icon").style.display = "inline-block";
  }
});

let commentsSlides = document.querySelectorAll(".comments-slide");
let commentsButton1 = document.getElementById("comments-button-1");
let commentsButton2 = document.getElementById("comments-button-2");
let commentsButton3 = document.getElementById("comments-button-3");

commentsSlides[0].classList.add("active");

commentsButton1.addEventListener("click", function () {
  commentsSlides[0].classList.add("active");
  commentsSlides[1].classList.remove("active");
  commentsSlides[2].classList.remove("active");
});

commentsButton2.addEventListener("click", function () {
  commentsSlides[0].classList.remove("active");
  commentsSlides[1].classList.add("active");
  commentsSlides[2].classList.remove("active");
});

commentsButton3.addEventListener("click", function () {
  commentsSlides[0].classList.remove("active");
  commentsSlides[1].classList.remove("active");
  commentsSlides[2].classList.add("active");
});

document.addEventListener("DOMContentLoaded", function () {
  let liAll = document.getElementById("li-all");
  let liMyPortfolio = document.getElementById("li-my-portfolio");
  let liSouthBronx = document.getElementById("li-south-bronx");
  let liBigData = document.getElementById("li-big-data");
  let liRecords = document.getElementById("li-records");
  let liDope = document.getElementById("li-dope");
  let liEztv = document.getElementById("li-eztv");

  let gridMyPortfolio = document.querySelector(".project.my-portfolio");
  let gridSouthBronx = document.querySelector(".project.south-bronx");
  let gridBigData = document.querySelector(".project.big-data");
  let gridRecords = document.querySelector(".project.records");
  let gridDope = document.querySelector(".project.dope");
  let gridEztv = document.querySelector(".project.eztv");

  let array = [
    gridMyPortfolio,
    gridSouthBronx,
    gridBigData,
    gridRecords,
    gridDope,
    gridEztv,
  ];

  function removeStyles() {
    array.forEach((item) => {
      item.removeAttribute("style");
    });
  }

  liAll.addEventListener("click", function () {
    array.forEach((item) => {
      item.style.filter = "brightness(100%)";
    });
  });

  liMyPortfolio.addEventListener("click", function () {
    removeStyles();
    gridMyPortfolio.style.filter = "brightness(100%)";
  });

  liSouthBronx.addEventListener("click", function () {
    removeStyles();
    gridSouthBronx.style.filter = "brightness(100%)";
  });

  liBigData.addEventListener("click", function () {
    removeStyles();
    gridBigData.style.filter = "brightness(100%)";
  });

  liRecords.addEventListener("click", function () {
    removeStyles();
    gridRecords.style.filter = "brightness(100%)";
  });

  liDope.addEventListener("click", function () {
    removeStyles();
    gridDope.style.filter = "brightness(100%)";
  });

  liEztv.addEventListener("click", function () {
    removeStyles();
    gridEztv.style.filter = "brightness(100%)";
  });
});
