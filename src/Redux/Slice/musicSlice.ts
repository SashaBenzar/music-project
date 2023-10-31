import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Music } from 'Types/index';

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6436744c8205915d34f3e224.mockapi.io' }),
  endpoints: (builder) => ({
    getMusic: builder.query<Music[], string>({
      query: (param) => ({
        url: `music`,
      }),
    }),
  }),
});

export const { useGetMusicQuery } = musicApi;
