import React, { useEffect, useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import NewsCard from './NewsCard'

const News = ({ simplified }) => {

  const {data,isFetching} = useGetCryptoNewsQuery()

  const [news,setNews] = useState([])

  useEffect(()=>{
    simplified?setNews(data?.data?.slice(0,10)):setNews(data?.data)
  },[data,simplified])

  if(isFetching) return "Loading"

  return (
    <div className='p-6 flex items-center justify-center md:block'>
      {!simplified && <h1 className='mb-4 text-2xl font-bold'>Latest Crypto News</h1>}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-7'>
        {news?.map((news,idx)=>(
          <NewsCard news={news} key={idx}/>
        ))}
      </div>
    </div>
  )
}

export default News
