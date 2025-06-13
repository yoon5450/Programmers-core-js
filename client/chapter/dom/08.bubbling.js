const section = getNode('section');
const article = getNode('article');
const p = getNode('p');



section.addEventListener('click', (e) => {
    console.log('%c section', 'color:dodgerblue');

    console.log(e.target, e.currentTarget);
})

// article.addEventListener('click', (e)=>{
//     console.log('$c article', 'color:hotpink')
// })

// p.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log('p')
// })

section.addEventListener('mouseenter', (e) => {
    console.log('%c section', 'color:dodgerblue');
    console.log(e.target, e.currentTarget);
})