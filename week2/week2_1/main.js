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

// game 초기화
function initGame({ score, answer, image }) {
  currentStep = 0;
  score.innerText = 0;

  image.src = quizList[currentStep].src;
}

function showModal() {
  const modal = $('.modal');
  modal.classList.remove('hide');
}

// event 생성
function attachEvent({ score, answer, image }) {
  answer.addEventListener('click', (e) => {
    if (e.target instanceof HTMLElement) {
      const currentAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
      if (currentAnswer === realAnswer) {
        showModal();
      } else {
        
      }
    }
    
    // if (e.target.closest('.answer__list > li')) {
    // closest에 의해 가장 가까운 li 반환 (다른 곳을 누르면 null)
    // }
    
    
    });
}

function gameManager(gameInfo) {
  initGame(gameInfo);
  attachEvent(gameInfo);
}

window.onload = () => {
  gameManager({
    score: $('.scoreBoard__score'),
    answer: $('ul.answer__list'),
    image: $('.imageBoard > img'),
  });
}
