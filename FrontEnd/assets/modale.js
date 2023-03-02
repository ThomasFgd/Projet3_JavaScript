let modal = null;


openModal = function(event) {
    event.preventDefault()
    const target = document.querySelector(event.target.getAttribute("href"));
    document.getElementById('modal').style.display = null
    document.getElementById('modal').setAttribute('aria-hidden', false)
    document.getElementById('modal').setAttribute('aria-modal', true)
    
}

closeModal = function(event) {
    event.preventDefault()
    modal.style.display = none
    modal.setAttribute('aria-hidden', true)
    modal.setAttribute('aria-modal', false)
    modal = target
    modal.removeEventListener('click', closeModal)
    modal = null

}

document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener("click", openModal)
    
})


