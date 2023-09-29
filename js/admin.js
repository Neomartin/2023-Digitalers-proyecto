/* DEFINO PROPIEDADES DE MI OBJETO
    - titulo
    - descripcion
    - imagen
    - precio
    - fechaCreacion
    - categoria
    - id (automatico)
*/
const consolas = [
    {
        id: '5f49fab9-3135-4676-a160-5c3fdbb1ae92',
        descripcion: 'Consola de hogar con gráficos en alta definición.',
        titulo: 'PlayStation 5',
        precio: 499.99,
        imagen: 'https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true',
        categoria: 'Consola de Hogar',
        fechaDeCreacion: '2020-11-12',
    },
    {
        id: '2e897bad-d4e4-413d-a515-ed95df9ad917',
        fechaDeCreacion: '2017-03-03',
        descripcion: 'Consola portátil con pantalla táctil.',
        titulo: 'Nintendo Switch',
        precio: 299.99,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_625423-MLA47920375564_102021-O.webp',
        categoria: 'Consola Portátil'
    },
    {
        id: 'fc3025ec-f314-4b63-9765-1e8df3ee358a',
        descripcion: 'Consola de hogar con alta potencia y compatibilidad hacia atrás.',
        titulo: 'Xbox Series X',
        fechaDeCreacion: '2020-11-10',
        precio: 499.99,
        imagen: 'https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png',
        categoria: 'Consola de Hogar'
    },
    {
        id: 'eec389d2-3d56-4b74-ae13-5d387a592048',
        descripcion: 'Consola clásica miniaturizada con juegos preinstalados.',
        titulo: 'NES Classic Edition',
        fechaDeCreacion: '2016-11-10',
        precio: 59.99,
        imagen: 'https://m.media-amazon.com/images/I/81s7B+Als-L._SL1500_.jpg',
        categoria: 'Consola Retro'
    }
];
const tableBodyHTML = document.querySelector("#table-body")
// Pintamos productos al cargar nuestro script por primera vez
pintarProductos()
const inputFiltrarHTML = document.getElementById("filtrar")

const formularioProductoHTML = document.getElementById("formularioProducto")

// !LISTENER EVENTO FORMULARIO
formularioProductoHTML.addEventListener('submit', (evt) => {

    evt.preventDefault()

    const el = formularioProductoHTML.elements;

    const nuevoProducto = {
        id: crypto.randomUUID(),
        titulo: el.tituloName.value,
        descripcion: el.descripcion.value,
        precio: el.precio.valueAsNumber,
        imagen: el.imagen.value,
        categoria: el.categoria.value,
        fechaDeCreacion: obtenerFecha(),
    }

    consolas.push(nuevoProducto)
    pintarProductos()
    formularioProductoHTML.reset()
    el.tituloName.focus()
})





function pintarProductos() {
    tableBodyHTML.innerHTML = "";

    consolas.forEach(function(conso, index) {
        tableBodyHTML.innerHTML += 
            `<tr>
                <td class="table-image">
                        <img src="${conso.imagen}" alt="${conso.titulo}">
                </td>
                <td class="table-title">${conso.titulo}</td>
                <td class="table-description">${conso.descripcion}</td>
                <td class="table-price">${conso.precio}</td>
                <td class="table-category">${conso.categoria}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="borrarProducto(${index})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                
                </td>
            </tr>`
    })
}


//Funcion para filtrar productos
inputFiltrarHTML.addEventListener('keyup', (evt) => {
    console.log(evt.target.value )
})

function borrarProducto(indiceRecibido) {
    consolas.splice(indiceRecibido, 1)
    pintarProductos()
}




function obtenerFecha() {
    const fecha = new Date()
    let mes = fecha.getMonth() + 1;
    if(mes < 10) {
        mes = '0'+ mes
    }
    let dia = fecha.getDate()
    if(dia < 10) {
        dia = '0' + dia
    }
    const year = fecha.getFullYear()

    const fechaFormateada = `${year}-${mes}-${dia}`
    return fechaFormateada
}



// 1- Deberiamos obtener el body de mi elemento html tbody
//Deberíamos por cada consola que tenga en mi array consolas debería pintar un tr


/*  <tr>
        <td class="table-image">
                <img src="https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true" alt="">
        </td>
        <td class="table-title">PS5</td>
        <td class="table-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, laudantium.</td>
        <td class="table-price">1000</td>
        <td class="table-category">Consolas</td>
    </tr> */

