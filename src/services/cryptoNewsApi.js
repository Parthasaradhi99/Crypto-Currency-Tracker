import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '76160ff011msh3a476db7cee1b64p167ea7jsnc80d896e2c23',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com"

const createRequest = (url) => ({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints:(builder) => ({
        getCryptoNews: builder.query({
            query: ()=> createRequest(`v1/coindesk`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;