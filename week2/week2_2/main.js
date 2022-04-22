import './style.css';

const $ = (selector) => document.querySelector(selector);

const Cart =  $ ('section.cart__shopping'); // 장바구니 title
const burgerCardAll = document.querySelectorAll('article.burger__card'); //버거 카드
const order = $ ('button.cart__order');
const cancle = $ ('button.cart__cancle');


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

  const button = document.createElement("button");
  

  // 각 장바구니에 담은 상품 삭제 버튼
  button.innerText = "X";
  button.onclick = () => {
    li.remove();
  }



  li.appendChild(span);
  li.appendChild(div);
  li.appendChild(button);
  Cart.appendChild(li);
  console.log(Cart);
  
};

function showModal(modalContent, keepOpen) {
  const modal = $('.modal');
  const modalBody = $('p.modal__body');
  const modalButton = $('button.modalNo');
  modalBody.innerHTML = modalContent;

  modal.classList.remove('hide');
  //`**예**`를 누르면 `**a**` 태그를 사용해서 완료 페이지로 이동해주세요. 
  // `**아니오**`를 누르면 모달을 다시 닫아주세요.
  modalButton.onclick = () => {
    modal.classList.add('hide');
  }
  /*if (keepOpen) return;
  
  setTimeout(() => {
    modal.classList.add('hide');
  }, 1000);
  */
}

// 주문하기
order.onclick = function (event) {
  showModal('🍔 정말 주문하시겠어요? 🍔');
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