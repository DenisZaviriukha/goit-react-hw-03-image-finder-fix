import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/'
const apiKey = '34511401-bd67d16594b39460c59012a71'

export const fetchData = async (name, page, perPage = 12) => {
  const response = await axios.get('', {
    params: {
      key: apiKey,
      q: name,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: perPage
    }
  });
  const hits = response.data.hits;
  const result = hits.map(photo => {
    return {
      id: photo.id,
      webformatURL: photo.webformatURL,
      largeImageURL: photo.largeImageURL
    };
  });

  return result;};

