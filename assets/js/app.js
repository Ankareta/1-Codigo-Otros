const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//faltaba un punto por ser clase
const $b = document.querySelector('.blog');//se cambio el "#" por "." porque es una clase
const $l = document.querySelector('.location');

//Se tiene que poner async antes de function porque solo se puede usar await si es una funcion asincrona
async function displayUser(username) {
  
  $n.textContent = 'cargando...';
  // try {
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();  // Agregamos  "await response.json()" para esperar la respuesta del servidor y guardar la informacion en la constante "data"
  console.log(data); 

  $n.textContent = data.name;
  $b.textContent = data.blog; 
  $l.textContent = data.location;
} //corregimos la sintaxis

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // se agregó el "$" antes de la n, como esta definida antes.
}

displayUser('stolinski').catch(handleError);
/* Este codigo llama a una API para obtener los datos: name, blog y location, en caso de error llama a la funcion handleError y mostrar en el DOM que algo salio mal*/