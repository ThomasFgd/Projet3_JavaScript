let modal = null;

openModal = function (e) {
  e.preventDefault();
  console.log(e.target.getAttribute("href"));
  const target = document.querySelector(e.target.getAttribute("href"));
  target.style.display = null;
  target.removeAttribute("aria-hidden");
  target.setAttribute("aria-modal", "true");
  modal = target;
  modal.addEventListener("click", closeModal);
  modal.querySelector(".js-modal-close").addEventListener("click", closeModal);
  modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation);
};

closeModal = function (event) {
  if (modal === null) return;
  event.preventDefault();
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", true);
  modal.removeAttribute("aria-modal");
  modal.removeEventListener("click", closeModal);
  modal.querySelectorAll(".js-modal-close").removeEventListener("click", closeModal);  
  modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation);
  modal = null;
};

const stopPropagation = function (event) {
  event.stopPropagation();
};

document.querySelectorAll(".js-modal").forEach((a) => {
  a.addEventListener("click", openModal);
});

moveModal = function (e) {
  e.preventDefault();
  const target1 = document.querySelector(".modal1");
  target1.style.display = "none";
  const target2 = document.querySelector(".modal2");
  target2.style.display = null;
};

document.querySelectorAll(".ajoutPhoto").forEach((a) => {
  a.addEventListener("click", moveModal);
});

returnModal = function(e) {
  e.preventDefault();
  const target1 = document.querySelector(".modal1");
  target1.style.display = null;
  const target2 = document.querySelector(".modal2");
  target2.style.display = 'none';
}

document.querySelectorAll(".js-modal-return").forEach((a) => {
  a.addEventListener("click", returnModal);
});

//Modal Ajout Photo

addNewPhoto = async function (event) {
  const formData = new FormData();

  formData.append("image", document.querySelector('input[type="file"]').files[0]);
  formData.append("title", document.querySelector("#title").value);
  formData.append("category", document.querySelector("#selectCategory").value);

  fetch("http://localhost:5678/api/works", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: formData,
  }).then(function (response) {
    console.log(response);
  });
};
document.querySelector("#addButton").addEventListener("click", addNewPhoto);
