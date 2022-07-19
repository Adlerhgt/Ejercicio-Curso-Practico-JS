const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({h1, p, parrafito, pid, input});

h1.innerHTML = 'Poriro <br> es cuchi y gordo';
h1.innerText = 'Poriro <br> es cuchi y gordo';

h1.getAttribute('attribute');
console.log(h1.getAttribute('attribute'));

h1.setAttribute('attribute', 'gordin');

//CUANDO SON CLASES EN ESPECIFICO PODEMOS USAR

// agregar una clase nueva 
h1.classList.add('rojo');

//remover una clase

//h1.classList.remove('rojo');
//h1.classList.toggle
//h1.classList.contains


input.value = "456";

const img = document.createElement('img');
img.setAttribute('src', 'https://static.keymusic.com/products/289030/XL/ibanez-rg1127pbfxcif.jpg?_ga=2.174031008.2026154900.1658247978-1505632472.1658247978');
console.log(img);

pid.append(img);