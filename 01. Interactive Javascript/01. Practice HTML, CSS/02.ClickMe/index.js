// 이벤트(Event)와 버튼 클릭
const btn = document.querySelector('#myBtn');

// 이벤트 핸들링(Event Handling)
btn.onclick = function() { // 이벤트 핸들러(Event Handler)
	console.log('Hello User!');
};


// 이벤트 핸들링 : 이벤트가 발생했을 때 어떤 특별한 동작을 하도록 이벤트를 다루는 것
// 이벤트 핸들러 : 구체적인 동작들을 코드로 표현한 함수 부분