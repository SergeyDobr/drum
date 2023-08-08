const docGet = (id) => document.getElementById(id);

const spin = docGet('spin');
const container = docGet('container');
let degreeRotationCircle = Math.ceil(Math.random() * 40) * 45;//Кгол поворота барабана
let currentPlayer = 1;//Номер игрока
const CIRCLE_ROTATION_TIME = 3000;// Время поворота барабана

spin.addEventListener('click', function () {
   container.style.transform = 'rotate(-' + degreeRotationCircle + 'deg)';
   const circleTransform = container.style.transform;
   degreeRotationCircle += Math.ceil(Math.random() * 10) * 45;
   disabledSpin()
   const currentPlayerElement = docGet(`player${currentPlayer}`);
   setTimeout(function () {
      currentPlayerElement.innerText = `Игрок ${currentPlayer}: ${calculateNumberOnCircle(circleTransform)}`
      currentPlayer++;
      setTimeout(function () {
         if (currentPlayer > 3) {
            alert(`Игрок ${calculateWinner()} победил!`)
            location.reload();
         }
      }, 500)
   }, CIRCLE_ROTATION_TIME);
});

// Блокируем кнопку Spin после нажатия, убираем блокировку после остановки колеса
const disabledSpin = () => {
   spin.disabled = true;
   setTimeout(function () {
      spin.disabled = false;
   }, CIRCLE_ROTATION_TIME)
}

// Вычесляем число на барабане
const calculateNumberOnCircle = (num) => {
   num = num.slice(8, -1);
   let result = (parseInt(num) / 45) + 1;
   while (result > 8) {
      result -= 8
   }
   return result
}

// Определение победителя
const calculateWinner = () => {
   const transformString = (i) => +docGet(i).textContent.slice(-1);
   const arrResults = [transformString('player1'), transformString('player2'), transformString('player3')];
   return arrResults.indexOf(Math.max(...arrResults)) + 1
}
