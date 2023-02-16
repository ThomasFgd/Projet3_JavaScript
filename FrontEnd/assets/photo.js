const app = {
  projets: [],
  categories: []
}

fetch("http://localhost:5678/api/works")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    app.projets = data;
    displayProjects(data);
  });

fetch("http://localhost:5678/api/categories")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    app.categories = data;
    const filtre = document.getElementById("filtre");
    data.forEach(category =>{
      const button = document.createElement("button")
      button.textContent = category.name;
      button.dataset.id = category.id

      filtre.append(button);
    })
  })
  .then(function(){
      categorieEventListener();
  })

  function categorieEventListener(){
    const buttons = document.querySelectorAll("#filtre button")
    buttons.forEach(function(button) {
        button.addEventListener("click", function(event){
          const categoryId = event.srcElement.dataset.id
          const filtered = app.projets.filter(function(projet){
            if (categoryId !== "tous"){
              return projet.categoryId === parseInt(categoryId, 10);
              
            } else {
              return projet
            }
          })
          displayProjects(filtered);
          console.log(filtered)
        })
    })
    
  }

  function tousEventListener(){
    const tous = document.querySelectorAll(".tous")
    tous.forEach(function(button) {
        button.addEventListener("click", function(event){
          displayProjects();
        })
    })
  }

  function displayProjects(data){
    const gallery = document.getElementById("gallery");
    gallery.innerHTML=""
    data.forEach(projet =>{
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      img.src = projet.imageUrl;
      img.alt = projet.title;
      figcaption.innerText = projet.title;
      figure.append(img, figcaption);
      gallery.appendChild(figure);
    });
  }
