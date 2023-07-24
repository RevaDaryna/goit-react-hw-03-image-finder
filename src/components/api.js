import axios from "axios";

const API_KEY = '37042493-d40ef1c9aa66f0e5903968779'
axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params= {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
}

export const getData = async (query, page) => { const data = await axios.get(`?q=${query}&page=${page}`);
 return data.data}