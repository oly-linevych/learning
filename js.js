// ------------------1. ПРИ КЛІКУ ЗМІНЮЄТЬСЯ КОЛІР КНОПКИ----------------------------
// const tagsContainer = document.querySelector('.js-tags');
// console.log(tagsContainer);


// tagsContainer.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick (evt){
//     if (evt.target.nodeName !== 'BUTTON') {
//         return
//     }

//     console.dir(evt.target)
//     console.dir(evt.currentTarget)

// const currentActive = document.querySelector('.tags__btn-active')
//     console.log(currentActive)

//     if (currentActive) {
// currentActive.classList.remove('tags__btn-active')
//     }
//     evt.target.classList.add('tags__btn-active')
//     }


const tagsContainer = document.querySelector('.js-tags');
const selected = new Set();

tagsContainer.addEventListener('click', onTa)