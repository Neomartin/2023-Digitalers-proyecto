

localStorage.setItem("nombre", "Esmeralda Perez")
localStorage.setItem("currentUser", "Pedro Talio")

const nombreGuardado = localStorage.getItem("nombre")


Swal.fire('Bienvenido', `Que bueno verte de nuevo ${nombreGuardado}`)


// localStorage.removeItem("currentUser")

// localStorage.clear()



