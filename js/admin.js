/* DEFINO PROPIEDADES DE MI OBJETO
    - titulo
    - descripcion
    - imagen
    - precio
    - fechaCreacion
    - categoria
    - id (automatico)
*/
const formularioProductoHTML = document.getElementById("formularioProducto")

formularioProductoHTML.addEventListener('submit', () => {
    
    alert(`Evento submit`)

})

const consolas = [
    {
        descripcion: 'Consola de hogar con gráficos en alta definición.',
        titulo: 'PlayStation 5',
        fechaDeCreacion: '2020-11-12',
        precio: 499.99,
        imagen: 'https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true',
        categoria: 'Consola de Hogar'
    },
    {
        fechaDeCreacion: '2017-03-03',
        descripcion: 'Consola portátil con pantalla táctil.',
        titulo: 'Nintendo Switch',
        precio: 299.99,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_625423-MLA47920375564_102021-O.webp',
        categoria: 'Consola Portátil'
    },
    {
        descripcion: 'Consola de hogar con alta potencia y compatibilidad hacia atrás.',
        titulo: 'Xbox Series X',
        fechaDeCreacion: '2020-11-10',
        precio: 499.99,
        imagen: 'https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png',
        categoria: 'Consola de Hogar'
    },
    {
        descripcion: 'Consola clásica miniaturizada con juegos preinstalados.',
        titulo: 'NES Classic Edition',
        fechaDeCreacion: '2016-11-10',
        precio: 59.99,
        imagen: 'https://m.media-amazon.com/images/I/81s7B+Als-L._SL1500_.jpg',
        categoria: 'Consola Retro'
    }
];
const tableBodyHTML = document.querySelector("#table-body")

// Crear una función que sea pintar elementos
// Blanquear el HTML
consolas.forEach(function(conso) {
    
    tableBodyHTML.innerHTML += 
        `<tr>
            <td class="table-image">
                    <img src="${conso.imagen}" alt="${conso.titulo}">
            </td>
            <td class="table-title">${conso.titulo}</td>
            <td class="table-description">${conso.descripcion}</td>
            <td class="table-price">${conso.precio}</td>
            <td class="table-category">${conso.categoria}</td>
        </tr>`

})





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