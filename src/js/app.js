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
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");

text1.onmouseover = function () {
  text1.innerHTML = `Designing the visual layout of websites, including selecting color schemes, typography, and overall aesthetics. Creating mockups, wireframes, and prototypes to plan the website's look and feel.`;
};

text1.onmouseout = function () {
  text1.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
    <h3 class="service-h3">Website Design</h3>`;
};

text2.onmouseover = function () {
  text2.innerHTML = `Ensuring that websites are responsive, meaning they adapt and display properly on different devices and screen sizes, such as desktops, tablets, and smartphones.`;
};

text2.onmouseout = function () {
  text2.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
    <h3 class="service-h3">Responsive Design</h3>`;
};

text3.onmouseover = function () {
  text3.innerHTML = `Writing HTML and CSS code to structure the content and define the visual presentation of the website.`;
};

text3.onmouseout = function () {
  text3.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
    <h3 class="service-h3">HTML/CSS Coding</h3>`;
};

text4.onmouseover = function () {
  text4.innerHTML = `Use JavaScript to add interactivity and dynamic elements to websites. This can include animations, interactive forms, pop-up modals, and more.`;
};

text4.onmouseout = function () {
  text4.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
    <h3 class="service-h3">JS Development</h3>`;
};
