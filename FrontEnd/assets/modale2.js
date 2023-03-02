let modal = null;


openModal = function(e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal=target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    
}

closeModal = function(event) {
    if (modal === null) return
    event.preventDefault()
    modal.style.display = none
    modal.setAttribute('aria-hidden', true)
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal = null

}

document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener("click", openModal)
    
})


