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
    target.querySelector(".service-icon").style.display = "none";
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

//Projects//

document.addEventListener("DOMContentLoaded", function () {
  const projectItems = document.querySelectorAll(".project");
  const projectCategories = document.querySelectorAll(".projects-li");

  projectCategories.forEach((category) => {
    category.addEventListener("click", function () {
      projectCategories.forEach((cat) => {
        cat.classList.remove("active");
      });
      category.classList.add("active");

      const selectedCategory = category.id.replace("li-", "");
      projectItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (selectedCategory === "all" || itemCategory === selectedCategory) {
          item.style.opacity = "1";
          item.style.filter = "none";
        } else {
          item.style.opacity = "0.5";
          item.style.filter = "blur(3px)";
        }
      });
    });
  });

  projectItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      const textElement = item.querySelector(".projects-p");
      textElement.style.display = "block";
      const iconElement = item.querySelector(".projects-icon");
      iconElement.style.display = "inline-block";
    });

    item.addEventListener("mouseout", function () {
      const textElement = item.querySelector(".projects-p");
      textElement.style.display = "none";
      const iconElement = item.querySelector(".projects-icon");
      iconElement.style.display = "none";
    });
  });
});

// form //

document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.querySelector(".send");
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");

  sendButton.addEventListener("click", async function () {
    console.log("Button clicked");

    const formData = new FormData();
    formData.append("name", "John Doe");
    formData.append("email", "johndoe@example.com");
    formData.append("website", "www.example.com");
    formData.append("message", "Hello, this is a test message.");

    const requestBody = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const mockApiResponse = {
        status: 1,
        desc: "Message has been sent successfully",
      };

      const response = new Response(JSON.stringify(mockApiResponse));
      const data = await response.json();

      if (data.status === 1) {
        modalContent.textContent =
          "Thank you for getting in touch with Otar! I appreciate you contacting me.";
        modal.style.display = "block";
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });

  modal.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
