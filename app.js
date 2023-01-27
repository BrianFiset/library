const addBookBtn = document.getElementById("add-book-btn");
const modalContainer = document.getElementById("modal-container");
const closebtn = document.getElementsByClassName("close-btn")[0];
const addBtn = document.getElementsByClassName("add-btn")[0];
const formContainer = document.getElementsByClassName("form-container")[0];
const bookContainer = document.getElementsByClassName("book-container")[0];
const myLibrary = [];

addBookBtn.addEventListener('click', ()=> modalContainer.classList.toggle("hidden"));

closebtn.addEventListener('click', ()=> modalContainer.classList.add("hidden"));

window.addEventListener('click', (e)=> {
    if(e.target === modalContainer) {
        modalContainer.classList.add("hidden");
    }
})



formContainer.addEventListener('submit', (e)=> e.preventDefault());


class Book {
    constructor(title1,author1,pages1,read1){
        this.title = title1;
        this.author = author1;
        this.pages = pages1;
        this.read = read1;
    }
};

function addBookToLibrary() {
    bookContainer.innerText = ""
    for(let i= 0; i < myLibrary.length; i += 1) {
        
        const div = document.createElement("div");
        div.classList.add("books");
        
    
        const divContainer = document.createElement("div");
        const removebtn = document.createElement("div");
        removebtn.classList.add('remove-book-btn')
        removebtn.innerText = '×'
        removebtn.setAttribute('data-id', `${[i]}`);

        const div1 = document.createElement("div");
        div1.innerText = myLibrary[i].title;
        divContainer.append(div1)
        divContainer.append(removebtn)

        const div2 = document.createElement("div");
        div2.innerText = `Author: ${myLibrary[i].author}`;
    
        const div3 = document.createElement("div");
        div3.innerText = `Pages: ${  myLibrary[i].pages}`;
    
        const button = document.createElement("Button");

        button.addEventListener('click', ()=> {
            button.classList.toggle('123')
            if(button.textContent === 'Read') {
                button.textContent = 'Not Read'
            } else if (button.textContent === 'Not Read') {
            button.textContent = 'Read'
            }
        })

        button.innerText = myLibrary[i].read;
        div.append(divContainer);
        div.append(div2);
        div.append(div3);
        div.append(button);
        bookContainer.append(div);

        const removeBtnAll = document.querySelectorAll('.remove-book-btn')
        removeBtnAll.forEach(item => { item.addEventListener('click', ()=> {
            for(let j = 0; j < myLibrary.length; j += 1){
                if(item.dataset.id === String(j)){
                   myLibrary.splice(j,j+1)
                   addBookToLibrary()
                }
            }
            })})
    }
}
addBtn.addEventListener('click', ()=>{
    const bookName = document.getElementById("book-name").value;
    const bookAuthor = document.getElementById("book-author").value;
    const bookPages = document.getElementById("book-pages").value;
    let bookRead = document.getElementById("book-read");
    if (bookName === '' || bookAuthor === '' || bookPages === '' ) {
        return;
    }
    if (bookRead.checked === true) {
        bookRead = 'Read';
    } else if ( bookRead.checked === false) {
        bookRead = 'Not Read';
    };
    const book = new Book(bookName,bookAuthor, bookPages ,bookRead);
    myLibrary.push(book);
    addBookToLibrary();
    formContainer.reset();
    modalContainer.classList.add("hidden");
});


