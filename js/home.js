const consolas = JSON.parse(localStorage.getItem("productos")) || []

consolas.forEach(console => document.write(console.titulo + "\n"))