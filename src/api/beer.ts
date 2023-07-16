import axios from 'axios';
import type { Beer } from '../types'; 

const BASE_URL = 'https://api.punkapi.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getBeers = async (page: number):Promise<Beer[]> => {
    const { data } = await instance.get(`/v2/beers?page=${page}`);
    return data;
};