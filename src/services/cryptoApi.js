import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeader = {
    'X-RapidAPI-Key': '76160ff011msh3a476db7cee1b64p167ea7jsnc80d896e2c23',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const createRequest = (url) => ({url,headers:cryptoApiHeader})

const baseUrl = "https://coinranking1.p.rapidapi.com"

export const cryptoApi = createApi({
    reducerPath:"cryptoApi",
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints:(builder) => ({
        getCryptos:builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query:(coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
        getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
        })
})
})

export const { useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery } = cryptoApi