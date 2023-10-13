const productos = JSON.parse(localStorage.getItem("productos")) || []
const cardContainer = document.getElementById("card-container")
productos.forEach((prod) => {

    cardContainer.innerHTML += `
            <div class="card" style="width: 100%">
                    <img src="${prod.imagen}" class="card-img-top" alt="${prod.titulo}">
                    <div class="card-body">
                    <h5 class="card-title">${prod.titulo}</h5>
                    <p class="card-text">${prod.descripcion}</p>
                    <a href="/pages/product/description.html?identificador=${prod.id}" class="btn mr-2">
                        <i class="fas fa-link"></i> 
                            Ver más
                    </a>
                    <a href="#" class="btn "><i class="fab fa-github"></i> Comprar</a>
                    </div>
            </div>
    `


})



{/* <div class="card" style="width: 100%">
            <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Ver más</a>
              <a href="#" class="btn "><i class="fab fa-github"></i> Comprar</a>
            </div>
          </div> */}