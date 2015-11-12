# bebelTestnPrototype

참조
http://insanehong.kr/post/javascript-prototype/

Prototype Property가 가리키고 있는 Prototype Object
자기 자신을 만들어낸객체의 원형을 의미하는 Prototype Link

자바스크립트의 모든 객체는 생성과 동시에 자기자신이 생성될 당시의 정보를 취한 Prototype Object 라는 새로운 객체를 Cloning 하여 만들어낸다. 프로토타입이 객체를 만들어내기위한 원형이라면 이 Prototype Object 는 자기 자신의 분신이며 자신을 원형으로 만들어질 다른 객체가 참조할 프로토타입이 된다.

 __proto__라는 prototype 에 대한 link는 상위에서 물려받은 객체의 프로토타입에 대한 정보이며 prototype 프로퍼티는 자신을 원형으로 만들어질 새로운 객체들 즉 하위로 물려줄 연결에 대한 속성이다.

**prototype 프로퍼티는Constructor가 가지는 프로퍼티**

--------------------------------

function A() {}

var B = new A();

여기서 new 연산자를 통해 객체B가 만들어질 때 A는 cloning 되며 그것은 constructor function A()이고 이것은

A.prototype 객체가 된다.

최종적으로 A.prototype 즉 function A() 의 프로토타입 프로퍼티는 cunstructor(생성자) function A()를 cloning한 것이 된다.

이 cloning 객체를 Prototype Object 라고 한다.

객체 B는 A.prototype 과 링크만 되어있다.
