import axios from 'axios';

import GET_PHOTOS from '../constants/actionTypes';
import { API_KEY}  from '../constants/API_KEY';

export function getPhotos(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: GET_PHOTOS,
    payload: request
  };
}
