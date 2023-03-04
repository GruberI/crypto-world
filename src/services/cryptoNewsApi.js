import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "api-key",
  "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
};

const baseUrl = "https://crypto-news16.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (num) => createRequest(`/news/top/${num}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
