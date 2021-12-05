// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// elem.classList: add, remove, toggle
const item = tomorrow.children[1];
item.classList.add('done');
item.classList.remove('done');
item.classList.toggle('done'); // done 이 있으면 삭제, 없으면 추가

// elem.className
today.children[1].className = 'done';

// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = '#DDDDDD';


// Javascript로 HTML 태그의 스타일을 다루는 방법
// 1. style 프로퍼티로 직접 접근
//  -> style 의 우선순위가 높아지고, 같은 style을 적용하려면 코드를 반복해야 함
// 2. css 에 class 속성을 정의해 두고 classname 을 변경
//  -> html 태그의 class 속성 자체가 바뀌어서 혼란을 줄 수 있음
// 3. classList 를 사용해 html 태그에 class 속성을 추가해줌
//  -> 가장 권장되는 방법