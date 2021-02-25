import {
  createCardList,
  CARDS_QUANTITY
} from './data.js';

const PreviewsSizes = {
  WIDTH: 45,
  HEIGHT: 40,
};

const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const renderPopup = (popup) => {
  const popupElement = popupTemplate.cloneNode(true)
  const photosList = popupElement.querySelector('.popup__photos');
  const featuresList = popupElement.querySelector('.popup__features');

  const renderPhotoList = () => {
    photosList.textContent = '';
    popup.offer.photos.forEach((item, i) => {
      let photo = document.createElement('img');
      photo.src = popup.offer.photos[i];
      photo.classList.add('popup__photo');
      photo.alt = 'Изображение недвижимости';
      photosList.appendChild(photo);
      photo.style.width = `${PreviewsSizes.WIDTH}px`;
      photo.style.height = `${PreviewsSizes.HEIGHT}px`;
    });
  };

  const renderFeatureList = () => {
    featuresList.textContent = '';
    popup.offer.features.forEach((item, i) => {
      let feature = document.createElement('li');
      feature.classList.add('popup__feature', `popup__feature--${popup.offer.features[i]}`);
      featuresList.append(feature);
    });
  };

  popupElement.querySelector('.popup__title').textContent = popup.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = popup.offer.adress;
  popupElement.querySelector('.popup__text--price').textContent = `${popup.offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = popup.offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = `${popup.offer.rooms} комнаты для ${popup.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${popup.offer.checkin}, выезд до ${popup.offer.checkout}`;
  if (popup.offer.features.length) {
    renderFeatureList();
  }
  popupElement.querySelector('.popup__description').textContent = popup.offer.description;
  if (popup.offer.photos.length) {
    renderPhotoList();
  }
  popupElement.querySelector('.popup__avatar').src = popup.author.avatar;


  return popupElement;
}

const popupsList = document.querySelector('#map-canvas');
popupsList.appendChild(renderPopup(createCardList(CARDS_QUANTITY)[0]));
