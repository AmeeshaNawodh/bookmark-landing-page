const bookmarkNavigation = document.querySelectorAll(".bookmark-navigation");
const boxes = document.querySelectorAll(".box");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const menu = document.querySelector(".h-menu");
const navigation = document.querySelector(".nav-wrapper");
const closeM = document.querySelector(".c-image");
const linkItems = document.querySelectorAll(".item");
const logBtn = document.querySelectorAll(".btn-log");
const formContainer = document.querySelector(".log-wrapper");
const overlay = document.querySelector(".overlay");

const sectionTwo = document.querySelector("#section-2");

bookmarkNavigation.forEach((e) => e.addEventListener("click", click));

function click() {
  bookmarkNavigation.forEach((e) => e.classList.remove("underline"));
  boxes.forEach((e) => e.classList.add("block"));
  let target = document.querySelector(`.box-${this.dataset.box}`);
  target.classList.remove("block");
  this.classList.add("underline");
}

questions.forEach((e) => e.addEventListener("click", hide));

function hide() {
  console.log(this.dataset.question);
  answers.forEach((e) => e.classList.add("block"));
  let target = document.querySelector(`.answer-${this.dataset.question}`);
  // target.classList.remove("block");
  target.classList.toggle("block");

  setTimeout(() => {
    answers.forEach((e) => e.classList.add("block"));
  }, 8000);
}

menu.addEventListener("click", (e) => {
  navigation.classList.remove("n");
  closeM.style.display = "block";
});

closeM.addEventListener("click", (e) => {
  navigation.classList.add("n");
  closeM.style.display = "none";
});

// linkItems.addEventListener("click", (e) => {
//   e.preventDefault();
//   // const cords = sectionTwo.getBoundingClientRect();

//   // window.scrollTo({
//   //   left: cords.left + window.pageXOffset,
//   //   top: cords.top + window.pageYOffset,
//   //   behavior: "smooth",
//   // });

//   sectionTwo.scrollIntoView({ behavior: "smooth" });
// });

linkItems.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.dataset.section;
    console.log(target);
    const section = document.querySelector(`#${target}`);
    section.scrollIntoView({ behavior: "smooth" });
    navigation.classList.add("n");
    closeM.style.display = "none";
  });
});

logBtn.forEach((e) => {
  e.addEventListener("click", (e) => {
    formContainer.classList.remove("block");
    navigation.classList.add("n");
    closeM.style.display = "none";
  });
});

overlay.addEventListener("click", () => {
  formContainer.classList.add("block");
});
