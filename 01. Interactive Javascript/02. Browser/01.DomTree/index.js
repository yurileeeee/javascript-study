// 1. DOM 트리 살펴보기
const myTag = document.querySelector('#list-1');

console.log(myTag);

// 형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 부모 요소 노드
console.log(myTag.parentElement);

// 자식 요소 노드
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);


// 2. 요소 노드 주요 프로퍼티 살펴보기

// innerHTML : 요소 안에 있는 HTML 코드를 문자열로 리턴
console.log(myTag.innerHTML);
myTag.innerHTML += '<li>Exotic</li>';

// outerHTML : 해당 요소를 포함한 전체 HTML 코드를 문자열로 리턴
// outerHTML에 값을 할당하게 되면 처음 선택한 요소는 사라짐
console.log(myTag.outerHTML);

// textContent : 요소 안의 내용들 중 HTML을 제외한 텍스트만 리턴
console.log(myTag.textContent);


// 3. 요소 노드 추가하기

// (1) 요소 노드 만들기 : document.createElement('태그이름');
const first = document.createElement('li');
// (2) 요소 노드 꾸미기 : textContent, innerHTML, ...
first.textContent = '처음';
// (3) 요소 노드 추가하기 : NODE.prepend, append, after, before
myTag.prepend(first);


// 4. 노드 삭제와 이동

// (1) 노드 삭제하기 : Node.remove();
first.remove(); // 가장 마지막 자식 노드 삭제
first.children[i].remove(); // i번째 자식 노드 삭제

// (2) 노드 이동하기 : prepend, append, befor, after

