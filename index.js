const modal = document.querySelector(".modal")
const btns = document.querySelectorAll(".card-body a")
const modalContainer = document.querySelector(".modal-container")


btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.classList.add("active")
        modal.addEventListener("click", handlleClick)
    })

})

function handlleClick(event) {
    console.log(Array.from(modalContainer.childNodes))
    console.log(event.target)
    if (Array.from(modalContainer.childNodes).includes(event.target)) {
        modal.classList.remove("active")

    }
}