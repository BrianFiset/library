const addBookBtn = document.getElementById("add-book-btn")
const modalContainer = document.getElementById("modal-container")
const myLibrary = []

addBookBtn.addEventListener('click', ()=> {
    modalContainer.classList.toggle("hidden")
})


function Book(title1,author1,pages1,read1) {
    this.title = title1
    this.author = author1
    this.pages = pages1
    this.read = read1
}

function addBookToLibrary() {

}
