// const titles  = document.getElementsByClassName('title');

// Array.from(titles).forEach((element) => {
//     console.log(element.innerHTML);
// });

//const wrapper = document.querySelector('#book-list li:nth-child(2) .name')
// const wrapper = document.querySelectorAll('#book-list  li .name')

// wrapper.forEach(element =>{

//     console.log(element.innerHTML)
//     element.innerHTML += " Kenny"

// })

// const bookList = document.querySelector('#book-list')
// console.log (bookList.innerHTML)
// bookList.innerHTML +=`<h1> This is new</h2>
// <p> Para1</p>`


// const banner  = document.querySelector('#page-banner');
// console.log(banner.nodeType)
// console.log(banner.nodeName)
// console.log(banner.hasChildNodes())

// const cloned =  banner.cloneNode(true)
// console.log(cloned)


const bookList = document.querySelector('#book-list')
// console.log(bookList.parentNode.parentElement)

// console.log(bookList.children)

// console.log (bookList.nextSibling)
// console.log (bookList.nextElementSibling)
// console.log (bookList.previousElementSibling)

// const h2 = document.querySelector('#book-list h2')
// //console.log(h2)
// h2.addEventListener('click', (e) => {
// //console.log(e)

// })

// const buttons = document.querySelectorAll('#book-list .delete')

// buttons.forEach(btn =>{
//      btn.addEventListener('click',(e)=>{
// const li  = e.target.parentElement
// li.parentNode.removeChild(li)

// console.log(li)

// })
    
//      })


const list = document.querySelector('#book-list ul');

list.addEventListener('click',(e)=>{

    if(e.target.className === 'delete'){
        const li  = e.target.parentElement
        li.parentNode.removeChild(li)
        console.log(e.target.className)

    }

})
