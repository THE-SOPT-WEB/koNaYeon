import './style.css';

const $ = (selector) => document.querySelector(selector);

const Cart =  $ ('section.cart__shopping'); // 장바구니 title
const burgerCardAll = document.querySelectorAll('article.burger__card'); //버거 카드
const burgerPrice = $ ('div.burger__price'); // 버거 가격
const burgerCancle = $ ("button.cancle"); // X버튼 
const burgerName = $ ('span.burger__name'); // 버거 이름


burgerCardAll.forEach(function(e) {
	e.addEventListener('click', logEvent);
});

function logEvent(event) {
	event.stopPropagation();
	//console.log(event.currentTarget); // 이렇게 하면 모든 내용이 나옴
  const currentPick = event.currentTarget;
  console.log(currentPick);
  const name = currentPick.querySelector('span.burger__name').innerText;
  const price = currentPick.querySelector('div.burger__price').innerText;
  console.log(name);
  console.log(price);


  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = name; // crrent로 바꾸기

  const div = document.createElement("div");
  div.innerText = price; // crrent로 바꾸기
  const button = document.createElement("button");
  

  button.innerText = "X";
  button.onclick = () => {
    li.remove();
  }

  li.appendChild(span);
  li.appendChild(div);
  li.appendChild(button);
  Cart.appendChild(li);
  console.log(Cart);
  return li;
};



//버거이름, 수량, 가격 삭제버튼
//버거 가져오기

function makeBuy() {
  const li =  logEvent();

  /*
  //e = logEvent();
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = burgerName; // crrent로 바꾸기

  const div = document.createElement("div");
  div.innerText = burgerPrice; // crrent로 바꾸기
*/
  // 각 장바구니에 담은 상품 삭제 버튼
  const button = document.createElement("button");
  button.innerText = "X";
  button.onclick = () => {
    li.remove();
    }

  li.appendChild(span);
  li.appendChild(div);
  li.appendChild(button);

  return li;

}

/* 아 여기 일단 주석처리
burgerCardAll.addEventListener('click', () => {
  const li =  logEvent();
  Cart.appendChild( logEvent());
});
*/

/*
burgerCardAll.forEach((burgerCard) => {
  burgerCard.addEventListener("click", attachEvent);
});
*/

//for(var i = 0; i < burgerCardAll.length; i++) {
//  burgerCardAll[i].addEventListener('click', () => {
//    const li =  makeBuy();
//    Cart.appendChild(li);
//  });
//}




/*
// 장바구니 초기화
function initCart({totalBurger, price}){
  totalBurger = 0;
  price.innerText=0;
}

// event 생성
function attachEvent({ burger, totalBurger, price, cancle }) {
  answer.addEventListener('click', (e) => {
    if (e.target instanceof HTMLElement) {
      const currentPick = e.target.innerText;
      // const realAnswer = quizList[currentStep].answer;
      console.log(currentPick);
      console.log(burger);

    }
  });

    
}*/
