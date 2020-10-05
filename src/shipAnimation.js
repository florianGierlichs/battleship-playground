import createElement from './utils/createElement';
import ship1 from './assets/battleship 1.svg';
import ship2 from './assets/battleship 2.svg';
import ship3 from './assets/battleship 3.svg';

export default function shipAnimation() {
  const shipContainer = createElement('div', 'shipContainer');
  const ship = createElement('img', 'ship');

  const ships = [ship1, ship2, ship3];

  ship.src = ships[0];
  let i = 1;

  setInterval(() => {
    ship.src = ships[i];
    i++;

    if (i >= 3) {
      i = 0;
    }
  }, 10000);

  document.body.appendChild(shipContainer);
  shipContainer.appendChild(ship);
}
