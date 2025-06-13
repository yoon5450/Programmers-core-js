/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */

const nav = getNode('.nav')
const links = getNode('a');

console.log(links);

nav.addEventListener('click', (e)=>{
    e.preventDefault();
    const target = e.target.closest('li');

    console.log(target.matches('.about'))
    console.log(target.classList.contain('.about'))
})

/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */