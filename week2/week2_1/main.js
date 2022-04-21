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

function showModal(modalContent, keepOpen) {
  const modal = $('.modal');
  const modalBody = $('p.modal__body');
  
  modalBody.innerHTML = modalContent;

  modal.classList.remove('hide');

  if (keepOpen) return;
  
  setTimeout(() => {
    modal.classList.add('hide');
  }, 1000);
  
}

function goNextStep(score, image) {

  /*
    1. 점수 올리기
    2. 이미지 바꿔주기
  */
 
  currentStep++;
  score.innerText = +score.innerText + 1;
 
  if (currentStep === quizList.length) {
    // 게임이 끝난 상태
    showModal(`
      <a href="/">🧡 추억팔이 성공 🧡</a>
    `, true);
    return;
  }
  image.src = quizList[currentStep].src;

  
}


// event 생성
function attachEvent({ score, answer, image, replay }) {
  answer.addEventListener('click', (e) => {
    if (e.target instanceof HTMLElement) {
      const currentAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
    
      if (currentAnswer === realAnswer) {
        // 정답
        //showModal('올..정답😏');
        goNextStep(score, image);
      } else {
        // 오답
        showModal(`${currentAnswer}라니..😨 몇년생이시죠..?`);
      }
    }
    
    // if (e.target.closest('.answer__list > li')) {
    // closest에 의해 가장 가까운 li 반환 (다른 곳을 누르면 null)
    // }
    
    
    });

    // game 다시하기
    replay.addEventListener('click', (e) => {
      
      currentStep = 0;
      score.innerText = 0;
      image.src = quizList[currentStep].src;

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
    replay: $('.buttonList__shuffle'),
  });
}
