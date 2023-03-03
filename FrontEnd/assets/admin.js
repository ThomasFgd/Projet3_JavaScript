if (localStorage.getItem("token") && localStorage.getItem("token") !== ""){
    displayOn()
}


function displayOn() {
    const target = document.querySelectorAll(".admin")
    console.log(target)
    target.forEach(element => {
       element.style.display = null
    });
}
 