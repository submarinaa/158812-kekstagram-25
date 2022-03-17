const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicturesFragment = function (picturesData) {
  const pictureFragment = document.createDocumentFragment();

  picturesData.forEach(({comments, likes, url}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__img').src = url;
    pictureFragment.appendChild(pictureElement);
  });

  return pictureFragment;
};

export {createPicturesFragment};
