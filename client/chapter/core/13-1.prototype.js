/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  getEat() {
    return this.stomach;
  },
  setEat(food) {
    this.stomach = [];
    this.stomach.push(push);
  },
};

const tiget = {
    pattern: '호랑이 무늬',
    hunt(target){
        this.prey = target;
        this.eat = this.prev;
        return `${target}에게 조용히 접근한다`
    },
    __proto__: animal
}

// 생성자 함수
