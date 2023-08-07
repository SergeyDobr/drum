const docGet = (id) => document.getElementById(id);

const spin = docGet('spin');
const container = document.querySelector('.container');
let number = Math.ceil(Math.random() * 10) * 45;
let currentPlayer = 1;


spin.addEventListener('click', function () {
   container.style.transform = 'rotate(-' + number + 'deg)';
   let circle = container.style.transform
   number += Math.ceil(Math.random() * 10) * 45;

   const currentPlayerElement = docGet(`player${currentPlayer}`);
   setTimeout(function () {
      currentPlayerElement.innerText = `Игрок ${currentPlayer}: ${CalculateNumberOnCircle(circle)}`
      currentPlayer++;
      currentPlayer > 3 ? currentPlayer = 1 : currentPlayer;
   }, 2000);
});


// Вычесляем число на барабане
const CalculateNumberOnCircle = (num) => {
   num = num.slice(8, -1);
   let result = (parseInt(num) / 45) + 1;
   while (result > 8) {
      result -= 8
   }
   return result
}
