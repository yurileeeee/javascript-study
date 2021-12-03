const myNumberTag = document.getElementById('myNumber');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function() {
  myNumber--;
  myNumberTag.textContent = myNumber;
};

increaseBtn.onclick = function() {
  myNumber++;
  myNumberTag.textContent = myNumber;
};

const colorBtns = document.getElementsByClassName('color-btn');

for (let btn of colorBtns) {
  btn.onclick = function() {
    myNumberTag.style.color = btn.dataset.color;
  };
}


// 1. id로 태그 선택하기
// const myTag = document.getElementById('id이름');
// getElementById 메소드를 통해 존재하지 않는 id 값으로 태그를 선택하면 그 값은 null 이 됨

// 2. class로 태그 선택하기
// const myTags = document.getElementsByClassName('class이름');
// 유사 배열 성질의 HTMLCollection 이 만들어짐
// getElementsByClassName 메소드를 통해 존재하지 않는 class 값으로 태그를 선택하면 빈 컬렉션이 출력됨
