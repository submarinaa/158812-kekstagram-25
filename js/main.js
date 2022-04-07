import './render-big-pictures.js';
import './form-validation.js';
import './upload-file.js';
import './editor-picture.js';
import {createPicturesFragment} from './pictures.js';
import {getServerData} from './api.js';
import {filterPictures} from './filter.js';

getServerData(createPicturesFragment, filterPictures);
