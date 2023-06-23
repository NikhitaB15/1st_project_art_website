let movies = [
  {
    name: "Falcon and the winter soldier",
    des:
      "Following the events of Avengers:Endgame Sam Wilson and Bucky Bames team up in a global adventure that test their abilites and their patience",
    image: "images/slider 2.png"
  },
  {
    name: "Loki",
    des:
      'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of "Avengers:Endgame".',
    image: "images/slider1.png"
  },
  {
    name: "Wanda vision",
    des:
      "Wanda Maximoff and Vision-two super-powered beings livingsidealized suburban lives-begin to suspect that everything is not as it seems",
    image: "images/slider 3.png"
  },
  {
    name: " Raya",
    des:
      "Raya,a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
    image: "images/slider 4.png"
  },
  {
    name: "Doctor Strange",
    des:
      "When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.",

    image: "images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createslide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createslide();
}

setInterval(() => {
  createslide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
