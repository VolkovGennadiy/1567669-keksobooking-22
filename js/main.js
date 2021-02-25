import './data.js';

import {
  renderPopup
} from './rendercard.js';

import {
  createCardList,
  CARDS_QUANTITY
} from './data.js';

import './form.js';

const popupsList = document.querySelector('#map-canvas');
popupsList.appendChild(renderPopup(createCardList(CARDS_QUANTITY)[0]));
