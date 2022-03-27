import {MAX_ITEM_ID} from './constants.js';
import {createRandomPhoto} from './data.js';
import {createPicturesFragment} from './pictures.js';
import './render-big-pictures.js';
import './form-validation.js';
import './upload-file.js';

const createData = createRandomPhoto(MAX_ITEM_ID);

const containerPictures = document.querySelector('.pictures');
containerPictures.appendChild(
  createPicturesFragment(createData),
);
