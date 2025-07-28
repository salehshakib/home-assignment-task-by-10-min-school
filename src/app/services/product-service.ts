import axios from 'axios';

import { productApi } from '@/app/api/endpoints/produt.api';

import { LangType } from '@/types/product.types';

export const fetchProductData = async (lang: LangType = 'en', slug: string) => {
  try {
    const { data } = await axios.get(`${productApi.GET_PRODUCT_DETAILS}/${slug}`, {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        Accept: 'application/json',
      },
      params: {
        lang,
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return null;
  }
};
