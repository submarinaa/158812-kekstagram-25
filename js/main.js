import {createRandomPhoto} from './data.js';
import {MAX_ITEM_ID} from './constants.js';
import { createPicturesFragment } from './pictures.js';

const createData = createRandomPhoto(MAX_ITEM_ID);

const containerPictures = document.querySelector('.pictures');
containerPictures.appendChild(
  createPicturesFragment(createData),
);

export {createData};
