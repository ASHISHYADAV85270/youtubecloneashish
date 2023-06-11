import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {
        q: 'desp',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '228e84d839msh8586ded2048d487p1c6bd6jsn92ca9ce33ced',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};



export const fetchDataFromApi = async (url) => {
    const data = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(data);
    return data;
}