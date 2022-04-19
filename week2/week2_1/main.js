import pic1 from "./assets/이누야샤.jpg";
import pic2 from "./assets/쇼콜라.jpg";
import pic3 from "./assets/루피.jpg";
import pic4 from "./assets/풀문.jpg";
import pic5 from "./assets/나루토.jpg";

const $ = (selector) => document.querySelector(selector);

let currentStep = 0;

const quizList = [
  {
    src: pic1,
    answer: "이누야샤",
  },
  {
    src: pic2,
    answer: "쇼콜라",
  },
  {
    src: pic3,
    answer: "루피",
  },
  {
    src: pic4,
    answer: "풀문",
  },
  {
    src: pic5,
    answer: "나루토",
  },
];


