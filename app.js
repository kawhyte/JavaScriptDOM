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


// const list = document.querySelector('#book-list ul');

// list.addEventListener('click',(e)=>{

//     if(e.target.className === 'delete'){
//         const li  = e.target.parentElement
//         li.parentNode.removeChild(li)
//         console.log(e.target.className)

//     }

// })

const list = document.querySelector('#book-list ul');

const addForm = document.forms['add-book']

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = addForm.querySelector('input[type="text"]').value
    //console.log(val)

    //create
    const li = document.createElement('li')
    const bookName = document.createElement('span')
    const deleteButton = document.createElement('span')
    //add
    deleteButton.textContent = 'delete'
    bookName.textContent = val

    //add classes

    deleteButton.classList.add('delete')
    bookName.classList.add('name')
    //append
    //list.appendChild(li.appendChild(bookName).appendChild(deleteButton))
    li.appendChild(bookName)
    li.appendChild(deleteButton)
    list.appendChild(li)

    console.log(list)

})

const hideBox = document.querySelector('#hide')

hideBox.addEventListener('change', (e) => {
    e.preventDefault();

    if (hideBox.checked) {
        list.style.display = "none"
    } else {
        list.style.display = "block"
    }
    console.log(e);

})

const searchBar = document.forms['search-books'].querySelector('input')

searchBar.addEventListener('keyup', (e) => {

    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");

    Array.from(books).forEach(book => {

        const title = book.firstElementChild.textContent
        if (title.toLowerCase().indexOf(term) != -1) {
book.style.display = "block"
        }else{

            book.style.display = "none"
        }
        console.log(title)
        //element.innerHTML += " Kenny"

    })



})

// wrapper.forEach(element =>{

//     console.log(element.innerHTML)
//     element.innerHTML += " Kenny"

// })