'use server';

import { cookies } from 'next/headers';

export const setCookie = (access_token: string) => {
  cookies().set('access_token', access_token);
};

export const getCookie = () => {
  return cookies().get('access_token');
};

export const removeCookie = () => {
  return cookies().delete('access_token');
};
