/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains


// 1. nav 태그 요소
let nav = document.querySelector('nav');

// 2. nav 안의 aobut li 태그
let aboutLi = nav.querySelector('.about')

// 3. data-name이 contact인 li 태그
let contact = nav.querySelector('li[data-name="contact"]')

// 4. nav 요소 안에 있는 모든 자식 요소
let childNodes = nav.querySelectorAll('li');

childNodes = nav.querySelectorAll('*');

childNodes = nav.children



function getNode(node, context = document){
    // 재귀로 처리
    if(context.nodeType !== 9) context = getNode(context);

    return context.querySelector(node);
}

function getNodes(node, context = document){
    // 재귀로 처리
    if(context.nodeType !== 9) context = getNode(context);

    return context.querySelectorAll(node);
}


console.log(getNode('.about', 'nav'));