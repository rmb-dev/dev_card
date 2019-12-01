const nextBtn = document.querySelector("#next");
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialGhost = document.querySelector(".testimonial-ghost-container");
const testimonials = [{
    name: "rmb_dev",
    text: "mostly self-taught front-end web developer / HTML, CSS, JavaScript",
    avatar: "prisma 128x128.jpg"
  },
  {
    name: "Roman Byrchenko",
    text: "born and raised in Ukraine / live in Canada / speak English, Ukrainian, Russian",
    avatar: "original 128x128.jpg"
  }
];

let counter = 0;

const handleFirstTestimonial = () => {
  // image selection
  testimonialContainer.children[1].children[0].src = testimonials[0].avatar;
  // title selection
  testimonialContainer.children[1].children[1].innerHTML = testimonials[0].name;
  // text selection
  testimonialContainer.children[1].children[2].innerHTML = `
  <i class="fas fa-quote-left"></i>
  ${testimonials[0].text}
  <i class="fas fa-quote-right"></i>
  `;
};

const activeTestimonial = () => {
  testimonialContainer.classList.add("testimonial-active-animated");
  // image selection
  testimonialContainer.children[1].children[0].src =
    testimonials[counter].avatar;
  // title selection
  testimonialContainer.children[1].children[1].innerHTML =
    testimonials[counter].name;
  // text selection
  testimonialContainer.children[1].children[2].innerHTML = `<i class="fas fa-quote-left"></i>
  ${testimonials[counter].text}
  <i class="fas fa-quote-right"></i>`;

  setTimeout(() => {
    // Remove the active animated class
    testimonialContainer.classList.remove("testimonial-active-animated");
  }, 1400);
};

const inactiveTestimonial = () => {
  testimonialGhost.classList.add("testimonial-inactive-animated");
  let newCounter = counter;
  if (newCounter === 0) {
    newCounter = testimonials.length;
  }
  // image selection
  testimonialGhost.children[1].children[0].src =
    testimonials[newCounter - 1].avatar;
  // title selection
  testimonialGhost.children[1].children[1].innerHTML =
    testimonials[newCounter - 1].name;
  // text selection
  testimonialGhost.children[1].children[2].innerHTML = `<i class="fas fa-quote-left"></i>
  ${testimonials[newCounter - 1].text}
  <i class="fas fa-quote-right"></i>`;
  setTimeout(() => {
    // Remove the active animated class
    testimonialGhost.classList.remove("testimonial-inactive-animated");
  }, 1400);
};

nextBtn.addEventListener("click", () => {
  if (counter === testimonials.length - 1) {
    counter = 0;
    inactiveTestimonial();
    activeTestimonial();
  } else {
    counter++;
    inactiveTestimonial();
    activeTestimonial();
  }
});

handleFirstTestimonial();