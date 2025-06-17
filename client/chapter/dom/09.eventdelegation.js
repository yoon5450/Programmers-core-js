/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */

const nav = getNode('.nav');
const links = getNode('a');

console.log(links);

nav.addEventListener('click', (e)=>{
    e.preventDefault();
    const target = e.target.closest('li');

    if(target.getAttribute('data-name') === 'contact'){
        console.log('ok')
    }
})

/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */