import './style.css';

const $ = (selector) => document.querySelector(selector);

const Cart =  $ ('section.cart__shopping'); // 장바구니 title
const burgerCardAll = document.querySelectorAll('article.burger__card'); //버거 카드
const order = $ ('button.cart__order'); // 주문하기 버튼
const cancle = $ ('button.cart__cancle'); // 취소하기 버튼
const totalPrice = $ ('cart__moneyTotal');
let totalCount = 0; // 수량
let sum = 0; // 누적 금액



burgerCardAll.forEach(function(e) {
	e.addEventListener('click', logEvent);
});

function logEvent(event) {
	event.stopPropagation();

	//console.log(event.currentTarget); // 이렇게 하면 모든 내용이 나옴
  const currentPick = event.currentTarget;
  // console.log(currentPick);
  const name = currentPick.querySelector('span.burger__name').innerText;
  const price = currentPick.querySelector('div.burger__price').innerText;
  // console.log(name);
  // console.log(price);




  //버거이름, 수량, 가격 삭제버튼
  //버거 가져오기

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = name;

  const div = document.createElement("div");
  div.innerText = price;

  // '5,500원' => 5500
  const parsePriceToNumber = (price) => {
    const removedComma = price.slice(0, -1).replace(/\D/g, "");
    return +removedComma;
  };

  sum = +sum + parsePriceToNumber(div.innerText);
  console.log(sum);




  const button = document.createElement("button");
  

  // 각 장바구니에 담은 상품 삭제 버튼
  button.innerText = "X";
  button.onclick = () => {
    li.remove();
    sum = sum - parsePriceToNumber(div.innerText);
    console.log(sum);
  }



  li.appendChild(span);
  li.appendChild(div);
  li.appendChild(button);
  
  Cart.appendChild(li);
  console.log(Cart);
  
};

// 모달창
function showModal(modalContent, keepOpen) {
  const modal = $('.modal');
  const modalBody = $('p.modal__body');
  const modalButton = $('button.modalNo');
  modalBody.innerHTML = modalContent;

  modal.classList.remove('hide');
  modalButton.onclick = () => {
    modal.classList.add('hide');
  }
}

// 주문하기
order.onclick = function (event) {
  showModal('🍔 정말 주문하시겠어요? 🍔' + '총 누적금액 :'+ sum +'원');
};

// 장바구니 비우기
function CartCancle(){
  document.querySelectorAll('.row.data').forEach(function (item) {
      item.remove();
    });
  
    this.totalCount = 0;
    this.totalPrice = 0;
    this.reCalc();
    this.updateUI();
};



